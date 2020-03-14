const state = {
    showHeader: true,
    showFooter: true,
    userId: window.sessionStorage.getItem('userId'),
    userInfo: window.sessionStorage.getItem('userInfo'),
    isLogin: window.sessionStorage.getItem('isLogin'),
    titlestr: window.sessionStorage.getItem('titlestr'),
    routerFlag: true
}

export default state