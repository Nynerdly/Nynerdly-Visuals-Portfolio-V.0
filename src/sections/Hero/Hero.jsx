import styles from './HeroStyles.module.css';
import logoNy from '../../assets/logony.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import websiteLight from '../../assets/websitelinkLight.svg'
import websiteDark from '../../assets/websitelinkDark.svg'
import githubLight from '../../assets/githubLight.svg'
import githubDark from '../../assets/githubDark.svg'
import gitbookLight from '../../assets/gitbookLight.png'
import gitbookDark from '../../assets/gitbookDark.png'
import behanceLight from '../../assets/behanceLight.svg'
import behanceDark from '../../assets/behanceDark.svg'
import { useTheme } from '../../common/ThemeContext';


function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const websiteIcon = theme === 'light' ? websiteLight : websiteDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const gitbookIcon = theme === 'light' ? gitbookLight : gitbookDark;
    const behanceIcon = theme === 'light' ? behanceLight : behanceDark;

    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>

                <img className={styles.hero}
                    src={logoNy}
                    alt='logo nynerdly visuals' />

                <img className={styles.colorMode}
                    src={themeIcon}
                    alt='Color mode icon'
                    onClick={toggleTheme} />
                    

            </div>

            <div className={styles.info}>
                <h1>
                    Nynerdly 
                    <br></br>
                    Visuals
                </h1>

                <h2>
                    Frontend Developer
                </h2>

                <span>

                    <a href='https://nynerdlyvisuals.com' target="_blank">
                        <img src={websiteIcon} alt='Website icon' />

                    </a>
                    <a href='https://github.com/Nynerdly' target="_blank">
                        <img src={githubIcon} alt='Github icon' />

                    </a>

                    <a href='https://nynerdly-world.gitbook.io/nynerdly-visuals-r-x-nynerdly-r.com' target="_blank">
                        <img src={gitbookIcon} alt='Gitbook icon' />

                    </a>

                    <a href='https://www.behance.net/nynerdlyvisuals?tracking_source=search_projects|Protein+bars&' target="_blank">
                        <img src={behanceIcon} alt='Behance icon' />

                    </a>

                </span>

                <h3>
                    📟 ABOUT ME
                </h3>
                <p className= {styles.description}>
                    Chocolate and series addict, YES, but also a self-taught web developer frontend, web designer, UX/UI designer, and graphic designer. My journey has ignited a reflective and creative spark within me, and I'm passionate about using my skills to create beautiful and user-friendly experiences.
                    
                    <br /> <br />

                    🔦 I'm always looking for new challenges and opportunities to learn.
                </p>

                <a href="https://www.nynerdlyvisuals.com/lets-get-it" target='_blank'>
                    <button className={styles.hover}>
                        Contact
                    </button>
                </a>

            </div>
        </section>
    )
}

export default Hero;