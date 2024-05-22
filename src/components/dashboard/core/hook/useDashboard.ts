"use client"

import { useEffect } from "react"
import { toast } from 'sonner'


export function useDashboard() {
  useEffect(() => {
    if (!localStorage.getItem('first-login')) {
      toast.success('Welcome to your dashboard')
      // localStorage.removeItem('first-login')
    }
  }, [])

  return {

  }
}
