<script lang="ts">
  import Slide from "./slide.svelte";
  import Code from "./code.svelte";
  import Markdown from "./markdown.svelte";
</script>

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