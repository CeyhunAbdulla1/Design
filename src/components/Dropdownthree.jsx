import React, { useState } from 'react';
import "../style/components/dropdownmenuthree.scss"; // Stil dosyası


function DropdownMenuthree({className}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');
  
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleItemClick = (item) => {
      setSelected(item);
      setIsOpen(false);
    };

  return (
    <div className="dropdown-wrapperthree">
      <div className="dropdown-inputthree" onClick={toggleDropdown}>
        
        {selected ? selected : 'Feature'}
      </div>
      {isOpen && (
        <div className="dropdown-menuthree">
          <div className="dropdown-itemthree" onClick={() => handleItemClick('Feature')}>
            Feature
          </div>
          <hr />
          <div className="dropdown-itemthree" onClick={() => handleItemClick('UI')}>
            UI
          </div>
          <hr />
          <div className="dropdown-itemthree" onClick={() => handleItemClick('UX')}>
            UX
          </div>
          <hr />
          <div className="dropdown-itemthree" onClick={() => handleItemClick('Enhancement')}>
            Enhancement
          </div>
          <hr />
          <div className="dropdown-itemthree" onClick={() => handleItemClick('Bug')}>
            Bug
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenuthree;