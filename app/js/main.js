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
			titleMovie.html("").append(res.Title);
			yearMovie.html("").append(res.Released);
			plotMovie.html("").append(res.Plot);
			tomatoes.html("").append(res.Rating);
			if (res.Poster === "N/A") {
				imgMovie.html("").attr("src","https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/16114274_1869326616414386_2761430477896369939_n.jpg?oh=87184ab48c6313fbcc56542b32f952a7&oe=591C55D7");
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