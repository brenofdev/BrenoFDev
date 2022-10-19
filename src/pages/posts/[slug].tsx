import { gql } from "graphql-request";
import Image from "next/image";

import { getGraphCMS } from "../../services/graphcms";

import styles from "./styles.module.scss";

const graphcms = getGraphCMS()

const QUERY = gql`
  query Post($slug: String!){
    posts(where: {slug: $slug}){
      id
      title
      slug
      category
      coverPhoto {
        id
        url
      }
      content {
        html
      }
      projectPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export default function ProjectPost({post}){
  return (
    <main className={styles.container}>
      <h3>{post.title}</h3>
      <div>
        
        <h6>Descrição Geral do Projeto:</h6>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
      </div>
      <Image 
        src={post.projectPhoto.url} 
        alt="banner do projeto"
        width={1700}
        height={3000} 
        
      />
    </main>
  )
}

export const getStaticPaths = async () => {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}
