export const isLogin = () => {
    if (localStorage.getItem("currentUser")) {
        return true;
    }

    return false;
}