import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="sarah.jpg" alt="Sarah" />;
}

function Intro() {
  return (
    <div>
      <h1>Sarah Romero</h1>
      <p>
        Junior Front-end web developer and currently looking for a job. When I
        am not coding, I love read books, watch movies, and play video games.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👶" color="orange" />
      <Skill skill="HTML+CSS" emoji="💪" color="green" />
      <Skill skill="JavaScript" emoji="🙂" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
