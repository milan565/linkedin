import React , { useState }from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsFillBookmarkFill,BsSquareFill } from "react-icons/bs";

import { useSelector } from 'react-redux';


function Userprofile() {
    let{logUser}=useSelector((state)=>state.logUserManager);
    let[recentstatus,setRecentstatus]=useState(false);
    let[groupstatus,setgroupstatus]=useState(false);
    let[profileinfodisplay,setProfileinfodisplay]=useState(false);
    let {userPersonalInfo}=useSelector((state)=>state.userinfoManager);
    let handleRecentStatus=()=>{
        setRecentstatus(status=>!status)
    }
    let handleGroupStatus=()=>{
        setgroupstatus(state=>!state) 
    }
    let handleProfileDisplay=()=>{
        setProfileinfodisplay((state)=>!state)   
    }
  return (
    
    <>
     <Userprofilesection>
        <Userprofilecontainer>
          <Userprofiletop>
            <div>
            <Userprofilebackground>

            </Userprofilebackground>
            <Userinfo>
                <Link to=''>
                <div>
                    <Cameraicon>
                        <img src={(logUser?.photoURL)?(logUser?.photoURL):(`https://static.licdn.com/sc/h/3h0vrtch1zepjr4p54aja8i9x`)}/>
                                         
                       
                    </Cameraicon>
                    {/* <Userprofileimage>
                        <img src=''/>
                    </Userprofileimage> */}
                </div>
                <h4>{(logUser?.displayName)?(logUser?.displayName):(`${userPersonalInfo?.fname} ${userPersonalInfo?.lname}`)}</h4>
                </Link>
                
            </Userinfo>
            </div>
            {/* <div className='userp'>
            <p>Student at kathmandu collage of technology</p>
            </div> */}
            
          </Userprofiletop>
          <Userprofilebuttom className={`${profileinfodisplay!==false?("userbottomprofile"):null}`}>
            <Userprofileitem className='connectionfirstli'>
                <Link to=''>
                    <div className='connnectionparag'><p>connections</p><span>0</span></div>
                    <h6>connect with alumni</h6>
                </Link>
            </Userprofileitem>
            <Userprofileitem>
                <Link to=''>
                    <p>Access exclusive tools & insights</p>
                    <div className='premimum'><i><BsSquareFill/></i><span>Try Premium for free</span></div>
                </Link>
            </Userprofileitem>
            <Userprofileitem>
                <Link to=''>
                    <div className='useritem'><i><BsFillBookmarkFill/></i>My items</div>
                </Link>
            </Userprofileitem>
          </Userprofilebuttom>
        </Userprofilecontainer>
     </Userprofilesection>
     {/* <Usereventsection>
        <Usereventcontainer className={`${profileinfodisplay!==false?("eventDisplay"):null}`}>
            
                <Usereventul>
                <Usereventli>
                    <div>
                    <h6>Recent</h6>
                     <div onClick={handleRecentStatus}><i>{recentstatus===false?(<BsChevronUp/>):(<BsChevronDown/>)}</i></div>
                    </div>
                     
                     <ul className={`${recentstatus===false?("usereventstatus"):("usereventstatusnon")}`}>
                        <li><Link to=''><span><HiUserGroup/></span>JavaScript</Link></li>
                     </ul>
                    </Usereventli>
                    <Usereventli>
                        <div>
                        <Link to=''>Groups</Link>
                         <div onClick={handleGroupStatus}><i>{groupstatus===false?(<BsChevronUp/>):(<BsChevronDown/>)}</i></div>
                        </div>
                    
                     <ul className={`${groupstatus===false?("usereventstatus"):("usereventstatusnon")}`}>
                        <li><Link to=''><span><HiUserGroup/></span>JavaScript</Link></li>
                        <li><Link to=''><span></span>see all</Link></li>
                     </ul>
                    </Usereventli>
                    <Usereventli>
                        <div>
                        <Link to=''>Events</Link>
                     <div className='activeicon'><i><BsPlusLg/></i></div>
                        </div>
                     
                    </Usereventli>
                    <Usereventli>
                        <div>
                        <Link to=''>Followed Hashtags</Link>
                        </div>
                     
                  
                    </Usereventli>
                </Usereventul>
                <Link to=''><span>Discover more</span></Link>
          
        </Usereventcontainer>
        <Usereventdisplaybtn>
        <button onClick={handleProfileDisplay}>{profileinfodisplay===false?(<span>Show more <i><BsChevronCompactDown/></i></span>):(<span>Show less <i><BsChevronUp/></i></span>)}</button>
        </Usereventdisplaybtn>
     </Usereventsection> */}
    </>
  )
}
const Userprofilesection=styled.section``;
const Userprofilecontainer=styled.div`
width:100%;
max-height:350px;
border-radius:10px;
background-color:white;
over-flow:hidden;
border:1px solid rgba(0,0,0,0.1);

@media(max-width:768px){
    min-height:180px;
}
`;
const Userprofiletop=styled.div`
width:100%;
min-height:150px;
display:flex;
flex-direction:column;
justify-content:space-between;


&>div{
    width:100%;
    &.userp{
        padding:0px 10px;
        @media(max-width:768px){
            margin-top:30px;
        }
    }
    &>p{
        font-size:0.75rem;
        color:#00000099;
        font-weith:600;
        text-align: center;
    }
}


`;

