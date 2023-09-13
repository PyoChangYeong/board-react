import React, { useState } from 'react'
import Signup from './SignUp'
import Box from '@mui/material/Box'
import SignIn from './SignIn'

export default function Authentication() {
  // authView : true == Signup / false == signIn
  const [authView, setAuthView] = useState<boolean>(false);
  return (
    <>
      <Box display='flex' height='100vh'>
        <Box flex={1} display='flex' justifyContent='center' alignItems='center'>

        </Box>
        <Box flex={1} display='flex' justifyContent='center' alignItems='center'>
          {authView ? (<Signup />) : (<SignIn />)}        
        </Box>
      </Box>

    </>
  )
}
