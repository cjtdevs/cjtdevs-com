import ContactForm from '../../components/Contact'
import styles from '../../styles/pages/Contact.module.css'
import BackgroundImage from '../../components/BackgroundImage'
import { attributes } from '!!frontmatter-markdown-loader!../../content/pages/contact.md'
import Meta from '../meta'

export default function Contact() {
    const text = attributes
    return (
        <>
            <Meta />
            <div className={styles.contact}>
                <BackgroundImage
                    src={text.background}
                    alt="background"
                />
                <div className="title">
                    <h2>{text.title}</h2>
                </div>
                <div className={styles.subtitle}>
                    <span style={{ fontSize: 'large' }}>{text.subTitle}</span>
                </div>
                <div className={styles.subtitle}>
                    <span style={{ fontSize: 'medium' }}>{text.content}</span>
                </div>
                <hr />
                <section>
                    <div className={styles.formSection}>
                        <ContactForm />
                    </div>
                </section>
            </div>
        </>
    )
}
