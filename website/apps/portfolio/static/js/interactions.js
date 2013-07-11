;(function($){
var Interactions = window.Interactions = new function() 
{
    this.move_on = true;
    this.current_function;
    this.interval = '';
    this.timeout = '';
    
    this.init = function() 
    {
        var self = this;

        $('a#shrimp').click(function(e)
        {
            e.preventDefault();

            self.move_circle();
        });
    };
    
    this.random_interaction = function()
    {
        var self = this;
        
        var functions = [
            self.flicker_background,
            self.replace_images_with_llamas,
            self.move_circle,
        ];
        
        clearTimeout(self.timeout);
        clearInterval(self.interval);
        
        var function_count  = functions.length;
        var random_index    = Math.floor(Math.random()*function_count);
        var random_function = functions[random_index];
    
        random_function();     
    };
    
    this.move_circle = function()
    {
        var self = this;
        var position = $('.circle').position();
        console.log(position);
        $('.circle').css({'top':(position.top+1)+'px'});
    };
    
    /*  change all of the gallery images on the page to 
        a clone of a hidden llama image for a short time
    */
    this.replace_images_with_llamas = function()
    {
        var self = this;
        
        var $images = $('.item');
        var $llama = $('img.llama');
        
        for(var i=0; i<$images.size(); i++)
        {
            var $image = $images.eq(i);
            
            $image.children().hide();
            
            $llama.clone().appendTo($image).show();           
        }
        
        self.timeout = setTimeout(function()
        {   
            $('.item .llama').remove();
            $images.children().show();
        }, 500);
    };
    
    /* change the site's background color between 2 colors */
    this.flicker_background = function()
    {
        var self = this;
                
        var $body = $('body');
        
        self.interval = setInterval(function()
        {
            if($body.hasClass('color_1'))
            {
                $body.removeClass('color_1').addClass('color_2');
            }
            else
            {
                $body.removeClass('color_2').addClass('color_1');                
            }
        }, 10);
        
        self.timeout = setTimeout(function()
        {
            clearInterval(self.interval);
            clearTimeout(self.timeout);
            $body.removeClass('color_1').removeClass('color_2');
        }, 500);

    };
};
})(jQuery);