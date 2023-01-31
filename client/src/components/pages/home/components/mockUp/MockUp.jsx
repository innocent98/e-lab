import "./mockUp.scss";

const MockUp = () => {
  return (
    <div className="mock-up">
      <div className="left">
        <img src="assets/book/group1.png" alt="" className="group-1" />
        <img src="assets/book/group2.png" alt="" className="group-2" />
      </div>
      <div className="right">
        <img src="assets/book/vector.png" alt="" className="vector" />
        <h3>Reading made easy!!!</h3>
        <p>
          Compatible with a wide range of devices, including smartphones,
          tablets, laptops, and e-readers. No need to carry physical books,
          saving space and weight <br />
          Ability to adjust font size and background for better reading
          experience. Read in dimly lit environments or while on the go with
          backlit devices.
        </p>
      </div>
    </div>
  );
};

export default MockUp;
