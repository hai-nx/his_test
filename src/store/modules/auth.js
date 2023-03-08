import { userService } from '../../services';
import { router } from '../../router';

const state = {
    isAuthenticated: false,
    user: {}
}

const getters = {

}

const actions = {
    login({ commit }, { username, password }) {
        userService.login(username, password)
            .then(
                user => {
                    commit('login', user);
                    console.log('login-success')
                    //router.push({ name: 'dashboard' });
                },
                error => {
                    console.log('login-false')
                }
            );
    },
    logout({ commit }) {
        userService.logout();
        commit('logout');
    },
};

const mutations = {
    login(state, user) {
        state.isAuthenticated = true;
        state.user = user
    },
    logout(state) {
        state.isAuthenticated = false;
        state.user = {}
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};