import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { authLogin } from '../Redux/reducer/user';
import SEO from '../Components/SEO';

const HomeScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleClick = () => {
    dispatch(authLogin());
  };


  return (
    <>
      <SEO
        extratitle={t("HomeScreen.name")}
        description={t("HomeScreen.description")}
      >
        <div>dasdas</div>
      </SEO>
    </>
  );
};

export default HomeScreen;
