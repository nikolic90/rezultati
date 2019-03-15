var sve_vezbe = [ ];  //niz je prazan
var sv = localStorage.getItem('sve_vezbe');
if(sv !== null)  //ako postoje prethodne vezbe, ucitaj ih u sve_vezbe
sve_vezbe = JSON.parse(sv);

document.getElementById('btnSnimi').onclick = function(){
    var vezba = document.getElementById('tbVezba').value;
    var tezina = document.getElementById('tbTezina').value;
    var broj_ponavljanja = document.getElementById('tbBrojPonavljanja').value;
    var datum = document.getElementById('dDatum').value;

    var obj = {
    vezba: vezba,
    tezina: tezina,
    bp: broj_ponavljanja,
    datum: datum
    };
    if(vezba !== "" && broj_ponavljanja !== "" && datum !== "")
    sve_vezbe.push(obj);  //Upis nove vezbe
    localStorage.setItem('sve_vezbe', JSON.stringify(sve_vezbe)); //snimi sve_vezbe u cookie
    if(vezba !== "")
    alert("Podaci su uspešno upisani");
    console.log(vezba);
};