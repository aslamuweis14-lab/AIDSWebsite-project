function openMenu() {
        document.querySelector('.js-fullmenu')
            .classList.add('Show');
       }

        function closeMenu() {
        document.querySelector('.js-fullmenu')
            .classList.remove('Show');
       }


        function displayMenu() {
           document.querySelector('.js-dropdowncontent')
                .classList.toggle('show');
        }

        function submit() {
          document.querySelector('.js-submit-text')
               .classList.add('sub');
          setTimeout(() => {
               document.querySelector('.js-submit-text')
               .classList.remove('sub');
          }, 2000);
        }