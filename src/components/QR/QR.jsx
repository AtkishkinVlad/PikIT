import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './QR.module.css'

export function QR({ color }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--qr', color)
  }, [])

  return (
    <Link className={styles.qr__container} href="https://t.me/+JDEI1-zeClIwZDYy">
        <Image alt="Наш телеграмм канал" src="/qrcode.svg" width={580} height={580} />
    </Link>
  )
}
