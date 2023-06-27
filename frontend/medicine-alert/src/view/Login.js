import React, {useState} from 'react';
import { Link } from "react-router-dom";


export const Login = () => {
  const [userData, setUserData] = useState(1);
  
  return(
    <div>
      <h2>ログイン画面</h2>
      <p>以下のアカウントでログインする</p>
      <Link to={{pathname: '/' + userData + "/main"}}>メイン画面へ</Link>
    </div>
  );
}