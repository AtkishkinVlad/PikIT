import Link from "next/link"

import styles from './MainLink.module.css'

export const MainLink = () => (
    <Link className={styles.link} class href="/">
        На главную
    </Link>
)