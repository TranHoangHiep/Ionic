var textBox = $('#textBox');
var subBtn = $('submitBtn');

subBtn.on('click', function(e){
	e.preventDefault();
	var value = textBox.val().trim();
	if(value){
		alert('Please enter a value');
		return;
	}

	$.post('/getResults', )
});