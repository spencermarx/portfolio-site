import initializeLogRocket from "./src/vendors/logRocket.vendor";
import "./src/styles/fonts.scss";

export const onClientEntry = () => {
  initializeLogRocket();
};
