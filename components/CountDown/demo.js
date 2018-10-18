webpackJsonp([14],{1051:function(n,t,e){n.exports={simple:e(1438)}},1438:function(n,t,e){n.exports={content:{"zh-CN":[["p","\u7b80\u5355\u7684\u5012\u8ba1\u65f6\u7ec4\u4ef6\u4f7f\u7528\u3002"]],"en-US":[["p","The simplest usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"scaffold/src/components/CountDown/demo/simple.md",id:"scaffold-src-components-CountDown-demo-simple"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> CountDown <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/CountDown\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> targetTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">3900000</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CountDown</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">target</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>targetTime<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=e(1),t=(e(13),function(n){return n&&n.__esModule?n:{default:n}}(e(1439)));var a=(new Date).getTime()+39e5;return n.createElement(t.default,{style:{fontSize:20},target:a})}}},1439:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),s=e(1),o=function(n){return n&&n.__esModule?n:{default:n}}(s);function p(n){return 1*n<10?"0"+n:n}var r=function(n){var t,e=0;try{e="[object Date]"===Object.prototype.toString.call(n.target)?n.target.getTime():new Date(n.target).getTime()}catch(n){throw new Error("invalid target prop",n)}return{lastTime:(t=e-(new Date).getTime())<0?0:t}},i=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));c.call(e);var a=r(n).lastTime;return e.state={lastTime:a},e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,s.Component),a(t,[{key:"componentDidMount",value:function(){this.tick()}},{key:"componentDidUpdate",value:function(n){this.props.target!==n.target&&(clearTimeout(this.timer),this.tick())}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var n=this.props,t=n.format,e=void 0===t?this.defaultFormat:t,a=(n.onEnd,function(n,t){var e={};for(var a in n)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}(n,["format","onEnd"])),s=e(this.state.lastTime);return o.default.createElement("span",a,s)}}],[{key:"getDerivedStateFromProps",value:function(n,t){var e=r(n).lastTime;return t.lastTime!==e?{lastTime:e}:null}}]),t}(),c=function(){var n=this;this.timer=0,this.interval=1e3,this.defaultFormat=function(n){var t=Math.floor(n/36e5),e=Math.floor((n-36e5*t)/6e4),a=Math.floor((n-36e5*t-6e4*e)/1e3);return o.default.createElement("span",null,p(t),":",p(e),":",p(a))},this.tick=function(){var t=n.props.onEnd,e=n.state.lastTime;n.timer=setTimeout(function(){e<n.interval?(clearTimeout(n.timer),n.setState({lastTime:0},function(){t&&t()})):(e-=n.interval,n.setState({lastTime:e},function(){n.tick()}))},n.interval)}};t.default=i}});