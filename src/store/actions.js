export default {
    set_token: (context, token) => {
        // return new Promise((resolve, reject) => {
        //     http('post', '/', params).then((res) => {
        //         resolve(res);
        //     })
        // })
        context.commit('SET_TOKEN',token)
    }
}