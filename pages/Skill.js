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
                    <p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. 
                        It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
                </div>
            </div>
            
            <div className={styles.contRight}>
                <div className={styles.contEachRight}>
                    <img src="/cssLogo.png" className={styles.marginImg} width={160} height={160} />
                    <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.
                        CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                </div>
            </div>

            <div className={styles.contLeft}>
                <div className={styles.contEachLeft}>
                    <img src="/JSLogo.png" className={styles.marginImgJS} width={140} height={140} />
                    <p>JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. 
                        It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.</p>
                </div>
            </div>
            
            <div className={styles.contRight}>
                <div className={styles.contEachRight}>
                    <img src="/ReactLogo.png" className={styles.marginImgReact} width={180} height={140} />
                    <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</p>
                </div>
            </div>

            <div className={styles.contLeftNext}>
                <div className={styles.contEachLeft}>
                    <img src="/next-js.svg" className={styles.marginImgJS} width={150} height={150} />
                    <p>Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites. </p>
                </div>
            </div>

            {/* <div>
                <h2>ini kok ga bisa</h2>
            </div> */}
            
        </div>
     );
}
 
export default Skill;