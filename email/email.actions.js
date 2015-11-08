'use strict';
var Rx = require('rx');
var dispatcher = require('../dispatcher/dispatcher.js');

class actionMain{

    constructor(){
        return {
	    //remote control actions
	    incomingMessage$:Rx.Observable.fromEvent(dispatcher.customEvent,'incomingMessage$')
        }
    }
}
module.exports = new actionMain();
