import Head from 'next/head'
import Image from 'next/image'
// import Link from 'next/link'
import styles from '../styles/Portfolio.module.css'

const Portfolio = () => {
    return ( 
        <div>
            <Head>
                <title>WTS Personal Web | Portfolio</title>
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>
            <div className={styles.contTitleSkill}>
                <h2>My Portfolio</h2>
            </div>

            <div className={styles.gridWrapper}>
                <div >
                    <a href="https://github.com/wahyuts/My-personal-website" className={styles.zone}>
                        <Image src="/My-personal-web.png" alt="" width={300} height={185} style={{marginBottom:8}}/>
                        <p style={{paddingTop:10}}>My personal web</p>
                    </a>
                </div>
                <div>
                    <a href="https://us.campaign.com/" className={styles.zone}>
                        <Image src="/campaign.png" alt="" width={300} height={185} style={{marginBottom:8}}/>
                        <p style={{paddingTop:10}}>US Campaign</p>
                    </a>
                </div>
                <div>
                    <a href="https://twix-media-social-webapp.vercel.app/" className={styles.zone}>
                        <Image src="/twix.png" alt="" width={300} height={185} style={{marginBottom:8}}/>
                        <p style={{paddingTop:10}}>Twix simple media social</p>
                    </a>
                </div>
                <div>
                    <a href="https://campflix.vercel.app/" className={styles.zone}>
                        <Image src="/campflix.png" alt="" width={300} height={185} style={{marginBottom:8}}/>
                        <p style={{paddingTop:10}}>Campflix simple movie website</p>
                    </a>
                </div>
                <div>
                    <a href="https://robo-friends-self.vercel.app/" className={styles.zone}>
                        <Image src="/Robo-Friends.png" alt="" width={300} height={185} style={{marginBottom:8}}/>
                        <p style={{paddingTop:10}}>Robo Friends</p>
                    </a>
                </div>
                <div>
                    <a href="https://simple-next-app-one.vercel.app/" className={styles.zone}>
                        <Image src="/Ninja-List.png" alt="" width={300} height={185} style={{marginBottom:8}}/>
                        <p style={{paddingTop:10}}>Ninja-List (Tutor NextJS)</p>
                    </a>
                </div>
                {/* <div className={styles.zone}>
                    <Image src="/comingsoon.jpg" alt="" width={300} height={185} style={{marginBottom:8}}/>
                    <p style={{paddingTop:10}}>Stay tuned, coming soon!</p>
                </div> */}
            </div>

            <div className={styles.contTitleSkill}>
                <p>Visit <a href="https://github.com/wahyuts/MyPortfolio" style={{color:"#2596be",cursor:"default",textDecoration:"none"}}>my github</a> account to see more of my work</p>
            </div>
        </div>
     );
}
 
export default Portfolio;