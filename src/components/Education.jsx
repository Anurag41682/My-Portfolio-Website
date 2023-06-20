import EduItems from "./EduItems.jsx";
function Education() {
	return (
		<div id="Education" className="Education">
			<EduItems
				std="B.Tech"
				img="./Images/technocrats.png"
				insName="Technocrats Institute of Technology, Bhopal"
			></EduItems>
			<EduItems
				std="12th"
				img="./Images/dav.png"
				insName="D.A.V. Public School, Bina"
			></EduItems>
			<EduItems
				std="10th"
				img="./Images/dav.png"
				insName="D.A.V. Public School, Kakri"
			></EduItems>
		</div>
	);
}
export default Education;
