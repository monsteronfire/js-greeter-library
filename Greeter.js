(function(global, $) {

  // 'new' an object
  var Greeter = function(firstname, lastname, language) {
    return new Greeter.init(firstname, lastname, language);
  };

  //hidden within the scope of the IIFE and never directly accessible
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

  // prototype holds methods to save memory space
  Greeter.prototype = {

    // 'this' refers to the calling object at execution time
    fullname: function () {
      return this.firstname + ' ' + this.lastname;
    },

    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Unsupported language";
      }
    },

    // retrieve messages from object by referring to properties using [] syntax
    greeting: function () {
      return greetings[this.language] + ' ' + this.firstname + '!';
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ' ' + this.fullname();
    },

    // chainable methods return their own containing object
    greet: function(formal) {
      var message;

      // if undefined or null it will be coerced to 'false'
      if (formal) {
        message = this.formalGreeting();
      } else {
        message = this.greeting();
      }

      if (console) {
        console.log(message);
      }

      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullname());
      }

      return this;
    },

    setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this;
    },

    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }

      if (!selector) {
        throw 'Missing jQuery selector';
      }

      var message;

      if (formal) {
        message = this.formalGreeting();
      } else {
        message = this.greeting();
      }

      $(selector).html(message);

      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    }

  };

  Greeter.init = function(firstname, lastname, language) {
    var self = this;
    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';
    self.validate();
  };

  Greeter.init.prototype = Greeter.prototype;

  global.Greeter = global.$G = Greeter;

})(window, jQuery);
