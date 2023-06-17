# 🫵🏼 Cursor pointer
You can see that the circle changes color when the mouse hovers over the YES / NO button.

#### ✔️ Things to remember

```
const buttonAll = document.querySelectorAll('a');

buttonAll.forEach((item) => {
    // console.log(item);
    item.addEventListener('mouseenter', ()=>{
        circle.style.transform ='scale(.6)';
    })
    item.addEventListener('mouseleave', ()=>{
        circle.style.transform ='scale(1)';
    })
})
```
* Use forEach() to run the function for each button.
