import {useEffect, useRef, useState} from "react";

export default function AccordionItem({topic, isActive, onToggle}) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    if (isActive) {
      setHeight(ref.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isActive]);
  
  return (
    <div>
      <div className="accordion-item" onClick={onToggle}>
        {topic.title}
      </div>
      
      <div className="accordion-content-wrapper" style={{height}}>
        <div ref={ref} className="accordion-content">
          {topic.content}
        </div>
      </div>
    </div>
  );
}