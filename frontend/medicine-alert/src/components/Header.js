import { Link, useParams } from 'react-router-dom';
import React from 'react';

export const Header = () => {
  const {userId} = useParams();

  //　固定されるヘッダ
  return(
    <div>
      <Link to={{pathname:"/main/" + userId}} >ロゴ</Link>
      <p>MENU{userId}</p>
      <ul>
        <li>
          <Link to={{pathname:"/main/" + userId}}>服薬チェック</Link>
        </li>
        <li>
          <Link to={{pathname:"/main/" + userId + "/medicine"}}>登録中のお薬</Link>
        </li>
        <li>
          <Link to="/">ログアウト</Link>
        </li>
      </ul>
    </div>
  );
}