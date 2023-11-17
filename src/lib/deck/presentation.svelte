<script lang="ts">
  import Slide from "./slide.svelte";
  import Code from "./code.svelte";
  import Markdown from "./markdown.svelte";
</script>

<Slide>
  <div class="flex flex-row items-center justify-center w-full h-full gap-10">
    <img class="w-48" src="/angular-logo.svg" alt="Logo do Angular" />
    <h2 class="font-poppins">VS</h2>
    <img class="w-48 invert" src="/next-logo.svg" alt="Logo do Next" />
  </div>
</Slide>

<Slide>
  <Slide>
    <p>1 - Angular não funciona no Firefox</p>
  </Slide>
  <Slide>
    <Code>
      @
    </Code>
  </Slide>
  <Slide>
    <p>1 - Angular não funciona no Firefox</p>
  </Slide>
</Slide>

<Slide>
  <p>2 - Diminuição da complexidade</p>
</Slide>

<Slide>
  <p>3 - Componentes por classe são muito mais complexos que funções</p>
</Slide>

<Slide>
  <p>4 - Time com experiência em React/Next</p>
</Slide>

<Slide>
  <p>5 - Bibliotecas mortas</p>
</Slide>

<Slide>
  <p>6 - Baixa disponibilidade de bibliotecas</p>
</Slide>

<Slide>
  <p>7 - Comunidade mais ampla</p>
</Slide>

<Slide>
  <p>8 - Dificuldade em reaproveitar componentes</p>
</Slide>

<Slide>
  <p>9 - O roteamento do Next é mais fácil</p>
</Slide>

<Slide>
  <p>9 - React Query</p>
</Slide>

<Slide>
  <Slide>
    <p>10 - Encapsulamento de componentes</p>
  </Slide>
  <Slide>
    <p>10 - Encapsulamento de componentes</p>
  </Slide>
</Slide>

<Slide>
  <img src="/cypress-logo.svg" alt="Logo do Cypress" />
</Slide>

<Slide>
  <Code lines language="typescript">
    {`
    function love(){
      const banana:string = "banana";
      let qtd:nmber = 2;
      const fast = true;
      // comentário
      console.log(result);
    }
    `}
  </Code>
</Slide>

<Slide animate>
  <div class="flex gap-2 place-content-center">
    <div data-id="box-1" class="w-20 h-20 bg-neutral-400" />
    <div data-id="box-2" class="w-20 h-20 bg-neutral-400" />
    <div data-id="box-3" class="w-20 h-20 bg-neutral-400" />
  </div>
</Slide>

<Slide animate>
  <div class="flex gap-2 place-content-center">
    <div data-id="box-1" class="bg-red-400 w-28 h-28" />
    <div data-id="box-2" class="bg-yellow-400 w-28 h-28" />
    <div data-id="box-3" class="bg-blue-400 w-28 h-28" />
  </div>
</Slide>

<Markdown>
  {`
    # Cypress

    ## O que é?
  `}
</Markdown>

<Markdown external name="/mds/what-is.md" />
