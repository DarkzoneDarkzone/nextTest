import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="ml-4" aria-current="page" href="/">Home</Link>
        {'  |  '}
        <Link className="nav-link" href="/register">Register</Link>
        {'  |  '}
        <Link className="nav-link" href="/login">Login</Link>
    </nav>
    </>
  )
}
