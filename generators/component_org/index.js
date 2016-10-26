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

    var componentName = lodash.snakeCase(this.name);
    var rootPath = "source/templates/components"+"/"+componentName+"/";
    var context = {
            componentName: componentName,
            initialName: this.name,
            appNameSpace:this.appNameSpace || 'sn'
        };
    var gruntRefreshTriggerFile = this.destinationPath('source/templates/layouts.default.hbs');
    this.template( this.templatePath('componentName.json'),    this.destinationPath(rootPath+''+componentName+'.json'),context);
    this.template( this.templatePath('js/componentName.js'),        this.destinationPath(rootPath+'js/'+componentName+'.js'),context);
    this.template( this.templatePath('componentName.hbs'),          this.destinationPath(rootPath+componentName+'.hbs'),context);
    this.template( this.templatePath('componentName__sample.hbs'),  this.destinationPath(rootPath+componentName+'__sample.hbs'),context);

    this.template( this.templatePath('less/componentName.less'),     this.destinationPath(rootPath+'less/'+componentName+'.less'),context);
    this.template( this.templatePath('less/componentName__sm.less'), this.destinationPath(rootPath+'less/'+componentName+'__sm.less'),context);
    this.template( this.templatePath('less/componentName__md.less'), this.destinationPath(rootPath+'less/'+componentName+'__md.less'),context);
    this.template( this.templatePath('less/componentName__lg.less'), this.destinationPath(rootPath+'less/'+componentName+'__lg.less'),context);


  };
