import React from 'react'
import styled from "styled-components"

function Main() {
  return (
    <Container>
      <ShareBox>
          <div>
            <img src="/images/user.svg"></img>
            <button>Start a post</button>
          </div>
          <div>
            <button>
              <img src='/images/photo-icon.svg'></img>
              <span>Photo</span>
            </button>
            <button>
              <img src='/images/video-icon.svg'></img>
              <span>Video</span>
            </button>
            <button>
              <img src='/images/event-icon.svg'></img>
              <span>Event</span>
            </button>
            <button>
              <img src='/images/article-icon.svg'></img>
              <span>Write an article</span>
            </button>



          </div>
         
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
            <img src='/images/user.svg'></img>
            <div className='spans'>
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
            </a>
            <button>
            <img src='/images/ellipsis.svg' className='ellipse'></img>
            </button>
            </SharedActor>
            <Description>Description</Description>
            <SharedImg>
              <a>
                <img src='images/shared-background.png'></img>
              </a>
            </SharedImg>
            <SocialCount>
              <li>
                <button>
                  <img className="likeicon" src='images/like-icon.jpg'></img>
                  <img className="reacticon" src="images/clap-icon.png" ></img>
                  <span>5</span>
                </button>
              </li>
              <li className='comments'>
                <a>
                  2 comments
                </a>
              </li>
            </SocialCount>
            <SocialActions>
              <button className='LikeButton'>
                <img src="/images/social-like-icon.PNG"></img>
                <span>Like</span>
              </button>
              <button className='CommentButton'>
                <img src="/images/social-comment-icon.PNG"></img>
                <span>Comment</span>
              </button>
              <button className='ShareButton'>
                <img src="/images/social-share-icon.PNG"></img>
                <span>Share</span>
              </button>
              <button className='SendButton'>
                <img src="/images/social-send-icon.PNG"></img>
                <span>Send</span>
              </button>
            </SocialActions>
            

          </Article>
      </div>
    </Container>
  )
}

export default Main
const Container = styled.div`
    grid-area: Main;
`
const CommonCard = styled.div`
  text-align:center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color:#fff;
  border-radius:5px;
  position:relative;
  border:none;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 30%),0 0 0 rgb(0 0 0 /50%);

`
const ShareBox = styled(CommonCard)`
  display:flex;
  flex-direction:column;
  color:#958b7b;
  margin: 0 0 8px;
  background:white;
  div{
    button{
      outline:none;
      color:rgba(0,0,0,0.6);
      font-size:14px;
      line-height:1.5;
      min-height:45px;
      background:transparent;
      border:none;
      display:flex;
      align-items:center;
      font-weight:600;
      
    }
    &:first-child{
      display:flex;
      align-items:center;
      img{
        width:48px;
        border-radius:50%;
        margin-right:8px;
      }
      button{
        margin:4px 0px;
        flex-grow:1;
        border-radius:35px;
        padding-left:14px;
        margin-right:5px;
        border:1px solid rgba(0,0,0,0.3);
      }
      
    }
    &:nth-child(2){
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        padding-bottom:5px;
        button{
          img{
            margin-right:3px;
          }
        }
    }
    
    
  }

`
const Article = styled(CommonCard)`
  padding:0;
  margin: 0px 0px 8px;
  overflow: visible;
  //max-width:700px;

`
const SharedActor = styled.div`
  padding-right:40px;
  
  flex-wrap:nowrap;
  padding:12px 16px 0px;
  margin-bottom:8px;
  align-items:color-interpolation-filters;
  display:flex;
  a{
    margin-right:12px;
    //border: 1px solid rgba(0,0,0,0.3);
    overflow:hidden;
    display:flex;
    img{
      width:48px;
      height:48px;
    }
  }
  .spans{
    display:flex;
    flex-direction:column;
    flex-grow:1;
    flex-basis:0;
    margin-left:6px;
    overflow:hidden;
    span{
      text-align:left;
      &:first-child{
        font-size:14px;
        font-weight:700;
        color:rgba(0,0,0,1);
      }
      &:nth-child(n+1){
        font-size:14px;
        color:rgba(0,0,0,0.6);
      }
    }
  }
  button{
    position:absolute;
    right:5px;
    top:0px;
    border:none;
    outline:none;
    width:40px;
  }
  .ellipse{
    //max-height:20px;
  }
`
const Description = styled.div`
  padding:0 16px;
  overflow:hidden;
  text-align:left;
`

const SharedImg = styled.div`
  margin-top:8px;
  width:100%;
  display:block;
  position:relative;
  background-color:#f9fafb;
  img{
    object-fit:contain;
    width:100%;
    height:100%;
    max-height:700px;
  }
`
const SocialCount = styled.ul`
  line-height:1.3;
  display:flex;
  align-items:center;
  overflow:auto;
  margin:0 16px;
  padding:8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style:none;
  li{
    margin-right:5px;
    font-size:12px;
    button{
      display:flex;
      align-items:center;
      
      span{
        font-size:16px;
        padding-left:3px;
      }
    }
  }
  .comments{
    a{
      right:0;
    }
  }
  .likeicon{
    width:35px;
    margin-right:-5px;
  }
  .reacticon{
    width:23px;

  }
`
const SocialActions = styled.div`
  align-items:center;
  display:flex;
  justify-content:space-evenly;
  margin:0;
  min-height:40px;
  padding:4px 8px;
  
  button{
    display:inline-flex;
    align-items:center;
    //padding:0px 5px;
    //margin:5px;
    border:none;
    color: #0a66c2;
    img{
      //height:40px;
      width:40px;
    }
    span{
      font-size:16px;
    }

  }
`