<script lang="ts">
  export let id: string | null = null;
  export let lines: string | boolean | null = null;
  export let noescape = false;
  export let language = "typescript";
</script>

<pre data-id={id || null} class={language}>
  <code
    data-trim
    data-line-numbers={lines || null}
    data-noescape={noescape || null}
    class="rounded-2xl">
    <slot />
  </code>
</pre>
