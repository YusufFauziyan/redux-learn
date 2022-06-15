import axios from 'axios'

export const GET_LIST_KONTAK = "GET_LIST_KONTAK"

export const getListKontak = () => {
    console.log("2. Masuk action");
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
                console.log("3. Berhasil mendapatkan data: ", response.data);
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
                console.log("3.Gagal mendapatkan data: ", err);
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