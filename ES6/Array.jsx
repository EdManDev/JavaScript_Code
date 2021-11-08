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
import React from "react";

const recipes = [
	{
		title: "Hank’s Juiciest Beef Burger",
		image: "./images/1.jpg",
		time: "20m",
		difficulty: "Easy",
		servings: "4 servings",
		author: "EdMan Manigat",
		rating: "4.94",
	},
	{
		title: "Southern Fried Chicken Sandwich",
		image: "./images/2.jpg",
		time: "30m",
		difficulty: "Intermediate",
		servings: "4 servings",
		author: "Nicholas Denver",
		rating: "4.94",
	},
	{
		title: "Lily’s Healthy Beef Burger",
		image: "./images/3.jpg",
		time: "20m",
		difficulty: "Easy",
		servings: "6 servings",
		author: "Lily Ford",
		rating: "4.94",
	},
];

const ListItem = ({ recipe }) => {
	return (
		<div>
			<article style={{ margin: "20px" }}>
				<img src={recipe.image} alt="" className="" width="144" height="144" />
				<div>
					<h2>{recipe.title}</h2>
					<dl>
						<div>
							<dt>Time</dt>
							<dd>
								<abbr title={`${recipe.time} minutes`}>{recipe.time}m</abbr>
							</dd>
						</div>
						<div>
							<dt>Difficulty</dt>
							<dd> · {recipe.difficulty}</dd>
						</div>
						<div>
							<dt>Servings</dt>
							<dd> · {recipe.servings} servings</dd>
						</div>
						<div>
							<dt>By</dt> <dd>{recipe.author}</dd>
						</div>
						<div>
							<dt>
								<span>Rating</span>
								<svg width="16" height="20" fill="currentColor">
									<path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
								</svg>
							</dt>
							<dd>{recipe.rating}</dd>
						</div>
					</dl>
				</div>
			</article>
			<hr />
		</div>
	);
};

const App = () => {
	return (
		<div>
			<div>
				{recipes.map((recipe) => (
					<ListItem key={recipe.id} recipe={recipe} />
				))}
			</div>
		</div>
	);
};

export default App;
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
