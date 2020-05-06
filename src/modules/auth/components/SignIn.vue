<template lang="pug">
    .sign-in
        form(autocomplete="off")
            .text-field(:class="{'not-empty': email !== '', 'errors': errors.email}") 
                .label E-mail
                input(v-model="email", type="email", name="email")
            .text-field(:class="{'not-empty': password !== '', 'errors': errors.password }") 
                .label {{$t("auth.signin.password")}}
                input(v-model="password", :type="type", name="password")
                .eye(@click="showEyePassword()", :class="{'show-eye': !showPassword}")
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.01129C8.85988 8.01129 7.93176 7.10871 7.93176 5.99997C7.93176 4.89123 8.85988 3.98865 10 3.98865C11.1401 3.98865 12.0683 4.89123 12.0683 5.99997C12.0683 7.10871 11.1401 8.01129 10 8.01129ZM10 2.98299C8.28938 2.98299 6.89762 4.33645 6.89762 5.99997C6.89762 7.6635 8.28938 9.01696 10 9.01696C11.7106 9.01696 13.1024 7.6635 13.1024 5.99997C13.1024 4.33645 11.7106 2.98299 10 2.98299M18.9142 6.17261C16.9493 9.13512 13.6177 10.9034 10 10.9034C6.38228 10.9034 3.05067 9.13512 1.08669 6.17261C1.01775 6.06953 1.01775 5.93042 1.08669 5.82734C3.05067 2.86483 6.38228 1.09738 10 1.09738C13.6177 1.09738 16.9493 2.86483 18.9142 5.82817C18.9822 5.93125 18.9822 6.06953 18.9142 6.17261M19.7828 5.2826C17.6284 2.03181 13.9702 0.0908813 10 0.0908813C6.02982 0.0908813 2.37246 2.03181 0.217167 5.2826C-0.0723888 5.71839 -0.0723888 6.28156 0.217167 6.71818C2.37246 9.96814 6.02982 11.9091 10 11.9091C13.9702 11.9091 17.6284 9.96814 19.7828 6.71818C20.0724 6.2824 20.0724 5.71839 19.7828 5.2826" fill="black"/>
                    </svg>
                .error-title(v-show="errors.password") {{ errors.passwordMsg }}
        .primary-btn(@click="submitForm()") {{$t("auth.signin.enter")}}

</template>

<script>
import { mapGetters, mapActions} from 'vuex';
import Notifications from '../../../services/Notifications';
import FormValidate from '../../../services/FormValidate';

export default {
    data() {
        return {
            email: "",
            password: "",
            errors: {
                email: false,
                password: false,
                passwordMsg: null
            },
            showPassword: false,
            type: 'password',
        }
    },
    watch: {
        email() {
            this.errors.email = !FormValidate.email(this.email)
        },
        password() {
            FormValidate.password(this.password, e => {
                if (e == true) {
                    this.errors.passwordMsg = false
                    this.errors.password = false
                } else {
                    this.errors.passwordMsg = e
                    this.errors.password = true
                }
            })
        }
    },
    methods: {
        ...mapActions({
            signin: "auth/signin"
        }),
        showEyePassword() {
            if (this.showPassword) {
                this.type = "password"
            } else {
                this.type = "text"
            }
            this.showPassword = !this.showPassword
        },
        validForm() {
            return !this.errors.email && !this.errors.password
        },
        async submitForm() { 
            if (this.validForm()) {
                let payload = {
                    email: this.email,
                    password: this.password,
                }
                await this.signin(payload)
            } else {
                Notifications.error('Упс!', 'Что то пошло не так :(', this.$snotify)
            }
        }

    }
};
</script>

<style lang="stylus" scoped>

.sign-in
    height 100%
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    form
        width 100%
        display flex
        flex-direction column 
        justify-content center
        align-items center
        margin-top 40px
        .primary-btn
            margin-top 20px
        
        .text-field
            width 100%
            &:hover
                .label
                    bottom -10px
                    left 0
                    color black
                    transition all .25s
                input
                    border-bottom 2px solid black


            .label
                display inline-block
                h4()
                position relative
                bottom -35px
                left 20px
                z-index 1
                color #B3B3B3
                transition all .25s

            input
                width 100%
                height 50px
                border-bottom 2px solid #B3B3B3
                text-indent: 20px;
                h3()
            .eye
                display inline-block
                position relative
                top -35px
                left 90%
                opacity 1
                transition all .25s

            .show-eye
                opacity 0.3
                transition all .25s
            


        .not-empty
            .label
                bottom -10px
                left 0
                color black
                transition all .25s
            input
                border-bottom 2px solid black
                transition all .25s

        .errors
            .label
                color #FF0000 !important
                transition all .25s
            input
                color #FF0000
                border-bottom 2px solid #FF0000 !important
                transition all .25s

    .politic-privacy
        margin-top 20px
        h6()
        text-align center
        a 
            // color $primary-color 
            &:hover
                cursor pointers
                opacity 0.8


    .primary-btn
        width 80%
        height 50px
        h4()
        color: #FFFFFF;
        margin-top 40px
        margin-bottom 10px





</style>
