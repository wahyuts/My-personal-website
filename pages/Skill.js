import styles from '../styles/Skill.module.css'

const Skill = () => {
    return ( 
        <div>
            <div className={styles.contTitleSkill}>
                <h2>Developing Skill</h2>
            </div>
            <div className={styles.contLeft}>
                <div className={styles.contEachLeft}>
                    <img src="/htmlLogo.png" className={styles.marginImg} width={160} height={160} />
                    <p>Voluptate enim ea ullamco cillum in reprehenderit pariatur pariatur do ex minim aliquip. Culpa proident aute irure fugiat reprehenderit nulla culpa quis do ut. 
                        Nostrud proident sint occaecat laboris ullamco voluptate exercitation ut voluptate incididunt occaecat aute anim. Id sunt aliquip mollit do anim. 
                        Est officia incididunt amet amet dolore elit id fugiat ea. Consectetur ipsum magna dolore ad labore sunt aute cupidatat minim excepteur.</p>
                </div>
            </div>
            
            <div className={styles.contRight}>
                <div className={styles.contEachRight}>
                    <img src="/cssLogo.png" className={styles.marginImg} width={160} height={160} />
                    <p>Voluptate enim ea ullamco cillum in reprehenderit pariatur pariatur do ex minim aliquip. Culpa proident aute irure fugiat reprehenderit nulla culpa quis do ut. 
                        Nostrud proident sint occaecat laboris ullamco voluptate exercitation ut voluptate incididunt occaecat aute anim. Id sunt aliquip mollit do anim. 
                        Est officia incididunt amet amet dolore elit id fugiat ea. Consectetur ipsum magna dolore ad labore sunt aute cupidatat minim excepteur.</p>
                </div>
            </div>

            <div className={styles.contLeft}>
                <div className={styles.contEachLeft}>
                    <img src="/JSLogo.png" className={styles.marginImgJS} width={140} height={140} />
                    <p>Voluptate enim ea ullamco cillum in reprehenderit pariatur pariatur do ex minim aliquip. Culpa proident aute irure fugiat reprehenderit nulla culpa quis do ut. 
                        Nostrud proident sint occaecat laboris ullamco voluptate exercitation ut voluptate incididunt occaecat aute anim. Id sunt aliquip mollit do anim. 
                        Est officia incididunt amet amet dolore elit id fugiat ea. Consectetur ipsum magna dolore ad labore sunt aute cupidatat minim excepteur.</p>
                </div>
            </div>
            
            <div className={styles.contRight}>
                <div className={styles.contEachRight}>
                    <img src="/ReactLogo.png" className={styles.marginImgJS} width={150} height={140} />
                    <p>Voluptate enim ea ullamco cillum in reprehenderit pariatur pariatur do ex minim aliquip. Culpa proident aute irure fugiat reprehenderit nulla culpa quis do ut. 
                        Nostrud proident sint occaecat laboris ullamco voluptate exercitation ut voluptate incididunt occaecat aute anim. Id sunt aliquip mollit do anim. 
                        Est officia incididunt amet amet dolore elit id fugiat ea. Consectetur ipsum magna dolore ad labore sunt aute cupidatat minim excepteur.</p>
                </div>
            </div>

            <div className={styles.contLeftNext}>
                <div className={styles.contEachLeft}>
                    <img src="/next-js.svg" className={styles.marginImgJS} width={150} height={150} />
                    <p>Voluptate enim ea ullamco cillum in reprehenderit pariatur pariatur do ex minim aliquip. Culpa proident aute irure fugiat reprehenderit nulla culpa quis do ut. 
                        Nostrud proident sint occaecat laboris ullamco voluptate exercitation ut voluptate incididunt occaecat aute anim. Id sunt aliquip mollit do anim. 
                        Est officia incididunt amet amet dolore elit id fugiat ea. Consectetur ipsum magna dolore ad labore sunt aute cupidatat minim excepteur.</p>
                </div>
            </div>

            {/* <div>
                <h2>ini kok ga bisa</h2>
            </div> */}
            
        </div>
     );
}
 
export default Skill;