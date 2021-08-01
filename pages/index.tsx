import { GetStaticProps } from 'next';
import { Layout, Project, ArticleLists, Summary } from '@components/index';
import { getSortedPostsData } from 'lib/posts';

import { StaticBlog } from 'global';
import React from 'react';

type Props = {
  blogPosts: StaticBlog[];
  popularPosts: StaticBlog[];
};

const Home = ({ blogPosts, popularPosts }: Props) => {
  return (
    <Layout>
      <Summary />
      <ArticleLists blogs={blogPosts} />
      <ArticleLists blogs={popularPosts} isPopular={true} />
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
  const popularPosts = blogPosts.filter((blog) => blog.isPopular);
  return {
    props: { blogPosts, popularPosts },
  };
};
