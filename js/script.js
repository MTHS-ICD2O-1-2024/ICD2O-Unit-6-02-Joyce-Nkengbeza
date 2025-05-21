// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Feb 2025
// This file contains the JS functions for index.html
'use strict'


/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-01-Joyce-Nkengbeza/sw.js", {
    scope: "/ICD2O-Unit-6-01-Joyce-Nkengbeza/",
  })
}
 //This function multiples numbers

function calculate() {

 // input
  let firstNumber = parseFloat(document.getElementById("numberone").value)
  const secondNumber = parseFloat(document.getElementById("numbertwo").value)
  let answer = 0

  // process
  while (firstNumber >= 1) {
    answer = answer + secondNumber
  firstNumber = firstNumber - 1;
  }
  // output
  document.getElementById("results").innerHTML =
  'The number is: ' + answer
}