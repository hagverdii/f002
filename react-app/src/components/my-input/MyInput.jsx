import "./MyInput.css";

export default function MyInput({ type = "text", placeholder = "", label = "Default Input Label" }) {
  return (
    <div className='my-input-container'>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
