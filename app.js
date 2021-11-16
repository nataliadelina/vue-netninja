const app = Vue.createApp({
    data() {
        return {
            title: 'Hello Vue',
        }
    },
    methods: {
        // changeTitle() {
        //     this.title = 'new title'
        // }
        changeTitle(title) {
            this.title = title
        }
    }
});

app.mount('#app');
