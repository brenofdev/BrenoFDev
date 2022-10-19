import { gql, GraphQLClient } from 'graphql-request';
import Image from 'next/image';
import Link from 'next/link';

import coverUrl from '../../public/images/teste1.png';

import { ProjectCard } from '../components/ProjectCard';
// import { getGraphCMS } from '../services/graphcms';

import styles from '../styles/pages/projects.module.scss';

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/cl905gwq71ckm01t620nj3dzs/master"
)

const QUERY = gql`
  {
    posts{
      id, 
      title,
      slug,
      category
      subContent
      content {
        html
      }
      coverPhoto{
        url
      }
      projectPhoto{
        url
      }
    }
  }
`

export default function Projects({ posts }) {
  return (
    <main className={styles.projectsContainer}>
      <div className={styles.projectsContent}>

        {posts.map((post) => (
          <ProjectCard 
            key={post.id}
            slug={post.slug}
            title={post.title} 
            coverPhoto={post.coverPhoto}
            subContent={post.subContent}
            category={post.category}
          />
        ))}
        
        

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

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
    // revalidade: 30,
  };
}