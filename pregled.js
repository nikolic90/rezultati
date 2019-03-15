var sve_vezbe = [ ];  //niz je prazan
var sv = localStorage.getItem('sve_vezbe');
if(sv !== null)  //ako postoje prethodne vezbe, ucitaj ih u sve_vezbe
sve_vezbe = JSON.parse(sv);

// Kreiranje tabele

var omot = document.createElement('div');
omot.classList.add('container');
omot.classList.add('belo');
var naslov = document.createElement('h2');
naslov.innerHTML = "<br>Ostvareni rezultati<br><br>";
omot.appendChild(naslov);
var div_tabela = document.createElement('div');
div_tabela.classList.add('table-responsive');
var tabela = document.createElement('table');
tabela.classList.add('table');
var thead = document.createElement('thead');
thead.innerHTML = "<tr><th>Datum</th><th>Ime vežbe</th><th>Težina</th><th>Broj ponavljanja</th></tr>";
tabela.appendChild(thead);
var tbody = document.createElement('tbody');
for(var i=0;i<sve_vezbe.length;i++){
var tr = document.createElement('tr');
tr.innerHTML = "<td>"+sve_vezbe[i].datum+"</td><td>"+sve_vezbe[i].vezba+"</td><td>"+sve_vezbe[i].tezina+"kg</td><td>"+sve_vezbe[i].bp+"</td>";
tbody.appendChild(tr);
}
tabela.appendChild(tbody);
div_tabela.appendChild(tabela);
omot.appendChild(div_tabela);
var obrisi = document.createElement('button');
obrisi.id = "btnObrisi";
obrisi.classList.add('btn');
obrisi.classList.add('btn-danger');
obrisi.textContent = "Obriši sve rezultate";
omot.innerHTML+="<br>";
omot.appendChild(obrisi);
omot.innerHTML+="<br><br><br>";

document.body.appendChild(omot);

// Brisanje svih zapisa iz tabele
document.getElementById('btnObrisi').onclick = function(){
    localStorage.clear();
    location.reload();
};