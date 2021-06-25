import initializeLogRocket from "./src/vendors/logRocket.vendor";
import "./src/styles/fonts.scss";
import "./src/styles/utils.scss";

export const onClientEntry = () => {
  initializeLogRocket();
};
