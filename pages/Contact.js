import FormQnA from '../comps/FormQnA'
import styles from '../styles/Contact.module.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from 'next/link'
import Head from 'next/head'


const Contact = () => {
    return ( 
        <div>
            <Head>
                <title>WTS Personal Web | Contact</title>
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>
            <div className={styles.contTitleContact}>
                <h2>Contact</h2>
            </div>
            <div className={styles.contContact}>

                <div className={styles.contPart1}>
                    <h2>Just say hi.</h2>
                    <br/>
                    <p>I am always open to discuss project with you. Please call me with email or social media. Lets improve our skill together!</p>
                    <br/>
                    <br/>
                    <p>Email me at</p>
                    <br/>
                    <p>wahyu.trisna100@gmail.com</p>
                    <br/>
                    <br/>
                    <p>Follow me at</p>
                    <div className={styles.flexSosMed}>
                        <FacebookIcon style={{width:50,height:50}}/>
                        <Link href="https://www.linkedin.com/in/wahyu-trisna-745022196/"><a style={{textDecoration:"none"}}><LinkedInIcon style={{width:50,height:50}}/></a></Link>
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