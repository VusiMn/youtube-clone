import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); //the root referenced here is element in public folder file index.html has a tag with root ID
root.render(<App />); //substituting the content of the root with this.
