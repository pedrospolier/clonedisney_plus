document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i <buttons.length; i++) {
        buttons [i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');

            // Remove classe ativa de todos os botões
buttons.forEach(btn => btn.classList.remove('shows__tabs__button--is-active'));

// Adiciona classe ativa no botão clicado
botao.target.classList.add('shows__tabs__button--is-active');

        })
    }
    }) 

    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
        
        for(let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active');
    }} 