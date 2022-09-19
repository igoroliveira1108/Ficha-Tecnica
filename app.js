let buttonApagarFrente =  document.querySelector('#apagarImagemFrente');
let buttonApagarCostas =  document.querySelector('#apagarImagemCostas');
let ulMedidas = document.querySelector('#inputMedidas');
let ulCores = document.querySelector('#inputCores');
let ulTecidos = document.querySelector('#inputTecido');
let ulAviamento = document.querySelector('#inputAviamento');
let btnAddMedidas = document.querySelector('.addMedida');
let btnAddCores = document.querySelector('.addCores');
let btnAddTecidos = document.querySelector('.addTecido');
let btnAddAviamento = document.querySelector('.addAviamento');
let titleAv = document.querySelector('.titleAv');
let titleTec = document.querySelector('.titleTec');
let titleCor = document.querySelector('.titleCor');




function readFront(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        document.querySelector('#frente').attr('src', e.target.result).width(500).height(550);
      };
  
      reader.readAsDataURL(input.files[0]);
    }

    document.querySelector('#frenteinput').style.display = 'none';
    buttonApagarFrente.style.display = 'block';
  }

  function readBack(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        $('#costas').attr('src', e.target.result).width(500).height(550);
      };
  
      reader.readAsDataURL(input.files[0]);
    }

    document.querySelector('#costasinput').style.display = 'none';
    buttonApagarCostas.style.display = 'block';
  }

  buttonApagarFrente.addEventListener('click', () => {
      $('#frente').attr('src', '').width(0).height(0);
      document.querySelector('#frenteinput').style.display = 'block';
      document.querySelector('#frenteinput').value = '';
      buttonApagarFrente.style.display = 'none';
  });

  buttonApagarCostas.addEventListener('click', () => {
    $('#costas').attr('src', '').width(0).height(0);
    document.querySelector('#costasinput').style.display = 'block';
    document.querySelector('#costasinput').value = '';
    buttonApagarCostas.style.display = 'none';
    
});

btnAddMedidas.addEventListener('click', () => {


      // Criar li 1
      let liInput = document.createElement("li");
      liInput.classList.add("liInput");

      // Criar input
      let novoInput1 = document.createElement("input");
      novoInput1.classList.add('inputText')
      novoInput1.type="text";
      liInput.appendChild(novoInput1);

      let novoInput2 = document.createElement("input");
      novoInput2.classList.add('inputText')
      novoInput2.type="text";
      liInput.appendChild(novoInput2); 

       // Crete button remove
       let btnRemove = document.createElement('i')
       btnRemove.classList.add("removeMedida");
       btnRemove.innerHTML = '<i class="fa-solid fa-minus"></i>';
       liInput.appendChild(btnRemove)

      ulMedidas.appendChild(liInput)

      btnRemove.addEventListener('click', () => {
        liInput.remove();
      })
});

btnAddCores.addEventListener('click', () => {

  titleCor.style.display = 'flex'
    
  // Criar li 1
  let liInputCores = document.createElement("li");
  liInputCores.classList.add("liInputCores");

  // Criar input
  let novoInput1 = document.createElement("input");
  novoInput1.classList.add('inputTextCores')
  novoInput1.type="text";
  liInputCores.appendChild(novoInput1);

  let novoInput2 = document.createElement("input");
  novoInput2.classList.add('inputTextCores')
  novoInput2.type="text";
  liInputCores.appendChild(novoInput2); 

  let novoInput3 = document.createElement("input");
  novoInput3.classList.add('inputTextCores')
  novoInput3.type="text";
  liInputCores.appendChild(novoInput3); 

   // Crete button remove
   let btnRemove = document.createElement('i')
   btnRemove.classList.add("removeCores");
   btnRemove.innerHTML = '<i class="fa-solid fa-minus"></i>';
   liInputCores.appendChild(btnRemove)

   ulCores.appendChild(liInputCores)

  btnRemove.addEventListener('click', () => {
    titleCor.style.display = 'none'
    liInputCores.remove();
  })
   
});

btnAddTecidos.addEventListener('click', () => {

  titleTec.style.display = 'flex'
    
  // Criar li 1
  let liInputTecidos = document.createElement("li");
  liInputTecidos.classList.add("liInputTecido");

  // Criar input
  let novoInput1 = document.createElement("input");
  novoInput1.classList.add('inputTextTecidos')
  novoInput1.type="text";
  liInputTecidos.appendChild(novoInput1);

  let novoInput2 = document.createElement("input");
  novoInput2.classList.add('inputTextTecidos')
  novoInput2.type="text";
  liInputTecidos.appendChild(novoInput2); 

  let novoInput3 = document.createElement("input");
  novoInput3.classList.add('inputTextTecidos')
  novoInput3.type="text";
  liInputTecidos.appendChild(novoInput3); 

  let novoInput4 = document.createElement("input");
  novoInput4.classList.add('inputTextTecidos')
  novoInput4.type="text";
  novoInput4.id = 'qtdTec'
  liInputTecidos.appendChild(novoInput4);

   // Crete button remove
   let btnRemove = document.createElement('i')
   btnRemove.classList.add("removeTecido");
   btnRemove.innerHTML = '<i class="fa-solid fa-minus"></i>';
   liInputTecidos.appendChild(btnRemove)

   ulTecidos.appendChild(liInputTecidos)

  btnRemove.addEventListener('click', () => {
    titleTec.style.display = 'none'
    liInputTecidos.remove();
  })
   
});

btnAddAviamento.addEventListener('click', () => {

  titleAv.style.display = 'flex'
    
  // Criar li 1
  let liInputAviamento = document.createElement("li");
  liInputAviamento.classList.add("liInputAviamento");

  // Criar input
  let novoInput1 = document.createElement("input");
  novoInput1.classList.add('inputTextAviamento')
  novoInput1.type="text";
  liInputAviamento.appendChild(novoInput1);

  let novoInput2 = document.createElement("input");
  novoInput2.classList.add('inputTextAviamento')
  novoInput2.type="text";
  liInputAviamento.appendChild(novoInput2); 

  let novoInput3 = document.createElement("input");
  novoInput3.classList.add('inputTextAviamento')
  novoInput3.type="text";
  liInputAviamento.appendChild(novoInput3); 

  let novoInput4 = document.createElement("input");
  novoInput4.classList.add('inputTextAviamento');
  novoInput4.id = 'qtdAv'
  novoInput4.type="text";
  liInputAviamento.appendChild(novoInput4);

   // Crete button remove
   let btnRemove = document.createElement('i')
   btnRemove.classList.add("removeAviamento");
   btnRemove.innerHTML = '<i class="fa-solid fa-minus"></i>';
   liInputAviamento.appendChild(btnRemove)

   ulAviamento.appendChild(liInputAviamento)

  btnRemove.addEventListener('click', () => {
    titleAv.style.display = 'none'
    liInputAviamento.remove();
  })
   
});






