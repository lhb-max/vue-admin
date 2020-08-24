import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '主页', // 文本内容
            },
            {
                name: 'other', // 要跳转的路由名称 不是路径
                size: 18,
                color: 'red',
                type: 'ios-alert',
                text: '消防管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
            },
            {
                name: 'labour',
                size: 18,
                type: 'ios-body',
                text: '劳保用品',
            },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
    },
})

export default store
