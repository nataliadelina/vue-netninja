## Outputting List

v-for

| index.html

```html
...
<!-- works only for small list -->
<p>{{books[0].title}}, {{books[0].author}}</p>
<p>{{books[1].title}}, {{books[1].author}}</p>

<!-- iterate  -->
<ul>
    <li v-for="book in books">
        <img :src="book.img" :alt="book.title" width="200">
        <h3>{{book.title}}</h3>
        <p>{{book.author}}</p>
    </li>
</ul>
...
```

| app.js
```js
...
data() {
    return {
        showBooks: true,
        books: [
            { title: 'one book', author: 'max', img: './assets/1.jpg' },
            { title: 'another one book', author: 'ae', img: './assets/2.jpg' },
            { title: 'good book', author: 'lee', img: './assets/3.jpg' }
        ],
    }
},

```
