import React, { useState } from 'react';
import "../style/components/dropdown.scss"; // Stil dosyası


function DropdownMenu({className}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');
  
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleItemClick = (item) => {
      setSelected(item);
      setIsOpen(false);
    };

  return (
    <div className="dropdown-wrapper">
      <div className="dropdown-input" onClick={toggleDropdown}>
        
        {selected ? selected : 'Feature'}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => handleItemClick('Feature')}>
            Feature
          </div>
          <hr />
          <div className="dropdown-item" onClick={() => handleItemClick('UI')}>
            UI
          </div>
          <hr />
          <div className="dropdown-item" onClick={() => handleItemClick('UX')}>
            UX
          </div>
          <hr />
          <div className="dropdown-item" onClick={() => handleItemClick('Enhancement')}>
            Enhancement
          </div>
          <hr />
          <div className="dropdown-item" onClick={() => handleItemClick('Bug')}>
            Bug
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu;