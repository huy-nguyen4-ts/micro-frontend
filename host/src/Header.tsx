import * as React from "react";
import * as ReactDOM from "react-dom";
import { useEffect } from "react";
import { loadScript } from "./utils/loadScript";

window.React = React;
window.ReactDOM = ReactDOM;

export const Header = () => {
	useEffect(() => {
		loadScript("http://localhost:3001/index.js").then(() => {
			//@ts-ignore
			window.headerMount("#header");
		});
	});
	return <div id="header"></div>;
};
