import Card from "../card/Card";
import "./grid.css"
function Grid( { numberOfCards }) {
	console.log("numberOfCards" , numberOfCards)
	return (
		<div className="grid">
			{Array(numberOfCards).fill(<Card />).map((ele, idx) => {return <Card key={idx} />})}
		</div>
	)
}

export default Grid