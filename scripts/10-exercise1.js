let test = document.querySelector('.js-button');
     console.log(test.classList.contains('js-button'));

      let gaming = document.querySelector('.js-gaming');
      let music = document.querySelector('.js-music');
      let tech = document.querySelector('.js-tech');
      function onClickGaming() {
        
          if (gaming.classList.contains('gaming')) {
            gaming.classList.remove('gaming');
            gaming.classList.add('is-toggled');
          }
         else if (gaming.classList.contains('is-toggled')){
            gaming.classList.remove('is-toggled');
            gaming.classList.add('gaming');
          }

          if (gaming.classList.contains('is-toggled')){
            music.classList.remove('is-toggled');
          music.classList.add('music');
          tech.classList.remove('is-toggled');
          tech.classList.add('tech');
          }
        }

      function onClickMusic() {

         if (music.classList.contains('music')) {
          music.classList.remove('music');
          music.classList.add('is-toggled');
         }
        else if (music.classList.contains('is-toggled')){
          music.classList.remove('is-toggled');
          music.classList.add('music');
         }
         if (music.classList.contains('is-toggled')) {
          tech.classList.remove('is-toggled');
          tech.classList.add('tech');
          gaming.classList.remove('is-toggled');
            gaming.classList.add('gaming');
         }
        }

      function onClickTech() {
         if (tech.classList.contains('tech')) {
          tech.classList.remove('tech');
          tech.classList.add('is-toggled');
          
         }
        else if (tech.classList.contains('is-toggled')) {
          tech.classList.remove('is-toggled');
          tech.classList.add('tech');
         }
         if(tech.classList.contains('is-toggled')) {
          gaming.classList.remove('is-toggled');
            gaming.classList.add('gaming');
            music.classList.remove('is-toggled');
            music.classList.add('music');
         }

      }
