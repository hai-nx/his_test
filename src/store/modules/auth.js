import { authService } from '../../services/auth-service';

const auth = {
    namespaced: true,
    state() {
        return {
            isAuthenticated: false,
            user: {}
        }
    },
    getters: {
        getAuthenticated(state) {
            return state.isAuthenticated;
        }
    },
    mutations: {
        LOGIN(state, payload) {
            state.isAuthenticated = true;
            state.user = payload

            console.log(state.isAuthenticated);
        },
        LOGOUT(state) {
            state.isAuthenticated = false;
            state.user = {}
        }
    },
    actions: {
        login(context, payload) {
            let x = authService.login(payload.username, payload.password);
            console.log(x);
            context.commit('LOGIN', x)
        },
        logout(context) {
            context.commit('LOGOUT');
        },
    }
}

export default auth