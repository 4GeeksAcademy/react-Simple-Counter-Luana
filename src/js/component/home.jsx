import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card";

//create your first component
const Home = ({ counter }) => {
	return (
		<div>
			<h1 className="text-center mt-5">Simple Counter</h1>
			<div className="text-center d-flex justify-content-center">

				<div className="card mb-3 bg-dark m-1" style={{ width: "6rem"}}>
					<i className="far fa-clock text-white text-center m-2"></i>
				</div>
				<Card digito={Math.floor (counter/10000 % 10)} />
				<Card digito={Math.floor (counter/1000 % 10)} />
				<Card digito={Math.floor (counter/100 % 10)} />
				<Card digito={Math.floor (counter/10 % 10)} />
				<Card digito={counter % 10} />
			</div>
		</div>
	);
};

export default Home;
