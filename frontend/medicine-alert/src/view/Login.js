import React, {useState} from 'react';
import { Link } from "react-router-dom";


export const Login = () => {
  const [userData, setUserData] = useState(1);
  
  return(
    <div>
      <h2>ログイン画面</h2>
      <p>以下のアカウントでログインする</p>
      <p>{userData}</p>
      <Link to={{pathname: '/main/' + userData}}>メイン画面へ</Link>
    </div>
  );
}