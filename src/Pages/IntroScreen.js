import React from 'react'
import { useTranslation } from 'react-i18next';

const IntroScreen = () => {
  const {t} = useTranslation();
  return (
    <div>{t("welcome")}</div>
  )
}

export default IntroScreen