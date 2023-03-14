import Head from "next/head";

import styles from "./dev.module.css";
import { MainLink } from "@/components/MainLink/MainLink";
import { QR } from "@/components/QR/QR";
import { SocialNetwork } from "@/components/SocialNetwork/SocialNetwork";

export default function Dev() {
  return (
    <>
      <Head>
        <title>Разработчик</title>
        <meta name="description" content="Страница про разработчиков Контура" />
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
        <link
          rel="icon"
          href="https://s.kontur.ru/common-v2/icons-products/kontur/favicon/kontur-favicon.svg"
        />
      </Head>
      <div className={styles.container}>
        <header>
          <h1 className={styles.job}>Может ты хочешь стать разработчиком?</h1>
        </header>
        <main className={styles.main}>
          <details className={styles.details}>
            <summary>Подробности</summary>
            <p>
              В Контуре есть несколько направлений бэкенд-разработки: С#, Java,
              C/C++, Python, Go. И фронтенд тоже есть!
            </p>
            <p>
              Бэкендер пишет содержательную часть программы, логику её действий.
              Как правило, он решает свои задачи с использованием большого числа
              библиотек, набор которых зависит от специфики проекта. При этом
              хороший разработчик не только умеет пользоваться этими
              инструментами, но и понимает, как они устроены внутри.
            </p>
            <p>
              Фронтендер умеет верстать, чтобы картинки от дизайнера становились
              разметкой на сайте. Для этого понадобятся знания HTML и CSS. А еще
              он умеет писать код. Почти во всех командах в Контуре применяется
              React, но есть несколько команд, где используется Angular.
            </p>
          </details>
          <p className={styles.p}>
            Переходите в наш телеграм-канал и забирайте полезный плейлист про профессии в IT.
          </p>
          <QR color="#FF5A49" />
        </main>
        <footer className={styles.footer}>
          <MainLink color="#FF5A49" />
        </footer>
      </div>
      <div className={styles.firstSvg}>
        <svg
          width={400}
          height={300}
          viewBox="0 0 943 647"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 747C269.192 700.465 324.273 351.862 285.74 242.434C247.207 133.006 125.661 191.261 141.269 291.171C156.876 391.082 273.036 541.208 540.787 541.208C826.293 541.208 846.363 283.778 742 222C655 170.5 609.5 280.099 684.5 332.5C870.196 462.241 1004.34 185.399 1025 7"
            stroke="#FF5A49"
            strokeWidth={110}
            className={styles.svgElem}
          />
        </svg>
      </div>
      <div className={styles.secondSvg}>
        <svg
          width={400}
          height={300}
          style={{ transform: "rotate(151deg)" }}
          viewBox="0 0 943 647"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.4648 600.188C401.1 788.931 790.141 512.427 664.452 256.568C601.53 128.48 471.805 224.087 522.026 345.456C572.248 466.825 724.659 681.91 1086.74 620.28C1310.55 582.184 1518.15 419.981 1564.37 6.99634"
            stroke="#FF5A49"
            strokeWidth={120}
            className={styles.svgElem}
          ></path>
        </svg>
      </div>
    </>
  );
}
