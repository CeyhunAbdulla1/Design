    import React, { useState, useRef } from 'react'
    import Button from './Button';
    import { Link } from 'react-router-dom';
    import "../style/components/header.scss"
    const Header = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [items, setItems] = useState([
          { name: "Most Upvotes" },
          { name: "Least Upvotes" },
          { name: "Most Comments" },
          { name: "Least Comments" }
        ]);
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };
      
        const dropdownRef = useRef(null);
      
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
      
        const handleDropdownOpen = () => {
          // Set overflow hidden when dropdown is opened
          const rightSides = document.querySelectorAll('.right-sides');
          rightSides.forEach((rightSide) => {
            rightSide.style.overflow = 'hidden';
          });
        };
      
        const handleDropdownClose = () => {
          // Remove overflow hidden when dropdown is closed
          const rightSides = document.querySelectorAll('.right-sides');
          rightSides.forEach((rightSide) => {
            rightSide.style.overflow = '';
          });
        };
      
        return (
          <div className='right-sides'>
            <div className='image'>
              <img src="/images/Vector.png" alt="" />
              <p className='six'>6 Suggestions</p>
      
              {/* dropdown */}
      
              <p
                className="dropdownTitle"
                onClick={toggleDropdown}
                onMouseOver={handleDropdownOpen}
                onMouseLeave={handleDropdownClose}
              >
                Sort by: Most Upvotes <img src="/images/Path 2.png" alt="" />
              </p>
              {isOpen && (
                <div
                  className="dropdownContainer"
                  style={{
                    width: "255px",
                    height: "192px",
                    borderRadius: "10px",
                    transition: "height 0.8s ease-in-out"
                  }}
                  ref={dropdownRef}
                >
                  {items.map((item, index) => (
                    <a key={index} href={item.link}>
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {isOpen && <div className="backdrop" onClick={handleClickOutside} />}
            {/* dropdownend */}
      
            <Link to="/empty">
              <Button className="feedback" text="+ Add Feedback" />
            </Link>
          </div>
        );
      };
      
      export default Header;
      