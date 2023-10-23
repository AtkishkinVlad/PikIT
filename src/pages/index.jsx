import Head from "next/head";
import { useState } from "react";
import { useForm } from '@formcarry/react';
import Image from "next/image";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const [checkCount, setCheckCount] = useState(0);
  const { state, submit } = useForm({
    id: '7sFpT9X6bI'
  });

  const onClickHandler = (e) => {
    if (e.target.checked) {
      setCheckCount(checkCount + 1)
    }
    else {
      setCheckCount(checkCount - 1)
    }
  }

  if (state.submitted) {
    window.open('https://kontur.ru/talk/actions/578');
  }

  return (
    <>
      <Head>
        <title>Бинго курьезов на рабочих созвонах 📞</title>
        <meta name="description" content="Что ты выберешь?" />
        <meta name="viewport" content="width=device-width, initial-scale=0.4" />
        <link rel="icon" href="https://s.kontur.ru/common-v2/icons-products/kontur/favicon/kontur-favicon.svg" />
      </Head>
      <div className={styles.postcard__container}>
        <header style={{
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center'
          }}>
            <Image width={256} height={128} src="https://s.kontur.ru/common-v2/logos/logo-talk-32.svg" alt="Логотип Толка" />
        </header>
        <main className={styles.postcard__description}>
          <h1 className={styles.description__title}>
            Бинго курьезов <br />на рабочих созвонах
          </h1>
          <p style={{ textAlign: 'start', marginBottom: '32px' }}>
            Отмечай, что с тобой уже случалось на созвоне — посмотрим, насколько схожие у нас бывают ситуации. 
          </p>
          <form onSubmit={submit} className={styles.grid_wrapper}>
            <label htmlFor="1" className={styles.tall}>
              <input id="1" name="1" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Получать приглашение на встречу с темой: «Надо поговорить»" />
              <h3 className={styles.description}>
                Получать приглашение на встречу <br />с темой: «Надо поговорить»
              </h3>
            </label>
            <label htmlFor="2" className={styles.tall}>
              <input id="2" name="2" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Любоваться на кота, который залез в кадр" />
              <h3 className={styles.description}>
                Любоваться на кота, который залез в кадр
              </h3>
            </label>
            <label htmlFor="3" className={styles.tall}>
              <input id="3" name="3" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Видеть как все перебивают друг друга" />
              <h3 className={styles.description}>
                Видеть как все перебивают друг друга
              </h3>
            </label>
            <label htmlFor="4" className={styles.tall}>
              <input id="4" name="4" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Смотреть встречи в записи, потому что в календаре нет свободных окон" />
              <h3 className={styles.description}>
                Смотреть встречи в записи, потому что <br />в календаре нет свободных окон
              </h3>
            </label>
            <label htmlFor="5" className={styles.tall}>
              <input id="5" name="5" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Включать шумоподавление, потому что соседи начали ремонт" />
              <h3 className={styles.description}>
                Включать шумоподавление, потому&nbsp;что соседи начали ремонт
              </h3>
            </label>
            <label htmlFor="6" className={styles.tall}>
              <input id="6" name="6" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Выбирать забавный фон с ковром или пальмами" />
              <h3 className={styles.description}>
                Выбирать забавный фон с ковром или пальмами
              </h3>
            </label>
            <label htmlFor="7" className={styles.tall}>
              <input id="7" name="7" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Подключаться к внеплановому созвону с телефона" />
              <h3 className={styles.description}>
                Подключаться к внеплановому созвону с телефона
              </h3>
            </label>
            <label htmlFor="8"  className={styles.tall}>
              <input id="8" name="8" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Выключать камеру, когда не успеваешь пообедать" />
              <h3 className={styles.description}>
                Выключать камеру, когда не успеваешь пообедать
              </h3>
            </label>
            <label htmlFor="9"  className={styles.tall}>
              <input id="9" name="9" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Отлучиться на минутку, потому что встречаешь курьера" />
              <h3 className={styles.description}>
                Отлучиться на минутку, потому что встречаешь курьера
              </h3>
            </label>
            <label htmlFor="10"  className={styles.tall}>
              <input id="10" name="10" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Слушать докладчика когда встреча давно закончилась" />
              <h3 className={styles.description}>
                Слушать докладчика когда встреча давно закончилась
              </h3>
            </label>
            <label htmlFor="11"  className={styles.tall}>
              <input id="11" name="11" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Путать часовые пояса и подключаться не в то время" />
              <h3 className={styles.description}>
                Путать часовые пояса <br /> и подключаться не в то время
              </h3>
            </label>
            <label htmlFor="12"  className={styles.tall}>
              <input id="12" name="12" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Ловить глюки интернета в самый важный момент" />
              <h3 className={styles.description}>
                Ловить глюки интернета в самый важный момент
              </h3>
            </label>
            {checkCount > 0 && <button className={`${styles.button}`} type="submit">{state.submitting ? "Идет отправка ответа..." : "Поделиться своим бинго"}</button>}
          </form>
        </main>
        <footer>
          {state.error && <p style={{
            fontSize: '1.4rem',
            fontWeight: '700'
          }}>Произошла ошибка, попробуйте отправить ответ еще раз</p>}
        </footer>
      </div>
      <Image className={styles.light1} width={24} height={24} alt="Логотип Толка" src="https://s.kontur.ru/common-v2/icons-products/talk/talk-32.svg" />
      <Image className={styles.light2} width={24} height={24} alt="Логотип Толка" src="https://s.kontur.ru/common-v2/icons-products/talk/talk-32.svg" />
    </>
  );
}
