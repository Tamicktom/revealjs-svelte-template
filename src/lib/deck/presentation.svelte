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
    <p>1 - Time com experiência em React/Next</p>
  </Slide>
  <Slide>
    <div
      class="flex flex-row flex-wrap items-center justify-center w-full h-full gap-8"
    >
      <img src="/tamicktom.png" alt="" class="w-40 h-40 rounded-full hljs" />
      <img src="/furlan.png" alt="" class="w-40 h-40 rounded-full hljs" />
      <img src="/milton.png" alt="" class="w-40 h-40 rounded-full hljs" />
      <img src="/garcia.jpeg" alt="" class="w-40 h-40 rounded-full hljs" />
    </div>
  </Slide>
</Slide>

<Slide>
  <Slide>
    <p>2 - Diminuição da complexidade</p>
  </Slide>
  <Slide>
    <div class="flex items-center justify-center w-full">
      <img src="/complex.png" alt="Imagem" class="w-full rounded-lg" />
    </div>
  </Slide>
</Slide>

<Slide>
  <Slide>
    <div class="flex flex-col">
      <p>3 - Angular não funciona no Firefox</p>
      <p class="text-xs">mais ou menos</p>
    </div>
  </Slide>
  <Slide>
    <h1>Signals</h1>
  </Slide>
</Slide>

<Slide>
  <Slide>
    <p>4 - Componentes por classe são muito mais complexos que funções</p>
  </Slide>
  <Slide>
    <Code lines>
      {`
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-click-counter',
        template: "
          <button (click)="increment()">Clique em mim!</button>
          <p>Você clicou {{count}} vezes.</p>
        ",
      })
      export class ClickCounterComponent {
        count = 0;

        increment() {
          this.count++;
        }
      }
      `}
    </Code>
  </Slide>
  <Slide>
    <Code lines>
      {`
      import { useState } from 'react';

      function ClickCounter() {
        const [count, setCount] = useState(0);

        return (
          <div>
            <button onClick={() => setCount(count + 1)}>Clique em mim!</button>
            <p>Você clicou {count} vezes.</p>
          </div>
        );
      }

      export default ClickCounter;

      `}
    </Code>
  </Slide>
</Slide>

<Slide>
  <Slide>
    <p>5 - Comunidade mais ampla</p>
  </Slide>
  <Slide>
    <div class="flex items-center justify-center w-full">
      <img src="chart1.png" alt="" class="rounded-lg" />
    </div>
  </Slide>
  <Slide>
    <div class="flex items-center justify-center w-full">
      <img src="chart2.png" alt="" class="rounded-lg" />
    </div>
  </Slide>
</Slide>

<Slide>
  <Slide>
    <p>6 - Bibliotecas mortas</p>
  </Slide>
  <Slide>
    <img src="lib1.png" alt="" class="w-full rounded-lg" />
    <img src="lib2.png" alt="" class="w-full rounded-lg" />
  </Slide>
  <Slide>
    <img src="lib3.png" alt="" class="w-full rounded-lg" />
    <img src="lib4.png" alt="" class="w-full rounded-lg" />
  </Slide>
</Slide>

<Slide>
  <p>7 - Dificuldade em reaproveitar componentes</p>
</Slide>

<Slide>
  <Slide>
    <p>8 - Encapsulamento de componentes</p>
  </Slide>
  <Slide animate>
    <img src="/encapsulamento.png" alt="" class="w-full rounded-lg" />
  </Slide>
  <Slide animate>
    <img src="/responsivo.gif" alt="" class="w-full rounded-lg" />
  </Slide>
  <Slide animate>
    <img src="/encapsulamento2.png" alt="" class="w-full rounded-lg" />
  </Slide>
</Slide>

<Slide>
  <Slide>
    <p>9 - O roteamento do Next é mais intuitivo</p>
  </Slide>
  <Slide>
    <p class="font-bold">www.site.com/first-component</p>
    <Code>
      {`
      const routes: Routes = [
        { path: 'first-component', component: FirstComponent },
        { path: 'second-component', component: SecondComponent },
      ];
      `}
    </Code>
  </Slide>
  <Slide>
    <p class="font-bold">www.site.com/products</p>
    <Code>
      {`
      const routes: Routes = [
        { path: 'products', component: ProductListComponent },
        { path: 'products/:id', component: ProductDetailComponent },
      ];
      `}
    </Code>
  </Slide>
  <Slide>
    <p class="font-bold">www.site.com/admin/product</p>
    <Code>
      {`
      const routes: Routes = [
        {
          path: 'admin',
          component: AdminDashboardComponent,
          children: [
            { path: 'product', component: AdminProductComponent },
            { path: 'category', component: AdminCategoryComponent },
          ],
        },
      ];
      `}
    </Code>
  </Slide>
  <Slide>
    <img src="/next-page.avif" alt="" class="w-full rounded-lg" />
  </Slide>
  <Slide>
    <img src="/next-colocation.avif" alt="" class="w-full rounded-lg" />
  </Slide>
  <Slide>
    <img
      src="/next-router-inside-router.avif"
      alt=""
      class="w-full rounded-lg"
    />
  </Slide>
</Slide>

<Slide>
  <Slide>
    <p>10 - React Query</p>
  </Slide>
  <Slide>
    <img src="/modelo.png" alt="" class="w-full rounded-lg" />
  </Slide>
</Slide>
