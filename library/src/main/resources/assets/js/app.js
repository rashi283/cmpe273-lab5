$(":button").click(function() { 
	var isbn = this.id; 
	var statusId = "#status"+isbn;
	var buttonId="#"+isbn;
	$.ajax({
		url: '/library/v1/books/'+isbn+"?status=lost", 
		type: 'PUT', 
	success: function() { 
		$(statusId).text("lost");
		$(buttonId).prop("disabled",true); 	
		} 
		}); 
});