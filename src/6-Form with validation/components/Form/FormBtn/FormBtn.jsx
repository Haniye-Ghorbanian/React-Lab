import { useState, useContext, useEffect } from "react";
import validationContext from "../../../context/validation-context";

const FormBtn = () => {
  const [activeButton, setActiveButton] = useState(false);
  const [isSummitIsClicked, setIsSummitIsClicked] = useState(false);
  const isValidated = useContext(validationContext);

  const {
    isEmailValid,
    isEnglishNameValid,
    isPersianNameValid,
    isYearSelected,
  } = isValidated;

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
    >
      ثبت درخواست
    </button>
  );
};

export default FormBtn;
