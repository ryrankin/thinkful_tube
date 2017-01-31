var youtube_db_url = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback, part, key ){
	var query = {
		q: searchTerm,
		r: 'json',
		part: 'snippet',
		key: 'AIzaSyAIhIf1gP1gEz7_M48hppEYCaZ1JUC15cE'
	}
	$.getJSON(youtube_db_url, query, callback);
}

function displayYoutubeSearchData(data){
	console.log(data);
	var resultElement = '';
	if(data.items){
		data.items.forEach(function(item){
			resultElement += '<p>' + item.snippet.channelTitle + '</p>';

		});
	}
	else {
		resultElement += '<p>No results</p>';
	}
		console.log(resultElement);
		$('.js-search-results').html(resultElement);
	}

function watchSubmit(){
	$('.js-search-form').submit(function(e){
		e.preventDefault();
		var query = $(this).find('.js-query').val();
		getDataFromApi(query, displayYoutubeSearchData);
	});
}

$(function(){watchSubmit();});
