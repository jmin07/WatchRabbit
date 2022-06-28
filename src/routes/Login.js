import styled from "../css/login.module.css"
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import img from "../img/backgif.gif";
import { postJWT } from "../api";

export default function Login() {
  const onSubmit = (e) =>{
    e.preventDefault();
    const id = e.target.id.value;
    const password = e.target.password.value;
    const data = "/auth/login"
    const porps = {path: data, userEamil: id, userPassword: password};
    postJWT(porps);
  }
    return (
        <Grid container height="100vh">
            <Grid className={styled.layoutside} xs><img src={img} alt='react' className={styled.gif}/></Grid>
            <Grid className={styled.layoutmain} xs={6}>
              <div className={styled.loginbox}>
                <h1 className={styled.titletext}>Login</h1>  
                <form className={styled.form} method="post" onSubmit={onSubmit}>
                  <input className={styled.inputstyle} name="id" id="id" type="text" placeholder="아이디" /><p />
                  <input className={styled.inputstyle} name="password" id="password" type="text" placeholder="비밀번호"/><p />
                  <button className={styled.mainbutton}>회원가입</button><button className={styled.mainbutton} type="submit">로그인</button>
                </form>       
                <p />
                <button className={styled.mainbutton}>구글로 로그인</button><p />
                <button className={styled.mainbutton}>카카오로 로그인</button><p />
                <Link to="/">비밀번호를 잃어버리셨나요?</Link>
              </div>
              <Link to="/" className={styled.gohome} >홈으로</Link>
            </Grid>
            <Grid className={styled.layoutside} xs><img src={img} alt='react' className={styled.gif}/></Grid>    
         </Grid>

    );
  }

