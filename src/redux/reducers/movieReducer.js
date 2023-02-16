import { compose } from "redux"

//reducer는 function 이다 .                            //10번//10번//10번//10번//10번
let initialState = { // 초기값을 설정해 준다.
    popularMovies: {},
    topRatedMovies: {},
    upComingMovies: {},
    genreList: [],
    loading: true,
    getAMovieDetail: {},
    getAMovieReview: {},
    getMovieRecommendation: {},
    getMovieYoutubeTrailer: {},
    getAMovieByPageChange: {},
    getMOviesBySearch:{},
    loadingForMovies: true,
    category:"",
    searchKeyword:"",

}

function movieReducer(state = initialState, action) {
    let { type, payload } = action // action 안에 있는 type 과 payload 를 분리시키낟.

    switch (type) {
        case "GET_MOVIES_REQUEST":
            return { ...state, loading: true }

        case "GET_MOVIES_FOR_PAGE_REQUEST":
            return { ...state, loadingForMovies: true }

        case "GET_MOVIES_SUCCESS":

            return {
                ...state,
                popularMovies: payload.popularMovies,
                topRatedMovies: payload.topRatedMovies,
                upComingMovies: payload.upComingMovies,
                genreList: payload.genreList,
                loading: false,

            }

        case "GET_A_MOVIE_DETAIL_SUCCESS":

            return {
                ...state,
                getAMovieDetail: payload.getAMovieDetail,
                getAMovieReview: payload.getAMovieReview,
                getMovieRecommendation: payload.getMovieRecommendation,
                getMovieYoutubeTrailer: payload.getMovieYoutubeTrailer,
                loading: false,
            }

        case "GET_A_MOVIE_BY_PAGE_AND_CATEGORY":
            return {
                ...state,
                getAMovieByPageChange: payload.getAMovieByPageChange,
                getMOviesBySearch: payload.getMOviesBySearch,
                loadingForMovies: false,
            }

            case "SHOWING_MOVIES_BY_CATEGORY":
                console.log("payload",payload)
                return {
                    ...state,
                    category:payload.category,
                    searchKeyword:payload.searchKeyword,
                }
        

        case "GET_MOVIES_FAILURE":
            return { ...state, loading: false }

        default:
            return { ...state }
    }

}

export default movieReducer