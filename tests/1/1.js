(function($) {

    var defaults = {
      x: 123,
      y: 321
    };
  
    var methods = {
      init: function(options) {
        // extend `methods.defaults` with `options`
        var settings = $.extend({}, methods.defaults, options || {});
        return this.data(settings).each(function() {
          //whatever
          console.log("init", this.id, $(this).data());
        });
      },
  
      someOtherMethod: function() {
        return $(this).each(function() {
          //do whatever and use settings variable as applicable
          console.log("someOtherMethod", this.id, $(this).data());
        })
      },
    };
    // set `defaults` as property of `methods`
    methods.defaults = defaults;
  
    $.fn.myPlugin = function(method) {
      if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
        return methods.init.apply(this, arguments);
      } else {
        $.error('Method ' + method + ' does not exist on jQuery.myPlugin');
      }
    };
  
  }(jQuery));
  
  $('#id1, #id2').myPlugin({
    x: 111
  });
  $("#id1").myPlugin({
    y: 222
  });
  $("#id2").myPlugin({
    y: 333
  });
  $("#id2").myPlugin("someOtherMethod");