// Importamos la biblioteca Axios para hacer solicitudes HTTP
import axios from 'axios'

// Definimos las action types que vamos a usar en el proyecto
export const GET_GAMES = 'GET_GAMES'
export const GET_GAME = 'GET_GAME'
export const GET_ERRORS = 'GET_ERRORS'
export const SEARCH_GAME = 'SEARCH_GAME'
export const RESET_GAME = 'RESET_GAME'
export const GET_GENRES = 'GET_GENRES'
export const ADD_GAME = 'ADD_GAME'
export const ORDER_NAMES = 'ORDER_NAMES'
export const FILTER_GENRES = 'FILTER_GENRES'
export const ORDER_RATINGS = 'ORDER_RATINGS'
export const FILTER_ORIGIN = 'FILTER_ORIGIN'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


//Obtener todos los juegos del servidor
export const getGames = () => async (dispatch) => {
  try {
    // Hacemos una solicitud GET al servidor
    const response = await axios.get(`/videogames`)
    // Si la solicitud es exitosa, llamamos al 'dispatch' para actualizar el estado de la aplicación con los datos de los juegos que se recibieron del servidor (response.data)
    dispatch({
      type: GET_GAMES, // Action type
      payload: response.data, // Datos de los juegos
    })
  } catch (error) {
    // Si ocurre algún error durante la solicitud, capturamos el error aquí, luego llamamos al 'dispatch' para manejar el error en la aplicación
    dispatch({
      type: GET_ERRORS, // Action type para manejar errores
      payload: error.message, //Objeto con el error
    })
  }
}

//Buscar un juego en el servidor
export const searchGame = (name) => async (dispatch) => {
  try {
    // Hacemos una solicitud GET al servidor
    const response = await axios.get(
      `/videogames/?name=${name}`
    )
    // Si la solicitud es exitosa, llamamos al 'dispatch' para actualizar el estado de la aplicación con los datos de los juegos que se recibieron del servidor (response.data)
    dispatch({
      type: SEARCH_GAME, // Action type
      payload: response.data, // Datos de los juegos
    })
  } catch (error) {
    // Si ocurre algún error durante la solicitud, capturamos el error aquí, luego llamamos al 'dispatch' para manejar el error en la aplicación
    dispatch({
      type: GET_ERRORS, // Action type para manejar errores
      payload: error.message, //Objeto con el error
    })
  }
}

//Obtener info detallada de un juego
export const getGame = (id) => async (dispatch) => {
  try {
    // Hacemos una solicitud GET al servidor
    const response = await axios.get(`/videogame/${id}`)
    // Si la solicitud es exitosa, llamamos al 'dispatch' para actualizar el estado de la aplicación con los datos de los juegos que se recibieron del servidor (response.data)
    dispatch({
      type: GET_GAME, // Action type
      payload: response.data, // Datos de los juegos
    })
  } catch (error) {
    // Si ocurre algún error durante la solicitud, capturamos el error aquí, luego llamamos al 'dispatch' para manejar el error en la aplicación
    dispatch({
      type: GET_ERRORS, // Action type para manejar errores
      payload: error, //Objeto con el error
    })
  }
}

//Obtener todos los géneros del servidor
export const getGenres = () => async (dispatch) => {
  try {
    // Hacemos una solicitud GET al servidor
    const response = await axios.get(`/genres/get`)
    // Si la solicitud es exitosa, llamamos al 'dispatch' para actualizar el estado de la aplicación con los datos de los juegos que se recibieron del servidor (response.data)
    dispatch({
      type: GET_GENRES, // Action type
      payload: response.data, // Datos de los juegos
    })
  } catch (error) {
    // Si ocurre algún error durante la solicitud, capturamos el error aquí, luego llamamos al 'dispatch' para manejar el error en la aplicación
    dispatch({
      type: GET_ERRORS, // Action type para manejar errores
      payload: error, //Objeto con el error
    })
  }
}

//Agregar un juego al servidor
export const addGame = (gameData) => async (dispatch) => {
  try {
    // Hacemos una solicitud POST al servidor enviando los datos del juego (gameData)
    const response = await axios.post(
      `/videogames`, //URL del servidor
      gameData, //Datos del juego
      {
        headers: {
          'Content-Type': 'application/json',  // Header para especificar que los datos se envían en formato JSON
        },
      }
    )
    //// Si la solicitud es exitosa, llamamos al 'dispatch' para actualizar el estado de la aplicación con los datos del juego que se recibieron del servidor (response.data)
    dispatch({
      type: ADD_GAME,
      payload: response.data,
    })
    // Si ocurre algún error durante la solicitud, capturamos el error aquí
    // Luego llamamos al 'dispatch' para manejar el error en la aplicación
  } catch (error) {
    dispatch({
      type: GET_ERRORS, // Action type para manejar errores
      payload: error, //Objeto con el error
    })
  }
}

// Función creadora de acción para restablecer los datos del juego almacenados en el estado a un estado inicial
export const resetGame = () => ({
  type: RESET_GAME,
  payload: {}, // Payload vacío, ya que no se necesita información adicional para esta acción
})

// Función creadora de acción para ordenar los juegos por nombre
export const orderNames = (name) => ({
  type: ORDER_NAMES, // Action type
  payload: name, // Payload con el nombre para ordenar
})

// Función creadora de acción para ordenar los juegos por rating
export const orderRating = (rating) => ({
  type: ORDER_RATINGS, // Action type
  payload: rating, // Payload con el rating para ordenar
})

// Función creadora de acción para filtrar los juegos por género
export const filterByGenres = (genre) => ({
  type: FILTER_GENRES, // Action type
  payload: genre, // Payload con el género para filtrar
})

// Función creadora de acción para filtrar los juegos por origen (API o DB)
export const filterByOrigin = (origin) => ({
  type: FILTER_ORIGIN, // Action type
  payload: origin, // Payload con el origen para filtrar
})

// Función creadora de acción para establecer la página actual
export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE, // Action type
    payload: page, // Payload con la página actual
  }
}
