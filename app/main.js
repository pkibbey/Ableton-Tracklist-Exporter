var xmlDoc,
	trackArray = [];

$(document).ready(function(){
	$.ajax({
		type: "GET" ,
		url: "xml.xml" ,
		dataType: "xml" ,
		success: function(xml) {
			xmlDoc = xml;
			$(xml).find('FileRef').each(function() {
				nm = $(this).find('Name').attr('Value');
				if (nm.length > 0) {
					var trackArrayLength = trackArray.length;
					if (trackArray[trackArray.length - 1] !== nm) {
						trackArray.push(nm);
						$('#output').append('<li>' + nm + '</li>')
					}
				}
			});
		}
	});

	$('#remove-extension').on('click', function() {
		$('#output li').each(function() {
			var input = $(this).text(),
				output = input.substr(0, input.lastIndexOf('.')) || input;

			$(this).text(output);
		})
	});

	$('#remove-urls').on('click', function() {
		$('#output li').each(function() {
			var input = $(this).text(),
				output = input.replace('www', '');
			$(this).text(output);
		})
	});

});