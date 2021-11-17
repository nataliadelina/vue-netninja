## Dynamic classes

| index.html

```html
...
<!-- v-bind:class => :class -->
<li v-for="book in books" :class="{fav: book.isFav}">

...
```

| app.js

```js
...
books: [
    { title: 'one book', author: 'max', img: './assets/1.jpg', isFav: true },
    { title: 'another one book', author: 'ae', img: './assets/2.jpg', isFav: false },
    { title: 'good book', author: 'lee', img: './assets/3.jpg', isFav: true }
],
...
```

### Challenge

#### add to Favs

- attach a click event to each `li` tag  (for each book)
- when a user clicks an `li`, toggle the **isFav** property of the book

#### solution

```js
...
// add click event directly to li-tag as property
<li v-for="book in books" :class="{fav: book.isFav}" @click="toggleFav(book)">
// or add button with click event to li-tag as child element
<button @click="toggleFav(book)" class="btn">fav</button>
...
 toggleFav(book) {
    book.isFav = !book.isFav
}
...
```

