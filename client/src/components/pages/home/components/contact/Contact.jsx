import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1>DROP A MESSAGE</h1>
      <p>Any Questions, feel free to drop a message for us</p>

      <form className="row">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone Number" required />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        />
        <button className="sign">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
