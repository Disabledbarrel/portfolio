import styles from "./ProjectCardStyles.module.css";

interface ProjectCardProps {
	src: string;
	link: string;
	title: string;
	description: string;
	github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	src,
	link,
	title,
	description,
	github,
}) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.imgContainer}>
				<img className={styles.img} src={src} alt={`${title} logo`} />
			</div>
			<a href={link} target="_blank" rel="noopener noreferrer">
				<h3>{title}</h3>
				<p>{description}</p>
			</a>
			<a
				href={github}
				target="_blank"
				rel="noopener nore"
				className={styles.github}
			>
				Github repository
				<i className="fa-solid fa-arrow-up-right-from-square"></i>
			</a>
		</div>
	);
};

export default ProjectCard;
