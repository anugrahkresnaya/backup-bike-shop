import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Test = () => {
  const router = useRouter()
  const logout = async (e) => {
    e.preventDefault()
    localStorage.clear()
    router.push('/login')
  }
  // const getToken = localStorage.getItem('token')
  // useEffect(() => {
  //   const getToken = localStorage.getItem('token')
  //   if (getToken === null) {
  //     router.push('/login')
  //   }
  //
  //   console.log('token', getToken)
  //
  //   // if (!isLoggedIn) {
  //   //   router.replace('/login')
  //   // }
  // }, [router])

  return (
    <div>
      <h1>should in private</h1>
      <button type="button" onClick={logout}>
        logout
      </button>
    </div>
  )
}

export default Test
