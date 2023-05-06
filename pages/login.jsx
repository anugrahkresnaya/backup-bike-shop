import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Login = () => {
  const router = useRouter()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios
      .post('http://localhost:3001/login', {
        email: emailValue,
        password: passwordValue,
      })
      .then((result) => {
        console.log(result)
        localStorage.setItem('token', result.data.accessToken)
        localStorage.setItem('userEmail', result.data.user)
        if (result.status === 200) {
          router.push('/')
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <main className="border border-black rounded">
        <h1>Login</h1>
        <form method="post" onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="border"
            onChange={(e) => {
              setEmailValue(e.target.value)
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="border"
            onChange={(e) => {
              setPasswordValue(e.target.value)
            }}
          />
          <button type="submit" className="w-fit border">
            Sign in
          </button>
        </form>
      </main>
    </div>
  )
}

export default Login
