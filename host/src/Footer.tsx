import { useEffect } from "react";
import { loadScript } from "./utils/loadScript";
import mount from "footer";

export const Footer = () => {
	// useEffect(() => {
	// 	loadScript("http://localhost:3002/index.js").then(() => {
	// 		//@ts-ignore
	// 		window.footerMount("#footer");
	// 	});
	// });
	useEffect(() => {
		mount("#footer");
	}, []);
	return <div id="footer"></div>;
};
