import React from "react";
import { useParams } from "react-router-dom";

const FinalPage = () => {
  const { id } = useParams();

  return (
    <div style={{ margin: "20px 20px" }}>
      <h3>Final {id}</h3>
    </div>
  );
};

export default FinalPage;
