import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/images/logo.png"
import classes from './main-header.module.css'
import MainHeaderBackGround from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackGround/>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={Logo} alt="A plate with food on it" priority/>
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Communuty</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
    
  )
}