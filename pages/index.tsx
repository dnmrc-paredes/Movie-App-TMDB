import styled from 'styled-components'
import Navbar from '../components/navbar/Navbar'

const S = {
  Container: styled.div`
    background-color: white;
    height: 100vh;
  `,
}

export default function Home() {
  return (
    <S.Container>
      <Navbar />
    </S.Container>
  )
}
