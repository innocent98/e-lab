import "./saying.scss";
import { Zoom, Slide } from "react-awesome-reveal";

const Saying = () => {
  return (
    <div className="saying">
      <h1>
        <Zoom triggerOnce>What are our users saying?</Zoom>
      </h1>
      <Slide direction="right" triggerOnce>
        <div className="wrapper">
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              nulla non varius ullamcorper facilisis aliquet a mi maecenas.
              Tincidunt luctus
            </p>
            <h4>~Bukola</h4>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              nulla non varius ullamcorper facilisis aliquet a mi maecenas.
              Tincidunt luctus
            </p>
            <h4>~Abdullahi</h4>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              nulla non varius ullamcorper facilisis aliquet a mi maecenas.
              Tincidunt luctus
            </p>
            <h4>~Chika</h4>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Saying;
