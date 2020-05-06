

const Notificaitons = {
    success (title, description, notify) {
   
        notify.success(description, title, {
            timeout: 2000,
            showProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            position: 'rightTop'
        });
    },
    error(title, description, notify) {

        notify.error(description, title, {
            timeout: 2000,
            showProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            position: 'rightTop'
        });
    },
}
export default Notificaitons
