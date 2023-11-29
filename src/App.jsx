import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AppFooter from "./components/shared/AppFooter.jsx";
import AppHeader from "./components/shared/AppHeader.jsx";
import "./css/App.css";
import UseScrollToTop from "./hooks/useScrollToTop.jsx";

const About = lazy(() => import("./pages/AboutMe.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const ProjectSingle = lazy(() => import("./pages/ProjectSingle.jsx"));
const Admin = lazy(() => import("./admin/Admin.jsx"));

function App() {
	return (
		<AnimatePresence>
			<div className=' bg-secondary-light dark:bg-primary-dark transition duration-300'>
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='projects' element={<Projects />} />
							<Route path='project/:id' element={<ProjectSingle />} />

							<Route path='about' element={<About />} />
							<Route path='contact' element={<Contact />} />
							<Route path='admin' element={<Admin />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
