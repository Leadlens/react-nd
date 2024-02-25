const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, Namaste React Course"
);
root.render(heading);
console.log(heading);
