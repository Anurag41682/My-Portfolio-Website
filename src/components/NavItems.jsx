function NavItems(props) {
	return (
		<a href={props.link} className="Nav-item">
			{props.name}
		</a>
	);
}
export default NavItems;
