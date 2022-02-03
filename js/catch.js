$(function (){
    //najpierw co zmienic potem jak zmienic
    $('#page').css('background-color', 'ivory');
    //jak zlapac obiekt przez id

    $('h2').css('letter-spacing', '5px');
    //jak wskazac obiekt przez znacznik

    $('.link').css({'color': 'black', 'text-decoration': 'none'  });
    //jak wskazac obiekt przez klase

    $('[href="#"]').attr('href','https://pl.wikipedia.org/wiki/J%C4%99zyk_programowania');
    // jak wskazac obiekt przez wartosc wlasnosci (attribute)
});
