import React from 'react';

const Input = ({ onChange }) => (
  <input type="text" placeholder="Name" className="Input" onChange={onChange} />
);

export default Input;