const Userprofilebackground=styled.div`
background-image:url('https://static.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq');
height:60px;
width:100%;
background-position:center;
background-size: cover;
background-repead:none;
border-radius:10px 10px 0px 0px;
`;
const Userinfo=styled.div`
width:60%;
height:110px;
margin:-20% auto;

@media(max-width:768px){
    margin:-5% auto;
}
@media(max-width:568px){
    margin:-6% auto;
}

&>a{
    text-decoration:none;
    text-align: center;
    &:hover{
        text-decoration:underline;  
    }
    &>div{
     width:64px;
     height:64px;
     border-radius:50%;
     margin:0px auto;
     background-color:white;
     
     over-flow:hidden;
  
      
    }
    &>h4{
        font-size:1rem;
        color:rgba(0,0,0,0.8);
        font-weight:600;
        margin-top:15px;
        
    }
}

`;
const Cameraicon=styled.div`
width:64px;
height:64px;
border:1px solid rgba(0,0,0,0.4);
border-radius:50%;
over-flow:hidden;
z-index:1;

  &>img{
    width:64px;
    height:64px;
    border-radius:50%;
    
  }
}
`;
const Userprofileimage=styled.div`
width:100%;
height:100%;
border-radius:50%;
&>img{

}
`;
const Userprofilebuttom=styled.ul`
width:100%;
height:52%;
list-style:none;
padding-top:10px;

@media(max-width:768px){
    display:none;
    height:0%;
}
&.userbottomprofile{
    @media(max-width:768px){
        display:block;
    }
}


`;
const Userprofileitem=styled.li`
border-top:1px solid rgba(0,0,0,0.2);
over-flow:hidden;
&.connectionfirstli{
    padding:10px 0px;
}
&>a{
    padding:10px 12px;
    text-decoration:none;
    display:block;
    transition:all 0.3s ease-in-out;
    &:hover{
        background-color:#DEDEDE;
        transition:all 0.3s ease-in-out;
        &>div{
            &.premimum{
                &>span{
                    color:#0a66c2;
                }
            }
        }
    }
    &>h6{
        font-size:0.85rem;
        font-weight:600;
        color:rgba(0,0,0,0.7);
    }
    &>div{
        &.connnectionparag{
            font-size:0.85rem;
            color:#00000099;
            font-weight:600;
            display:flex;
            justify-content:space-between;
            &>span{
                color:#0a66c2;
            }
        }
        &.premimum{
            font-size:0.8rem;
            color:rgba(0,0,0,0.8);
            font-weight:600;
            &>span{
                text-decoration: underline;
            }

            &>i{
                color:rgb(248, 199, 126);
                padding-right:5px;
            }
        }
        &.useritem{
            font-size:0.75rem;
            color:rgba(0,0,0,0.7);
            font-weight:600;
            padding:1px 0px;
            border-radius:0px 0px 10px 10px;
            &>i{
                font-size:0.85rem;
                color:rgba(0,0,0,0.7);
                padding-right:10px;
            }

        }
    }
    &>p{
        font-size:0.75rem;
        color:rgba(0,0,0,0.6);
        font-weight:400;
    }
  
}
`;

