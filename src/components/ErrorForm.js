import React from 'react';
import { Button } from 'react-bootstrap';
import './errorform.scss';
import PropTypes from 'prop-types';

const ErrorForm = props => {
  const { handleReset } = props;
  return (
    <>
      <div className="ErrorForm">
        <h5 className="ErrorForm-Message text-center">Something Went Wrong!</h5>
        <p className="ErrorForm-SubMessage text-center">
          Try submitting the form again or contact me by&nbsp;
          <a
            className="ErrorForm-Link"
            href="mailto:spencer.s.marx@gmail.com?subject=Hi%20there!"
          >
            email
          </a>
        </p>
        <svg
          className="ErrorForm-Errormark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="ErrorForm-Errormark-Circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="ErrorForm-Errormark-X"
            fill="none"
            d="M16 16 36 36 M36 16 16 36"
          />
        </svg>
        <Button
          variant="outline-warning"
          className="ErrorForm-Button"
          onClick={handleReset}
        >
          Try Again
        </Button>
      </div>
    </>
  );
};

ErrorForm.propTypes = {
  handleReset: PropTypes.func,
};

ErrorForm.defaultProps = {
  handleReset: () => {},
};

export default ErrorForm;
