import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsXLg ,BsEmojiSmile} from "react-icons/bs";
import { Link } from 'react-router-dom';
import { BsCardImage ,BsFillPlayBtnFill,BsFillFileEarmarkTextFill,BsThreeDots,BsFillCaretDownFill} from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi" 
import { FiClock } from "react-icons/fi";
import { ImEarth } from "react-icons/im";
import { store ,firecoll} from '../configure/firebaseConfig';
import db from '../configure/firebaseConfig';
import {  addDoc } from "firebase/firestore"; 
import {  ref ,uploadBytes,getDownloadURL  } from "firebase/storage";
import { postThunk } from '../reduxslic/postSlice';
import { useDispatch ,useSelector} from 'react-redux';
import {  getDocs } from "firebase/firestore"; 
import { addPost } from '../reduxslic/postSlice';

function Postmodule(props) {
   let dispatch=useDispatch();
    let[textinput,setTextinput]=useState("");
    let[shareimage,setShareimage]=useState();
    let [sharevideo,setShareVideo]=useState();
    let[sharedocument,setSharedocument]=useState();
    let displayPostModule=props.displayPostModule;
    let setDisplayPostModule=props.setDisplayPostModule;
    let{logUser}=useSelector((state)=>state.logUserManager);
    let {userPersonalInfo}=useSelector((state)=>state.userinfoManager);
    

   let handlepost=()=>{
    setDisplayPostModule((state)=>!state)
   }
   let handleimage=(e)=>{
    let shareimage=e.target.files[0];
  
    e.preventDefault();
    if(shareimage===""||shareimage===undefined){
        alert("please choose image");
        
    }
    else{
        setShareimage(shareimage)
    }

   }
   let handlesharevideo=(e)=>{
    let shvideo=e.target.files[0];
    e.preventDefault();
    if(shvideo===""||shvideo===undefined){
        alert("please select videos");
    }
    else{
        setShareVideo(shvideo);
    }
   }
   let handleShareDoc=(e)=>{
    let shdocument=e.target.files[0];
    e.preventDefault();
    if(shdocument===""||shdocument===undefined){
        alert("please select document");
    }
    else{
        setSharedocument(sharedocument)
    }
   }
   let handleclosimage=()=>{
    setShareimage("");
   }
//    function when user click post function
   let handlePost=(e)=>{
    e.preventDefault();
    if(textinput.length>=1||shareimage||sharevideo||sharedocument){
        handlePostUpload();
    }
    else{
        console.log('please enter contain');
    }
    
   }
//    function to addd post 
let handlePostUpload=async()=>{
    let postdate=new Date();
    try{ 
        if(shareimage){
            
            let storeRef=ref(store,`${shareimage.name}`);
            await uploadBytes(storeRef,shareimage);
            let donwloadURL=await getDownloadURL(storeRef);
            
            await addDoc(firecoll,{
             usrName:(logUser.displayName)?(logUser.displayName):(`${userPersonalInfo.fname} ${userPersonalInfo.lname}`),
             userEmail:logUser.email,
             date:postdate,
             userProfile:logUser.photoURL,
             postDescription:textinput,
             postURL:donwloadURL,
             imageName:shareimage.name
            });
            setTextinput("");
            setShareimage();
            handlepost();
            dispatch(postThunk());
        }
        else{
         
        }
        
    }catch(err){
        console.log(err);
    }
}

  return (
    <>
    {(displayPostModule===true)?(
      <Postmodulesection>
      <Postbox>
        <Postheader>
            <h3>Create a post</h3>
            <div  onClick={handlepost}><i><BsXLg/></i></div>
        </Postheader>
        <Postcontent>
         <Postuser>
            <div className='postuserprofile'>{(logUser.photoURL)?(<img src={logUser.photoURL}/>):(<img src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='/>)}</div>
            <div className='postuserinfo'>
                <h6>{(logUser.displayName)?(logUser.displayName):(`${userPersonalInfo.fname} ${userPersonalInfo.lname}`)}</h6>
                <Link to=''><i><ImEarth/></i><span>Anyone</span><i><BsFillCaretDownFill/></i></Link>
            </div>
         </Postuser>
         <Postinput>
           <Posttext>
            <textarea placeholder='What do you want to talk about?' value={textinput} onChange={(e)=>setTextinput(e.target.value)}></textarea>
            {/* <input type='text' placeholder='What do you want to talk about?' value={textinput} onChange={(e)=>setTextinput(e.target.value)}></input> */}
           </Posttext>
            <Selectedfile>
                <div>
                {shareimage&& <button onClick={handleclosimage}><BsXLg/></button>} 
                {shareimage && <img src={URL.createObjectURL(shareimage)}/>}
                </div>
                
             
            </Selectedfile>
         </Postinput>
        </Postcontent>
        <Postfoter>
            <Toppostfoter>
                <div><i><BsEmojiSmile/></i></div>
            </Toppostfoter>
            <Bottompostfoter>
                <Bottomleftfoter>
                    <Bottomfoterul>
                        <Bottomfoterli>
                            <div>
                                <input type='file' id="myimage" name="image" hidden accept='image/png, image/gif, image/jpeg ' onChange={handleimage} disabled={(shareimage||sharevideo||sharedocument)?true:false}/>
                              
                                <label htmlFor="myimage" ><i><BsCardImage/></i>
                                <div>
                                    <h4>Add a photo</h4>
                                </div>
                                </label>
                               
                                
                         </div>
                        </Bottomfoterli>
                        <Bottomfoterli>
                        <div>
                                <input type='file' id="myvideo" name="video" hidden accept='video/*' onChange={handlesharevideo} disabled={(shareimage||sharevideo||sharedocument)?true:false}/>
                              
                                <label htmlFor="myvideo" ><i><BsFillPlayBtnFill/></i>
                                <div>
                                    <h4>Add a Video</h4>
                                </div>
                                </label>
                                
                         </div>
                       
                        </Bottomfoterli>
                        <Bottomfoterli>
                        <div>
                                <input type='file' id="mydocument" name="document" hidden accept='.pdf, .txt' onChange={handleShareDoc} disabled={(shareimage||sharevideo||sharedocument)?true:false}/>
                                
                                <label htmlFor="mydocument"><i><BsFillFileEarmarkTextFill/></i>
                                <div>
                                    <h4>Add a document</h4>
                                </div>
                                </label>
                                
                         </div>
                        
                        
                        </Bottomfoterli>
                        <Bottomfoterli><Link to=''><i><BsThreeDots/></i>
                        <div>
                            <h4>Add to your post</h4>
                        </div>
                        </Link>
                       
                        </Bottomfoterli>
                        <Bottomfoterli className='lasticonli'><Link to=''><i><BiMessageRoundedDetail/></i><span>Anyone</span></Link></Bottomfoterli>
                    </Bottomfoterul>
                </Bottomleftfoter>
                <Bottomrightfoter>
                <Bottomfoterul>
                        <Bottomfoterli><Link to=''><i><FiClock/></i></Link></Bottomfoterli>
                        <Bottomfoterli className='postli' ste={textinput.length} shareimage={shareimage} sharevideo={sharevideo} sharedocument={sharedocument}><Link to='' onClick={handlePost}><span>post</span></Link></Bottomfoterli>
                      
                    </Bottomfoterul>
                </Bottomrightfoter>
            </Bottompostfoter>
        </Postfoter>
      </Postbox>
      </Postmodulesection>
      ):null}
    </>
  )
}
const Postmodulesection=styled.section`
width:100%;
height:100%;
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background-color:rgba(0,0,0,0.6);
z-index:999;
animation:modelfade 0.3s;
`;
const Postbox=styled.div`
width:550px;
height:400px;
background-color:white;
border-radius:10px;

margin:30px auto;
position:relative;
@media(max-width:568px){
    max-width:500px;
}
`;
const Postheader=styled.div`
width:100%;
height:65px;
border-bottom:1px solid rgba(0,0,0,0.1);
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items: center;
z-index:99;
background-color:white;
border-radius:10px 10px 0px 0px;


&>h3{
    font-size:1.3rem;
    color:rgba(0,0,0,0.8);
    font-weight:400;
}
&>div{
    width:38px;
    height:38px;
    display:flex;
    justify-content:center;
    align-items: center;
    border-radius:50%;
     cursor:pointer;
     transition:all 0.3s ease-in-out;
   &:hover{
    background-color:#DEDEDE;
    transition:all 0.3s ease-in-out;
   }
    &>i{
        color:rgba(0,0,0,0.8);
        font-size:1rem;
    }
}
`;
const Postcontent=styled.div`

width:100%;

padding:10px 20px 30px 20px;
z-index:1;
min-height:300px;
overflow-y:auto;


`;
const Postuser=styled.div`
width:100%;
height:70px;

display:flex;
&>div{
    &.postuserprofile{
        width:54px;
        height:54px;
        border-radius:50%;
        over-flow:hidden;
        &>img{
            width:54px;
            height:54px;
            border-radius:50%;
            object-fit:cover;
            object-position:center;
        }
    }
    &.postuserinfo{
        margin-left:10px;
        

        &>h6{
            font-size:1rem;
            font-weight:600;
            color:black;
            margin-bottom:5px;
        }
        &>a{
            width:100px;
            height:27px;
            border:1px solid red;
            display:flex;
            align-items: center;
            justify-content:center;
            font-size:0.9rem;
            font-weight:600;
            color:#00000099;
            text-decoration:none;
            border-radius:25px;
            border:1px solid #00000099;
            transition:all 0.2s ease-in-out;
            &:hover{
                background-color:rgba(0,0,0,0.04); 
                box-shadow:inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0%);  
                transition:all 0.2s ease-in-out;
            }
            &>span{
                padding:0px 3px;
            }
            &>i{
                font-size:0.8rem;
            }
        }

    }
}
`;
const Postinput=styled.div`
width:100%;
height:50px;

`;
const Posttext=styled.div`
&>textarea{
    width:100%;
    height:60px;
    border:none;
    font-size:1rem;
    color:#00000099;
    resize:none;
    padding:10px;
    outline:none;

}
// &>input{
//     width:100%;
//     height:60px;
//     border:none;
//     font-size:1rem;
//     color:#00000099;
//     resize:none;
//     padding:10px;
//     outline:none;

// }`;
const Selectedfile=styled.div`
width:100%;
min-height:100px;

&>div{
    width:400px;
   
    margin:0px auto;
    position:relative;
    &>button{
        position:absolute;
        right:10px;
        top:10px;
        width:30px;
        height:30px;
        border:none;
        outline:none;
        border-radius:50px;
        cursor:pointer;

    }
    &>img{
        width:400px;
        height:250px;
        margin:0px auto;
    }
}

`;
const Postfoter=styled.div`
position:absolute;
width:100%;
height:90px;
left:0;
bottom:0;
z-index:99;
background-color:white;
border-radius:0px 0px 10px 10px;

`;
const Toppostfoter=styled.div`
padding:0px 20px;
&>div{
    width:40px;
    height:40px;
    border-radius:50%;
    cursor:pointer;
    display:felx;
    justify-content:center;
    align-items:center;
    transition:all 0.3s ease-in-out;
    &:hover{
        background-color:#DEDEDE;
        transition:all 0.3s ease-in-out;
    }
    &>i{
        font-size:1.3rem;
        color:rgba(0,0,0,0.6);
        font-wieght:700;
    }
}
`;

const Bottompostfoter=styled.div`
width:100%;
padding:0px 20px;
height:50px;
display:flex;
justify-content:space-between;

`;

const Bottomleftfoter=styled.div`
height:100%;
width:80%;
`;


const Bottomfoterul=styled.ul`
list-style:none;
display:flex;
align-items: center;
height:50px;

`;
const Bottomfoterli=styled.li`
&>div{
    
   
    

    &>label{
        font-size:1rem;
        color:#00000099;
       width:40px;
       height:40px;
       display:flex;
       justify-content:center;
       align-items:center;
        border-radius:50%;
        transition:all 0.3s ease-in-out;
        text-decoration:none;
        position:relative;
        cursor:pointer;
        transition:all 0.3s ease-in-out; 
        &:hover{
            background-color:#DEDEDE;
            transition:all 0.3s ease-in-out;   
        }
        &:hover>div{
            display:flex;
            transition:all 0.3s ease-in-out; 
        }
        &>i{
            font-size:1.3rem;
        }
        &>div{
            transition:all 0.3s ease-in-out;
            position:absolute;
            width:130px;
            height:40px;
            background-color:white;
            border-radius:10px;
            box-shadow:1px 4px 10px -3px rgba(0,0,0,0.8);
            top:-120%;
            left:-90%;
            z-index:9999;
            padding:0px 10px;
            display:none;
            align-items:center;
            justify-content:center;
            &>h4{
                font-size:0.9rem;
                font-weight:400;
                color:rgba(0,0,0,0.8);
            }   
        }
    }
 
}
&.lasticonli{
    margin-left:10px;
    border-left:1px solid rgba(0,0,0,0.2);
    padding-left:20px;


    &>a{
        
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:0.9rem;
    font-weight:600;
    color:#00000099;
    width:90px;
    height:27px;
    border-radius:25px;
    &>i{
        font-size:1rem;
    }
    }
}
&.postli{
    margin-left:2px;
    &>a{
        width:60px;
        height:30px;
        display:flex;
        justify-content:center;
        align-items: center;
        border-radius:20px;
        padding:2px 3px;
        background-color:${(props)=>props.ste>=1||props.shareimage||props.sharevideo||props.sharedocument?'#0078c7':'#DEDEDE'};
        
        &>span{
            font-size:1rem;
            font-weight:600;
            color:${(props)=>props.ste>=1||props.shareimage||props.sharevideo||props.sharedocument?'white':'#00000099'}
        }
        &:hover{
            background-color:${(props)=>props.ste>=1||props.shareimage||props.sharevideo||props.sharedocument?'#0078c7':'#DEDEDE'}; 
            color:${(props)=>props.ste>=1?'white':'#00000099'}
        }
    }
}
&>a{
    font-size:1rem;
    color:#00000099;
   width:40px;
   height:40px;
   display:flex;
   justify-content:center;
   align-items:center;
    border-radius:50%;
    transition:all 0.3s ease-in-out;
    text-decoration:none;
    position:relative;
   
    &>i{
        font-size:1.3rem;
    }
    &>div{
        transition:all 0.3s ease-in-out;
        position:absolute;
        width:130px;
        height:40px;
        background-color:white;
        border-radius:10px;
        box-shadow:1px 4px 10px -3px rgba(0,0,0,0.8);
        top:-120%;
        left:-90%;
        z-index:9999;
        padding:0px 10px;
        display:none;
        align-items:center;
        justify-content:center;
        &>h4{
            font-size:0.9rem;
            font-weight:400;
            color:rgba(0,0,0,0.8);
        }
    }
    &:hover>div{
        display:flex;
        transition:all 0.3s ease-in-out;
    }
 
    &:hover{
        background-color:#DEDEDE;
        transition:all 0.3s ease-in-out;
    }

   
}
`;
const Bottomrightfoter=styled.div`
height:100%;
width:20%;
display:flex;
justify-content:flex-end;
`


export default Postmodule;
