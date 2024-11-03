$(document).ready(function(){
    //alert('Olá mundo')
    // console.log(document.querySelector('header button'))
    // console.log($('#botao-cancelar'))

    // document.querySelector('header button').addEventListener('click', function() {
    // }) 
    // outra forma de escrever as duas linhas a cima na proxima função:
    $('header button').click(function() {
       $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        // console.log("submit")
        e.preventDefault();

        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');

        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);

        $(`
            <div class="overlay-imagem-link">
                <a  href="${enderecoDaNovaImagem}" 
                    target="_blank" 
                    title="Ver imagem em tamanho real.">
                    Ver imagem em tamanho real
                </a> 
            </div>
            `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2000);
        $('#endereco-imagem-nova').val('')
    })
})

