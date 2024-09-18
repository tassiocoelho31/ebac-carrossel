$(document).ready(function() {
    // Carrossel
    $('#carrossel-telefones').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Máscara de telefone
    $('#telefone').mask('(00) 00000-0000');

    // Validação de formulário
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira um e-mail válido',
            mensagem: 'Por favor, insira sua mensagem'
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);  // Mensagens aparecerão abaixo do campo incorreto
        },
        submitHandler: function(form) {
            alert('Formulário enviado com sucesso!');
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});
    

