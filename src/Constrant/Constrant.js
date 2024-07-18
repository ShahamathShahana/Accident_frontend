import axios from "axios";

// export const BackURL = 'http://localhost:3001/'
export const BackURL = 'https://accident-prj-bk.onrender.com/'

export const checkAuth = () => {
    // const id = localStorage?.getItem('id');
    // if (id) {
    //     axios.post(`${BackURL}status`, { id }).then((res) => {
    //         if (res.data) {
    //             return true;
    //         }
    //         else {
    //             return false;
    //         }
    //     })
    //         .catch((err) => {
    //             return false
    //         })
    // }
    // else
    // {
    //     return false;
    // }
    return localStorage.getItem('id')? true : false;
}