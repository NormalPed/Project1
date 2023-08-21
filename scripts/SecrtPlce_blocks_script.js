const square = document.querySelectorAll('.grid-block');

square.forEach(square =>{
    square.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY } = e;
        const { width, height } = square.getBoundingClientRect();
        const xCenter = width / 2;
        const yCenter = height / 2;
        const xOffset = (offsetX - xCenter) * 0.05;
        const yOffset = (offsetY - yCenter) * 0.05;
      
        square.style.transform = `perspective(1000px) rotateX(${-yOffset}deg) rotateY(${xOffset}deg)`;
      });
      
      square.addEventListener('mouseleave', () => {
        square.style.transform = 'none';
      });
});


