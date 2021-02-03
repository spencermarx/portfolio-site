import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

export default () => {
  console.log('GATSBY_PRODUCTION', process.env.GATSBY_PRODUCTION);
  console.log('GATSBY_LOGROCKET_ENABLED', process.env.GATSBY_LOGROCKET_ENABLED);
  console.log('GATSBY_LOGROCKET_KEY', process.env.GATSBY_LOGROCKET_KEY);
  if (
    process.env &&
    process.env.GATSBY_PRODUCTION === 'true' &&
    process.env.GATSBY_LOGROCKET_ENABLED === 'true' &&
    process.env.GATSBY_LOGROCKET_KEY
  ) {
    LogRocket.init(process.env.LOGROCKET_KEY);
    setupLogRocketReact(LogRocket);
  }
};
