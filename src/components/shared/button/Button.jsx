"use client"

import React from 'react'
function Button() {
    const logout = ()=>{
      localStorage.removeItem('user')
      window.location.reload()
    }
  return (
    <button onClick={logout}  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
    LogOut
  </button>
  )
}

export default Button
