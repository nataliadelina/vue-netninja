const app = Vue.createApp({
    data() {
        return {
            title: 'Hello Vue',
            showBooks: true,
            books: [{ title: 'one book', author: 'max', img: './assets/1.jpg' },
            { title: 'another one book', author: 'ae', img: './assets/2.jpg' },
            { title: 'good book', author: 'lee', img: './assets/3.jpg' }],
            x: 0,
            y: 0
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
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
});

app.mount('#app');
