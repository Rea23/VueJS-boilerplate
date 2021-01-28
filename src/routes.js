import Homepage from "./components/Homepage";
import Details from "./components/Details";

export default [
	{ path: "/", component: Homepage },
	{ path: "/details/:id", component: Details },
];
