import { useState } from "react";
import styles from "../../styles/sizes.module.css";
import FormInputsWrapper from "../FormInputsWrapper/FormInputsWrapper";
import NameInputInFa from "../FormInputs/NameInputInFa";
import NameInputInEn from "../FormInputs/NameInputInEn";
import EmailInput from "../FormInputs/EmailInput";
import YearSelect from "../FormInputs/YearSelect";
import FormBtn from "../FormBtn/FormBtn";
import ValidationContext from "../../../context/validation-context";
import ButtonContext from "../../../context/button-context";
import WarningContext from "../../../context/waring-context";

const FormWrapper = () => {
  //Submmit Button Context
  const [isSummitIsClicked, setIsSummitIsClicked] = useState(false);

  //Input Validation Context
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isEnglishNameValid, setIsEnglishNameValid] = useState(null);
  const [isPersianNameValid, setIsPersianNameValid] = useState(null);
  const [isYearSelected, setIsYearSelected] = useState(null);

  // Warning Messages Context
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [FaNameErrorMessage, setFaNameErrorMessage] = useState("");
  const [EnNameErrorMessage, setEnNameErrorMessage] = useState("");
  const [YearErrorMessage, setYearErrorMessage] = useState("");

  return (
    <ValidationContext.Provider
      value={{
        isEmailValid,
        isEnglishNameValid,
        isPersianNameValid,
        isYearSelected,
        setIsEmailValid,
        setIsEnglishNameValid,
        setIsPersianNameValid,
        setIsYearSelected,
      }}
    >
      <ButtonContext.Provider
        value={{
          isSummitIsClicked,
          setIsSummitIsClicked,
        }}
      >
        <WarningContext.Provider
          value={{
            emailErrorMessage,
            setEmailErrorMessage,
            FaNameErrorMessage,
            setFaNameErrorMessage,
            EnNameErrorMessage,
            setEnNameErrorMessage,
            YearErrorMessage,
            setYearErrorMessage,
          }}
        >
          <div
            className={`w-2/5 h-96 flex flex-col items-center px-16 ${styles.height}`}
          >
            <FormInputsWrapper>
              <NameInputInFa />
              <NameInputInEn></NameInputInEn>
              <EmailInput></EmailInput>
              <YearSelect></YearSelect>
              <FormBtn></FormBtn>
            </FormInputsWrapper>
          </div>
        </WarningContext.Provider>
      </ButtonContext.Provider>
    </ValidationContext.Provider>
  );
};

export default FormWrapper;
