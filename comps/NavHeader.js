// import styles from '../styles/HeadNav.module.css'
import React, {useEffect,useState} from "react";
import Link from 'next/link'
import Image from 'next/image'


const NavHeader = () => {

    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".navMenu");
        const navLink = document.querySelectorAll(".navLink");
    
        
        navLink.forEach(n => n.addEventListener("click", closeMenu));

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }

        hamburger.addEventListener("click", mobileMenu);
    },[])

    return ( 
        <div className="onlyMargin">
            <div className="header">
                <Link href="/">
                    <div className="navLogo">
                        <Image src="/webLogo.png" width={50} height={50} style={{marginRight:15}}/>
                        <a>Wahyu Trisna Setiadi</a> 
                    </div>
                </Link>
                <div className="navbar">
                    <ul className="navMenu">
                        <li className="navItem">
                            <Link href="/About"><a className="navLink">About</a></Link>
                        </li>
                        <li className="navItem">
                            <Link href="/Skill"><a className="navLink">Skill</a></Link>
                        </li>
                        <li className="navItem">
                            <Link href="/Portfolio"><a className="navLink">Portfolio</a></Link>
                        </li>
                        <li className="navItem">
                            <Link href="/Contact"><a className="navLink">Contact</a></Link>
                        </li>
                    </ul>
                </div>

                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </div>

     );
}
 
export default NavHeader;