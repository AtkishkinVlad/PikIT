import React from 'react'
import Image from 'next/image'

import styles from './RedirectPage.module.css'

export const RedirectPage = () => {
  return (
    <>
    <main className={styles.container}>
        <h1 className={styles.title}>
            Спасибо, что рассказал о своем опыте! 
        </h1>
        <section className={styles.main__content}>
            <p style={{ textAlign: 'start', marginBottom: '64px' }}>Если тебе интересно познакомиться с Контуром поближе, получать приглашения на полезные митапы и конференции про управление, или поговорить про работу, пожалуйста, заполни эту анкету. А еще — приходи на стенд за временной татуировкой на менеджерском языке :)</p>
            <a className={styles.link} href='https://forms.kontur.ru/form/agile-days-online' hrefLang='ru'>
                Cсылка на анкету 🥰
            </a>
        </section>
        <footer>
            © 1988–2023 СКБ Контур    
        </footer>
    </main>
    <Image className={styles.logo} alt="Логотип Контура" width={300} height={300} src="https://s.kontur.ru/common-v2/icons-features/glass/red/black-bg/icon-11-people-figure-3-happy@2x.png" />
    <Image className={styles.talk} alt="Логотип Контура" width={300} height={300} src="https://s.kontur.ru/common-v2/icons-features/glass/red/black-bg/icon-12-symbol-talk@2x.png" />
    </>
  )
}
