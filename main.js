const $result = document.querySelector('#result')
 function insert(num){
   calculator.calcular.value = calculator.calcular.value + num;
}
 function deletedAll(){
   $result.value = '';
}
 function deleted(){
   let inputText = $result.value;
   $result.value = inputText.substring(0, inputText.length - 1);
}
document.querySelector('#deleteAll').addEventListener('click', deletedAll)
document.querySelector('#delete').addEventListener('click', deleted)
