const state = {
    showHeader: true,
    showFooter: true,
    userId: window.sessionStorage.getItem('userId'),
    userInfo: window.sessionStorage.getItem('userInfo'),
    isLogin: window.sessionStorage.getItem('isLogin')
}

export default state