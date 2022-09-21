export default {
    SET_TOKEN(state, token) {
        localStorage.setItem('token',token)
        state.token = token
    }
}