import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

type Props = {
  title: string;
  summary: string;
  publishedAt: string;
  url: string;
  image: string;
};

type Featured = {
  url: string;
  alt: string;
};

const BlogSeo = ({ title, summary, publishedAt, url, image }: Props) => {
  const date = new Date(publishedAt).toISOString();
  const featuredImage: Featured = {
    url: `https://ogzhanolguncu.com${image}`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – Güven Karanfil`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName="Güven Karanfil"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[]}
        publisherLogo="/static/favicons/favicon.ico"
        publisherName="Güven Karanfil"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
