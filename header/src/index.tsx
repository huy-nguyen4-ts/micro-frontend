import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import React from "react";

export * from "./Header";

const mount = (element: string) => {
	const root = ReactDOM.createRoot(document.getElementById(element) as HTMLElement);
	root.render(<Header />);
};

//@ts-ignore
window.headerMount = mount;
