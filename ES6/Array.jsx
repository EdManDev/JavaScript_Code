// All the Same But all Are Good


import React from "react";
import { Link } from "react-router-dom";

const btnArray = [
	{
		nbr: "1",
		name: "first button",
	},
	{
		nbr: "2",
		name: "second button",
	},
	{
		nbr: "3",
		name: "third button",
	},
	{
		nbr: "4",
		name: "fourth button",
	},
	{
		nbr: "5",
		name: "fith button",
	},
];

const Landing5 = () => {
	return (
		<div>
			<div className="nav-scroller ">
				<nav className="nav nav-underline bg-light justify-content-between">
					{btnArray.map((i) => {
						return (
							<>
								<div className="nav-link " href="#">
									<Link type="button" class="btn btn-outline-success">
										{i.nbr} {i.name}
									</Link>
								</div>
							</>
						);
					})}
				</nav>
			</div>
		</div>
	);
};

export default Landing5;
// =========================================================  I CAN ALSO USE THAT EVERITHING ARE GOOD HERE


import React from "react";
import { Link } from "react-router-dom";

const btnArray = ["Button", "Button", "Button", "Button", "Button", "Button"];

const ListBtn = ({ name, i }) => {
	return (
		<>
			<div className="nav-link " href="#">
				<Link type="button" class="btn btn-outline-success">
					{name} {i}
				</Link>
			</div>
		</>
	);
};

const Landing5 = () => {
	return (
		<>
			<div className="nav-scroller ">
				<nav className="nav nav-underline bg-light justify-content-between">
					{btnArray.map((name, i) => (
						<ListBtn key={i} name={name} i={i + 1} />
					))}
				</nav>
			</div>
		</>
	);
};

export default Landing5;

// =========================================================  I CAN ALSO USE THAT EVERITHING ARE GOOD HERE

// import React from "react";
// import { Link } from "react-router-dom";

// const Landing5 = () => {
// 	return (
// 		<div>
// 			<div className="nav-scroller ">
// 				<nav className="nav nav-underline bg-light justify-content-between">
// 					{Array(26)
// 						.fill()
// 						.map((_, i ) => (
// 							<>
// 								<div className="nav-link " href="#">
// 									<Link type="button" class="btn btn-outline-success">
// 										Button { i + 1}
// 									</Link>
// 								</div>
// 							</>
// 						))}
// 				</nav>
// 			</div>
// 		</div>
// 	);
// };

// export default Landing5;
