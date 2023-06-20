import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main.jsx";
import Contact from "./components/Contact";
import Hamburger from "./components/Hamburger";
import Cross from "./components/Cross";
function App() {
	return (
		<div className="App">
			<Hamburger></Hamburger>
			<Cross></Cross>
			<header className="App-header">
				<Navbar></Navbar>
			</header>
			<div>
				<Main></Main>
			</div>
			<footer>
				<Contact></Contact>
			</footer>
		</div>
	);
}
export default App;
