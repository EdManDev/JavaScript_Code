// All the Same But all Are Good


import React from "react";
import { Link } from "react-router-dom";

const btnArray = [
	{
		nbr: "1",
		email: "first button",
	},
	{
		nbr: "2",
		email: "second button",
	},
	{
		nbr: "3",
		email: "third button",
	},
	{
		nbr: "4",
		email: "fourth button",
	},
	{
		nbr: "5",
		email: "fith button",
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
										{i.nbr} {i.email}
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

// =========================================================  I CAN ALSO USE THAT EVERITHING ARE GOOD HERE


export default Landing5;

import React from "react";
import { Link } from "react-router-dom";

const btnArray = ["Button", "Button", "Button", "Button", "Button"];

const ListBtn = ({ reason, i }) => {
	return (
		<>
			<div className="nav-link " href="#">
				<Link type="button" class="btn btn-outline-success">
					{reason} {i}
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
					{btnArray.map((reason, i) => (
						<ListBtn key={i} reason={reason} i={i + 1} />
					))}
				</nav>
			</div>
		</>
	);
};

export default Landing5;

// Create an Array
let fruits = ["Apple", "Bannana", "Pinaple", "orange", "grape"];
// console.log('you have:', fruits.length, 'which is', fruits);

// ---------------------------------------------------------------------
// Access an Array item using the index position
let first = fruits[0];
// Apple

let last = fruits[fruits.length - 1];
// Banana

console.log(
	"you have:",
	fruits.length,
	"which is",
	fruits,
	"the first is:",
	first,
	"the last is:",
	last
);

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
