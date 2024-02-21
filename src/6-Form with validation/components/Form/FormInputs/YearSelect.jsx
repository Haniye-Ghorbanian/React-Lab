import { useState, useContext } from "react";
import ValidationContext from "../../../context/validation-context";

const YearSelect = () => {
  const [year, setYear] = useState("");
  const { isYearSelected, setIsYearSelected } = useContext(ValidationContext);

  const toPersianNumber = (number) => {
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return String(number).replace(/[0-9]/g, (match) => persianNumbers[+match]);
  };
  const years = [];
  for (let year = 1340; year <= 1389; year++) {
    years.push(year);
  }

  const handleYearChange = (e) => {
    e.target.value !== "" ? setIsYearSelected(true) : setIsYearSelected(false);
  };

  return (
    <div className="flex items-center ">
      <label htmlFor="birthYear" className="text-sm ml-3">
        سال تولد
      </label>
      <select
        id="birthYear"
        name="year"
        onChange={handleYearChange}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none border-slate-300 text-sm p-1"
      >
        {years.map((year, index) => (
          <option key={index} value={year}>
            {toPersianNumber(year)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelect;
