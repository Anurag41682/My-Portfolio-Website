function ProjectsCard(props) {
  const stack = props.stack;
  const stackItems = stack.map((items) => (
    <p key={items} className="stack-items">
      {items}
    </p>
  ));
  return (
    <div className="Projects-Card">
      <div className="Project-Image-Container">
        <img className="Project-Image" src={props.img} alt="" />
      </div>
      <div className="Project-Content">
        <h3>{props.name}</h3>
        <br></br>
        <div className="stack">{stackItems}</div>
        <br></br>
        <a className="Links" href={props.link} target="_blank">
          See Live
        </a>
      </div>
    </div>
  );
}
export default ProjectsCard;
