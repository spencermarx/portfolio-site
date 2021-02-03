import LogRocket from 'logrocket';

export default () => {
  console.log(
    JSON.stringify({
      env: process.env,
      PRODUCTION: process.env.PRODUCTION,
      LOGROCKET_ENABLED: process.env.LOGROCKET_ENABLED,
      LOGROCKET_KEY: process.env.LOGROCKET_KEY,
    }),
  );
  if (
    process.env &&
    process.env.PRODUCTION === 'true' &&
    process.env.LOGROCKET_ENABLED === 'true' &&
    process.env.LOGROCKET_KEY
  ) {
    LogRocket.init(process.env.LOGROCKET_KEY);
  }
};
