'use strict';
var path = require('path');
var util   = require('util');
var lodash = require('lodash');
var yeoman = require('yeoman-generator');

var Generator = module.exports = function Generator() {
    yeoman.generators.Base.apply(this, arguments);
};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.initializing= function () {
  this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
  });
  this.pkg = require(this.destinationPath('package.json'));
  this.log('You called the upfront subgenerator with the argument ' + this.name + '.');
};
Generator.prototype.config= function () {
  this.appNameSpace = this.config.get('appNameSpace');
};

Generator.prototype.writing= function () {

  var coreFileName = 'sn.' + lodash.snakeCase(this.name);
  var rootPath = "source/scripts/core/";
  var context = {
    coreFileName: coreFileName,
    initialName: this.name,
    appNameSpace:this.appNameSpace || 'sn'
  };
  this.template( this.templatePath('../scripts/core/coreFileName.js'), this.destinationPath(rootPath + coreFileName+'.js'),context);

};
