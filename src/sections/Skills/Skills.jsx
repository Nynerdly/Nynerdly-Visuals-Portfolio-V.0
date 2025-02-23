import styles from './SkillsStyles.module.css'
import htmlLight from '../../assets/htmlLight.svg'
import cssLight from '../../assets/cssLight.svg'
import jsLight from '../../assets/jsLight.svg'
import reactjsLight from '../../assets/reactjsLight.svg'
import tailwindcssLight from '../../assets/tailwindcssLight.svg'
import viteLight from '../../assets/viteLight.svg'
import gsapLight from '../../assets/gsapLight.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>

        <div className={styles.skillList}>
            <SkillList src={htmlLight}  />
            <SkillList src={cssLight}  />
            <SkillList src={jsLight}  />
            <SkillList src={reactjsLight}  />
            <SkillList src={tailwindcssLight}  />
            <SkillList src={viteLight}  />
            <SkillList src={gsapLight}  />

        </div>
    </section>
  )
}

export default Skills