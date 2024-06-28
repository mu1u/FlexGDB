import{_ as e,c as o,o as a,a4 as t}from"./chunks/framework.C9KBZyuy.js";const n="/assets/list.CZ44NBtL.png",s="/assets/load_more.CaRHVPUl.png",i="/assets/load_remaining.C1oSjXjs.png",d="/assets/config.CT22Bqyf.png",_=JSON.parse('{"title":"Key Loading","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/key-loading/index.md","filePath":"guide/key-loading/index.md"}'),r={name:"guide/key-loading/index.md"},l=t('<h1 id="key-loading" tabindex="-1">Key Loading <a class="header-anchor" href="#key-loading" aria-label="Permalink to &quot;Key Loading&quot;">​</a></h1><p>Tiny RDM displays keys in a tree structure by default, and uses a delimiter (default is <code>:</code>) to split and display hierarchical levels.</p><h2 id="segment-loading" tabindex="-1">Segment Loading <a class="header-anchor" href="#segment-loading" aria-label="Permalink to &quot;Segment Loading&quot;">​</a></h2><p>Tiny RDM uses segment loading to prevent the UI from taking too long to load when there are massive keys on the server. When the number of keys on the server exceeds the set threshold (default is <code>10000</code>), it will stop loading the remaining portion.</p><img src="'+n+'" alt="Key List Illustration" width="350"><p>As shown above, the blue box indicates the loading progress of the current number of keys, and the red box shows the number of keys loaded and the total number of keys.</p><p>If you need to load the remaining keys, you can use any of the following operations:</p><h3 id="load-more-keys" tabindex="-1">Load More Keys <a class="header-anchor" href="#load-more-keys" aria-label="Permalink to &quot;Load More Keys&quot;">​</a></h3><p>Each time you click <code>Load More Keys</code>, it will continue to load the next batch of keys.</p><img src="'+s+'" alt="Load More Keys" width="350"><h3 id="load-remaining-keys" tabindex="-1">Load Remaining Keys <a class="header-anchor" href="#load-remaining-keys" aria-label="Permalink to &quot;Load Remaining Keys&quot;">​</a></h3><p>Load all the remaining keys at once.</p><img src="'+i+'" alt="Load All Remaining Keys" width="350"><h3 id="set-the-number-of-keys-per-load" tabindex="-1">Set the Number of Keys Per Load <a class="header-anchor" href="#set-the-number-of-keys-per-load" aria-label="Permalink to &quot;Set the Number of Keys Per Load&quot;">​</a></h3><p>Go to <code>Connection Settings</code> -&gt; <code>Advanced</code> -&gt; <code>Keys Per Load</code>, you can set the number of keys to load each time. Setting a sufficiently large value will allow you to load all keys at once.</p><img src="'+d+'" alt="Settings" width="600"><div class="info custom-block"><p class="custom-block-title">Note</p><p>Loading too many keys at once may cause the UI of Tiny RDM to be blocked for a long time and cost certain resources on the server. If not necessary, try not to load too many keys at once.</p><p>Consider using <a href="/guide/filter/">Key Filtering and Matching Queries</a> to quickly locate the keys you need to operate on.</p></div>',17),c=[l];function h(y,m,g,u,p,f){return a(),o("div",null,c)}const b=e(r,[["render",h]]);export{_ as __pageData,b as default};
