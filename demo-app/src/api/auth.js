import axios from 'axios';

export function login(email, password){
    return axios.post('/auth', {email, password}).then()
}

export function logout(){
}