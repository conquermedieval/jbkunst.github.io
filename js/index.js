(function() {
  
  /* http://stackoverflow.com/questions/5699127/how-to-find-out-the-position-of-the-first-occurrence-of-the-difference-between-t */
  function findDiff(a, b) {
    a = a.toString();
    b = b.toString();
    for (var i = 0; i < Math.min(a.length, b.length); i++) {
      if (a.charAt(i) !== b.charAt(i)) { return i; }
      
    }
    if (a.length !== b.length) { return Math.min(a.length, b.length); }
    return -1;
    
  }
  
  data = [
    "Olá pessoal!",
    "Eu sou [PM]TiM[GM]",
    "Nosso servidor possue muitas novidades",
    "Guilg War finaliza aos Sábados ás 21:00 Hrs",
    "Drop de Cps em todos os mapas",
    "Sistema VIP",
    "Eventos diários e automáticos",
    "Nosso código é limpo e sem bugs",
    "Sala exclusiva para VIP,s e TOP",
    "Vença 3 GW's conssecultivas e ganhe uma PRIZE",
    "Aos domingos teremos eventos com GM' PM com premiações",
    "ENtão é isso. Boa diversão e espero que goste de nosso servidor ;)!",
    ""
    ];
  
  data_ss = data.map(function(d, i){
    return ((i===0) ? 0 : findDiff(data[i], data[i - 1]));
  });
  data_ss.shift(); // remove 1st element!
  
  jQuery("#typed").typed({
      strings: data,
      stringsstops: data_ss,
      startDelay: 3500,
      typeSpeed: 130
  });
  
})();
