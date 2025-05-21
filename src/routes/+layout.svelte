<script lang="ts">
    import '$lib/app.css';    
	import type { Snippet } from 'svelte';
    
    let { 
      children,
      data
    } = $props<{
      children: Snippet,
      data: { cssVariables: string }
    }>();
</script>

<svelte:head>
    {#if data.cssVariables}
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html `<style> :root{ ${data.cssVariables} }</style>`}
    {/if}
</svelte:head>

{@render children()}

<style>
    :global(html) {
        background: var(--bg);
        color: var(--fg);
    }
</style>