/*

Jappix - An open social platform
These are the bubble JS scripts for Jappix

-------------------------------------------------

License: AGPL
Author: Valérian Saliou

*/

// Bundle
var Bubble = (function () {

    /**
     * Alias of this
     * @private
     */
    var self = {};


	/**
     * Closes all the opened bubbles
     * @public
     * @return {boolean}
     */
    self.closeBubbles = function() {

        try {
            // Destroy all the elements
            $('.bubble.hidable:visible').hide();
            $('.bubble.removable').remove();
            $('body').off('click');
        } catch(e) {
            Console.error('Bubble.close', e);
        } finally {
            return false;
        }

    };


    /**
     * Click function when a bubble is opened
     * @public
     * @param {object} selector
     * @return {boolean}
     */
    self.showBubble = function(selector) {

        try {
            // Hidable bubbles special things
            if($(selector).is('.hidable')) {
                // This bubble is yet displayed? So abort!
                if($(selector).is(':visible'))
                    return closeBubbles();
                
                // Close all the bubbles
                closeBubbles();
                
                // Show the requested bubble
                $(selector).show();
            }
            
            // Removable bubbles special things
            else {
                // This bubble is yet added? So abort!
                if(exists(selector))
                    return closeBubbles();
                
                // Close all the bubbles
                closeBubbles();
            }
            
            // Creates a new click event to close the bubble
            $('body').on('click', function(evt) {
                var target = evt.target;
                
                // If this is a click away from a bubble
                if(!$(target).parents('.ibubble').size())
                    closeBubbles();
            });
        } catch(e) {
            Console.error('Bubble.show', e);
        } finally {
            return false;
        }

    };


    /**
     * Return class scope
     */
    return self;

})();