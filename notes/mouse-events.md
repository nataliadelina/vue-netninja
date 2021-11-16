## Mouse events

```js
// index.html
...
<div class="box" @mouseover="handleEvent">mouseover (enter)</div>
<div class="box" v-on:mouseleave="handleEvent">mouseleave</div>
<div class="box" v-on:dblclick="handleEvent">double click</div>

// passing custom argument
<div class="box" v-on:mouseover="handleEvent($event, 5)">mouseover</div>

// position with v-on:mousemove
 <div class="box" @mousemove="handleMousemove">
    position: {{x}} - {{y}}
</div>

...

// app.js
data() {
    return {
        x: 0,
        y: 0
    }
},
methods: {
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

```
