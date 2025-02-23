import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/elin.jpeg";
const Hero = () => {
	return (
		<>
			<div className={styles.colorModeContainer}>
				<img
					src={heroImg}
					className={styles.heroImg}
					alt="Profile picture of Elin Sällberg"
				/>
			</div>
			<div className={styles.bgImg}>
				<main id={styles.home}>
					<h1 className={styles.lgHeading}>
						Elin <span className={styles.textSecondary}>Sällberg</span>
					</h1>
					<h2 className={styles.smHeading} id={styles.mainHeading}>
						Web Developer, Pharmacist, Movie nerd & Casual gamer
					</h2>
					<div className={styles.icons}>
						<a
							href="https://www.linkedin.com/in/elin-s%C3%A4llberg-38576456"
							target="_blank"
							rel="noreferrer noopener"
							className={styles.iconLink}
						>
							<i className="fab fa-linkedin"></i>
						</a>
						<a
							href="https://github.com/Disabledbarrel"
							target="_blank"
							rel="noreferrer noopener"
							className={styles.iconLink}
						>
							<i className="fab fa-github"></i>
						</a>
					</div>
				</main>
			</div>
		</>
	);
};

export default Hero;
