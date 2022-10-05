(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "11/21/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;

              
            var dia = document.getElementsByClassName("days")
            var hora = document.getElementsByClassName("hours")
            var minuto =  document.getElementsByClassName("minutes");
            var segundos = document.getElementsByClassName("seconds");

            for(var i=0; i < dia.length; i++)
            {
              dia[i].innerText = Math.floor(distance / (day)) >= 0 ?  Math.floor(distance / (day)) <= 9 ? '0' + Math.floor(distance / (day)) : Math.floor(distance / (day)) : Math.floor(distance / (day));
              hora[i].innerText = Math.floor((distance % (day)) / (hour)) >= 0 ?  Math.floor((distance % (day)) / (hour)) <= 9 ? '0' + Math.floor((distance % (day)) / (hour)) : Math.floor((distance % (day)) / (hour)) : Math.floor((distance % (day)) / (hour));
              minuto[i].innerText = Math.floor((distance % (hour)) / (minute)) >= 0 ? Math.floor((distance % (hour)) / (minute)) <= 9 ? '0' + Math.floor((distance % (hour)) / (minute)) : Math.floor((distance % (hour)) / (minute)) : Math.floor((distance % (hour)) / (minute));
              segundos[i].innerText = Math.floor((distance % (minute)) / second) >= 0 ? Math.floor((distance % (minute)) / second) <= 9 ? '0' + Math.floor((distance % (minute)) / second) : Math.floor((distance % (minute)) / second) : Math.floor((distance % (minute)) / second);
            }
           
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());


    function geraHtml(){
      var html;
      var element = document.getElementsByClassName("carousel-item");

      html =  "<section id='estreia' class='estreia'>" +
                "<div class='estreia-main p-5 text-center'>"+
                  "<div class='fundo-estreia' style='color: #fff;width: 80%;'>"+
                    "<h1>"+       
                      "Dias para estreia na Copa do Mundo:"+
                    "</h1>"+
                    "<div id='countdown'>"+
                      "<ul>"+
                        "<li id='rel'><span class='days'></span>Dias</li>"+
                        "<li id='rel'><span class='hours'></span>Horas</li>"+
                        "<li id='rel'><span class='minutes'></span>Minutos</li>"+
                        "<li id='rel'><span class='seconds'></span>Segundos</li>"+
                      "</ul>"+
                    "</div>"+
                  "</div>"+
                "</div>"+
              "</section>";
      
      for(var i =0; i < element.length; i++)
      {
        element[i].innerHTML =html;
      }            
  }