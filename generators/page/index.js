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
  // this.fs.copy(
  //   this.templatePath('somefile.js'),
  //   this.destinationPath('somefile.js')
  // );
  var pageName = lodash.snakeCase(this.name);
  var dataFile = 'page_' + pageName;
  var bodyClassNames = pageName + ' ' + dataFile; // Embedding the data file name in the bodyClass - it is used later from the json editor to identify page_data.json file
  var rootPath = "source/templates/pages/";
  var context = {
    pageName: pageName,
    initialName: this.name,
    bodyClassNames: bodyClassNames
  };
  this.template( this.templatePath('pageName.hbs'), this.destinationPath(rootPath+'page_'+pageName+'.hbs'),context);

};
