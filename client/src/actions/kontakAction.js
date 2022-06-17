import axios from 'axios'

export const GET_LIST_KONTAK = "GET_LIST_KONTAK"
export const ADD_KONTAK = "ADD_KONTAK"
export const DELETE_KONTAK = "DELETE_KONTAK"
export const DETAIL_KONTAK = "DETAIL_KONTAK"
export const UPDATE_KONTAK = "UPDATE_KONTAK"

export const getListKontak = () => {
    return(dispatch) => {
        //loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:5000/kontaks',
            timeout: 120000
        })
            .then((response) => {
                //berhasil get API
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                // gagal get API
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    } 
                })
            })
    }
}

export const addKontak = (data) => {
    return(dispatch) => {
        //loading
        dispatch({
            type: ADD_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'POST',
            url: 'http://localhost:5000/kontaks',
            timeout: 120000,
            data: data
        })
            .then((response) => {
                //berhasil get API
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                // gagal get API
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    } 
                })
            })
    }
}

export const deleteKontak = (id) => {
    console.log("2. Masuk action");
    return(dispatch) => {
        //loading
        dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'DELETE',
            url: `http://localhost:5000/kontaks/${id}`,
            timeout: 120000
        })
            .then((response) => {
                //berhasil get API
                console.log("3. Berhasil mendapatkan data: ", response.data);
                dispatch({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                // gagal get API
                console.log("3.Gagal mendapatkan data: ", err);
                dispatch({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    } 
                })
            })
    }
}

export const detailKontak = (data) => {
    return(dispatch) => {
        dispatch({
            type: DETAIL_KONTAK,
            payload: {
                data: data
            }
        })
    }
}

export const updateKontak = (data) => {
    return(dispatch) => {
        //loading
        dispatch({
            type: UPDATE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'PUT',
            url: `http://localhost:5000/kontaks/${data.id}`,
            timeout: 120000,
            data: data
        })
            .then((response) => {
                //berhasil get API
                dispatch({
                    type: UPDATE_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                // gagal get API
                dispatch({
                    type: UPDATE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    } 
                })
            })
    }
}