// user event styled component 
// const Usereventsection=styled.section`
// border:1px solid blue;
// position: sticky;
// top: 50px;
// `;
// const Usereventcontainer=styled.div`
// width:100%;
// min-height:180px;
// background-color:white;
// border-radius:10px;
// margin-top:10px;
// border:1px solid rgba(0,0,0,0.1);
// over-flow:hidden;

// @media(max-width:768px){
// display:none;
// }
// &.eventDisplay{
//     @media(max-width:768px){
//         display:block;
//     }
// }
// &>a{
//     line-height:40px;
//     font-size:0.9rem;
//     color:rgba(0,0,0,0.6);
//     display:block;
//     text-align: center;
//     text-decoration:none;
//     font-weight:600;
//     border-radius:0px 0px 10px 10px;
//     &:hover{
//         background-color:#DEDEDE;
//     } 
// }
// `;


// const Usereventul=styled.ul`
// list-style:none;
// padding:10px ;
// border-bottom:1px solid rgba(0,0,0,0.2);
// `;
// const Usereventli=styled.li`

// line-height:27px;
// &>ul{
//     list-style:none;

//     &.usereventstatus{
//         display:block;
//     }
//     &.usereventstatusnon{
//     display:none;
//     }
//     &>li{
//         &>a{
//             font-size:0.8rem;
//             font-weight:600;
//             color:rgba(0,0,0,0.6);
//             text-decoration:none;
//             padding:0px 0px;  
//             display:block;
//             &:hover{
//                 background-color:#DEDEDE;
//                 transition:all 0.5s easy-in-out;
//             }
//             &>span{
//                 padding-right:10px;
//                 font-size:1rem;
//                 color:rgba(0,0,0,0.8);
//             }
//         }
//     }
// }
// &>div{
//     display:flex;
//     justify-content:space-between;
//     align-items: center;
//      @media(max-width:768px){
//         justify-content:flex-start;
//      }
//     &>h6{
//         font-size:0.8rem;
//         font-weight:400;
//         color:rgba(0,0,0.7); 
//     }
//     &>a{
//         font-size:0.8rem;
//         font-weight:600;
//         color:#0a66c2;
//         text-decoration:none;
//         padding:5px 0px;
    
//         &:hover{
//             text-decoration:underline;   
//         }
//     }
//     &>div{
       
//         display:none;
//         height:27px;
//         width:27px;
//         border-radius:50%;
        
//         justify-content:center;
//         align-items: center;
//         cursor:pointer;
//         transition:all 0.5s easy-in-out;
         
//         @media(max-width:768px){
//             margin-left:10px;
//         }
//         &:hover{
//             background-color:#DEDEDE;
//             transition:all 0.5s easy-in-out;
//         }
        
         
//         &>i{
//             font-size:0.9rem;
//             font-weight:700;
//             color:rgba(0,0,0,0.8);
         
        
//         } 
//         &.activeicon{
//             display:flex;
//         }
//     }
//     &:hover>div{
//         display:flex;
//     }
// }



// `;
// const Usereventicon=styled.div`
// height:30px;
// width:30px;
// border-radius:50%;
// display:flex;
// justify-content:center;
// align-items: center;
// cursor:pointer;
// transition:all 0.5s easy-in-out;
// &:hover{
//     background-color:#DEDEDE;
//     transition:all 0.5s easy-in-out;
// }

 
// &>i{
//     font-size:1rem;
//     font-weight:700;
//     color:rgba(0,0,0,0.7);
 

// }
// `;
// const Usereventdisplaybtn=styled.div`

// width:100%;
// padding:5px 0px;
// display:none;
// @media(max-width:768px){
//     display:block;
// }
// &>button{
//     display:flex;
//     justify-content:center;
//     padding:10px 0px;
//     width:100%;
//     border:none;
//     border-radius:5px;

//     &:hover{
//         background-color:#DFDFDF;
//     }

//     &>span{
//         font-size:0.9rem;
//         font-weight:600;
//         color:#00000099;
//     }

// }
// `;
export default  Userprofile;

