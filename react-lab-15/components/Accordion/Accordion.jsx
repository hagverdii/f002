import {useState} from "react";
import './accordion.css'
import AccordionItem from "./AccordionItem.jsx";

export default function Accordion() {
  const [activeId, setActiveId] = useState(null);
  const [headerTitle, setHeaderTitle] = useState("Mövzu seçin");
  
  const topics = [
    {id: 1, title: "HTML əsasları", content: "HTML haqqında məlumat..."},
    {id: 2, title: "CSS giriş", content: "CSS haqqında məlumat..."},
    {id: 3, title: "JavaScript başlanğıc", content: "JS haqqında məlumat..."},
  ];
  
  const toggleTopic = (id, title) => {
    if (activeId === id) {
      setActiveId(null);
      setHeaderTitle("Mövzu seçin");
    } else {
      setActiveId(id);
      setHeaderTitle(title);
    }
  };
  
  return (
    <div>
      <h2>{headerTitle}</h2>
      
      <div className="accordion">
        {topics.map((t) => (
          <AccordionItem
            key={t.id}
            topic={t}
            isActive={activeId === t.id}
            onToggle={() => toggleTopic(t.id, t.title)}
          />
        ))}
      </div>
    </div>
  );
}
