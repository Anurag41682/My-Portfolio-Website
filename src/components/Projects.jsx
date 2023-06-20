import ProjectsCard from "./ProjectsCard.jsx";
function Projects() {
	return (
		<div id="Projects" className="Projects">
			<ProjectsCard
				name="E-Learning"
				img="./Images/elearning.png"
				stack={["HTML", "Javascript", "CSS", "React"]}
				link="https://e-learning-website-1.hop.sh/"
			></ProjectsCard>
			<ProjectsCard
				name="To-Do WebApp"
				img="./Images/todo.png"
				stack={["EJS", "Javascript", "CSS", "HTML"]}
				link="https://to-do-list-8310.onrender.com/"
			></ProjectsCard>
			<ProjectsCard
				name="Guessing Game"
				img="./Images/guess.png"
				stack={["HTML", "CSS", "Javascript"]}
				link="https://anurag41682.github.io/Guessing-Game/"
			></ProjectsCard>
		</div>
	);
}
export default Projects;
