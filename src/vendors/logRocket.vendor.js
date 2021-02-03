import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

export default () => {
  if (
    process.env &&
    process.env.GATSBY_PRODUCTION === 'true' &&
    process.env.GATSBY_LOGROCKET_ENABLED === 'true' &&
    process.env.GATSBY_LOGROCKET_KEY
  ) {
    LogRocket.init(process.env.GATSBY_LOGROCKET_KEY);
    setupLogRocketReact(LogRocket);
  }
};
