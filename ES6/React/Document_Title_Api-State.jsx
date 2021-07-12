import React, { useState, useEffect } from "react";
const greetings = ["Hello", "Ciao", "Hola", "こんにちは"];

const App = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		document.title = greetings[index];
	});

	const updateGreeting = () => {
		setIndex(Math.floor(Math.random() * greetings.length));
	};
	return (
		<div>
			<div>Press The Button</div>
			<button onClick={updateGreeting}>Say Hi</button>
		</div>
	);
};

export default App;
