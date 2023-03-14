import Head from "next/head";
import Link from "next/link";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Пик IT + Контур = 💕</title>
        <meta name="description" content="Что ты выберешь?" />
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
        <link rel="icon" href="https://s.kontur.ru/common-v2/icons-products/kontur/favicon/kontur-favicon.svg" />
      </Head>
      <div className={styles.postcard__container}>
        <main className={styles.postcard__description}>
          <h1 className={styles.description__title}>
            В чем твоя сильная сторона?
          </h1>
          <div className={styles.grid_wrapper}>
            <Link href="/analyst" className={styles.wide}>
              <img
                className={styles.image}
                src="/preview1.svg"
                alt=""
              />
              <h3 className={styles.description}>
                Любишь докопаться до сути и расписать весь процесс от и до
              </h3>
            </Link>
            <Link href="/dev" className={styles.wide}>
              <img
                className={styles.image}
                src="/preview6.svg"
                alt=""
              />
              <h3 className={styles.description}>
                Любишь кодить, много кодить
              </h3>
            </Link>
            <Link href="/design" className={styles.tall}>
              <img
                className={styles.image}
                src="/preview2.svg"
                alt=""
              />
              <h3 className={styles.description}>
                Любишь делать красиво и знаешь, что дизайн в мелочах
              </h3>
            </Link>
            <Link href="/manager" className={styles.tall}>
              <img
                className={styles.image}
                src="/preview3.svg"
                alt=""
              />
              <h3 className={styles.description}>
                Любишь разговаривать с людьми и настраивать процессы
              </h3>
            </Link>
            <Link href="/qa" className={styles.wide}>
              <img
                className={styles.image}
                src="/preview4.svg"
                alt=""
              />
              <h3 className={styles.description}>
                Всегда находишь ошибки
              </h3>
            </Link>
            <Link href="/ux" className={styles.wide}>
              <img
                className={styles.image}
                src="/preview5.svg"
                alt=""
              />
              <h3 className={styles.description}>
                Любишь заботиться и проявлять эмпатию
              </h3>
            </Link>
          </div>
        </main>
      </div>
      <div className={styles.light1} />
      <div className={styles.light2} />
      <div className={styles.light3} />
      <div className={styles.light4} />
    </>
  );
}
