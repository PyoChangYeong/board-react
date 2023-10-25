import React, { useState } from 'react'
import { useCookies } from 'react-cookie';

// mui.com
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Typography from '@mui/material/Typography';


interface Props{
  setAuthView: (authView: boolean) =>void,
}

export default function SignIn(props:Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [cookie, setCookies] = useCookies();

  const {setAuthView} = props;

  const signInhandler = () => {
    if (email.length === 0 || password.length === 0) {
      alert('이메일과 비밀번호를 입력하세요')
      return;
    }


    const data = {
      email,
      password,
      nickname
    }
    axios
      .post("3.37.240.93:8080/login", data)
      .then((response) => {
        const accessToken = response.headers['authorization'];
        const refreshToken = response.headers['refresh_Token'];
        setCookies('AccessToken', accessToken)
        setCookies('RefreshToken', refreshToken);

      })
      .catch((error) => {
        console.error('로그인 에러 : ' + error);
        alert('로그인에 실패했습니다.');
      });
  }
  return (
    <Card sx={{ minWidth: 275, maxWidth: "50vw", padding: 5 }}>
      <Box>
        <Typography variant='h5'>로그인</Typography>
      </Box>
      <Box height='50vh'>
        <TextField fullWidth label="Email"
          type="email" variant="standard"
          onChange={(e) => { setEmail(e.target.value) }} />
        <TextField fullWidth label="Email" type="password" variant="standard" onChange={(e) => { setPassword(e.target.value) }} />
      </Box>
      <Box component='div'>
        <Button fullWidth onClick={() => signInhandler()} variant="contained">로그인</Button>
      </Box>
      <Box component='div' display='flex' mt={2}>
        <Typography>신규 사용자 이신가요?</Typography>
        <Typography fontWeight={800} ml={1} onClick={() => setAuthView(true)}>회원가입</Typography>
      </Box>
    </Card>
  )
}
