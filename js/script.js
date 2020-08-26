$(document).ready(
  function () {
    $('.menu-toggle').click(function () {
      $('nav').toggleClass('active')
    })

    $('ul li').click(function () {
      $(this).siblings().removeClass('active');
      $(this).toggleClass('active');
    })
  }
)


window.addEventListener("scroll", line);

function line() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("a").style.height = '0px';
    document.getElementById("a").style.margin = '250px 5.5%';
  } else {
    document.getElementById("a").style.height = '370px';
    document.getElementById("a").style.margin = '30px 5.5%';
  }
}


window.addEventListener("scroll", line1);

function line1() {
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
    document.getElementById("a1").style.height = '0px';
    document.getElementById("a1").style.margin = '465px 3%';
  } else if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600) {
    document.getElementById("a1").style.height = '500px';
    document.getElementById("a1").style.margin = '200px 3%';
  } else if (document.body.scrollTop < 650 || document.documentElement.scrollTop < 650) {
    document.getElementById("a1").style.height = '0px';
    document.getElementById("a1").style.margin = '465px 3%';
  }
}

window.addEventListener("scroll", line2);

function line2() {
  if (document.body.scrollTop > 1620 || document.documentElement.scrollTop > 1620) {
    document.getElementById("a2").style.height = '0px';
    document.getElementById("a2").style.margin = '230px 3%';
  } else if (document.body.scrollTop >= 1400 || document.documentElement.scrollTop >= 1400) {
    document.getElementById("a2").style.height = '470px';
    document.getElementById("a2").style.margin = '50px 3%';
  }else if(document.body.scrollTop < 1360 || document.documentElement.scrollTop < 1360){
    document.getElementById("a2").style.height = '0px';
    document.getElementById("a2").style.margin = '230px 3%';
  }
}

window.addEventListener("scroll", line3);

function line3() {
  if (document.body.scrollTop > 2280 || document.documentElement.scrollTop > 2280) {
    document.getElementById("a3").style.height = '0px';
    document.getElementById("a3").style.margin = '230px 3%';
  } else if (document.body.scrollTop >= 2000 || document.documentElement.scrollTop >= 2000) {
    document.getElementById("a3").style.height = '450px';
    document.getElementById("a3").style.margin = '50px 3%';
  }else if(document.body.scrollTop < 1940 || document.documentElement.scrollTop < 1940){
    document.getElementById("a3").style.height = '0px';
    document.getElementById("a3").style.margin = '230px 3%';
  }
}

window.addEventListener("scroll", line4);

function line4() {
  if (document.body.scrollTop > 3080 || document.documentElement.scrollTop > 3080) {
    document.getElementById("a4").style.height = '0px';
    document.getElementById("a4").style.margin = '230px 3%';
  } else if (document.body.scrollTop >= 2500 || document.documentElement.scrollTop >= 2500) {
    document.getElementById("a4").style.height = '450px';
    document.getElementById("a4").style.margin = '50px 3%';
  }else if(document.body.scrollTop < 2440 || document.documentElement.scrollTop < 2440){
    document.getElementById("a4").style.height = '0px';
    document.getElementById("a4").style.margin = '230px 3%';
  }
}





