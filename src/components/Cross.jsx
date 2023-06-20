function f() {
	const hamBtn = document.getElementById("hamburger-button");
	hamBtn.classList.toggle("ham-active");
	const crossBtn = document.getElementById("cross-button");
	crossBtn.classList.toggle("cross-active");
	const nav = document.getElementsByClassName("Nav")[0];
	nav.classList.toggle("nav-active");
}
function Cross() {
	return (
		<div id="cross-button" className="Cross-Button" onClick={f}>
			<div className="Button-Cross-Container">
				<div className="Button-Cross"></div>
			</div>
		</div>
	);
}

export default Cross;
