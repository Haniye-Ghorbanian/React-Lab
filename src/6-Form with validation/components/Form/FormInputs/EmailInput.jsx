import { useState, useEffect } from "react";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");


console.log(isEmailValid)
  useEffect(() => {

    if (email === "") {
      // If the email field is empty, consider it valid and clear any error message
      setIsEmailValid(null);
      setEmailErrorMessage("");
      return;
    }
    const timeoutId = setTimeout(() => {
      // Your email validation logic here
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
