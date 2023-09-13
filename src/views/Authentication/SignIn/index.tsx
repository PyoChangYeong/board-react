import React, { useState } from 'react'
import { useCookies } from 'react-cookie';

// mui.com
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import axios from 'axios';
import { useUserStore } from '../../../stores';


export default function SignIn() {
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [nickname,setNickname] =useState('')
    const [cookie,setCookies] = useCookies();

    
    const signInhandler =() =>{
        if(email.length === 0 || password.length === 0){
        alert('이메일과 비밀번호를 입력하세요')
        return;
    }

    
    const data = {
        email,
        password,
        nickname
    }
    axios
    .post("http://localhost:8080/login", data)
    .then((response) => {
      const accessToken = response.headers['authorization'];
      const refreshToken = response.headers['refresh_Token'];
      setCookies('AccessToken',accessToken)
      setCookies('RefreshToken', refreshToken); 

    })
    .catch((error) => {
      console.error('로그인 에러 : ' + error);
      alert('로그인에 실패했습니다.');
    });
}
  return (
    <Card sx={{minWidth:275,maxWidth:"50vw"}}>
        <CardContent>
            <Box>
                <TextField fullWidth label="Email" type="email" variant="standard" onChange={(e)=>{setEmail(e.target.value)}}/>
                <TextField fullWidth label="Email" type="password" variant="standard" onChange={(e)=>{setPassword(e.target.value)}}/>
            </Box>
        </CardContent>
        <CardActions>
        <Button fullWidth onClick={() => signInhandler()} variant="contained">로그인</Button>
        </CardActions>
    </Card>
  )
}
