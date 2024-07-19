import Link from "next/link";

import classes from './page.module.css'
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
     <header className={classes.header}>
      <div className={classes.slideshow}>
        <ImageSlideshow/>
      </div>
      <div>
        <div className={classes.hero}>
          <h1>차세대 미식가를 위한 차세대 음식</h1>
          <p>전 세계 음식을 맛보고 공유하기</p>
        </div>
        <div className={classes.cta}>
          <Link href="/community">커뮤니티</Link>
          <Link href="/meals">식사하기</Link>
        </div>
      </div>
     </header>
     <main>
        <section className={classes.section}>
          <h2>작동 방식</h2>
          <p>
          NextLevel Food는 미식가들이 좋아하는 음식을 공유할 수 있는 플랫폼입니다.
          &apos;세상과 함께하는 요리법. 새로운 요리를 발견하고 또
          다른 음식 애호가들과 관계를 맺습니다.
          </p>
          <p>
          Next Level Food는 다른 음식 애호가들과 함께 새로운 요리를 발굴하고 연결하는 곳입니다.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
