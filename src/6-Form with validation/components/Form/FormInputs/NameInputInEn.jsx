import { useState, useContext } from "react";
import ValidationContext from "../../../context/validation-context";
import WarningContext from "../../../context/waring-context";

const NameInputInEn = () => {
  const [englishName, setEnglishName] = useState("");
  const { setIsEnglishNameValid, isEnglishNameValid } = useContext(ValidationContext);
  const {EnNameErrorMessage, setEnNameErrorMessage} = useContext(WarningContext);

  const handleEnglishName = (e) => {

    const inputValue = e.target.value;
    // Regular expression to match English characters
    const englishRegex = /^[a-zA-Z\s]*$/;

    if (englishRegex.test(inputValue)) {
      // Input contains only English characters, update the state
      setEnglishName(inputValue);
      setIsEnglishNameValid(true);
      setEnNameErrorMessage("");
    } else {
      // Input contains Persian characters, show warning message
      e.target.value = "";
      setIsEnglishNameValid(false);
      setEnNameErrorMessage("لطفا زبان کیبورد خود را انگلیسی قرار دهید.");;
    }
  };

  return (
    <div className="w-full">
      <label className="text-sm" htmlFor="nameFa">
        نام و نام‌خانوادگی به انگلیسی
      </label>
      <input
        className={`w-full h-12 focus:outline-none focus:transition focus:ease-in-out focus:duration-200 rounded-3xl border-solid border-2 border-slate-200 rounded-2xl px-4 py-5 text-sm m-0 mt-3 ${
          isEnglishNameValid  === false
            ? "focus:ring-2 focus:ring-red-400 focus:border-none"
            : isEnglishNameValid  === true
            ? "focus:ring-2 focus:ring-green-400 focus:border-none border-green-400"
            : "focus:ring-2 focus:ring-blue-400 focus:border-none  border-slate-200"
        }`}
        type="text"
        id="nameFa"
        onChange={handleEnglishName}
      />
      <span className={`text-red-500 text-xs mr-5 ${!isEnglishNameValid && `transition-opacity duration-200 delay-100`}`}>{!isEnglishNameValid && EnNameErrorMessage }</span>
    </div>
  );
};

export default NameInputInEn;
