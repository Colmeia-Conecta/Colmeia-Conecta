// Authentication utilities and context
// This will be connected to the backend API in the future

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  age: number
  course: string
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
}

// Store auth token in localStorage
export const setAuthToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("auth_token", token)
  }
}

export const getAuthToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("auth_token")
  }
  return null
}

export const removeAuthToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth_token")
  }
}

// API base URL - to be configured with environment variable
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://testejavags-2.onrender.com/usuario"
