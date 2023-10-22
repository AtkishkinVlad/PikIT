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
        </main>
        <div style={{
            display: 'flex',
            width: '500px',
            placeContent: 'center'
        }}>
            <Image className={styles.talk} alt="Символ мессенджера" width={200} height={200} src="https://s.kontur.ru/common-v2/icons-features/glass/blue/black-bg/icon-12-symbol-talk@2x.png" /> 
        </div>
    </>
  )
}
