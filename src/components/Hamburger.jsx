function f() {
	const hamBtn = document.getElementById("hamburger-button");
	hamBtn.classList.toggle("ham-active");
	const crossBtn = document.getElementById("cross-button");
	crossBtn.classList.toggle("cross-active");
	const nav = document.getElementsByClassName("Nav")[0];
	nav.classList.toggle("nav-active");
}
function Hamburger() {
	return (
		<div
			id="hamburger-button"
			className="Hamburger-Button ham-active"
			onClick={f}
		>
			<div className="Button-Container-Hamburger">
				<span className="dash"></span>
				<span className="dash"></span>
				<span className="dash"></span>
			</div>
		</div>
	);
}
export default Hamburger;
