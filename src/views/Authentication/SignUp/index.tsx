import axios from 'axios'
import React, { useState } from 'react'

// mui.com
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function Signup() {
    const [email,setEmail] = useState<String>('');
    const [password,setPassword] = useState<String>('');
    const [nickname,setNickname] = useState<String>('');
    const [phone_number,setPhone_number] = useState<String>('');
    const [address,setAddress] = useState<String>('');
    const [addressDetail,setAddressDetail] = useState<String>('');

    const signUpHandler = () =>{
        const data = {
        email,
        password,
        nickname,
        phone_number,
        address,
        addressDetail
        }
        axios.post('http://localhost:8080/signup', data)
        .then((response) =>{
        })
        .catch((error) =>{
        })
    }

  return (
    <Card sx={{ minWidth: 275, maxWidth: "50vw" }}>
        <CardContent>
        <Box>
        <TextField fullWidth label="Email" type='email' variant="standard" onChange={(e)=>setEmail(e.target.value)} />
        <TextField fullWidth label="Password" type='password' variant="standard" onChange={(e)=>setPassword(e.target.value)} />
        <TextField fullWidth label="NickName" variant="standard" onChange={(e)=>setNickname(e.target.value)} />
        <TextField fullWidth label="Phone_number" variant="standard" onChange={(e)=>setPhone_number(e.target.value)} />
        <TextField fullWidth label="Address" variant="standard" onChange={(e)=>setAddress(e.target.value)} />
        <TextField fullWidth label="AddressDetail" variant="standard" onChange={(e)=>setAddressDetail(e.target.value)} />
        <h3></h3>
     </Box>
        </CardContent>
        <CardActions>
        <Button fullWidth onClick={() => signUpHandler()} variant="contained">회원가입</Button>
            </CardActions>
    </Card>
    
  )
}
