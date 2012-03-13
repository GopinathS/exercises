
$(document).ready(function() {
  $('.poem-stanza').addClass('emphasized');
});

$(document).ready(function() {
  $('#selected-plays > li').addClass('horizontal');
});

$(document).ready(function() {
  $('a[@href^="mailto:"]').addClass('mailto');
  $('a[@href$=".pdf"]').addClass('pdflink');
});
