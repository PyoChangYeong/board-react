import axios from 'axios'
import React, { useState } from 'react'

export default function Signup() {

    const [requestResult, setRequestResult] = useState<String>('');

    const signUpHandler = () =>{
        const data = {
        "email":"game1425@naver.com",
        "password":"@sdreew12",
        "nickname":"Se-mi",
        "phone_number":"sadf",
        "address":"sadfr",
        "addressDetail":"awetva"
        }
        axios.post('http://localhost:8080/signup', data)
        .then((response) =>{
            setRequestResult('Success!!')
        })
        .catch((error) =>{
            setRequestResult('Failed!!')
        })
    }


  return (
    <div>
        <h3>{requestResult}</h3>
        <button onClick={() => signUpHandler()}>회원가입</button>
    </div>
  )
}
