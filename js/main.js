Path.map("/dandak.is/nick").to(function() {
  console.log("Routing nick");
  $('main').load('partials/nick.html');

  $('nav > * span').removeClass('active');
  $('#button-me').addClass('active');

  $('footer #headers h2').text('the man');
}).enter(function() {});

function loadResume(e) {
  Path.history.pushState(null, null, "/dandak.is/resume");
}

Path.map("/dandak.is/resume").to(function() {
  console.log("Routing resume");
  $('main').load('partials/resume.html');

  $('nav > * span').removeClass('active');
  $('#button-resume').addClass('active');

  $('footer #headers h2').text('the résumé');
}).enter(function() {});

function loadBlog() {
  Path.history.pushState(null, null, "/dandak.is/blog");
}

Path.map("/dandak.is/blog").to(function() {
  console.log("Routing blog");
  $('main').load('partials/blog.html');

  $('nav > * span').removeClass('active');
  $('#button-blog').addClass('active');

  $('footer #headers h2').text('the blog');
}).enter(function() {});

function loadPortfolio() {
  Path.history.pushState(null, null, "/dandak.is/portfolio");
}

Path.map("/dandak.is/portfolio").to(function() {
  console.log("Routing portfolio");
  $('main').load('partials/portfolio.html');

  $('nav > * span').removeClass('active');
  $('#button-portfolio').addClass('active');

  $('footer #headers h2').text('the portfolio');
}).enter(function() {});

$(document).ready(function() {
  Path.history.listen(true);

  if (window.location.pathname === "/dandak.is/") {
    Path.history.pushState(null, null, "/dandak.is/nick");
  } else if (window.location.pathname != "/") {
    Path.history.pushState(null, null, window.location.pathname);
  }
});

$('nav > * span.fi-torso').on('click', function() {
  Path.history.pushState(null, null, "/dandak.is/nick");
});

$('nav > * span.fi-page-filled').on('click', function() {
  Path.history.pushState(null, null, "/dandak.is/resume");
});

$('nav > * span.fi-folder').on('click', function() {
  Path.history.pushState(null, null, "/dandak.is/portfolio");
});

$('nav > * span.fi-lightbulb').on('click', function() {
  Path.history.pushState(null, null, "/dandak.is/blog");
});
