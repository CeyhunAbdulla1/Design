import React, { useState } from 'react';
import "../style/components/dropdowntwo.scss"; // Stil dosyası


function DropdownMenutwo() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');
  
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleItemClick = (item) => {
      setSelected(item);
      setIsOpen(false);
    };

  return (
    <div className="dropdown">
      <div className="input" onClick={toggleDropdown}>
        
        {selected ? selected : 'Planned'}
      </div>
      {isOpen && (
        <div className="menu">
          <div className="dropdown-item" onClick={() => handleItemClick('Suggestion')}>
            Suggestion
          </div>
          <hr />
          <div className="dropdown-item" onClick={() => handleItemClick('Planned')}>
            Planned
          </div>
          <hr />
          <div className="dropdown-item" onClick={() => handleItemClick('In-Progress')}>
            In-Progress
          </div>
          <hr />
          <div className="dropdown-item" onClick={() => handleItemClick('Live')}>
            Live
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenutwo;