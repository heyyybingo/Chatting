const mutations = {
    ShowHeader(state) {
        state.showHeader = true
    },
    HideHeader(state) {
        state.showHeader = false
    },
    ShowFooter(state) {
        state.showFooter = true
    },
    HideFooter(state) {
        state.showFooter = false
    },
    SetuserId(state, userId) {
        state.userId = userId
        window.sessionStorage.setItem('userId', userId)
    },
    SetuserInfo(state, userInfo) {
        state.userInfo = userInfo
        window.sessionStorage.setItem('userInfo', userInfo)
    },
    SetTitlestr(state, titlestr) {
        state.titlestr = titlestr
        window.sessionStorage.setItem('titlestr', titlestr)
    },
    Login(state) {
        state.isLogin = true
        window.sessionStorage.setItem('isLogin', true)
    },
    Logout(state) {
        state.isLogin = false
        window.sessionStorage.setItem('isLogin', false)
    }
}


export default mutations