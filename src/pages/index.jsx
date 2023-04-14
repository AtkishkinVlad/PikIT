import Head from "next/head";
import { useState } from "react";
import { useForm } from '@formcarry/react';

import { RedirectPage } from "@/components/RedirectPage/RedirectPage";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const [checkCount, setCheckCount] = useState(0);
  const { state, submit } = useForm({
    id: 'q5LFbfhDLj'
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
    return <RedirectPage />;
  }

  return (
    <>
      <Head>
        <title>Agile Days + Контур = 💕</title>
        <meta name="description" content="Что ты выберешь?" />
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
        <link rel="icon" href="https://s.kontur.ru/common-v2/icons-products/kontur/favicon/kontur-favicon.svg" />
      </Head>
      <div className={styles.postcard__container}>
        <main className={styles.postcard__description}>
          <h1 className={styles.description__title}>
            Что делал ?
          </h1>
          <p style={{ textAlign: 'center', marginBottom: '32px' }}>
            Расскажи о своем тернистом пути :)
          </p>
          <form onSubmit={submit} className={styles.grid_wrapper}>
            <label htmlFor="1" className={styles.wide}>
              <input id="1" name="1" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Увольнял сотрудника" />
              <h3 className={styles.description}>
                Увольнял сотрудника
              </h3>
            </label>
            <label htmlFor="2" className={styles.wide}>
              <input id="2" name="2" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Вырастил тимлида" />
              <h3 className={styles.description}>
                Вырастил тимлида
              </h3>
            </label>
            <label htmlFor="3" className={styles.tall}>
              <input id="3" name="3" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Вырастил команду в 2 раза" />
              <h3 className={styles.description}>
                Вырастил команду в 2 раза
              </h3>
            </label>
            <label htmlFor="4" className={styles.tall}>
              <input id="4" name="4" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Настраивал джиру / ютрек" />
              <h3 className={styles.description}>
                Настраивал джиру/ютрек
              </h3>
            </label>
            <label htmlFor="5" className={styles.wide}>
              <input id="5" name="5" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Выбивал бюджет на команду" />
              <h3 className={styles.description}>
                Выбивал бюджет на команду
              </h3>
            </label>
            <label htmlFor="6" className={styles.wide}>
              <input id="6" name="6" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Пережил выгорание" />
              <h3 className={styles.description}>
                Пережил выгорание
              </h3>
            </label>
            <label htmlFor="7"  className={styles.big}>
              <input id="7" name="7" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Признавался руководителю, что не вывозишь" />
              <h3 className={styles.description}>
                Признавался руководителю, что не вывозишь
              </h3>
            </label>
            {checkCount > 0 && <button className={styles.button} type="submit">Вот такой мой опыт</button>}
          </form>
        </main>
      </div>
      <div className={styles.light1} />
      <div className={styles.light2} />
      <div className={styles.light3} />
      <div className={styles.light4} />
    </>
  );
}
