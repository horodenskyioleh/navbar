import React, {useState} from "react";

import airplane from "./assets/img/airplane.png"
import {
  Header, 
  Wrapper,
  LogoContainer,
  ImageLogo,
  NavList,
  NavItem,
  Sign,
  NavItemLink,
  ImageText,
  ContainerLogButton,
  ContainerRegButton,
  LogButton,
  RegButton
} from "./styles/navbar.styles"

function App() {
  // const [isOpen, setModalIsOpen] = useState(false);
  // const [isOpenSingup, setModalIsOpenSingup] = useState(false);


  return (
    <div className="App">
       <Header>
            <Wrapper>
                <LogoContainer >
                    <ImageLogo src={airplane} />
                    <ImageText>Travel</ImageText>
                        
                    
                </LogoContainer>
                <NavList>

                    <NavItem>
                        <NavItemLink>
                            Home
                        </NavItemLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavItemLink>
                            What is it?
                        </NavItemLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavItemLink>
                            Contact us
                        </NavItemLink>
                    </NavItem>
                        
                    
                </NavList>
                
                 <Sign>
                     <ContainerLogButton>
                        <LogButton 
                            //onClick={() => setModalIsOpen(true)} 
                         >Sign in</LogButton>
                     </ContainerLogButton>
                    
                     <ContainerRegButton>
                         <RegButton
                           // onClick={() => setModalIsOpenSingup(true)}
                         >Sign up</RegButton>
                     </ContainerRegButton>
                 </Sign>
               
            </Wrapper>

           </Header>

    </div>
  );
}

export default App;
