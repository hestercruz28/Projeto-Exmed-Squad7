let rating = 0;  // Variável para armazenar a classificação selecionada
      
        function rateService(stars) {
          // Atualiza a classificação selecionada
          rating = stars;
      
          // Remove a classe "rated" de todas as estrelas
          const starsElements = document.getElementsByClassName('star');
          for (let i = 0; i < starsElements.length; i++) {
            starsElements[i].classList.remove('rated');
          }
      
          // Adiciona a classe "rated" às estrelas até a classificação selecionada
          for (let i = 0; i < stars; i++) {
            starsElements[i].classList.add('rated');
          }
      
          // Exemplo de ação adicional a ser executada com a classificação selecionada
          console.log('Classificação selecionada:', rating);
        }


        