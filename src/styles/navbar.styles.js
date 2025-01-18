import styled from 'styled-components';



export const Header = styled.header`
    width: 100%;
    border-bottom: 1px solid lightGray;
    border-bottom: 1px solid transparent;
    
    //background-color: white;
    //background-color:#202124;
    background-color:lightGray;
    /* opacity: 0.5; */
`;

export const Wrapper = styled.div`

    max-width: 1100px;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    
    margin: 0 auto;
    background-color: white;
     background-color:lightGray; 
     opacity: 1;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ImageLogo = styled.img`
    width: 35px;
    height: 35px;
    
`;

export const ImageText = styled.h1`
    font-size: 20px;
    //color: #4169e1; //acquablue
    //color: violet;
    color: white;
    margin-left: 10px;
    text-align: center;
`;

export const NavList = styled.ul`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavItem = styled.li`
    text-decoration: none;
    list-style-type: none;
    margin-left: 50px;

    &:first-child{
        margin-left: 0;
    }
    
`;

export const NavItemLink = styled.a`
    cursor: pointer;
    color: white;
    font-weight: 500;

    &:hover{
        display: inline-block;
        width: 85px;
        height: 25px;

        border-bottom: 2px solid violet;
        text-align: center;
        padding: 1px;
        
        transition: all 0.3s ease;
    }
`;

export const Sign = styled.div`
    margin-right: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const ContainerLogButton = styled.div`
    
    border-radius: 17px;
    margin-right: 20px;
    //color: violet;
    color: white;

     &:hover{
        cursor: pointer;
        //background-color: #87ceeb;
        background-color: violet;

        color: white;
    } 

`;

export const ContainerRegButton = styled.div`
    background-color: violet;
    
    border-radius: 17px;
    margin-right: 15px;
    color: white;

    &:hover{
        cursor: pointer;
        background-color: white;
        border: 1px solid violet;
        color: violet;
    }
`;

export const LogButton = styled.a`
    display: inline-block;
    padding: 8px 17px;
       
`;

export const RegButton = styled.a`
    display: inline-block;
    padding: 8px 17px;

`;
