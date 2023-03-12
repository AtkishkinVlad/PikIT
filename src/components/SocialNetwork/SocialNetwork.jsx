import React from 'react'
import Image from 'next/image'

import styles from './social.module.css'

export function SocialNetwork() {
  return (
    <section className={styles.section}>
        <h3 className={styles.header}>
            Также нас можно найти здесь
        </h3>
        <div className={styles.logo__container}>
            <a href="https://vk.com/kontur_student">
                <Image className={styles.icon} src="/VK_Compact_Logo.svg" height={96} width={96} alt="Мы во Вконтакте" />
            </a>
            <a href="https://kontur.ru/education/programs/city-5457">
                <Image className={styles.icon} src="https://s.kontur.ru/common-v2/icons-products/kontur/favicon/kontur-favicon.svg" height={96} width={96} alt="Образовательные программы" />
            </a>
            <a href="https://www.youtube.com/@user-sp1eu9bn1i/videos">
                <Image className={styles.icon} src="/youtube-svgrepo-com.svg" height={96} width={96} alt="Образовательные программы" />
            </a>
        </div>
    </section>
  )
}
