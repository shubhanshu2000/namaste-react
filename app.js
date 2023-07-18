const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { class: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { class: "child" }, [
    React.createElement("h1", {}, "I'm h1 child"),
    React.createElement("h2", {}, "I'm h2 child"),
  ]),
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
