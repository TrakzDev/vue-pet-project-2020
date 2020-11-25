export default {
    namespaced: true,
    state: {
        asyncItems: [],
        isLoading: false,
        isLoadingFailed: false
    },
    getters: {
        getAsyncItems(state) {
            return state.asyncItems
        },
        getIsLoading(state) {
            return state.isLoading
        },
        getIsLoadingFailed(state) {
            return state.isLoadingFailed
        }
    },
    mutations: {
        SET_ASYNC_ITEMS(state, data) {
            state.asyncItems = data
        },
        SET_IS_LOADING(state) {
            state.isLoading = true
        },
        UNSET_IS_LOADING(state) {
            state.isLoading = false
        },
        SET_IS_LOADING_FAILED(state) {
            state.isLoadingFailed = true
        },
        UNSET_IS_LOADING_FAILED(state) {
            state.isLoadingFailed = false
        }
    },
    actions: {
        async loadAsyncItems({ commit }) {
            try {
                commit('SET_IS_LOADING');
                commit('UNSET_IS_LOADING_FAILED');
                commit('SET_ASYNC_ITEMS', []);
                await fetch('http://localhost:3000/items', {
                    method: 'GET'
                }).then((response) => response.json()
                ).then((newAsyncItems) => {
                    commit('SET_ASYNC_ITEMS', newAsyncItems)
                })
                commit('UNSET_IS_LOADING')
            }
            catch (error) {
                commit('UNSET_IS_LOADING');
                commit('SET_IS_LOADING_FAILED');
                console.log(error)
            }
        }
    }
}
