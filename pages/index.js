import Head from 'next/head'
import Image from 'next/image'
import ButtonCool from '../comps/ButtonCool'
import ButtonCool2 from '../comps/ButtonCool2'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.onlyWidth}>
        <div className={styles.container}>
            <div className={styles.contText}>
                <h4 className={styles.h4space}>Hi, my name is Wahyu Trisna Setiadi.</h4>
                <h2 className={styles.h2space}>Im a freelance Frontend Developer</h2>

                <div className={styles.contBtn}>
                    <ButtonCool/>
                    <ButtonCool2/>
                </div>
            </div>

            <div className="contIMG">
                <img src="/photo2.png" width={400} height={300}/> 
            </div>
        </div>
    </div>
    
  )
}
