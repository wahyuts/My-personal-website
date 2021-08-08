import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = () => {
    return ( 
        <div>
            <Head>
                <title>WTS Personal Web | About</title>
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>
            <div className={styles.contTitleAbout}>
                <h2>About me</h2>
            </div>
            <div className={styles.contAbout}>
                <p>
                    I wasn’t a truly frontend developer before. Yeah, I was majoring in informatics engineering when I took my studies at 2010 until 2016. 
                    But I choose visual basic at that time as my main progamming language and focus there until I was graduate.  

                    <br/>
                    <br/>
                    After I graduate from my college in 2016, I immediately worked in a cooperation. I only worked there for 2 years. My job there was to build a system and local network. 
                    I was also assigned to make a local software, so the employes were not longer used ms.excel to make, calculate and checking customer data. After i resign from my job, I decided
                    not to take a job from a company because family matters. So i need to continue my family business, at that time my father had a pretty bad accident. 
                    I help my family business almost 2 year and since i was too focused at that time i start to lose my desire to code some programs.

                    <br/>
                    <br/>
                    I back to work in office in 2020 but at that time not as an IT but as an chemical purchasing staft.
                    And in early 2021, my desire to do some code is back. to start over again, I took bootcamp course in Glints Accademy
                    for 3 months. I learned how to create a good web application in Glints Accademy and i like it so much. 
                    So now after graduate form Glints Accademy i become a frontend developer.
                    <br/>
                    <br/>
                </p>
                
                <div className={styles.noFlex}>
                    <Image src="/mySelfy.jpg" width={1500} height={2300}/>
                </div>
            </div>
        </div>
     );
}
 
export default About;