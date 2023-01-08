import styled from 'styled-components'
import Image from 'next/image'
import { imgUrl } from '../../constants'
import type { Trending } from '../../types'

const S = {
  Container: styled.li`
    list-style: none;
  `
}

export default function TrendingCard({ poster_path, title }: Trending) {
  return (
    <S.Container>
      <Image
        src={`${imgUrl}/${poster_path}`}
        alt={title}
        width={300}
        height={450}
      />
    </S.Container>
  )
}
