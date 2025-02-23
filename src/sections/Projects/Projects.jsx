import styles from './ProjectsStyles.module.css'
import rainbowsixsiege from '../../assets/r6project.png'

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>

            <div className={styles.projectsContainer}>
                <a href='https://github.com/Nynerdly/Rainbow-Six-Siege-Project' target='_blank'>
                    <img className='hover' src={rainbowsixsiege} alt="rainbow six siege thumbnail" />
                </a>

                <h3>R6 - Ela Bosak Project </h3>

                <p>Built with React.js, Vite, Tailwind CSS, and GSAP</p>
            </div>
        </section>
    )
}

export default Projects