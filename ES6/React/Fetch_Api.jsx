import React, { Component } from "react";
import axios from "axios";

export class Fetch_Api extends Component {
	constructor() {
		super();
		this.state = {
			issues: [],
		};
	}

	componentDidMount() {
		axios
			.get("https://api.github.com/repos/ContentPI/ContentPI/issues")
			.then((response) => {
				this.setState({
					issues: response.data,
				});
			});
	}

	render() {
		const { issues = [] } = this.state;

		return (
			<>
				<h1>ContentPI Issues</h1>
				{issues.map((issue) => (
					<p key={issue.title}>
						<strong>#{issue.number}</strong>{" "}
						<a
							href={`https://github.com/ContentPI/ContentPI/issues/${issue.number}`}
							target="_blank"
						>
							{issue.title}
						</a>{" "}
						{issue.state}
					</p>
				))}
			</>
		);
	}
}

export default Fetch_Api;
// ============================================================================================== // CLASS COMPONENTS ABOVE



// ============================================================================================== // CLASS COMPONENTS BELOW
import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetch_Api = () => {
	const [issues, setIssues] = useState([]);

	useEffect(() => {
		axios
			.get("https://api.github.com/repos/ContentPI/ContentPI/issues")
			.then((response) => {
				// Here we update directly our issue state
				setIssues(response.data);
			});
	}, []);

	return (
		<>
			<h1>ContentPI Issues</h1>
			{issues.map((issue) => (
				<p key={issue.title}>
					<strong>#{issue.number}</strong>{" "}
					<a
						href={`https://github.com/ContentPI/ContentPI/issues/${issue.number}`}
						target="_blank"
					>
						{issue.title}
					</a>{" "}
					{issue.state}
				</p>
			))}
		</>
	);
};

export default Fetch_Api;
