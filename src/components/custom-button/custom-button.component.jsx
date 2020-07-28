import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignId, ...otherProps }) => (
  <button className={`${isGoogleSignId ? "google-sign-in" : ""} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;