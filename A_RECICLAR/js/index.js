document.getElementById('scrollBtn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const section = document.querySelector('#Bienvenidos');
    const sectionPosition = section.offsetTop - 60;
    
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
  });
  