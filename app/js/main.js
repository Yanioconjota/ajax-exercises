jQuery(document).ready(function(){
	var searchBtn = jQuery('button.btn');
	console.log('eameo');
	searchBtn.bind('click',function(){
		console.log('hice click');
		$.ajax({
			url:"http://www.omdbapi.com",
			type: 'GET',
			dataType : 'JSON',
			data : {
				type: 'movie',
				t: jQuery('.form-control').val()
			},
			success:  function(res, textStatus, jqXHR){
				console.log(res);
				jQuery('body').append(res.Title);
			},
			error: function(res, textStatus, jqXHR){
				console.log('error',res, textStatus, jqXHR);
			}
		});
	});
});