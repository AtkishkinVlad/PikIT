import Link from "next/link"

import styles from './MainLink.module.css'

export const MainLink = () => (
    <Link className={styles.link_main} href="/">
        На главную
    </Link>
)