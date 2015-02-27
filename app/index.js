'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var FinPolymerSeedGenerator = yeoman.generators.Base.extend({
   constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    //this['elementName'] = path.basename(process.cwd());
    //this.argument('elementName', { type: String, required: true });
    this.log('constructor');
  },
  validate: function () {
    // this.log('validate');
    // this.elementName = this['elementName'];
    // if (this.elementName.indexOf('-') === -1) {
    //   this.emit('error', new Error(
    //     'Element name must contain a dash "-"\n' +
    //     'ex: yo fin-polymer my-element'
    //   ));
    // }
  },
  promptUser: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Occasionaly I prefer oysters to snails.'));

    var defaultName = path.basename(process.cwd());
    var prompts = [
      {
        name: 'ghOrg',
        message: 'What is your GitHub organisation name?'
      },
      {
        name: 'ghUser',
        message: 'What is your GitHub username?'
      },
      {
        name: 'elementName',
        message: 'What is your Polymer custom tag name?'
      }
    ];

    this.prompt(prompts, function (props) {
      this.ghOrg = props.ghOrg;
      this.ghUser = props.ghUser;
      this.elementName = props.elementName;
      done();
    }.bind(this));
  },
  seed: function () {
    this.log('seed');
    // Construct the element as a subdirectory.
    this.destinationRoot(this.elementName);

    this.template('gitignore', '.gitignore');
    this.template('gitattributes', '.gitattributes');
    this.template('bowerrc', '.bowerrc');
    this.template('_bower.json', 'bower.json');
    this.template('jshintrc', '.jshintrc');
    this.template('Gruntfile.js', 'Gruntfile.js');
    this.template('editorconfig', '.editorconfig');
    // this.template('_seed-element.css', this.elementName + '.css');
    // this.template('_seed-element.pre.html', this.elementName + '.pre.html');
    // this.template('_seed-element.post.html', this.elementName + '.post.html');
    // this.template('_seed-element.js', this.elementName + '.js');
    this.template('index.html', 'index.html');
    this.template('standalone.html', 'examples/standalone.html');
    this.template('demo.html', 'demo.html');
    this.template('README.md', 'README.md');
    this.template('package.json', 'package.json');

    // this.template('test/index.html', 'test/index.html');
    // this.template('test/basic-test.pre.html', 'test/basic-test.pre.html');
    // this.template('test/basic-test.js', 'test/basic-test.js');
    // this.template('test/basic-test.post.html', 'test/basic-test.post.html');
    this.template('gp.sh', 'gp.sh');
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
