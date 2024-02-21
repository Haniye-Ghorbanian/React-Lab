import { useState, useEffect, useContext } from "react";
import ValidationContext from "../../../context/validation-context";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const { setIsEmailValid, isEmailValid } = useContext(ValidationContext);



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
      } else {
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
        className={`w-full h-12 focus:outline-none focus:transition focus:ease-in-out focus:duration-200 focus:ring-2 focus:ring-blue-400 focus:border-none rounded-3xl border-solid border-2 border-slate-200 rounded-2xl px-4 py-5 text-sm mb-4 ${
          isEmailValid === false
            ? "focus:ring-2 focus:ring-red-400 focus:border-none"
            : isEmailValid === true
            ? "focus:ring-2 focus:ring-green-400 focus:border-none"
            : "focus:ring-2 focus:ring-blue-400 focus:border-none"
        }`}
        type="text"
        id="nameFa"
        onChange={handleEmail}
      />
      {!isEmailValid && (
        <span className="text-red-500 text-xs mr-5">{emailErrorMessage}</span>
      )}
    </div>
  );
};

export default EmailInput;
