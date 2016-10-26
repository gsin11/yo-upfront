 /*!
 * @file <%= componentName %>.js
 * @project Siemens
 * @author  Firstname Lastname, SapientNitro <email@sapient.com>
 * @copyright Siemens
 * @site  Siemens
 * @description: Detail description.
 * @module ../templates/components/<%= componentName %>/js/<%= componentName %>
 */
/**
@namespace components.<%= componentName %>
*/

'use strict';
define('../templates/components/<%= componentName %>/js/<%= componentName %>', ['core/init'], function (init) {
  /**
    @function add
    @type {public}
    @returns {undefined}
    @desc This function will initialize <%= componentName %> component.
    @usage init.add();
  */
  init.add(function(){
      console.log("Component Organism <%= componentName %> initialized");
  })
});
