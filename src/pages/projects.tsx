import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/pages/projects.module.scss';

import coverUrl from '../../public/images/teste1.png';

export default function Projects() {
  return (
    <main className={styles.projectsContainer}>
      <div className={styles.projectsContent}>
        <Link href="">
          <div className={styles.projectCard}>
            <Image 
              src={coverUrl}
              alt="asd"
              width={400}
              height={200}
            />

            <div className={styles.projectDescription}>
              <strong>
                {/* {title} */} Thairony Ferdz
              </strong>
              <div className={styles.content}>
                {/* {subContent} */}
                Website contendo um portfólio de projetos reais, manifestos, blog com conteúdos pessoais, templates. E um formulário de briefing completo para contato. 

              </div>
            
              <div className={styles.category}>
                {/* {category} */}
                Projeto Real
              </div>
            </div>
          </div>
        </Link>

        <Link href="">
          <div className={styles.projectCard}>
            <Image 
              src={coverUrl}
              alt="asd"
              width={400}
              height={200}
            />

            <div className={styles.projectDescription}>
              <strong>
                {/* {title} */} Thairony Ferdz
              </strong>
              <div className={styles.content}>
                {/* {subContent} */}
                Website contendo um portfólio de projetos reais, manifestos, blog com conteúdos pessoais, templates. E um formulário de briefing completo para contato. 

              </div>
            
              <div className={styles.category}>
                {/* {category} */}
                Projeto Real
              </div>
            </div>
          </div>
        </Link>

        <Link href="">
          <div className={styles.projectCard}>
            <Image 
              src={coverUrl}
              alt="asd"
              width={400}
              height={200}
            />

            <div className={styles.projectDescription}>
              <strong>
                {/* {title} */} Thairony Ferdz
              </strong>
              <div className={styles.content}>
                {/* {subContent} */}
                Website contendo um portfólio de projetos reais, manifestos, blog com conteúdos pessoais, templates. E um formulário de briefing completo para contato. 

              </div>
            
              <div className={styles.category}>
                {/* {category} */}
                Projeto Real
              </div>
            </div>
          </div>
        </Link>

        
      </div>
    </main>
  )
}