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

```

| app.js

```js
const app = Vue.createApp({
    data() {
        return {
            title: 'Hello Vue'
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
