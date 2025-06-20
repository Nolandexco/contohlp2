/** @jsx jsx */
import { jsx, Container, Flex, Button, Heading } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
// Path sudah diperbaiki sesuai lokasi file Anda di src/config/
import siteData from '../../config/data.json'; 
import menuItems from './header.data';

export default function Header({ className }) {
  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Heading as="h1" sx={styles.logo}>
          {siteData.header.logoText}
        </Heading>
        
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
            >
              {menuItem.label}
            </Link>
          ))}
        </Flex>

        <Link
          to={siteData.header.button.path}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button
            className="donate__btn"
            variant="secondary"
            aria-label={siteData.header.button.text}
          >
            {siteData.header.button.text}
          </Button>
        </Link>
        
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  logo: {
    color: 'text',
    fontSize: ['24px', null, null, '30px'],
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nav > a, & > div > h1': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
