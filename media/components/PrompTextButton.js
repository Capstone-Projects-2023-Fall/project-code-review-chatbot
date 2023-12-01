import React from 'react';

const PromptTextButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>{label}</button>
  );
};

export default PromptTextButton;
