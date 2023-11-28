import React from 'react';

const PrompIconButton = ({ icon, onClick, label }) => {
  return (
    <button onClick={onClick}>
      <span className="icon">{icon}</span>
      {label && <span className="label">{label}</span>}
    </button>
  );
};

export default PrompIconButton;