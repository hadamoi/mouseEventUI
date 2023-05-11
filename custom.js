let x = 0,
    y = 0;
let targetX = 0,
    targetY = 0;

const speed = 0.09;
const cursorItem = document.querySelector('.cursorItem');
const circle = cursorItem.querySelector('.circle');
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

window.addEventListener('mousemove', (e) => {
    x = e.pageX;
    y = e.pageY;
})

const loop = () => {
    // console.log(x,y);
    targetX += (x - targetX) * speed;
    targetY += (y - targetY) * speed;

    // cursorItem.style.left = targetX + 'px';
    // cursorItem.style.top = targetY + 'px';
    cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

    window.requestAnimationFrame(loop);
}

loop();