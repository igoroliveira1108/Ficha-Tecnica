<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js"></script> 
    <title>Informações Técnicas</title>
</head>
<body>
<div class="invoice">
    <div class="containerProducao">
        <div class="inforoupas">
            <div class="title center mainTitle">
                <h2>FICHA TÉCNICA PRODUÇÃO</h2>
                <i class="fa-solid fa-file-export download"></i>
            </div>
            <br>
            <div class="inputroupas">
                <div class="inputs">
                    <label for="empresa">Empresa:</label>
                    <input type="text" class="input" id="empresa" name="empresa">
                </div>
                <div class="inputs">
                    <label for="peca">Peça:</label>
                    <input type="text" class="input" id="peca" name="peca">
                </div>
                <div class="inputs">
                    <label for="referencia">Referência:</label>
                    <input type="text" class="input" id="referencia" name="referencia" >
                </div>
                <div class="inputs">
                    <label for="data">Data:</label>
                    <input type="text" class="input" id="data" name="data" >
                </div>
                <div class="inputs">
                    <label for="modelista">Modelista:</label>
                    <input type="text" class="input" id="modelista" name="modelista" >
                </div>
                <div class="inputs">
                    <label for="gradacao">Gradação:</label>
                    <input type="text" class="input" id="gradacao" name="gradacao">
                </div>
            </div>
            <br>
            <div class="imagens">
                <div class="frente">
                    <br>
                    <h2 class="center">Costa / Frente</h2>
                    <input type="file" id="frenteinput" onchange="readFront(this);" accept="image/png, image/jpeg">
                    <br>
                    <img id="frente" src="#" />
                    <i id="apagarImagemFrente" style="display: none;" class="fa-solid fa-trash center"></i>
                </div>  
                
                <!-- <div class="costas">
                    <br>
                    <h3 class="center">Costas</h3>
                    <input type="file" id="costasinput" onchange="readBack(this);" accept="image/png, image/jpeg">
                    <br>
                    <img id="costas" src="#" />
                    <i id="apagarImagemCostas" style="display: none;" class="fa-solid fa-trash center"></i> 
                </div> -->
            </div>
            <br>
            <br>
            <div class="tables">
                <div class="divflex">
                    <div class="title center ">
                        <h2>FICHA TÉCNICA PRODUÇÃO - ESPECIFICAÇÕES</h2>
                    </div>
                        <div class="medidas">
                            <div class="titleTable">
                                <i class="fa-solid fa-plus button addMedida"></i>
                                <h2>Medidas</h2>
                            </div>
                            <div id="medidas" >
                                <ul id="inputMedidas">
                                    <!-- Adicionar conteúdo aqui dentro-->
                                </ul>   
                            </div>
                        </div>
                        <div class="aviamentos">
                            <div class="titleTable">
                                <i class="fa-solid fa-plus button addAviamento"></i>
                                <h2>Aviamentos</h2>
                            </div>
                            <div class="aviamentos">
                                <div class="titleAv">
                                    <h3 class="titleInput">Posição</h3>
                                    <h3 class="titleInput">Nome</h3>
                                    <h3 class="titleInput">Tamanho</h3>
                                    <h3 id="qtd" class="titleInput">Qtd</h3>
                                    <i class="fa-solid fa-minus btnAv"></i>
                                </div>
                                <ul id="inputAviamento">
                                    <!-- Adicionar conteúdo aqui dentro-->
                                </ul>   
                            </div>
                        </div>
                        <div class="tecido">
                            <div class="titleTable">
                                <i class="fa-solid fa-plus button addTecido"></i>
                                <h2>Tecido</h2>
                            </div>
                            <div class="tecidos">
                                <div class="titleTec" >
                                    <h3 class="titleInput">Referência</h3>
                                    <h3 class="titleInput">Nome</h3>
                                    <h3 class="titleInput">Composição</h3>
                                    <h3 id="metragem" class="titleInput">Met</h3>
                                    <i class="fa-solid fa-minus btnTec"></i>
                                </div>
                                <ul id="inputTecido">
                                    <!-- Adicionar conteúdo aqui dentro-->
                                </ul>   
                            </div>
                        </div>
                        <div class="medidas">
                            <div class="titleTable">
                                <i class="fa-solid fa-plus button addCores"></i>
                                <h2>Cores</h2>
                            </div>
                            <div class="cores">
                                <div class="titleCor" >
                                    <h3 class="titleInput">Cor</h3>
                                    <h3 class="titleInput">Posição</h3>
                                    <h3 class="titleInput">Qtd Peça</h3>
                                    <i class="fa-solid fa-minus btnCor"></i>
                                </div>
                                <ul id="inputCores">
                                    <!-- Adicionar conteúdo aqui dentro-->
                                </ul>   
                            </div>
                        </div>
                        </div>
            </div>
        </div>
        <br>
    </div>
</div>
    <script src="app.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/js/fontawesome.min.js" integrity="sha512-j3gF1rYV2kvAKJ0Jo5CdgLgSYS7QYmBVVUjduXdoeBkc4NFV4aSRTi+Rodkiy9ht7ZYEwF+s09S43Z1Y+ujUkA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    
</body>
</html>
