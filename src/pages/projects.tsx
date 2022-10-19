import { gql, GraphQLClient } from 'graphql-request';
import Image from 'next/image';
import Link from 'next/link';

import coverUrl from '../../public/images/teste1.png';

import { ProjectCard } from '../components/ProjectCard';
// import { getGraphCMS } from '../services/graphcms';

import styles from '../styles/pages/projects.module.scss';

const graphcms = new GraphQLClient(
  process.env.GRAPHCMS_CONTENT_API
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