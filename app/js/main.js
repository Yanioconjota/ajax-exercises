var searchBar = $("#search-bar");
var searchBtn = $("button.btn");
var img  			= $(".img-movie");
var title 		= $(".movie-title");
var year 			= $(".year");
var writer		= $(".writer");
var director	= $(".director");
var actors 		= $(".actors");
var awards 		= $(".awards");
var imdb 			= $(".rating");
var country  	= $(".country");
var time   		= $(".runtime");
var genre  		= $(".genre");
var language  = $(".language");
var plot 			= $(".plot");
var ajaxCall  = function(){
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
			res.Response === "False" || res.Poster === "N/A" ? 
				img.html("").attr("src","app/img/pagaprata.jpg") : img.html("").attr("src",res.Poster);

			res.Response === "False" || res.Title === "N/A" ? 
				title.html("").html("SHO CIRUJA!") : title.html("").html(res.Title); 

			res.Response === "False" || res.Released === "N/A" ? 
				 year.html("").html("<b>Release date</b>: NO FECHA PAGA PRATA!") : year.html("").html('<b>Release date</b>: ' + res.Released);

			res.Response === "False" || res.Writer === "N/A" ? 
				 writer.html("").html("<b>Written by</b>: CHINO CIRUJA!") : writer.html("").html('<b>Written by</b>: ' + res.Writer);

			res.Response === "False" || res.Director === "N/A" ? 
				 director.html("").html("<b>Directed by</b>: CRONICA TV!") : director.html("").html('<b>Directed by</b>: ' + res.Director);

			res.Response === "False" || res.Actors === "N/A" ? 
				 actors.html("").html("<b>Actors</b>: CHINO E COTORRA!") : actors.html("").html('<b>Actors</b>: ' + res.Actors);

			res.Response === "False" || res.Awards === "N/A" ? 
				awards.html("").html("<b>Awards</b> : COTORRA GRANDE!") : awards.html("").html('<b>Awards</b>: '+ res.Awards);

			res.Response === "False" || res.imdbRating === "N/A" ? 
				imdb.html("").html("<b>IMDB rating</b>: Eh Masomenoh!") : imdb.html("").html('<b>IMDB rating</b>: ' + res.imdbRating);

			res.Response === "False" || res.Country === "N/A" ? 
				country.html("").html("<b>Country</b> : NO LO CHE!") : country.html("").html('<b>Country</b>: '+ res.Country);

			res.Response === "False" || res.Time === "N/A" ? 
				time.html("").html("<b>Runtime</b>: NUNCA!") : time.html("").html('<b>Runtime</b>: '+ res.Runtime);

			res.Response === "False" || res.Genre === "N/A" ? 
				genre.html("").html("<b>Genre</b>: SHO CIRUJANO, CIRUJA!") : genre.html("").html('<b>Genre</b>: '+ res.Genre);

			res.Response === "False" || res.Language === "N/A" ? 
				language.html("").html("<b>Language</b>: CHINO BOLURO!") : language.html("").html('<b>Language</b>: '+ res.Language);

			res.Response === "False" || res.Plot === "N/A" ? 
				plot.html("").html("CHINO NO CAZA PA COMÉ!") : plot.html("").html(res.Plot);

		},
		error: function(res, textStatus, jqXHR){
			console.log("error",res, textStatus, jqXHR);
		}
	});
};
$(document).ready(function() {
	searchBar.on('keyup keypress', function(e){
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