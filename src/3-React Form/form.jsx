import React, { useState } from "react";
import "./form.css";
import "./table.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    familyName: "",
    mobile: "",
    gender: "male",
    city: "tehran",
    age: "",
    skills: {
      html: false,
      css: false,
      js: false,
      angular: false,
      react: false,
      vue: false,
    },
  });

  const [showTable, setShowTable] = useState(false);
  const [hasError, setHasError] = useState(false)

  const renderTable = () => {
    return (
      <table className="result-table">
        <thead>
          <tr>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>شماره موبایل</th>
            <th>جنسیت</th>
            <th>شهر</th>
            <th>سن</th>
            <th>مهارت‌ها</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formData.name}</td>
            <td>{formData.familyName}</td>
            <td>{formData.mobile}</td>
            <td>{formData.gender}</td>
            <td>{formData.city}</td>
            <td>{formData.age}</td>
            <td>
              {Object.keys(formData.skills)
                .filter((skill) => formData.skills[skill])
                .join(", ")}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  function checkValidiy() {
    const { name, value, type, checked } = e.target;
    if(e.target.name.match(/^[\u0600-\u06FF\s]+$/)){

    }
  }
  const isValidPersianName = (name) => /^[\u0600-\u06FF\s]+$/.match(name);
  const isValidMobile = (mobile) => /^09\d{9}$/.match(mobile);

  const [validity, setValidity] = useState({
    name: true,
    familyName: true,
    mobile: true,
  });


  const handleAddButton = () => {
    if (
      formData.name.trim() === "" ||
      formData.familyName.trim() === "" ||
      formData.mobile.trim() === "" ||
      formData.age.trim() === ""
    ) {
      alert("Please fill in all required fields.");
    } else {
      setShowTable(true);
      setFormData((prevData) => ({ ...prevData }));
      renderTable();
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    checkValidiy(e.target)
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        skills: {
          ...prevData.skills,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } 
  };

  return (
    <div className="container">
      <div className="form">
        <label>
          اسم:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          نام خانوادگی:
          <input
            type="text"
            name="familyName"
            value={formData.familyName}
            onChange={handleChange}
          />
        </label>

        <label>
          شماره موبایل:
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </label>

        <label>
          جنسیت:
          <label>
            مرد
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
          </label>
          <label>
            زن
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
          </label>
        </label>

        <label>
          شهر:
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="tehran">تهران</option>
            <option value="tabriz">تبریز</option>
            <option value="isfahan">اصفهان</option>
            <option value="rasht">رشت</option>
          </select>
        </label>

        <label>
          سن:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          مهارت‌ها:
          {Object.keys(formData.skills).map((skill) => (
            <label key={skill}>
              {skill}
              <input
                type="checkbox"
                name={skill}
                checked={formData.skills[skill]}
                onChange={handleChange}
              />
            </label>
          ))}
        </label>

        <button onClick={handleAddButton}>افزودن</button>
      </div>

      {showTable && renderTable()}
    </div>
  );
};

export default Form;
