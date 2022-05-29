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
        <title>HomeScreenzzz</title>
        <meta name="description" content="Shop our latest product now" />
        <link rel="canonical" href="/" />
      </Helmet>
    </>
  );
};



export default HomeScreen;
