import ProjectsCard from "./ProjectsCard.jsx";
function Projects() {
  return (
    <div id="Projects" className="Projects">
      <ProjectsCard
        name="Job-Tracker"
        img="/Images/jobTracker"
        stack={["Javascript", "Express", "Material UI", "Passport.js"]}
        link="https://job-tracker-beta.vercel.app/login"
      ></ProjectsCard>
      <ProjectsCard
        name="Memories WebApp"
        img="/Images/memories.png"
        stack={["HTML", "Javascript", "CSS", "React", "Express"]}
        link="https://memories-web-app-two.vercel.app/"
      ></ProjectsCard>
      <ProjectsCard
        name="E-Learning"
        img="./Images/elearning.png"
        stack={["HTML", "Javascript", "CSS", "React"]}
        link="https://e-li8rary.netlify.app//"
      ></ProjectsCard>
      <ProjectsCard
        name="My-Portfolio"
        img="./Images/Portfolio.png"
        stack={["HTML", "Javascript", "CSS", "React"]}
        link="https://anur4g.netlify.app/"
      ></ProjectsCard>
      <ProjectsCard
        name="To-Do WebApp"
        img="./Images/todo.png"
        stack={["EJS", "Javascript", "CSS", "HTML", "Express"]}
        link="https://to-do-list-bda5.onrender.com/"
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
