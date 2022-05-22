import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { EN } from './en';
import {KR} from './kr';
import React, { Suspense } from 'react';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: EN },
    kr: { translation: KR },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});


const Translation = ({children}) => {
  return <Suspense fallback="loading">{children}</Suspense>;
}

export default Translation;

