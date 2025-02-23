import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectsStyles.module.css";
import slothmedia from "../../assets/slothmedia.png";
import memory from "../../assets/memory.png";

const Projects = () => {
	return (
		<section id="projects" className={styles.container}>
			<h1 className="sectionTitle">Projects</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard
					src={memory}
					link="https://disabledbarrel.github.io/memory-game/"
					title="Memory game"
					description="A memory game built with html, css and vanilla javascript"
				/>
				<ProjectCard
					src={slothmedia}
					link="https://disabledbarrel.github.io/slothmedia-static/"
					title="Slothmedia"
					description="Static design website for my degree project"
				/>

				<ProjectCard
					src={"hipsster"}
					link="https://github.com/Ade-mir/company-landing-page-2"
					title="Hipsster"
					description="Glasses Shop"
				/>
				<ProjectCard
					src={"fitLift"}
					link="https://github.com/Ade-mir/company-landing-page-2"
					title="FitLift"
					description="Fitness App"
				/>
			</div>
		</section>
	);
};

export default Projects;
