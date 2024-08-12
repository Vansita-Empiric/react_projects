import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <div className="bg-blue-300 p-4">User : {id}</div>;
}

export default User;
