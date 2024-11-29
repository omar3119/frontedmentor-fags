import iconStart from "./image/icon-star.svg";
import imageBg from "./image/background-pattern-mobile.svg";
import imageDesktop from "./image/background-pattern-desktop.svg";
import Question from "./components/Question";
import { faqs } from "./data";
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [active, setActive] = useState(faqs[0].id);
  console.log(active);
  function showResponse(id) {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  }
  return (
    <div className="container">
      <img src={imageBg} alt="bg" className="bg-mobile" />
      <img src={imageDesktop} alt="bg" className="bg-desktop" />

      <div className="container__fags">
        <div className="container__title">
          <img src={iconStart} alt="icon-plus" />

          <h1>FAQs</h1>
        </div>
        <div className="container__questions">
          {faqs.map((faq, index) => (
            <Question
              question={faq.question}
              response={faq.answer}
              key={index}
              idresponse={faq.id}
              isActive={active === faq.id}
              clickQuestion={showResponse}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
