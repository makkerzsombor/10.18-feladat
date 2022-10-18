let lista = [
    {
      "nev": "Maxi Ultra",
      "meret": "128"
    },
    {
      "nev": "Maxi Ultra S",
      "meret": "256"
    },
    {
      "nev": "Maxi Ultra X",
      "meret": "512"
    },
    {
      "nev": "Átlagos SD kártya",
      "meret": "128"
    },
    {
      "nev": "Átlagos SD kártya 2",
      "meret": "256"
    },
    {
      "nev": "Átlagos SD kártya 2.1",
      "meret": "256"
    },
    {
      "nev": "Ólcsó microSD",
      "meret": "32"
    },
    {
      "nev": "Kevésbé olcsó microSD",
      "meret": "64"
    }
  ]

document.addEventListener('DOMContentLoaded',() => {

    function Kereso() {
        // Kereső input:
        let hossz = document.getElementById('kereso').value.length;
        let ertek = document.getElementById('kereso').value;
        // Háromnál több betűs:
        if (hossz >= 3) {
            // Kereső funkció:            
            listaElem = lista.filter((e) => {return e.nev.includes(ertek)});
            let hanyadikok = Object.keys(listaElem);
            //console.log(hanyadikok);
            document.getElementById('ide').innerHTML = '';
            hanyadikok.forEach((e, index) => {
                document.getElementById('ide').innerHTML += lista[e].nev + ' ' + lista[e].meret + ' ';
            });
            
            

            console.log(ertek);
            /*if (lista.includes(ertek)) {
                console.log('Benne van');
            }else{
                console.log('Nincs benne');
            }*/
        }
    }

    document.getElementById('kereso').addEventListener('input',() => Kereso())


    console.log('dom load jó')
});