;(function($){
var site = window.site = new function() 
{
    this.init = function() 
    {
        this.galleries();
    };


    this.galleries = function()
    {        
        var galleries = $('.gallery');
        
        for (var i=0; i<galleries.size(); i++)
        {
            var gallery = $(galleries).eq(i);
            
            $('.item', gallery).eq(0).show();
        }
        
        $('.next').click(function(e)
        {
            e.preventDefault();
            
            var gallery = $(this).parent().parent();
            var count = $('.item', gallery).size();
            
            var index = $('.item:visible', gallery).index();
            index = (index < count-1) ? index+1 : 0;
            $('.item', gallery).hide();
            $('.item', gallery).eq(index).show();
        });
        $('.back').click(function(e)
        {
            e.preventDefault();
            
            var gallery = $(this).parent().parent();
            var count = $('.item', gallery).size();
            
            var index = $('.item:visible', gallery).index();
            index = (index > 0) ? index-1 : count-1;
            $('.item', gallery).hide();
            $('.item', gallery).eq(index).show();
        });        
    };

    this.ajax_call = function() 
    {
        var self = this;

        $('.button').bind('click', function(e) 
        {
            e.preventDefault();

            var slug = $(this).attr('id');

            Dajaxice.orzubalsky.ajax_load(
                self.ajax_load_callback, 
                {
                    'slug' : slug
                }
            );
        });	
    };


    this.ajax_load_callback = function(data)
    {
        $('#loader').hide();
        $('#dynamic').html(data);
    };
};
})(jQuery);

$(document).ready(function()
{
	site.init();
});		