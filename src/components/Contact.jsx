import ContactItems from "./ContactItems";
function Contact() {
	return (
		<div className="Contact">
			<ContactItems
				img="./Images/github.svg"
				lnk="https://github.com/Anurag41682"
			></ContactItems>
			<ContactItems
				img="./Images/linkedin.svg"
				lnk="https://www.linkedin.com/in/anurag41682/"
			></ContactItems>
			<ContactItems
				img="./Images/Twitter.svg"
				lnk="https://twitter.com/Anurag_2k2"
			></ContactItems>
		</div>
	);
}
export default Contact;
