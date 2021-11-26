import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from 'react-reveal/Fade';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice'
import { useSelector } from 'react-redux';
import { selectMenus } from '../features/car/menuSlice'
import ScrollBar from '../components/style'


function Header() {
    const [burgerStatus, setBurgerState] = useState(false)
    const cars = useSelector(selectCars)
    // console.log(cars)
    const menus = useSelector(selectMenus)


    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt ="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href="#"> {car}</a>
                ))}
                
                {/* <p><a href="#"> Model S</a></p>
                <p><a href="#"> Model 3</a></p>
                <p><a href="#"> Model x</a></p>
                <p><a href="#"> Model Y</a></p>
                <p><a href="#"> Solar Roof</a></p>
                <p><a href="#"> Solar Panels</a></p> */}


            </Menu>
            <RightMenu>
                <a href="#">Shope</a>
                <a href="#">Account</a>
                <CustomMenu onClick={()=>setBurgerState(true)}/>
            </RightMenu>
           
      <BurgerNav show = {burgerStatus}>
          
                {/* <ul> */}
           <Fade right>
                <CloseWrapper>
                <CustomClose onClick={()=>setBurgerState(false)} />
                </CloseWrapper>
               
                </Fade>
                <Scroll >
                    
                <Fade left >
                    {  menus && menus.map((menu, index) => (   
                   <ul key={index} > <li  ><a  href="#"> {menu}</a></li> </ul>
                    )) }
                  </Fade >   
               
              
                {/* <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Solar Roof</a></li>
                <li><a href="#">Solar Panels</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">More</a></li>
                <li><a href="#">United States</a></li>
                <li><a href="#">English</a></li>
                </ul> */}
                   
                 </Scroll>
                
      </BurgerNav>
    
      

        </Container>
    )
}

export default Header
  
const Container = styled.div`
min-hight: 60px;
position: fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding: 14px  20px;
cursor:pointer;
top:0;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-left:8px;



a {
    font-weight:700;
    text-transform:uppercase;
    padding: 0 10 px;
    flex-wrap:no-wrap;
    font-size:15px;
    margin-right:15px;
}

@media(max-width:960px){
    display:none
   
}
`
const RightMenu = styled.div`
display:flex;
align-items:center;

a {
    font-weight:700;
    font-size:15px;
    text-transform:uppercase;
    margin-right:10px
}
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;

`

const BurgerNav = styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
background:white;
z-index:16;
width :300px;
padding: 5px 60px;
display:flex;
flex-direction:column;
text-align: start;
padding-bottom:20px;
 
transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'}; // show yamilew property kememetatu bafit 0 maletm ayetay weyem demo 100% yetay;
transition:transform 0.4s ;


 ul li {
   padding:15px 0;
   border-bottom: 1px solid rgba(0, 0, 0, .2);
   width:185px;
 };
 a {
    font-weight:600;
 }
 ul {
    list-style:none;
 };
 

`
const CustomClose = styled(CloseIcon)`
margin-left:188px;
margin-top:10px;
cursor:pointer;
position:fixed;
`

const CloseWrapper = styled.div`
margin-bottom:45px;
`

const Scroll = styled.div`

    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 0vh;
    height: 85vh;
    width:249px;
  
    

`

