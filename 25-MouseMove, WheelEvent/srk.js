const kutu = document.querySelector('.kutu');

kutu.addEventListener('mousemove',e=>{
    // console.log(e);
    // console.log(e.offsetX,e.offsetY);
    kutu.textContent = `x koordinatÄ±: ${e.offsetX}\ny koordinatÄ±: ${e.offsetY}`;
})

document.addEventListener('wheel', e=>{
    console.log(e.pageX,e.pageY);
})