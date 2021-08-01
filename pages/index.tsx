import { GetStaticProps } from 'next';
import { Layout, Project, ArticleLists, Summary } from '@components/index';
import { getSortedPostsData } from 'lib/posts';

import { StaticBlog } from 'global';
import React from 'react';

type Props = {
  blogPosts: StaticBlog[];
};

const Home = ({ blogPosts }: Props) => {
  return (
    <Layout>
      <Summary />
      <ArticleLists blogs={blogPosts} />
      <Project />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = getSortedPostsData().map((x) => {
    x.languageTags?.sort(() => 0.5 - Math.random());
    return x;
  });
  return {
    props: { blogPosts },
  };
};
