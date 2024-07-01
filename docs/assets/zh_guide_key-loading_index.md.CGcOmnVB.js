import{_ as a,c as e,o as t,a4 as o}from"./chunks/framework.DRiVJl7O.js";const i="/FlexGDB/assets/basic.CMy6vmyN.png",r="/FlexGDB/assets/array.2bLFLfv4.png",s="/FlexGDB/assets/struct.BLoyhqPF.png",c="/FlexGDB/assets/note.CJefXcLv.png",g=JSON.parse('{"title":"变量调试","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"zh/guide/key-loading/index.md","filePath":"zh/guide/key-loading/index.md"}'),d={name:"zh/guide/key-loading/index.md"},l=o('<h1 id="变量调试" tabindex="-1">变量调试 <a class="header-anchor" href="#变量调试" aria-label="Permalink to &quot;变量调试&quot;">​</a></h1><p>变量调试功能可以对程序中的全局变量进行读写，包括基础变量类型、数组、结构体、以及联合体、可极大地提高嵌入式软件的调试效率。</p><h2 id="添加变量" tabindex="-1">添加变量 <a class="header-anchor" href="#添加变量" aria-label="Permalink to &quot;添加变量&quot;">​</a></h2><h3 id="添加基本变量" tabindex="-1">添加基本变量 <a class="header-anchor" href="#添加基本变量" aria-label="Permalink to &quot;添加基本变量&quot;">​</a></h3><p>从项目窗口中的基础变量中选择所需要操作的变量，然后拖拽至打开的数据列表中，最后使用<code>Ctrl+S</code>将其保存即可。</p><img src="'+i+'" alt="添加基本变量" width="600"><h3 id="添加数组" tabindex="-1">添加数组 <a class="header-anchor" href="#添加数组" aria-label="Permalink to &quot;添加数组&quot;">​</a></h3><p>在基础变量中选择带[XY]的变量，然后使用<code>Ctrl+1</code>将其切换为数组模式，也可以使用<code>Ctrl+~</code>将其还原为普通模式。</p><img src="'+r+'" alt="添加数组" width="600"><h3 id="添加结构体" tabindex="-1">添加结构体 <a class="header-anchor" href="#添加结构体" aria-label="Permalink to &quot;添加结构体&quot;">​</a></h3><p>在基础变量中选择带.all的变量，然后使用<code>Ctrl+2</code>将其切换为位域模式，也可以使用<code>Ctrl+~</code>将其还原为普通模式。</p><img src="'+s+'" alt="添加结构体" width="600"><h3 id="添加备注" tabindex="-1">添加备注 <a class="header-anchor" href="#添加备注" aria-label="Permalink to &quot;添加备注&quot;">​</a></h3><p>数据列表最后一栏即为备注栏，用户可为变量添加备注。</p><img src="'+c+'" alt="添加备注" width="600"><div class="info custom-block"><p class="custom-block-title">注意</p><p>数据列表中添加太多的变量可能会导致数据刷新速度变慢，也会对设备CPU的资源造成一定的占用，如无必要尽量不要一次性添加过多的变量。</p><p>可以考虑使用多个数据列表切换来快速定位到你所需操作的变量。</p></div>',16),n=[l];function h(p,_,m,u,f,x){return t(),e("div",null,n)}const k=a(d,[["render",h]]);export{g as __pageData,k as default};
