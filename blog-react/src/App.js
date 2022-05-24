import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import PostPage from "./components/pages/PostPage";
import PostAdd from "./components/pages/PostAdd";
import PostEdit from "./components/pages/PostEdit";
import Header from "./components/views/Header";
import NavBar from "./components/views/NavBar";
import Footer from "./components/views/Footer";
import NotFound from "./components/pages/NotFound";
import { Container } from "react-bootstrap";


const App = () => {
	return (
		<main>
			<NavBar />
				<Container>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/podst/:id' element={<PostPage />} />
						<Route path='/post/add' element={<PostAdd />} />
						<Route path='/post/edit/:id' element={<PostEdit />} />
						<Route path='/about' element={<About />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
					<Footer />
				</Container>
				</main>
	);
};

export default App;
