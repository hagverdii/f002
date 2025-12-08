function Profile({ id, name }) {
  const handleClick = () => {
    alert(`Kliklənən tələbə: ${name}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "10px",
        cursor: "pointer",
        width: "200px",
      }}
    >
      <h3>id: {id}</h3>
      <h3>Ad: {name}</h3>
    </div>
  );
}

export default Profile;
