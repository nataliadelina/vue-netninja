## Conditional

```js
// index.html
...
// v-if, v-else
<div v-if="showBooks">
    <p>some books here</p>
</div>
<button @click="toggleShowBooks">
    <span v-if="showBooks">hide books</span>
    // <span v-if="!showBooks">show books</span>
    <span v-else>show books</span>
</button>

// v-show
// display:block if true 
// and display:none if it's false
<div v-show="showBooks">
    <p>currently showing this</p>
</div>
...

// app.js
...
data() {
        return {
           showBooks: true
        }
    },
    methods: {
        toggleShowBooks() {
            this.toggleShowBooks = !this.toggleShowBooks
        }
    }
...

```