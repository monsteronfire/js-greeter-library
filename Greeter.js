(function(global, $) {

  var Greeter = function(firstname, lastname, language) {
    return new Greeter.init(firstname, lastname, language);
  };

  var supportedLangs = ['en', 'fj'];

  var greetings = {
    en: 'Hello ',
    fj: 'Bula '
  };

  var formalGreetings = {
    en: 'Greetings, ',
    fj: 'Ni Sa Bula, '
  };

  var logMessages = {
    en: 'Logged in',
    fj: 'Logged in'
  };

  Greeter.prototype = {
    fullname: function () {
      return this.firstname + ' ' + this.lastname;
    },

    validate: function () {
      if(supportedLangs.indexOf(this.language) === -1) {
        throw "Unsupported language";
      }
    },

    greeting: function () {
      return greetings[this.language] + ' ' + this.firstname + '!';
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ' ' + this.fullname();
    },

    // Chainable function
    greet: function(formal) {
      var message;

      if(formal) {
        message = this.formalGreeting();
      } else {
        message = this.greeting();
      }

      if(console) {
        console.log(message);
      }

      return this;
    },

    log: function () {
      if(console) {
        console.log(logMessages[this.language] + ': ' + this.fullname());
      }

      return this;
    },

    setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this;
    }

  };

  Greeter.init = function(firstname, lastname, language) {
    var self = this;
    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = labguage || 'en';
  };

  Greeter.init.prototype = Greeter.prototype;

  global.Greeter = global.$G = Greeter;

})(window, jQuery);
