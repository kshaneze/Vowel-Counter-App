'use strict';

const form = document.querySelector('form');
const input = document.querySelector('.input');

const vowels = ['a', 'e', 'i', 'o', 'u'];

input.focus();

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!input.value == '') {
    // Save input value into string
    const inputValue = input.value;

    // Tranform every letter to lowercase
    const inputValueToLower = inputValue.toLowerCase();

    // Keep number of vowels somehow
    const vowelCount =
      inputValueToLower.match(/['a','e','i','o','u']/g) || [].length;

    console.log(vowelCount);

    // Alert number of vowels
    alert(`There are ${vowelCount.length} vowels!`);

    // Clear input field
    input.value = '';
  }
  return;
});
