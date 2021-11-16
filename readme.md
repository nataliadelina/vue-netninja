# Vue.js

## Directives

### event 

```js
// v-on:click
<button v-on:click="changeTitle">change title</button>
// shorthand for v-on:click is @click
<button @click="changeTitle">change title</button>
```

| index.html

```html
<h1>{{title}}</h1>
<!-- <button @click="changeTitle">change title</button> -->
<button @click="changeTitle('something new')">change title</button>

<p>{{count}}</p>
<button v-on:click="count++">increment</button>
<button @click="count--">decrement</button>

```

| app.js

```js
const app = Vue.createApp({
    data() {
        return {
            title: 'Hello Vue',
            count: 0
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
```

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
