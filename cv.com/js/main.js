// Print CV:
(function() {
  var $printLink = $(".print-js");

  $printLink.on("click", startPrint);

  function startPrint() {
    window.print();
  }
})();

// Smooth scrolling:
(function() {
  var $scrollLink = $(".scroll-js");

  $scrollLink.on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
})();
