'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var FinPolymerSeedGenerator = yeoman.generators.Base.extend({
   constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this['element-name'] = path.basename(process.cwd());
    this.argument('element-name', { type: String, required: true });
    this.log('constructor');
  },
  validate: function () {
    this.log('validate');
    this.elementName = this['element-name'];
    if (this.elementName.indexOf('-') === -1) {
      this.emit('error', new Error(
        'Element name must contain a dash "-"\n' +
        'ex: yo fin-polymer my-element'
      ));
    }
  },
  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Occasionaly I prefer oysters to snails.'));

    var defaultName = path.basename(process.cwd());
    var prompts = [
      {
        name: 'ghUser',
        message: 'What is your GitHub username?'
      }
    ];

    this.prompt(prompts, function (props) {
      this.ghUser = props.ghUser;

      done();
    }.bind(this));
  },
  seed: function () {
    this.log('seed');
    // Construct the element as a subdirectory.
    this.destinationRoot(this.elementName);

    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');
    this.copy('bowerrc', '.bowerrc');
    this.template('_bower.json', 'bower.json');
    this.copy('jshintrc', '.jshintrc');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.copy('editorconfig', '.editorconfig');
    this.template('_seed-element.css', this.elementName + '.css');
    this.template('_seed-element.pre.html', this.elementName + '.pre.html');
    this.template('_seed-element.post.html', this.elementName + '.post.html');
    this.template('_seed-element.js', this.elementName + '.js');
    this.template('index.html', 'index.html');
    this.template('demo.html', 'demo.html');
    this.template('README.md', 'README.md');
    this.template('package.json', 'package.json');

    this.template('test/index.html', 'test/index.html');
    this.template('test/basic-test.pre.html', 'test/basic-test.pre.html');
    this.template('test/basic-test.js', 'test/basic-test.js');
    this.template('test/basic-test.post.html', 'test/basic-test.post.html');
  },
  install: function () {
    this.installDependencies({
      npm: false,
      skipInstall: this.options['skip-install'],
      skipMessage: this.options['skip-install-message'],
    });
  }
});

module.exports = FinPolymerSeedGenerator;
