import { useState } from "react";

const FormBtn = () => {
  const [activeButton, setActiveButton] = useState(false);

  const handleActiveButton = () => {};
  return (
    <button
      className={`w-full text-md px-6 py-4 text-sm flex justify-center items-center rounded-3xl ${
        !activeButton
          ? `bg-slate-300 cursor-auto`
          : `bg-blue-300 hover:bg-blue-400 transition ease-in-out duration-200`
      }`}
      onClick={handleActiveButton}
    >
      ثبت درخواست
    </button>
  );
};

export default FormBtn;
