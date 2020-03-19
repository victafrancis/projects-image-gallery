
$(function() {

		$('.pop').on('click', function() {
            $('.imagepreview').attr('src', $(this).find('img').attr('src'));
            // $('#caption').text($(this).find('img').attr('alt'));
            $('#caption').text($('#txt').text());
			$('#imagemodal').modal('show');   
        });	
        
        
});

