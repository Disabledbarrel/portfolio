import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/elin.jpeg";
import CV from "../../assets/cv.pdf";
const Hero = () => {
	return (
		<>
			<main>
				<div className={styles.colorModeContainer}>
					<img
						src={heroImg}
						className={styles.heroImg}
						alt="Profile picture of Elin Sällberg"
					/>
				</div>
				<div className={styles.infoContainer}>
					<h1 className={styles.lgHeading}>
						Elin <span className={styles.textSecondary}>Sällberg</span>
					</h1>
					<h2>Frontend developer</h2>
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
					<div className={styles.description}>
						<p>
							Web Developer, Pharmacist, Movie nerd & Casual gamer with a
							passion for crafting responsive and user-friendly web
							applications.
						</p>
						<a className={styles.btn} href={CV} download>
							Resume<i className="fa-solid fa-download"></i>
						</a>
					</div>
				</div>
			</main>
		</>
	);
};

export default Hero;
