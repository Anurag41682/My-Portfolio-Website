function EduItems(props) {
	return (
		<div className="EduItems">
			<div className="EduImageCard">
				<img className="EduImage" src={props.img}></img>
			</div>
			<div className="EduContent">
				<p>{props.std}</p>
				<p>{props.insName}</p>
			</div>
		</div>
	);
}
export default EduItems;
