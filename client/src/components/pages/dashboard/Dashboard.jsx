import React, { useContext, useEffect, useState } from "react";
import Dash from "../dash/Dash";
import "./dashboard.scss";
import SideBar from "../../sidebar/SideBar";
import { Context } from "../../../context/Context";
import { userRequest } from "../../../requestMethod";

export default function Dashboard() {
  const { user } = useContext(Context);
  console.log(user);

  const [books, SetBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await userRequest.get("/upload/my-uploads/" + user._id);
      SetBooks(res.data);
    };
    fetchBooks();
  }, [user._id]);

  return (
    <div className="dashboard">
      <div className="section">
        <div className="sdbr">
          <SideBar />
        </div>
        <div className="wrapper">
          <div className="top">
            <p className="">
              Dashboard
              <i className="notification-icon bi bi-bell-fill">
                <span className="position-absolute top-50 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </i>
            </p>
          </div>
        </div>

        <div className="welc">
          <p>
            <span className="user">Welcome back {user.firstName}!</span> <br />{" "}
            Your current account balance is{" "}
            <b>
              {user.currency.toUpperCase()}
              {user.availableBalance}.
            </b>{" "}
            This page contain the list of books you've uploaded. You have{" "}
            <b>{user.uploads}</b> total book(s) Uploaded
          </p>
        </div>
        <div className="books">
          {books.map((b) => (
            <Dash key={b._id} book={b} />
          ))}
        </div>
      </div>
    </div>
  );
}
