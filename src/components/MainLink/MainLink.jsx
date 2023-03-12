import Link from "next/link"

import styles from './MainLink.module.css'

export const MainLink = ({ color }) => (
    <Link style={{ backgroundColor: color }} className={styles.link_main} href="/">
        На главную
    </Link>
)