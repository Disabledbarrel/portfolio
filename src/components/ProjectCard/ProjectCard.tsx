interface ProjectCardProps {
	src: string;
	link: string;
	title: string;
	description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	src,
	link,
	title,
	description,
}) => {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<img className="hover" src={src} alt={`${title} logo`} />
			<h3>{title}</h3>
			<p>{description}</p>
		</a>
	);
};

export default ProjectCard;
