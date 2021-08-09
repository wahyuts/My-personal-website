import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ButtonCool from '../comps/ButtonCool'
import ButtonCool2 from '../comps/ButtonCool2'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.onlyWidth}>
        <Head>
          <title>WTS Personal Web | Home</title>
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>
        <div className={styles.container}>
            <div className={styles.contText}>
                <h4 className={styles.h4space}>Hi, my name is Wahyu Trisna Setiadi.</h4>
                <h2 className={styles.h2space}>Im a freelance Frontend Developer</h2>

                <div className={styles.contBtn}>
                    <Link href="/Portfolio"><a><ButtonCool/></a></Link>
                    <Link href="/Contact"><a><ButtonCool2/></a></Link>
                </div>
            </div>

            <div className="contIMG">
                <Image src="/photo2.png" width={400} height={400} layout='fixed'/> 
            </div>
        </div>
    </div>
    
  )
}
