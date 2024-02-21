import styles from "../../styles/sizes.module.css";
import FormInputsWrapper from "../FormInputsWrapper/FormInputsWrapper";
import NameInputInFa from "../FormInputs/NameInputInFa";
import NameInputInEn from "../FormInputs/NameInputInEn";
import EmailInput from "../FormInputs/EmailInput";
import YearSelect from "../FormInputs/YearSelect";
import FormBtn from "../FormBtn/FormBtn";

const FormWrapper = () => {
  return (
    <div
      className={`w-2/5 h-96 flex flex-col align-center justify-around py-4 px-16 ${styles.height}`}
    >
      <FormInputsWrapper>
        <NameInputInFa />
        <NameInputInEn></NameInputInEn>
        <EmailInput></EmailInput>
        <YearSelect></YearSelect>
        <FormBtn></FormBtn>
      </FormInputsWrapper>
    </div>
  );
};

export default FormWrapper;
