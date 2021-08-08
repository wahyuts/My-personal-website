import Head from 'next/head'
import styles from '../styles/Skill.module.css'
import Image from 'next/image'

const Skill = () => {
    return ( 
        <div>
            <Head>
                <title>WTS Personal Web | Skill</title>
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>
            <div className={styles.contTitleSkill}>
                <h2>Developing Skill</h2>
            </div>
            <div className={styles.contLeft}>
                <div className={styles.contEachLeft}>
                    <div className={styles.marginImg}>
                        <Image src="/htmlLogo.png" width={300} height={300} />
                    </div>
                    <p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. 
                        It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
                </div>
            </div>
            
            <div className={styles.contRight}>
                <div className={styles.contEachRight}>
                    <div className={styles.marginImg}>
                        <Image src="/cssLogo.png" width={300} height={300} />
                    </div>
                    <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.
                        CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                </div>
            </div>

            <div className={styles.contLeft}>
                <div className={styles.contEachLeft}>
                    <div className={styles.marginImgJS}>
                        <Image src="/JSLogo.png"  width={300} height={300}  />
                    </div>
                    <p>JavaScript often shortened to JS is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but its used in many non-browser environments as well. 
                        It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.</p>
                </div>
            </div>
            
            <div className={styles.contRight}>
                <div className={styles.contEachRight}>
                    <div className={styles.marginImgReact}>
                        <Image src="/ReactLogo.png" width={180} height={140} />
                    </div>
                    <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</p>
                </div>
            </div>

            <div className={styles.contLeftNext}>
                <div className={styles.contEachLeft}>
                    <div className={styles.marginImgJS}>
                        <Image src="/next-js.svg" width={150} height={150} />
                    </div>
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