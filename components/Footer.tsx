import { Flex, Link as StyledLink, IconButton, Button } from '@chakra-ui/react';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';

import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      maxWidth="1080px"
      mx="auto"
      p={5}
    >
      <Flex justifyContent="space-between">
        <Link href="/blog">
          <Button
            mr={['.2rem', '1rem', '1.5rem', '1.5rem']}
            p={['.4rem .85rem', '.5rem 1rem', '.75rem 1.25rem', '.75rem 1.25rem']}
            fontSize={['.8rem', '.8rem', '1.1rem', '1.1rem']}
          >
            Blog
          </Button>
        </Link>
        <Link href="/guides">
          <Button
            mr={['.2rem', '1rem', '1.5rem', '1.5rem']}
            p={['.4rem .85rem', '.5rem 1rem', '.75rem 1.25rem', '.75rem 1.25rem']}
            fontSize={['.8rem', '.8rem', '1.1rem', '1.1rem']}
          >
            Guides
          </Button>
        </Link>
        <Link href="/rss.xml">
          <Button
            mr={['0', '0', '0', '0']}
            p={['.4rem .85rem', '.5rem 1rem', '.75rem 1.25rem', '.75rem 1.25rem']}
            fontSize={['.8rem', '.8rem', '1.1rem', '1.1rem']}
          >
            RSS
          </Button>
        </Link>
      </Flex>
      <Flex
        justifyContent="center"
        w="100%"
        alignItems="center"
        p={['1rem', '1rem', '2rem', '3rem']}
      >
        <StyledLink
          href="https://github.com/guvenkaranfil"
          title="GitHub"
          isExternal
          paddingX=".5rem"
        >
          <IconButton icon={<SiGithub size={25} />} aria-label="GitHub" name="github" />
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/guven-karanfil/"
          title="LinkedIn"
          isExternal
          paddingX=".5rem"
        >
          <IconButton icon={<SiLinkedin size={25} />} aria-label="LinkedIn" name="linkedin" />
        </StyledLink>
        <StyledLink
          href="mailto:guvenkaranfil235@gmail.com"
          title="Email"
          isExternal
          paddingX=".5rem"
        >
          <IconButton icon={<SiGmail size={25} />} aria-label="Email" name="email" />
        </StyledLink>
      </Flex>
    </Flex>
  );
};

export default Footer;
