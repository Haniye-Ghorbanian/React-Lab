import { useState, useContext, useEffect } from "react";
import validationContext from "../../../context/validation-context";
import ButtonContext from "../../../context/button-context";
import WarningContext from "../../../context/waring-context";

const FormBtn = () => {
  const [activeButton, setActiveButton] = useState(false);
  const isValidated = useContext(validationContext);
  const btnCtx = useContext(ButtonContext);
  const {
    emailErrorMessage,
    setEmailErrorMessage,
    FaNameErrorMessage,
    setFaNameErrorMessage,
    EnNameErrorMessage,
    setEnNameErrorMessage,
    YearErrorMessage,
    setYearErrorMessage,
  } = useContext(WarningContext);

  const {
    isEmailValid,
    isEnglishNameValid,
    isPersianNameValid,
    isYearSelected,
    setIsEmailValid,
    setIsEnglishNameValid,
    setIsPersianNameValid,
    setIsYearSelected,
  } = isValidated;

  const { isSummitIsClicked, setIsSummitIsClicked } = btnCtx;

  const handleSubmmitBtn = () => {
    setIsSummitIsClicked(true);
    if (!isEmailValid && !isEnglishNameValid && !isPersianNameValid && !isYearSelected) {
      setEmailErrorMessage("وارد کردن ایمیل اجباری است")
      setEnNameErrorMessage("پر کردن این فیلد اجباری است")
      setFaNameErrorMessage("پر کردن این فیلد اجباری است")
      setYearErrorMessage("پر کردن این فیلد اجباری است")
    } else if(!isEmailValid && !isEnglishNameValid && !isPersianNameValid) {
      setEmailErrorMessage("وارد کردن ایمیل اجباری است")
      setEnNameErrorMessage("پر کردن این فیلد اجباری است")
      setFaNameErrorMessage("پر کردن این فیلد اجباری است")
    } else if(!isEmailValid && !isEnglishNameValid) {
      setEmailErrorMessage("وارد کردن ایمیل اجباری است")
      setEnNameErrorMessage("پر کردن این فیلد اجباری است")
    } 
  };

  useEffect(() => {
    if (
      isEmailValid &&
      isEnglishNameValid &&
      isPersianNameValid &&
      isYearSelected
    ) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [isEmailValid, isEnglishNameValid, isPersianNameValid, isYearSelected]);

  return (
    <button
      className={`w-full text-md px-6 py-4 text-sm flex justify-center items-center rounded-3xl ${
        !activeButton
          ? `bg-slate-300 cursor-auto`
          : `bg-blue-300 hover:bg-blue-400 transition ease-in-out duration-200`
      }`}
      onClick={handleSubmmitBtn}
    >
      ثبت درخواست
    </button>
  );
};

export default FormBtn;
