import styles from '../styles/FormQnA.module.css'

const FormQnA = () => {
    return ( 
        <div>
            <form className={styles.contForm}>
                <div className={styles.divForm}>
                    <label className={styles.labelForm}>Your name</label>
                    <input type="text" name="full_name" className={styles.inputField} />
                </div>
                <div className={styles.divForm}>
                    <label className={styles.labelForm}>Email</label>
                    <input type="email" name="email" className={styles.inputField} />
                </div>
                <div className={styles.divForm}>
                    <label className={styles.labelForm}>Your website (if exist)</label>
                    <input type="text" name="your_website" className={styles.inputField} />
                </div>
                <div className={styles.divForm}>
                    <label className={styles.labelForm}>Message</label>
                    <div>
                        <textarea name="message" rows="5" cols="50" style={{paddingLeft:10,paddingTop:10}}></textarea>
                    </div>
                    {/* <input type="text" name="message" className={styles.inputField}/> */}
                </div>
                <div className={styles.divForm}>
                    <button type="submit" className={styles.buttonForm}>Submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default FormQnA;