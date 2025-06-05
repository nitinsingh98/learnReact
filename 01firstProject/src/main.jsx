import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";

const element = (
  <a href="https://google.com" target="_blank">
    jojoasdfsdfs
  </a>
);

const reactElement = {
  type: "a",
  props: { href: "https://google.com", target: "_blank" },
  children: "click me",
};

// variables are evaluated only in the end, so we put variable after string in realReactElement
// all the arguments are necessary, you can leave them blank btw
const realReactElement = React.createElement(
  'a',
  {
    href: "https://google.com", target: "_blank" 
  },
  "click me"
)


createRoot(document.getElementById("root")).render(<App/>);
