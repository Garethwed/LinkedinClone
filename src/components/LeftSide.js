import React from 'react'
import styled from "styled-components"

function LeftSide(props) {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground></CardBackground>
          <a>
            <Photo></Photo>
            <Link>Welcome,Name!</Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt=""></img>
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt=""></img>
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg"></img>
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
      </Container>
  )
}

export default LeftSide
const Container = styled.div`
  //background-color:orange;
    grid-area: Left;
    padding-left:5px;
    padding-right:5px;
`
const ArtCard = styled.div`
  text-align:center;
  overflow: hidden;
  margin-bottom:8px;
  background-color:#fff;
  background-repeat:no-repeat;
  border-radius:5px;
  
  transition: box-shadow 83ms;
  position: relative;
  border:none;
  box-shadow: 0 0 0 1px rgb(0 0 0/15%),0 0 0 rgb(0 0 0/40%);
`
const UserInfo = styled.div`
  border-bottom:1px solid rgb(0,0,0,0.2);
  padding:12px 12px 16px;
  word-wrap:break-word;



`
const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position:center;
  background-size:462px;
  height:54px;
  margin:-12px -12px 0;
`
const Photo = styled.div`
  box-shadow:none;
  background-image:url("/images/photo.svg");
  width:70px;
  height: 70px;
  box-sizing:border-box;
  background-clip:content-box;
  background-position:center;
  background-color:white;
  background-size:60%;
  background-repeat:no-repeat;
  border:2px solid white;
  margin:-38px auto 12px;
  border-radius:50%;
`
const Link = styled.div`
  font-size:16px;
  line-height:1.5%;
  color:rgb(0,0,0,0.9);
  font-weight:600;
`
const AddPhotoText = styled.div`
  color:#0a66c2;
  margin-top:12px;
  font-size:12px;
  line-height:1.3;
  font-weight:400;

`
const Widget = styled.div`
  border-bottom:1px solid white;
  padding-top:12px;
  padding-bottom:12px;
  & > a {
    text-decoration:none;
    display:flex;
    justify-content:space-between;
    padding:5px 10px;
    &hover{
      background-color:rgba(0,0,0,0.08);
    }
    span{
      display:flex;
      text-align:left;
      font-size:12px;
      line-height:1.3;
      &:first-child{
        color:rgba(0,0,0,0.6);
      }
      &:nth-child(2){
        color:rgb(0,0,0,1);
      }
      &:hover{
      background-color:rgb(0,0,0,0.1);
      cursor:pointer;
      
      
    }
    }
  }
`
const Item = styled.a`
  border-color: rgba(0,0,0,0.8);
  text-align:left;
  display:flex;
  padding:12px;
  font-size:12px;
  span{
    display:flex;
    align-items:center;
    cursor: pointer;
    &:hover{
      background-color:rgb(0,0,0,0.08);
      
      
    }
  }
`
const CommunityCard = styled(ArtCard)`
  text-align:left;
  display:flex;
  flex-direction:column;
  padding-top:8px;
  a{
    padding:4px 12px 4px 12px;
    font-size:12px;
    &:hover{
      cursor: pointer;
      color:#0a66c2;
    }
    span{
      display:flex;
      align-items:center;
      justify-content:space-between;
    }
    &:last-child{
      color:rgba(0,0,0,0.6);
      text-decoration:none;
      border-top:1px solid #d6cec2;
      padding:12px;
      &:hover {
        background-color: rgba(0,0,0,0.08);
      }

    }
  }
`