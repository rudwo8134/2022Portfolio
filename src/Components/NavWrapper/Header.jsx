import React from 'react'
import styled from 'styled-components'
import Logo from '../../source/UBFLogo.png'
import { useTranslation } from 'react-i18next';

const NavWrapper = styled.nav`
  width: 100vw;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.WhiteColor};
  padding: 2rem 1.5rem;
  margin: 0;
  display: flex ;
`;
const LeftSide = styled.div`

  display: flex;
  align-items: center ;
`
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.0rem;
  height: 2.0rem;
  img{
    width: 100%;
    height: 100%;
  }
`
const TextWrapper = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSize.L};
    color: ${({ theme }) => theme.colors.MainColor};
    position: relative;
    margin-left: 6px;
    font-weight: ${({ theme }) => theme.fontWeight.XL};
  }
  h2 {
    position: absolute;
    top: 1rem;
    left: 25%;
    font-size: ${({ theme }) => theme.fontSize.Normal};
    color: ${({ theme }) => theme.colors.MainColor};
    font-weight: ${({ theme }) => theme.fontWeight.L};
  }
`;
const RightSide = styled.div`
  flex: 1;
`;

const Header = () => {
  const {t} = useTranslation()
  return (
    <NavWrapper>
      <LeftSide>
        <ImageWrapper>
          <img src={Logo} alt="Image Logo" />
        </ImageWrapper>
        <TextWrapper>
          <h1>
            {t('Nav.HomePageName')}
            <h2>{t('Nav.subName')}</h2>
          </h1>
        </TextWrapper>
      </LeftSide>
      <RightSide>ddd</RightSide>
    </NavWrapper>
  );
}

export default Header