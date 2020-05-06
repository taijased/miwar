




const FormValidate = {
    name(value) {
        return value.length > 6 ? true : false
    },
    email(value) {
       let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(value);
    },
    password(value, callback) {
        const chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM,.?><:;%^&*()-_+=\'\"][{}!@#1234567890";
        const re = /\d+/;
        if (value === "") {
            // console.log("Обязательное поле");
            callback("Обязательное поле")
            return false
        } if (value.length < 8) {
            // console.log("Длина пароля менее 8 символов");
            callback("Длина пароля менее 8 символов")
            return false

        } if(value === value.toUpperCase()) {
            // console.log("Пароль не содержит строчный букв");
            callback("Пароль не содержит строчный букв")
            return false

        } if(value === value.toLowerCase()) {
            // console.log("Пароль не содержит заглавных букв");
            callback("Пароль не содержит заглавных букв")
            return false

        } if(value.match(re) == null) {
            // console.log("Пароль не содержит ни одной цифры");
            callback("Пароль не содержит ни одной цифры")
            return false
        } else {
            for (var i = 0; i < value.length; i++) {
                if(!chars.includes(value[i])) {
                    // console.log("Пароль не содержит символов");
                    callback("Пароль не содержит символов")
                    return false
                }
            }
        }
        callback(true);
    },


}
export default FormValidate
