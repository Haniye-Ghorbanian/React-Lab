import { useState } from "react";

const toPersianNumber = (number) => {
  const [year, setYear] = useState("");

  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(number).replace(/[0-9]/g, (match) => persianNumbers[+match]);
};

const YearSelect = ({ onChange }) => {
  const years = [];
  for (let year = 1340; year <= 1389; year++) {
    years.push(year);
  }

  return (
    <select
      name="year"
      onChange={onChange}
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none border-slate-300 text-sm p-1 mr-4 mb-6"
    >
      {years.map((year, index) => (
        <option key={index} value={year}>
          {toPersianNumber(year)}
        </option>
      ))}
    </select>
  );
};

export default YearSelect;
