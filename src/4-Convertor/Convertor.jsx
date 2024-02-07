import { useState } from "react";
import "./Convertor.css";

const Convertor = () => {
  const [parameter, setParameter] = useState({
    amount: "",
    from: "",
    to: "",
  });

  const [result, setResult] = useState();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setParameter({ ...parameter, [name]: value });
    console.log(parameter);
  };

  const calculator = () => {
    const { amount, from, to } = parameter;
    setResult((amount * to) / from);
  };

  return (
    <div className="container column">
      <div className="amount w-50">
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" onChange={handleChange} />
      </div>
      <div>
        <div className="row w-50">
          <div className="parameter row">
            <div className="parameter-from">
              <label htmlFor="from">From</label>
              <select name="from" id="from" onChange={handleChange}>
                <option value="">choose parameter</option>
                <option value={1}>Kilometer</option>
                <option value={1000}>Meter</option>
                <option value={100000}>Centimeter</option>
                <option value={1000000}>Millimeter</option>
              </select>
            </div>
            <div>
              <label htmlFor="to">To</label>
              <select name="to" id="to" onChange={handleChange}>
                <option value="">choose parameter</option>
                <option value={1}>Kilometer</option>
                <option value={1000}>Meter</option>
                <option value={100000}>Centimeter</option>
                <option value={1000000}>Millimeter </option>
              </select>
            </div>
          </div>
          <button className="convertor-btn" onClick={calculator}>
            Convert
          </button>
        </div>
      </div>
      <div className="result w-50">result:{result}</div>
    </div>
  );
};

export default Convertor;
