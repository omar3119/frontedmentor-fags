import React, { useState } from "react";
import "../styles/Question.css";
import iconPlus from "../image/icon-plus.svg";
import iconMinus from "../image/icon-minus.svg";


function Question({question,response,idresponse,isActive,clickQuestion}) {


  return (
    <article className="container__question" >
      <div className="section__1">
        <h2 className="question__h2">{question}</h2>
        <img src={`${isActive ? iconMinus : iconPlus}`} alt="icon-plus" className="icon" id={idresponse} onClick={()=> clickQuestion(idresponse)} />
      </div>

      <div className={`section__2 ${isActive ? "active__response" : ""}`}>
        <p>
        {response}
        </p>
      </div>
    </article>
  );
}

export default Question;