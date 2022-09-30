export default {
    SET_OPENID(state, openid) {
        localStorage.setItem('openid',openid)
        state.openid = openid
    }
}