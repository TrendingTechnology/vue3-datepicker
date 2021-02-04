import{b as e,r as t,c as d,l as o,f as a,g as l,u as r,F as i,x as c,t as n,G as s,H as u,I as p,q as h,J as f,s as v}from"./framework.cd64e59b.js";import{_ as g}from"./Datepicker.d42b9282.js";const m=f('<h1 id="configuration"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="v-model"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> <code>v-model</code></h3><ul><li>Type: <code>Date</code></li><li>Required: yes</li></ul><p>The actual date that will be selected. The component behaves as close to Vue 3 documentation on custom component inputs as possible, using <code>modelValue</code> prop and <code>update:modelValue</code> event pair. Use those if you want to have more control over your model binding.</p><h3 id="upperlimit"><a class="header-anchor" href="#upperlimit" aria-hidden="true">#</a> <code>upperLimit</code></h3><ul><li>Type: <code>Date</code></li><li>Required: no</li></ul><p>Upper limit (not inclusive) for available dates for picking. All dates above that limit will not be selectable.</p><h3 id="lowerlimit"><a class="header-anchor" href="#lowerlimit" aria-hidden="true">#</a> <code>lowerLimit</code></h3><ul><li>Type: <code>Date</code></li><li>Required: no</li></ul><p>Lower limit (not inclusive) for available dates for picking. All dates below that limit will not be selectable.</p><h3 id="disableddates"><a class="header-anchor" href="#disableddates" aria-hidden="true">#</a> <code>disabledDates</code></h3><ul><li>Type: <code>{ dates: Date[] }</code></li><li>Required: no</li></ul><p>All dates listed in the dates array will not be selectable.</p><h3 id="startingview"><a class="header-anchor" href="#startingview" aria-hidden="true">#</a> <code>startingView</code></h3><ul><li>Type: <code>&#39;day&#39; | &#39;month&#39; | &#39;year&#39;</code></li><li>Default: <code>&#39;day&#39;</code></li></ul><p>View on which the date picker should open. Can be either <code>year</code>, <code>month</code>, or <code>day</code>.</p><h3 id="monthheadingformat"><a class="header-anchor" href="#monthheadingformat" aria-hidden="true">#</a> <code>monthHeadingFormat</code></h3><ul><li>Type: <code>String</code> (date-fns <a href="https://date-fns.org/docs/format" target="_blank" rel="noopener noreferrer">format string</a>)</li><li>Default: <code>LLLL yyyy</code></li></ul><p><code>date-fns</code>-type formatting for a month view heading. By default prints full month as text and selected year (e.g. January 2021).</p><h3 id="weekdayformat"><a class="header-anchor" href="#weekdayformat" aria-hidden="true">#</a> <code>weekdayFormat</code></h3><ul><li>Type: <code>String</code> (date-fns <a href="https://date-fns.org/docs/format" target="_blank" rel="noopener noreferrer">format string</a>)</li><li>Default: <code>EE</code></li></ul><p><code>date-fns</code>-type formatting for a line of weekdays on day view. By default uses three-letter representation (e.g. Fri).</p><h3 id="inputformat"><a class="header-anchor" href="#inputformat" aria-hidden="true">#</a> <code>inputFormat</code></h3><ul><li>Type: <code>String</code> (date-fns <a href="https://date-fns.org/docs/format" target="_blank" rel="noopener noreferrer">format string</a>)</li><li>Default: <code>yyyy-MM-dd</code></li></ul><p><code>date-fns</code>-type format in which the string in the input should be both parsed and displayed. By default uses ISO format (e.g. 2021-01-01).</p><h3 id="locale"><a class="header-anchor" href="#locale" aria-hidden="true">#</a> <code>locale</code></h3><ul><li>Type: <code>Locale</code> <a href="https://date-fns.org/v2.16.1/docs/I18n#usage" target="_blank" rel="noopener noreferrer"><code>date-fns</code> locale object</a></li><li>Default: <code>date-fns/locale/en</code></li></ul><p>Used in all date string formatting (e.g. see default <code>monthHeadingFormat</code>)</p><h3 id="weekstartson"><a class="header-anchor" href="#weekstartson" aria-hidden="true">#</a> <code>weekStartsOn</code></h3><ul><li>Type: <code>0 | 1 | 2 | 3 | 4 | 5 | 6</code></li><li>Default: <code>1</code></li></ul><p>Day on which the week should start. Number from 0 to 6, where 0 is Sunday and 6 is Saturday. Week starts with a Monday (1) by default.</p><h2 id="styling"><a class="header-anchor" href="#styling" aria-hidden="true">#</a> Styling</h2><p>The input itself can be styled via passing classes to it. <a href="https://v3.vuejs.org/guide/component-attrs.html#disabling-attribute-inheritance" target="_blank" rel="noopener noreferrer">Attribute fallthrough</a> is enabled. Keep in mind that input itself is not a top-level element, as it is contained within the top-level <code>div</code>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Heavy restyling via variables has not been tested, as I am mostly using this component as-is. If you find any issues while adjusting the colors (e.g. some colors don&#39;t change or a setting is missing) please <a href="https://github.com/icehaunter/vue3-datepicker/issues" target="_blank" rel="noopener noreferrer">file an issue on GitHub</a>.</p></div><h3 id="variables"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h3><p>Style can be altered significantly without editing CSS files of the components. This is done via CSS variables. Following variables are available:</p><table><thead><tr><th>Variable name</th><th>Default value</th><th>Type</th></tr></thead><tbody><tr><td><code>--vdp-bg-color</code></td><td><code>#fff</code></td><td>color</td></tr><tr><td><code>--vdp-text-color</code></td><td><code>#000</code></td><td>color</td></tr><tr><td><code>--vdp-box-shadow</code></td><td>See source</td><td>shadow</td></tr><tr><td><code>--vdp-border-radius</code></td><td><code>3px</code></td><td>size</td></tr><tr><td><code>--vdp-heading-size</code></td><td><code>2.5em</code></td><td>size</td></tr><tr><td><code>--vdp-heading-weight</code></td><td><code>bold</code></td><td>weight</td></tr><tr><td><code>--vdp-heading-hover-color</code></td><td><code>#eeeeee</code></td><td>color</td></tr><tr><td><code>--vdp-arrow-color</code></td><td><code>currentColor</code></td><td>color</td></tr><tr><td><code>--vdp-elem-color</code></td><td><code>currentColor</code></td><td>color</td></tr><tr><td><code>--vdp-disabled-color</code></td><td><code>#d5d9e0</code></td><td>color</td></tr><tr><td><code>--vdp-hover-color</code></td><td><code>#fff</code></td><td>color</td></tr><tr><td><code>--vdp-hover-bg-color</code></td><td><code>#0baf74</code></td><td>color</td></tr><tr><td><code>--vdp-selected-color</code></td><td><code>#fff</code></td><td>color</td></tr><tr><td><code>--vdp-selected-bg-color</code></td><td><code>#0baf74</code></td><td>color</td></tr><tr><td><code>--vdp-elem-font-size</code></td><td><code>0.8em</code></td><td>size</td></tr><tr><td><code>--vdp-elem-border-radius</code></td><td><code>3px</code></td><td>size</td></tr><tr><td><code>--vdp-divider-color</code></td><td><code>#d5d9e0</code></td><td>color</td></tr></tbody></table><h3 id="styling-example-and-playground"><a class="header-anchor" href="#styling-example-and-playground" aria-hidden="true">#</a> Styling example and playground</h3><br>',40),y={key:0},b=l("code",null,"currentColor",-1),w=v(),k=v("   "),x={key:1},S=l("summary",null,"Copy serialized object with these settings",-1),T={class:"language-json"},V='{"title":"Configuration","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"v-model","slug":"v-model"},{"level":3,"title":"upperLimit","slug":"upperlimit"},{"level":3,"title":"lowerLimit","slug":"lowerlimit"},{"level":3,"title":"disabledDates","slug":"disableddates"},{"level":3,"title":"startingView","slug":"startingview"},{"level":3,"title":"monthHeadingFormat","slug":"monthheadingformat"},{"level":3,"title":"weekdayFormat","slug":"weekdayformat"},{"level":3,"title":"inputFormat","slug":"inputformat"},{"level":3,"title":"locale","slug":"locale"},{"level":3,"title":"weekStartsOn","slug":"weekstartson"},{"level":2,"title":"Styling","slug":"styling"},{"level":3,"title":"Variables","slug":"variables"},{"level":3,"title":"Styling example and playground","slug":"styling-example-and-playground"}],"relativePath":"config.md","lastUpdated":1612464311266}',_={};const D=Object.assign(_,{expose:[],setup:function(f){const v=e(new Date),V=t({"--vdp-bg-color":{value:"#ffffff",type:"color"},"--vdp-text-color":{value:"#000000",type:"color"},"--vdp-box-shadow":{value:"0 4px 10px 0 rgba(128, 144, 160, 0.1), 0 0 1px 0 rgba(128, 144, 160, 0.81)",type:"shadow"},"--vdp-border-radius":{value:"3px",type:"size"},"--vdp-heading-size":{value:"2.5em",type:"size"},"--vdp-heading-weight":{value:"bold",type:"weight"},"--vdp-heading-hover-color":{value:"#eeeeee",type:"color"},"--vdp-arrow-color":{value:"currentColor",type:"color"},"--vdp-elem-color":{value:"currentColor",type:"color"},"--vdp-disabled-color":{value:"#d5d9e0",type:"color"},"--vdp-hover-color":{value:"#ffffff",type:"color"},"--vdp-hover-bg-color":{value:"#0baf74",type:"color"},"--vdp-selected-color":{value:"#ffffff",type:"color"},"--vdp-selected-bg-color":{value:"#0baf74",type:"color"},"--vdp-elem-font-size":{value:"0.8em",type:"size"},"--vdp-elem-border-radius":{value:"3px",type:"size"},"--vdp-divider-color":{value:"#d5d9e0",type:"color"}}),_=d((()=>Object.entries(V).map((([e,{value:t}])=>[e,t])).reduce(((e,[t,d])=>(e[t]=d,e)),{})));return(e,t)=>(o(),a("div",null,[m,l(g,{style:r(_),modelValue:v.value,"onUpdate:modelValue":t[1]||(t[1]=e=>v.value=e)},null,8,["style","modelValue"]),l("table",null,[(o(),a(i,null,c(V,((e,t)=>l("tr",{key:t},[l("td",null,[l("code",null,n(t),1)]),"color"===e.type?(o(),a("td",y,[l("label",null,[b,w,s(l("input",{type:"checkbox","onUpdate:modelValue":t=>e.value=t,"true-value":"currentColor","false-value":"#000000"},null,8,["onUpdate:modelValue"]),[[u,e.value]])]),k,"currentColor"!==e.value?s((o(),a("input",{key:0,type:"color","onUpdate:modelValue":t=>e.value=t},null,8,["onUpdate:modelValue"])),[[p,e.value]]):h("v-if",!0)])):(o(),a("td",x,[s(l("input",{type:"text","onUpdate:modelValue":t=>e.value=t},null,8,["onUpdate:modelValue"]),[[p,e.value]])]))]))),64))]),l("details",null,[S,l("div",T,[l("pre",null,[l("code",null,n(r(_)),1)])])])]))}});export default D;export{V as __pageData};