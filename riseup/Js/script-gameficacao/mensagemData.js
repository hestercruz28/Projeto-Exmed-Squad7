    // Função para exibir a mensagem de parabenização e iniciar o countdown
    function mostrarMensagem() {
        // Ocultar a mensagem e o botão
        document.getElementById("mensagem").style.display = "none";
        document.getElementById("recolherBtn").style.display = "none";
  
        // Exibir a mensagem de parabenização
        var mensagemParabens = document.getElementById("parabensMensagem");
        mensagemParabens.style.display = "block";
  
        // Iniciar o countdown de 24 horas
        var countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000; // Adiciona 24 horas em milissegundos
        var countdown = setInterval(function () {
          var now = new Date().getTime();
          var distance = countDownDate - now;
  
          // Calcula o tempo restante
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
          // Exibe o tempo restante abaixo da mensagem de parabenização
          var tempoRestante = document.getElementById("tempoRestante");
          tempoRestante.innerHTML = "Próxima recolha em: " + hours + "h " + minutes + "m " + seconds + "s ";
  
          // Quando o countdown chegar a 0, limpa o intervalo e mostra a mensagem e o botão novamente
          if (distance < 0) {
            clearInterval(countdown);
            mensagemParabens.style.display = "none";
            tempoRestante.innerHTML = "";
            document.getElementById("mensagem").style.display = "block";
            document.getElementById("recolherBtn").style.display = "block";
          }
        }, 1000);
      }
  
      // Event listener para o botão "Recolher"
      document.getElementById("recolherBtn").addEventListener("click", function () {
        // Exibe a mensagem e inicia o countdown
        mostrarMensagem();
      });