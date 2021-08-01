import Link from 'next/link';

import {
  Flex,
  Box,
  Heading,
  Text,
  Link as StyledLink,
  Button,
  useColorMode,
  Img,
} from '@chakra-ui/react';

import React from 'react';
import { useContext } from 'react';
import { ColorModeContext } from 'contexts/CustomColorContext';
import useProgressiveImg from 'utils/useProgressiveImg';

const Summary = () => {
  const { colorMode } = useColorMode();
  const colorModeObj = useContext(ColorModeContext);
  const [src, { blur }] = useProgressiveImg(
    '/static/images/350tiny.webp',
    '/static/images/350.webp',
  );

  return (
    <Flex
      margin={['1.5rem 0', '1.5rem 0', '1.5rem 0', '4.5rem 0']}
      flexDirection={['column-reverse', 'column-reverse', 'row']}
      justifyContent="space-between"
    >
      <Box maxW="600px">
        <Heading
          fontSize={['1.6rem', '2rem', '2.3rem', '2.6rem']}
          lineHeight="1.4"
          marginBottom="2rem"
          marginTop={['0.6rem', '0', '0', '0']}
          fontWeight="bold"
          color={colorModeObj.titleColor[colorMode]}
        >
          Hey! I'm Güven Karanfil. I'm a software developer.
        </Heading>
        <Text
          fontSize={['1rem', '1rem', '1.2rem', '1.3rem']}
          marginBottom="2.5rem"
          fontWeight="400"
          color={colorModeObj.feedBackButtonColor.dark}
        >
          This website is my 📚 digital library of the things I have learned and created over the
          years, and anything else I want to write about. You can read my{' '}
          <Link href="/blog">
            <StyledLink
              color={colorModeObj.linkColor[colorMode]}
              href="/blog"
              fontWeight="700"
              _hover={{
                textDecoration: 'none',
                borderBottom: '0.3rem solid #dbe4ffde',
                borderBottomColor:
                  colorMode === 'light'
                    ? colorModeObj.linkHoverColor.light
                    : colorModeObj.linkHoverColor.dark,
                color:
                  colorMode === 'light'
                    ? colorModeObj.linkHoverColor.light
                    : colorModeObj.linkHoverColor.dark,
              }}
            >
              blog
            </StyledLink>
          </Link>
          , view my
          <Link href="/guides">
            <StyledLink
              color={colorModeObj.linkColor[colorMode]}
              href="/guides"
              fontWeight="700"
              ml={2}
              _hover={{
                textDecoration: 'none',
                borderBottom: '0.3rem solid #dbe4ffde',
                borderBottomColor:
                  colorMode === 'light'
                    ? colorModeObj.linkHoverColor.light
                    : colorModeObj.linkHoverColor.dark,
                color:
                  colorMode === 'light'
                    ? colorModeObj.linkHoverColor.light
                    : colorModeObj.linkHoverColor.dark,
              }}
            >
              guides & blog
            </StyledLink>
          </Link>
          , or learn more
          <Link href="/about">
            <StyledLink
              color={colorModeObj.linkColor[colorMode]}
              href="/about"
              fontWeight="700"
              ml={2}
              _hover={{
                textDecoration: 'none',
                borderBottom: '0.3rem solid',
                borderBottomColor:
                  colorMode === 'light'
                    ? colorModeObj.linkHoverColor.light
                    : colorModeObj.linkHoverColor.dark,
                color:
                  colorMode === 'light'
                    ? colorModeObj.linkHoverColor.light
                    : colorModeObj.linkHoverColor.dark,
              }}
            >
              about me
            </StyledLink>
          </Link>
          .
        </Text>
        <Box flexDirection={['column', 'column', 'row', 'row']} d="flex">
          <Button
            background={colorModeObj.feedBackButtonBackgroundColor[colorMode]}
            color={colorModeObj.feedBackButtonColor[colorMode]}
            padding="30px 30px"
            fontWeight="600"
            fontSize={['15px', '16px', '16px', '18px']}
            _hover={{
              backgroundColor:
                colorMode === 'light' ? colorModeObj.buttonHoverColor.light : 'orange.500',
              color: 'white',
            }}
          >
            <Text mr="8px">&#128239;</Text> Give Feedback
          </Button>
        </Box>
      </Box>
      <Box margin={['auto 0', '10px 0', '10px 0px', '10px 0px']} maxW="390px">
        <Img
          borderRadius={['50%', '50%', '16px', '16px']}
          w={['120px', '120px', '100%', '100%']}
          h={['120px', '120px', '390px', '390px']}
          htmlWidth="390px"
          htmlHeight="390px"
          src={src}
          alt="Profile Photo"
          loading="eager"
          style={{
            filter: blur ? 'blur(20px)' : 'none',
            transition: blur ? 'none' : 'filter 0.3s ease-out',
          }}
          tabIndex={0}
        />
      </Box>
    </Flex>
  );
};

export default Summary;
