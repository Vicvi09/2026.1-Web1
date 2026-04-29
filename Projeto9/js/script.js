function somar() {
    var x_obj = document.getElementById("iptX");

    var x = x_obj.value;

    var x = parseInt(x);

    var y_obj = document.getElementById("iptY");

    var y = y_obj.value;

    var y = parseInt(y);

    var res = x + y;

    //alert(res);

    var spn = document.querySelector("#spnRes");

    spnRes.innerHTML = "Resultado da soma é: ";

    var bd = document.querySelector("body");

    if (res % 2 == 0){
        bd.style.backgroundColor = 'ligthgreen';

      } else {
        bd.style.backgroundColor = 'gray';
      }


}