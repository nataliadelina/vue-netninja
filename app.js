const app = Vue.createApp({
    data() {
        return {
            title: 'Hello Vue',
            showBooks: true,
            books: [{ title: 'one book', author: 'max', img: './assets/1.jpg', isFav: true },
            { title: 'another one book', author: 'ae', img: './assets/2.jpg', isFav: false },
            { title: 'good book', author: 'lee', img: './assets/3.jpg', isFav: true }],
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
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    }
});

app.mount('#app');
