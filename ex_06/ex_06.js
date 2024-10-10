document.addEventListener('DOMContentLoaded', function() {
  

//  En utilisant la librairie particles-js voici 4 exemple de particules faisable facilement sur leur site https://vincentgarreau.com/particles.js/


  particlesJS('particles-js-1', {
      particles: {
          number: { value: 80 },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          move: { enable: true, speed: 6 }
      }
  });

  particlesJS('particles-js-2', {
      particles: {
          number: { value: 100 },
          color: { value: '#000000' },
          shape: { type: 'triangle' },
          opacity: { value: 0.7, random: false },
          size: { value: 5, random: false },
          move: { enable: true, speed: 4, direction: 'top' }
      }
  });

  particlesJS('particles-js-3', {
      particles: {
          number: { value: 60 },
          color: { value: '#ffffff' },
          shape: { type: 'star' },
          opacity: { value: 1, random: false },
          size: { value: 4, random: true },
          move: { enable: true, speed: 3, direction: 'none', out_mode: 'bounce' }
      }
  });

  particlesJS('particles-js-4', {
      particles: {
          number: { value: 120 },
          color: { value: '#000000' },
          shape: { type: 'edge' },
          opacity: { value: 0.8, random: true },
          size: { value: 3, random: true },
          move: { enable: true, speed: 5, direction: 'bottom' }
      }
  });
});