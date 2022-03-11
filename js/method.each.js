$('div').each(function(nr){
    console.log('numer diva o nazwie', this.id, 'to', nr); //bot zazwsze zawiera numer kolejnego wywolania funkcji
});

//atrybut button, metoda click, wywoluje sie wiele razy dla kazdego anchora skrot a oznacza kotwice, oznacza ono hiperłącze. A sie daje przy linki
//wyswietla kazdy obiekt z znacznikiem a
$('button').click(function(){
    $('a').each(function(){
        alert($(this).text());
    });
})