import { Link } from "react-router-dom";

export const Lp = () =>{
  return(
    <div>
      <Link to="/memberRegist">新規登録</Link>
      <Link to="/login">ログイン</Link>
    </div>
  );
}