import NavItems from "./NavItems";
function Navbar() {
	return (
		<div className="Nav">
			<NavItems link="#Intro" name="About"></NavItems>
			<NavItems link="#Education" name="Education"></NavItems>
			<NavItems link="#skills" name="Skills"></NavItems>
			<NavItems link="#Projects" name="Projects"></NavItems>
			<NavItems link="#Achievements" name="Achievements"></NavItems>
		</div>
	);
}
export default Navbar;
