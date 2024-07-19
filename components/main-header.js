import Link from "next/link";

import Logo from "@/public/images/logo.png"

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={Logo.src} alt="A plate with food on it"/>
        NextLevel Food
      </Link>

      <nav>
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
  )
}