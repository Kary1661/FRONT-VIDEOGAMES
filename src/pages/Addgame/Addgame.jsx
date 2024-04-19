import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addGame, getGenres } from '../../redux/actions/actions'
import {
  AddGameContainer,
  AddGameForm,
  AddGameFormContainer,
  SelectorsBlock,
  SelectorsItems,
  SentBtn,
} from './addGame.style'
import GameCard from '../GameCard/GameCard'
import { validate } from './validation.js'

export default function AddGame() {
  const genres = useSelector((state) => state.genres)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch])

  const platforms = [
    { name: 'PlayStation' },
    { name: 'Xbox' },
    { name: 'PC' },
    { name: 'Nintendo' },
    { name: 'iOS' },
    { name: 'Android' },
  ]

  const [gameData, setGameData] = useState({
    name: '',
    description: '',
    image: '',
    launchDate: '',
    rating: '',
    genres: [],
    platforms: [],
  })

  const [errors, setErrors] = useState({
    ...gameData,
  })
  const [success, setSuccess] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    let updatedGameData = { ...gameData }
    if (e.target.type === 'checkbox') {
      let selectedValues = updatedGameData[name]
      if (e.target.checked) {
        selectedValues.push(value)
      } else {
        selectedValues = selectedValues.filter((val) => val !== value)
      }
      updatedGameData[name] = selectedValues
    } else {
      updatedGameData[name] = value
    }
    setGameData(updatedGameData)
    setErrors(validate(updatedGameData))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validate(gameData)
    setErrors(errors)
    if (Object.keys(errors).length === 0) {
      dispatch(addGame(gameData))
    }
    setSuccess('Game added successfully!')
    setTimeout(() => {
      navigate(`/add-game/success`)
    }, 1500)
  }

  return (
    <AddGameContainer>
      <AddGameFormContainer>
        <h2>Let's create an awesome game here!</h2>
        <AddGameForm onSubmit={handleSubmit} method="post">
          <label htmlFor="name">Write your game name</label>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={handleInputChange}
          />
          <span>{errors.name}</span>
          <label htmlFor="image">Insert url for the image</label>
          <input
            type="text"
            name="image"
            placeholder="https://..."
            onChange={handleInputChange}
          />
          <span>{errors.image}</span>
          <label htmlFor="description">Now let's be creative, write the description!</label>
          <textarea
            type="text"
            name="description"
            placeholder="Description..."
            onChange={handleInputChange}
          />
          <span>{errors.description}</span>
          <label htmlFor="launchDate">Now choose the release date:</label>
          <input
            type="date"
            name="launchDate"
            placeholder="Launch Date"
            onChange={handleInputChange}
          />
          <span>{errors.launchDate}</span>
          <label htmlFor="rating">Now let's pick the rating!</label>
          <input
            type="range"
            name="rating"
            placeholder="rating"
            min="0"
            max="5"
            step="0.10"
            onChange={handleInputChange}
          />
          <span>{gameData.rating}</span>
          <span>{errors.rating}</span>
          <SelectorsBlock>
            <span>Now select the genres for your game:</span>
            <SelectorsItems>
              {genres.map((genre) => (
                <label key={genre.id}>
                  <input
                    type="checkbox"
                    name="genres"
                    value={genre.name}
                    onChange={handleInputChange}
                  />
                  {genre.name}
                </label>
              ))}
              <span>{errors.genres}</span>
            </SelectorsItems>
          </SelectorsBlock>
          <SelectorsBlock>
            <span>And finally, choose the platforms:</span>
            <SelectorsItems>
              {platforms.map((p, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    name="platforms"
                    value={p.name}
                    onChange={handleInputChange}
                  />
                  {p.name}
                </label>
              ))}
              <span>{errors.platforms}</span>
            </SelectorsItems>
          </SelectorsBlock>
          <SentBtn
            type="submit"
            disabled={Object.keys(errors).length ? true : false}
          >
            Submit
          </SentBtn>
          <span>{success}</span>
        </AddGameForm>
      </AddGameFormContainer>
      <GameCard gameData={gameData} />
    </AddGameContainer>
  )
}
