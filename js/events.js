$(function(){
    let i=0;
    i++;   let n=0;
    $('#wew').mouseover(function(){
        i += 1;
        $('#komunikat').text('najechano na porostokąt ' + i + ' razy');
    }).mouseout(function(){
        $('#komunikat').text('opuszczono obszar prostokąta ');
    });
    $('#wew').click(function(){
        n+=1;
        $('#komunikat').text('Kliknieto prostokat ' + n + 'razy');
    });
});

$(function(){
    let i=0;
    let n=0;
    $('#tekst').on('scroll', function(){
        $('span').eq(5).text(i+=1);
    });

    $(window).on('resize', function(){
        $('span').eq(6).text(n+=1);
    });
});