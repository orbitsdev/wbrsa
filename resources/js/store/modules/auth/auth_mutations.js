



export default {

    setUser(state, payload){

        state.user = payload.user;
        state.auth_token = payload.token;
    }

 }