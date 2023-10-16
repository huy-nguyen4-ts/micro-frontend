export const loadScript = async (src: string) => {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = src;
		script.onload = () => {
			resolve(null);
		};
		document.head.append(script);
	});
};
