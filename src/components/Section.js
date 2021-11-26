
import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
// parameterochun ende argument argeh tekebelachew 
function Section({tittle,description, leftBtnText,rightBtnText,backgroundImg}) {
  
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom >
            <ItemText>
                <h1>{tittle} </h1>
                <p> {description} </p>
            </ItemText>
            </Fade>
            <Button>
            <Fade bottom >
            <Fade top >
            <ButtonGroup>
                <LeftButton>
                   { leftBtnText}
                    </LeftButton>
                    {/* huletum button kemetu tekebelachew kalhone gin andun button tekebelelegn */}
                    {rightBtnText && <RightButton>
                         {rightBtnText}
                        </RightButton>
                 }
            </ButtonGroup>
                </Fade>
                </Fade>
            <DownArrow img src='../.././images/down-arrow.svg' /> 
            </Button>
            
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
   width: 100vw;
   height:100vh;
   background-size:cover;
   background-position:center;
   background-repeat:no-repeat;
   background-image:${props => `url("/images/${props.bgImage}")`}; // ye wrap propertin tekebel keza eza wst yalewen bgImage props demo le backgroundImg asalefeh setelegn
   display:flex;
   flex-direction:column;
   justify-content:space-between; //vertical
   align-items-center;//horizontal
`
const ItemText = styled.div`
     padding-top:15vh;
     text-align:center;
     z-index:-1;
    
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
align-items:center;
justify-content:center;

@media (max-width:768px){
    flex-direction:column;
}

  
`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform: uppercase;
font-size:12px;
cursor:pointer;
margin:8px;


@media (max-width:768px){

}

`
const RightButton = styled(LeftButton)`
background  :white;
opacity:0.65;
color:black;

`
const DownArrow = styled.img`
height: 40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;
`
const Button = styled.div`
 text-align:center;
 align-item:center;
`