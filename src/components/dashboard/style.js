import styled from "styled-components";
import { NavLink } from "react-router-dom";

// --------------  Mobile  --------------

export const DashboardAlignment = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const MobileButton = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DashboardButtonText = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #277fe5;
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: bold;
  border-radius: 100px;
  width: 307px;
  height: 63px;
  margin: 5%;
`;

export const LogoContainer = styled.div`
  margin-bottom: 10%;
  font-size: 3rem;
`;

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 800;
  color: #000;
`;

export const LogoText = styled.h1`
  margin-bottom: 5%;
  font-weight: 800;
  color: #277fe5;
`;

// --------------  Desktop  --------------

export const Dashboard = styled.section`
  display: none;
  @media (min-width: 768px) {
    width: 63%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
`;

export const WelcomeTitle = styled.p`
  font-size: 1.4rem;
  margin: 4% 0 3% 0;
  line-height: 35px;
`;

export const Image = styled.img`
  width: 80%;
  margin: 0 auto;
`;

export const NavigationContainer = styled.aside`
  display: none;
  @media (min-width: 768px) {
    padding-top: 3%;
    float: left;
    height: 100vh;
    width: 18rem;
    background: #e8e8e8;
    display: block;
    position: sticky;
    top: 0;
  }
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  padding-bottom: 10%;
  color: black;
  margin-left: 5rem;
  :hover {
    font-weight: 800;
    color: #277fe5;
    transition: 0.3s;
  }
  &.active {
    color: #277fe5;
    font-weight: 800;
  }
`;

export const Nav = styled.div`
  font-family: Montserrat;
  display: flex;
  padding-top: 2%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #000;
`;

export const Logo2 = styled.a`
  display: flex;
  justify-content: center;
  margin-bottom: 50%;
  font-weight: 800;
  font-size: 24px;
  color: #000;
  text-decoration: none;
`;

export const LogoText2 = styled.span`
  color: #277fe5;
`;

// --------------  Quotes  --------------

export const QuoteContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10rem;
`;
