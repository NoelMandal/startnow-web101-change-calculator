var $ = function(id) {
    return document.getElementById(id);
    };
    // this function just allows me to call my ids like jquery. 
  
  function Calculate() {
      var amount = $("amount-received").value - $("amount-due").value 
  
      var cents = (amount*100); 
      if (isNaN (cents) || cents < 0 || cents > 99999 ) {
          alert ("DAS NOT MUNEYZ");
          cents = 0; // alert if non numbers are entered.
      }
      // this list includes the bonus material of 20s 10s 5s and 2s.
      $("twenties-output").innerHTML = Math.floor(cents/2000);     cents = cents % 2000;
      $("tens-output").innerHTML = Math.floor(cents/1000);     cents = cents % 1000;
      $("fives-output").innerHTML = Math.floor(cents/500);     cents = cents % 500;
      $("twos-output").innerHTML = Math.floor(cents/200);     cents = cents % 200;
      $("dollars-output").innerHTML = Math.floor(cents/100);     cents = cents % 100;
      $("quarters-output").innerHTML = Math.floor(cents/25);     cents = cents % 25;
      $("dimes-output").innerHTML = Math.floor(cents/10);        cents = cents % 10;
      $("nickels-output").innerHTML = Math.floor(cents/5);      
      $("pennies-output").innerHTML = Math.round(cents % 5);
  }
  
   document.getElementById('calculate-change').addEventListener('click', Calculate);