

const conteudo = document.createElement('div')
conteudo.innerHTML = `
<header class="header">
<img class="header-logo" src="/img/logo.png" alt="">
<nav class="header-nav-caixa ">
    <a class="header-nav" href="#sobre">Sobre</a>
    <a class="header-nav" href="#como-fazer">Como Fazer</a>
    <a class="header-nav" href="#duvidas">Duvidas</a>
</nav>

<a class="header-contato" href="#footer">Contato</a>
</header>

<main >

<div >
    <img class="background-top" src="/img/Top.png" alt="">
    <div class="top-texto-container">
        <h2 class="top-texto">Seu incrível consultor de permissão de trânsito.</h2>
        <a class="button" href="#depoimentos">Começar</a>
    </div>
</div>

<section id="sobre" class="section">
    <div>
        
        <div class="section-texto-a">
            <h2 class="section-h2">Sobre</h2>
            <article>
                A licença de trânsito ocupacional é uma das coisas mais importantes da empresa na realização do transporte de cargas. Na verdade, é um pré-requisito para fazer tráfego de negócios.
            </article>
        </div>
        <div class="sobre-texto-b">
            <p >
                Como você faz quando precisa obter 
                uma permissão de tráfego comercial para transporte de carga para o seu negócio?
            </p>
        </div>
    </div>
    <div >
       <img class="section-img" src="/img/Illustration.png" alt=""> 
    </div> 
</section>

<section id="como-fazer" class="section">
    <div>
        <img class="section-img" src="/img/illustrations.png" alt="">
    </div>

    <div class="section-texto">
        
        <div class="section-texto-a">
            <h2 class="section-h2">Como Fazer</h2>
            <article>
                Ao solicitar uma licença de trânsito, existem certos requisitos que você deve cumprir que estão incluídos no exame: requisitos para conhecimento profissional, estabelecimento sólido, boa reputação e recursos financeiros. Importante lembrar é confirmar seu pedido de permissão de trânsito pelo assinante ou CEO da empresa.
            </article>
        </div>
    </div>
</section>

<section id="duvidas" class="duvidas">
    
    <div>
        <img class="duvidas-bg" src="/img/FAQ.png" alt="duvidas">
    </div>
    

    <div class="duvidas-div-container">
        <div class="duvidas-texto">
            <h2 class="section-h2">Perguntas</h2>
            <h3>Perguntas e respostas sobre licenças de tráfego profissional:</h3>
        </div>
        <div class="duvidas-container section">
            <div class="duvidas-items-total">
                
                <div onclick="addSpan(span1,t1)" class="duvidas-item">
                    <div class="duvidas-item-titulo" >
                        <h3 ><a class="duvidas-item-titulo-a"  href="#duvidas-item-titulo">
                            O que é uma permissão de trânsito profissional?</a></h3>

                        <div id="t1"  class="duvidas-after-a"></div>
                    </div>
                    <p id="span1" class="duvidas-span-hiden">
                        As licenças de trânsito são um requisito para a condução do tráfego profissional.
                    </p>
                </div>

                <div onclick="addSpan(span2,t2)" class="duvidas-item">
                    <div class="duvidas-item-titulo" >
                        <h3 ><a class="duvidas-item-titulo-a"  href="#duvidas-item-titulo">
                            O que é uma permissão de trânsito profissional?</a></h3>

                        <div id="t2"  class="duvidas-after-a"></div>
                    </div>
                    <p id="span2" class="duvidas-span-hiden">
                        As licenças de trânsito são um requisito para a condução do tráfego profissional.
                    </p>
                </div>
                
                <div onclick="addSpan(span3,t3)" class="duvidas-item">
                    <div class="duvidas-item-titulo" >
                        <h3 ><a class="duvidas-item-titulo-a"  href="#duvidas-item-titulo">
                            O que é uma permissão de trânsito profissional?</a></h3>

                        <div id="t3"  class="duvidas-after-a"></div>
                    </div>
                    <p id="span3" class="duvidas-span-hiden">
                        As licenças de trânsito são um requisito para a condução do tráfego profissional.
                    </p>
                </div>
                
                <div onclick="addSpan(span4,t4)" class="duvidas-item">
                    <div class="duvidas-item-titulo" >
                        <h3 ><a class="duvidas-item-titulo-a"  href="#duvidas-item-titulo">
                            O que é uma permissão de trânsito profissional?</a></h3>

                        <div id="t4"  class="duvidas-after-a"></div>
                    </div>
                    <p id="span4" class="duvidas-span-hiden">
                        As licenças de trânsito são um requisito para a condução do tráfego profissional.
                    </p>
                </div>
                
            </div>

            <div class="duvidas-items-total-b">

                <div onclick="addSpan(span6,t6)" class="duvidas-item">
                    <div class="duvidas-item-titulo" >
                        <h3 ><a class="duvidas-item-titulo-a"  href="#duvidas-item-titulo">
                            O que é uma permissão de trânsito profissional?</a></h3>

                        <div id="t6"  class="duvidas-after-a"></div>
                    </div>
                    <p id="span6" class="duvidas-span-hiden">
                        As licenças de trânsito são um requisito para a condução do tráfego profissional.
                    </p>
                </div>

                <div onclick="addSpan(span7,t7)" class="duvidas-item">
                    <div class="duvidas-item-titulo" >
                        <h3 ><a class="duvidas-item-titulo-a"  href="#duvidas-item-titulo">
                            O que é uma permissão de trânsito profissional?</a></h3>

                        <div id="t7"  class="duvidas-after-a"></div>
                    </div>
                    <p id="span7" class="duvidas-span-hiden">
                        As licenças de trânsito são um requisito para a condução do tráfego profissional.
                    </p>
                </div>

                <div onclick="addSpan(span8,t8)" class="duvidas-item">
                    <div class="duvidas-item-titulo" >
                        <h3 ><a class="duvidas-item-titulo-a"  href="#duvidas-item-titulo">
                            O que é uma permissão de trânsito profissional?</a></h3>

                        <div id="t8"  class="duvidas-after-a"></div>
                    </div>
                    <p id="span8" class="duvidas-span-hiden">
                        As licenças de trânsito são um requisito para a condução do tráfego profissional.
                    </p>
                </div>

                <div onclick="addSpan(span9,t9)" class="duvidas-item">
                    <div class="duvidas-item-titulo" >
                        <h3 ><a class="duvidas-item-titulo-a"  href="#duvidas-item-titulo">
                            O que é uma permissão de trânsito profissional?</a></h3>

                        <div id="t9"  class="duvidas-after-a"></div>
                    </div>
                    <p id="span9" class="duvidas-span-hiden">
                        As licenças de trânsito são um requisito para a condução do tráfego profissional.
                    </p>
                </div>
            </div>

        </div>
        <a  class=" buscar-mais section-h2 duvidas-after-a" onclick="carregarMais()" href="#duvidas-item-titulo">Carregar Mais</a>
    </div>

</section>


    


<section id="depoimentos" class="depoimentos">
    

    <div class="depoimentos-topo">
        <h2>Depoimentos</h2>
        <div>
            <a class="depoimentos-topo-a" onclick="plusDivs(-1)" href="#depoimentos">&#10229;</a> 
            <a class="depoimentos-topo-a" onclick="plusDivs(1)" href="#depoimentos">&#10230;</a>
        </div>
    </div>
    <div class="depoimentos-main">
        <div>
            <h3 class="depoimentos-main-h3">Depoimentos incriveis</h3>
        </div>
        <div class="depoimentos-item-container">
            <div class="depoimentos-item slide">
                <p class="depoimentos-item-p">Sim, você precisará que o proprietário da terra assine o pedido de permissão como Permitidor, e você assine a permissão como Requerente ou Agente para o Permitido.</p>
                <img class="depoimentos-item-img" src="/img/Group 32(2).png" alt="">
            </div>
            <div class="depoimentos-item slide">
                <p class="depoimentos-item-p">Da maioria das empresas de barricadas ou controle de tráfego localizadas na lista telefônica. Eles empregam Supervisores certificados de Controle de Tráfego (TCS) que podem gerar e certificar o plano de controle de tráfego. </p>
                <img class="depoimentos-item-img" src="/img/Group 32(1).png" alt="">
            </div>
            <div class="depoimentos-item slide">
                <p class="depoimentos-item-p">Uma linha A ou escritura de restrição de acesso é um direito de propriedade que foi obtido pela CDOT com o único propósito de proibir direta</p>
                <img class="depoimentos-item-img" src="/img/Group 32.png" alt="">
            </div>
        </div>
    </div>
</section>

</main>

<footer id="footer" class="footer">

    <img class="footer-bg" src="/img/Footer.png" alt="imagem-footer">

<div class="footer-container">
    <div class="footer-texto">
        <p>Nós fornecemos consultores de gerenciamento de tráfego para que você comece rapidamente, entre em contato conosco para uma citação hoje!</p>
    </div>

    <form class="footer-form" action="/salvar" method="POST">
        <div>
            <label class="footer-form-label" for="nome">Nome</label>
            <input class="footer-form-input" id="nome" name="nome" type="text" >
        </div>
        
        <label class="footer-form-label" for="email">Email</label>
        <input class="footer-form-input" type="email" name="email" id="email">
        <label class="footer-form-label" for="mensagem">Mensagem</label>
        <input class="footer-form-input footer-form-textArea" type="text" name="mensagem" id="mensagem" />
        
        <button id="botaoForm" class="footer-form-button" type="submit">Enviar</button>
    </form>
</div>

<div class="footer-rodape-a">
    <div>
        <img class="footer-rodape-a-img" src="/img/logo.png" alt="">
    </div>
    <div class="footer-text-link">
        <a class="footer-rodape-a-text" href="#sobre">Sobre</a>
        <a class="footer-rodape-a-text" href="#como-fazer">Como Fazer</a>
        <a class="footer-rodape-a-text" href="#duvidas">Duvidas</a>
    </div>

</div>
<div id="footer-rodape-b" class="footer-rodape-b">
    <div>
        <p class="footer-rodape-b-text">&copy;Copryng @ 2021</p>
    </div>
    <div>
        <a  href="https://twitter.com" target="_blank"><img class="footer-rodape-b-img" src="/img/t.png" alt=""></a>
        <a  href="https://www.instagram.com/?hl=pt-br" target="_blank"><img class="footer-rodape-b-img" src="/img/i.png" alt=""></a>
        <a  href="https://www.facebook.com/" target="_blank"><img class="footer-rodape-b-img" src="/img/f.png" alt=""></a>
    </div>

</div>

</footer>
`;
document.body.appendChild(conteudo)

function addSpan(id,t){
    id.classList.toggle('duvidas-span-hiden')
    id.classList.toggle('duvidas-span')
    t.classList.toggle('duvidas-after-a')
    t.classList.toggle('duvidas-after-b')
}

function carregarMais(){
    setTimeout(
        ()=> alert('Carregados com sucesso! 😄'),
    );

}


