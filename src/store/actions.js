import { getOpenId } from '../api'
import { Toast } from 'vant';
import 'vant/es/toast/style';

export default {
    set_openid: async (context, code) => {
        // return new Promise((resolve, reject) => {
        //     getOpenId({code}).then(res=>{
        //         resolve(res)
        //     })
        // })
        getOpenId({ code }).then(res => {
            if (res && res.data.is_suc == 1) {
                context.commit('SET_OPENID', code)
            } else {
                Toast(res.msg, 2000);
            }
        })

    }
}