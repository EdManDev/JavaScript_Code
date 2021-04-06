import React from "react";

const date = () => {
	var tempDate = new Date();
	var date =
		tempDate.getDate() +
		" / " +
		(tempDate.getMonth() + 1) +
		" / " +
		tempDate.getFullYear();

	const currentDate = date;

	return (
		<div style={{ margingLeft: 20 }}>
			<div>{currentDate}</div>
		</div>
	);
};

export default date;

// ============================================================

// import React from "react";

// function date() {
//   var tempDate = new Date();
//   var date =
//     tempDate.getDate() +
//     " / " +
//     (tempDate.getMonth() + 1) +
//     " / " +
//     tempDate.getFullYear();

//   const currentDate = date;
//   return (
//     <div style={{ margingLeft: 20 }}>
//       <div>{currentDate}</div>
//     </div>
//   );
// }
// export default date;

// ============================================================
// import React, { Component } from "react";

// export default class date extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date().toLocaleString()
//     };
//   }
//   render() {
//     return (
//       <div>
//         <p> {this.state.date}</p>
//       </div>
//     );
//   }
// }

// ============================================================

// import React, { Component } from "react";

// class date extends Component {
//   state = {
//     date: ""
//   };

//   componentDidMount() {
//     this.getDate();
//   }

//   getDate = () => {
//     var date = new Date().toDateString();
//     this.setState({ date });
//   };
//   render() {
//     const { date } = this.state;

//     return (
//       <div>
//         <p> {this.state.date}</p>
//       </div>
//     );
//   }
// }

// export default date;
