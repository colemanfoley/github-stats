var baseURL = 'https://api.github.com/search';
var repoSearchURL = baseURL + '/repositories?';


var currentDate = new Date();
var popularRepoURL = repoSearchURL + 'q=created:>' + moment().subtract(30, 'days').toISOString() + '&sort=stars&order=desc';

$(document).ready( function() {
	$.get( popularRepoURL, function (data) {
		console.log(data);
		_.each(data.items.slice(0,10), function(item) {
			$('#repo-list').append('<div>' + item.name + '</div>');
		})
	});
} );
