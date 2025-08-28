function pedirWhatsApp(item) {
    const numero = "5599999999999"; // Substitua pelo número real
    const mensagem = Olá!Gostaria de pedir o seguinte item: $ { item }🍣;
    const url = https: //wa.me/${numero}?text=${encodeURIComponent(mensagem)};
        window.open(url, '_blank');
}