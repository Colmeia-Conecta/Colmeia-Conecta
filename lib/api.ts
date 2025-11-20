// API Client for Golden Guy Backend
// This file contains all API calls to the Java Spring Boot backend

import { API_BASE_URL, getAuthToken } from "./auth"

// API Error handling
export class APIError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
    this.name = "APIError"
  }
}

// Generic fetch wrapper with auth token injection
async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getAuthToken()
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    throw new APIError(response.status, await response.text())
  }

  return response.json()
}

// Auth API
export const authAPI = {
  register: async (data: {
    firstName: string
    lastName: string
    age: number
    email: string
    password: string
    course: string
  }) => {
    return apiFetch("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    })
  },

  login: async (data: { email: string; password: string }) => {
    return apiFetch<{
      token: string
      refreshToken: string
      user: {
        id: string
        firstName: string
        lastName: string
        email: string
        age: number
        course: string
      }
    }>("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    })
  },

  refreshToken: async (refreshToken: string) => {
    return apiFetch("/auth/refresh", {
      method: "POST",
      body: JSON.stringify({ refreshToken }),
    })
  },
}

// Users API
export const usersAPI = {
  getProfile: async (userId: string) => {
    return apiFetch(`/users/${userId}`, {
      method: "GET",
    })
  },

  updateProfile: async (
    userId: string,
    data: {
      firstName: string
      lastName: string
      age: number
      email: string
      course: string
    },
  ) => {
    return apiFetch(`/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify(data),
    })
  },

  getFavorites: async (userId: string) => {
    return apiFetch(`/users/${userId}/favorites`, {
      method: "GET",
    })
  },

  addFavorite: async (userId: string, vagaId: string) => {
    return apiFetch(`/users/${userId}/favorites`, {
      method: "POST",
      body: JSON.stringify({ vagaId }),
    })
  },

  removeFavorite: async (userId: string, favoriteId: string) => {
    return apiFetch(`/users/${userId}/favorites/${favoriteId}`, {
      method: "DELETE",
    })
  },
}

// Vagas API
export const vagasAPI = {
  list: async (params?: {
    course?: string
    level?: string
    location?: string
    q?: string
    page?: number
    size?: number
  }) => {
    const queryParams = new URLSearchParams()
    if (params?.course) queryParams.append("course", params.course)
    if (params?.level) queryParams.append("level", params.level)
    if (params?.location) queryParams.append("location", params.location)
    if (params?.q) queryParams.append("q", params.q)
    if (params?.page) queryParams.append("page", params.page.toString())
    if (params?.size) queryParams.append("size", params.size.toString())

    const query = queryParams.toString()
    return apiFetch(`/vagas${query ? `?${query}` : ""}`, {
      method: "GET",
    })
  },

  getById: async (vagaId: string) => {
    return apiFetch(`/vagas/${vagaId}`, {
      method: "GET",
    })
  },

  create: async (data: {
    title: string
    company: string
    description: string
    level: string
    location: string
    tags: string[]
    course: string
    salary?: string
    type: string
  }) => {
    return apiFetch("/vagas", {
      method: "POST",
      body: JSON.stringify(data),
    })
  },
}

// Contact API
export const contactAPI = {
  sendMessage: async (data: {
    name: string
    email: string
    subject: string
    message: string
  }) => {
    return apiFetch("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    })
  },
}
