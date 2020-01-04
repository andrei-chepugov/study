function getTime(i){
    fetch('/time')
    .then(function(response) {
        if (!response.ok) {
          throw new Error('HTTP error, status = ' + response.status);
        }
        return response.text()
            .then(function(time) {
                var div = document.getElementById('divID');
                div.innerHTML = div.innerHTML + time;

                if(i < 10) {
                    i = i + 1;
                    setTimeout(function (){
                        getTime(i)
                    }, 999)
                }
                    
          })
      })
      .catch(function(error){
        console.log('===========================');
          console.log(error);
          console.info('gyugyhghg');
          console.error(error);
          console.log('===========================');
      })

}
  
getTime(0)

  document.write('<h1>Привет мир!</h1>');
  document.write(`<p>\'Это мой первое приложение на JavaScript.\'</p>`);
           