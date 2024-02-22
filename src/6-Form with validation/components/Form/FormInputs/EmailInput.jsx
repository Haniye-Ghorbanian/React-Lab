import { useState, useEffect, useContext } from "react";
import ValidationContext from "../../../context/validation-context";
import ButtonContext from "../../../context/button-context";
import WarningContext from "../../../context/waring-context";
import animation from "../../styles/animation.module.css"

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const { setIsEmailValid, isEmailValid } = useContext(ValidationContext);
  const {isSummitIsClicked} = useContext(ButtonContext);
  const {emailErrorMessage, setEmailErrorMessage} = useContext(WarningContext); 



  useEffect(() => {

    if (email === "") {
      setIsEmailValid(null);
      setEmailErrorMessage("");
      return;
    }
    const timeoutId = setTimeout(() => {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
      if (emailRegex.test(email)) {
        setIsEmailValid(true);
        setEmailErrorMessage("");
      } else if(email === "" && isSummitIsClicked) {
        setIsEmailValid(false);
        setEmailErrorMessage("وارد کردن ایمیل اجباری است");
      } 
      else {
        setIsEmailValid(false);
        setEmailErrorMessage("لطفا یک آدرس ایمیل معتبر وارد کنید.");
      }
    }, 100);
  
    return () => clearTimeout(timeoutId);
  }, [email]);
  

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  

  return (
    <div className="w-full">
      <label className="text-sm" htmlFor="nameFa">
        ایمیل
      </label>
      <input
        className={`w-full h-12 focus:outline-none focus:transition focus:ease-in-out focus:duration-200 focus:ring-2 focus:ring-blue-400 focus:border-none rounded-3xl border-solid border-2 border-slate-200 rounded-2xl px-4 py-5 text-sm m-0 mt-3 ${
          isEmailValid === false
            ? "focus:ring-2 focus:ring-red-400 focus:border-none"
            : isEmailValid === true
            ? "focus:ring-2 focus:ring-green-400 focus:border-none border-green-400"
            : "focus:ring-2 focus:ring-blue-400 focus:border-none border-slate-200"
        }`}
        type="text"
        id="nameFa"
        onChange={handleEmail}
      />
      <span className={`text-red-500 text-xs mr-5 h-6`}>{!isEmailValid && emailErrorMessage }</span>
    </div>
  );
};

export default EmailInput;
