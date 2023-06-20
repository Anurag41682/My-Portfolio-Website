import Intro from "./Intro.jsx";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Achievements from "./Achievements.jsx";
function Main() {
	return (
		<div className="Main">
			<h1>ABOUT ME </h1>
			<hr></hr>
			<Intro></Intro>
			<h1>EDUCATION </h1>
			<hr></hr>
			<Education></Education>
			<h1>SKILLS </h1>
			<hr></hr>
			<Skills></Skills>
			<h1>PROJECTS </h1>
			<hr></hr>
			<Projects></Projects>
			<h1>ACHIEVEMENTS </h1>
			<hr></hr>
			<Achievements></Achievements>
		</div>
	);
}
export default Main;
