<script lang="ts">
  import { onMount } from "svelte";
  import Reveal from "reveal.js";
  import Markdown from "reveal.js/plugin/markdown/markdown";
  import Highlight from "reveal.js/plugin/highlight/highlight";
  import Notesjs from "reveal.js/plugin/notes/notes";
  import Zoom from "reveal.js/plugin/zoom/zoom";

  import Notes from "./notes.svelte";

  // import "reveal.js/dist/reveal.css";
  import "../../styles/reveal/reveal.css";
  // import "reveal.js/dist/theme/black.css";
  import "../../styles/theme/black.css";
  // import "reveal.js/plugin/highlight/monokai.css";
  import "../../styles/highlight/code.css";

  import Presentation from "./presentation.svelte";

  onMount(() => {
    const deck = new Reveal({
      autoAnimate: true,
      autoAnimateEasing: "ease",
      autoAnimateDuration: 1,
      hash: true,
      controls: true,
      progress: true,
    });

    deck.initialize({
      plugins: [Markdown, Highlight, Notesjs, Zoom],
    });
  });
</script>

<div class="reveal">
  <div class="slides">
    <Presentation />
    <Notes />
  </div>
</div>
