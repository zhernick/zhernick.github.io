const container = document.querySelector('.container');
const card = document.querySelector('.card');
const title = document.querySelector('.title');
const santa = document.querySelector('.santa');
const tree = document.querySelector('.tree');
const body = document.body;

//card rotate on mouse move
container.addEventListener('mousemove', (rotate) =>{
    rotate.preventDefault();

    let x = (innerWidth / 2 - rotate.pageX) /15;
    let y = (innerHeight / 2 - rotate.pageY) /15;

    card.style.transform = "rotateY("+ x + "deg) rotateX("+ y + "deg)";
})

container.addEventListener('mouseover', () =>{
    title.style.transform = 'translate3d(0,0,180px)';
    santa.style.transform = 'translate3d(0,0,250px)';
    tree.style.transform = 'translate3d(0,0,100px)';
    card.style.transition = 'all 0.1s ease';
});

container.addEventListener('mouseout', () =>{
    title.style.transform = 'translate3d(0,0,0)';
    santa.style.transform = 'translate3d(0,0,0)';
    tree.style.transform = 'translate3d(0,0,0)';
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
})

