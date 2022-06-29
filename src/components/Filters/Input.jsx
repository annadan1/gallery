import React from 'react';

const Input = ({ onChange }) => (
  <input type="text" placeholder="Name" className="Input SelectSize" onChange={onChange} />
);

export default Input;
