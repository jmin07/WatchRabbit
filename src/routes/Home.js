import styled from "../css/home.module.css"
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import img from "../img/WR.png";

export default function Home() {
    return (
        <Grid container height="100vh">
            <Grid className={styled.layoutside} xs></Grid>
            <Grid className={styled.layoutmain} xs={6}>
              <div className={styled.title}>
                <img className={styled.img} src={img} alt='React' /> 
                <div className={styled.titletext}>Watch Rabbit</div>
                  <select className={styled.selectstyle}>
                    <option>전국</option>
                    <option>서울</option>
                    <option>안양</option>
                  </select>
                  <select className={styled.selectstyle}>
                    <option>전체</option>
                    <option>가산동</option>
                    <option>평촌동</option>
                  </select>
                    <input className={styled.inputstyle} type="text" placeholder="검색어를 입력하세요" />
                    <button className={styled.inputbutton}>검색</button>
                    <button className={styled.mainbutton}>메인 페이지로</button>
              </div>
              <Link to="/login" className={styled.gologin} >로그인 페이지로</Link>
            </Grid>
            <Grid className={styled.layoutside} xs></Grid>    
         </Grid>

    );
  }

