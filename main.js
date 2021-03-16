var eur = document.getElementById("euro");
var usd = document.getElementById("usd");
var tnd = document.getElementById("tnd");
var gbp = document.getElementById("gbp");

eur.addEventListener("input", function () {
  var eu = +eur.value;
  usd.value = eu * 1.15;
  tnd.value = eu * 3.28;
  gbp.value = eu / 1.15;
});

usd.addEventListener("input", function () {
  var us = +usd.value;
  eur.value = us / 1.15;
  tnd.value = us * 2.8;
  gbp.value = us * 1.5;
});

tnd.addEventListener("input", function () {
  var tn = +tnd.value;
  eur.value = tn * 0.3;
  usd.value = tn * 2.8;
  gbp.value = tn * 3.6;
});

gbp.addEventListener("input", function () {
  var gd = +gbp.value;
  eur.value = gd * 1.15;
  tnd.value = gd * 3.6;
  usd.value = gd * 1.3;
});
