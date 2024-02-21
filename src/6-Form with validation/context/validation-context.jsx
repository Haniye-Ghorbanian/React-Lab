import React from "react";

const ValidationContext = React.createContext({
  isEmailValid: null,
  isEnglishNameValid: null,
  isPersianNameValid: null,
  isYearSelected: null,
});


export default ValidationContext;