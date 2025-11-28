import { useState } from "react";
import "./myModal.css";

const MyModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(() => true)}>Open</button>

      {open && (
        <div className='modal-overlay'>
          <div className='modal-box'>
            <h2>My Modal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est!</p>
            <button onClick={() => setOpen(() => false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyModal;
