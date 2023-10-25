import { useEffect,useState } from 'react';
import Navigation from '../Navigation'
import Authentication from '../Authentication'
import BoardMain from '../BoardMain'
import { useUserStore } from '../../stores';
import { useCookies } from 'react-cookie';
import axios from 'axios';

export default function MainLayout() {

  const [ boardResponse, setBoardResponse ] = useState<string>('');
  const [cookies] = useCookies();
  const {member} = useUserStore();
  const getBoarrd = async (token:string) =>{
    const requestOpption = {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }
    await axios.get('http://localhost:8080/board',requestOpption).then((response)=>{
      setBoardResponse(response.data);
    }).catch((error) => '')
    
  }

  useEffect(() =>{
    const token = cookies.accessToken;
    if(token){ getBoarrd(token);
    }else{
      setBoardResponse('');
    }
  },[cookies.accessToken])  


  return (
    <>
        <Navigation/>
        {member ? (<BoardMain/>) : (<Authentication/>)}
    </>
  )
}