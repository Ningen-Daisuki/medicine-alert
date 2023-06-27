import { Link, useParams } from 'react-router-dom';
import React from 'react';


export const Header = () => {
  const {userId} = useParams();
  console.log(JSON.stringify(userId));
  //　固定されるヘッダ
  return(
    <div>
      <Link to={{pathname:"/" + {userId} + "/main"}} >ロゴ</Link>
      <p>MENU</p>
      <ul>
        <li>
          <Link to={{pathname:"/" + {userId} + "/main/alert"}}>服薬チェック</Link>
        </li>
        <li>
          <Link to={{pathname:"/" + {userId} + "/main/medicine"}}>登録中のお薬</Link>
        </li>
        <li>
          <Link to="/">ログアウト</Link>
        </li>
      </ul>
    </div>
  );
}