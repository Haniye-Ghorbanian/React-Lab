import Profile from "../profile/profile";
import ButtonsWrapper from "../Buttons/ButtonsWrapper";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <Profile title={props.title} image={props.image}></Profile>
      <ButtonsWrapper full={props.full}></ButtonsWrapper>
    </div>
  );
}

export default Card;
