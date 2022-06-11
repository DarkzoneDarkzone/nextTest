import React from 'react'
import { getCookie, getCookies } from 'cookies-next'

export default function ForUser({user}) {
  return (
    <>
        <h1>username: {user.firstname}</h1>
    </>
  )
}

// eslint-disable-next-line @next/next/no-typos
export async function getServerSideProps(context){
    const cookie = context.req.headers.cookie
    const access_token = cookie.split('=')[1]
    const { userId } = context.params
    const url = `http://192.168.1.51:3000/api/getById/${userId}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
    const data = await response.json()
    return {
        props: {
            user: data.data.user
        }
    }
}
