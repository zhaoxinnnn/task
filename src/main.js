import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
};

var app = new Vue({
    el : '#app',
    data : {
        message : 'Hello Vue'
    }
});

