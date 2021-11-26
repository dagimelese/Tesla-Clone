import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                tittle="Model S"
                description="Order Online for  Touchless Delivery "
                backgroundImg = "model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
                
            />
            <Section
                tittle="Model Y"
                description=" Order Online for  Touchless Delivery "
                backgroundImg = "model-y.jpg"
             leftBtnText="Custom Order"
             rightBtnText="Existing inventory"
            />
            <Section
                 tittle="Model 3"
                 description="Order Online for  Touchless Delivery "
                 backgroundImg = "model-3.jpg"
                 leftBtnText="Custom Order"
                 rightBtnText="Existing inventory"
            />
            <Section
             tittle="Model X"
             description="Order Online for  Touchless Delivery "
             backgroundImg="model-x.jpg"
             leftBtnText="Custom Order"
             rightBtnText="Existing inventory"
            />
            <Section
             tittle="Lowest Cost "
             description="Money-Back Guarantee "
             backgroundImg="solar-panel.jpg"
             leftBtnText=" Order Now"
             rightBtnText="Learn More"
            />
            <Section
              tittle="Solar For New Roof "
              description="Solar Roof Costs Less Than a New Roof Plus Solar Panels  "
              backgroundImg="solar-roof.jpg"
              leftBtnText=" Order Now"
              rightBtnText="Learn More"
            />
             <Section
              tittle="Accessories"
              backgroundImg="accessories.jpg"
              leftBtnText=" Order Now"
            />
             <Section
              tittle="Solar For New Roof "
              description="Solar Roof Costs Less Than a New Roof Plus Solar Panels  "
              backgroundImg="solar-roof.jpg"
              leftBtnText=" Order Now"
              rightBtnText="Learn More"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
         height: 100vh;
        //  z-index:10;
`
