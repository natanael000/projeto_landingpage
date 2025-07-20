document.addEventListener('DOMContentLoaded', function () {
      const buttons = document.querySelectorAll('[data-tab-button]');

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event) {
          const abaAlvo = event.target.dataset.tabButton;
          const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
          escondeTodasAbas();
          aba.classList.add('shots__list--is-active');
        });
      }

      function escondeTodasAbas() {
        const tabs = document.querySelectorAll('[data-tab-id]');
        for (let i = 0; i < tabs.length; i++) {
          tabs[i].classList.remove('shots__list--is-active');
        }
      }
    });