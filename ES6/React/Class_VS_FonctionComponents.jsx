// Class component
import React, { Component } from "react";

class Class_VS_FonctionComponents extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "" };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt) {
		this.setState({ name: evt.target.value });
	}

	render() {
		const { name } = this.state;
		return (
			<div>
				<h1>My name is: {name}</h1>
				<input type="text" value={name} onChange={this.handleChange} />
			</div>
		);
	}
}

export default Class_VS_FonctionComponents;

// =================================================================

// Function component with Hook
import React, { useState } from "react";

function Class_VS_FonctionComponents() {
	const [name, setName] = useState("");

	function handleChange(evt) {
		setName(evt.target.value);
	}

	return (
		<div>
			<h1>My name is: {name}</h1>
			<input type="text" value={name} onChange={handleChange} />
		</div>
	);
}
export default Class_VS_FonctionComponents;
