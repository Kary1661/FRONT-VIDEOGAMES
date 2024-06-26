import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { searchGame } from '../../redux/actions/actions'
import Loading from '../../utils/Loading'
import { CardsContainer } from './searchResults.styles'
import NotFound from '../../utils/NotFound/NotFound'


export default function SearchResults() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const searched = useSelector((state) => state.searched)

  const [searchParams] = useSearchParams()
  const search = searchParams.get('name')

  useEffect(() => {
    setLoading(true)
    dispatch(searchGame(search)).finally(() => {
      setLoading(false)
    })
  }, [dispatch, search])

  if (loading) {
    return <Loading />;
  }

  return (
    <CardsContainer>
      {searched.length === 0 ? (
        <NotFound />
      ) : (
      searched?.map((game, index) => (
        <Card
          index={index}
          key={game.id}
          id={game.id}
          title={game.name}
          image={game.image}
          rating={game.rating}
          genres={game.genres}
          released={game.launchDate}
          stores={game.stores}
        />
      ))
      )}
    </CardsContainer>
  )
}
