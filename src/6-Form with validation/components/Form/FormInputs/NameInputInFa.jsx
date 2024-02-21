import { useState } from "react";

const NameInputInFa = () => {
  const [persianName, setPersianName] = useState("");
  const [warning, setWarning] = useState({ valid: null, message: "" });

  const { valid, message } = warning;

  const handlePersianName = (e) => {
    const inputValue = e.target.value;

    // Check if any character is not Persian
    for (let i = 0; i < inputValue.length; i++) {
      const charCode = inputValue.charCodeAt(i);
      if (!(charCode >= 0x0600 && charCode <= 0x06ff)) {
        setWarning({
          valid: false,
          message: "لطفا زبان کیبورد خود را روی فارسی قرار دهید",
        });
      } else {
        setPersianName(inputValue);
        setWarning({ valid: true, message: "" });
      }
    }
  };

  return (
    <div className="w-full">
      <label className="text-sm" htmlFor="nameFa">
        نام و نام‌خانوادگی به فارسی
      </label>
      <input
        className={`w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-none rounded-3xl border-solid border-2 border-slate-200 rounded-2xl px-4 py-5 text-sm input ${
          valid === false
            ? "focus:ring-2 focus:ring-red-400 focus:border-none"
            : valid === true
            ? "focus:ring-2 focus:ring-green-400 focus:border-none"
            : "focus:ring-2 focus:ring-blue-400 focus:border-none"
        }`}
        type="text"
        id="nameFa"
        onChange={handlePersianName}
      />
      {!valid && <span className="text-red-500 text-xs mr-5">{message}</span>}
    </div>
  );
};

export default NameInputInFa;
