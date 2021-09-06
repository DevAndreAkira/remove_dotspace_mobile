var btn = document.getElementById("btn");
var output = document.getElementById("output");
var btn_paste = document.getElementById('btn_paste');
var teste;

// DESATIVADO POR ENQUANTO
// document.getElementById("testecaraio").disabled = true;

btn_paste.onclick = function (){
  event.preventDefault();
  let input1 = document.getElementById("testecaraio");
  input1.value = '';
navigator.clipboard.readText()
.then((text)=>{
input1.value = text;
});
if(input1 === '' || input1 === ' '){
    alert("É preciso copiar um conteúdo para essa função.");
  }
  else{
    output.innerHTML = "Conteúdo colado com sucesso!";
  }

}

btn.onclick = function () {
  event.preventDefault();
  let input1 = document.getElementById("testecaraio");
  input1 = input1.value;
  teste = input1.replace(/[^0-9]/g, '');
  document.querySelector("#testecaraio").value = teste;
  document.querySelector("#testecaraio").select();
  document.execCommand("copy");
  if(input1 === ''){
    alert("Insira os números que deseja limpar");
  }
  else{
    output.innerHTML = "Números limpos e copiados com sucesso!";
  }
}
