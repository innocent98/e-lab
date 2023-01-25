import "./dash.css";
import moment from "moment";

export default function Dash({ book }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="dash">
      <div className="book">
        <img
          src={book.bookCover ? PF + book.bookCover : PF + "person/person3.png"}
          alt=""
        />
        <p className="sold">
          Sold: {book.purchaseCount}{" "}
          <span
            className="date"
            style={{ textAlign: "right", float: "right", fontSize: "12px" }}
          >
            {moment(book.createdAt).fromNow()}
          </span>
        </p>
      </div>
    </div>
  );
}
