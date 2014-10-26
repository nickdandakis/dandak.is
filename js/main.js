Path.map("/dandak.is/nick").to(function(){
	console.log("Routing nick");
	$('main').load('partials/nick.html');
	
	$('nav > * i').removeClass('active');
	$('#button-me').addClass('active');
	
	$('footer #headers h2').text('the man');
}).enter(function(){
});

function loadResume(e){
	Path.history.pushState(null, null, "/dandak.is/resume");
}

Path.map("/dandak.is/resume").to(function(){
	console.log("Routing resume");
	$('main').load('partials/resume.html');
	
	$('nav > * i').removeClass('active');
	$('#button-resume').addClass('active');
	
	$('footer #headers h2').text('the résumé');
}).enter(function(){
});

function loadBlog(){
	Path.history.pushState(null, null, "/dandak.is/blog");
}

Path.map("/dandak.is/blog").to(function(){
	console.log("Routing blog");
	$('main').load('partials/blog.html');

	$('nav > * i').removeClass('active');
	$('#button-blog').addClass('active');
	
	$('footer #headers h2').text('the blog');
}).enter(function(){
});

function loadPortfolio(){
	Path.history.pushState(null, null, "/dandak.is/portfolio");
}

Path.map("/dandak.is/portfolio").to(function(){
	console.log("Routing portfolio");
	$('main').load('partials/portfolio.html');
	
	$('nav > * i').removeClass('active');
	$('#button-portfolio').addClass('active');
	
	$('footer #headers h2').text('the portfolio');
}).enter(function(){
});

$(document).ready(function(){
	Path.history.listen(true);
	
	if(window.location.pathname === "/dandak.is/"){
		Path.history.pushState(null, null, "/dandak.is/me");
	} else if(window.location.pathname != "/"){
		Path.history.pushState(null, null, window.location.pathname);
	} 
});

$('nav > * i.fi-torso').on('click', function(){
	Path.history.pushState(null, null, "/dandak.is/nick");
});

$('nav > * i.fi-page-filled').on('click', function(){
	Path.history.pushState(null, null, "/dandak.is/resume");
});

$('nav > * i.fi-folder').on('click', function(){
	Path.history.pushState(null, null, "/dandak.is/portfolio");
});

$('nav > * i.fi-lightbulb').on('click', function(){
	Path.history.pushState(null, null, "/dandak.is/blog");
});