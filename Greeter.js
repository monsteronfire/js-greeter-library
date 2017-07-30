(function(global, $) {

  var Greeter = function(firstname, lastname, language) {
    return new Greeter.init(firstname, lastname, language);
  };

  Greeter.prototype = {};

  Greeter.init = function(firstname, lastname, language) {
    var self = this;
    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = labguage || 'en';
  };

  Greeter.init.prototype = Greeter.prototype;

  global.Greeter = global.$G = Greeter;

}(window, jQuery);
