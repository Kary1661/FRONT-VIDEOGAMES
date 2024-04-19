//El reducer se encarga de manejar los estados de la aplicación
//Importamos los actions
import {
  ADD_GAME,
  FILTER_GENRES,
  FILTER_ORIGIN,
  GET_ERRORS,
  GET_GAME,
  GET_GAMES,
  GET_GENRES,
  ORDER_NAMES,
  ORDER_RATINGS,
  RESET_GAME,
  SEARCH_GAME,
  SET_CURRENT_PAGE,
} from '../actions/actions'

//Estado inicial de la aplicación
const initialState = {
  game: {},
  error: null,
  games: [],
  filtredGames: [],
  genres: [],
  searched: [],
  addedgame: {},
  currentPage: 1,
}


export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      //Cuando se realiza la action GET_GAMES, el reducer actualiza el estado de la aplicación con los datos de los juegos que se recibieron del servidor (action.payload)
      return {
        ...state,
        games: action.payload,
        filtredGames: action.payload,
      }
    case SEARCH_GAME:
      // Cuando se realiza la action SEARCH_GAME, actualiza el estado con el juego buscado
      return {
        ...state,
        searched: action.payload,
      }
    case GET_GAME:
      // Cuando se realiza la action GET_GAME, actualiza el estado con el juego especificado
      return {
        ...state,
        game: action.payload,
      }
    case ADD_GAME:
      // Cuando se realiza la action ADD_GAME, actualiza el estado con el juego agregado
      return {
        ...state,
        addedgame: action.payload,
      }
    case RESET_GAME:
      // Cuando se realiza la action RESET_GAME, actualiza el estado con un objeto vacío
      return {
        ...state,
        game: {},
      }
    case GET_GENRES:
      // Cuando se realiza la action GET_GENRES, actualiza el estado con los géneros de los juegos
      return {
        ...state,
        genres: action.payload,
      }
    case SET_CURRENT_PAGE:
      // Cuando se realiza la action SET_CURRENT_PAGE, actualiza el estado con la página actual
      return {
        ...state,
        currentPage: action.payload,
      }
    case GET_ERRORS:
      // Cuando se realiza la action GET_ERRORS, actualiza el estado con el error
      return {
        ...state,
        error: action.payload,
      }
    case ORDER_NAMES:
      // Cuando se realiza la acción ORDER_NAMES, se ordena la lista de juegos por nombres (payload)
      // Se actualiza el estado con la lista ordenada y se establece la página actual en 1
      const copyNames = [...state.filtredGames]
      let orderedNames
      if (action.payload === 'Ascendent') {
        orderedNames = copyNames.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
          return 0
        })
      } else if (action.payload === 'Descendent') {
        orderedNames = copyNames.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
          return 0
        })
      } else if (action.payload === 'Default') {
        orderedNames = [...state.games]
      }
      return { ...state, filtredGames: orderedNames, currentPage: 1 }

    case ORDER_RATINGS:
      // Cuando se realiza la acción ORDER_RATINGS, se ordena la lista de juegos por calificación (payload)
      // Se actualiza el estado con la lista ordenada y se establece la página actual en 1
      const copyRating = [...state.filtredGames]
      let orderedRating
      if (action.payload === 'Ascendent') {
        orderedRating = copyRating.sort((a, b) => a.rating - b.rating)
      } else if (action.payload === 'Descendent') {
        orderedRating = copyRating.sort((a, b) => b.rating - a.rating)
      } else if (action.payload === 'Default') {
        orderedRating = [...state.games]
      }
      return { ...state, filtredGames: orderedRating, currentPage: 1 }

    case FILTER_GENRES:
      // Cuando se realiza la acción FILTER_GENRES, se filtra la lista de juegos por género (payload)
      // Se actualiza el estado con la lista filtrada y se establece la página actual en 1
      const copyGenres = [...state.games]
      let genresFilter = copyGenres
      if (action.payload !== 'Default') {
        genresFilter = genresFilter.filter((g) =>
          g.genres.some((genre) => genre.name === action.payload)
        )
      }
      const copyGenresAbc = [...genresFilter]
      let orderedGenres = copyGenresAbc.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        return 0
      })
      return { ...state, filtredGames: orderedGenres, currentPage: 1 }

    case FILTER_ORIGIN:
      // Cuando se realiza la acción FILTER_ORIGIN, se filtra la lista de juegos por procedencia (payload)
      // Se actualiza el estado con la lista filtrada y se establece la página actual en 1
      const copyOrigins = [...state.games]
      let originFilter = copyOrigins
      if (action.payload === 'Api') {
        // Filtra los juegos que tienen números en el id
        originFilter = originFilter.filter((game) => /^\d+$/.test(game.id))
      } else if (action.payload === 'Created') {
        // Filtra los juegos que tienen guiones en el id
        originFilter = originFilter.filter((game) => isNaN(game.id))
      }
      const copyfilterAbc = [...originFilter]
      let orderedOrigin = copyfilterAbc.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        return 0
      })
      return { ...state, filtredGames: orderedOrigin, currentPage: 1 }

    default:
      // Si no se realiza ninguna de las acciones anteriores, se devuelve el estado actual
      return state
  }
}
