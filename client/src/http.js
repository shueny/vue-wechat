import axios from 'axios'

// request 攔截
axios.interceptors.request.use(config => {
        if (localStorage.friendsToken) {
            config.headers.Authorization = localStorage.friendsToken;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// response 攔截
axios.interceptors.response.use(response => {
        return response;
    },
    error => {
        const { status } = error.response;
        if (status === 401) {
            alert('Token 已過期，請重新登入!');
            // 清除token
            localStorage.removeItem('friendsToken');
            // 畫面跳轉
            this.$router.push('/login');
        } else {
            console.log(error.response)
            alert('ERROR! ' + error.response.data);
        }
        return Promise.reject(error);
    }
)

export default axios;