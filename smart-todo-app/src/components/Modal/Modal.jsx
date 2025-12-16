export default function Modal({onConfirm, onCancel}) {
  return (
    <div className="overlay">
      <div className="modal">
        <p>Bunu silməyə əminsiniz?</p>
        <div className="modal-buttons">
          <button className="btn cancel" onClick={onCancel}>Xeyr</button>
          <button className="btn delete" onClick={onConfirm}>Bəli</button>
        </div>
      </div>
    </div>
  );
}
