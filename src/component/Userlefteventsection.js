import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import { BsChevronDown,BsChevronUp,BsPlusLg,BsChevronCompactDown } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import styled from 'styled-components'

 function Userlefteventsection() {
    let[recentstatus,setRecentstatus]=useState(false);
    let[groupstatus,setgroupstatus]=useState(false);
    let[profileinfodisplay,setProfileinfodisplay]=useState(false);
    let[fix,setFix]=useState(false);
    let handelfix=()=>{
        if(window.scrollY>=420){
           
            setFix(true);
        }
        else{
            setFix(false);
        }
    }
 
    window.addEventListener('scroll',handelfix);
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
       <Userleventsection className={`${(fix)?("scrolleven"):("scrollnurmal")}`}>
        <Userinnereventsection >
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
        </Userinnereventsection>
     </Userleventsection>
    </>
  )
}
const Userleventsection=styled.section`

position:relative;

@media(min-width:768.01px){
    &.scrolleven{
        position:fixed;
        top:75px;
        width:100%;
        max-width:200px;
    }
    &.scrollnurmal{
        position:relative;
        width:100%;
        margin-top:10px;
    }
}
@media(min-width:1028px){
    &.scrolleven{   
        max-width:220px;
    }
}
@media(min-width:992px){
    &.scrolleven{   
        max-width:215px;
    }
}
@media(min-width:1199.99px){
    &.scrolleven{   
        max-width:230px;
    }
}

`;
const Userinnereventsection=styled.div`



`
const Usereventcontainer=styled.div`
width:100%;
min-height:180px;
background-color:white;
border-radius:10px;
margin-top:0px;
border:1px solid rgba(0,0,0,0.1);
over-flow:hidden;

@media(max-width:768px){
display:none;
}
&.eventDisplay{
    @media(max-width:768px){
        display:block;
    }
}
&>a{
    line-height:40px;
    font-size:0.9rem;
    color:rgba(0,0,0,0.6);
    display:block;
    text-align: center;
    text-decoration:none;
    font-weight:600;
    border-radius:0px 0px 10px 10px;
    &:hover{
        background-color:#DEDEDE;
    } 
}
`;


const Usereventul=styled.ul`
list-style:none;
padding:10px ;
border-bottom:1px solid rgba(0,0,0,0.2);
`;
const Usereventli=styled.li`

line-height:27px;
&>ul{
    list-style:none;

    &.usereventstatus{
        display:block;
    }
    &.usereventstatusnon{
    display:none;
    }
    &>li{
        &>a{
            font-size:0.8rem;
            font-weight:600;
            color:rgba(0,0,0,0.6);
            text-decoration:none;
            padding:0px 0px;  
            display:block;
            &:hover{
                background-color:#DEDEDE;
                transition:all 0.5s easy-in-out;
            }
            &>span{
                padding-right:10px;
                font-size:1rem;
                color:rgba(0,0,0,0.8);
            }
        }
    }
}
&>div{
    display:flex;
    justify-content:space-between;
    align-items: center;
     @media(max-width:768px){
        justify-content:flex-start;
     }
    &>h6{
        font-size:0.8rem;
        font-weight:400;
        color:rgba(0,0,0.7); 
    }
    &>a{
        font-size:0.8rem;
        font-weight:600;
        color:#0a66c2;
        text-decoration:none;
        padding:5px 0px;
    
        &:hover{
            text-decoration:underline;   
        }
    }
    &>div{
       
        display:none;
        height:27px;
        width:27px;
        border-radius:50%;
        
        justify-content:center;
        align-items: center;
        cursor:pointer;
        transition:all 0.5s easy-in-out;
         
        @media(max-width:768px){
            margin-left:10px;
        }
        &:hover{
            background-color:#DEDEDE;
            transition:all 0.5s easy-in-out;
        }
        
         
        &>i{
            font-size:0.9rem;
            font-weight:700;
            color:rgba(0,0,0,0.8);
         
        
        } 
        &.activeicon{
            display:flex;
        }
    }
    &:hover>div{
        display:flex;
    }
}



`;
const Usereventicon=styled.div`
height:30px;
width:30px;
border-radius:50%;
display:flex;
justify-content:center;
align-items: center;
cursor:pointer;
transition:all 0.5s easy-in-out;
&:hover{
    background-color:#DEDEDE;
    transition:all 0.5s easy-in-out;
}

 
&>i{
    font-size:1rem;
    font-weight:700;
    color:rgba(0,0,0,0.7);
 

}
`;
const Usereventdisplaybtn=styled.div`

width:100%;
padding:5px 0px;
display:none;
@media(max-width:768px){
    display:block;
}
&>button{
    display:flex;
    justify-content:center;
    padding:10px 0px;
    width:100%;
    border:none;
    border-radius:5px;

    &:hover{
        background-color:#DFDFDF;
    }

    &>span{
        font-size:0.9rem;
        font-weight:600;
        color:#00000099;
    }

}
`;
export default Userlefteventsection;