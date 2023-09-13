import axios from "axios";
import { async } from "q";

export const signInApi = async(data:any) =>{

    const response = await axios.post("http://localhost:8080/login",data).catch((error)=> null);
    if(!response) return null;

    const result = response.data;
    return result;

    // await axios
    // .post("http://localhost:8080/login", data)
    // .then((response) => {
    //   const accessToken = response.headers['authorization'];
    //   const refreshToken = response.headers['refresh_Token'];
    //   setCookies('AccessToken', accessToken)
    //   setCookies('RefreshToken', refreshToken);

    // })
    // .catch((error) => {
    //   console.error('로그인 에러 : ' + error);
    //   alert('로그인에 실패했습니다.');
    // });
// }
}
