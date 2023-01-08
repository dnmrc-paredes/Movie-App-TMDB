import { GetServerSideProps } from 'next'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import Navbar from '../components/navbar/Navbar'
import { getTrending } from '../services'
import { Trending } from '../types'
import TrendingCard from '../components/navbar/TrendingCard'

import { Navigation } from 'swiper'

const S = {
  Container: styled.div`
    background-color: white;
    height: 100vh;

    .swiper-wrapper {
      .swiper-slide {
        width: 300px !important;
        margin: 0 12px;
        height: 100% !important;
      }
    }
  `,
  TrendingsSection: styled.section`
    margin-top: 50px;
    padding: 0 20px;

    h2 {
      padding: 12px 12px 0 12px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 30px;
    }
  `,
  Trendings: styled.ul``
}

interface HomeProps {
  trendings: Trending[]
}

export default function Home({ trendings }: HomeProps) {
  console.log(trendings)
  return (
    <S.Container>
      <Navbar />
      <S.TrendingsSection>
        <h2> Trending right now </h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView='auto'
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <S.TrendingsSection>
            <S.Trendings>
              {trendings.map(item => {
                return (
                  <SwiperSlide key={item.id}>
                    <TrendingCard {...item} />
                  </SwiperSlide>
                )
              })}
            </S.Trendings>
          </S.TrendingsSection>
        </Swiper>
      </S.TrendingsSection>
    </S.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getTrending()

  return {
    props: {
      page: data.page,
      trendings: data.results
    }
  }
}
