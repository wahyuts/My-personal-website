import FormQnA from '../comps/FormQnA'
import styles from '../styles/Contact.module.css'

const Contact = () => {
    return ( 
        <div>
            <div className={styles.contTitleContact}>
                <h2>My Portfolio</h2>
            </div>
            <div className={styles.contContact}>

                <div className={styles.contPart1}>
                    <h2>Just say hi.</h2>
                    <br/>
                    <p>I am always open to discuss project with you. Please call me with email or social media. Let's improve our skill together!</p>
                    <br/>
                    <br/>
                    <p>Email me at</p>
                    <br/>
                    <p>wahyu.trisna100@gmail.com</p>
                    <br/>
                    <br/>
                    <p>Follow</p>
                    <div className={styles.flexSosMed}>
                        <a>FB</a>
                        <a>Linkin</a>
                    </div>
                </div>

                <div className={styles.listForm}>
                    <FormQnA/>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;