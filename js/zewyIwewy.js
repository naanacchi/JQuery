$(function(){
    let i=0;
    let n=0;
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