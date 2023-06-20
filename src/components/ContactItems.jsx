function ContactItems(props) {
	return (
		<div className="ContactCard">
			<a target="_blank" href={props.lnk}>
				<img className="ContactImg" src={props.img} alt="contact_img" />
			</a>
		</div>
	);
}
export default ContactItems;
