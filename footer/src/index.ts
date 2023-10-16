import { createApp } from "vue";
import Footer from "./footer.vue";

const mount = (element: string) => {
	createApp(Footer).mount(element);
};

//@ts-ignore
window.footerMount = mount;

export default mount;
