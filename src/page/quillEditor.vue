/**
* Created by bk on 2017/4/17.
*/
<template>
    <div>
        <!-- bidirectional data binding（双向数据绑定） -->
        <quill-editor v-model="content"
                      ref="myQuillEditor"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
        </quill-editor>
    </div>
</template>
<script type="es6">
    export default {
        name: 'confFiles',
        data () {
            return {
                content: '<h2>I am Example</h2>',
                editorOption: {
                    // some quill options
                }
            }
        },
        // if you need to manually control the data synchronization, parent component needs to explicitly emit an event instead of relying on implicit binding
        // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
        methods: {
            onEditorBlur(editor) {
                console.log('editor blur!', editor)
            },
            onEditorFocus(editor) {
                console.log('editor focus!', editor)
            },
            onEditorReady(editor) {
                console.log('editor ready!', editor)
            },
            onEditorChange({ editor, html, text }) {
                console.log('editor change!', editor, html, text)
                this.content = html
            }
        },
        // get the current quill instace object.
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        },
        mounted() {
            // you can use current editor object to do something(quill methods)
            console.log('this is current quill instance object', this.editor)
        }
    }

</script>
<style scoped>

</style>
 