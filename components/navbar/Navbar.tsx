import styled from 'styled-components'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FONTS, BREAKPOINTS } from '../../styles'

const S = {
  Container: styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
  `,
  Logo: styled.p`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    margin-left: 30px;
    align-items: center;
    font-family: ${FONTS.Logo};
    font-size: 30px;
  `,
  Links: styled.ul`
    flex: 2;
    display: none;
    justify-content: flex-start;
    align-items: center;
    gap: 0 30px;

    li {
      list-style: none;

      a {
        font-size: 14px;
        font-weight: 600;
      }
    }

    @media ${BREAKPOINTS.M} {
      display: flex;
    }
  `,
  MobileMenu: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    display: flex;

    @media ${BREAKPOINTS.M} {
      display: none;
    }
  `
}

export default function Navbar() {
  return (
    <S.Container>
      <S.Logo>Watchflix</S.Logo>
      <S.Links>
        {['Home', 'Genre', 'About'].map(link => {
          return (
            <li key={link}>
              <Link href={link}>{link}</Link>
            </li>
          )
        })}
      </S.Links>
      <S.MobileMenu>
        <GiHamburgerMenu color='inherit' size={25} />
      </S.MobileMenu>
    </S.Container>
  )
}
