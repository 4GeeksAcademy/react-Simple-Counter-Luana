import React from "react";

const Card = ({digito}) => {
	return (
    <div className="card mb-3 bg-dark m-1" style={{width:"6rem"}}>
		  <h5 className="card-title text-center text-white">{digito}</h5>
		</div>
	);
  };

  export default Card