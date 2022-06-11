import React from 'react'
import Swal from 'sweetalert2'
import { setCookies } from 'cookies-next'

export default function Login() {

    function signin(){
        let data = {
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value,
        }
        onSignin(data)
    }
    async function onSignin(_param){
        const url = `http://192.168.1.51:3000/api/login`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(_param)
        })
        const data = await response.json()
        console.log(data)
        if(data.status){
            setCookies('access_token', data.data.access_token)
            Swal.fire({
                title: data.description,
                icon: 'success',
                timer: 1000,
                showConfirmButton: false
            })
        } else {
            Swal.fire({
                title: data.description,
                icon: 'error',
                timer: 1000,
                showConfirmButton: false
            })
        }
    }

    return (
        <>
        <h1>login</h1>
        <form className="row g-3">
            <div className="col-auto">
                <label htmlFor="email" className="visually-hidden">Email</label>
                <input type="text" className="form-control" id="email" defaultValue="fffff@gmail.com"/>
            </div>
            <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                <input type="password" className="form-control" id="password"  defaultValue="123456"/>
            </div>
            <div className="col-auto">
                <button type="button" onClick={signin} className="btn btn-primary mb-3">Sign in</button>
            </div>
        </form>
        </>
    )
}
