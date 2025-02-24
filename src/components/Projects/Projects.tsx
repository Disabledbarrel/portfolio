import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectsStyles.module.css";
import slothmedia from "../../assets/slothmedia.png";
import memory from "../../assets/memory.png";
import survey from "../../assets/survey.png";

const Projects = () => {
	return (
		<section className={styles.container}>
			<h3 className={styles.sectionTitle}>Projects</h3>
			<div className={styles.projectsContainer}>
				<ProjectCard
					src={memory}
					link="https://disabledbarrel.github.io/memory-game/"
					title="Memory game"
					description="A memory game built with html, css and vanilla javascript"
					github="https://github.com/Disabledbarrel/memory-game"
				/>
				<ProjectCard
					src={slothmedia}
					link="https://disabledbarrel.github.io/slothmedia-static/"
					title="Slothmedia"
					description="Static website to show the design I made for my degree project"
					github="https://github.com/Disabledbarrel/slothmedia"
				/>
				<ProjectCard
					src={survey}
					link="https://stellular-caramel-d7e13d.netlify.app/"
					title="React survey"
					description="A simple React app with a survey. The app makes use of the useState-hook"
					github="https://github.com/Disabledbarrel/project-survey-vite"
				/>
			</div>
		</section>
	);
};

export default Projects;
