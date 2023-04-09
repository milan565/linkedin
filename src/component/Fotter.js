import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BsChevronCompactDown } from "react-icons/bs";

 function Fotter() {
  return (
    <>
     <Footersection>
        <Footercontainer>
          <Footerlogo>
            <div>
                <img src='https://www.citypng.com/public/uploads/preview/hd-linkedin-black-logo-transparent-png-31623962131yffuhnbrmb.png'/>
                <p>© 2023</p>
            </div>
          </Footerlogo>
          <Footerul>
            <Footerli>
                <Link to=''>About</Link>
            </Footerli>
            <Footerli>
                <Link to=''>Accessibility</Link>
            </Footerli>
            <Footerli>
                <Link to=''>User Agreement</Link>
            </Footerli>
            <Footerli>
                <Link to=''>Privacy Policy</Link>
            </Footerli>
            <Footerli>
                <Link to=''>Cookie Policy</Link>
            </Footerli>
            <Footerli>
                <Link to=''>Copyright Policy</Link>
            </Footerli>

            <Footerli>
                <Link to=''>Brand Policy</Link>
            </Footerli>
            <Footerli>
                <Link to=''>Guest Controls</Link>
            </Footerli>
            <Footerli>
                <Link to=''>Community Guidelines</Link>
            </Footerli>
            <Footerli>
                <Link to=''>Language <i><BsChevronCompactDown/></i></Link>
            </Footerli>
          </Footerul>
        </Footercontainer>
     </Footersection>
    </>
  )
}
const Footersection=styled.section`
width:100%
min-height:45px;
background-color: white;
;
`;
const Footercontainer=styled.div`
max-width:1128px;
margin:0px auto;
display:flex;
height:45px;
padding:10px 0px;
`;

const Footerlogo=styled.div`
width:120px;

&>div{
    display:flex;
    align-items: center;
    &>P{
        font-size:0.8rem;
        color:#00000099;
    }
    &>img{
        width:70px;
        height:20px;
    }
}
`;
const Footerul=styled.ul`
display:flex;
list-style:none;
`;
const Footerli=styled.li`
&>a{
    font-size:0.8rem;
    font-weight:600;
    color:#00000099;
    padding:0px 7px;
    text-decoration:none;
    &>i{
        font-size:0.8rem;
    }
    &:hover{
        color:#0a66c2;
        text-decoration:underline;
    }
}
`;
export default Fotter;









