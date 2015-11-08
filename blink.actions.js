'use strict';
var Rx = require('rx');
var dispatcher = require('../utils/dispatcher/dispatcher.js');

class actionMain{

    constructor(){
        return {
	    //remote control actions
	    addTodo$:Rx.Observable.fromEvent(dispatcher.customEvent,'todo.addTodo$')
        }
    }
}
module.exports = new actionMain();
