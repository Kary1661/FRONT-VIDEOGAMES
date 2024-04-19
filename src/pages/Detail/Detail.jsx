import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGame, resetGame } from '../../redux/actions/actions'
import Loading from '../../utils/Loading'
import {
  ContentBlock,
  ContentData,
  DetailGame,
  DetailWrapper,
  Feature,
  Features,
  Title,
  Gallery,
  MainContent,
} from './detail.styles'

export default function Detail() {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const game = useSelector((state) => state.game)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    dispatch(getGame(id)).finally(() => {
      setLoading(false)
    })
  }, [id])

  useEffect(() => {
    dispatch(resetGame())
  }, [dispatch])
  return (
    <DetailWrapper>
      {loading && <Loading />}
      {!loading ? (
        <DetailGame>
          <MainContent>
            <div>
              <img src={game.image} alt={game.name}
              className='game-img'
               />
            </div>
            <ContentBlock>
              <h1>{game.name}</h1>
              <p>{game.description}</p>
              <ContentData>
                <p>
                  Launch Date: {new Date(game.launchdate).toLocaleDateString()}
                </p>
                <p>Clasification: {game.esrb_rating?.name}</p>
                <p>Rating: {game.rating}</p>
              </ContentData>
              <Features>
                <Feature>
                  <p>Platforms: </p>
                  {game.platforms?.map((platform, index) => (
                    <span key={index}>{platform.name}</span>
                  ))}
                </Feature>
                <Feature>
                  <p>Genres: </p>
                  {game.genres?.map((genre, index) => (
                    <span key={index}>{genre.name}</span>
                  ))}
                </Feature>
              </Features>
            </ContentBlock>
          </MainContent>
          <Title>Screenshots:</Title>
          <Gallery>
            {game.short_screenshots?.map((img, index) => (
              <img key={index} src={img} alt={`${img} ${index}`} />
            ))}
          </Gallery>
        </DetailGame>
      ) : null}
    </DetailWrapper>
  )
}
