import initializeLogRocket from './src/vendors/logRocket.vendor';

export const onClientEntry = () => {
  initializeLogRocket();
};
