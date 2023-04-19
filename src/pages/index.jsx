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
        <meta name="viewport" content="width=device-width, initial-scale=0.4" />
        <link rel="icon" href="https://s.kontur.ru/common-v2/icons-products/kontur/favicon/kontur-favicon.svg" />
      </Head>
      <div className={styles.postcard__container}>
        <main className={styles.postcard__description}>
          <h1 className={styles.description__title}>
            Менеджерское бинго Контура
          </h1>
          <p style={{ textAlign: 'start', marginBottom: '32px' }}>
            Отмечай, что с тобой уже случалось на работе — посмотрим, насколько схожие у нас бывают ситуации. 
          </p>
          <form onSubmit={submit} className={styles.grid_wrapper}>
            <label htmlFor="1" className={styles.wide}>
              <input id="1" name="1" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Увольнял сотрудника" />
              <h3 className={styles.description}>
                Увольнял сотрудника
              </h3>
            </label>
            <label htmlFor="2" className={styles.tall}>
              <input id="2" name="2" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Вырастил тимлида" />
              <h3 className={styles.description}>
                Вырастил тимлида
              </h3>
            </label>
            <label htmlFor="3" className={styles.tall}>
              <input id="3" name="3" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Заходил в команду, где все плохо и сделал хорошо" />
              <h3 className={styles.description}>
                Заходил в команду, где все плохо и сделал хорошо
              </h3>
            </label>
            <label htmlFor="4" className={styles.tall}>
              <input id="4" name="4" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Вырастил команду в 2 раза" />
              <h3 className={styles.description}>
                Вырастил команду в 2 раза
              </h3>
            </label>
            <label htmlFor="5" className={styles.tall}>
              <input id="5" name="5" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Настраивал джиру / ютрек" />
              <h3 className={styles.description}>
                Настраивал джиру/ютрек
              </h3>
            </label>
            <label htmlFor="6" className={styles.tall}>
              <input id="6" name="6" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Работал больше чем в одной команде" />
              <h3 className={styles.description}>
                Работал больше чем в одной команде 
              </h3>
            </label>
            <label htmlFor="7" className={styles.tall}>
              <input id="7" name="7" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Пережил выгорание" />
              <h3 className={styles.description}>
                Пережил выгорание
              </h3>
            </label>
            <label htmlFor="8"  className={styles.big}>
              <input id="8" name="8" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Признавался руководителю, что не вывозишь" />
              <h3 className={styles.description}>
                Признавался руководителю, что не вывозишь
              </h3>
            </label>
            <label htmlFor="9"  className={styles.tall}>
              <input id="9" name="9" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Выбивал бюджет на команду" />
              <h3 className={styles.description}>
                Выбивал бюджет на команду
              </h3>
            </label>
            <label htmlFor="10"  className={styles.tall}>
              <input id="10" name="10" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Продавал заказчику, что фичу делать не надо" />
              <h3 className={styles.description}>
                Продавал заказчику, что фичу делать не надо
              </h3>
            </label>
            <label htmlFor="11"  className={styles.wide}>
              <input id="11" name="11" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Погружазился в сложную предметку" />
              <h3 className={styles.description}>
                Погружался в сложную предметку
              </h3>
            </label>
            <label htmlFor="12"  className={styles.tall}>
              <input id="12" name="12" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Внедрял скрам/канбан" />
              <h3 className={styles.description}>
                Внедрял скрам/канбан
              </h3>
            </label>
            <label htmlFor="13"  className={styles.wide}>
              <input id="13" name="13" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Выходил из команды и она не разваливаллась" />
              <h3 className={styles.description}>
                Выходил из команды и она не разваливалась
              </h3>
            </label>
            <label htmlFor="14"  className={styles.wide}>
              <input id="14" name="14" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Уговорил бизнес выделить время на техдолг" />
              <h3 className={styles.description}>
                Уговорил бизнес выделить время на техдолг 
              </h3>
            </label>
            <label htmlFor="15"  className={styles.big}>
              <input id="15" name="15" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Работал в команде из нескольких менеджеров" />
              <h3 className={styles.description}>
                Работал в команде из нескольких менеджеров  
              </h3>
            </label>
            <label htmlFor="16"  className={styles.tall}>
              <input id="16" name="16" onClick={onClickHandler} type="checkbox" className={styles.checkbox} value="Существенно ускорил ТТМ" />
              <h3 className={styles.description}>
                Существенно ускорил ТТМ   
              </h3>
            </label>
            {checkCount > 0 && <button className={`${styles.button}`} type="submit">Поделиться своим бинго </button>}
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
