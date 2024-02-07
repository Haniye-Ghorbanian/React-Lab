import "./ButtonsWrapper.css";
import DetailButton from "./DetailButton";
import EnrollButton from "./EnrollButton";
import FullButton from "./FullButton";

function ButtonsWrapper(props) {
  return (
    <div className={`buttons ${props.full ? "full" : ""}`}>
      {props.full ? (
        <FullButton></FullButton>
      ) : (
        <>
          <DetailButton></DetailButton>
          <EnrollButton></EnrollButton>
        </>
      )}
    </div>
  );
}

export default ButtonsWrapper;
