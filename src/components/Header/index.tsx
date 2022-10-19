import Image from 'next/image';
import Link from 'next/link';

import logoImg from '../../../public/images/logo.svg';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoImg} alt="logo brenofdev" />
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/projects">
            <a>Projetos</a>
          </Link>
        </nav>

        <button>Contato</button>
      </div>
    </header>
  )
}