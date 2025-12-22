import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>NotFound</div>
      <button onClick={() => navigate(-1, { replace: true })}>Back</button>
    </div>
  );
};

export default NotFound;
