import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsThreeDots,BsBookmark,BsCodeSlash,BsEyeSlashFill,BsFlagFill,BsPlusLg,BsFillHeartFill,BsFillHandThumbsUpFill,BsHandThumbsUp,BsArrowLeftRight,BsPencilSquare,BsStarFill ,BsFillEyeFill} from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { RiCloseCircleFill,RiHandHeartLine,RiSendPlaneFill,RiDeleteBin6Fill } from "react-icons/ri";
import { BiMessageRoundedDetail,BiRepost,BiPencil } from "react-icons/bi";
import Commentcom from './Commentcom';
import { useSelector,useDispatch } from "react-redux";
import { doc, deleteDoc } from "firebase/firestore";
import { store } from '../configure/firebaseConfig';
import db from '../configure/firebaseConfig';
import {  ref, deleteObject } from "firebase/storage";
import { postThunk } from '../reduxslic/postSlice';


export default function Singlepost(props) {
  let {id,imageName,postDescription,postURL,userEmail,userProfile,usrName}=props.post;
  let postOpt=props.postOpt;
  let postOptFun=props.postOptFun;
  let dispatch=useDispatch();
  let {allPost}=useSelector((state)=>state.postManager);
  let{logUser}=useSelector((state)=>state.logUserManager);
  let[postseating,setPostseating]=useState(false);
  let[commentboxstate,setCommentboxstate]=useState(false);
  let[repostdropstate,setRepostdropstate]=useState(false);

  let[ownPostStatus,setOwnPostStatus]=useState(false);
  let[commentState,setCommentState]=useState();

  let handlePostseating=()=>{
    setPostseating((state)=>!state); 
  }
  let handleCommentboxshow=(id)=>{
    setCommentboxstate(true);
    setCommentState(id)
  }
  let handlerepostdrop=()=>{
    setRepostdropstate((state)=>!state)
  }
  let handleownPostseating=(id)=>{
     setOwnPostStatus((state)=>!state);
     postOptFun(id);
    
  }
  let handelCommentState=(id)=>{
    setCommentState(id)
  }
  let handelDeletePost=async(idpar)=>{
   let deletePost=allPost.filter((post)=>post.id===idpar);
   let[{id,imageName}]=deletePost;
   
   try{
     await deleteDoc(doc(db,'post',id));
     await deleteObject(ref(store,imageName));
     setOwnPostStatus((state)=>!state);
     dispatch(postThunk());
   }catch(err){
    console.log(err);
   }
  }



  return (
    <>
          <Postcontainer >
            <Posttopstatus>
              <div className='posttopstatusdetails'>
                <Link to='' className='posttoplogo'>
                  <img src='https://media.licdn.com/dms/image/C4E0BAQHbHlLwL6DNEA/company-logo_100_100/0/1569597462853?e=1683763200&v=beta&t=1yLipvSzE-brlWWDpTruv3fFwHqoFhMbFLSqMoYGvBI' alt=''/>
                </Link>
                <span>
                  <Link to=''>Cotiviti</Link>
                  <p>likes this</p>
                </span>
              </div>
              <div className='righttoppost'>
                <span onClick={handlePostseating}>
                <i><BsThreeDots/></i>
                </span>
                <ul className={`${postseating===false?("postulstatus"):null}`}>
                  <li><Link to=''><i><BsBookmark/></i>Save</Link></li>
                  <li><Link to=''><i><HiLink/></i>Copy link to post</Link></li>
                  <li><Link to=''><i><BsCodeSlash/></i>Embed this post</Link></li>
                  <li><Link to=''><i><BsEyeSlashFill/></i>I don't want to see this</Link></li>              
                  <li><Link to=''><i><RiCloseCircleFill/></i>Mute Vasaloppet</Link></li>
                  <li><Link to=''><i><BsFlagFill/></i>Report post</Link></li>
                </ul>
              </div>
              
            </Posttopstatus>
            <Postbox>
              <Posttitle>
                <Link to=''>
                  <Posteduserprofile>
                    <div>
                      {
                        (userProfile)?(<img src={userProfile}/>):(<img src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='/>)
                      }
                    
                    </div>
                 
                  </Posteduserprofile>
                  <Posteduserinfo>
                    <div className='username'><h5>{usrName} </h5><p><i></i></p></div>
                    <div className='userdetails'><p ><br/>
                    <span> </span></p>
                    </div>
  
                  </Posteduserinfo>
                </Link>
                <Rightposttitle>
                  <Userfollowbtn>
                    <i><BsPlusLg/></i>Follow
                  </Userfollowbtn>
                  <div className='postsetting'>
                    <span onClick={()=>handleownPostseating(id)}>
                    <i><BsThreeDots/></i> 
                    </span>
                    {
                      (ownPostStatus&&postOpt==id)?(
                        <ul >
                        <li><Link to=''><i><BsStarFill/></i>Feature on top of profile</Link></li>
                        <li><Link to=''><i><BsBookmark/></i>Save</Link></li>
                        <li><Link to=''><i><HiLink/></i>Copy link to post</Link></li>
                        <li><Link to=''><i><BsCodeSlash/></i>Embed this post</Link></li>
                        {
                          (userEmail===logUser.email)?( <li><Link to=''><i><BiPencil/></i>Edit post</Link></li> ):null 
                        }
                          {
                          (userEmail===logUser.email)?(<li><Link to='' onClick={()=>handelDeletePost(id)}><i><RiDeleteBin6Fill/></i>Delete post</Link></li>            
                          ):null 
                        }
                      
                        <li><Link to=''><i><BiMessageRoundedDetail/></i>Who can comment on this post?</Link></li>
                        <li><Link to=''><i><BsFillEyeFill/></i>Who can see this post?</Link></li>
                      </ul>
                      ):null
                    }
           
              </div>
                </Rightposttitle>
              </Posttitle>
              <Postdecreption>
               <p>{postDescription}</p>
              </Postdecreption>
              <Postimage>
                <img src={postURL} alt='post image'
                />
              </Postimage>
              <Postactionstatus>
                <div>
                  <Link to=''>
                    <span className='actionicon'><i className='like'><BsFillHandThumbsUpFill/></i><i className='heart'><BsFillHeartFill/></i><i className='hand'><RiHandHeartLine/></i></span>
                    <span className='actionholder'>8Anup Humagain and 77 others</span>
                  </Link>
                  <Link to=''><span className='actionholder'>5 respon</span></Link>
                </div>
              </Postactionstatus>
              <Postaction>
               <Postactionul>
                <Postactionli>
                  <Link to=''><div><span><BsHandThumbsUp/></span>Like</div></Link>
                </Postactionli>
                <Postactionli>
                  <Link to='' onClick={()=>handleCommentboxshow(id)}><div><span><BiMessageRoundedDetail/></span>Comment</div></Link>
                </Postactionli>
                <Postactionli className='repost'>
                  <Link to='' onClick={handlerepostdrop}><div><span><BiRepost/></span>Repost</div></Link>
                  <Reportul className={`${repostdropstate!==false?("repostdropmenu"):null}`}>
                    <Reportli>
                      <Link to=''>
                        <span><BsPencilSquare/></span>
                        <div>
                          <h4>Repost with your thoughts</h4>
                          <p>Create a new post with this post attached</p>
                        </div>
                      </Link>
                    </Reportli>
                    <Reportli>
                      <Link to=''>
                        <span><BiRepost/></span>
                        <div>
                          <h4>Repost</h4>
                          <p>Instantly bring this post to others` feeds</p>
                        </div>
                      </Link>
                    </Reportli>
                  </Reportul>
                </Postactionli>
                <Postactionli>
                  <Link to=''><div><span><RiSendPlaneFill/></span>Send</div></Link>
                </Postactionli>
               </Postactionul>
              </Postaction>
              <Postcommentbox className={`${commentboxstate!==false&&commentState===id?("commentboxdisplay"):null}`}>
              <Commentcom/>
              </Postcommentbox>
             
            </Postbox>
          </Postcontainer>
    </>
  )
}
const Postcontainer=styled.div`
width:100%;
min-height:600px;
margin:5px 0px;
background-color:white;
border-radius:10px;
border:1px solid rgba(0,0,0,0.2);
padding:8px 0px;
// border:2px solid red;
`;
const Posttopstatus=styled.div`
width:100%;
height:40px;
padding:0px 15px;
border-bottom:1px solid rgba(0,0,0,0.1);
display:none;
justify-content:space-between;

&>div{
  &>a{
   &.posttoplogo{
    height:30px;
    width:30px;
      &>img{
      height:30px;
      width:3opx;
      object-fit:cover:
      object-position:center;
    }
   }
  }
  &.posttopstatusdetails{
   display:flex;
   align-items: center;
   &>span{
    display:flex;
   
    margin:auto 0px auto 10px;

    &>a{
      font-size:0.8rem;
      font-weight:600;
      text-decoration:none;
      color:rgba(0,0,0,0.8);

      &:hover{
        color:#0a66c2;
        text-decoration:underline;
      }
    }
    &>p{
      font-size:0.7rem;
      font-weight:400;
      color:rgba(0,0,0,0.6);
      padding-left:3px;
    }
   }
  }
  &.righttoppost{
    position:relative;

    &>span{
      width:30px;
      height:30px;
      display:flex;
      align-items: center;
      justify-content:center;
      border-radius:50%;
      transition:all 0.3s ease-in-out;
      cursor:pointer;

      &:hover{
        background-color:#DEDEDE;
        transition:all 0.3s ease-in-out;
      }

      &>i{
        font-size:1.4rem;
        color:#00000099;
      }
    }
    &>ul{
      &.postulstatus{
        display:none;
      }
      position:absolute;
      list-style:none;
      width:320px;
      min-height:200px;
      border-radius:10px 0px 10px 10px;
      background-color:white;
      top:45px;
      right:0;
      z-index:99;
      border:1px solid rgba(0,0,0,0.2);
      box-shadow:0px 0px 10px -5px rgba(0,0,0,0.6);
      padding:5px 0px;

      &>li{

        &>a{
          display:block;
          font-size:1rem;
          color:rgba(0,0,0,0.9);
          font-weight:400;
          padding:15px 15px;
          text-decoration:none;
          &:hover{
            background-color:#DEDEDE;
          }

          &>i{
            padding-right:10px;
            font-size:1.1rem;
            color:#00000099;
            font-weight:600;
          }
        }
      }
    }
  }


}
`;
const Postbox=styled.div`
// border:2px solid black;
`;
const Posttitle=styled.div`
width:100%;
height:70px;
padding:0px 15px;
display:flex;
justify-content:space-between;
align-items: center;

@media(max-width:480px){
    height:60px;
}
&>a{

  display:block;
  width:80%;
  display:flex;
  text-decoration:none;
}

`;

const Posteduserprofile=styled.div`
width:54px;
height:54px;
@media(max-width:480px){
  width:45px;
  height:45px;
}
&>div{
  
  &>img{
    width:54px;
    height:54px;
    border-radius:50%;
    object-fit:cover;
    object-position:center;
    @media(max-width:480px){
      width:45px;
      height:45px;
    }
  }
}
`;
const Posteduserinfo=styled.div`
margin-left:7px;

&>div{
  &.username{
    display:flex;

    &>h5{
     font-size:0.95rem;
     font-weight:600;
     color:rgba(0,0,0,0.8);
     position:relative;
     &:hover:after{
      content:'';
      position:absolute;
      left:0;
      bottom:0;
      border-bottom:1px solid #0a66c2;
      width:100%;
      
     }
     &:hover{
      text-decoration:under-line;
     color:#0a66c2;
     }
     
    }
    &>p{
      font-size:0.85rem;
      padding-left:7px;
      font-weight:600;
      color:#00000099;
    }
  }
  &.userdetails{
    &>p{
    font-size:0.75rem;
    color:rgba(0,0,0,0.6);
    font-weight:400;
    &>span{
      font-size:0.75rem;
      color:rgba(0,0,0,0.6);
      font-weight:400;
      margin-top:0px;
    }
    }
   
  }
}
`;
const Rightposttitle=styled.div`

height:100%;
width:90px;
display:flex;
justify-content:flex-end;
align-items: center;

&>div{
 
  &.postsetting{
    position:relative;
    
    width:100%;
    height:100%;
    display:flex;
    justify-content:flex-end;

    &>span{
      width:30px;
      height:30px;
      display:flex;
      align-items: center;
      justify-content:center;
      border-radius:50%;
      transition:all 0.3s ease-in-out;
      cursor:pointer;
    

      &:hover{
        background-color:#DEDEDE;
        transition:all 0.3s ease-in-out;
      }

      &>i{
        font-size:1.4rem;
        color:#00000099;
      }
    }
    &>ul{
      &.postulstatus{
        display:none;
      }
      position:absolute;
      list-style:none;
      width:320px;
      min-height:200px;
      border-radius:10px 0px 10px 10px;
      background-color:white;
      top:30px;
      right:-15px;
      z-index:99;
      border:1px solid rgba(0,0,0,0.2);
      box-shadow:0px 0px 10px -5px rgba(0,0,0,0.6);
      padding:5px 0px;

      &>li{

        &>a{
          display:block;
          font-size:1rem;
          color:rgba(0,0,0,0.9);
          font-weight:400;
          padding:15px 15px;
          text-decoration:none;
          &:hover{
            background-color:#DEDEDE;
          }

          &>i{
            padding-right:10px;
            font-size:1.1rem;
            color:#00000099;
            font-weight:600;
          }
        }
      }
    }
  }
}
`;
const Userfollowbtn=styled.button`
padding:7px 7px;
border-radius:5px;
color:#0a66c2;
font-weight:600;
font-size:0.95rem;
background-color:transparent;
border:none;
display:none;
&:hover{
  background-color:#cadae9;
}
&>i{
  padding-right:5px;
}
`;

const Postdecreption=styled.div`
padding:0px 15px;
min-height:40px;
&>p{
  font-size:0.9rem;
  color:rgba(0,0,0,0.8);
  font-weight:400;
}
`;
const Postimage=styled.div`
width:100%;
height:400px;
margin-top:5px;

&>img{
  width:100%;
  height:400px;
  object-fit:cover;
  object-position:center;
}
`;
const Postactionstatus=styled.div`

padding:0px 15px;
height:30px;
&>div{
  width:100%;
  height:100%;
  display:flex;
  justify-content:space-between;
  aling-items:center;
  border-bottom:1px solid rgba(0,0,0,0.2);
  
   
  &>a{
    padding:3px 0px;
    font-size:0.8rem;
    color:#00000099;
    font-weight:400;
    text-decoration:none;
    display:flex;
    &:hover{
      color:#0a66c2;
    }
    &>span{
     &.actionicon{
     display:flex;
      &>i{
        width:20px;
        height:20px;
        
        border-radius:50%;
        font-size:0.75rem;
         display:flex;
         align-items: center;
         justify-content:center;
         border:1px solid white;

         &.like{
          background-color:#0a66c2;
          color:white;
         }
         &.heart{
          background-color:red;
          color:white;
          margin-left:-5%;
         }
         &.hand{
          background-color:#D8BFD8;
          color:black;
          margin-left:-5%;
         }
        
      }
      padding-right:5px;
     }
     
     &.actionholder{
      position:relative;
      &:hover:after{
      content:"";
      position:absolute;
      border-bottom:1px solid #0a66c2;
      left:0;
      top:60%;
      width:100%;
      }
     }
    }
  }
 
}
`;
const Postaction=styled.div`
width:100%;
height:50px;

padding:0px 15px;
`;
const Postactionul=styled.ul`
list-style:none;
height:50px;
padding:5px 0px;
display:flex;
justify-content:space-between;

`;
const Postactionli=styled.li`
height:100%;
position:relative;
&.repost{
  @media (max-width:480px){
    display:none;
  }
}

&>a{
height:100%;
padding:0px 20px;
text-decoration:none;
border-radius:5px;
display:flex;
justify-content:center;
align-items:center;
&:hover{
  background-color:#DEDEDE;
}
&>div{
 
  font-size:0.9rem;
  color:#00000099;
  font-weight:600;
  display:flex;
  align-items: center;
  &>span{
    padding-right:5px;
    font-size:1.4rem;
  }
}
}
`;
const Reportul=styled.ul`
position:absolute;
width:350px;
min-height:100px;
background-color:white;
z-index:99;
border-radius:10px 0px 10px 10px;
border:1px solid rgba(0,0,0,0.2);
top:40px;
right:0;
box-shadow: 5px 5px 10px -8px rgba(0,0,0,0.7);
padding:5px 0px;
list-style:none;
display:none;

&.repostdropmenu{
  display:block;
}
`;
const Reportli=styled.li`
width:100%;
&>a{
  padding:10px 20px;
  display:flex;
  align-items: center;
  text-decoration:none;
  &:hover{
    background-color:#DEDEDE;
  }

  &>span{
    font-size:1.3rem;
    color:#00000099;
    font-wieght:600;
  }
  &>div{
    margin-left:15px;

    &>h4{
      font-size:0.9rem;
      font-weight:600;
      color:#00000099;
    }
    &>p{
      font-size:0.8rem;
      font-weight:400;
      color:#00000099;
    }
  }
}
`;

const Postcommentbox=styled.div`
padding:0px 15px;
display:none;

&.commentboxdisplay{
  display:block
}
`;