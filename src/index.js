import ReactDOM from "react-dom";

// for the inline styline
let greetingStyle = { color: "silver" };

const greeting = () => {
  const timeNow = new Date(2022, 2, 24, 7);
  const hour = timeNow.getHours();

  if (hour < 12) {
    greetingStyle.color = "red";
    return "Good Morning";
  } else if (hour < 18) {
    greetingStyle.color = "green";
    return "Good Afternoon";
  } else if (hour >= 18) {
    greetingStyle.color = "blue";
    return "Good Night";
  }
};

// styling from styles.css; use camel case "className" within HTML JSX.
const rootElement = document.getElementById("root");
ReactDOM.render(
  <h1 className="heading" style={greetingStyle}>
    {greeting()}
  </h1>,
  rootElement
);
