import api from "../api"; // axios 쓸라고 만든거 가져오기 //7번에서 만든거 불러오기
//이 actions 파일안에 모든 api 정보를 불러들이기 위함으로 만든것이다.

const API_KEY = process.env.REACT_APP_API_KEY


function getMovies() { // api thunk 할라고 만드는거  //api 데이터 호출 함수 //6번//6번//6번
    return async (dispatch) => {

        try {
            dispatch({ type: "GET_MOVIES_REQUEST" })
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            
           

            
            //let data = await Promise.all([popularMovieApi,topRatedApi,upComingApi]) // 여러개를 한꺼번에 불러 들이고 싶을경우 일케 쓴다.
            let [popularMovies, topRatedMovies, upComingMovies, genreList] = await Promise.all([popularMovieApi, topRatedApi, upComingApi, genreApi]) // 여러개를 한꺼번에 불러 들이고 싶을경우 일케 쓴다. //8번//8번

            
                
            // }
            // console.log("Test", sortingTest)
            
            
            dispatch({
                // dispatch는 store에 있는값을 변경시켜주기 위해 reducer로 데이터를 송신하는 역할을 한다.
                type: "GET_MOVIES_SUCCESS",
                payload: { popularMovies: popularMovies.data, topRatedMovies: topRatedMovies.data, upComingMovies: upComingMovies.data, genreList: genreList.data.genres } //popuplarMovies 안에있는 data 만 보내주기 //11번//11번//11번//11번//11번
            })

        }
        catch (error) {
            //error handling
            console.log("error acquire:", error)
            dispatch({ type: "GET_MOVIES_FAILURE" })

        }
    }
}

function getAMovieDetail(movie_id) {
    return async (dispatch) => {

        try {
            dispatch({ type: "GET_MOVIES_REQUEST" })


            const getAMovieDetailApi = api.get(`/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
            const getAMovieReviewApi = api.get(`/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
            const getMovieRecommendationApi = api.get(`/movie/${movie_id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
            const getMovieYoutubeTrailerApi = api.get(`/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`)
           
            let [getAMovieDetail, getAMovieReview, getMovieRecommendation, getMovieYoutubeTrailer] = await Promise.all([getAMovieDetailApi, getAMovieReviewApi, getMovieRecommendationApi, getMovieYoutubeTrailerApi]) // 여러개를 한꺼번에 불러 들이고 싶을경우 일케 쓴다.

           

            dispatch({
                // dispatch는 store에 있는값을 변경시켜주기 위해 reducer로 데이터를 송신하는 역할을 한다.
                type: "GET_A_MOVIE_DETAIL_SUCCESS",
                payload: { getAMovieDetail: getAMovieDetail.data, getAMovieReview: getAMovieReview.data, getMovieRecommendation: getMovieRecommendation.data, getMovieYoutubeTrailer: getMovieYoutubeTrailer.data } //popuplarMovies 안에있는 data 만 보내주기 //11번//11번//11번//11번//11번
            })

        }
        catch (error) {
            //error handling
            console.log("error acquire:", error)
            dispatch({ type: "GET_MOVIES_FAILURE" })

        }

    }
}


function getAMoviePageNByCategory(searchKeyword,page) {
    return async (dispatch) => {
        
        
        try {
            dispatch({ type: "GET_MOVIES_FOR_PAGE_REQUEST" })
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            const getAMovieByPageChangeApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
            const getMOviesBySearchApi = api.get(`/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${searchKeyword}`)
            let [getAMovieByPageChange, getMOviesBySearch,genreForMovies] = await Promise.all([getAMovieByPageChangeApi, getMOviesBySearchApi,genreApi]) // 여러개를 한꺼번에 불러 들이고 싶을경우 일케 쓴다.
            
           
            // let sortingTestApi =[];
            // let sortingTest = [];
            // for(let i =1; i<=500;i++)
            // {
                
            //     sortingTestApi[i] = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${i}`)
            // }
            // for(let i =1; i<=500;i++)
            // {
            //     [sortingTest[i]] = await Promise.all([sortingTestApi[i]])// 여러개를 한꺼번에 불러 들이고 싶을경우 일케 쓴다. //8번//8번
            // }
            
            // let sortedData=sortingTest.map((item)=>{
            //     return item.data
            // })
            // let sortedDataTwo = sortedData.map((item)=>{
            //     return item.results
            // })
            // let sortedDataThree =[];
            // for(let i=1; i<=500; i++)
            // {
            //     for(let j=0; j<20; j++)
            //     {
            //         sortedDataThree.push(sortedDataTwo[i][j])
            //     }
            // }
            
            //console.log("i did")
            //console.log(sortedData)

            dispatch({
                // dispatch는 store에 있는값을 변경시켜주기 위해 reducer로 데이터를 송신하는 역할을 한다.
                type: "GET_A_MOVIE_BY_PAGE_AND_CATEGORY",
                payload: { getAMovieByPageChange: getAMovieByPageChange.data, getMOviesBySearch: getMOviesBySearch.data,genreForMovies:genreForMovies.data.genres } //popuplarMovies 안에있는 data 만 보내주기 //11번//11번//11번//11번//11번
            })

        }
        catch (error) {
            //error handling
            console.log("error acquire:", error)
            dispatch({ type: "GET_MOVIES_FAILURE" })

        }

    }
}

export const movieAction = {//여러개의 함수를 수출
    getMovies,
    getAMovieDetail,
    getAMoviePageNByCategory,
}