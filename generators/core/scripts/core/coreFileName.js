 /*!
 * @file <%= coreFileName %>.js
 * @project ProjectName
 * @author  Firstname Lastname, Companyname <email@companyname.com>
 * @copyright ClientName
 * @site  ClientName
 * @description: Detail description.
 * @module core/<%= coreFileName %>
 */
/**
@namespace core.<%= coreFileName %>
*/

'use strict';
define('core/<%= coreFileName %>', ['core/init'], function (init) {
  /**
    @function add
    @type {public}
    @returns {undefined}
    @desc This function will initialize <%= coreFileName %> component.
    @usage init.add();
  */
  init.add(function(){
      console.log("Core module <%= coreFileName %> initialized");
  })
});
