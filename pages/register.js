import React from "react";
import Swal from "sweetalert2";

export default function Register() {

  function register(){
    let data = {
      firstname: document.querySelector('#firstname').value,
      lastname: document.querySelector('#lastname').value,
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value
    }
    /* will validate data before create */
    onRegister(data)
  }

  async function onRegister(_param){
    console.log(_param)
    const url = `http://192.168.1.51:3000/api/create`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(_param)
    })
    const data = await response.json()
    if(data.status){
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
      <h1>Register</h1>
      <form className="row g-3">
        <div className=""> 
            <label htmlFor="firstname" className="visually">firstname</label>
            <input type="text" className="" id="firstname"/>
        </div>
        <div className="">
            <label htmlFor="lastname" className="visually">lastname</label>
            <input type="text" className="" id="lastname"/>
        </div>
        <div className="">
            <label htmlFor="Email" className="visually">Email</label>
            <input type="text" className="" id="email"/>
        </div>
        <div className="">
            <label htmlFor="password" className="visually">Password</label>
            <input type="password" className="" id="password"/>
        </div>
        <div className="">
            <button type="button" onClick={register} className="btn btn-primary mb-3">Register</button>
        </div>
    </form>
    </>
  );
}
