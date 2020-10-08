import { Heading, Text, Box, useColorMode, Flex } from '@chakra-ui/core';
import { Layout, Card } from '@components/index';
import { ColorModeContext } from '@contexts/CustomColorContext';
import { StaticBlog } from 'global';
//images
import ExampleImg from 'images/typescript.png';
import { getSortedPostsData } from 'lib/posts';
import { GetStaticProps } from 'next';
import { useContext } from 'react';

type Props = {
  guides: StaticBlog[];
};

const guides = ({ guides }: Props) => {
  const colorModeObj = useContext(ColorModeContext);
  const { colorMode } = useColorMode();

  return (
    <Layout>
      <Flex justifyContent="center" alignItems="center" flexDirection="column" margin="1.5rem 0">
        <Heading
          textAlign="center"
          as="h2"
          fontSize={['2rem', '2rem', '3rem', '3rem']}
          marginBottom="1rem"
          marginTop={['0.6rem', '0', '0', '0']}
          fontWeight="bold"
          color={colorModeObj.titleColor[colorMode]}
        >
          Guides
        </Heading>
        <Text
          textAlign="center"
          fontSize="1.3rem"
          color={
            colorMode === 'light' ? colorModeObj.titleColor.light : colorModeObj.titleColor.dark
          }
        >
          The missing instruction manuals of the web.
        </Text>
      </Flex>
      <Box
        d="grid"
        gridTemplateColumns={[
          'repeat(1,minmax(0,1fr))',
          'repeat(2,minmax(0,1fr))',
          'repeat(2,minmax(0,1fr))',
          'repeat(3,minmax(0,1fr))',
        ]}
        gridGap="1.5rem"
        mb={['3rem', '4rem', '5rem', '5rem']}
      >
        {guides.map((blog: StaticBlog, index: number) => {
          return (
            <Card
              key={index}
              id={blog.id}
              img={ExampleImg}
              title={blog.title}
              description={blog.summary}
            />
          );
        })}
      </Box>
    </Layout>
  );
};

export default guides;

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = getSortedPostsData();
  //Slicing used to get first four digit of date => YYYY-DD-MM
  const guides = blogPosts.filter((blog) => {
    return blog.guides ? blog : null;
  });

  return {
    props: { guides },
  };
};
