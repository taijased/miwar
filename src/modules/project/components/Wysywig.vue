

<template lang="pug">
    .wysywig
        quill-editor(ref="myQuillEditor", 
            v-model="content", 
            :options="editorOption")
        //- quill-editor(ref="myQuillEditor", 
        //-     v-model="content", 
        //-     :options="editorOption", 
        //-     @blur="onEditorBlur($event)",
        //-     @focus="onEditorFocus($event)", 
        //-     @ready="onEditorReady($event)")

</template>
<script>

import { mapGetters, mapActions} from 'vuex';

export default {
    data() {
        return {
            editorOption: {}
        }
    },
    methods: {
        ...mapActions({
            setContent: "project/setContent",
            fetchProject: "project/fetchProject"
        }),
        // onEditorBlur(quill) {
        //     console.log('editor blur!', quill)
        // },
        // onEditorFocus(quill) {
        //     console.log('editor focus!', quill)
        // },
        // onEditorReady(quill) {
        //     console.log('editor ready!', quill)
        // },
        // onEditorChange({ quill, html, text }) {
        //     console.log('editor change!', quill, html, text)
        //     this.content = html
        // }
    },
    computed: {
        ...mapGetters({
            getContent: "project/getContent",
        }),
        content: {
            get(){
                return this.getContent
            },
            set(val) {
                return this.setContent(val)
            }
        },
        editor() {
            return this.$refs.myQuillEditor.quill
        }
    },
    mounted() {
        console.log('this is current quill instance object', this.editor)
    },
    created() {
        this.fetchProject(this.$route.params.guid)
    },
    beforeDestroy(){
        console.log("object");
        this.setContent(null)
    }

};
</script>

<style lang="stylus" scoped>
.wysywig
    width 60%
    height 70%
    background white
    display flex
    flex-direction column
    justify-content center 
    align-items center
    margin-right 40px
    border-radius 20px
   
</style>

<style lang="stylus">

.quill-editor
    height 100%
    width 100%
    .ql-container
        height 88%
        border none !important
.ql-toolbar
    border none !important

.ql-editor
    overflow hidden

</style>
