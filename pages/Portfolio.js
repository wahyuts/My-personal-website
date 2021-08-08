import styles from '../styles/Portfolio.module.css'

const Portfolio = () => {
    return ( 
        <div>
            <div className={styles.contTitleSkill}>
                <h2>My Portfolio</h2>
            </div>
            <div className={styles.gridWrapper}>
                <div className={styles.zone}>
                    <img src="/My-personal-web.png" width={300} height={185} style={{marginBottom:8}}/>
                    <p>My personal web</p>
                </div>
                <div className={styles.zone}>
                    <img src="/comingsoon.jpg" width={300} height={185} style={{marginBottom:8}}/>
                    <p>Stay tuned, coming soon!</p>
                </div>
                <div className={styles.zone}>
                    <img src="/comingsoon.jpg" width={300} height={185} style={{marginBottom:8}}/>
                    <p>Stay tuned, coming soon!</p>
                </div>
                <div className={styles.zone}>
                    <img src="/comingsoon.jpg" width={300} height={185} style={{marginBottom:8}}/>
                    <p>Stay tuned, coming soon!</p>
                </div>
                <div className={styles.zone}>
                    <img src="/comingsoon.jpg" width={300} height={185} style={{marginBottom:8}}/>
                    <p>Stay tuned, coming soon!</p>
                </div>
                <div className={styles.zone}>
                    <img src="/comingsoon.jpg" width={300} height={185} style={{marginBottom:8}}/>
                    <p>Stay tuned, coming soon!</p>
                </div>
            </div>
            <div className={styles.contTitleSkill}>
                <p>Visit <a href="https://github.com/wahyuts/MyPortfolio" style={{color:"#2596be",cursor:"default",textDecoration:"none"}}>my github</a> account to see more of my work</p>
            </div>
        </div>
     );
}
 
export default Portfolio;