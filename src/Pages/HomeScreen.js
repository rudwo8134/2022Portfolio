import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { authLogin } from '../Redux/reducer/user';

const HomeScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleClick = () => {
    dispatch(authLogin());
  };

  console.log(user?.info);

  return (
    <>
      <Helmet>
        <title>HomeScreen</title>
        <meta name="description" content="Shop our latest product now" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Wrapper>
        <p>{t('welcome')}</p>
        <button onClick={handleClick}>login</button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.header};
`;

export default HomeScreen;
