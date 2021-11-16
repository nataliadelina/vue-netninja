const app = Vue.createApp({
    data() {
        return {
            title: 'Hello Vue',
            showBooks: true
        }
    },
    methods: {
        // changeTitle() {
        //     this.title = 'new title'
        // }
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.toggleShowBooks = !this.showBooks
        }
    }
});

app.mount('#app');
