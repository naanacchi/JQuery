var wiek=confirm("Masz wiecej niz 18 lat?");
if(wiek==true)
{
    function przekierowanie()
    {
        window.location.replace ("https://uonetplus.vulcan.net.pl/powiatcieszynski%22")
    }

    setTimeout("przekierowanie();", 3000);
    document.write("za 3 sekundy zaczniesz sie uczyc");
}
else
{
    function przekierowanie()
    {
        window.location.replace ("https://www.youtube.com/watch?v=GJYLfC1si58%22")
    }

    setTimeout("przekierowanie();", 3000);
    document.write("za 3 sekundy zostaniesz przekierowany na strone z bajkami");
}