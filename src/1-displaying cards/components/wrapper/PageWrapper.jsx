import "./PageWrapper.css";
import Card from "../card/card";

function PageWrapper(props) {
  return (
    <div id="wrapper">
      {props.data.map((course) => {
        return (
          <Card
            title={course.title}
            image={course.image}
            full={course.full}
            key={course.id}
          ></Card>
        );
      })}
    </div>
  );
}

export default PageWrapper;
