import React from 'react'
import styled from 'styled-components'
import {connect} from "react-redux";
import { signOutAPI } from '../actions';

function Header(props) {
  return (
    <Container>
        <Content>
            <Logo>
                <a href="/home"><img src="/images/home-logo.svg"></img></a>
            </Logo>
            <Search>
                <div>
                    <input type="text" placeholder='Search'></input>
                </div>
                <SearchIcon>
                    <img src="/images/search-icon.svg" alt="" />
                </SearchIcon>
            </Search>
            <Nav>
                <NavList>
                    <NavItem className='active'>
                        <a>
                            <img src='/images/nav-home.svg'></img>
                            <span>Home</span>
                        </a>
                    </NavItem>
                    <NavItem>
                        <a>
                            <img src='/images/nav-messaging.svg'></img>
                            <span>Messages</span>
                        </a>
                    </NavItem>
                    <NavItem>
                        <a>
                            <img src='/images/nav-network.svg'></img>
                            <span>My Network</span>
                        </a>
                    </NavItem>
                    <NavItem>
                        <a>
                            <img src='/images/nav-jobs.svg'></img>
                            <span>Jobs</span>
                        </a>
                    </NavItem>
                    <NavItem>
                        <a>
                            <img src='/images/nav-notifications.svg'></img>
                            <span>notifications</span>
                        </a>

                    </NavItem>
                    <User>
                        <a>
                            
                            {props.user && props.user.photoURL ? 
                            (<img src={props.user.photoURL} referrerPolicy="no-referrer"></img> )
                            :
                            (<img src="/images/user.svg"></img>)}
                            <span>Me<img src="/images/down-icon.svg"></img></span>
                            
                        </a>
                        <SignOut onClick={() => props.SignOut()}>
                            <a>
                                Sign Out
                            </a>
                        </SignOut>
                    </User>
                    <Work>
                        <a>
                        <img src="/images/nav-work.svg"></img>
                        <span>Work
                            <img src="/images/down-icon.svg"></img>
                        </span>
                        </a>
                        
                        
                    </Work>
                </NavList>
            </Nav>
        </Content>
    </Container>
  )
}
const mapStateToProps = (state) => {
    return {
        user:state.userState.user,
    };
};
const mapDispatchToProps = (dispatch) => ({
    SignOut:() => dispatch(signOutAPI()),
});


export default connect(mapStateToProps,mapDispatchToProps)(Header);










const Container = styled.div`
    background-color:white;
    border-bottom:1px solid rgb(0,0,0,0.08);
    left:0;
    padding:0 24px;
    z-index: index 100;
    width:100vw;
    top:0;
`
const Content = styled.div`
    display:flex;
    align-items:center;
    margin:0 auto;
    min-height:100%;

`
const Logo = styled.span`
margin-right:8px;
font-size:0px;
max-width:200px;
`
const Search = styled.span`
    //flex-grow:1;
    position:relative;
    height:70%;
    width:150px;
    max-width:300px;
    div{
        max-width:280px;
        input {
            height:40px;
            border:none;
            box-shadow:none;
            background-color:#eef3f8;
            border-radius:3px;
            width:150px;
            padding: 0 8px 0 40px;
            line-height:1.7%;
            font-size:14px;
            font-weight:500;
            border-color: #dce6f1;
            vertical-align:text-top;
        }
    }
`
const SearchIcon = styled.span`
    width:60px;
    height:60px;
    position:absolute;
    z-index:1;
    top:8px;
    left:10px;
    margin: 0;
    pointer-events:none;
    img{
        height:25px;
        width:25px;
    }
`
const Nav = styled.nav`
    margin-left:auto;
    display:block;
    @media (max-width:767px) {
        position:fixed;
        left:0;
        bottom:0;
        background:white;
        width:100%;
        
    }
`
const NavList = styled.ul`
    display:flex;
    max-width:750px;
    align-items:center;
    justify-content:center;
    padding-left:80px;
    padding-right:100px;
    @media (max-width:767px) {
        padding-right:0px;
        padding-left:0px;
    }
    .active {
        span:after{
        content:"";
        transform:scaleX(1);
            border-bottom:2px solid black;
            bottom:0;
            left:0;
            position:absolute;
            border-color:black;
            width:100%;
        }

    }

    
    
    
`

const NavItem = styled.li`

    
    display:flex;
    flex-wrap:none;
    align-items:center;

   
    
    
    a{
        cursor: pointer;
        align-items:center;
        //padding-left:17px;
        //margin-left:15px;
        right:17px;
        background:transparent;
        display:flex;
        flex-direction:column;
        font-size:12px;
        font-weight:400;
        justify-content:center;
        line-height:1.5;
        min-height:42px;
        min-width:80px;
        position:relative;
        text-decoration:none;
        span{
            font-weight:200;
            opacity:0.7;
            font-size:15px;
            text-decoration:none;
        }
        @media (max-width:767px){
            max-width:70px;
        }
        
    }
    &:hover,&:active{
        a{
            
            span{
                
                opacity:1;
                font-weight:500;
            }
        }
    }
       
`
const SignOut = styled.div`
    position:absolute;
    top:50px;
    border-radius: 0 0 5px 5px;
    height:40px;
    font-size:16px;
    font-weight:400;
    transition-duration:200ms;
    display:none;
    align-items:center;
    text-align:center;
    padding:0;
    a{
        background:gray;
        border-radius: 0 0 5px 5px;

    }

`
const User = styled(NavItem)`
    margin-left:20px;

    a > img{
        width:25px;
        height:25px;
        border-radius:50%;
        
    }
    span{
        display:flex;
        align-items:center;
    }
    &:hover{
        ${SignOut}{
            align-items:center;
            display:flex;
            justify-content:center;
        }
    }

`
const Work = styled(User)`
    margin-left:0px;
    
`
