import styles from './FooterStyles.module.css'

function Footer() {
    return (
        <section id='footer' className={styles.container}>
            <p>
                Nynerdly Visuals &#174; <br />
                Catching Your Vibe Right Away Is Our vision
            </p>
        </section>
    )
}

export default Footer