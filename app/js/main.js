jQuery(document).ready(function(){
	var searchBar 	= jQuery('input#search');
			searchBtn 	= jQuery('button.btn'),
			titleMovie 	= jQuery('.movie-title'),
			imgMovie  	= jQuery('.img-movie'),
			yearMovie 	= jQuery('.year'),
			plotMovie 	= jQuery('.plot'),
			tomatoes  	= jQuery('.rating'),
			ajaxCall  	= function(){
				$.ajax({
					url:"http://www.omdbapi.com",
					type: 'GET',
					dataType : 'JSON',
					data : {
						type: 'movie',
						t: searchBar.val(),
						plot: 'full'
					},
					success:  function(res, textStatus, jqXHR){
						console.log(res);
						titleMovie.html(' ').append(res.Title);
						yearMovie.html(' ').append(res.Released);
						plotMovie.html(' ').append(res.Plot);
						tomatoes.html(' ').append(res.Rating);
						if (res.Poster === "N/A") {
							imgMovie.html(' ').attr('src','https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/16114274_1869326616414386_2761430477896369939_n.jpg?oh=87184ab48c6313fbcc56542b32f952a7&oe=591C55D7');
						} else {
							imgMovie.html(' ').attr('src',res.Poster);
						}
					},
					error: function(res, textStatus, jqXHR){
						console.log('error',res, textStatus, jqXHR);
					}
				});
	}
	searchBar.keydown(function (e){
    if(e.keyCode == 13){
    	console.log('x: number');
      ajaxCall();
    }
	});
	searchBtn.bind('click',function(){
		ajaxCall();
		console.log('hice click');
		
	});
});