import React, { useState } from 'react'
import Box from '@mui/material/Box'
import SignIn from './SignIn'
import Signup from './SignUp';

export default function Authentication() {
  // authView : true == Signup / false == signIn
  const [authView, setAuthView] = useState<boolean>(true);
  return (
    <>
      <Box display='flex' height='100vh'>
        <Box flex={1} display='flex' justifyContent='center' alignItems='center'>

        </Box>
        <Box flex={1} display='flex' justifyContent='center' alignItems='center'>
          {authView ? (<Signup setAuthView={setAuthView}/>) : (<SignIn setAuthView={setAuthView}/>)}        
        </Box>
      </Box>

    </>
  )
}
