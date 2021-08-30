"use strict";

var app = function app() {
  console.log('调用app方法');
};

app.get = function () {
  console.log('get方法');
};

app.post = function () {
  console.log('post方法');
}; //调用
//  app.get()
// app.post()


app();