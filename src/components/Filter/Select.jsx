import React, { useState, useRef } from 'react';
import SimpleBar from 'simplebar-react';
import cn from 'classnames';
import useOutsideClick from '../../hooks/useOutsideClick.js';
import SelectArrow from '../../images/SelectArrow.svg';
import RemoveFilter from '../../images/RemoveFilter.svg';

const Select = ({
  options, title = null, defaultTitle, onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const toggleOpen = (e) => {
    if (
      e.target.className === 'RemoveFilter'
      || e.target.parentNode.className === 'RemoveFilter'
    ) {
      return;
    }
    setIsOpen(!isOpen);
  };

  useOutsideClick(ref, toggleOpen);

  return (
    <div
      ref={isOpen ? ref : null}
      className={cn(isOpen ? 'SelectOpen' : 'Select')}
      onClick={toggleOpen}
      aria-hidden="true"
    >
      <span className="SelectTitle">{title || defaultTitle}</span>
      {title && (
        <div className="RemoveFilter">
          <RemoveFilter onClick={() => onChange('')} />
        </div>
      )}
      <div className={cn(isOpen ? 'SelectArrowClose' : 'SelectArrowOpen')}>
        <SelectArrow />
      </div>
      {isOpen && (
        <ul className="SelectOptionContainer">
          <SimpleBar style={{ maxHeight: 'inherit' }}>
            {options.map(({ id, name }) => (
              <li
                onClick={() => onChange({ id, name })}
                className="SelectOption"
                key={id}
                aria-hidden="true"
              >
                <p className="SelectOptionName">{name}</p>
              </li>
            ))}
          </SimpleBar>
        </ul>
      )}
    </div>
  );
};

export default Select;
