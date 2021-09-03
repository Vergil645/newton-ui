import React from "react";
import "./Title.css";

export default class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <span>NEWTON</span>&#160;
        <span style={{color: "#3a42e7"}}>UI</span>
        <a href="https://www.freepik.com" style={{display: "none"}}>
          Designed by starline / Freepik
        </a>
      </div>
    );
  }
}
