let NodesData = [
	{
		nbr: "001",
		text: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
	},
	{
		nbr: "002",
		text: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
	},
	{
		nbr: "003",
		text: "Maecenas sed diam eget risus varius blandit sit amet non magna.",
	},
	{
		nbr: "004",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
	},
	{
		nbr: "005",
		text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet.",
	},
	{
		nbr: "006",
		text: "Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod.",
	},
];

let obj = NodesData.find((i) => i.nbr === "005");

console.log(obj);
