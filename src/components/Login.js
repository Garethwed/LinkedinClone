import React from 'react'
import styled from "styled-components"
import {connect } from "react-redux";
import { signInAPI } from '../actions';
import {Route,Routes, Navigate} from "react-router";

function Login(props) {
  return (
    <Container>
    
        {
          props.user &&
            <Navigate to="/home"></Navigate>
        }
        <Nav>
            <a href="/">
                <img src="/images/login-logo.svg"></img>
            </a>
            <div>
                <Join>Join now</Join>
                <SignIn>Sign in</SignIn>
            </div>
        </Nav>
        <Section>
            <Hero>
                <h1>Welcome to your professional community</h1>
                <img src='/images/login-hero.svg'></img>
            </Hero>
            <Form>
                <Google onClick={() => props.SignIn()}>
                    <img src="/images/google.svg"></img>
                    Sign in with Google
                </Google>
            </Form>
        </Section>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    user:state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  SignIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
//export default Login



const Container = styled.div`
    padding:0px;

`

const Nav = styled.nav`
max-width:1128px;
margin:auto;
padding:12px 0 16px;
display:flex;
align-items:center;
position:relative;
justify-content:space-between;
flex-wrap:no-wrap;

& > a  {
    width:135px;
    height:35px;
    @media(max-width:767px) {
        padding: 0 5px;
    }
}
`
const Join = styled.a`
    width:135px;
    height:35px;
    text-align:center;
    font-size:20px;
    padding:10px 12px;
    cursor: pointer;
    text-decoration:none;
    font-weight:bold;
    border-radius:5px;
    color:rgb(0,0,0,0.8);
    margin-right:12px;
    &:hover{
        background-color:rgb(0,0,0,0.2);
        color:rgb(0,0,0,1);

    }

`
const SignIn = styled.a`
     width:135px;
    height:35px;
    text-align:center;
    font-size:20px;
    padding:10px 12px;
    font-weight:bold;

    text-decoration:none;
    cursor: pointer;
    border-radius:20px;
    border:1px solid blue;
    color:blue;
    margin-right:12px;
    opacity:0.8;
    &:hover{
        background-color:rgb(0,0,0,0.2);
        opacity:1;

    }

`
const Section = styled.section`
    display:flex;
    padding-bottom:100px;
    min-height:400px;
    padding-top:0;
    position:relative;
    flex-wrap:wrap;
    width:100%;
    max-width:1128px;
    align-items:center;
    margin:auto;
    @media (max-width:767px){
        //min-height:0px;
    }

`
const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`