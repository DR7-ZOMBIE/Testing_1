function onClick() {
    if (inputsAreEmpty()) {
      label.textContent = 'Error: Uno o los dos inputs están vacíos.';
      return;
    }else if(inputsAreString()){
      label.textContent = 'Error: Los dos inputs son String.';
      return;
    }else if(inputsAreStringNumber){
      label.textContent = 'Error: Uno o los dos inputs es un string.';
      return;
    }
      updateLabel();
  
  }
  function inputsAreEmpty() {
    if (getNumber1() === '' || getNumber2() === '') {
      return true;
    } else {
      return false;
    }
  }
  
  function inputsAreString() {
    if (typeof getNumber1() !== 'number' || typeof getNumber2() !== 'number') {
      return true;
    } else {
      return false;
    }
  }
  
  function inputsAreStringNumber() {
    if (typeof getNumber1() === 'number' || typeof getNumber2() === 'number' || typeof getNumber1() === 'number' || typeof getNumber2() === 'number' ) {
      return true;
    } else {
      return false;
    }
  }
  
  function updateLabel() {
    var addend1 = parseInt(getNumber1());
    var addend2 = parseInt(getNumber2());
    var sum = addend1 + addend2;
    label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
  }
  function getNumber1() {
    return inputs[0].value;
  }
  function getNumber2() {
    return inputs[1].value;
  }
  var inputs = document.querySelectorAll('input');
  var label = document.querySelector('p');
  var button = document.querySelector('button');
  button.addEventListener('click', onClick);
  