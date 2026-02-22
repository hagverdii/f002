import React from "react";
import "./iconButton.css";

interface IconButtonProps {
  icon: React.ReactNode;
  count?: number;
  onClick?: () => void;
  ariaLabel?: string;
}

// Reusable icon button with optional badge — badge shows only when count > 0
const IconButton: React.FC<IconButtonProps> = ({ icon, count = 0, onClick, ariaLabel }) => {
  return (
    <button className='icon-btn' onClick={onClick} aria-label={ariaLabel}>
      {icon}
      {count > 0 && <span className='icon-btn-badge'>{count > 99 ? "99+" : count}</span>}
    </button>
  );
};

export default IconButton;
