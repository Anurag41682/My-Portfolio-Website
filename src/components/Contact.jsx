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
        lnk="https://x.com/Anur4g_Yadav"
      ></ContactItems>
    </div>
  );
}
export default Contact;
