document.addEventListener('mousemove', function(e) {
    const layers = document.querySelectorAll('.layer');
    
    layers.forEach((layer, index) => {
      const speed = (index + 1) * 10;
      const x = (window.innerWidth - e.pageX * speed) / 700;
      const y = (window.innerHeight - e.pageY * speed) / 700;
      
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  });
  