const app = Vue.createApp({
    data() {
        return {
            title: 'Hello Vue',
            showBooks: true,
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
            this.toggleShowBooks = !this.showBooks
        },
        handleEvent(e) {
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
