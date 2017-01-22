var searchBar 	= $("#search-bar");
var searchBtn 	= $("button.btn");
var titleMovie 	= $(".movie-title");
var imgMovie  	= $(".img-movie");
var yearMovie 	= $(".year");
var plotMovie 	= $(".plot");
var tomatoes  	= $(".rating");
var ajaxCall  	= function(){
	$.ajax({
		url:"http://www.omdbapi.com",
		type: "GET",
		dataType : "JSON",
		data : {
			type: "movie",
			t: searchBar.val(),
			plot: "full"
		},
		success: function(res, textStatus, jqXHR){
			console.log(res);
			if (res.Title === "N/A") {
				titleMovie.html("").append("NO PERICURA!");
			} else {
				titleMovie.html("").append(res.Title);
			}
			if (res.Released === "N/A") {
				yearMovie.html("").append("NO PERICURA!");
			} else {
				yearMovie.html("").append(res.Released);
			}
			if (res.Rating === "N/A") {
				tomatoes.html("").append("NO PERICURA!");
			} else {
				tomatoes.html("").append(res.Rating);
			}
			if (res.Plot === "N/A") {
				plotMovie.html("").append("CHINO NO CAZA PA COMÉ!");
			} else {
				plotMovie.html("").append(res.Plot);
			}
			if (res.Poster === "N/A") {
				imgMovie.html("").attr("src","app/img/pagaprata.jpg");
			} else {
				imgMovie.html("").attr("src",res.Poster);
			}
		},
		error: function(res, textStatus, jqXHR){
			console.log("error",res, textStatus, jqXHR);
		}
	});
};
$(document).ready(function() {
	searchBar.on('keyup keypress', function(e){
		console.log(e.keyCode);
		var keyCode = e.keyCode || e.which;
		if (keyCode == 13) {
			e.preventDefault();
			ajaxCall();
		}
	});
	
	searchBtn.bind("click",function(){
		console.log("hice click");
		ajaxCall();
		
	});
});