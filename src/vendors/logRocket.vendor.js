import LogRocket from 'logrocket';

export default () => {
  if (
    process.env &&
    process.env.PRODUCTION === 'true' &&
    process.env.LOGROCKET_ENABLED === 'true' &&
    process.env.LOGROCKET_KEY
  ) {
    LogRocket.init(process.env.LOGROCKET_KEY);
  }
};
