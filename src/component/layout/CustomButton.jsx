import React from 'react';

const CustomButton = ({ src, alt, width, onClick }) => {
  return (
    <button onClick={onClick}>
      <img
        src={src}
        alt={alt}
        width={width}
        style={{ cursor: 'pointer' }}
      />
    </button>
  );
};



export default CustomButton;
