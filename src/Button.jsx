import React from 'react';

const Button = ({ text, callback, incrementAmount }) => {
  const handleClick = () => {
    callback(text); // Pass the text back to the parent when clicked
  };

  return (
    <button style={styles.button} onClick={handleClick}>
      {text} (Increment: {incrementAmount})
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Button;
