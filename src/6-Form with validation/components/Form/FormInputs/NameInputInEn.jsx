import { useState } from "react";

const NameInputInEn = () => {
  const [englishName, setEnglishName] = useState("");
  const [warning, setWarning] = useState({ valid: null, message: "" });
  const { valid, message } = warning;

  const handleEnglishName = (e) => {

    setEnglishName(e.target.value);
    // Regular expression to match English characters
    const englishRegex = /^[a-zA-Z\s]*$/;

    if (englishRegex.test(englishName)) {
      // Input contains only English characters, update the state
      setEnglishName(inputValue);
      setWarning({ valid: true, message: "" });
    } else {
      // Input contains Persian characters, show warning message
      e.target.value = "";
      setWarning({
        valid: false,
        message: "لطفا زبان کیبورد خود را انگلیسی قرار دهید.",
      });
    }
  };

  return (
    <div className="w-full">
      <label className="text-sm" htmlFor="nameFa">
        نام و نام‌خانوادگی به انگلیسی
      </label>
      <input
        className={`w-full h-12 focus:outline-none rounded-3xl border-solid border-2 border-slate-200 rounded-2xl px-4 py-5 text-sm ${
          valid === false
            ? "focus:ring-2 focus:ring-red-400 focus:border-none"
            : valid === true
            ? "focus:ring-2 focus:ring-green-400 focus:border-none"
            : "focus:ring-2 focus:ring-blue-400 focus:border-none"
        }`}
        type="text"
        id="nameFa"
        onChange={handleEnglishName}
      />
      {!valid && <span className="text-red-500 text-xs mr-5">{message}</span>}
    </div>
  );
};

export default NameInputInEn;
