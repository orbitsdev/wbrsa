




import mutations from './auth_mutations';
import actions from  './auth_actions';
import getters from './auth_getters';


export default {
    state(){
        return {
            user: {},
            auth_token:'dasdasd',
            roles: {},
        }
    },
    mutations,
    actions,
    getters
}