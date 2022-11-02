




import { createStore } from "vuex";
import auth from  './modules/auth/auth_index';

const store = createStore({

    modules:{
        auth
    }   
});

export default store;