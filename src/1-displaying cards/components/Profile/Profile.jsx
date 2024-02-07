import "./Profile.css";

function Profile(props) {
  return (
    <div className="profile">
      <div className="profile-picture">
        <img src={props.image} alt={`${props.title}-profile-image`} />
      </div>
      <div className="profile-title">{props.title}</div>
    </div>
  );
}

export default Profile;
