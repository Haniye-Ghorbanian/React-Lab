import { useState, useContext } from "react";
import ValidationContext from "../../../context/validation-context";
import WarningContext from "../../../context/waring-context";

const NameInputInFa = () => {
  const [persianName, setPersianName] = useState("");
  const { setIsPersianNameValid, isPersianNameValid } =
    useContext(ValidationContext);
  const { FaNameErrorMessage, setFaNameErrorMessage } =
    useContext(WarningContext);

  const handlePersianName = (e) => {
    const inputValue = e.target.value;

    // Check if any character is not Persian
    for (let i = 0; i < inputValue.length; i++) {
      const charCode = inputValue.charCodeAt(i);
      if (!(charCode >= 0x0600 && charCode <= 0x06ff)) {
        e.target.value = "";
        setIsPersianNameValid(false);
        setFaNameErrorMessage("لطفا زبان کیبورد خود را روی فارسی قرار دهید");
      } else {
        setPersianName(inputValue);
        setIsPersianNameValid(true);
        setFaNameErrorMessage("");
      }
    }
  };

  return (
    <div className="w-full">
      <label className="text-sm" htmlFor="nameFa">
        نام و نام‌خانوادگی به فارسی
      </label>
      <input
        className={`w-full h-12 focus:transition focus:ease-in-out focus:duration-200  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-none rounded-3xl border-solid border-2 border-slate-200 rounded-2xl px-4 py-5 text-sm input m-0 mt-3 ${
          isPersianNameValid === false
            ? "focus:ring-2 focus:ring-red-400 focus:border-none border-red-400"
            : isPersianNameValid === true
            ? "focus:ring-2 focus:ring-green-400 focus:border-none border-green-400"
            : "focus:ring-2 focus:ring-blue-400 focus:border-none border-slate-200"
        }`}
        type="text"
        id="nameFa"
        onChange={handlePersianName}
      />
      <span className="text-red-500 text-xs mr-5">
        {!isPersianNameValid && FaNameErrorMessage}
      </span>
    </div>
  );
};

export default NameInputInFa;
