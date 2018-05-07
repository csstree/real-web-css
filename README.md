Using [CSSTree](https://github.com/csstree/csstree) to test a real site's CSS and collect usage data

## How to use

Load Alexa's site list and make a top of site (`data/top-sites.csv`):

```
npm run update:sites
```

Download top site's CSS (`data/css/*.css`):

```
npm run download:css
```

> If something goes wrong on CSS downloading (freezing, network issue or errors on console), you can abort the process. Downloading will continue from the last successful processed site. You can set the start site by editing `data/idx.txt` file (if file doesn't exist downloading is start from the first one), which contains just a single number – site index.

Test collected CSS:

```
npm test
```

Generate a table with a results (updates `README.md`):

```
npm run gen:table
```

Extract usage data (updates `usage.md`):

```
npm run gen:usage
```

## Data

## Usage

- [The list of used CSS features on Alexa TOP 250 sites](usage.md)
- [Dictionaries](scripts/usage) used for testing an existence of feature (mix of different sources and data found on Alexa TOP 250 sites)

## Alexa TOP 250

<!-- date -->

Update date: 2018-05-06T23:58:40.694Z

<!-- /date -->


<!-- table -->

* Sites: `250`
* Downloaded: `208` (42 failed)
* Parsed: `208` (0 failed)
* Validation passed: `13` (195 failed)

<table>
<thead>
<tr><th>#</th><th></th><th>Site</th><th>Parsing</th><th>Validation</th></tr>
</thead>
<tr><td>1</td><td>⚠️</td><td>google.com</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   28 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   28 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>2</td><td>⚠️</td><td>youtube.com</td><td><details><summary>Errors: 4</summary><pre>Colon is expected
   35 |…n-renderer{color:var(--yt-button-color);background-color;}button.ytd-button-renderer,yt-icon-butto…
----------------------------------------------------------------^
Colon is expected
   67 |…n-renderer{color:var(--yt-button-color);background-color;}button.ytd-topbar-menu-button-renderer,y…
----------------------------------------------------------------^
RightParenthesis is expected
  217 |…annotation{background:rgba(0,0,0,0);filter:alpha(opacity=0);font-family:sans-serif;white-space:pre…
----------------------------------------------------------------^
RightParenthesis is expected
  217 |…v-button[disabled]:focus{opacity:.5;filter:alpha(opacity=50);cursor:auto;box-shadow:none}.iv-butto…
----------------------------------------------------------------^</pre></details></td><td><details><summary>11 warnings</summary><pre>Matching for a tree with var() is not supported × 213
Lexer matching doesn't applicable for custom properties × 350
Invalid value for `fill-opacity`
     value: 50%
    --------^
Invalid value for `display` × 2
     value: -ms-flex
    --------^
Invalid value for `display` × 14
     value: -moz-flexbox
    --------^
Node has no children × 2
Invalid value for `-ms-filter`
     value: blur(20px)
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(20,20,20,0.6),rgba(209,209,209,0.6))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.8),rgba(0,0,0,0.7) 40%,rgba(0,0,0,…
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.4) 60%,rgba(0,0…
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#ffec7b,#dea405)
    ------------------------^</pre></details></td></tr>
<tr><td>3</td><td>⚠️</td><td>facebook.com</td><td>OK</td><td><details><summary>3 warnings</summary><pre>Invalid value for `font`
     value: Helvetica,Arial,sans-serif
    --------^
Invalid value for `overflow`
     value: overlay
    --------^
Invalid value for `align-items`
     value: left
    --------^</pre></details></td></tr>
<tr><td>4</td><td>⚠️</td><td>baidu.com</td><td colspan="2">–</td></tr>
<tr><td>5</td><td>⚠️</td><td>wikipedia.org</td><td>OK</td><td><details><summary>1 warning</summary><pre>Invalid value for `-moz-appearance`
     value: window
    --------^</pre></details></td></tr>
<tr><td>6</td><td>⚠️</td><td>reddit.com</td><td><details><summary>Errors: 8</summary><pre>RightParenthesis is expected
    9 |…ed;pointer-events:none;opacity:0.65;filter:alpha(opacity=65);box-shadow:none}.c-btn-primary{backgr…
----------------------------------------------------------------^
RightParenthesis is expected
    9 |…size:11px;line-height:1.4;opacity:0;filter:alpha(opacity=0)}.c-tooltip .tooltip-inner{padding:2px …
----------------------------------------------------------------^
RightParenthesis is expected
    9 |…r-width:8px}.c-tooltip.in{opacity:1;filter:alpha(opacity=100)}.c-tooltip.top{padding:8px 0}.c-tool…
----------------------------------------------------------------^
RightParenthesis is expected
    9 |…9998}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:0.5;filter:…
----------------------------------------------------------------^
RightParenthesis is expected
    9 |…y=0)}.modal-backdrop.in{opacity:0.5;filter:alpha(opacity=50)}.modal-header{position:absolute;top:1…
----------------------------------------------------------------^
RightParenthesis is expected
    9 |…ble-tfa-modal-backdrop{opacity:0.25;filter:alpha(opacity=25)}.c-close{display:block;width:12px;hei…
----------------------------------------------------------------^
RightParenthesis is expected
    9 |…t"]{cursor:not-allowed;opacity:0.65;filter:alpha(opacity=65);pointer-events:none}.sr_style_toggle …
----------------------------------------------------------------^
RightParenthesis is expected
    9 |…);height:100%;width:100%;opacity:.7;filter:alpha(opacity=70);z-index:1000;display:none}#sr-list{ov…
----------------------------------------------------------------^</pre></details></td><td><details><summary>12 warnings</summary><pre>Node has no children × 8
Invalid value for `font-size`
     value: 14
    --------^
Invalid value for `-moz-background-clip`
     value: padding-box
    --------^
Invalid value for `margin`
     value: none
    --------^
Invalid value for `float`
     value: center
    --------^
Invalid value for `padding`
     value: auto
    --------^
Invalid value for `background-color`
     value: url(../throbber.gif)
    --------^
Invalid value for `margin-left`
     value: none
    --------^
Invalid value for `font-size`
     value: normal
    --------^
Invalid value for `text-align`
     value: middle
    --------^
Invalid value for `box-shadow`
     value: 0
    --------^
Invalid value for `box-sizing`
     value: none
    --------^</pre></details></td></tr>
<tr><td>7</td><td>⚠️</td><td>yahoo.com</td><td><details><summary>Errors: 40</summary><pre>Unexpected input
   11 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff7617', endColorstr='#ff9…
-------------------------^
Unexpected input
   22 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e91857', endColorstr='#ff3…
-------------------------^
Unexpected input
  154 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a…
-------------------------^
Unexpected input
  165 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a…
-------------------------^
RightParenthesis is expected
  363 |    filter: alpha(opacity=1);
--------------------------------^
RightParenthesis is expected
  523 |…500px}.ShareBtns a:hover{opacity:.3;filter:alpha(opacity=33)}.modal-actions{bottom:3px}.modal-acti…
----------------------------------------------------------------^
RightParenthesis is expected
  523 |…ctions .ShareBtns a:hover{opacity:1;filter:alpha(opacity=100)}#hl-viewer:focus{outline:0}#hl-viewe…
----------------------------------------------------------------^
RightParenthesis is expected
  523 |…hareBtns .Share-Btn:hover{opacity:1;filter:alpha(opacity=100)}.ShareBtns .Tumblr-Btn{color:#35506d…
----------------------------------------------------------------^
RightParenthesis is expected
  523 |…y{display:block!important;opacity:1;filter:alpha(opacity=100)}#ModalSticker .content-modal{border-…
----------------------------------------------------------------^
RightParenthesis is expected
  523 |…fb}.slide-nav-arrow:hover{opacity:1;filter:alpha(opacity=100)}.modal-sidekick,.modal-sidekick-foll…
----------------------------------------------------------------^
RightParenthesis is expected
  525 |…ant}#applet_p_63794 .Op-0{opacity:0;filter:alpha(opacity=0)}#applet_p_63794 .Op-33{opacity:.33;fil…
----------------------------------------------------------------^
RightParenthesis is expected
  525 |…}#applet_p_63794 .Op-33{opacity:.33;filter:alpha(opacity=33)}#applet_p_63794 .Op-50{opacity:.5;fil…
----------------------------------------------------------------^
RightParenthesis is expected
  525 |…)}#applet_p_63794 .Op-50{opacity:.5;filter:alpha(opacity=50)}#applet_p_63794 .Op-66{opacity:.66;fi…
----------------------------------------------------------------^
RightParenthesis is expected
  525 |…}#applet_p_63794 .Op-66{opacity:.66;filter:alpha(opacity=66)}#applet_p_63794 .Op-100{opacity:1;fil…
----------------------------------------------------------------^
RightParenthesis is expected
  525 |…)}#applet_p_63794 .Op-100{opacity:1;filter:alpha(opacity=100)}#applet_p_63794 .Ov-h{overflow:hidde…
----------------------------------------------------------------^
PercentSign is expected
  649 |…rtant}#atomic .Hy\(n\){hyphens:normal}#atomic .Lts\(-.31em\){letter-spacing:.31em}#atomic .Lts\(-0…
----------------------------------------------------------------^
RightParenthesis is expected
  651 |…Disabled:hover{opacity:.4!important;filter:alpha(opacity=40%);cursor:default!important;text-shadow…
----------------------------------------------------------------^
Unexpected input
  651 |…erlay{color:#fff;background:rgba(0,0,0,.5);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  651 |…rlay{color:#fff;background:rgba(0,0,0,.75);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  651 |…bottom,transparent 0,rgba(0,0,0,.95) 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
  651 |…bottom,rgba(0,0,0,.95) 0,transparent 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
  651 |… right,rgba(0,0,0,.95) 0,transparent 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
  651 |…n{*overflow:visible}.StencilRoot .App-Mask{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  651 |…}@media \0screen{#Stream .Actions a{filter:alpha(opacity=0)}#Stream .Actions a:active,#Stream .Act…
----------------------------------------------------------------^
RightParenthesis is expected
  651 |…ht:28px;position:absolute;opacity:0;filter:alpha(opacity=0)}@media \0screen{.CustomCheckbox input{…
----------------------------------------------------------------^
RightParenthesis is expected
  651 |…,.HeaderBar a:hover .Icon{opacity:1;filter:alpha(opacity=100)}.StencilRoot .FilterBar{padding-top:…
----------------------------------------------------------------^
RightParenthesis is expected
  651 |….IEShim{display:none;*display:block;filter:alpha(opacity=70);position:absolute;top:0;left:0;width:…
----------------------------------------------------------------^
RightParenthesis is expected
  651 |…0%!important;_height:100%!important;filter:alpha(opacity=0)}.LightBox-open .PageOverlay{opacity:1}…
----------------------------------------------------------------^
RightParenthesis is expected
  651 |…width:100%;height:100%;padding:10px;filter:alpha(opacity=0)}.Tooltip:focus{outline:0}.StencilRoot …
----------------------------------------------------------------^
RightParenthesis is expected
  651 |…tch{background-color:#fff;opacity:0;filter:alpha(opacity=0)}img.W-10,img.W-100,img.W-15,img.W-20,i…
----------------------------------------------------------------^
Unexpected input
  651 |…orm:rotate(90deg);transform:rotate(90deg);*filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
  651 |…age(rotation=1)}@media \0screen{.Rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
  651 |…crosoft.BasicImage(rotation=1)}.Rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
  651 |…m:rotate(180deg);transform:rotate(180deg);*filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
RightParenthesis is expected
  651 |…!important}#Stencil .Op-0{opacity:0;filter:alpha(opacity=0)}#Stencil .Op-33{opacity:.33;filter:alp…
----------------------------------------------------------------^
RightParenthesis is expected
  651 |…city=0)}#Stencil .Op-33{opacity:.33;filter:alpha(opacity=33)}#Stencil .Op-50{opacity:.5;filter:alp…
----------------------------------------------------------------^
RightParenthesis is expected
  651 |…city=33)}#Stencil .Op-50{opacity:.5;filter:alpha(opacity=50)}#Stencil .Op-66{opacity:.66;filter:al…
----------------------------------------------------------------^
RightParenthesis is expected
  651 |…ity=50)}#Stencil .Op-66{opacity:.66;filter:alpha(opacity=66)}#Stencil .Op-100{opacity:1;filter:alp…
----------------------------------------------------------------^
RightParenthesis is expected
  651 |…city=66)}#Stencil .Op-100{opacity:1;filter:alpha(opacity=100)}#Stencil .Ov-h{overflow:hidden;zoom:…
----------------------------------------------------------------^
Unexpected input
  664 |…gba(64,0,144,1) 70%,rgba(64,0,144,0) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>21 warnings</summary><pre>Node has no children × 39
Invalid value for `display` × 2
     value: compact
    --------^
Invalid value for `-ms-filter`
     value: blur(30px)
    --------^
Invalid value for `border-color`
     value: 6001d2
    --------^
Invalid value for `background-color`
     value: none
    --------^
Invalid value for `font-size`
     value: 3xl
    --------^
Invalid value for `hyphens`
     value: normal
    --------^
Invalid value for `opacity`
     value: 33%
    --------^
Invalid value for `transform`
     value: rotate(90)
    ---------------^
Invalid value for `background-image`
     value: -ms-linear-gradient(to bottom,#fff,#e6e6e6)
    ----------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4ab5f7 0,#35a2ec 58%,#2e9ee7 100%)
    ------------------------^
Unknown property `-ms-font-smoothing` × 2
Unknown property `-o-font-smoothing` × 2
Unknown property `font-smoothing` × 4
Unknown property `-moz-font-smoothing`
Unknown property `font-smooth`
Invalid value for `height`
     value: 2.5
    --------^
Invalid value for `-webkit-perspective`
     value: 1000
    --------^
Invalid value for `-moz-perspective`
     value: 1000
    --------^
Invalid value for `-o-perspective`
     value: 1000
    --------^
Invalid value for `perspective`
     value: 1000
    --------^</pre></details></td></tr>
<tr><td>8</td><td>⚠️</td><td>qq.com</td><td><details><summary>Errors: 35</summary><pre>Unexpected input
   60 |…baBtnLeft.png) no-repeat;_background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   62 |…aBtnRight.png) no-repeat;_background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…DownloadBg.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
RightParenthesis is expected
   76 |…r{color:#cd0200}.picFocus .bd .prev{filter:alpha(opacity=70);opacity:.7;width:40px;height:40px;bac…
----------------------------------------------------------------^
Unexpected input
   76 |…LeftHover2.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…eftDefault.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
RightParenthesis is expected
   76 |…ult.png')}.picFocus .bd .prev:hover{filter:alpha(opacity=80);opacity:.8;background:url(//mat1.gtim…
----------------------------------------------------------------^
Unexpected input
   76 |…LeftHover2.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
RightParenthesis is expected
   76 |…eftHover2.png')}.picFocus .bd .next{filter:alpha(opacity=70);opacity:.7;width:40px;height:40px;bac…
----------------------------------------------------------------^
Unexpected input
   76 |…ightHover2.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…ghtDefault.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
RightParenthesis is expected
   76 |…ult.png')}.picFocus .bd .next:hover{filter:alpha(opacity=80);opacity:.8;background:url(//mat1.gtim…
----------------------------------------------------------------^
Unexpected input
   76 |…ightHover2.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
RightParenthesis is expected
   76 |….png) no-repeat left top;opacity:.3;filter:alpha(opacity=30)}#fankui:hover{opacity:1;filter:alpha(…
----------------------------------------------------------------^
RightParenthesis is expected
   76 |…opacity=30)}#fankui:hover{opacity:1;filter:alpha(opacity=100)}#homeSet{width:54px;height:54px;disp…
----------------------------------------------------------------^
RightParenthesis is expected
   76 |…ng) no-repeat left -59px;opacity:.3;filter:alpha(opacity=30)}#homeSet:hover{opacity:1;filter:alpha…
----------------------------------------------------------------^
RightParenthesis is expected
   76 |…pacity=30)}#homeSet:hover{opacity:1;filter:alpha(opacity=100)}#toTop{width:54px;height:54px;displa…
----------------------------------------------------------------^
RightParenthesis is expected
   76 |…g) no-repeat left -118px;opacity:.3;filter:alpha(opacity=30)}#toTop:hover{opacity:1;filter:alpha(o…
----------------------------------------------------------------^
RightParenthesis is expected
   76 |…(opacity=30)}#toTop:hover{opacity:1;filter:alpha(opacity=100)}#minidown{width:54px;height:54px;dis…
----------------------------------------------------------------^
RightParenthesis is expected
   76 |…g) no-repeat left -177px;opacity:.3;filter:alpha(opacity=30)}#minidown:hover{opacity:1;filter:alph…
----------------------------------------------------------------^
RightParenthesis is expected
   76 |…acity=30)}#minidown:hover{opacity:1;filter:alpha(opacity=100)}.layoutBg{width:100%;height:4780px;p…
----------------------------------------------------------------^
Unexpected input
   76 |…qq2012/adScrollBtn02.png);_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…qq2012/adScrollBtn01.png);_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…loginNumBg.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…p/orderBg3.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…derBgRight.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…/weiboIcon.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…oIconHover.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…/qzoneIcon.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…eIconHover.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…2/mailIcon.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…lIconHover.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…012/dyIcon.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…yIconHover.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   76 |…2/loginTop.png) no-repeat;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^</pre></details></td><td><details><summary>1 warning</summary><pre>Node has no children × 35</pre></details></td></tr>
<tr><td>9</td><td>⚠️</td><td>taobao.com</td><td><details><summary>Errors: 8</summary><pre>RightParenthesis is expected
   49 |…0;left:0;border:none;background:0 0;filter:alpha(opacity=0);opacity:0}.site-nav .site-nav-menu .si…
----------------------------------------------------------------^
RightParenthesis is expected
   49 |…width:100%;height:3000px;opacity:.3;filter:alpha(opacity=30);position:fixed;_position:absolute;top…
----------------------------------------------------------------^
RightParenthesis is expected
   49 |…or:transparent;_border-color:tomato;_filter:chroma(color=tomato);border-style:solid;overflow:hidde…
----------------------------------------------------------------^
RightParenthesis is expected
   49 |…%;height:100%;background-color:#000;filter:alpha(opacity=50);opacity:.5;z-index:99999999}.tb-ie-up…
----------------------------------------------------------------^
RightParenthesis is expected
   51 |…ute;left:0;top:27px;background:#fff;filter:alpha(opacity=99);z-index:93110;border:solid #eee;borde…
----------------------------------------------------------------^
RightParenthesis is expected
   51 |…ame.menu-bd{border:0;background:0 0;filter:alpha(opacity=0);float:left;z-index:-1}#site-nav .menu-…
----------------------------------------------------------------^
RightParenthesis is expected
   51 |…e-cover{background:#000;opacity:.75;filter:alpha(opacity=50);position:absolute;width:100%;height:1…
----------------------------------------------------------------^
RightParenthesis is expected
   51 |…height:100%;border:0;background:0 0;filter:alpha(opacity=0)}div#footer{width:100%;margin-bottom:0;…
----------------------------------------------------------------^</pre></details></td><td><details><summary>7 warnings</summary><pre>Invalid value for `background-image`
     value: -webkit-image-set(url(//gtms04.alicdn.com/tps/i4/TB1Ak8ZIVXXXXX0XXX…
    --------^
Invalid value for `margin-top`
     value: '-3px\9'
    --------^
Invalid value for `-moz-osx-font-smoothing`
     value: grayscaleFont type
    --------^
Invalid value for `*vertical-align`
     value: auto
    --------^
Node has no children × 8
Invalid value for `filter` × 2
     value: mask()
    --------^
The rest part of value can't be matched to `background` grammar
     value: url(https://img.alicdn.com/tfs/TB1f1NrfMMPMeJjy1XdXXasrXXa-32-32.sv…
    ---------------------------------------------------------------------------…</pre></details></td></tr>
<tr><td>10</td><td>⚠️</td><td>tmall.com</td><td><details><summary>Errors: 22</summary><pre>String or Raw is expected
   12 |            background:url() right center no-repeat;
----------------------------------^
String or Raw is expected
   15 |            background:url() left center no-repeat;
----------------------------------^
String or Raw is expected
   20 |        background-image:url();
------------------------------------^
RightParenthesis is expected
   24 |…ute;left:0;top:27px;background:#fff;filter:alpha(opacity=99);z-index:93110;border:solid #eee;borde…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…ame.menu-bd{border:0;background:0 0;filter:alpha(opacity=0);float:left;z-index:-1}#site-nav .menu-…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…e-cover{background:#000;opacity:.75;filter:alpha(opacity=50);position:absolute;width:100%;height:1…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…height:100%;border:0;background:0 0;filter:alpha(opacity=0)}#mallTextNav,#mallTextNav li{position:…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |….interact-item:hover img{opacity:.7;filter:alpha(opacity=70)}.category-con .content-con .pannel-co…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…le-body .area-item:hover{opacity:.7;filter:alpha(opacity=70)}.area-con .module-body .area-item.las…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…big-banner-con:hover img{opacity:.7;filter:alpha(opacity=70)}.floor-con .floor-line-con .line-body…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…ght:30px;width:100%;background:#fff;filter:alpha(opacity=80);background:rgba(255,255,255,.8);overf…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…g-banner-con-2:hover img{opacity:.7;filter:alpha(opacity=70)}.new-floor-con .floor-line-con .line-…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…ght:30px;width:100%;background:#fff;filter:alpha(opacity=80);background:rgba(255,255,255,.8);overf…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…ine-body .grid:hover img{opacity:.7;filter:alpha(opacity=70)}.new-floor-con .floor-line-con .line-…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…ansition:all .3s ease-out;opacity:0;filter:alpha(opacity=0)}.new-hot-brand-con .module-body .brand…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…p-item:hover .poster img{opacity:.7;filter:alpha(opacity=70)}.new-hot-brand-con .module-body .bran…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…ard-item:hover .item-pic{opacity:.7;filter:alpha(opacity=70)}.wonderful-con .card-item:hover .item…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…,0,0,.85);background-size:100% 100%;filter:alpha(opacity=85);overflow:hidden;opacity:0}.vvip-incom…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…ing{background-color:rgba(0,0,0,.9);filter:alpha(opacity=90)}.vvip-incoming .modal-close{position:…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…px;vertical-align:middle;opacity:.6;filter:alpha(opacity=60)}.vvip-incoming .modal-content .brand-…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…height:1;margin-top:10px;opacity:.5;filter:alpha(opacity=50);font-family:PingFangSC-Light,STXihei,…
----------------------------------------------------------------^
Unexpected input
   26 |…p:0;left:0;background-color:rgba(0,0,0,.4);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>4 warnings</summary><pre>Node has no children × 22
Invalid value for `filter`
     value: mask()
    --------^
Invalid value for `filter`
     value: "alpha(opacity=35)"
    --------^
Invalid value for `text-justify`
     value: distribute-all-lines
    --------^</pre></details></td></tr>
<tr><td>11</td><td>⚠️</td><td>twitter.com</td><td><details><summary>Errors: 5</summary><pre>RightParenthesis is expected
    8 |…ity:0;-ms-filter:"alpha(opacity=0)";filter:Alpha(Opacity=0)}.ui-state-disabled{cursor:default!impo…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…y:.7;-ms-filter:"alpha(opacity=70)";filter:Alpha(Opacity=70);font-weight:normal}.ui-state-disabled…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…:.35;-ms-filter:"alpha(opacity=35)";filter:Alpha(Opacity=35);background-image:none}.ui-icon{width:…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…y:.3;-ms-filter:"alpha(opacity=30)";filter:Alpha(Opacity=30)}.ui-widget-shadow{margin:-8px 0 0 -8p…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…y:.3;-ms-filter:"alpha(opacity=30)";filter:Alpha(Opacity=30);border-radius:8px}/*!
----------------------------------------------------------------^</pre></details></td><td><details><summary>4 warnings</summary><pre>Unknown property `-webkit-nbsp-mode`
Invalid value for `-moz-box-flex`
     value: 50%
    --------^
Invalid value for `-moz-box-flex`
     value: 100%
    --------^
Node has no children × 5</pre></details></td></tr>
<tr><td>12</td><td>⚠️</td><td>amazon.com</td><td><details><summary>Errors: 13</summary><pre>RightParenthesis is expected
  137 |…d-color:#000;-ms-filter:opacity(.6);filter:alpha(opacity=60);-webkit-opacity:.6;-moz-opacity:.6;-o…
----------------------------------------------------------------^
Unexpected input
  137 |…inset 0 1px 0 0 #fcf3dc;background:#f3ce72;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  137 |…ction-button:link:hover{background:#f1c65a;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  137 |…;padding:0;cursor:pointer;opacity:0;filter:alpha(opacity=0);visibility:visible;border:0;line-heigh…
----------------------------------------------------------------^
RightParenthesis is expected
  137 |…height:32px;-ms-filter:opacity(.95);filter:alpha(opacity=95);-webkit-opacity:.95;-moz-opacity:.95;…
----------------------------------------------------------------^
RightParenthesis is expected
  137 |…av-feed-arrow{-ms-filter:opacity(0);filter:alpha(opacity=0);-webkit-opacity:0;-moz-opacity:0;-o-op…
----------------------------------------------------------------^
Unexpected input
  137 |…-box;background:#eff0f3;background:#eff0f3;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  155 |….a-lt-ie9 .feed-carousel .feed-left{zoom:1;filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Unexpected input
  155 |…a-lt-ie9 .feed-carousel .feed-right{zoom:1;filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Identifier or asterisk is expected
  155 |…color:#FFF;vertical-align:baseline;white-space:nowrap}*|:-moz-full-screen-ancestor{transform:initi…
----------------------------------------------------------------^
Identifier or asterisk is expected
  155 |…color:#FFF;vertical-align:baseline;white-space:nowrap}*|:-moz-full-screen-ancestor{transform:initi…
----------------------------------------------------------------^
RightParenthesis is expected
  171 |      filter: alpha(opacity=50);
----------------------------------^
RightParenthesis is expected
  526 |      filter: alpha(opacity=50);
----------------------------------^</pre></details></td><td><details><summary>20 warnings</summary><pre>Invalid value for `background`
     value: -webkit-linear-gradient(to right,#f6f6f6,rgba(255,255,255,0),#f6f6f…
    --------------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3…
    --------------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to right,#fff,rgba(255,255,255,0),#fff)
    --------------------------------^
Invalid value for `color` × 4
     value: a_nullable_with_important()
    --------^
Invalid value for `margin-right`
     value: none
    --------^
Invalid value for `left`
     value: -
    --------^
Invalid value for `right`
     value: -
    --------^
Invalid value for `top`
     value: -
    --------^
Invalid value for `-ms-filter`
     value: opacity(.6)
    --------^
Node has no children × 11
Invalid value for `-ms-filter`
     value: opacity(.95)
    --------^
Invalid value for `-ms-filter`
     value: opacity(0)
    --------^
Invalid value for `background`
     value: -webkit-gradient(linear,left top,left bottom,color-stop(0,#ddd),col…
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: linear-gradient(top,#ddd,#f7f7f7 3px,#fff)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(left,#fff,rgba(255,255,255,0),#fff)
    ------------------------^
Invalid value for `vertical-align`
     value: center
    --------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to bottom,#cb0400,#a50200)
    --------------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to bottom,#cb0400,#a50200)
    -----------------------------^
Invalid value for `background-image`
     value: -ms-linear-gradient(to bottom,#cb0400,#a50200)
    ----------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to bottom,#cb0400,#a50200)
    ---------------------------^</pre></details></td></tr>
<tr><td>13</td><td>⚠️</td><td>google.co.in</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>14</td><td>⚠️</td><td>vk.com</td><td><details><summary>Errors: 77</summary><pre>RightParenthesis is expected
    4 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
    6 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…hidden}.button_disabled{opacity:0.7;filter:alpha(opacity=70)}.button_disabled button{cursor:defaul…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…27em}.checkbox.disabled{opacity:0.5;filter:alpha(opacity=50)}.checkbox:before{display:block;conten…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…ding-top:8px;color:#000;opacity:0.4;filter:alpha(opacity=40);z-index:400}.vklink{font-size:1.36em;…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…tive .top_profile_arrow{opacity:0.9;filter:alpha(opacity=90)}.top_nav_link.top_profile_link{paddin…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…x;width:8px;height:4px;opacity:0.45;filter:alpha(opacity=45)}.top_profile_name{padding-right:10px;…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…:0 1px 3px rgba(0,0,0,.1);opacity:0;filter:alpha(opacity=0);-o-transition:opacity 100ms linear, to…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…ng?6) no-repeat 5px -26px;opacity:0;filter:alpha(opacity=0);cursor:pointer;-o-transition:opacity 0…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…p_play.png) no-repeat 0 0;opacity:0;filter:alpha(opacity=0);-o-transition:opacity 200ms linear;tra…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…width:35px;height:25px;opacity:0.75;filter:alpha(opacity=75);background:url(/images/icons/menu_ico…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |… 0 0 -22px;cursor:pointer;opacity:0;filter:alpha(opacity=0);z-index:4}.no_sett .left_settings{disp…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…:14px;position:absolute;opacity:0.5;filter:alpha(opacity=50);top:0;bottom:0;left:0;right:0;margin:…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…;height:5px;width:13px;opacity:0.65;filter:alpha(opacity=65);margin-right:-10px}@media (-webkit-mi…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…:114px;padding-top:60px;opacity:0.5;filter:alpha(opacity=50);-o-transition:background-color 200ms …
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…ight:100%;background:#000;opacity:0;filter:alpha(opacity=0);-o-transition:opacity 100ms linear;tra…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…-size:12.5px;color:#fff;opacity:0.5;filter:alpha(opacity=50);-o-transition:opacity 100ms linear;tr…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…tl:hover #layer_stl_bg{opacity:0.15;filter:alpha(opacity=15)}body.mac #layer_stl .fixed{-webkit-tr…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…ayer_bg{background:#000;opacity:0.7;filter:alpha(opacity=70)}@-moz-document url-prefix(){#box_laye…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…k{background-color:#000;opacity:0.7;filter:alpha(opacity=70);height:50px;border-radius:4px;box-sha…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…width:12px;height:12px;opacity:0.75;filter:alpha(opacity=75);cursor:pointer;outline:none}@media (-…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…2px;background:#575a5c;opacity:0.12;filter:alpha(opacity=12)}.box_dark .tabbed_box .summary_tabs{p…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…n.png?6) no-repeat 0 0;opacity:0.12;filter:alpha(opacity=12);cursor:pointer;-o-transition:opacity …
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…x}}.summary_tab_x:hover{opacity:0.6;filter:alpha(opacity=60)}.summary_tab_count{font-size:11.5px;p…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…nd-position:1px -160px;opacity:0.45;filter:alpha(opacity=45)}.summary_tab_sel .summary_tab_x:hover…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…:#000;border-radius:3px;opacity:0.5;filter:alpha(opacity=50);position:absolute}.pg_fixed_pages{pos…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…0;background-color:#000;opacity:0.8;filter:alpha(opacity=80);border-radius:3px}.piechart_tooltip d…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…rt_column .piechart_row{opacity:0.5;filter:alpha(opacity=50)}.piechart_rows_root.transp_children .…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…;width:15px;height:14px;opacity:0.7;filter:alpha(opacity=70)}.ts_contact.active.write .ts_contact_…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…n:absolute;top:0;left:0;opacity:0.9;filter:alpha(opacity=90);cursor:pointer}.lang_beta{margin-left…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…float:right;color:#656565;opacity:0;filter:alpha(opacity=0);font-size:13px;font-weight:400;-webkit…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…th:10px;cursor:pointer;opacity:0.75;filter:alpha(opacity=75);-o-transition:opacity 60ms linear;tra…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…edf2}.audio_inline_player{opacity:0;filter:alpha(opacity=0)}.audio_row__player_transition .audio_i…
----------------------------------------------------------------^
RightParenthesis is expected
    8 |…bg_dark{background:#000;opacity:0.8;filter:alpha(opacity=80)}.audio_pl_snippet{border-radius:2px;b…
----------------------------------------------------------------^
RightParenthesis is expected
   14 |…shed .content .radiobtn{opacity:0.5;filter:alpha(opacity=50)}.login_blocked_wrap .page_block .head…
----------------------------------------------------------------^
RightParenthesis is expected
   14 |…width:12px;height:12px;opacity:0.75;filter:alpha(opacity=75);cursor:pointer}@media (-webkit-min-de…
----------------------------------------------------------------^
RightParenthesis is expected
   16 |…disabled{cursor:default;opacity:0.5;filter:alpha(opacity=50)}.checkbox_container table,.radiobtn_c…
----------------------------------------------------------------^
RightParenthesis is expected
   16 |…disabled{cursor:default;opacity:0.5;filter:alpha(opacity=50)}.checkbox_container.disabled td.check…
----------------------------------------------------------------^
RightParenthesis is expected
   16 |…er{border-color:#dae1e8;opacity:0.6;filter:alpha(opacity=60)}.dd_header_hover div{background:#dae1…
----------------------------------------------------------------^
RightParenthesis is expected
   16 |…1px}.dd_menu_shad_l{background:#000;filter:alpha(opacity=6);opacity:0.06;overflow:hidden;width:1px…
----------------------------------------------------------------^
RightParenthesis is expected
   16 |…und:#000;height:2px;margin-top:-1px;filter:alpha(opacity=7);opacity:0.07;overflow:hidden;position:…
----------------------------------------------------------------^
RightParenthesis is expected
   16 |…lative;z-index:148}.dd_menu_shad_b2{filter:alpha(opacity=5);opacity:0.05}.dd_menu_shad_r{backgroun…
----------------------------------------------------------------^
RightParenthesis is expected
   16 |….05}.dd_menu_shad_r{background:#000;filter:alpha(opacity=6);opacity:0.06;overflow:hidden;width:1px…
----------------------------------------------------------------^
RightParenthesis is expected
   16 |…e22{background:#c5ced7;opacity:0.75;filter:alpha(opacity=75);width:5px}.inlFrame01,.inlFrame21{wid…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…ader_cnt{font-size:14px;opacity:0.6;filter:alpha(opacity=60);padding:0 8px}a.ui_box_header_link{co…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…ckground-position:100%;opacity:0.75;filter:alpha(opacity=75)}@media (-webkit-min-device-pixel-rati…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…p:-2px;background:#cad2db;opacity:0;filter:alpha(opacity=0);pointer-events:none}.ui_tab_group.ui_t…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…dth:150px;max-width:250px;opacity:0;filter:alpha(opacity=0);-o-transition:opacity 100ms linear, vi…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…ide{visibility:visible;opacity:0.75;filter:alpha(opacity=75)}.ui_tabs .ui_tab_group_item.ui_tab_se…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…14px;padding:20px 12px;opacity:0.75;filter:alpha(opacity=75);cursor:pointer}@media (-webkit-min-de…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…count.ui_tab_count_hidden{opacity:0;filter:alpha(opacity=0)}.ui_tabs_box .ui_tab_count{color:#6565…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…r.png?2) no-repeat 0 0;opacity:0.75;filter:alpha(opacity=75)}@media (-webkit-min-device-pixel-rati…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…rsor:pointer;z-index:4;opacity:0.75;filter:alpha(opacity=75)}@media (-webkit-min-device-pixel-rati…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…h_reset{visibility:hidden;opacity:0;filter:alpha(opacity=0)}.ui_search_params_wrap{padding:15px}.u…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…set{visibility:visible;opacity:0.75;filter:alpha(opacity=75)}.ui_tab_search_wrap .ui_search_reset:…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…bsolute;visibility:hidden;opacity:0;filter:alpha(opacity=0);top:47px;right:-25px;background:#fff;z…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…ition:0;margin-left:2px;opacity:0.6;filter:alpha(opacity=60);-o-transition:opacity 0.2s ease;trans…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…olid #e7e8ec;display:none;opacity:0;filter:alpha(opacity=0);max-height:0px;overflow:hidden;-o-tran…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…ght:6px;cursor:pointer;opacity:0.75;filter:alpha(opacity=75)}@media (-webkit-min-device-pixel-rati…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…dding:0;position:relative;opacity:0;filter:alpha(opacity=0);max-height:0;overflow:hidden;-o-transi…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…:0 1px 3px rgba(0,0,0,.1);opacity:0;filter:alpha(opacity=0);-o-transition:opacity 100ms linear, to…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…ide{visibility:visible;opacity:0.75;filter:alpha(opacity=75)}.ui_actions_menu_item.ui_actions_menu…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…th:13px;visibility:hidden;opacity:0;filter:alpha(opacity=0);-o-transition:visibility 100ms ease, o…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…er:none}}.ui_zoom_icon{opacity:0.75;filter:alpha(opacity=75);width:13px;height:13px;margin:0 auto;…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…g?4) no-repeat 0 -40px;opacity:0.85;filter:alpha(opacity=85);width:8px;height:8px}@media (-webkit-…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…l_bar_container{opacity:0!important;filter:alpha(opacity=0)!important;pointer-events:none}.mobile …
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…&gt;.ui_scroll_bar_container{opacity:0;filter:alpha(opacity=0)}.ui_scroll_hidden.ui_scroll_dragging&gt;.…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…vents:none;left:0;right:0;opacity:0;filter:alpha(opacity=0)}.ui_scroll_shadow_top{top:0}.ui_scroll…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…r_hidden .scrollbar_inner{opacity:0;filter:alpha(opacity=0)}.scrollbar_cont.scrollbar_hidden.scrol…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…list_item_wrap_disabled{opacity:0.5;filter:alpha(opacity=50);pointer-events:none}.olist_item{heigh…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…g?7) no-repeat 0 -255px;opacity:0.6;filter:alpha(opacity=60)}@media (-webkit-min-device-pixel-rati…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…ze:12.5px}.tt .side_sh{opacity:0.05;filter:alpha(opacity=5);background:#000;overflow:hidden;width:…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…ne}.tt .outer .side_sh{opacity:0.12;filter:alpha(opacity=12)}.tt .bottom_sh{opacity:0.05;filter:al…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…ity=12)}.tt .bottom_sh{opacity:0.05;filter:alpha(opacity=5);background:#000;overflow:hidden;height…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…}.tt .outer .bottom_sh{opacity:0.12;filter:alpha(opacity=12)}.tt.rich .side_sh{display:table-cell}…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…left.gif) no-repeat 50%;opacity:0.5;filter:alpha(opacity=50);cursor:pointer}.preq_wrap{width:252px…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…splay:block;bottom:auto;opacity:0.7;filter:alpha(opacity=70)}.ttb .toup .top_pointer{background:ur…
----------------------------------------------------------------^</pre></details></td><td><details><summary>4 warnings</summary><pre>Node has no children × 76
Invalid value for `-webkit-perspective` × 2
     value: 1000
    --------^
Invalid value for `width`
     value: -webkit-fit-content
    --------^
Invalid value for `width`
     value: -moz-fit-content
    --------^</pre></details></td></tr>
<tr><td>15</td><td>⚠️</td><td>instagram.com</td><td><details><summary>Errors: 2</summary><pre>RightParenthesis is expected
  194 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
  196 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^</pre></details></td><td><details><summary>12 warnings</summary><pre>The rest part of value can't be matched to `border` grammar
     value: 1px solid 1px solid #c7c7c7
    ------------------^
Invalid value for `width` × 2
     value: intrinsic
    --------^
Invalid value for `padding-left`
     value: max(16px,env(safe-area-inset-left))
    --------^
Invalid value for `padding-right`
     value: max(16px,env(safe-area-inset-right))
    --------^
Invalid value for `margin-left`
     value: max(16px,env(safe-area-inset-left))
    --------^
Invalid value for `margin-right`
     value: max(16px,env(safe-area-inset-right))
    --------^
Invalid value for `background`
     value: #27c4f5 -webkit-gradient(linear,left top,right top,from(#27c4f5),co…
    ---------------------------------------------------------------------------…
Invalid value for `font-size`
     value: 14x
    --------^
Invalid value for `bottom`
     value: env(safe-area-inset-bottom)
    --------^
Invalid value for `height`
     value: env(safe-area-inset-bottom)
    --------^
Invalid value for `margin-bottom`
     value: env(safe-area-inset-bottom)
    --------^
Node has no children</pre></details></td></tr>
<tr><td>16</td><td>⚠️</td><td>sohu.com</td><td><details><summary>Errors: 22</summary><pre>RightParenthesis is expected
  767 |…adient(top,transparent 0,#333 100%);filter:alpha(opacity=50)}.icon-video{position:absolute;left:5p…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…th:100%;height:100%;background:#000;filter:alpha(opacity=50);opacity:.5;z-index:70}.pop-layer{z-in…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…layer .radio-icon input[type=radio]{filter:alpha(opacity=0);opacity:0}.pop-layer .radio-icon-sel{b…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…ckground:#fff;background-color:#fff;filter:alpha(opacity=1);-moz-opacity:.01;opacity:.01;width:100…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…ckground:#fff;background-color:#fff;filter:alpha(opacity=1);-moz-opacity:.01;opacity:.01;cursor:po…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…ckground:#fff;background-color:#fff;filter:alpha(opacity=1);-moz-opacity:.01;opacity:.01;cursor:po…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |… .swf-top{z-index:1;background:#fff;filter:alpha(opacity=0);filter:alpha(opacity=0);opacity:0}.god…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…ground:#fff;filter:alpha(opacity=0);filter:alpha(opacity=0);opacity:0}.god-article-bottom .got-i-i…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…ckground:#fff;background-color:#fff;filter:alpha(opacity=1);-moz-opacity:.01;opacity:.01;cursor:po…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…:100%;display:block;background:#000;filter:alpha(opacity=40);opacity:.4}.article-page .text .text-…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…;width:238px;height:100%;opacity:.5;filter:alpha(opacity=50)}.second-nav .show-nav .bg{background:…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…;width:159px;height:100%;opacity:.5;filter:alpha(opacity=50)}.second-nav .show-nav .bg-mod{width:1…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…adient(top,transparent 0,#333 100%);filter:alpha(opacity=70);opacity:.7}.sohu-index-v3 .linear-box…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…r .subject-cover-bg{background:#000;filter:alpha(opacity=30);opacity:.3;width:100%;height:100%;dis…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…lay:block;background:#fff;opacity:0;filter:alpha(opacity=0)}.dsy-article .dsy-wrap .dsy-contentA .…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…lay:block;background:#fff;opacity:0;filter:alpha(opacity=0)}.dsy-article .dsy-wrap .dsy-contentA .…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…-area{background:#f7f7f7;opacity:.8;filter:alpha(opacity=80);position:absolute;left:0;top:0;width:…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…pic-list .scroll .cur img{opacity:1;filter:alpha(opacity=100)}.dsy-article .dsy-wrap .dsy-contentA…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |….bg-area{background:#000;opacity:.6;filter:alpha(opacity=60);position:absolute;left:0;top:0;width:…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |….bg-area{background:#000;opacity:.6;filter:alpha(opacity=60);position:absolute;left:0;top:0;width:…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…adient(top,transparent 0,#333 100%);filter:alpha(opacity=70);opacity:.7}.news-index .linear-box .l…
----------------------------------------------------------------^
RightParenthesis is expected
  767 |…absolute;left:0;top:0;display:block;filter:alpha(opacity=50)}.wei-door .wei-main .wei-cont .desc .…
----------------------------------------------------------------^</pre></details></td><td><details><summary>5 warnings</summary><pre>Invalid value for `background` × 3
     value: linear-gradient(top,transparent 0,#333 100%)
    ------------------------^
Node has no children × 22
Invalid value for `opacity` × 3
     value: 100\9
    --------^
The rest part of value can't be matched to `transition` grammar
     value: transform 0 ease 0
    ------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: -webkit-transform 0 ease 0
    --------------------------^</pre></details></td></tr>
<tr><td>17</td><td>⚠️</td><td>jd.com</td><td><details><summary>Errors: 1</summary><pre>RightParenthesis is expected
    4 |…h:500px;height:500px;cursor:pointer;filter:alpha(opacity=0);-moz-opacity:0;opacity:0}.photo-search…
----------------------------------------------------------------^</pre></details></td><td><details><summary>1 warning</summary><pre>Node has no children</pre></details></td></tr>
<tr><td>18</td><td>⚠️</td><td>live.com</td><td colspan="2">–</td></tr>
<tr><td>19</td><td>⚠️</td><td>sina.com.cn</td><td colspan="2">–</td></tr>
<tr><td>20</td><td>⚠️</td><td>weibo.com</td><td><details><summary>Errors: 9</summary><pre>RightParenthesis is expected
    5 |…con_dis{ cursor:default;opacity:0.5;filter:alpha(opacity=50);}.WB_timeline .current em{ color:#fff…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…;line-height:14px;text-align:center;filter:alpha(opacity=50);opacity:0.5;}.W_bigDay .sct_close:hov…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |….sct_close:hover{background:#fa7d3c;filter:alpha(opacity=100);opacity:1;}.W_bigDay .sct_close .W_f…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |… color: #ffa00a;}.W_btn_alpha_v2_b{ filter:alpha(opacity=35); opacity: 0.35;}.W_btn_mult { display…
----------------------------------------------------------------^
RightParenthesis is expected
   15 |…olute; top: 0; right: 0; opacity:0; filter:alpha(opacity=0); font-size: 24px; cursor: pointer;}.se…
----------------------------------------------------------------^
RightParenthesis is expected
   16 |…olute; top: 0; right: 0; opacity:0; filter:alpha(opacity=0); font-size: 24px; cursor: pointer; *ve…
----------------------------------------------------------------^
RightParenthesis is expected
   30 |…o;background:#5d5d5d; opacity:0.01; filter:alpha(opacity=1); }.PCD_slide .cursor_mask a.next{curso…
----------------------------------------------------------------^
RightParenthesis is expected
   30 |…50px; background:#000; opacity:0.5; filter:alpha(opacity="50");}.PCD_slide .pic_info .info{width:4…
----------------------------------------------------------------^
RightParenthesis is expected
   42 |…x:1; background:#333; opacity: 0.8; filter:alpha(opacity=80);}.W_unlogin_v4 .result{ z-index:2; co…
----------------------------------------------------------------^</pre></details></td><td><details><summary>13 warnings</summary><pre>Node has no children × 9
Invalid value for `vertical-align` × 2
     value: auto
    --------^
Invalid value for `background`
     value: linear-gradient(top bottom,#fa7d3c 0%,#f55f10 100%)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top bottom,#f4722e 0%,#f05807 100%)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top bottom,#696e78 0%,#646973 100%)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top bottom,#5f636d 0%,#535861 100%)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top bottom,#fbfbfb 0%,#f2f2f2 50%,#e7e7e7 100%)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top bottom,#fa7d3c 0%,#f56010 100%)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top bottom,#f4712c 0%,#f15909 100%)
    ------------------------^
Invalid value for `*vertical-align`
     value: auto
    --------^
Invalid value for `background`
     value: linear-gradient(top bottom,rgba(0,0,0,0) 50%,rgba(0,0,0,0.3) 100%)
    ------------------------^
Invalid value for `top` × 2
     value: 1
    --------^
Invalid value for `right` × 2
     value: 1
    --------^</pre></details></td></tr>
<tr><td>21</td><td>⚠️</td><td>360.cn</td><td><details><summary>Errors: 5</summary><pre>RightParenthesis is expected
    5 |…eight:10px;margin:0 10px;width:10px;filter:alpha(opacity=30);opacity:.3}.focus-slide .switchable&gt;d…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ation .active{background-color:#fff;filter:alpha(opacity=100);opacity:1}.focus-slide .btn-prev:hov…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…height:10px;margin:0 5px;width:10px;filter:alpha(opacity=20);opacity:.2}.mall-block .mall-recommen…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…gination .active{background:#23ac38;filter:alpha(opacity=100);opacity:1}.mall-block .mall-slide .s…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…olute;top:0;width:100%;z-index:9999;filter:alpha(opacity=70);display:none;-moz-opacity:.7;opacity:…
----------------------------------------------------------------^</pre></details></td><td><details><summary>4 warnings</summary><pre>Invalid value for `float`
     value: center
    --------^
Invalid value for `font-weight`
     value: blode
    --------^
Node has no children × 5
Invalid value for `width`
     value: 317
    --------^</pre></details></td></tr>
<tr><td>22</td><td>⚠️</td><td>yandex.ru</td><td>OK</td><td><details><summary>7 warnings</summary><pre>Invalid value for `-ms-grid-row-align`
     value: flex-end
    --------^
Invalid value for `-ms-grid-row-align` × 2
     value: flex-start
    --------^
Invalid value for `max-width`
     value: auto
    --------^
Invalid value for `text-overflow` × 5
     value: -o-ellipsis-lastline
    --------^
Unknown property `backgorund-size`
The rest part of value can't be matched to `-webkit-transition-property` gramma…
     value: background-color .1s ease-out 0s
    -------------------------^
The rest part of value can't be matched to `transition-property` grammar
     value: background-color .1s ease-out 0s
    -------------------------^</pre></details></td></tr>
<tr><td>23</td><td>⚠️</td><td>netflix.com</td><td>OK</td><td><details><summary>3 warnings</summary><pre>Unknown property `-webkit-margin-before`
Unknown property `-webkit-margin-after`
Unknown property `min-font-size`</pre></details></td></tr>
<tr><td>24</td><td>⚠️</td><td>twitch.tv</td><td><details><summary>Errors: 1</summary><pre>RightParenthesis is expected
   16 |…;z-index:10;margin:0;left:0;top:5px;filter:alpha(opacity=0);opacity:0}.pika-label{background:#fff;…
----------------------------------------------------------------^</pre></details></td><td><details><summary>9 warnings</summary><pre>The rest part of value can't be matched to `-webkit-transition` grammar
     value: opacity 0 linear
    ----------------^
The rest part of value can't be matched to `transition` grammar
     value: opacity 0 linear
    ----------------^
Invalid value for `width`
     value: -webkit-max-content
    --------^
Invalid value for `width`
     value: -moz-max-content
    --------^
Unknown property `height-transition`
Node has no children
Invalid value for `border-radius`
     value: none
    --------^
Invalid value for `max-width` × 2
     value: auto
    --------^
Invalid value for `overflow-x`
     value: none
    --------^</pre></details></td></tr>
<tr><td>25</td><td>⚠️</td><td>login.tmall.com</td><td><details><summary>Errors: 7</summary><pre>RightParenthesis is expected
  119 |…ute;left:0;top:27px;background:#fff;filter:alpha(opacity=99);z-index:93110;border:solid #eee;borde…
----------------------------------------------------------------^
RightParenthesis is expected
  119 |…ame.menu-bd{border:0;background:0 0;filter:alpha(opacity=0);float:left;z-index:-1}#site-nav .menu-…
----------------------------------------------------------------^
RightParenthesis is expected
  119 |…e-cover{background:#000;opacity:.75;filter:alpha(opacity=50);position:absolute;width:100%;height:1…
----------------------------------------------------------------^
RightParenthesis is expected
  119 |…height:100%;border:0;background:0 0;filter:alpha(opacity=0)}#mallTextNav,#mallTextNav li{position:…
----------------------------------------------------------------^
RightParenthesis is expected
  123 |…sk{background-color:#000;opacity:.5;filter:alpha(opacity=50);width:100%;height:100%;top:0;left:0}#…
----------------------------------------------------------------^
RightParenthesis is expected
  123 |…edbar{background:#fc461e;opacity:.5;filter:alpha(opacity=50)}.nc_scale div.orange{background:#f00}…
----------------------------------------------------------------^
RightParenthesis is expected
  125 |…or:transparent;_border-color:tomato;_filter:chroma(color=tomato);border-style:solid;overflow:hidde…
----------------------------------------------------------------^</pre></details></td><td><details><summary>3 warnings</summary><pre>Node has no children × 7
Invalid value for `filter`
     value: mask()
    --------^
Unknown property `*diplay`</pre></details></td></tr>
<tr><td>26</td><td>⚠️</td><td>pornhub.com</td><td><details><summary>Errors: 1</summary><pre>RightParenthesis is expected
  239 |…3px;text-shadow:1px 1px 1px #000;filter:dropshadow(color=#000, offx=1, offy=1)}#staticLogin_head d…
----------------------------------------------------------------^</pre></details></td><td><details><summary>23 warnings</summary><pre>Invalid value for `font-size` × 2
     value: &lt;empty string&gt;
    --------^
Invalid value for `right`
     value: &lt;empty string&gt;
    --------^
Unknown property `textShadow` × 2
Invalid value for `background-image` × 3
     value: linear-gradient(bottom,rgba(0,0,0,.84) 0,rgba(65,65,65,.84) 100%)
    ------------------------^
Invalid value for `background-image` × 3
     value: linear-gradient(bottom,rgba(0,0,0,.69) 0,rgba(125,125,125,.69) 100%…
    ------------------------^
Invalid value for `background` × 3
     value: linear-gradient(bottom,#0179cb 0,#0179cb 2.98%,#3fb1ff 99.19%,#3fb1…
    ------------------------^
Invalid value for `background` × 3
     value: linear-gradient(bottom,#477f01 0,#477f01 2.98%,#7bbb27 99.19%,#7bbb…
    ------------------------^
Invalid value for `white-space` × 2
     value: -moz-pre-wrap
    --------^
Invalid value for `white-space` × 2
     value: -pre-wrap
    --------^
Invalid value for `white-space` × 2
     value: -o-pre-wrap
    --------^
The rest part of value can't be matched to `background-image` grammar
     value: url(../images/premium/premium-spirte.png?cache=2018050410) no-repea…
    -------------------------------------------------------------------^
Invalid value for `background`
     value: -webkit-gradient(to top,color-stop(-10%,#000),color-stop(20%,rgba(0…
    -------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to top,#000 -10%,rgba(0,0,0,0) 20%)
    --------------------------------^
Invalid value for `background`
     value: -moz-linear-gradient(to top,#000 -10%,rgba(255,255,255,0) 20%)
    -----------------------------^
Invalid value for `background`
     value: -webkit-gradient(to top,color-stop(-10%,#000),color-stop(20%,rgba(2…
    -------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to top,#000 -10%,rgba(255,255,255,0) 20%)
    --------------------------------^
Invalid value for `background`
     value: -o-linear-gradient(to top,#000 -10%,rgba(255,255,255,0) 20%)
    ---------------------------^
Invalid value for `background`
     value: -ms-linear-gradient(to top,#000 -10%,rgba(255,255,255,0) 20%)
    ----------------------------^
Node has no children
Invalid value for `-webkit-transform`
     value: -webkit-translateY(40px)
    --------^
Invalid value for `-moz-transform`
     value: -moz-translateY(40px)
    --------^
Invalid value for `-ms-transform`
     value: -ms-translateY(40px)
    --------^
Invalid value for `-o-transform`
     value: -o-translateY(40px)
    --------^</pre></details></td></tr>
<tr><td>27</td><td>⚠️</td><td>google.ru</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   28 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   28 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>28</td><td>⚠️</td><td>google.co.uk</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>29</td><td>⚠️</td><td>google.com.br</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>30</td><td>⚠️</td><td>google.com.hk</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>31</td><td>⚠️</td><td>google.de</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>32</td><td>⚠️</td><td>google.co.jp</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>33</td><td>⚠️</td><td>google.fr</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>34</td><td>⚠️</td><td>yahoo.co.jp</td><td><details><summary>Errors: 4</summary><pre>Unexpected input
    4 |…}.Kaimono .hd{background:#fdedef!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Selector is expected
    4 |…tion#srchAssistBd{background-size:580px 330px!important}%clearfix:after,%clearfix:before{display:t…
----------------------------------------------------------------^
Unexpected input
   25 |  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1f5fd', endColorstr='#fffff…
-----------------------^
Unexpected input
  520 |  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1f5fd', endColorstr='#fffff…
-----------------------^</pre></details></td><td><details><summary>8 warnings</summary><pre>Invalid value for `font`
     value: 100%
    --------^
Node has no children × 3
Unknown property `layout-grid-line`
The rest part of value can't be matched to `padding` grammar
     value: 6px 0 11px\0/
    ------------------^
The rest part of value can't be matched to `min-width` grammar
     value: 400px\0/
    -------------^
The rest part of value can't be matched to `min-height` grammar × 2
     value: 34px\0/
    ------------^
The rest part of value can't be matched to `width` grammar
     value: 72.8%\0/
    -------------^
Lexer matching doesn't applicable for custom properties × 2</pre></details></td></tr>
<tr><td>35</td><td>⚠️</td><td>bing.com</td><td><details><summary>Errors: 14</summary><pre>RightParenthesis is expected
    3 |…o{width:39px;height:39px;opacity:.4;filter:alpha(opacity=40);background:#000;padding:1px}.sh_hto d…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…;top:0;left:0;z-index:-1;opacity:.6;filter:alpha(opacity=60);padding:1px;background:#000}.sh_ho di…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ie8l .hpcDown{background-color:#222;filter:alpha(opacity=75);opacity:.75}.hpcBkP,.hpcNext,.hpcCopy…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…f;background-color:#222;opacity:.75;filter:alpha(opacity=75);*display:inline;*zoom:1}.hpcPlay{back…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0)}.focus_hi{z-index:301 !important}#Down…
----------------------------------------------------------------^
Unexpected input
    3 |…px}*+html .b_searchboxSubmit{color:#010101;filter:progid:DXImageTransform.Microsoft.Chroma(color=b…
----------------------------------------------------------------^
Unexpected input
    3 |…0%,rgba(0,0,0,0) 59%,rgba(0,0,0,.64) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…0%,rgba(0,0,0,0) 59%,rgba(0,0,0,.64) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…0%,rgba(0,0,0,0) 59%,rgba(0,0,0,.64) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…0%,rgba(0,0,0,0) 59%,rgba(0,0,0,.64) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…_tb .sc_pc li{display:block}.sc_sct{filter:alpha(opacity=70);opacity:.7}.sc_pcC{float:left;width:1…
----------------------------------------------------------------^
Unexpected input
    3 |…:320px;height:300px;z-index:9;display:none;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…:absolute;background:#fff;opacity:0;filter:alpha(opacity=0)}#hp_bottomCell{z-index:8 !important}#s…
----------------------------------------------------------------^
Unexpected input
    3 |…ient(rgba(0,0,0,.6) 0,rgba(0,0,0,.6) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>2 warnings</summary><pre>Node has no children × 14
Unknown property `a`</pre></details></td></tr>
<tr><td>36</td><td>⚠️</td><td>ebay.com</td><td><details><summary>Errors: 30</summary><pre>Unexpected input
    5 |…ouch;background-color: rgba(0, 0, 0, 0.7);filter: progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
    7 |…idth:100%;height:100%;background:#000;opacity:.6;filter:~"alpha(opacity=60)";filter:~"progid:DXIma…
----------------------------------------------------------------^
Unexpected input
    7 |…ound:#000;opacity:.6;filter:~"alpha(opacity=60)";filter:~"progid:DXImageTransform.Microsoft.gradie…
----------------------------------------------------------------^
Unexpected input
    7 |…ageTransform.Microsoft.gradient(Opacity=60)";-ms-filter:~"alpha(opacity=60)";z-index:99999}#clnw-m…
----------------------------------------------------------------^
Unexpected input
    7 |…image:linear-gradient(to bottom,#fefefe,#fafafa);filter:~"progid:DXImageTransform.Microsoft.gradie…
----------------------------------------------------------------^
Unexpected input
    7 |…;font-family:Arial}#colwFooter .btn-d{opacity:.4;filter:~"progid:DXImageTransform.Microsoft.gradie…
----------------------------------------------------------------^
Unexpected input
    7 |…DXImageTransform.Microsoft.gradient(Opacity=40)";filter:~"alpha(opacity=40)";-ms-filter:~"alpha(op…
----------------------------------------------------------------^
Unexpected input
    7 |…ent(Opacity=40)";filter:~"alpha(opacity=40)";-ms-filter:~"alpha(opacity=40)";filter:~"alpha(opacit…
----------------------------------------------------------------^
Unexpected input
    7 |…pha(opacity=40)";-ms-filter:~"alpha(opacity=40)";filter:~"alpha(opacity=40)"}#colwFooter .btn-prim…
----------------------------------------------------------------^
Unexpected input
    7 |…image:linear-gradient(to bottom,#0079bc,#00509d);filter:~"progid:DXImageTransform.Microsoft.gradie…
----------------------------------------------------------------^
Unexpected input
    7 |…near-gradient(top,#0079bc 0%,#00509d 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…near-gradient(top,#00509d 0%,#00509d 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…near-gradient(top,#45aad6 0%,#2386c0 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…near-gradient(top,#2386c0 0%,#2386c0 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…near-gradient(top,#fefefe 0%,#f8f8f8 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…near-gradient(top,#70b42d 0%,#479313 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…near-gradient(top,#2c7908 0%,#479313 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…near-gradient(top,#fefefe 0%,#f8f8f8 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…-linear-gradient(top,#eee 0%,#fafafa 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…-color:#fff;_border-left-color:#fff;_filter:chroma(color=#ffffff)}.tooltip .icon{background:url('h…
----------------------------------------------------------------^
Unexpected input
    7 |…m5ltcqnto1o4baovyl.png) no-repeat 0 -200px;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
    7 |…4baovyl.png) no-repeat 0 -200px !important;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
    7 |…us,#gh .btn-prim:active{background:#00509d;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…(top,#45aad6,#2386c0);text-decoration:none;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |….gh-w a.btn-scnd:active{background:#2386c0;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…:-moz-linear-gradient(top,#fefefe,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…d transparent;content:"";opacity:.8;filter:alpha(opacity=80)}.gh-w .caret-dn{margin-top:8px;margin…
----------------------------------------------------------------^
Unexpected input
    7 |…:-moz-linear-gradient(top,#0079bc,#00509d);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…tant;-ms-filter:"alpha(opacity=60)";filter:alpha(opacity=60);opacity:.6;left:0}.ghn-g-num-c{height…
----------------------------------------------------------------^
Unexpected input
   12 |…e8 div.prom span.gspr{top:-30px;left:-23px;filter:progid:DXImageTransform.Microsoft.Matrix(M11=0.7…
----------------------------------------------------------------^</pre></details></td><td><details><summary>22 warnings</summary><pre>Node has no children × 30
Invalid value for `background`
     value: linear-gradient(left,#fff,#e8e8e8,#e8e8e8,#e8e8e8,#fff)
    ------------------------^
Invalid value for `-webkit-transition-delay` × 3
     value: 0
    --------^
Invalid value for `-moz-transition-delay` × 3
     value: 0
    --------^
Invalid value for `-o-transition-delay` × 3
     value: 0
    --------^
Invalid value for `-ms-transition-delay` × 3
     value: 0
    --------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `border` grammar
     value: 1px solid transparent #0065b0
    ------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: background-position .1s linear 0
    ---------------------------------------^
The rest part of value can't be matched to `-moz-transition` grammar × 2
     value: background-position .1s linear 0
    ---------------------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: background-position .1s linear 0
    ---------------------------------------^
Invalid value for `text-shadow`
     value: 0
    --------^
Invalid value for `background`
     value: linear-gradient(left,rgba(247,247,247,0) 0%,rgba(247,247,247,0.9) 6…
    ------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `-moz-transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `-ms-transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `-moz-transition` grammar
     value: visibility 0 linear .1s,opacity .1s linear
    -------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: visibility 0 linear .1s,opacity .1s linear
    -------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: visibility 0 linear .1s,opacity .1s linear
    -------------------^
The rest part of value can't be matched to `transition` grammar
     value: visibility 0 linear .1s,opacity .1s linear
    -------------------^</pre></details></td></tr>
<tr><td>37</td><td>⚠️</td><td>xvideos.com</td><td><details><summary>Errors: 7</summary><pre>RightParenthesis is expected
    5 |….btn{cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;-moz-box-shad…
----------------------------------------------------------------^
RightParenthesis is expected
   14 |…;left:0;position:absolute;opacity:0;filter:alpha(opacity=0)}.ui-front{z-index:100}.ui-state-disabl…
----------------------------------------------------------------^
RightParenthesis is expected
   52 |…r .ui-priority-secondary{opacity:.7;filter:alpha(opacity=70);font-weight:400}.ui-state-disabled,.u…
----------------------------------------------------------------^
RightParenthesis is expected
   52 |…ader .ui-state-disabled{opacity:.35;filter:alpha(opacity=35);background-image:none}.ui-state-disab…
----------------------------------------------------------------^
RightParenthesis is expected
   52 |…ge:none}.ui-state-disabled .ui-icon{filter:alpha(opacity=35)}.ui-icon{width:16px;height:16px}.ui-i…
----------------------------------------------------------------^
RightParenthesis is expected
   52 |…00.png) 50% 50% repeat-x;opacity:.3;filter:alpha(opacity=30)}.ui-widget-shadow{margin:-8px 0 0 -8p…
----------------------------------------------------------------^
RightParenthesis is expected
   52 |…00.png) 50% 50% repeat-x;opacity:.3;filter:alpha(opacity=30);-webkit-border-radius:8px;-moz-border…
----------------------------------------------------------------^</pre></details></td><td><details><summary>5 warnings</summary><pre>Node has no children × 7
Invalid value for `width`
     value: device-width
    --------^
Invalid value for `-moz-user-select`
     value: auto
    --------^
Invalid value for `-ms-user-select`
     value: auto
    --------^
Invalid value for `-moz-background-clip`
     value: padding-box
    --------^</pre></details></td></tr>
<tr><td>38</td><td>🆗</td><td>t.co</td><td>OK</td><td>OK</td></tr>
<tr><td>39</td><td>⚠️</td><td>imgur.com</td><td><details><summary>Errors: 33</summary><pre>Selector is expected
   65 |…und:0 0}#topbar .dropdown-footer a.active{color:#121211},#topbar .dropdown-footer a:hover,#topbar …
----------------------------------------------------------------^
RightParenthesis is expected
   65 |…nter}.random-button:hover{opacity:1;filter:alpha(opacity=100)}#topbar .search-container.search-foc…
----------------------------------------------------------------^
Unexpected input
   65 |…gradient(to bottom,#3274e5 0,#2d67cc 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   65 |…gradient(to bottom,#357bf2 0,#306ed9 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   65 |…,rgba(42,42,42,1) 0,rgba(17,17,17,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Selector is expected
   65 |…it-border-radius:inherit;opacity:inherit;border:inherit},.btn-test .btn-blue:hover{opacity:inherit…
----------------------------------------------------------------^
Unexpected input
   65 |…gradient(to bottom,#2a61bf 0,#224d99 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   65 |…gradient(to bottom,#3274e5 0,#2d67cc 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   65 |…gradient(to bottom,#2C2F34 0,#121211 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   65 |…o bottom,#2C2F34 0,#444442 0,#121211 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   65 |…tton].button-big:active{background:#121211;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   65 |…linear-gradient(top,#2C2F34 0,#121211 99%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   65 |…linear-gradient(top,#444442 0,#121211 99%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
RightParenthesis is expected
   65 |…eight:100%;background-color:#424242;filter:alpha(opacity=80);opacity:.8;z-index:500}#loading-overl…
----------------------------------------------------------------^
RightParenthesis is expected
   65 |…x;height:78px;margin:1px;opacity:.5;filter:alpha(opacity=50);background-color:#2C2F34}.underbar .t…
----------------------------------------------------------------^
RightParenthesis is expected
   65 |…bar .thumbnails img:hover{opacity:1;filter:alpha(opacity=100)}.underbar .stats{font-size:12px;font…
----------------------------------------------------------------^
Unexpected input
   65 |…ed,.upvote-image:active{background:#474747;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   65 |…gradient(to bottom,#474747 0,#3d3d3d 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   67 |…inear-gradient(to bottom,#000,transparent);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   67 |…inear-gradient(to bottom,transparent,#000);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
RightParenthesis is expected
   67 |…) -206px -73px no-repeat;opacity:.3;filter:alpha(opacity=30);-moz-opacity:.3}.main-image #under-im…
----------------------------------------------------------------^
RightParenthesis is expected
   67 |…tent .ui-state-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none}.ui-priority-pr…
----------------------------------------------------------------^
RightParenthesis is expected
   67 |…t .ui-priority-secondary{opacity:.7;filter:Alpha(Opacity=70);font-weight:400}.ui-corner-tl{border-…
----------------------------------------------------------------^
RightParenthesis is expected
   67 |…{background:50% 50% #666;opacity:.5;filter:Alpha(Opacity=50)}.ui-widget-shadow{margin:-5px 0 0 -5p…
----------------------------------------------------------------^
RightParenthesis is expected
   67 |…nd:50% 50% repeat-x #000;opacity:.2;filter:Alpha(Opacity=20);-moz-border-radius:5px;-webkit-border…
----------------------------------------------------------------^
Unexpected input
   67 |…(236,208,102,1) 0,rgba(217,180,47,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   67 |…219,219,219,1) 0,rgba(140,140,140,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   67 |…a(206,138,73,1) 0,rgba(191,112,49,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   67 |…st-title-meta{color:#BBB;font-size:12px;font-weight:bold: padding: 0;max-height:18px;line-height:1…
----------------------------------------------------------------^
RightParenthesis is expected
   67 |…position:absolute;top:0;opacity:.01;filter:alpha(opacity=1)}.post-image-description iframe{margin:…
----------------------------------------------------------------^
Unexpected input
   67 |…inear-gradient(top,#555552 0,#444442 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   67 |…ges-menu .mode.selected{background:#797979;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
RightParenthesis is expected
   67 |…background-color:#4E76C9;opacity:.5;filter:alpha(opacity=50);z-index:10000}#album-images .error{wh…
----------------------------------------------------------------^</pre></details></td><td><details><summary>15 warnings</summary><pre>The rest part of value can't be matched to `border-right` grammar
     value: 0 Spx solid #ccc
    ----------^
Node has no children × 31
Invalid value for `background`
     value: -webkit-gradient(left top,left bottom,color-stop(0,rgba(42,42,42,1)…
    -------------------------^
Invalid value for `margin-left`
     value: 305
    --------^
Unknown property `-webkit-padding-start`
Invalid value for `background`
     value: linear-gradient(top,#2C2F34 0,#121211 99%)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#444442 0,#121211 99%)
    ------------------------^
The rest part of value can't be matched to `text-shadow` grammar
     value: 1px 1px rbga(0,0,0,.5)
    ----------------^
Invalid value for `opacity` × 4
     value: 5px
    --------^
Unknown property `-moz-column-break-inside`
Unknown property `column-break-inside`
Invalid value for `-ms-filter`
     value: blur(7px)
    --------^
Invalid value for `background-color` × 3
     value: none
    --------^
Invalid value for `perspective`
     value: 1000
    --------^
Invalid value for `background`
     value: linear-gradient(top,#555552 0,#444442 100%)
    ------------------------^</pre></details></td></tr>
<tr><td>40</td><td>🆗</td><td>alipay.com</td><td>OK</td><td>OK</td></tr>
<tr><td>41</td><td>⚠️</td><td>csdn.net</td><td><details><summary>Errors: 14</summary><pre>RightParenthesis is expected
   13 |…none;cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:no…
----------------------------------------------------------------^
Unexpected input
   13 |…nd-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:hover,.close:focus{color:#000;…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…tion:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:a…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…ty=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{min-height:16.428571429…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…size:12px;line-height:1.4;opacity:0;filter:alpha(opacity=0);visibility:visible}.tooltip.in{opacity…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…lity:visible}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{padding:5px 0;margin-top…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |… 1px 2px rgba(0,0,0,0.6);opacity:.5;filter:alpha(opacity=50)}.carousel-control.left{background-ima…
----------------------------------------------------------------^
Unexpected input
   13 |…0,0.0001) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   13 |…,0,0,0.5) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…fff;text-decoration:none;opacity:.9;filter:alpha(opacity=90)}.carousel-control .icon-prev,.carouse…
----------------------------------------------------------------^
PercentSign is expected
   70 |…ition:absolute;left:0;}.slide-outer .hot .swapbox1 top 0 a,.slide-outer .hot .swapbox2 top 0 a,.sl…
----------------------------------------------------------------^
PercentSign is expected
   70 |… 0 a{position:absolute}.slide-outer .hot .swapbox1 top 0 img,.slide-outer .hot .swapbox2 top 0 img…
----------------------------------------------------------------^</pre></details></td><td><details><summary>7 warnings</summary><pre>Node has no children × 12
Invalid value for `background-image`
     value: -webkit-linear-gradient(left,color-stop(rgba(0,0,0,0.5) 0),color-st…
    -------------------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(left,color-stop(rgba(0,0,0,0.0001) 0),color…
    -------------------------------------^
Invalid value for `width`
     value: device-width
    --------^
Invalid value for `-ms-flex-pack`
     value: left
    --------^
Invalid value for `-webkit-box-pack`
     value: left
    --------^
Unknown property `ms-transform`</pre></details></td></tr>
<tr><td>42</td><td>⚠️</td><td>ok.ru</td><td><details><summary>Errors: 2</summary><pre>Unexpected input
  467 |…lock.media-shared__v2 .media-block.media-link__v2{width:$w-reshare-feed;margin-left:10px}.media-bl…
----------------------------------------------------------------^
Unexpected input
  467 |…-block.media-poll.__redesign .poll_i+.poll_i{margin-top:$offset-1x}.media-block.media-poll.__redes…
----------------------------------------------------------------^</pre></details></td><td><details><summary>18 warnings</summary><pre>Unknown property `x`
Unknown property `y`
Unknown property `viewBox`
Invalid value for `background`
     value: linear-gradient(left,rgba(255,255,255,0) 0,#fff 80%)
    ------------------------^
Unknown property `-moz-user-drag` × 2
Unknown property `-ms-user-drag` × 2
Unknown property `-o-user-drag` × 2
Unknown property `user-drag` × 2
Invalid value for `-webkit-mask-image`
     value: linear-gradient(left,#000 95%,rgba(0,0,0,0) 100%)
    ------------------------^
Invalid value for `mask-image`
     value: linear-gradient(left,#000 95%,rgba(0,0,0,0) 100%)
    ------------------------^
Node has no children × 2
Unknown property `scrollbar-face-color`
Unknown property `scrollbar-arrow-color`
Unknown property `scrollbar-track-color`
Unknown property `scrollbar-shadow-color`
Unknown property `scrollbar-highlight-color`
Unknown property `scrollbar-3dlight-color`
Unknown property `scrollbar-darkshadow-Color`</pre></details></td></tr>
<tr><td>43</td><td>⚠️</td><td>wikia.com</td><td><details><summary>Errors: 2</summary><pre>Identifier is expected
  555 |…dth:1024px){.feed-item .gpt-ad{padding-top:6px}}@media (--fandom-breakpoint-l-up){.gpt-ad.bfaa-tem…
----------------------------------------------------------------^
Identifier is expected
  555 |…-leaderboard-desktop.bfab-template&gt;div{margin:0}@media (--fandom-breakpoint-m-down){.bfab-template…
----------------------------------------------------------------^</pre></details></td><td><details><summary>9 warnings</summary><pre>Lexer matching doesn't applicable for custom properties × 204
Invalid value for `background`
     value: -webkit-gradient(linear,left top,left bottom,from(0),color-stop(#00…
    ----------------------------------------------------------^
Invalid value for `-webkit-box-align`
     value: top
    --------^
Invalid value for `-ms-flex-align`
     value: top
    --------^
Invalid value for `align-items`
     value: top
    --------^
Matching for a tree with var() is not supported × 70
Unknown property `-ms-grid-columns` × 3
Unknown property `-ms-grid-column-span` × 11
Invalid value for `background-image`
     value: -webkit-gradient(linear,left top,left bottom,from(transparent),colo…
    ---------------------------------------------------------------------------…</pre></details></td></tr>
<tr><td>44</td><td>⚠️</td><td>google.it</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>45</td><td>⚠️</td><td>microsoft.com</td><td><details><summary>Errors: 1</summary><pre>RightParenthesis is expected
   14 |…nter}.expired-deal-image{opacity:.5;filter:alpha(opacity=50);filter:gray;filter:grayscale(1)}.expi…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `-ms-filter`
     value: FlipV
    --------^
The rest part of value can't be matched to `padding` grammar × 5
     value: inherit 0
    ---------------^
Unknown property `-ms-grid-rows` × 5
Unknown property `-ms-grid-columns` × 5
The rest part of value can't be matched to `-ms-grid-row` grammar × 4
     value: span 2
    -------------^
The rest part of value can't be matched to `grid-row` grammar × 4
     value: span 2
    -------------^
Unknown property `-ms-grid-row-span` × 8
The rest part of value can't be matched to `-ms-grid-row` grammar × 2
     value: span 1
    -------------^
The rest part of value can't be matched to `grid-row` grammar × 2
     value: span 1
    -------------^
The rest part of value can't be matched to `-ms-grid-column` grammar
     value: span 2
    -------------^
The rest part of value can't be matched to `grid-column` grammar
     value: span 2
    -------------^
Unknown property `-ms-grid-column-span`
Node has no children
Invalid value for `filter`
     value: gray
    --------^
Invalid value for `background` × 4
     value: radial-gradient(circle at center left,#fff,rgba(255,255,255,0) 80%)
    -----------------------------------------^
Invalid value for `background` × 4
     value: radial-gradient(circle at center right,#fff,rgba(255,255,255,0) 80%…
    -----------------------------------------^
Invalid value for `background` × 4
     value: radial-gradient(circle at center left,#000,rgba(255,255,255,0) 80%)
    -----------------------------------------^
Invalid value for `background` × 4
     value: radial-gradient(circle at center right,#000,rgba(255,255,255,0) 80%…
    -----------------------------------------^
The rest part of value can't be matched to `transition` grammar
     value: opacity cubic-bezier(.16,1,.29,.99) .15
    --------------------------------------------^
Invalid value for `-moz-appearance`
     value: slider-vertical
    --------^
Invalid value for `appearance`
     value: slider-vertical
    --------^
Invalid value for `-moz-appearance`
     value: slider-horizontal
    --------^
Invalid value for `appearance`
     value: slider-horizontal
    --------^
Invalid value for `display`
     value: ms-flexbox
    --------^
Invalid value for `-ms-flex-wrap`
     value: none
    --------^
Invalid value for `-ms-high-contrast-adjust`
     value: background
    --------^
The rest part of value can't be matched to `background-color` grammar
     value: #e6e6e6 a
    ----------------^
Unknown property `background-color-color`</pre></details></td></tr>
<tr><td>46</td><td>⚠️</td><td>google.ca</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>47</td><td>⚠️</td><td>pages.tmall.com</td><td><details><summary>Errors: 4</summary><pre>RightParenthesis is expected
   18 |…ute;left:0;top:27px;background:#fff;filter:alpha(opacity=99);z-index:93110;border:solid #eee;borde…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…ame.menu-bd{border:0;background:0 0;filter:alpha(opacity=0);float:left;z-index:-1}#site-nav .menu-…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…e-cover{background:#000;opacity:.75;filter:alpha(opacity=50);position:absolute;width:100%;height:1…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…height:100%;border:0;background:0 0;filter:alpha(opacity=0)}#mallTextNav,#mallTextNav li{position:…
----------------------------------------------------------------^</pre></details></td><td><details><summary>3 warnings</summary><pre>Unknown property `dispaly`
Node has no children × 4
Invalid value for `filter`
     value: mask()
    --------^</pre></details></td></tr>
<tr><td>48</td><td>⚠️</td><td>imdb.com</td><td><details><summary>Errors: 21</summary><pre>RightParenthesis is expected
    3 |…m;background-color:#000;opacity:0.8;filter:alpha(opacity=60);margin:0 -8px -3.692em}.tpack .title{…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ght:bold;font-size:11px;opacity:.99;filter:alpha(opacity=99);height:4.273em}.tpack .info{font-size…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…adius:6px;box-shadow:0 2px 2px #000;filter:alpha(opacity=100);filter:progid:DXImageTransform.Micro…
----------------------------------------------------------------^
Unexpected input
    3 |…w:0 2px 2px #000;filter:alpha(opacity=100);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…0.8) 15%,rgba(19,108,178,0.8) 100%);filter:alpha(opacity=100);filter:progid:DXImageTransform.Micro…
----------------------------------------------------------------^
Unexpected input
    3 |…8,178,0.8) 100%);filter:alpha(opacity=100);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…ap:break-word}.widget_image .image_overlay{filter:progid:DXImageTransform.Microsoft.Matrix(M11=1, …
----------------------------------------------------------------^
Unexpected input
    7 |…on:underline}.twbs .glyphicon-play-reverse{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…x;background-color:#666;opacity:0.6;filter:alpha(opacity=60)}.twbs .nav-imdb-tabs&gt;li&gt;a:hover,.twbs…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…db-tabs&gt;li&gt;a:focus&gt;.key{opacity:0.9;filter:alpha(opacity=90)}.twbs .nav-imdb-tabs&gt;li.active&gt;a,.twb…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…b-tabs&gt;li.active&gt;a&gt;.key{opacity:0.9;filter:alpha(opacity=90)}.twbs .default-dark .nav-imdb-tabs&gt;li…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…und-repeat:no-repeat;display:inline;filter:alpha(opacity=50);opacity:0.5;position:absolute;visibil…
----------------------------------------------------------------^
Unexpected input
    7 |…208,205,200,0.3) 15%,rgba(0,0,0,0.2) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…208,205,200,0.3) 15%,rgba(0,0,0,0.2) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…ackground:linear-gradient(#9db1c1,#26679a);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…ound:linear-gradient(top, #ffeeaa,#ffdd00);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…transparent;border:none;color:white;filter:alpha(opacity=0);font-size:20px;font-weight:normal;heig…
----------------------------------------------------------------^
RightParenthesis is expected
   10 |…ilter{background:#333;display:block;filter:alpha(opacity=75);height:113px;opacity:0.75;position:ab…
----------------------------------------------------------------^
RightParenthesis is expected
   10 |…o-repeat center center;display:none;filter:alpha(opacity=50);height:265px;left:260px;opacity:0.5;p…
----------------------------------------------------------------^
Unexpected input
   10 |…rgba(248,248,248,0),#f8f8f8);display:block;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   10 |…ear-gradient(top, #888888 0%,#eeeeee 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>24 warnings</summary><pre>Invalid value for `background` × 2
     value: linear-gradient(top,#fefcea 0%,#f3ce00 100%)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#b3b3b0 0%,#e3e2dd 500px)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0) 7px)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(bottom,#e8e8e8 0%,#f2f2f1 50%)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(bottom,#000000 15%,#6b6b6b 100%)
    ------------------------^
Node has no children × 21
Invalid value for `background-clip` × 2
     value: padding
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#f2f2f2 0%,#f9ec75 20%,#f3ce00 70%)
    ------------------------^
Invalid value for `overflow`
     value: hide
    --------^
Invalid value for `background-image` × 2
     value: linear-gradient(bottom,#ffffff 15%,#f6f6f5 85%)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(bottom,#f2f2f1 0%,#f2f2f1 50%)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#ffeeaa,#ffdd00)
    ------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: width 0 linear
    --------------^
The rest part of value can't be matched to `transition` grammar
     value: width 0 linear
    --------------^
Unknown property `opactiy` × 5
Invalid value for `background-image`
     value: linear-gradient(bottom,#eaeaea 0%,#ffffff 100%)
    ------------------------^
Unknown property `font-smoothing` × 2
Invalid value for `position`
     value: none
    --------^
Invalid value for `background`
     value: linear-gradient(top,#faf8f1 0%,#ece2c6 100%)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#636260 0%,#2b2b2b 100%)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#a7b9c8 0%,#1d6299 100%)
    ------------------------^
The rest part of value can't be matched to `border` grammar
     value: 0 1px 1px 1px solid #ccc
    ----------^
Invalid value for `background`
     value: linear-gradient(top,rgba(248,248,248,0),#f8f8f8)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#888888 0%,#eeeeee 100%)
    ------------------------^</pre></details></td></tr>
<tr><td>49</td><td>⚠️</td><td>mail.ru</td><td><details><summary>Errors: 7</summary><pre>RightParenthesis is expected
    3 |….4;min-width:250px;min-height:250px;filter:alpha(opacity=40)}.ag-popup__overlay_show{display:block…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…ding:0;outline:none;font-size:100px;filter:alpha(opacity=0);opacity:0;cursor:pointer;-webkit-appea…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…on__fake__text{opacity:.6!important;filter:alpha(opacity=60)!important}.x-ph__button__fake__icon{p…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…on__fake__icon{opacity:.2!important;filter:alpha(opacity=20)!important}.x-ph__button__fake__icon{w…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…ght:100%;background:#000;opacity:.4;filter:alpha(opacity=40)}.x-ph__overlay_visible{display:block}…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…;top:0;bottom:0;opacity:0;z-index:2;filter:alpha(opacity=0);-webkit-appearance:menulist-button}.x-…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…100%;height:100%;margin:0;opacity:0;filter:alpha(opacity=0);outline:0}.x-ph__form__checkbox__check…
----------------------------------------------------------------^</pre></details></td><td><details><summary>11 warnings</summary><pre>Node has no children × 7
The rest part of value can't be matched to `-webkit-transition` grammar × 2
     value: opacity .2s false
    --------------------^
The rest part of value can't be matched to `-moz-transition` grammar × 2
     value: opacity .2s false
    --------------------^
The rest part of value can't be matched to `transition` grammar × 2
     value: opacity .2s false
    --------------------^
The rest part of value can't be matched to `margin-bottom` grammar
     value: 20px 0
    ------------^
The rest part of value can't be matched to `margin-bottom` grammar
     value: 16px 0
    ------------^
The rest part of value can't be matched to `margin-bottom` grammar
     value: 12px 0
    ------------^
The rest part of value can't be matched to `-webkit-transform-origin` grammar
     value: 14px/2 14px/2
    ------------^
The rest part of value can't be matched to `-o-transform-origin` grammar
     value: 14px/2 14px/2
    ------------^
The rest part of value can't be matched to `transform-origin` grammar
     value: 14px/2 14px/2
    ------------^
The rest part of value can't be matched to `line-height` grammar
     value: 32px/2
    ------------^</pre></details></td></tr>
<tr><td>50</td><td>⚠️</td><td>tumblr.com</td><td><details><summary>Errors: 10</summary><pre>Unexpected input
  218 |…nsparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  220 |…;text-shadow:0px 1px 0px #ffffff;filter:dropshadow(color=#fff,offx=0,offy=1);text-decoration:none;…
----------------------------------------------------------------^
RightParenthesis is expected
  220 |…;text-shadow:0px 1px 0px #ffffff;filter:dropshadow(color=#fff,offx=0,offy=1);border-bottom:none;bo…
----------------------------------------------------------------^
RightParenthesis is expected
  220 |…ound-position:-270px 0;opacity:0.31;filter:alpha(opacity=31)}.file_upload_icon:hover .icon{opacity…
----------------------------------------------------------------^
RightParenthesis is expected
  220 |…pload_icon:hover .icon{opacity:0.41;filter:alpha(opacity=41)}.file_upload_icon .not_progress:after…
----------------------------------------------------------------^
RightParenthesis is expected
  220 |…sition:-270px 0;right:0;opacity:0.3;filter:alpha(opacity=30)}.file_upload_icon .progress:after{bac…
----------------------------------------------------------------^
RightParenthesis is expected
  220 |…te;top:0;right:0;margin:0;opacity:0;filter:alpha(opacity=0);font-size:200px;direction:ltr;cursor:p…
----------------------------------------------------------------^
RightParenthesis is expected
  220 |…r:pointer;font-size:125px;opacity:0;filter:alpha(opacity=0);z-index:5}.link_button .link_thumbnail…
----------------------------------------------------------------^
RightParenthesis is expected
  220 |…ng:40px}#art_upload_input{opacity:0;filter:alpha(opacity=0);font-size:125px;position:absolute;righ…
----------------------------------------------------------------^
Identifier is expected
  232 |…-link .post-title+.post-body{margin-top:-5px}@font-face{.flag--one-true-post{font-family:Source Co…
----------------------------------------------------------------^</pre></details></td><td><details><summary>19 warnings</summary><pre>The rest part of value can't be matched to `background` grammar
     value: rgb(0,0,0) transparent
    -------------------^
Node has no children × 9
Unknown property `font-smoothing` × 32
Invalid value for `background-color`
     value: none
    --------^
Invalid value for `-webkit-perspective` × 2
     value: 1000
    --------^
Invalid value for `perspective`
     value: 1000
    --------^
The rest part of value can't be matched to `border` grammar
     value: transparent solid #e3e3e3
    --------------------------^
Invalid value for `box-sizing`
     value: padding-box
    --------^
Unknown property `webkit-transition`
Invalid value for `opacity`
     value: 9
    --------^
Invalid value for `transition-duration` × 2
     value: 0
    --------^
The rest part of value can't be matched to `transition` grammar
     value: all .25s ease-out .4s,color 0
    ------------------------------------^
Invalid value for `-ms-user-select`
     value: all
    --------^
Invalid value for `background-size`
     value: fill
    --------^
Unknown property `font-smooth`
Invalid value for `cursor`
     value: normal
    --------^
Invalid value for `animation-delay`
     value: 0
    --------^
Invalid value for `transition`
     value: translateY(100px)
    --------^
The rest part of value can't be matched to `line-height` grammar
     value: 22px white-space nowrap
    ------------------------^</pre></details></td></tr>
<tr><td>51</td><td>⚠️</td><td>aliexpress.com</td><td><details><summary>Errors: 55</summary><pre>Unexpected input
   17 |…ffab02,#ff8a28);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…ffbc35,#f2a210);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…fafafa,#e8e8e8);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…fafafa,#f2f2f2);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…f5f5f5,#e6e6e6);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…y:1;-moz-opacity:1;-khtml-opacity:1;filter:alpha(opacity=100);transform:rotateY(0);-webkit-transfo…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…y:1;-moz-opacity:1;-khtml-opacity:1;filter:alpha(opacity=100);transform:rotateY(0);-webkit-transfo…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…y:0;-moz-opacity:0;-khtml-opacity:0;filter:alpha(opacity=0);transform:rotateY(-180deg);-webkit-tra…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…y:1;-moz-opacity:1;-khtml-opacity:1;filter:alpha(opacity=100);transition:all .5s ease-in;transform…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…ointer;visibility:visible;z-index:3;filter:Alpha(opacity=0)}.searchbar-form .search-cate option{pa…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…ader_cnt{font-size:14px;opacity:0.6;filter:alpha(opacity=60);padding:0 8px}a.ui_box_header_link{co…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…ckground-position:100%;opacity:0.75;filter:alpha(opacity=75)}@media (-webkit-min-device-pixel-rati…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…p:-2px;background:#cad2db;opacity:0;filter:alpha(opacity=0);pointer-events:none}.ui_tab_group.ui_t…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…dth:150px;max-width:250px;opacity:0;filter:alpha(opacity=0);-o-transition:opacity 100ms linear, vi…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…ide{visibility:visible;opacity:0.75;filter:alpha(opacity=75)}.ui_tabs .ui_tab_group_item.ui_tab_se…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…14px;padding:20px 12px;opacity:0.75;filter:alpha(opacity=75);cursor:pointer}@media (-webkit-min-de…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…count.ui_tab_count_hidden{opacity:0;filter:alpha(opacity=0)}.ui_tabs_box .ui_tab_count{color:#6565…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…r.png?2) no-repeat 0 0;opacity:0.75;filter:alpha(opacity=75)}@media (-webkit-min-device-pixel-rati…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…rsor:pointer;z-index:4;opacity:0.75;filter:alpha(opacity=75)}@media (-webkit-min-device-pixel-rati…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…h_reset{visibility:hidden;opacity:0;filter:alpha(opacity=0)}.ui_search_params_wrap{padding:15px}.u…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…set{visibility:visible;opacity:0.75;filter:alpha(opacity=75)}.ui_tab_search_wrap .ui_search_reset:…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…bsolute;visibility:hidden;opacity:0;filter:alpha(opacity=0);top:47px;right:-25px;background:#fff;z…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…ition:0;margin-left:2px;opacity:0.6;filter:alpha(opacity=60);-o-transition:opacity 0.2s ease;trans…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…olid #e7e8ec;display:none;opacity:0;filter:alpha(opacity=0);max-height:0px;overflow:hidden;-o-tran…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…ght:6px;cursor:pointer;opacity:0.75;filter:alpha(opacity=75)}@media (-webkit-min-device-pixel-rati…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…dding:0;position:relative;opacity:0;filter:alpha(opacity=0);max-height:0;overflow:hidden;-o-transi…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…:0 1px 3px rgba(0,0,0,.1);opacity:0;filter:alpha(opacity=0);-o-transition:opacity 100ms linear, to…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…ide{visibility:visible;opacity:0.75;filter:alpha(opacity=75)}.ui_actions_menu_item.ui_actions_menu…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…th:13px;visibility:hidden;opacity:0;filter:alpha(opacity=0);-o-transition:visibility 100ms ease, o…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…er:none}}.ui_zoom_icon{opacity:0.75;filter:alpha(opacity=75);width:13px;height:13px;margin:0 auto;…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…g?4) no-repeat 0 -40px;opacity:0.85;filter:alpha(opacity=85);width:8px;height:8px}@media (-webkit-…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…l_bar_container{opacity:0!important;filter:alpha(opacity=0)!important;pointer-events:none}.mobile …
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…&gt;.ui_scroll_bar_container{opacity:0;filter:alpha(opacity=0)}.ui_scroll_hidden.ui_scroll_dragging&gt;.…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…vents:none;left:0;right:0;opacity:0;filter:alpha(opacity=0)}.ui_scroll_shadow_top{top:0}.ui_scroll…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…r_hidden .scrollbar_inner{opacity:0;filter:alpha(opacity=0)}.scrollbar_cont.scrollbar_hidden.scrol…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…list_item_wrap_disabled{opacity:0.5;filter:alpha(opacity=50);pointer-events:none}.olist_item{heigh…
----------------------------------------------------------------^
RightParenthesis is expected
   26 |…g?7) no-repeat 0 -255px;opacity:0.6;filter:alpha(opacity=60)}@media (-webkit-min-device-pixel-rati…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…k{background-color:#000;opacity:0.7;filter:alpha(opacity=70);height:50px;border-radius:4px;box-sha…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…width:12px;height:12px;opacity:0.75;filter:alpha(opacity=75);cursor:pointer;outline:none}@media (-…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…2px;background:#575a5c;opacity:0.12;filter:alpha(opacity=12)}.box_dark .tabbed_box .summary_tabs{p…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…2px;background:#575a5c;opacity:0.12;filter:alpha(opacity=12)}.box_dark .tabbed_box .summary_tabs{p…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…ight:100%;background:#000;opacity:0;filter:alpha(opacity=0);-o-transition:opacity 100ms linear;tra…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…-size:12.5px;color:#fff;opacity:0.5;filter:alpha(opacity=50);-o-transition:opacity 100ms linear;tr…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…tl:hover #layer_stl_bg{opacity:0.15;filter:alpha(opacity=15)}body.mac #layer_stl .fixed{-webkit-tr…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…ayer_bg{background:#000;opacity:0.7;filter:alpha(opacity=70)}#box_layer{padding:1px 0 80px}@-moz-d…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…27em}.checkbox.disabled{opacity:0.5;filter:alpha(opacity=50)}.checkbox:before{display:block;conten…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…n.png?6) no-repeat 0 0;opacity:0.12;filter:alpha(opacity=12);cursor:pointer;-o-transition:opacity …
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…x}}.summary_tab_x:hover{opacity:0.6;filter:alpha(opacity=60)}.summary_tab_count{font-size:11.5px;p…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…nd-position:1px -160px;opacity:0.45;filter:alpha(opacity=45)}.summary_tab_sel .summary_tab_x:hover…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…float:right;color:#656565;opacity:0;filter:alpha(opacity=0);font-size:13px;font-weight:400;-webkit…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…inter;position:absolute;opacity:0.4;filter:alpha(opacity=40);-o-transition:opacity 0.15s ease-in-o…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…y:none}.button_disabled{opacity:0.7;filter:alpha(opacity=70)}.button_disabled button{cursor:defaul…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…n:none}.button_disabled{opacity:0.7;filter:alpha(opacity=70)}.flat_button.secondary.button_light{b…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…edf2}.audio_inline_player{opacity:0;filter:alpha(opacity=0)}.audio_row__player_transition .audio_i…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…bg_dark{background:#000;opacity:0.8;filter:alpha(opacity=80)}.audio_pl_snippet{border-radius:2px;b…
----------------------------------------------------------------^</pre></details></td><td><details><summary>34 warnings</summary><pre>Invalid value for `width`
     value: device-width
    --------^
Invalid value for `font`
     value: 12px/1
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://gw.alicdn.com/tps/TB1uq_RKXXXXXblXFXX…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(//ae01.alicdn.com/tps/i3/TB1E9_3GVXXXXX4XpXXe…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://gw.alicdn.com/tps/TB1U3TOKXXXXXcyXFXX…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://gw.alicdn.com/tps/TB1BTHJKXXXXXX9XVXX…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://gw.alicdn.com/tps/TB170P2KXXXXXX0XpXX…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://gw.alicdn.com/tps/TB1xWuxJXXXXXaMXpXX…
    --------^
Invalid value for `background-image` × 2
     value: -webkit-image-set(url(https://gw.alicdn.com/tps/TB1YwqaJXXXXXarapXX…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://gw.alicdn.com/tps/TB1NaWpJXXXXXckXFXX…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://gw.alicdn.com/tps/TB1YOegJXXXXXc7XVXX…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://gw.alicdn.com/tps/TB1aeupJXXXXXbTXFXX…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://gw.alicdn.com/tps/TB1a69pJXXXXXbaXFXX…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://gw.alicdn.com/tps/TB1oWCBJXXXXXajXXXX…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://gw.alicdn.com/tps/TB1KMSrJXXXXXchXFXX…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://gw.alicdn.com/tps/TB1P4KBJXXXXXbkXXXX…
    --------^
Invalid value for `background-image`
     value: radial-gradient(0 252%,#FF6F0A 50%,#FF3200 100%)
    --------------------------^
Invalid value for `right`
     value: -200
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#ffab02,#ff8a28)
    ------------------------^
Node has no children × 55
Invalid value for `background-image`
     value: linear-gradient(top,#ffbc35,#f2a210)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fafafa,#e8e8e8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fafafa,#f2f2f2)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#e6e6e6)
    ------------------------^
Unknown property `-webkit--moz-box-pack`
The rest part of value can't be matched to `-moz-box-flex` grammar
     value: 1 1 auto
    ----------^
Invalid value for `-moz-box-flex`
     value: none
    --------^
Invalid value for `white-space`
     value: -1
    --------^
Invalid value for `font-weight`
     value: 700px
    --------^
The rest part of value can't be matched to `background-color` grammar
     value: #FFEACD none
    ----------------^
Invalid value for `cursor`
     value: normal
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(/ae-footer/20170227134848/common/img/android.…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(/ae-footer/20170227134848/common/img/apple.pn…
    --------^
Invalid value for `-webkit-perspective` × 2
     value: 1000
    --------^</pre></details></td></tr>
<tr><td>52</td><td>⚠️</td><td>google.es</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>53</td><td>⚠️</td><td>xhamster.com</td><td colspan="2">–</td></tr>
<tr><td>54</td><td>⚠️</td><td>msn.com</td><td>OK</td><td><details><summary>5 warnings</summary><pre>Invalid value for `color` × 2
     value: .04rem
    --------^
Invalid value for `filter`
     value: 0
    --------^
Invalid value for `background`
     value: -webkit-linear-gradient(to right,transparent 0%,#000 100%)
    --------------------------------^
Invalid value for `background` × 3
     value: -webkit-linear-gradient(to top,#000 30%,transparent 100%) repeat sc…
    --------------------------------^
Invalid value for `background` × 2
     value: -webkit-linear-gradient(to top,#000 63%,transparent 100%) repeat sc…
    --------------------------------^</pre></details></td></tr>
<tr><td>55</td><td>⚠️</td><td>linkedin.com</td><td colspan="2">–</td></tr>
<tr><td>56</td><td>🆗</td><td>deloton.com</td><td>OK</td><td>OK</td></tr>
<tr><td>57</td><td>⚠️</td><td>google.com.mx</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>58</td><td>⚠️</td><td>amazon.co.jp</td><td><details><summary>Errors: 11</summary><pre>Unexpected input
   68 |….a-lt-ie9 .feed-carousel .feed-left{zoom:1;filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Unexpected input
   68 |…a-lt-ie9 .feed-carousel .feed-right{zoom:1;filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Identifier or asterisk is expected
   68 |…color:#FFF;vertical-align:baseline;white-space:nowrap}*|:-moz-full-screen-ancestor{transform:initi…
----------------------------------------------------------------^
Identifier or asterisk is expected
   68 |…color:#FFF;vertical-align:baseline;white-space:nowrap}*|:-moz-full-screen-ancestor{transform:initi…
----------------------------------------------------------------^
RightParenthesis is expected
   72 |…d-color:#000;-ms-filter:opacity(.6);filter:alpha(opacity=60);-webkit-opacity:.6;-moz-opacity:.6;-o…
----------------------------------------------------------------^
Unexpected input
   72 |…inset 0 1px 0 0 #fcf3dc;background:#f3ce72;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   72 |…ction-button:link:hover{background:#f1c65a;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   72 |…;padding:0;cursor:pointer;opacity:0;filter:alpha(opacity=0);visibility:visible;border:0;line-heigh…
----------------------------------------------------------------^
RightParenthesis is expected
   72 |…height:32px;-ms-filter:opacity(.95);filter:alpha(opacity=95);-webkit-opacity:.95;-moz-opacity:.95;…
----------------------------------------------------------------^
RightParenthesis is expected
   72 |…av-feed-arrow{-ms-filter:opacity(0);filter:alpha(opacity=0);-webkit-opacity:0;-moz-opacity:0;-o-op…
----------------------------------------------------------------^
Unexpected input
   72 |…-box;background:#eff0f3;background:#eff0f3;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>20 warnings</summary><pre>Invalid value for `background`
     value: -webkit-linear-gradient(to right,#f6f6f6,rgba(255,255,255,0),#f6f6f…
    --------------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3…
    --------------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to right,#fff,rgba(255,255,255,0),#fff)
    --------------------------------^
Invalid value for `color` × 4
     value: a_nullable_with_important()
    --------^
Invalid value for `margin-right`
     value: none
    --------^
Invalid value for `left`
     value: -
    --------^
Invalid value for `right`
     value: -
    --------^
Invalid value for `top`
     value: -
    --------^
Node has no children × 9
Invalid value for `vertical-align`
     value: center
    --------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to bottom,#cb0400,#a50200)
    --------------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to bottom,#cb0400,#a50200)
    -----------------------------^
Invalid value for `background-image`
     value: -ms-linear-gradient(to bottom,#cb0400,#a50200)
    ----------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to bottom,#cb0400,#a50200)
    ---------------------------^
Invalid value for `-ms-filter`
     value: opacity(.6)
    --------^
Invalid value for `-ms-filter`
     value: opacity(.95)
    --------^
Invalid value for `-ms-filter`
     value: opacity(0)
    --------^
Invalid value for `background`
     value: -webkit-gradient(linear,left top,left bottom,color-stop(0,#ddd),col…
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: linear-gradient(top,#ddd,#f7f7f7 3px,#fff)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(left,#fff,rgba(255,255,255,0),#fff)
    ------------------------^</pre></details></td></tr>
<tr><td>59</td><td>🆗</td><td>popads.net</td><td>OK</td><td>OK</td></tr>
<tr><td>60</td><td>⚠️</td><td>hao123.com</td><td><details><summary>Errors: 23</summary><pre>RightParenthesis is expected
    4 |…ht:100px;background:#000;opacity:.2;filter:alpha(opacity=20)}.g-imglink:hover{padding:0;text-decor…
----------------------------------------------------------------^
Unexpected input
    4 |…dient(to bottom,rgba(0,0,0,0) 0,#000 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…x;width:24px;height:24px;opacity:.6;filter:alpha(opacity=60)}.s-slider2 .grid_hover .g-slider-prev…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…er2 .g-slider-next:hover{opacity:.9;filter:alpha(opacity=90)}
----------------------------------------------------------------^
RightParenthesis is expected
   12 |…ht:24px;margin-top:-12px;opacity:.6;filter:alpha(opacity=60)}.slider--nav-1 .slider__nav:hover{opa…
----------------------------------------------------------------^
RightParenthesis is expected
   12 |…nav-1 .slider__nav:hover{opacity:.9;filter:alpha(opacity=90)}.slider--nav-1 .slider__nav--prev{lef…
----------------------------------------------------------------^
RightParenthesis is expected
   12 |…ht:30px;margin-top:-15px;opacity:.6;filter:alpha(opacity=60)}.slider--nav-3 .slider__nav:hover{opa…
----------------------------------------------------------------^
RightParenthesis is expected
   12 |…nav-3 .slider__nav:hover{opacity:.9;filter:alpha(opacity=90)}.slider--nav-3 .slider__nav--prev{lef…
----------------------------------------------------------------^
Unexpected input
   13 |…ent(top,rgba(0,0,0,0),#000);_background:0;_filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   43 |…tion:none;background:rgba(255,255,255,.33);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   44 |…bottom:0;_zoom:1;background:rgba(0,0,0,.2);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   46 |…100%;background:#f3f3f3;opacity:.97;filter:alpha(opacity=97)}.search-fixed .border-shadow{overflow…
----------------------------------------------------------------^
RightParenthesis is expected
   46 |…35px;background:#f0f0f0;opacity:.75;filter:alpha(opacity=75)}.search-fixed .hotsearchCon,.search-f…
----------------------------------------------------------------^
RightParenthesis is expected
   63 |…on:absolute;z-index:500;opacity:.6;*filter:alpha(opacity=60);filter:alpha(opacity=60)\0;_top:0;_le…
----------------------------------------------------------------^
RightParenthesis is expected
   63 |…pacity:.6;*filter:alpha(opacity=60);filter:alpha(opacity=60)\0;_top:0;_left:0}.popup-forever-w i{b…
----------------------------------------------------------------^
Unexpected input
   66 |…ckground-position:0 -56px;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   66 |…ie{width:62px;height:51px;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   66 |…ound-position:-88px -56px;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   66 |…ckground-position:-70px 0;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
   66 |…kground-position:-144px 0;_background:0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
RightParenthesis is expected
   71 |…ition:absolute;width:9px;opacity:.3;filter:alpha(opacity=30);z-index:595;display:none}.top-scroll-…
----------------------------------------------------------------^
Unexpected input
   81 |…left;width:898px;background:rgba(0,0,0,.3);filter:progid:DXImageTransform.Microsoft.Gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
   81 |…r .popup-site .popup-site-cms dt{top:21px;_top:23px zoom:1;display:block}.width-nr .popup-site-w{w…
----------------------------------------------------------------^</pre></details></td><td><details><summary>2 warnings</summary><pre>Node has no children × 23
Invalid value for `line-height`
     value: 26px9
    --------^</pre></details></td></tr>
<tr><td>61</td><td>⚠️</td><td>wordpress.com</td><td><details><summary>Errors: 2</summary><pre>RightParenthesis is expected
  132 |…nslateY(-50%);right:0;}}}@media screen and (min-width:0 \0) and (min-resolution:72dpi){.hp-segment…
----------------------------------------------------------------^
RightParenthesis is expected
  132 |…howcase img{width:100%;}}@media screen and (min-width:0 \0) and (min-resolution:72dpi) and (max-wi…
----------------------------------------------------------------^</pre></details></td><td><details><summary>6 warnings</summary><pre>The rest part of value can't be matched to `-moz-transition` grammar
     value: color .1s ease-in 0
    --------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: color .1s ease-in 0
    --------------------------^
Invalid value for `display` × 3
     value: -moz-flex
    --------^
Invalid value for `transition-duration`
     value: 0
    --------^
Invalid value for `background-repeat`
     value: "no-repeat"
    --------^
Invalid value for `left`
     value: -500
    --------^</pre></details></td></tr>
<tr><td>62</td><td>⚠️</td><td>office.com</td><td>OK</td><td><details><summary>3 warnings</summary><pre>Invalid value for `-ms-filter`
     value: FlipV
    --------^
The rest part of value can't be matched to `background-color` grammar
     value: #e6e6e6 a
    ----------------^
Unknown property `background-color-color`</pre></details></td></tr>
<tr><td>63</td><td>⚠️</td><td>whatsapp.com</td><td>OK</td><td><details><summary>10 warnings</summary><pre>Invalid value for `font`
     value: Helvetica,Arial,sans-serif
    --------^
Invalid value for `overflow`
     value: overlay
    --------^
Unknown property `-webkit-margin-after` × 8
Unknown property `-webkit-margin-before` × 8
Unknown property `-webkit-margin-end` × 6
Unknown property `-webkit-margin-start` × 6
Unknown property `-webkit-padding-start` × 8
Unknown property `font-smooth` × 2
Invalid value for `max-height` × 4
     value: auto
    --------^
Invalid value for `white-space` × 4
     value: -pre-wrap
    --------^</pre></details></td></tr>
<tr><td>64</td><td>⚠️</td><td>google.com.tw</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>65</td><td>⚠️</td><td>google.com.tr</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>66</td><td>⚠️</td><td>livejasmin.com</td><td colspan="2">–</td></tr>
<tr><td>67</td><td>⚠️</td><td>blogspot.com</td><td>OK</td><td><details><summary>11 warnings</summary><pre>Invalid value for `display` × 7
     value: box
    --------^
Invalid value for `display` × 7
     value: -moz-flex
    --------^
Unknown property `font-smoothing`
Invalid value for `-webkit-transform`
     value: translate3d(0) scale(.8)
    --------------------^
Invalid value for `-moz-transform`
     value: translate3d(0) scale(.8)
    --------------------^
Invalid value for `-ms-transform`
     value: translate3d(0) scale(.8)
    --------------------^
Invalid value for `-o-transform`
     value: translate3d(0) scale(.8)
    --------------------^
Invalid value for `transform`
     value: translate3d(0) scale(.8)
    --------------------^
Invalid value for `-webkit-transition-delay` × 2
     value: 0
    --------^
Invalid value for `-moz-transition-delay` × 2
     value: 0
    --------^
Invalid value for `transition-delay` × 2
     value: 0
    --------^</pre></details></td></tr>
<tr><td>68</td><td>⚠️</td><td>bongacams.com</td><td><details><summary>Errors: 44</summary><pre>Unexpected input
   17 |…,.2) 0%,#fff 5px,rgba(255,255,255,0) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…ckground-color:#000;-moz-opacity:.6;filter:alpha(opacity=60);opacity:.6;z-index:10000}.popups_cont…
----------------------------------------------------------------^
Unexpected input
   17 |…gradient(to right,#fdfdfd 0%,#f9f9f9 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…ottom,#a32756 0%,#921e4a 50%,#7a183d 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…ncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…uto}.bt30[disabled]{-moz-opacity:.6;filter:alpha(opacity=60);opacity:.6}#bt30_free_tokens:hover sp…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…-shadow:1px 1px 1px #000;-webkit-filter:dropshadow(color=#000, offx=1, offy=1);filter:dropshadow(c…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…adow(color=#000, offx=1, offy=1);filter:dropshadow(color=#000, offx=1, offy=1);-webkit-border-radi…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…ckground-color:#000;-moz-opacity:.6;filter:alpha(opacity=60);opacity:.6;z-index:1111}.bcf-popup .b…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…-shadow:1px 1px 1px #000;-webkit-filter:dropshadow(color=#000, offx=1, offy=1);filter:dropshadow(c…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…adow(color=#000, offx=1, offy=1);filter:dropshadow(color=#000, offx=1, offy=1);float:left}.jl_aler…
----------------------------------------------------------------^
Unexpected input
   17 |…radient(to bottom,#cd3753 0%,#a5273e 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…radient(to bottom,#f0f0f0 0%,#d8d8d8 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…0;left:0;width:450px;-moz-opacity:0;filter:alpha(opacity=0);opacity:0;font-size:150px;height:30px;…
----------------------------------------------------------------^
Unexpected input
   17 |…radient(to bottom,#a02239 1%,#a5273e 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…ottom,#41a3e2 0%,#2f91d0 50%,#2082c1 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…radient(to bottom,#f0f0f0 0%,#d8d8d8 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…0;left:0;width:450px;-moz-opacity:0;filter:alpha(opacity=0);opacity:0;font-size:150px;height:30px;…
----------------------------------------------------------------^
Unexpected input
   17 |… bottom,#6dbc03 0%,#539701 100%)!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…radient(to bottom,#3b9e00 0%,#348c00 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…4f4 0%,#f9f9f9 50%,#fdfdfd 100%)!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…gradient(to bottom,#3b9e00 0,#348c00 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |… 55%,#f2f2f2 60%,#dedede 70%,#dedede 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…px;zoom:1;background:rgba(0,0,0,.4);filter:alpha(opacity=80);opacity:.8;border:1px solid #000;font…
----------------------------------------------------------------^
Unexpected input
   17 |…(to right,rgba(255,255,255,0) 0,#fff 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…kit-border-radius:0;border-radius:0;filter:alpha(opacity=100);opacity:1}.mls .mls_item.mls_item_vi…
----------------------------------------------------------------^
Unexpected input
   17 |…gradient(to bottom,#dedede 0,#d2d2d2 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…gradient(to bottom,#dedede 0,#d2d2d2 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…gradient(to bottom,#ededed 0,#fdfdfd 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…t(to right,rgba(255,255,255,.2),#fff 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…ottom,#fcfcfc 0%,#fbfbfb 52%,#fafafa 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…ottom,#fcfcfc 0%,#f6f6f6 52%,#f3f3f3 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…ottom,#efefef 0%,#f1f1f1 52%,#f5f5f5 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…rder:#069 1px solid;-moz-opacity:.3;filter:alpha(opacity=30);opacity:.3}#bCamOnline{display:none;m…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…MenuRight .disabled{-moz-opacity:.5;filter:alpha(opacity=50);opacity:.5}.topMenuRight a.nolink{col…
----------------------------------------------------------------^
Unexpected input
   17 |…r-gradient(to bottom,#fff 0%,#fafafa 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…radient(to bottom,#fcfcfc 0%,#ececec 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…stop(1%,#f1f1f1),color-stop(100%,#e3e3e3));filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…ottom,#fefefe 1%,#f3f3f3 44%,#ececec 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…p:0;margin:0;opacity:.5;z-index:100;filter:Alpha(Opacity=50)}.photo_comments .comment .disabled .s…
----------------------------------------------------------------^
Unexpected input
   17 |…radient(to bottom,#b92f48 0%,#881d31 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…ottom,#fdfdfd 1%,#f6f6f6 50%,#eeeeef 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…r-gradient(to bottom,#fff 0%,#ececec 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   17 |…ottom,#f8f8f8 0%,#f4f4f4 50%,#f2f2f2 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>7 warnings</summary><pre>Node has no children × 44
Invalid value for `behavior`
     value: ''
    --------^
The rest part of value can't be matched to `border-color` grammar
     value: #ddd #ddd #ddd -moz-use-text-color
    -----------------------^
Invalid value for `background`
     value: -moz-linear-gradient(center top,#63a6cf 5%,#2587c0 100%)
    -----------------------------^
Invalid value for `opacity`
     value: 100
    --------^
Invalid value for `white-space`
     value: -moz-pre-wrap
    --------^
Invalid value for `white-space`
     value: -o-pre-wrap
    --------^</pre></details></td></tr>
<tr><td>69</td><td>⚠️</td><td>google.com.au</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>70</td><td>⚠️</td><td>xnxx.com</td><td><details><summary>Errors: 7</summary><pre>RightParenthesis is expected
   24 |….btn{cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;-moz-box-shad…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…;left:0;position:absolute;opacity:0;filter:alpha(opacity=0)}.ui-front{z-index:100}.ui-state-disabl…
----------------------------------------------------------------^
RightParenthesis is expected
   71 |…r .ui-priority-secondary{opacity:.7;filter:alpha(opacity=70);font-weight:400}.ui-state-disabled,.u…
----------------------------------------------------------------^
RightParenthesis is expected
   71 |…ader .ui-state-disabled{opacity:.35;filter:alpha(opacity=35);background-image:none}.ui-state-disab…
----------------------------------------------------------------^
RightParenthesis is expected
   71 |…ge:none}.ui-state-disabled .ui-icon{filter:alpha(opacity=35)}.ui-icon{width:16px;height:16px}.ui-i…
----------------------------------------------------------------^
RightParenthesis is expected
   71 |…00.png) 50% 50% repeat-x;opacity:.3;filter:alpha(opacity=30)}.ui-widget-shadow{margin:-8px 0 0 -8p…
----------------------------------------------------------------^
RightParenthesis is expected
   71 |…00.png) 50% 50% repeat-x;opacity:.3;filter:alpha(opacity=30);-webkit-border-radius:8px;-moz-border…
----------------------------------------------------------------^</pre></details></td><td><details><summary>3 warnings</summary><pre>Node has no children × 7
Invalid value for `width`
     value: device-width
    --------^
Invalid value for `color`
     value: yellow-theme
    --------^</pre></details></td></tr>
<tr><td>71</td><td>⚠️</td><td>paypal.com</td><td><details><summary>Errors: 7</summary><pre>RightParenthesis is expected
   13 |…;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-front{z-index:100}.ui-state-disabl…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…r3aElaqrq56Bq7VAAAOw==);height:100%;filter:alpha(opacity=25);opacity:.25}.ui-progressbar-indetermi…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…r .ui-priority-secondary{opacity:.7;filter:Alpha(Opacity=70);font-weight:400}.ui-state-disabled,.u…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…ader .ui-state-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none}.ui-state-disab…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…ge:none}.ui-state-disabled .ui-icon{filter:Alpha(Opacity=35)}.ui-icon{width:16px;height:16px}.ui-i…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…verlay{background:#aaa;opacity:.003;filter:Alpha(Opacity=.3)}.ui-widget-shadow{box-shadow:0 0 5px …
----------------------------------------------------------------^
Unexpected input
   15 |…ute;top:72px}}.no-svg .pp-header.table-row{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>8 warnings</summary><pre>Node has no children × 7
Invalid value for `width`
     value: device-width
    --------^
The rest part of value can't be matched to `transition` grammar × 2
     value: all 0 ease 0
    ------------^
Invalid value for `display`
     value: none\8
    --------^
Unknown property `-webkit-padding-start`
Unknown property `padding-start`
The rest part of value can't be matched to `-webkit-animation` grammar
     value: headerclose .4s steps(10,end) 1 .3s 0 ease
    --------------------------------------------^
Invalid value for `-moz-background-clip`
     value: content
    --------^</pre></details></td></tr>
<tr><td>72</td><td>⚠️</td><td>microsoftonline.com</td><td colspan="2">–</td></tr>
<tr><td>73</td><td>⚠️</td><td>github.com</td><td>OK</td><td><details><summary>15 warnings</summary><pre>Invalid value for `background-color`
     value: none
    --------^
Invalid value for `-webkit-user-select`
     value: contain
    --------^
Invalid value for `-moz-user-select`
     value: contain
    --------^
Invalid value for `opacity`
     value: 100
    --------^
Invalid value for `width`
     value: -webkit-max-content
    --------^
Invalid value for `width`
     value: -moz-max-content
    --------^
Invalid value for `word-wrap`
     value: break-all
    --------^
Invalid value for `max-width`
     value: auto
    --------^
The rest part of value can't be matched to `transform` grammar
     value: rotate(-45deg),scaleX(-1)
    ----------------------^
Invalid value for `visibility`
     value: none
    --------^
Invalid value for `width`
     value: -webkit-fit-content
    --------^
Invalid value for `width`
     value: -moz-fit-content
    --------^
Invalid value for `box-shadow`
     value: 0
    --------^
Invalid value for `align-items`
     value: top
    --------^
Invalid value for `border-color`
     value: none
    --------^</pre></details></td></tr>
<tr><td>74</td><td>⚠️</td><td>apple.com</td><td>OK</td><td><details><summary>6 warnings</summary><pre>Unknown property `x-content` × 92
Invalid value for `-ms-text-justify`
     value: distribute-all-lines
    --------^
Invalid value for `text-justify`
     value: distribute-all-lines
    --------^
Invalid value for `-webkit-transition-delay`
     value: 0
    --------^
Invalid value for `transition-delay`
     value: 0
    --------^
Unknown property `alt` × 37</pre></details></td></tr>
<tr><td>75</td><td>⚠️</td><td>tribunnews.com</td><td><details><summary>Errors: 9</summary><pre>RightParenthesis is expected
    4 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
    6 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
Unexpected input
   79 |…g);transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   79 |…eg);transform:rotate(90deg)}.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   79 |…g);transform:rotate(180deg)}.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   79 |…ansform:rotate(270deg)}.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   79 |…);transform:scale(-1, 1)}.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
RightParenthesis is expected
   84 |…ding:10px;font-size:250%;opacity:.6;filter:alpha(opacity=60)}.ontop:hover{opacity:1;filter:alpha(o…
----------------------------------------------------------------^
RightParenthesis is expected
   84 |…(opacity=60)}.ontop:hover{opacity:1;filter:alpha(opacity=100)}.navimges{clear:both;text-align:left…
----------------------------------------------------------------^</pre></details></td><td><details><summary>12 warnings</summary><pre>Node has no children × 8
Unknown property `font-smooth`
Unknown property `-moz-font-smoothing`
Unknown property `font-smoothing`
Unknown property `webkit-box-shadow`
Invalid value for `background-color`
     value: none
    --------^
Invalid value for `z-index`
     value: 1000px
    --------^
Invalid value for `display`
     value: box
    --------^
Invalid value for `border-radius`
     value: none
    --------^
Unknown property `font-weigth`
Unknown property `center` × 2
Invalid value for `width` × 2
     value: device-width
    --------^</pre></details></td></tr>
<tr><td>76</td><td>⚠️</td><td>stackoverflow.com</td><td><details><summary>Errors: 1</summary><pre>RightParenthesis is expected
    5 |…:none;background:#0C0D0E;opacity:.7;filter:alpha(opacity=70);position:absolute;top:0;left:0;min-wi…
----------------------------------------------------------------^</pre></details></td><td><details><summary>10 warnings</summary><pre>Invalid value for `-ms-flex-wrap`
     value: none
    --------^
Invalid value for `flex-wrap`
     value: none
    --------^
Invalid value for `min-width`
     value: none
    --------^
Invalid value for `min-height`
     value: none
    --------^
Invalid value for `align-items` × 3
     value: right
    --------^
Invalid value for `grid-template-columns`
     value: -webkit-max-content 1fr
    --------^
Invalid value for `grid-template-columns`
     value: repeat(auto-fill,minmax(250px,1fr))
    ---------------^
Invalid value for `grid-template-columns`
     value: repeat(auto-fit,minmax(130px,1fr))
    ---------------^
Invalid value for `display`
     value: -ms-flex
    --------^
Node has no children</pre></details></td></tr>
<tr><td>77</td><td>⚠️</td><td>diply.com</td><td><details><summary>Errors: 2</summary><pre>RightParenthesis is expected
   10 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
   12 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^</pre></details></td><td><details><summary>2 warnings</summary><pre>Node has no children
Unknown property `-ms-grid-columns`</pre></details></td></tr>
<tr><td>78</td><td>⚠️</td><td>savefrom.net</td><td><details><summary>Errors: 7</summary><pre>Unexpected input
   18 |…p,rgba(7,20,30,.7) 0,rgba(7,20,30,0) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   18 |…x 14px 6px;max-width:275px;text-align:left;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   18 |…ge:-o-linear-gradient(top,#bc5f5f,#a74040);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…er{background-color:#777;opacity:.6;filter:alpha(opacity=60);content:'';position:absolute;top:0;le…
----------------------------------------------------------------^
Unexpected input
   18 |…ar-gradient(135deg,#376f9d 0,#66cdcc 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   18 |…ff 0,#2a5bff 17%,#643ec1 58%,#93278f 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   18 |…gradient(to bottom,#eeeae4 0,#d8d0c2 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>9 warnings</summary><pre>Invalid value for `-webkit-box-flex` × 6
     value: none
    --------^
Invalid value for `-moz-box-flex` × 6
     value: none
    --------^
Invalid value for `-webkit-box-flex` × 4
     value: auto
    --------^
Invalid value for `-moz-box-flex` × 4
     value: auto
    --------^
Invalid value for `-webkit-box-align`
     value: flex-start
    --------^
Invalid value for `-ms-flex-align`
     value: flex-start
    --------^
Node has no children × 7
Invalid value for `display` × 6
     value: -ms-flex
    --------^
Invalid value for `-ms-filter`
     value: none
    --------^</pre></details></td></tr>
<tr><td>79</td><td>⚠️</td><td>providr.com</td><td><details><summary>Errors: 8</summary><pre>RightParenthesis is expected
  138 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
  140 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
Unexpected input
  186 |…g);transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
  186 |…eg);transform:rotate(90deg)}.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
  186 |…g);transform:rotate(180deg)}.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
  186 |…ansform:rotate(270deg)}.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
  186 |…1);transform:scale(-1,1)}.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Identifier is expected
  186 |…le,.related-posts header .title a{height:auto!important;!important;margin-bottom:16px!important;fo…
----------------------------------------------------------------^</pre></details></td><td><details><summary>10 warnings</summary><pre>Invalid value for `visibility`
     value: none
    --------^
Invalid value for `max-height` × 2
     value: auto
    --------^
Node has no children × 6
Invalid value for `float` × 2
     value: auto
    --------^
The rest part of value can't be matched to `list-style` grammar
     value: outside none none
    ---------------------^
Unknown property `widht`
Unknown property `flow` × 2
Unknown property `font-color` × 2
Unknown property `align-text`
Unknown property `geight`</pre></details></td></tr>
<tr><td>80</td><td>⚠️</td><td>pinterest.com</td><td><details><summary>Errors: 7</summary><pre>RightParenthesis is expected
    4 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
    6 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
Unexpected input
  131 |      url: "https://s.pinimg.com/webapp/style/images/pin_grid-1x-51034067.jpg";
----------------^
Selector is expected
  479 |}
-------^
Colon is expected
  533 |  to {
------------^
RightParenthesis is expected
 17209 |  filter: alpha(opacity=70) !important;
-------------------------------^
RightParenthesis is expected
 17221 |  filter: alpha(opacity=70) !important;
-------------------------------^</pre></details></td><td><details><summary>41 warnings</summary><pre>Node has no children × 4
Invalid value for `width`
     value: auto9
    --------^
Invalid value for `-ms-grid-row-align` × 5
     value: flex-start
    --------^
Invalid value for `-ms-grid-row-align` × 3
     value: flex-end
    --------^
Invalid value for `-ms-grid-row-align` × 3
     value: baseline
    --------^
Unknown property `border-top-radius`
Invalid value for `position`
     value: -moz-sticky
    --------^
Invalid value for `position`
     value: -ms-sticky
    --------^
Invalid value for `position`
     value: -o-sticky
    --------^
Invalid value for `-webkit-transition-delay`
     value: 0
    --------^
Invalid value for `transition-delay`
     value: 0
    --------^
Invalid value for `-webkit-transition-duration`
     value: 0
    --------^
Invalid value for `transition-duration`
     value: 0
    --------^
Invalid value for `background-color`
     value: ligthen(#0f0f0f,2%)
    --------^
Invalid value for `background-color`
     value: none
    --------^
Invalid value for `max-width` × 3
     value: auto
    --------^
Invalid value for `border-radius` × 3
     value: none
    --------^
Invalid value for `-webkit-animation-timing-function`
     value: none
    --------^
Invalid value for `animation-timing-function`
     value: none
    --------^
The rest part of value can't be matched to `padding` grammar
     value: 6px auto
    ------------^
Unknown property `size` × 2
Invalid value for `opacity` × 12
     value: 100
    --------^
Invalid value for `font`
     value: 14px
    --------^
Invalid value for `line-height`
     value: auto
    --------^
Invalid value for `height` × 2
     value: 51
    --------^
Invalid value for `width` × 2
     value: 51
    --------^
The rest part of value can't be matched to `-o-object-position` grammar
     value: top 75%
    ------------^
The rest part of value can't be matched to `object-position` grammar
     value: top 75%
    ------------^
Invalid value for `font-size`
     value: #666
    --------^
Invalid value for `top`
     value: 21pxauto
    --------^
Invalid value for `box-shadow` × 2
     value: 0
    --------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: opacity transform .2s
    ----------------^
The rest part of value can't be matched to `transition` grammar
     value: opacity transform .2s
    ----------------^
The rest part of value can't be matched to `border` grammar
     value: 0 0 auto
    ----------^
Invalid value for `font-weight` × 2
     value: regular
    --------^
Invalid value for `font-weight` × 2
     value: 700px
    --------^
Invalid value for `letter-spacing` × 2
     value: -.2
    --------^
Invalid value for `color`
     value: "#a9a9a9"
    --------^
Unknown property `composes` × 3
The rest part of value can't be matched to `-webkit-transition` grammar
     value: left sease .2s
    -------------^
The rest part of value can't be matched to `transition` grammar
     value: left sease .2s
    -------------^</pre></details></td></tr>
<tr><td>81</td><td>⚠️</td><td>fbcdn.net</td><td>OK</td><td><details><summary>3 warnings</summary><pre>Invalid value for `font`
     value: Helvetica,Arial,sans-serif
    --------^
Invalid value for `overflow`
     value: overlay
    --------^
Invalid value for `align-items`
     value: left
    --------^</pre></details></td></tr>
<tr><td>82</td><td>⚠️</td><td>chaturbate.com</td><td>OK</td><td><details><summary>6 warnings</summary><pre>Invalid value for `filter`
     value: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f67300…
    --------^
Unknown property `-webkit-margin-start` × 2
Unknown property `-webkit-margin-before`
Unknown property `-webkit-margin-after`
Unknown property `-webkit-margin-end`
Unknown property `-webkit-padding-start`</pre></details></td></tr>
<tr><td>83</td><td>⚠️</td><td>google.pl</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>84</td><td>⚠️</td><td>amazon.de</td><td><details><summary>Errors: 11</summary><pre>Unexpected input
  116 |….a-lt-ie9 .feed-carousel .feed-left{zoom:1;filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Unexpected input
  116 |…a-lt-ie9 .feed-carousel .feed-right{zoom:1;filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Identifier or asterisk is expected
  116 |…color:#FFF;vertical-align:baseline;white-space:nowrap}*|:-moz-full-screen-ancestor{transform:initi…
----------------------------------------------------------------^
Identifier or asterisk is expected
  116 |…color:#FFF;vertical-align:baseline;white-space:nowrap}*|:-moz-full-screen-ancestor{transform:initi…
----------------------------------------------------------------^
RightParenthesis is expected
  118 |…d-color:#000;-ms-filter:opacity(.6);filter:alpha(opacity=60);-webkit-opacity:.6;-moz-opacity:.6;-o…
----------------------------------------------------------------^
Unexpected input
  118 |…inset 0 1px 0 0 #fcf3dc;background:#f3ce72;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  118 |…ction-button:link:hover{background:#f1c65a;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  118 |…;padding:0;cursor:pointer;opacity:0;filter:alpha(opacity=0);visibility:visible;border:0;line-heigh…
----------------------------------------------------------------^
RightParenthesis is expected
  118 |…height:32px;-ms-filter:opacity(.95);filter:alpha(opacity=95);-webkit-opacity:.95;-moz-opacity:.95;…
----------------------------------------------------------------^
RightParenthesis is expected
  118 |…av-feed-arrow{-ms-filter:opacity(0);filter:alpha(opacity=0);-webkit-opacity:0;-moz-opacity:0;-o-op…
----------------------------------------------------------------^
Unexpected input
  118 |…-box;background:#eff0f3;background:#eff0f3;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>20 warnings</summary><pre>Invalid value for `background`
     value: -webkit-linear-gradient(to right,#f6f6f6,rgba(255,255,255,0),#f6f6f…
    --------------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3…
    --------------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to right,#fff,rgba(255,255,255,0),#fff)
    --------------------------------^
Invalid value for `color` × 4
     value: a_nullable_with_important()
    --------^
Invalid value for `margin-right`
     value: none
    --------^
Invalid value for `left`
     value: -
    --------^
Invalid value for `right`
     value: -
    --------^
Invalid value for `top`
     value: -
    --------^
Node has no children × 9
Invalid value for `vertical-align`
     value: center
    --------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to bottom,#cb0400,#a50200)
    --------------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to bottom,#cb0400,#a50200)
    -----------------------------^
Invalid value for `background-image`
     value: -ms-linear-gradient(to bottom,#cb0400,#a50200)
    ----------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to bottom,#cb0400,#a50200)
    ---------------------------^
Invalid value for `-ms-filter`
     value: opacity(.6)
    --------^
Invalid value for `-ms-filter`
     value: opacity(.95)
    --------^
Invalid value for `-ms-filter`
     value: opacity(0)
    --------^
Invalid value for `background`
     value: -webkit-gradient(linear,left top,left bottom,color-stop(0,#ddd),col…
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: linear-gradient(top,#ddd,#f7f7f7 3px,#fff)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(left,#fff,rgba(255,255,255,0),#fff)
    ------------------------^</pre></details></td></tr>
<tr><td>85</td><td>⚠️</td><td>youth.cn</td><td colspan="2">–</td></tr>
<tr><td>86</td><td>⚠️</td><td>soso.com</td><td><details><summary>Errors: 15</summary><pre>RightParenthesis is expected
    5 |…ition:fixed;height:114px;width:100%;filter:alpha(opacity=0);-moz-opacity:0;opacity:0;transition:op…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…2s ease;transition:opacity .2s ease;filter:alpha(opacity=100);-moz-opacity:1;opacity:1;z-index:3;d…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…olute;right:15px;top:36px;opacity:1;filter:alpha(opacity=100)}.c-top .pos-more a{padding:0;margin:…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…t:0;top:0;z-index:5;background:#fff;filter:alpha(opacity=70);-moz-opacity:.7;opacity:.7}.gjss-err{…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…xed;*position:absolute;left:0;top:0;filter:alpha(opacity=85);-moz-opacity:.85;opacity:.85;z-index:…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…xtpage{margin-left:-1px}.se_endpage{filter:alpha(opacity=50);opacity:.5}.se_tvpagebar{clear:both;w…
----------------------------------------------------------------^
Unexpected input
    7 |…ff;width:31px;height:28px;line-height:28px;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…border:1px solid #cacaca;border-radius:2px;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…3{height:17px;background-color:#000;filter:alpha(opacity=50);opacity:.5;cursor:pointer}.se_vtimebg…
----------------------------------------------------------------^
Unexpected input
    7 |…:9pt;box-shadow:1px 1px 2px rgba(0,0,0,.1);filter:progid:DXImageTransform.Microsoft.Shadow(Color=#…
----------------------------------------------------------------^
Unexpected input
    7 |…round:-o-linear-gradient(top,#f9f9f9,#eee);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…t:left;margin-right:15px;opacity:.8;filter:alpha(opacity=80);position:relative}.mag-area .sw-info …
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…ound:#000;overflow:hidden;opacity:1;filter:alpha(opacity=100)}.hotmovie-img img{vertical-align:top…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…}.hotmovie-img:hover img{opacity:.5;filter:alpha(opacity=50)}.hotmovie-img .vr-mv-v2-play{display:…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…tem .sug-smpic:hover img{opacity:.5;filter:alpha(opacity=50)}.sug-starmovie .sug-smitem .sug-smpic…
----------------------------------------------------------------^</pre></details></td><td><details><summary>27 warnings</summary><pre>Invalid value for `background-image`
     value: -webkit-image-set(url(../images/ico_spy_mac.png) 2x,url(../images/i…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/ico_spy_mac.png) 2x,url(../images/ico_…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(../images/ico_beta2x.png) 2x,url(../images/ic…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/ico_beta2x.png) 2x,url(../images/ico_b…
    --------^
Invalid value for `background-image` × 6
     value: -webkit-image-set(url(../images/ico_spy2x.png) 2x,url(../images/ico…
    --------^
Invalid value for `background-image` × 6
     value: -moz-image-set(url(../images/ico_spy2x.png) 2x,url(../images/ico_sp…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(../images/logo_880x280.v.2.png) 2x,url(../ima…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/logo_880x280.v.2.png) 2x,url(../images…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(../images/logo_880x280_white.v.2.png) 2x,url(…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/logo_880x280_white.v.2.png) 2x,url(../…
    --------^
Invalid value for `background-image` × 2
     value: -webkit-image-set(url(../images/btn_card2x.png) 2x,url(../images/bt…
    --------^
Invalid value for `background-image` × 2
     value: -moz-image-set(url(../images/btn_card2x.png) 2x,url(../images/btn_c…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(../images/ico_erwm2.png) 2x,url(../images/ico…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/ico_erwm2.png) 2x,url(../images/ico_er…
    --------^
Invalid value for `background-image` × 2
     value: -webkit-image-set(url(../images/back_top_big.png) 2x,url(../images/…
    --------^
Invalid value for `background-image` × 2
     value: -moz-image-set(url(../images/back_top_big.png) 2x,url(../images/bac…
    --------^
Node has no children × 15
Invalid value for `background-image` × 2
     value: -webkit-image-set(url(../images/ico_spy_white2x.png) 2x,url(../imag…
    --------^
Invalid value for `background-image` × 2
     value: -moz-image-set(url(../images/ico_spy_white2x.png) 2x,url(../images/…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(../images/erweima2.png) 2x,url(../images/erwe…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/erweima2.png) 2x,url(../images/erweima…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(../images/ico_ft2x.gif?v=1) 2x,url(../images/…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/ico_ft2x.gif?v=1) 2x,url(../images/ico…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(../images/logo_300x116.png?v=1) 2x,url(../ima…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/logo_300x116.png?v=1) 2x,url(../images…
    --------^
The rest part of value can't be matched to `outline` grammar
     value: medium 0
    ---------------^
Unknown property `hiehgt`</pre></details></td></tr>
<tr><td>87</td><td>⚠️</td><td>txxx.com</td><td><details><summary>Errors: 14</summary><pre>RightParenthesis is expected
    5 |…9 .irs-disable-mask{background:#000;filter:alpha(opacity=0);cursor:not-allowed}.irs-disabled{opaci…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…000;opacity:.15}.lt-ie9 .irs-shadow{filter:alpha(opacity=15)}.irs-slider{width:22px;height:22px;to…
----------------------------------------------------------------^
Unexpected input
    5 |…:linear-gradient(180deg,#575a60 0,#64676d);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…er{width:28px;height:28px;opacity:0;filter:alpha(opacity=0);visibility:collapse;background:#fff;-w…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…vered .thumb__watch-later{opacity:1;filter:alpha(opacity=100);visibility:visible}.thumb.is_hovered…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…is_hovered .thumb-overlay{opacity:0;filter:alpha(opacity=0)}.thumb.is_hovered .thumb-pagination__i…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…d .thumb-pagination__item{opacity:1;filter:alpha(opacity=100)}.thumb.is_hovered .thumb__set-screen…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…one}.thumb__watch-later{opacity:.65;filter:alpha(opacity=65);visibility:visible}}.vert-menu{text-a…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…vered .thumb__watch-later{opacity:1;filter:alpha(opacity=100);visibility:visible}.un-grid-video .u…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…is_hovered .thumb-overlay{opacity:0;filter:alpha(opacity=0)}.un-grid-video .un-grid--thumb.is_hove…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…d .thumb-pagination__item{opacity:1;filter:alpha(opacity=100)}.un-grid-video .un-grid--thumb.is_ho…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ht:28px;position:absolute;opacity:0;filter:alpha(opacity=0);visibility:collapse;background:#fff;to…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…herit;display:block;font-size:999px;filter:alpha(opacity=0);min-height:100%;min-width:100%;opacity…
----------------------------------------------------------------^
Unexpected input
    5 |…ousel-chevron-left,.carousel-chevron-right{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>5 warnings</summary><pre>Node has no children × 14
Invalid value for `-ms-transform`
     value: matrix(-1,-14.7753532e,-17.2246468e,-1,0,0)
    ------------------^
Invalid value for `-ms-touch-action`
     value: cross-slide-y pinch-zoom double-tap-zoom
    --------^
Invalid value for `touch-action`
     value: cross-slide-y pinch-zoom double-tap-zoom
    --------^
Invalid value for `-webkit-perspective`
     value: 1000
    --------^</pre></details></td></tr>
<tr><td>88</td><td>⚠️</td><td>coccoc.com</td><td><details><summary>Errors: 6</summary><pre>RightParenthesis is expected
    7 |…annotation{background:rgba(0,0,0,0);filter:alpha(opacity=0);font-family:sans-serif;white-space:pre…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…v-button[disabled]:focus{opacity:.5;filter:alpha(opacity=50);cursor:auto;box-shadow:none}.iv-butto…
----------------------------------------------------------------^
Unexpected input
    9 |…d-repeat:no-repeat}.rc-anchor-logo-img-ie8{filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
RightParenthesis is expected
    9 |…s cubic-bezier(0.49,0.78,0.46,1.34);filter:alpha(opacity=0)}.rc-image-followup-tile{display:block}…
----------------------------------------------------------------^
Unexpected input
   11 |…d-repeat:no-repeat}.rc-anchor-logo-img-ie8{filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…s cubic-bezier(0.49,0.78,0.46,1.34);filter:alpha(opacity=0)}.rc-image-followup-tile{display:block}…
----------------------------------------------------------------^</pre></details></td><td><details><summary>9 warnings</summary><pre>Invalid value for `background-image`
     value: linear-gradient(bottom,#3b9b00 12%,#58bc00 72%)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(bottom,#febb45 12%,#e98800 72%)
    ------------------------^
Invalid value for `display` × 8
     value: -moz-flexbox
    --------^
Node has no children × 6
Invalid value for `-ms-filter`
     value: blur(20px)
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(20,20,20,0.6),rgba(209,209,209,0.6))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.8),rgba(0,0,0,0.7) 40%,rgba(0,0,0,…
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.4) 60%,rgba(0,0…
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#ffec7b,#dea405)
    ------------------------^</pre></details></td></tr>
<tr><td>89</td><td>⚠️</td><td>google.co.id</td><td colspan="2">–</td></tr>
<tr><td>90</td><td>⚠️</td><td>detail.tmall.com</td><td><details><summary>Errors: 4</summary><pre>RightParenthesis is expected
   18 |…ute;left:0;top:27px;background:#fff;filter:alpha(opacity=99);z-index:93110;border:solid #eee;borde…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…ame.menu-bd{border:0;background:0 0;filter:alpha(opacity=0);float:left;z-index:-1}#site-nav .menu-…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…e-cover{background:#000;opacity:.75;filter:alpha(opacity=50);position:absolute;width:100%;height:1…
----------------------------------------------------------------^
RightParenthesis is expected
   18 |…height:100%;border:0;background:0 0;filter:alpha(opacity=0)}#mallTextNav,#mallTextNav li{position:…
----------------------------------------------------------------^</pre></details></td><td><details><summary>3 warnings</summary><pre>Unknown property `dispaly`
Node has no children × 4
Invalid value for `filter`
     value: mask()
    --------^</pre></details></td></tr>
<tr><td>91</td><td>⚠️</td><td>k618.cn</td><td><details><summary>Errors: 8</summary><pre>String or Raw is expected
   65 |.u_nav a {padding: 0 13px;background: url() 0 11px no-repeat;}
-------------------------------------------------^
Selector is expected
   82 |&lt;style type="text/css"&gt;
-------^
Selector is expected
  142 |&lt;/style&gt;
-------^
Unexpected input
  210 |…ight: 30px; background: #000; opacity: .7; filter:progid:DXImageTransform.Microsoft.Alpha(opacity=…
----------------------------------------------------------------^
RightParenthesis is expected
  335 |… 30px;background: #000;opacity: .6;filter: alpha(opacity=60)}
----------------------------------------------------------------^
Unexpected input
  379 |…: hidden;background: #2D2D2D;opacity: 0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=…
----------------------------------------------------------------^
Unexpected input
  566 |… 0; width: 100%; height: 30px; opacity: 0; filter:progid:DXImageTransform.Microsoft.Alpha(opacity=…
----------------------------------------------------------------^
Unexpected input
  612 |…%; height: 44px; border: none; opacity: 0; filter:progid:DXImageTransform.Microsoft.Alpha(opacity=…
----------------------------------------------------------------^</pre></details></td><td><details><summary>2 warnings</summary><pre>Invalid value for `height` × 2
     value: 60x
    --------^
Node has no children × 6</pre></details></td></tr>
<tr><td>92</td><td>⚠️</td><td>pixnet.net</td><td colspan="2">–</td></tr>
<tr><td>93</td><td>⚠️</td><td>roblox.com</td><td colspan="2">–</td></tr>
<tr><td>94</td><td>⚠️</td><td>adobe.com</td><td><details><summary>Errors: 3</summary><pre>RightParenthesis is expected
  306 |…0 1px 2px rgba(0,0,0,.5);-webkit-filter:dropshadow(color=rgba(0, 0, 0, .5), offx=0px, offy=1px);fi…
----------------------------------------------------------------^
RightParenthesis is expected
  306 |…, 0, 0, .5), offx=0px, offy=1px);filter:dropshadow(color=rgba(0, 0, 0, .5), offx=0px, offy=1px)}.s…
----------------------------------------------------------------^
Identifier or parenthesis is expected
  306 |…78vh;z-index:9}@media screen and (max-aspect-ratio:3/4),27.1875rem{body.social .hash-window{height…
----------------------------------------------------------------^</pre></details></td><td><details><summary>25 warnings</summary><pre>Invalid value for `background-image`
     value: radial-gradient(40% 40%,ellipse cover,#000,#322205 76.69%)
    --------------------------------^
Invalid value for `background-image`
     value: radial-gradient(40% 40%,ellipse cover,#000,#332d24 76.69%)
    --------------------------------^
Invalid value for `background-image`
     value: radial-gradient(40% 40%,ellipse cover,#000,#002e2a 76.69%)
    --------------------------------^
Invalid value for `background-image`
     value: radial-gradient(40% 40%,ellipse cover,#000,#243230 76.69%)
    --------------------------------^
Invalid value for `background-image`
     value: radial-gradient(40% 40%,ellipse cover,#000,#2c2c2c 76.69%)
    --------------------------------^
Invalid value for `background-image`
     value: radial-gradient(40% 40%,ellipse cover,#000,#330e1b 76.69%)
    --------------------------------^
Invalid value for `background-image`
     value: radial-gradient(40% 40%,ellipse cover,#000,#003020 76.69%)
    --------------------------------^
Invalid value for `background-image`
     value: radial-gradient(40% 40%,ellipse cover,#000,#322e03 76.69%)
    --------------------------------^
Invalid value for `background-image`
     value: radial-gradient(40% 40%,ellipse cover,#000,#1c2b0a 76.69%)
    --------------------------------^
Invalid value for `background-image`
     value: radial-gradient(40% 40%,ellipse cover,#000,#002e18 76.69%)
    --------------------------------^
Invalid value for `background-image`
     value: radial-gradient(40% 40%,ellipse cover,#000,#27302c 76.69%)
    --------------------------------^
Invalid value for `background-image`
     value: radial-gradient(40% 40%,ellipse cover,#000,#16212b 76.69%)
    --------------------------------^
Invalid value for `background-image`
     value: radial-gradient(40% 40%,ellipse cover,#000,#332b00 76.69%)
    --------------------------------^
Invalid value for `background-image`
     value: radial-gradient(40% 40%,ellipse cover,#000,#331d00 76.69%)
    --------------------------------^
Node has no children × 2
Invalid value for `min-height`
     value: none
    --------^
The rest part of value can't be matched to `background` grammar
     value: no-repeat inherit none
    ------------------^
Invalid value for `-ms-flex-pack`
     value: space-evenly
    --------^
Invalid value for `height` × 2
     value: 'NaN'
    --------^
Invalid value for `min-height` × 2
     value: 'NaN'
    --------^
Invalid value for `position` × 2
     value: 'NaN'
    --------^
Invalid value for `-ms-flex-pack`
     value: left
    --------^
Unknown property `null` × 12
Unknown property `-webkit-locale`
Invalid value for `-ms-flex-pack`
     value: right
    --------^</pre></details></td></tr>
<tr><td>95</td><td>🆗</td><td>thepiratebay.org</td><td>OK</td><td>OK</td></tr>
<tr><td>96</td><td>⚠️</td><td>thestartmagazine.com</td><td>OK</td><td><details><summary>11 warnings</summary><pre>The rest part of value can't be matched to `-webkit-animation` grammar
     value: fx 1s ease infinite .5
    ----------------------------^
The rest part of value can't be matched to `animation` grammar
     value: fx 1s ease infinite .5
    ----------------------------^
The rest part of value can't be matched to `-webkit-animation` grammar
     value: fx 1s ease infinite 0
    ----------------------------^
The rest part of value can't be matched to `animation` grammar
     value: fx 1s ease infinite 0
    ----------------------------^
Matching for a tree with var() is not supported × 37
Lexer matching doesn't applicable for custom properties × 3
Unknown property `tranform`
Invalid value for `text-align`
     value: -webkit-left
    --------^
Invalid value for `font-weight` × 3
     value: light
    --------^
Invalid value for `transition-delay` × 2
     value: 0
    --------^
The rest part of value can't be matched to `content` grammar
     value: url('/assets/love-full.png') url('/assets/facebook-share.png') url(…
    -------------------------------------^</pre></details></td></tr>
<tr><td>97</td><td>⚠️</td><td>googleusercontent.com</td><td colspan="2">–</td></tr>
<tr><td>98</td><td>⚠️</td><td>bbc.com</td><td><details><summary>Errors: 16</summary><pre>RightParenthesis is expected
    5 |…y .edr_go {opacity:0;display:block;filter:alpha(opacity = 0);position:absolute;font-size:0;backgro…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…dr_survey .edr_go:focus {opacity:1;filter:alpha(opacity = 50);background-color:rgba(0, 0, 0, 0.01)…
----------------------------------------------------------------^
Unexpected input
   20 |…one;padding-bottom:0.75rem;background:none;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
   20 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
   20 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
   20 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
   20 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
   20 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
   20 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…nsform.Microsoft.Alpha(Opacity=70)";filter:alpha(opacity=70);opacity:0.7;float:left;display:block}…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);opacity:1}.video--slick .video__cont…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…nsform.Microsoft.Alpha(Opacity=90)";filter:alpha(opacity=90);opacity:0.9}.video--slick .video__nav…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);opacity:1}.video--slick .video__nav.…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);opacity:0;cursor:default;width:0}.vide…
----------------------------------------------------------------^
Unexpected input
   20 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
   20 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^</pre></details></td><td><details><summary>9 warnings</summary><pre>Node has no children × 16
Invalid value for `border-right-color`
     value: 12px solid #1d90cf
    --------^
Invalid value for `min-height`
     value: none
    --------^
Invalid value for `width`
     value: device-width
    --------^
Invalid value for `display` × 8
     value: box
    --------^
Invalid value for `display` × 8
     value: -moz-flex
    --------^
Invalid value for `-webkit-box-flex` × 23
     value: auto
    --------^
Invalid value for `-moz-box-flex` × 23
     value: auto
    --------^
Invalid value for `box-flex` × 23
     value: auto
    --------^</pre></details></td></tr>
<tr><td>99</td><td>⚠️</td><td>google.com.ua</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>100</td><td>⚠️</td><td>amazon.in</td><td><details><summary>Errors: 11</summary><pre>Unexpected input
  113 |….a-lt-ie9 .feed-carousel .feed-left{zoom:1;filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Unexpected input
  113 |…a-lt-ie9 .feed-carousel .feed-right{zoom:1;filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Identifier or asterisk is expected
  113 |…color:#FFF;vertical-align:baseline;white-space:nowrap}*|:-moz-full-screen-ancestor{transform:initi…
----------------------------------------------------------------^
Identifier or asterisk is expected
  113 |…color:#FFF;vertical-align:baseline;white-space:nowrap}*|:-moz-full-screen-ancestor{transform:initi…
----------------------------------------------------------------^
RightParenthesis is expected
  117 |…d-color:#000;-ms-filter:opacity(.6);filter:alpha(opacity=60);-webkit-opacity:.6;-moz-opacity:.6;-o…
----------------------------------------------------------------^
Unexpected input
  117 |…inset 0 1px 0 0 #fcf3dc;background:#f3ce72;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  117 |…ction-button:link:hover{background:#f1c65a;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  117 |…;padding:0;cursor:pointer;opacity:0;filter:alpha(opacity=0);visibility:visible;border:0;line-heigh…
----------------------------------------------------------------^
RightParenthesis is expected
  117 |…height:32px;-ms-filter:opacity(.95);filter:alpha(opacity=95);-webkit-opacity:.95;-moz-opacity:.95;…
----------------------------------------------------------------^
RightParenthesis is expected
  117 |…av-feed-arrow{-ms-filter:opacity(0);filter:alpha(opacity=0);-webkit-opacity:0;-moz-opacity:0;-o-op…
----------------------------------------------------------------^
Unexpected input
  117 |…-box;background:#eff0f3;background:#eff0f3;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>20 warnings</summary><pre>Invalid value for `background`
     value: -webkit-linear-gradient(to right,#f6f6f6,rgba(255,255,255,0),#f6f6f…
    --------------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3…
    --------------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to right,#fff,rgba(255,255,255,0),#fff)
    --------------------------------^
Invalid value for `color` × 4
     value: a_nullable_with_important()
    --------^
Invalid value for `margin-right`
     value: none
    --------^
Invalid value for `left`
     value: -
    --------^
Invalid value for `right`
     value: -
    --------^
Invalid value for `top`
     value: -
    --------^
Node has no children × 9
Invalid value for `vertical-align`
     value: center
    --------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to bottom,#cb0400,#a50200)
    --------------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to bottom,#cb0400,#a50200)
    -----------------------------^
Invalid value for `background-image`
     value: -ms-linear-gradient(to bottom,#cb0400,#a50200)
    ----------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to bottom,#cb0400,#a50200)
    ---------------------------^
Invalid value for `-ms-filter`
     value: opacity(.6)
    --------^
Invalid value for `-ms-filter`
     value: opacity(.95)
    --------^
Invalid value for `-ms-filter`
     value: opacity(0)
    --------^
Invalid value for `background`
     value: -webkit-gradient(linear,left top,left bottom,color-stop(0,#ddd),col…
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: linear-gradient(top,#ddd,#f7f7f7 3px,#fff)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(left,#fff,rgba(255,255,255,0),#fff)
    ------------------------^</pre></details></td></tr>
<tr><td>101</td><td>⚠️</td><td>nicovideo.jp</td><td><details><summary>Errors: 4</summary><pre>RightParenthesis is expected
 1378 |  filter: alpha(opacity=0) !important;
------------------------------^
RightParenthesis is expected
 4009 |    -ms-filter: "alpha(opacity=70)"; filter: alpha(opacity=70); opacity:0.7;
-----------------------------------------------------------------^
Unexpected input
 4035 |        text-decoration:underline:
----------------------------------------^
Unexpected input
 5650 |    filter: progid :DXImageTransform.Microsoft.gradient(startColorStr=#ffee9d,endColorStr=#edb200,…
--------------------------^</pre></details></td><td><details><summary>9 warnings</summary><pre>Invalid value for `display` × 9
     value: -moz-inline-block
    --------^
Node has no children × 4
Unknown property `border-radius-top-left`
Unknown property `layout-grid-line`
Unknown property `widtht`
Invalid value for `background`
     value: -webkit-gradient(liner,left top,left bottom,from(#fff),to(#e5e5e5))
    -------------------------^
Unknown property `-webkit--webkit-border-radius`
Unknown property `-moz--webkit-border-radius`
Invalid value for `background` × 5
     value: linear-gradient(top,#767676 0%,#282828 20%)
    ------------------------^</pre></details></td></tr>
<tr><td>102</td><td>⚠️</td><td>dailymotion.com</td><td colspan="2">–</td></tr>
<tr><td>103</td><td>⚠️</td><td>craigslist.org</td><td><details><summary>Errors: 14</summary><pre>RightParenthesis is expected
    7 |…;left:0;position:absolute;opacity:0;filter:alpha(opacity=0)}.ui-front{z-index:100}.ui-state-disabl…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…3aElaqrq56Bq7VAAAOw==");height:100%;filter:alpha(opacity=25);opacity:.25}.ui-progressbar-indetermi…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…r .ui-priority-secondary{opacity:.7;filter:alpha(opacity=70);font-weight:normal}.ui-state-disabled…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…ader .ui-state-disabled{opacity:.35;filter:alpha(opacity=35);background-image:none}.ui-state-disab…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…ge:none}.ui-state-disabled .ui-icon{filter:alpha(opacity=35)}.ui-icon{width:16px;height:16px}.ui-i…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…erlay{background:#aaaaaa;opacity:.3;filter:alpha(opacity=30)}.ui-widget-shadow{margin:-8px 0 0 -8p…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…g:8px;background:#aaaaaa;opacity:.3;filter:alpha(opacity=30);border-radius:8px}.ui-widget,.ui-widg…
----------------------------------------------------------------^
RightParenthesis is expected
   10 |….Microsoft.Alpha(Opacity=@percent)";filter:alpha(opacity=25);opacity:.25;background-image:url(/ima…
----------------------------------------------------------------^
RightParenthesis is expected
   10 |….Microsoft.Alpha(Opacity=@percent)";filter:alpha(opacity=50);opacity:.5;display:none}.lightbox .lb…
----------------------------------------------------------------^
RightParenthesis is expected
   10 |….Microsoft.Alpha(Opacity=@percent)";filter:alpha(opacity=60);opacity:.6}.gallery .arrow:hover{opac…
----------------------------------------------------------------^
RightParenthesis is expected
   10 |….Microsoft.Alpha(Opacity=@percent)";filter:alpha(opacity=75);opacity:.75;padding:0 .5em;position:a…
----------------------------------------------------------------^
RightParenthesis is expected
   10 |….Microsoft.Alpha(Opacity=@percent)";filter:alpha(opacity=75);opacity:.75;padding:0 .5em;position:a…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |….Microsoft.Alpha(Opacity=@percent)";filter:alpha(opacity=25);opacity:.25;background-image:url(/ima…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |….Microsoft.Alpha(Opacity=@percent)";filter:alpha(opacity=100);opacity:1}.w1024.homepage .page-cont…
----------------------------------------------------------------^</pre></details></td><td><details><summary>3 warnings</summary><pre>Node has no children × 14
Invalid value for `break-before`
     value: always
    --------^
Invalid value for `font-style`
     value: bold
    --------^</pre></details></td></tr>
<tr><td>104</td><td>⚠️</td><td>amazon.co.uk</td><td><details><summary>Errors: 11</summary><pre>Unexpected input
   56 |….a-lt-ie9 .feed-carousel .feed-left{zoom:1;filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Unexpected input
   56 |…a-lt-ie9 .feed-carousel .feed-right{zoom:1;filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Identifier or asterisk is expected
   56 |…color:#FFF;vertical-align:baseline;white-space:nowrap}*|:-moz-full-screen-ancestor{transform:initi…
----------------------------------------------------------------^
Identifier or asterisk is expected
   56 |…color:#FFF;vertical-align:baseline;white-space:nowrap}*|:-moz-full-screen-ancestor{transform:initi…
----------------------------------------------------------------^
RightParenthesis is expected
  114 |…d-color:#000;-ms-filter:opacity(.6);filter:alpha(opacity=60);-webkit-opacity:.6;-moz-opacity:.6;-o…
----------------------------------------------------------------^
Unexpected input
  114 |…inset 0 1px 0 0 #fcf3dc;background:#f3ce72;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  114 |…ction-button:link:hover{background:#f1c65a;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  114 |…;padding:0;cursor:pointer;opacity:0;filter:alpha(opacity=0);visibility:visible;border:0;line-heigh…
----------------------------------------------------------------^
RightParenthesis is expected
  114 |…height:32px;-ms-filter:opacity(.95);filter:alpha(opacity=95);-webkit-opacity:.95;-moz-opacity:.95;…
----------------------------------------------------------------^
RightParenthesis is expected
  114 |…av-feed-arrow{-ms-filter:opacity(0);filter:alpha(opacity=0);-webkit-opacity:0;-moz-opacity:0;-o-op…
----------------------------------------------------------------^
Unexpected input
  114 |…-box;background:#eff0f3;background:#eff0f3;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>20 warnings</summary><pre>Node has no children × 9
Invalid value for `vertical-align`
     value: center
    --------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to bottom,#cb0400,#a50200)
    --------------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to bottom,#cb0400,#a50200)
    -----------------------------^
Invalid value for `background-image`
     value: -ms-linear-gradient(to bottom,#cb0400,#a50200)
    ----------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to bottom,#cb0400,#a50200)
    ---------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to right,#f6f6f6,rgba(255,255,255,0),#f6f6f…
    --------------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3…
    --------------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to right,#fff,rgba(255,255,255,0),#fff)
    --------------------------------^
Invalid value for `color` × 4
     value: a_nullable_with_important()
    --------^
Invalid value for `margin-right`
     value: none
    --------^
Invalid value for `left`
     value: -
    --------^
Invalid value for `right`
     value: -
    --------^
Invalid value for `top`
     value: -
    --------^
Invalid value for `-ms-filter`
     value: opacity(.6)
    --------^
Invalid value for `-ms-filter`
     value: opacity(.95)
    --------^
Invalid value for `-ms-filter`
     value: opacity(0)
    --------^
Invalid value for `background`
     value: -webkit-gradient(linear,left top,left bottom,color-stop(0,#ddd),col…
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: linear-gradient(top,#ddd,#f7f7f7 3px,#fff)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(left,#fff,rgba(255,255,255,0),#fff)
    ------------------------^</pre></details></td></tr>
<tr><td>105</td><td>⚠️</td><td>google.com.ar</td><td colspan="2">–</td></tr>
<tr><td>106</td><td>⚠️</td><td>restorecosm.bid</td><td><details><summary>Errors: 14</summary><pre>RightParenthesis is expected
    8 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
   10 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
Unexpected input
  658 |    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#eded…
-------------------------^
Unexpected input
 1427 |    *filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
--------------------------^
Unexpected input
 1444 |    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\0;
-------------------------^
Unexpected input
 3156 |    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#91a5b8', endColorstr='#a6be…
-------------------------^
Unexpected input
 3339 |    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f5f5…
-------------------------^
Selector is expected
 4569 |}
-------^
Selector is expected
 4737 |}
-------^
Unexpected input
 4999 |    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#eeee…
-------------------------^
Unexpected input
 5047 |    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e4e4e4', endColorstr='#eeee…
-------------------------^
Unexpected input
 5154 |    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#eeee…
-------------------------^
Unexpected input
 5164 |    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#C6E2FB', endColorstr='#89C1…
-------------------------^
Identifier is expected
 6208 |    -webkit-appearance: none;',
------------------------------------^</pre></details></td><td><details><summary>40 warnings</summary><pre>Node has no children × 10
Invalid value for `font-weight`
     value: 150
    --------^
Invalid value for `transform`
     value: translateY(360deg)
    -------------------^
Unknown property `moz-transition`
The rest part of value can't be matched to `background-position` grammar
     value: -40px -20
    --------------^
Invalid value for `filter`
     value: mask()
    --------^
Invalid value for `background-image`
     value: -webkit-gradient(linear,left 0,left 2,color-stop(0.45,#EAF8FF),colo…
    ---------------------------------------^
Invalid value for `background-image`
     value: linear-gradient(bottom,#FFCA2A 1%,#FFE28A 51%)
    ------------------------^
Invalid value for `background-image`
     value: -webkit-gradient(linear,left bottom,left 2,color-stop(0.01,#FFCA2A)…
    --------------------------------------------^
Invalid value for `background-color`
     value: none
    --------^
Invalid value for `-moz-box-sizing`
     value: box-model
    --------^
Invalid value for `-webkit-box-sizing`
     value: box-model
    --------^
Invalid value for `-ms-box-sizing`
     value: box-model
    --------^
Invalid value for `box-sizing`
     value: box-model
    --------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(center bottom,#eeeeee 0%,white 50%)
    --------------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(center bottom,#eeeeee 0%,white 50%)
    -----------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#eeeeee 0%,#ffffff 50%)
    ------------------------^
Invalid value for `background`
     value: url("../image/chosen-sprite.png") no-repeat 100% -22px,-webkit-line…
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: url("../image/chosen-sprite.png") no-repeat 100% -22px,-moz-linear-…
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: url("../image/chosen-sprite.png") no-repeat 100% -22px,linear-gradi…
    ---------------------------------------------------------------------------…
Invalid value for `background-image`
     value: -webkit-linear-gradient(center bottom,white 85%,#eeeeee 99%)
    --------------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(center bottom,white 85%,#eeeeee 99%)
    -----------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#ffffff 85%,#eeeeee 99%)
    ------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(center bottom,#e4e4e4 0%,#eeeeee 70%)
    --------------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(center bottom,#e4e4e4 0%,#eeeeee 70%)
    -----------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#e4e4e4 0%,#eeeeee 70%)
    ------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(center bottom,white 0%,#eeeeee 50%)
    --------------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(center bottom,white 0%,#eeeeee 50%)
    -----------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#ffffff 0%,#eeeeee 50%)
    ------------------------^
Invalid value for `background`
     value: url("../image/chosen-sprite.png") no-repeat -38px -22px,-webkit-lin…
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: url("../image/chosen-sprite.png") no-repeat -38px -22px,-moz-linear…
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: url("../image/chosen-sprite.png") no-repeat -38px -22px,linear-grad…
    ---------------------------------------------------------------------------…
Invalid value for `-ms-filter`
     value: none
    --------^
Invalid value for `background-image`
     value: linear-gradient(bottom,#3679b6 1%,#4ca1ef 51%)
    ------------------------^
Invalid value for `background-image`
     value: -webkit-gradient(linear,left bottom,left 2,color-stop(0.01,#3679b6)…
    --------------------------------------------^
Invalid value for `background-image`
     value: linear-gradient(bottom,#285c8c 20%,#3d8cd4 81%)
    ------------------------^
Invalid value for `background-image`
     value: -webkit-gradient(linear,left bottom,left 2,color-stop(0.20,#285c8c)…
    --------------------------------------------^
Invalid value for `background-image`
     value: linear-gradient(bottom,#aed9ff 3%,#feffff 90%)
    ------------------------^
Invalid value for `background-image`
     value: -webkit-gradient(linear,left bottom,left 2,color-stop(0.03,#aed9ff)…
    --------------------------------------------^
Invalid value for `font`
     value: Arial,Helvetica
    --------^</pre></details></td></tr>
<tr><td>107</td><td>⚠️</td><td>espn.com</td><td><details><summary>Errors: 310</summary><pre>RightParenthesis is expected
    5 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…nsform.Microsoft.Alpha(Opacity=40)";filter:alpha(opacity=40);-moz-opacity:.4;-khtml-opacity:.4;opa…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…&gt;.shim{background:#fff;display:none;filter:alpha(opacity=50);height:100%;left:0;opacity:0;position…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…nsform.Microsoft.Alpha(Opacity=70)";filter:alpha(opacity=70);-moz-opacity:.7;-khtml-opacity:.7;opa…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…nsform.Microsoft.Alpha(Opacity=70)";filter:alpha(opacity=70);-moz-opacity:.7;-khtml-opacity:.7;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=80)";filter:alpha(opacity=80);-moz-opacity:.8;-khtml-opacity:.8;opa…
----------------------------------------------------------------^
Unexpected input
   33 |…tom,transparent,rgba(0,0,0,0.65));bottom:0;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=40)";filter:alpha(opacity=40);-moz-opacity:.4;-khtml-opacity:.4;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=40)";filter:alpha(opacity=40);-moz-opacity:.4;-khtml-opacity:.4;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=40)";filter:alpha(opacity=40);font-size:20px}.alert-container .grid…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=50)";filter:alpha(opacity=50);-moz-opacity:.5;-khtml-opacity:.5;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…site-overlay input.btn-action:hover{filter:alpha(opacity=85);opacity:.85}.cboxIE .mod-site-overlay…
----------------------------------------------------------------^
RightParenthesis is expected
   38 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   38 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
Unexpected input
   41 |…0%, transparent 37%, rgba(0,0,0,0.7) 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…nsform.Microsoft.Alpha(Opacity=80)";filter:alpha(opacity=80);-moz-opacity:.8;-khtml-opacity:.8;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…nsform.Microsoft.Alpha(Opacity=70)";filter:alpha(opacity=70);-moz-opacity:.7;-khtml-opacity:.7;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…nsform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20);-moz-opacity:.2;-khtml-opacity:.2;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…nsform.Microsoft.Alpha(Opacity=80)";filter:alpha(opacity=80);-moz-opacity:.8;-khtml-opacity:.8;opa…
----------------------------------------------------------------^
Unexpected input
   44 |…tom,transparent,rgba(0,0,0,0.65));bottom:0;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…nsform.Microsoft.Alpha(Opacity=40)";filter:alpha(opacity=40);-moz-opacity:.4;-khtml-opacity:.4;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…nsform.Microsoft.Alpha(Opacity=40)";filter:alpha(opacity=40);-moz-opacity:.4;-khtml-opacity:.4;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…nsform.Microsoft.Alpha(Opacity=40)";filter:alpha(opacity=40);font-size:20px}.alert-container .grid…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacit…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…nsform.Microsoft.Alpha(Opacity=50)";filter:alpha(opacity=50);-moz-opacity:.5;-khtml-opacity:.5;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…site-overlay input.btn-action:hover{filter:alpha(opacity=85);opacity:.85}.cboxIE .mod-site-overlay…
----------------------------------------------------------------^</pre></details></td><td><details><summary>38 warnings</summary><pre>Invalid value for `display` × 280
     value: -moz-flex
    --------^
Node has no children × 310
The rest part of value can't be matched to `border-top` grammar × 2
     value: #edeef0 1 px solid
    ----------------^
Invalid value for `display` × 4
     value: -moz-inline-flex
    --------^
Invalid value for `font-family`
     value: 600
    --------^
Unknown property `-moz-font-smoothing` × 17
Unknown property `-o-font-smoothing` × 17
Unknown property `-ms-animations` × 42
Unknown property `-ms-animations-delay` × 26
Invalid value for `max-width` × 2
     value: auto
    --------^
Invalid value for `width` × 2
     value: device-width
    --------^
The rest part of value can't be matched to `transition` grammar × 2
     value: transform .1 ease-in-out
    ------------------^
Invalid value for `-webkit-box-ordinal-group` × 5
     value: initial1
    --------^
Invalid value for `-webkit-box-flex` × 15
     value: none
    --------^
The rest part of value can't be matched to `-webkit-box-flex` grammar × 3
     value: 1 1 auto
    ----------^
Invalid value for `-webkit-box-flex` × 6
     value: auto
    --------^
Invalid value for `-ms-filter` × 8
     value: blur(45px) brightness(0.85)
    --------^
Invalid value for `-ms-flex-wrap` × 7
     value: none
    --------^
Invalid value for `-webkit-box-align`
     value: left
    --------^
Invalid value for `-ms-flex-align`
     value: left
    --------^
Invalid value for `-webkit-align-items`
     value: left
    --------^
Invalid value for `-moz-align-items`
     value: left
    --------^
Invalid value for `align-items`
     value: left
    --------^
Invalid value for `background-color`
     value: none
    --------^
Invalid value for `-webkit-box-flex`
     value: "1"
    --------^
Invalid value for `-webkit-flex`
     value: "1"
    --------^
Invalid value for `-moz-box-flex`
     value: "1"
    --------^
Invalid value for `-moz-flex`
     value: "1"
    --------^
Invalid value for `-ms-flex`
     value: "1"
    --------^
Invalid value for `flex`
     value: "1"
    --------^
Invalid value for `background`
     value: -webkit-gradient(left top,left bottom,color-stop(0%,transparent),co…
    -------------------------^
The rest part of value can't be matched to `-moz-transition-property` grammar
     value: all 0.3s ease
    ------------^
The rest part of value can't be matched to `-ms-transition-property` grammar
     value: all 0.3s ease
    ------------^
The rest part of value can't be matched to `-o-transition-property` grammar
     value: all 0.3s ease
    ------------^
The rest part of value can't be matched to `-webkit-transition-property` gramma…
     value: all 0.3s ease
    ------------^
The rest part of value can't be matched to `transition-property` grammar
     value: all 0.3s ease
    ------------^
Invalid value for `-ms-filter` × 4
     value: blur(45px) brightness(.85)
    --------^
Invalid value for `text-decoration`
     value: u
    --------^</pre></details></td></tr>
<tr><td>108</td><td>⚠️</td><td>soundcloud.com</td><td>OK</td><td><details><summary>3 warnings</summary><pre>Invalid value for `-webkit-perspective`
     value: 900
    --------^
Invalid value for `perspective`
     value: 900
    --------^
Lexer matching doesn't applicable for custom properties × 2</pre></details></td></tr>
<tr><td>109</td><td>⚠️</td><td>bbc.co.uk</td><td><details><summary>Errors: 16</summary><pre>RightParenthesis is expected
    5 |…y .edr_go {opacity:0;display:block;filter:alpha(opacity = 0);position:absolute;font-size:0;backgro…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…dr_survey .edr_go:focus {opacity:1;filter:alpha(opacity = 50);background-color:rgba(0, 0, 0, 0.01)…
----------------------------------------------------------------^
Unexpected input
   33 |…one;padding-bottom:0.75rem;background:none;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
   33 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
   33 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
   33 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
   33 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
   33 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
   33 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=70)";filter:alpha(opacity=70);opacity:0.7;float:left;display:block}…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);opacity:1}.video--slick .video__cont…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…nsform.Microsoft.Alpha(Opacity=90)";filter:alpha(opacity=90);opacity:0.9}.video--slick .video__nav…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);opacity:1}.video--slick .video__nav.…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ansform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);opacity:0;cursor:default;width:0}.vide…
----------------------------------------------------------------^
Unexpected input
   33 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
   33 |…t:auto;padding:15% 0.75rem 0.75rem 0.75rem;filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^</pre></details></td><td><details><summary>12 warnings</summary><pre>Node has no children × 16
Invalid value for `border-right-color` × 2
     value: 12px solid #1d90cf
    --------^
Unknown property `font-display` × 16
Invalid value for `box-sizing`
     value: auto
    --------^
The rest part of value can't be matched to `transform` grammar
     value: translateZ(0),rotate(45deg)
    ---------------------^
Invalid value for `width`
     value: device-width
    --------^
Invalid value for `display` × 8
     value: box
    --------^
Invalid value for `display` × 8
     value: -moz-flex
    --------^
Invalid value for `-webkit-box-flex` × 23
     value: auto
    --------^
Invalid value for `-moz-box-flex` × 23
     value: auto
    --------^
Invalid value for `box-flex` × 23
     value: auto
    --------^
Invalid value for `min-height`
     value: none
    --------^</pre></details></td></tr>
<tr><td>110</td><td>⚠️</td><td>google.co.th</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>111</td><td>⚠️</td><td>quora.com</td><td><details><summary>Errors: 11</summary><pre>Unexpected input
   10 |…ba(0,0,0,0.3));background-repeat:no-repeat;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   10 |…ba(0,0,0,0.3));background-repeat:no-repeat;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   10 |…0,#fafafa 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Selector is expected
   10 |…ckquote&gt;ul li li{padding-bottom:0;padding-top:.7em}:not('.results_frame') .rendered_qtext&gt;ol li,:n…
----------------------------------------------------------------^
Selector is expected
   10 |…ckquote&gt;ul li li{padding-bottom:0;padding-top:.7em}:not('.results_frame') .ui_qtext_rendered_qtext…
----------------------------------------------------------------^
RightParenthesis is expected
   10 |…sible{-ms-filter:"alpha(opacity=0)";filter:alpha(opacity=0);opacity:.0;-moz-opacity:.0;-khtml-opac…
----------------------------------------------------------------^
Unexpected input
   10 |…1,51,0.8) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   10 |…relative;top:3px;left:6px;opacity:0;filter:alpha(opacity=0)}.SettingsMain .settings_section .setti…
----------------------------------------------------------------^
RightParenthesis is expected
   10 |…l_row:hover .remove_email{opacity:1;filter:alpha(opacity=1)}.SettingsMain .settings_section .setti…
----------------------------------------------------------------^
RightParenthesis is expected
   10 |…round-position:center top;opacity:0;filter:alpha(opacity=0);background-image:url(//qsf.ec.quoracdn…
----------------------------------------------------------------^
RightParenthesis is expected
   10 |…r_remove_mobile_num:hover{opacity:1;filter:alpha(opacity=100)}.SettingsMain .settings_section .set…
----------------------------------------------------------------^</pre></details></td><td><details><summary>74 warnings</summary><pre>Invalid value for `filter`
     value: gray
    --------^
Node has no children × 9
Invalid value for `position`
     value: -moz-sticky
    --------^
Invalid value for `position`
     value: -ms-sticky
    --------^
Invalid value for `position`
     value: -o-sticky
    --------^
Invalid value for `display`
     value: -moz-inline-flex
    --------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: margin-bottom .1s linear 180ms ease-in-out 0s
    ---------------------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: margin-bottom .1s linear 180ms ease-in-out 0s
    ---------------------------------------^
The rest part of value can't be matched to `transition` grammar
     value: margin-bottom .1s linear 180ms ease-in-out 0s
    ---------------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: border-color .2s ease color .2s ease ease-in-out 0s
    ------------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: border-color .2s ease color .2s ease ease-in-out 0s
    ------------------------------^
The rest part of value can't be matched to `transition` grammar
     value: border-color .2s ease color .2s ease ease-in-out 0s
    ------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar × 3
     value: opacity .5s linear 180ms ease-in-out 0s
    ---------------------------------^
The rest part of value can't be matched to `-o-transition` grammar × 3
     value: opacity .5s linear 180ms ease-in-out 0s
    ---------------------------------^
The rest part of value can't be matched to `transition` grammar × 3
     value: opacity .5s linear 180ms ease-in-out 0s
    ---------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar × 4
     value: border-color .2s 180ms ease-in-out 0s
    -------------------------------------------^
The rest part of value can't be matched to `-o-transition` grammar × 4
     value: border-color .2s 180ms ease-in-out 0s
    -------------------------------------------^
The rest part of value can't be matched to `transition` grammar × 4
     value: border-color .2s 180ms ease-in-out 0s
    -------------------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar × 2
     value: all .33s 180ms ease-in-out 0s
    -----------------------------------^
The rest part of value can't be matched to `-o-transition` grammar × 2
     value: all .33s 180ms ease-in-out 0s
    -----------------------------------^
The rest part of value can't be matched to `transition` grammar × 2
     value: all .33s 180ms ease-in-out 0s
    -----------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: opacity .33s 180ms ease-in-out 0s
    ---------------------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: opacity .33s 180ms ease-in-out 0s
    ---------------------------------------^
The rest part of value can't be matched to `transition` grammar
     value: opacity .33s 180ms ease-in-out 0s
    ---------------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: border-color .2s ease 180ms ease-in-out 0s
    ------------------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: border-color .2s ease 180ms ease-in-out 0s
    ------------------------------------^
The rest part of value can't be matched to `transition` grammar
     value: border-color .2s ease 180ms ease-in-out 0s
    ------------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: color .2s ease 180ms ease-in-out 0s
    -----------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: color .2s ease 180ms ease-in-out 0s
    -----------------------------^
The rest part of value can't be matched to `transition` grammar
     value: color .2s ease 180ms ease-in-out 0s
    -----------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: all .2s ease 180ms ease-in-out 0s
    ---------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: all .2s ease 180ms ease-in-out 0s
    ---------------------------^
The rest part of value can't be matched to `transition` grammar
     value: all .2s ease 180ms ease-in-out 0s
    ---------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(left,color-stop(rgba(250,250,250,0.01) 0),c…
    -------------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: top .25s ease-in-out 180ms ease-in-out 0s
    -----------------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: top .25s ease-in-out 180ms ease-in-out 0s
    -----------------------------------^
The rest part of value can't be matched to `transition` grammar
     value: top .25s ease-in-out 180ms ease-in-out 0s
    -----------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: opacity 55ms ease-in 180ms ease-in-out 0s
    -----------------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: opacity 55ms ease-in 180ms ease-in-out 0s
    -----------------------------------^
The rest part of value can't be matched to `transition` grammar
     value: opacity 55ms ease-in 180ms ease-in-out 0s
    -----------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: opacity 100ms ease-in-out 180ms ease-in-out 0s
    ----------------------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: opacity 100ms ease-in-out 180ms ease-in-out 0s
    ----------------------------------------^
The rest part of value can't be matched to `transition` grammar
     value: opacity 100ms ease-in-out 180ms ease-in-out 0s
    ----------------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar × 2
     value: all 140ms ease-in-out 180ms ease-in-out 0s
    ------------------------------------^
The rest part of value can't be matched to `-o-transition` grammar × 2
     value: all 140ms ease-in-out 180ms ease-in-out 0s
    ------------------------------------^
The rest part of value can't be matched to `transition` grammar × 2
     value: all 140ms ease-in-out 180ms ease-in-out 0s
    ------------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: background 1s 180ms ease-in-out 0s
    ----------------------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: background 1s 180ms ease-in-out 0s
    ----------------------------------------^
The rest part of value can't be matched to `transition` grammar
     value: background 1s 180ms ease-in-out 0s
    ----------------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: border-color .5s ease 180ms ease-in-out 0s
    ------------------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: border-color .5s ease 180ms ease-in-out 0s
    ------------------------------------^
The rest part of value can't be matched to `transition` grammar
     value: border-color .5s ease 180ms ease-in-out 0s
    ------------------------------------^
Invalid value for `font-size`
     value: 400
    --------^
Invalid value for `background-color`
     value: none
    --------^
The rest part of value can't be matched to `margin-top` grammar
     value: 20px 30px 0 30px
    -------------------^
Invalid value for `background-repeat` × 3
     value: none
    --------^
Invalid value for `width`
     value: -moz-max-content
    --------^
Lexer matching doesn't applicable for custom properties
Invalid value for `-webkit-transform`
     value: rotate(-45px)
    ---------------^
Invalid value for `-webkit-perspective`
     value: 1000
    --------^
Invalid value for `-o-perspective`
     value: 1000
    --------^
Invalid value for `perspective`
     value: 1000
    --------^
Invalid value for `overflow`
     value: none
    --------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: opacity .2s 180ms ease-in-out 0s
    --------------------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: opacity .2s 180ms ease-in-out 0s
    --------------------------------------^
The rest part of value can't be matched to `transition` grammar
     value: opacity .2s 180ms ease-in-out 0s
    --------------------------------------^
Invalid value for `display`
     value: hidden
    --------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: color .2s 180ms ease-in-out 0s
    ------------------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: color .2s 180ms ease-in-out 0s
    ------------------------------------^
The rest part of value can't be matched to `transition` grammar
     value: color .2s 180ms ease-in-out 0s
    ------------------------------------^
Invalid value for `transition-timing-function`
     value: swing
    --------^
Invalid value for `display`
     value: fixed
    --------^
The rest part of value can't be matched to `margin-bottom` grammar
     value: 32px 0
    ------------^
Invalid value for `overflow-y`
     value: none
    --------^</pre></details></td></tr>
<tr><td>112</td><td>⚠️</td><td>so.com</td><td><details><summary>Errors: 6</summary><pre>Unexpected input
    7 |…ion:absolute;top:0;width:100%;z-index:1000;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Identifier is expected
    7 |…;overflow:hidden;padding-right:6px;text-decoration:none;`text-overflow:ellipsis;white-space:nowrap…
----------------------------------------------------------------^
Unexpected input
    9 |…ng) 2x);background-repeat:no-repeat;background-position::0 0;display:inline-block;height:14px;marg…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…nsform.Microsoft.Alpha(Opacity=40)";filter:alpha(opacity=40);opacity:0.4}.scrollbar-inner &gt; .scrol…
----------------------------------------------------------------^
Unexpected input
   13 |…sition:fixed;top:0;width:100%;z-index:1300;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   13 |…adding:3px 7px;position:absolute;right:3px;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>14 warnings</summary><pre>Invalid value for `background-image`
     value: -webkit-image-set(url(https://p.ssl.qhimg.com/t01bf30d338a1898dc4.p…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://p.ssl.qhimg.com/t01d1f1a2ae31e3c3e4.p…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://p.ssl.qhimg.com/t01ab44a7e049b037e1.p…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://p.ssl.qhimg.com/t01b0b948af85e508e7.p…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://p.ssl.qhimg.com/t016b9a582dc0da5403.p…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://p.ssl.qhimg.com/t01750a45117b6e52e0.p…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://p.ssl.qhimg.com/t01f12091d80d748c4c.p…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://p.ssl.qhimg.com/t01054729d647fc0806.p…
    --------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url(https://p.ssl.qhimg.com/d/inn/495719b6/del.pn…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://p.ssl.qhimg.com/t0196ab6d7ba10a6b0d.p…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://p.ssl.qhimg.com/t016c965edfd23d1506.p…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://p.ssl.qhimg.com/t011b5f99ef32dcb4ae.p…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(https://p.ssl.qhimg.com/t015d788c95365544ad.p…
    --------^</pre></details></td></tr>
<tr><td>113</td><td>⚠️</td><td>booking.com</td><td><details><summary>Errors: 48</summary><pre>RightParenthesis is expected
    5 |…f1f1f1;margin:0;padding:0;opacity:0;filter:alpha(opacity=0);-ms-filter:"alpha(opacity=0)";-khtml-o…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…#special_actions li.first{opacity:1;filter:alpha(opacity=100);-ms-filter:"alpha(opacity=100)";-kht…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…t;background-image:none;opacity:.65;filter:alpha(opacity=65);background-color:#ccc;color:#fff;-web…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…h:100%;height:100%;-moz-opacity:.70;filter:alpha(opacity=70);opacity:.80}.cookie_styles a{color:#f…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ative;margin:0 0 12px 0;opacity:.95;filter:alpha(opacity=95);cursor:default;text-align:left;backgr…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…none;position:absolute;top:0;left:0;filter:alpha(opacity=80);-moz-opacity:.8;-khtml-opacity:.8;opa…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…und:#003580;z-index:9998;opacity:.5;filter:alpha(opacity=0);-ms-filter:"alpha(opacity=0)";-khtml-o…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…kground:#000;z-index:499;opacity:.3;filter:alpha(opacity=30)}#maf_content{background:url("//s-ec.b…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…eft:-10px;top:-10px;background:#000;filter:alpha(opacity=60);position:absolute;z-index:1}#b_map_co…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…over{-ms-filter:"alpha(opacity=70)";filter:alpha(opacity=70);-moz-opacity:.7;-khtml-opacity:.7;opa…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…king{-ms-filter:"alpha(opacity=60)";filter:alpha(opacity=60);-moz-opacity:.6;-khtml-opacity:.6;opa…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…,.b_msie_8 .sb-date-field__controls{filter:Alpha(opacity=0)}.b_msie_8 .sb-date-field__field.-editi…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…d.-editing .sb-date-field__controls{filter:Alpha(opacity=100)}.xpi__searchbox .sb-searchbox__title…
----------------------------------------------------------------^
RightParenthesis is expected
    9 |…t;background-image:none;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:0 0 4px #aaa;box-s…
----------------------------------------------------------------^
RightParenthesis is expected
    9 |…r:#fff;text-align:center;opacity:.8;filter:alpha(opacity=80);vertical-align:middle;z-index:1}.form…
----------------------------------------------------------------^
Unexpected input
    9 |…filter_item_button[active="true"]{background:#fff;color:&lt;undefined&gt;;cursor:default}.guides_timelin…
----------------------------------------------------------------^
Identifier is expected
   11 |…rtant}.transition-300ms{-webkit-transition:all .3s ease;-0-transition:all .3s ease;transition:all …
----------------------------------------------------------------^
Identifier is expected
   11 |… ease}.transition-500ms{-webkit-transition:all .5s ease;-0-transition:all .5s ease;transition:all …
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…link{-ms-filter:"alpha(opacity=80)";filter:alpha(opacity=80);opacity:.8}.clickblock:hover .citylin…
----------------------------------------------------------------^
Unexpected input
   11 |…d:linear-gradient(top,#5bbaff 0,#07c 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…ra-focus-overlay.ultra-focus-active{filter:alpha(opacity=60);width:auto;height:auto;top:0;bottom:0…
----------------------------------------------------------------^
Identifier is expected
   11 |…}#b_confirmation_body .book-challenge-two-confirmation ..ge-genius-block-text{width:81%}.genius-we…
----------------------------------------------------------------^
Unexpected input
   11 |…px}.b_msie_8 .passion-banner__copy-wrapper{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   11 |…rgba(0,27,65,0.85) 0,rgba(0,27,65,0) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   11 |…rgba(0,27,65,0.65) 0,rgba(0,27,65,0) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…;background-position:0 0;opacity:.5;filter:alpha(opacity=50)}.lp-sh-hide-search-sprite.close-icon:…
----------------------------------------------------------------^
Identifier is expected
   11 |…x}.lp-search-form .lp-search-form__dates .sb-dates__col.--checkin-field,.lp-search-form .lp-search…
----------------------------------------------------------------^
Identifier is expected
   11 |…254,187,2,1) inset}.lp-search-form-dates .sb-dates__col.--checkout-field .sb-date-field__wrapper{b…
----------------------------------------------------------------^
Identifier is expected
   11 |…-form-dates .lp-search-form-dates__dates .sb-dates__col.--checkout-field:before{content:'';height:…
----------------------------------------------------------------^
Identifier is expected
   11 |…-form-dates .lp-search-form-dates__dates .sb-dates__col.--checkin-field .sb-searchbox__input.sb-da…
----------------------------------------------------------------^
Identifier is expected
   11 |…400}.lp-search-box .lp-search-box__dates .sb-dates__col.--checkout-field{border-left:1px solid #ed…
----------------------------------------------------------------^
Identifier is expected
   11 |…ded}.lp-search-box .lp-search-box__dates .sb-dates__col.--checkin-field .sb-searchbox__input{borde…
----------------------------------------------------------------^
Identifier is expected
   11 |…3px}.lp-search-box .lp-search-box__dates .sb-dates__col.--checkout-field .sb-searchbox__input{bord…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…ff;background:rgba(255,255,255,0.3);filter:alpha(opacity=30);border-radius:5px;zoom:1;padding:.5em…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…ingToFront{position:relative;zoom:1;filter:alpha(opacity=50);opacity:.5;z-index:1!important;cursor…
----------------------------------------------------------------^
Unexpected input
   13 |…rgba(0,27,65,0.65) 0,rgba(0,27,65,0) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   13 |…rgba(0,27,65,0.85) 0,rgba(0,27,65,0) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…:#003580}.review_feedback.no_thumbs{filter:alpha(opacity=100);opacity:1!important}span.review_feed…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…in-left:4px;margin-top:0;float:left;filter:alpha(opacity=100);opacity:1!important}.no_thumbs .revi…
----------------------------------------------------------------^
Unexpected input
   13 |…tant;box-shadow:1px 1px 2px #999!important;filter:progid:DXImageTransform.Microsoft.Shadow(color='…
----------------------------------------------------------------^
Unexpected input
   13 |…,rgba(0,0,0,0.65) 0,rgba(0,0,0,0.08) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…y:.7;-ms-filter:"alpha(opacity=70)";filter:alpha(opacity=70)}.map_box_overlay .map_box_overlay_wra…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…,.b_msie_8 .sb-date-field__controls{filter:Alpha(opacity=0)}.b_msie_8 .sb-date-field__field.-editi…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…d.-editing .sb-date-field__controls{filter:Alpha(opacity=100)}.sb-custom-wrapper{display:-webkit-b…
----------------------------------------------------------------^
Identifier is expected
   13 |…argin-bottom:5px}.sb-searchbox-universal .sb-dates__col.--checkin-field{margin-right:5px}.sb-searc…
----------------------------------------------------------------^
Identifier is expected
   13 |…-small .sb-af-checkbox{margin:6px 0 6px}.sb-af-checkbox.--lined{display:inline-block;border-top:1p…
----------------------------------------------------------------^
Identifier is expected
   13 |…11;padding-top:4px}.sb-searchbox.-small .sb-af-checkbox.--lined{margin-top:4px;padding-top:6px}.sb…
----------------------------------------------------------------^
Identifier is expected
   13 |…sb-ac-tooltip-icon{margin-right:6px}.sb-ac-tooltip-icon.--blue{fill:#5bbaff}.sb-searchbox.-has-lim…
----------------------------------------------------------------^</pre></details></td><td><details><summary>38 warnings</summary><pre>Invalid value for `-webkit-box-shadow`
     value: 0
    --------^
Invalid value for `box-shadow`
     value: 0
    --------^
Matching for a tree with var() is not supported
Node has no children × 34
Invalid value for `border-radius` × 3
     value: none
    --------^
Invalid value for `overflow`
     value: none
    --------^
Invalid value for `-webkit-font-smoothing`
     value: antializased
    --------^
The rest part of value can't be matched to `border-bottom` grammar × 2
     value: 1px dotted inherit
    -------------------^
Invalid value for `display` × 2
     value: table-caption
    --------^
Invalid value for `width`
     value: none
    --------^
Invalid value for `background`
     value: linear-gradient(top,#dfdfdf,#ededed)
    ------------------------^
Invalid value for `font-size`
     value: 13
    --------^
Invalid value for `vertical-align`
     value: &lt;empty string&gt;
    --------^
Invalid value for `background`
     value: linear-gradient(top,#5bbaff 0,#07c 100%)
    ------------------------^
Invalid value for `filter` × 2
     value: gray
    --------^
Invalid value for `background`
     value: linear-gradient(top,#003580 0,rgba(255,255,255,0) 50%)
    ------------------------^
Invalid value for `-webkit-animation-delay`
     value: 0
    --------^
Invalid value for `animation-delay`
     value: 0
    --------^
Invalid value for `-webkit-transform`
     value: background-color .2s
    --------^
Invalid value for `-ms-transform`
     value: background-color .2s
    --------^
Invalid value for `transform`
     value: background-color .2s
    --------^
Invalid value for `-webkit-filter`
     value: gray
    --------^
Invalid value for `opacity` × 2
     value: 100
    --------^
Invalid value for `background` × 2
     value: -webkit-gradient(left top,left bottom,color-stop(0%,rgba(0,27,65,0.…
    -------------------------^
Invalid value for `background` × 2
     value: -webkit-gradient(left top,left bottom,color-stop(0%,rgba(0,27,65,0.…
    -------------------------^
Invalid value for `-webkit-box-pack`
     value: stretch
    --------^
Invalid value for `-ms-flex-pack`
     value: stretch
    --------^
Invalid value for `margin-bottom`
     value: none
    --------^
Unknown property `font-smoothing` × 2
Unknown property `overflow-scrolling` × 3
Invalid value for `letter-spacing`
     value: .3
    --------^
Invalid value for `padding`
     value: none
    --------^
Unknown property `-webkit-margin-top-collapse`
Unknown property `-webkit-margin-before`
Unknown property `-webkit-margin-after`
Unknown property `-webkit-margin-start`
Unknown property `-webkit-margin-end`
Invalid value for `border-color` × 3
     value: none
    --------^</pre></details></td></tr>
<tr><td>114</td><td>⚠️</td><td>dkn.tv</td><td><details><summary>Errors: 16</summary><pre>RightParenthesis is expected
   28 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
   30 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
RightParenthesis is expected
   32 |…-toolbar.dark a.disabled{opacity:.2;filter:alpha(opacity=20);cursor:default;background-color:#000!…
----------------------------------------------------------------^
RightParenthesis is expected
   32 |…box-button.dark.disabled{opacity:.1;filter:alpha(opacity=10);cursor:default;background-color:#000!…
----------------------------------------------------------------^
Selector is expected
   34 |…rapper .video-frame.embed-responsive-4by3{width:510.6px}{height:313px!important}}@media(max-width:…
----------------------------------------------------------------^
RightParenthesis is expected
   52 |…te;top:0;bottom:0;width:82px;zoom:1;filter:alpha(opacity=20);opacity:.2}.jp-carousel-transitions .…
----------------------------------------------------------------^
RightParenthesis is expected
   52 |…carousel-previous-button:hover span{filter:alpha(opacity=60);opacity:.6}.jp-carousel-next-button s…
----------------------------------------------------------------^
RightParenthesis is expected
   52 |…elected{position:absolute!important;filter:alpha(opacity=100);opacity:1}.jp-carousel-slide{filter:…
----------------------------------------------------------------^
RightParenthesis is expected
   52 |…y=100);opacity:1}.jp-carousel-slide{filter:alpha(opacity=25);opacity:.25}.jp-carousel-slide img{di…
----------------------------------------------------------------^
RightParenthesis is expected
   52 |…nt;top:-10px}.jp-carousel-slide img{filter:alpha(opacity=100);opacity:1}.jp-carousel-wrap{backgrou…
----------------------------------------------------------------^
RightParenthesis is expected
   52 |…elatedposts-post{padding-right:20px;filter:alpha(opacity=80);-moz-opacity:.8;opacity:.8}#jp-relate…
----------------------------------------------------------------^
RightParenthesis is expected
   52 |…s-items .jp-relatedposts-post:hover{filter:alpha(opacity=100);-moz-opacity:1;opacity:1}#jp-related…
----------------------------------------------------------------^
RightParenthesis is expected
   52 |…ont-weight:400;text-decoration:none;filter:alpha(opacity=100);-moz-opacity:1;opacity:1}#jp-related…
----------------------------------------------------------------^
RightParenthesis is expected
   54 |…y:.9;-ms-filter:"alpha(opacity=90)";filter:alpha(opacity=90);-webkit-border-radius:0 100px 100px 0…
----------------------------------------------------------------^
Unexpected input
   54 |…x;-moz-border-radius:4px;border-radius:4px;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   54 |…f',endColorstr='#ffe6e6e6',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^</pre></details></td><td><details><summary>12 warnings</summary><pre>Node has no children × 14
Invalid value for `filter` × 2
     value: "alpha(opacity=75)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=0)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=100)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=40)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=85)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=90)"
    --------^
Invalid value for `padding-right`
     value: auto
    --------^
Unknown property `webkit-transition` × 2
Unknown property `font-smooth`
The rest part of value can't be matched to `list-style` grammar
     value: outside disc
    ----------------^
The rest part of value can't be matched to `list-style` grammar
     value: outside decimal
    ----------------^</pre></details></td></tr>
<tr><td>115</td><td>⚠️</td><td>openload.co</td><td><details><summary>Errors: 17</summary><pre>Unexpected input
    8 |…g);transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
    8 |…eg);transform:rotate(90deg)}.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
    8 |…g);transform:rotate(180deg)}.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
    8 |…ansform:rotate(270deg)}.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
    8 |…);transform:scale(-1, 1)}.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…t[disabled] .btn{cursor:not-allowed;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:no…
----------------------------------------------------------------^
Unexpected input
   13 |…nd-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.close:hover,.close:focus{…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5}button.close{-webkit-appea…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…und-color:#000}.modal-backdrop.fade{filter:alpha(opacity=0);opacity:0}.modal-backdrop.in{filter:al…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…ity=0);opacity:0}.modal-backdrop.in{filter:alpha(opacity=50);opacity:.5}.modal-header{min-height:1…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…word-wrap:normal;white-space:normal;filter:alpha(opacity=0);opacity:0;line-break:auto}.tooltip.in{…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…acity:0;line-break:auto}.tooltip.in{filter:alpha(opacity=90);opacity:.9}.tooltip.top{padding:5px 0…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…ext-shadow:0 1px 2px rgba(0,0,0,.6);filter:alpha(opacity=50);opacity:.5}.carousel-control.left{bac…
----------------------------------------------------------------^
Unexpected input
   13 |…,rgba(0,0,0,.5) 0%,rgba(0,0,0,.0001) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   13 |…,rgba(0,0,0,.0001) 0%,rgba(0,0,0,.5) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…cus{color:#fff;text-decoration:none;filter:alpha(opacity=90);outline:0;opacity:.9}.carousel-contro…
----------------------------------------------------------------^</pre></details></td><td><details><summary>2 warnings</summary><pre>Node has no children × 17
Invalid value for `width`
     value: device-width
    --------^</pre></details></td></tr>
<tr><td>116</td><td>⚠️</td><td>xinhuanet.com</td><td><details><summary>Errors: 32</summary><pre>RightParenthesis is expected
 1366 |    filter: alpha(opacity=40);
--------------------------------^
RightParenthesis is expected
 3401 |    filter: alpha(opacity=40);
--------------------------------^
RightParenthesis is expected
 3587 |    filter: alpha(opacity=80);
--------------------------------^
RightParenthesis is expected
 4716 |    filter: alpha(opacity=40);
--------------------------------^
RightParenthesis is expected
 4892 |    filter: alpha(opacity=40);
--------------------------------^
RightParenthesis is expected
 4943 |    filter: alpha(opacity=40);
--------------------------------^
RightParenthesis is expected
 5221 |    filter: alpha(opacity=40);
--------------------------------^
RightParenthesis is expected
 5288 |    filter: alpha(opacity=40);
--------------------------------^
RightParenthesis is expected
 5420 |    filter: alpha(opacity=40);
--------------------------------^
RightParenthesis is expected
 5737 |    filter: alpha(opacity=40);
--------------------------------^
RightParenthesis is expected
 5792 |    filter: alpha(opacity=70);
--------------------------------^
RightParenthesis is expected
 5811 |    filter: alpha(opacity=90);
--------------------------------^
RightParenthesis is expected
 5862 |    filter: alpha(opacity=90);
--------------------------------^
Identifier is expected
 5892 |.st12 .tiny .tinyIn. picTitle img {
---------------------------^
RightParenthesis is expected
 5900 |    filter: alpha(opacity=70);
--------------------------------^
Identifier is expected
 6696 |    1000px;
-----------^
RightParenthesis is expected
 6992 |    filter: alpha(opacity=70);
--------------------------------^
Unexpected input
 8355 |  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a60…
-----------------------^
RightParenthesis is expected
 9152 |a:hover span { filter: alpha(opacity=70); -moz-opacity: .7; opacity: .7; }
-------------------------------------------^
RightParenthesis is expected
 9230 |…dex: 4; width: 100%; height: 42px; filter: alpha(opacity=70); -moz-opacity: 0.7; opacity: 0.7; }
----------------------------------------------------------------^
RightParenthesis is expected
 9231 |.pic a:hover .bg { /*background-color:#7ad041;*/ filter: alpha(opacity=50); -moz-opacity: .5; opac…
-----------------------------------------------------------------------------^
Selector is expected
 9396 |{ position: absolute; width: 245px; height: 245px; left: 0; top: 245px; background-color: rgba( 19…
-------^
Unexpected input
 10361 |  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a60…
------------------------^
Unexpected input
 11110 |  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#c40…
------------------------^
Unexpected input
 11320 |  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a60…
------------------------^
String or Raw is expected
 11483 |  background: #bf0009 url() no-repeat center center;
----------------------------------^
Unexpected input
 11541 |  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a60…
------------------------^
Unexpected input
 12954 |  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a60…
------------------------^
Unexpected input
 13537 |  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dc000d', endColorstr='#c3001…
------------------------^
Unexpected input
 13597 |  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dc000d', endColorstr='#c3001…
------------------------^
RightParenthesis is expected
 16281 |a:hover span { filter: alpha(opacity=70); -moz-opacity: .7; opacity: .7; }
--------------------------------------------^
RightParenthesis is expected
 16675 |a:hover span { filter: alpha(opacity=70); -moz-opacity: .7; opacity: .7; }
--------------------------------------------^</pre></details></td><td><details><summary>5 warnings</summary><pre>Node has no children × 29
The rest part of value can't be matched to `_border-bottom` grammar × 3
     value: 6px solid dashed
    ------------------^
The rest part of value can't be matched to `_border-top` grammar × 3
     value: 6px solid dashed
    ------------------^
Unknown property `webkit-transition`
Invalid value for `width`
     value: 265
    --------^</pre></details></td></tr>
<tr><td>117</td><td>⚠️</td><td>onlinesbi.com</td><td><details><summary>Errors: 4</summary><pre>Identifier is expected
    3 |…      padding: 10px;                       bottom: 5px; !important;                       right: 5…
----------------------------------------------------------------^
Identifier is expected
    3 |…tom: 5px; !important;                       right: 5px; !important;                       line-hei…
----------------------------------------------------------------^
Selector is expected
    3 |…ius: 6px;                   z-index: 10;               };
----------------------------------------------------------------^
RightParenthesis is expected
  504 |    filter: alpha(opacity=0);
--------------------------------^</pre></details></td><td><details><summary>5 warnings</summary><pre>Invalid value for `border-radius`
     value: px
    --------^
Invalid value for `background-position`
     value: no-repeat
    --------^
Unknown property `_noFocusLine`
Node has no children
Invalid value for `top`
     value: 10
    --------^</pre></details></td></tr>
<tr><td>118</td><td>🆗</td><td>ask.com</td><td><details><summary>Errors: 9</summary><pre>Semicolon or block is expected
    3 |@galleria-flickr-min (SFConflict meATa1b0n-com 2017-02-12-23-35-56)-js-asset-key: "/s/0-2-19/galle…
---------------------------------------------------------------------------------------^
Semicolon or block is expected
    3 |…lict meATa1b0n-com 2017-02-12-23-35-56)-min-js-asset-key: "/s/0-2-19/galleria.flickr.min (SFConfli…
----------------------------------------------------------------^
Semicolon or block is expected
    3 |…Conflict meATa1b0n-com 2017-02-12-23-35-56)-js-asset-key: "/s/0-2-19/galleria.history.min (SFConfl…
----------------------------------------------------------------^
Semicolon or block is expected
    3 |…lict meATa1b0n-com 2017-02-12-23-35-56)-min-js-asset-key: "/s/0-2-19/galleria.history.min (SFConfl…
----------------------------------------------------------------^
Semicolon or block is expected
    3 |…Conflict meATa1b0n-com 2017-02-12-23-35-56)-js-asset-key: "/s/0-2-19/galleria.picasa.min (SFConfli…
----------------------------------------------------------------^
Semicolon or block is expected
    3 |…lict meATa1b0n-com 2017-02-12-23-35-56)-min-js-asset-key: "/s/0-2-19/galleria.picasa.min (SFConfli…
----------------------------------------------------------------^
Semicolon or block is expected
    3 |…nflict meATa1b0n-com 2017-02-12-23-35-56)-html-asset-key: "/s/0-2-19/classic-demo-cdn (SFConflict …
----------------------------------------------------------------^
Semicolon or block is expected
    3 |…Conflict meATa1b0n-com 2017-02-12-23-35-56)-js-asset-key: "/s/0-2-19/galleria.classic.min (SFConfl…
----------------------------------------------------------------^
Semicolon or block is expected
    3 |…lict meATa1b0n-com 2017-02-12-23-35-56)-min-js-asset-key: "/s/0-2-19/galleria.classic.min (SFConfl…
----------------------------------------------------------------^</pre></details></td><td>OK</td></tr>
<tr><td>119</td><td>⚠️</td><td>google.com.eg</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>120</td><td>⚠️</td><td>dropbox.com</td><td><details><summary>Errors: 8</summary><pre>Unexpected input
 10522 |…d-repeat:no-repeat}.rc-anchor-logo-img-ie8{filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
-----------------------------------------------------------------^
RightParenthesis is expected
 10522 |…s cubic-bezier(0.49,0.78,0.46,1.34);filter:alpha(opacity=0)}.rc-image-followup-tile{display:block}…
-----------------------------------------------------------------^
Unexpected input
 10524 |…d-repeat:no-repeat}.rc-anchor-logo-img-ie8{filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
-----------------------------------------------------------------^
RightParenthesis is expected
 10524 |…s cubic-bezier(0.49,0.78,0.46,1.34);filter:alpha(opacity=0)}.rc-image-followup-tile{display:block}…
-----------------------------------------------------------------^
Unexpected input
 10526 |…d-repeat:no-repeat}.rc-anchor-logo-img-ie8{filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
-----------------------------------------------------------------^
RightParenthesis is expected
 10526 |…s cubic-bezier(0.49,0.78,0.46,1.34);filter:alpha(opacity=0)}.rc-image-followup-tile{display:block}…
-----------------------------------------------------------------^
Unexpected input
 10528 |…d-repeat:no-repeat}.rc-anchor-logo-img-ie8{filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
-----------------------------------------------------------------^
RightParenthesis is expected
 10528 |…s cubic-bezier(0.49,0.78,0.46,1.34);filter:alpha(opacity=0)}.rc-image-followup-tile{display:block}…
-----------------------------------------------------------------^</pre></details></td><td><details><summary>17 warnings</summary><pre>Invalid value for `-ms-flex-line-pack` × 2
     value: baseline
    --------^
Invalid value for `-webkit-perspective` × 2
     value: 1000
    --------^
Invalid value for `perspective` × 2
     value: 1000
    --------^
Unknown property `user-drag` × 2
Invalid value for `display` × 2
     value: table-caption
    --------^
Invalid value for `opacity` × 2
     value: 100
    --------^
Invalid value for `padding-right`
     value: obsidian-spacer-redux(1440px,2)
    --------^
Invalid value for `-webkit-box-pack`
     value: top
    --------^
Invalid value for `-ms-flex-pack`
     value: top
    --------^
Invalid value for `justify-content`
     value: top
    --------^
Invalid value for `-webkit-transition-delay`
     value: none
    --------^
Invalid value for `transition-delay`
     value: none
    --------^
Invalid value for `border-bottom-color` × 2
     value: 1px solid #bdc4c9
    --------^
Invalid value for `appearance`
     value: checkbox
    --------^
Invalid value for `appearance`
     value: radio
    --------^
Invalid value for `margin`
     value: 2 auto
    --------^
Node has no children × 8</pre></details></td></tr>
<tr><td>121</td><td>⚠️</td><td>google.com.sa</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>122</td><td>⚠️</td><td>tokopedia.com</td><td><details><summary>Errors: 36</summary><pre>RightParenthesis is expected
   37 |…;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-front{z-index:100}.ui-state-disabl…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…r3aElaqrq56Bq7VAAAOw==);height:100%;filter:alpha(opacity=25);opacity:.25}.ui-progressbar-indetermi…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…r .ui-priority-secondary{opacity:.7;filter:Alpha(Opacity=70);font-weight:400}.ui-state-disabled,.u…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…ader .ui-state-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none}.ui-state-disab…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…ge:none}.ui-state-disabled .ui-icon{filter:Alpha(Opacity=35)}.ui-icon{width:16px;height:16px}.ui-i…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…nd:#aaa 50% 50% repeat-x;opacity:.3;filter:Alpha(Opacity=30)}.ui-widget-shadow{margin:-8px 0 0 -8p…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…nd:#aaa 50% 50% repeat-x;opacity:.3;filter:Alpha(Opacity=30);border-radius:8px}.clearfix{*zoom:1}.…
----------------------------------------------------------------^
Unexpected input
   37 |…77b3);background-repeat:repeat-x;outline:0;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   37 |…nd-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:hover,.close:focus{color:#000;…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…tion:none;cursor:pointer;opacity:.4;filter:alpha(opacity=40)}button.close{padding:0;cursor:pointer…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…e-height:32px}.cat-select{opacity:0;filter:alpha(opacity=0);top:0;height:36px;cursor:pointer;visib…
----------------------------------------------------------------^
Unexpected input
   37 |…a(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   37 |…2",endColorstr="#ffe5e5e5",GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…size:11px;line-height:1.4;opacity:0;filter:alpha(opacity=0);visibility:visible;word-break:break-wo…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…k:break-word}.tooltip.in{opacity:.8;filter:alpha(opacity=80)}.tooltip.top{padding:5px 0;margin-top…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…:23px;border-radius:23px;opacity:.5;filter:alpha(opacity=50)}.carousel-control.right{right:15px;le…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…fff;text-decoration:none;opacity:.9;filter:alpha(opacity=90)}.carousel-indicators{position:absolut…
----------------------------------------------------------------^
Unexpected input
   37 |…x;-moz-border-radius:4px;border-radius:4px;filter:progid:dximagetransform.microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   37 |…149bdf,#0480be);background-repeat:repeat-x;filter:progid:dximagetransform.microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   37 |…ee5f5b,#c43c35);background-repeat:repeat-x;filter:progid:dximagetransform.microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   37 |…62c462,#57a957);background-repeat:repeat-x;filter:progid:dximagetransform.microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   37 |…5bc0de,#339bb9);background-repeat:repeat-x;filter:progid:dximagetransform.microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   37 |…fbb450,#f89406);background-repeat:repeat-x;filter:progid:dximagetransform.microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…isabled .selectBox-arrow{opacity:.5;filter:alpha(opacity=50);border-color:#666}.selectBox-inline.s…
----------------------------------------------------------------^
Unexpected input
   37 |…nd-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
   37 |…ear-gradient(to bottom,#fff 38%,#ccc 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   37 |…ar-gradient(to bottom,#45484d 0,#000 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   37 |…-gradient(to bottom,#a74444 0,#3f0000 67%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   37 |…-gradient(to bottom,#fff 35%,#e17373 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…:100%;transition:opacity 200ms ease;filter:Alpha(opacity=50);background:rgba(255,255,255,.8);-webk…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |… ease;transition:opacity 200ms ease;filter:Alpha(Opacity=50);opacity:.5;background:#869791}.owl-th…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…theme .owl-dots .owl-dot:hover span{filter:Alpha(Opacity=70);opacity:.7}.owl-theme .owl-dots .owl-…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…heme .owl-dots .owl-dot.active span{filter:Alpha(Opacity=100);opacity:1;transition:all .3s ease 0s…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…:100%;transition:opacity 200ms ease;filter:Alpha(opacity=50);opacity:.5;background:#869791;-webkit…
----------------------------------------------------------------^
RightParenthesis is expected
   37 |…er .swiper-pagination-bullet-active{filter:Alpha(opacity=100);opacity:1;transition:all .3s ease 0;…
----------------------------------------------------------------^</pre></details></td><td><details><summary>52 warnings</summary><pre>Node has no children × 36
Unknown property `-webkit-margin-top-collapse`
Invalid value for `background-image`
     value: -moz-linear-gradient(to top,#08c,#0077b3)
    -----------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to top,#08c,#0077b3)
    --------------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to top,#08c,#0077b3)
    ---------------------------^
Invalid value for `*margin`
     value: -5px05px
    --------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to top,#f2f2f2,#e5e5e5)
    -----------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to top,#f2f2f2,#e5e5e5)
    --------------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to top,#f2f2f2,#e5e5e5)
    ---------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to top,#f5f5f5,#f9f9f9)
    -----------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to top,#f5f5f5,#f9f9f9)
    --------------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to top,#f5f5f5,#f9f9f9)
    ---------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to top,#149bdf,#0480be)
    -----------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to top,#149bdf,#0480be)
    --------------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to top,#149bdf,#0480be)
    ---------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to top,#ee5f5b,#c43c35)
    -----------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to top,#ee5f5b,#c43c35)
    --------------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to top,#ee5f5b,#c43c35)
    ---------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to top,#62c462,#57a957)
    -----------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to top,#62c462,#57a957)
    --------------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to top,#62c462,#57a957)
    ---------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to top,#5bc0de,#339bb9)
    -----------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to top,#5bc0de,#339bb9)
    --------------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to top,#5bc0de,#339bb9)
    ---------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to top,#fbb450,#f89406)
    -----------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to top,#fbb450,#f89406)
    --------------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to top,#fbb450,#f89406)
    ---------------------------^
The rest part of value can't be matched to `outline` grammar
     value: medium 0
    ---------------^
Unknown property `webkit-border-radius`
Invalid value for `width`
     value: device-width
    --------^
Invalid value for `filter`
     value: gray
    --------^
Invalid value for `background`
     value: color(#e0e0e0 b(10%))
    --------^
Invalid value for `background`
     value: color(#42b549 b(10%))
    --------^
Invalid value for `background`
     value: color(#f26039 b(10%))
    --------^
Invalid value for `border-color`
     value: color(#bdbdbd b(10%))
    --------^
Invalid value for `font-size`
     value: 12
    --------^
Unknown property `-webkit-margin-end`
Unknown property `box-shfavow`
Unknown property `-webkit-box-shfavow`
Unknown property `-moz-box-shfavow`
Unknown property `border-rfavius`
Invalid value for `background`
     value: -webkit-gradient(left top,right top,color-stop(0,rgba(249,172,192,1…
    -------------------------^
Invalid value for `-moz-user-select`
     value: auto
    --------^
Invalid value for `-ms-user-select`
     value: auto
    --------^
Invalid value for `cursor`
     value: -o-grab
    --------^
Invalid value for `cursor`
     value: -ms-grab
    --------^
Invalid value for `-webkit-transition`
     value: scale(1.3,1.3)
    --------^
Invalid value for `-moz-transition`
     value: scale(1.3,1.3)
    --------^
Invalid value for `-ms-transition`
     value: scale(1.3,1.3)
    --------^
Invalid value for `-o-transition`
     value: scale(1.3,1.3)
    --------^
Invalid value for `transition`
     value: scale(1.3,1.3)
    --------^
The rest part of value can't be matched to `transition` grammar
     value: all .3s ease 0
    ---------------------^</pre></details></td></tr>
<tr><td>123</td><td>⚠️</td><td>discordapp.com</td><td><details><summary>Errors: 1</summary><pre>Number, dimension, ratio or identifier is expected
    3 |…lor:#f04747;text-decoration:underline}@media (max-width:"../../../styles/vars/MediaQueries.mod.css…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Unknown property `font-smooth`
Invalid value for `image-rendering` × 3
     value: -webkit-crisp-edges
    --------^
Invalid value for `image-rendering` × 4
     value: -o-pixelated
    --------^
Invalid value for `-ms-flex-pack`
     value: stretch
    --------^
Invalid value for `-webkit-box-pack`
     value: stretch
    --------^
Unknown property `d` × 12
Invalid value for `font-weight` × 3
     value: 650
    --------^
Invalid value for `margin-top`
     value: 1.3
    --------^
Invalid value for `-ms-user-select`
     value: all
    --------^
Invalid value for `resize`
     value: auto
    --------^
Invalid value for `-webkit-box-shadow`
     value: 0 4px 14px 0 rgba(#000 .4)
    --------------------------^
Invalid value for `box-shadow`
     value: 0 4px 14px 0 rgba(#000 .4)
    --------------------------^
Unknown property `+leftp` × 3
Unknown property `fontweight`
Invalid value for `background-color`
     value: none
    --------^
Invalid value for `max-width`
     value: auto
    --------^
Invalid value for `-ms-filter`
     value: brightness(90%)
    --------^
Invalid value for `background`
     value: linear-gradient(90deg,#f9f9f9)
    ------------------------------^
Invalid value for `background-image`
     value: url(/assets/999055db6ea536c96d2f1234536aa290.svg),linear-gradient(0…
    ---------------------------------------------------------------------------…
Invalid value for `position`
     value: flex
    --------^
Unknown property `overflow-scrolling`
Invalid value for `font-style`
     value: light
    --------^
Invalid value for `font-style`
     value: medium
    --------^
Invalid value for `font-style`
     value: semibold
    --------^
Invalid value for `font-style`
     value: bold
    --------^
Unknown property `justifycontent` × 2
Invalid value for `margin`
     value: 4
    --------^
Invalid value for `border-radius`
     value: 3
    --------^</pre></details></td></tr>
<tr><td>124</td><td>⚠️</td><td>fc2.com</td><td><details><summary>Errors: 3</summary><pre>Unexpected input
  229 |    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#FFFFFF, endColorstr=#F0F0F0)
-------------------------^
RightParenthesis is expected
  702 |.HarfTone    {opacity:0.30; filter:alpha(opacity=30); -ms-filter:alpha(opacity=30);}
-------------------------------------------------------^
RightParenthesis is expected
  702 |.HarfTone    {opacity:0.30; filter:alpha(opacity=30); -ms-filter:alpha(opacity=30);}
-------------------------------------------------------------------------------------^</pre></details></td><td><details><summary>4 warnings</summary><pre>Node has no children × 3
The rest part of value can't be matched to `font-family` grammar
     value: Verdana,Helvetica,"ＭＳ Ｐゴシック","MS P Gothic","ヒラギノ角ゴ Pro W3","Hiragin…
    ---------------------------------------------------------------------------…
The rest part of value can't be matched to `background-position` grammar
     value: initial initial
    ---------------^
The rest part of value can't be matched to `background-repeat` grammar
     value: initial initial
    ---------------^</pre></details></td></tr>
<tr><td>125</td><td>⚠️</td><td>google.com.pk</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>126</td><td>⚠️</td><td>exdynsrv.com</td><td colspan="2">–</td></tr>
<tr><td>127</td><td>⚠️</td><td>nytimes.com</td><td><details><summary>Errors: 28</summary><pre>Unexpected input
  483 |    margin-bottom: 0=;
---------------------------^
Number or identifier is expected
  710 |  color: ##ffffff;
-----------------^
RightParenthesis is expected
 1273 |…f7f7f7}.button.disabled{opacity:0.5;filter:alpha(opacity=50);cursor:default}.button .button-text{d…
----------------------------------------------------------------^
RightParenthesis is expected
 1273 |…dal-container .overlay{opacity:0.95;filter:alpha(opacity=95);position:fixed;top:0;left:0;width:100…
----------------------------------------------------------------^
RightParenthesis is expected
 1273 |…r:#fff}.search-overlay{opacity:0.95;filter:alpha(opacity=95);background-color:#fff;position:fixed;…
----------------------------------------------------------------^
RightParenthesis is expected
 1273 |…end-card-play-button span{opacity:0;filter:alpha(opacity=0);transition:all 0.3s ease-out;display:i…
----------------------------------------------------------------^
RightParenthesis is expected
 1273 |…end-card-play-button span{opacity:1;filter:alpha(opacity=100)}.media.video .video-end-card.layout-…
----------------------------------------------------------------^
RightParenthesis is expected
 1273 |…d-thumb{position:relative;opacity:0;filter:alpha(opacity=0);transition:opacity 0.3s ease-out;displ…
----------------------------------------------------------------^
RightParenthesis is expected
 1273 |…eo-end-card-thumb.fade-in{opacity:1;filter:alpha(opacity=100)}.media.video .video-end-card.layout-…
----------------------------------------------------------------^
RightParenthesis is expected
 1273 |…nd-card-thumb-image img{opacity:0.5;filter:alpha(opacity=50)}.media.video .video-end-card.layout-s…
----------------------------------------------------------------^
RightParenthesis is expected
 1273 |…-end-card-thumb-image img{opacity:1;filter:alpha(opacity=100);display:block;margin:0;padding:0;wid…
----------------------------------------------------------------^
RightParenthesis is expected
 1273 |…-end-card-thumb-image img{opacity:1;filter:alpha(opacity=100)}.media.video .video-end-card.layout-…
----------------------------------------------------------------^
RightParenthesis is expected
 1273 |…3px;transition:1s opacity;opacity:1;filter:alpha(opacity=100);position:absolute;left:12px;top:19px…
----------------------------------------------------------------^
RightParenthesis is expected
 1273 |…read .message-link:before{opacity:0;filter:alpha(opacity=0)}.notifications-modal .message.message-…
----------------------------------------------------------------^
Unexpected input
 1273 |… .video-player .media-action-overlay:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
 1273 |…ntainer{border-radius:2px;opacity:0;filter:alpha(opacity=0);transition:all 0.2s ease-out;transitio…
----------------------------------------------------------------^
RightParenthesis is expected
 1273 |…y:hover .icon-container{opacity:100;filter:alpha(opacity=10000)}.video-section .video-playlist .st…
----------------------------------------------------------------^
RightParenthesis is expected
 1273 |…overlay .icon-container{opacity:100;filter:alpha(opacity=10000);background:none;border:none}.video…
----------------------------------------------------------------^
Unexpected input
 1283 |…gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5));filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
 1283 |…gradient(top,rgba(0,0,0,0),rgba(0,0,0,.7));filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
 1283 |…gradient(top,rgba(0,0,0,0),rgba(0,0,0,.7));filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
 1283 |…gradient(top,rgba(0,0,0,0),rgba(0,0,0,.6));filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
 1283 |…gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5));filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
 1283 |…gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5));filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
 1283 |…gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5));filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
 1283 |…gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5));filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
 1307 |…gradient(top,rgba(0,0,0,.6),rgba(0,0,0,0));filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
 1307 |…r-gradient(right,#fff,rgba(255,255,255,0));filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^</pre></details></td><td><details><summary>23 warnings</summary><pre>Node has no children × 28
Invalid value for `-webkit-flex-wrap`
     value: flex-top
    --------^
Invalid value for `-ms-flex-wrap`
     value: flex-top
    --------^
Invalid value for `flex-wrap`
     value: flex-top
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,transparent 50%,rgba(0,0,0,0.4) 340px)
    ------------------------^
Invalid value for `opacity` × 2
     value: 100
    --------^
Invalid value for `padding`
     value: none
    --------^
Invalid value for `filter` × 3
     value: "alpha(opacity=75)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=0)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=100)"
    --------^
Invalid value for `filter` × 2
     value: "alpha(opacity=40)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=85)"
    --------^
Invalid value for `filter` × 2
     value: "alpha(opacity=90)"
    --------^
Invalid value for `filter` × 3
     value: "alpha(opacity=30)"
    --------^
Invalid value for `filter` × 2
     value: "alpha(opacity=20)"
    --------^
Invalid value for `filter` × 2
     value: "alpha(opacity=50)"
    --------^
Unknown property `-webkit-font-smooth`
Invalid value for `background-image` × 5
     value: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.5))
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.7))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.6))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,.6),rgba(0,0,0,0))
    ------------------------^
Invalid value for `color`
     value: 1px solid #fff
    --------^
Invalid value for `background-image`
     value: linear-gradient(right,#fff,rgba(255,255,255,0))
    ------------------------^</pre></details></td></tr>
<tr><td>128</td><td>⚠️</td><td>tianya.cn</td><td><details><summary>Errors: 11</summary><pre>RightParenthesis is expected
    5 |…k{background-color:#fff;opacity:.75;filter:alpha(opacity=75)}.dark-mask{background-color:#000;opac…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…sk{background-color:#000;opacity:.7;filter:alpha(opacity=70);z-index:1300}.post-func-close{border-…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…nsition:all .2s ease 0s;opacity:.88;filter:alpha(opacity=88);background-color:#2480d3}.post-func-c…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…dth:37.5px;height:37.5px;opacity:.6;filter:alpha(opacity=60)}.post-func-close-s:before{width:20px;…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…background-size:20px auto;opacity:1;filter:alpha(opacity=100)}.post-func{position:fixed;bottom:100…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ransition:all .2s ease 0s;opacity:0;filter:alpha(opacity=0);border-radius:250px}.post-func a{-webk…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ackground-color:#2480d3;opacity:.88;filter:alpha(opacity=88);content:""}.post-func .circle_open{wi…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…2480d3;border-radius:80px;opacity:1;filter:alpha(opacity=100);display:none}.post-func .i-close:bef…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…te(45deg)}.post-func-open{opacity:1;filter:alpha(opacity=100);-webkit-transform:scale(1);transform…
----------------------------------------------------------------^
Unexpected input
    5 |…:space-between}-webkit-tap-highlight-color:rgba(0,0,0,0);.ty-m-nav .m-header{background:#fff}.ty-n…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…ap:before,.tab-wrap:after{opacity:1;filter:alpha(opacity=100);display:block;height:45px;position:a…
----------------------------------------------------------------^</pre></details></td><td><details><summary>2 warnings</summary><pre>Node has no children × 10
Invalid value for `vertical-align`
     value: center
    --------^</pre></details></td></tr>
<tr><td>129</td><td>⚠️</td><td>amazonaws.com</td><td><details><summary>Errors: 61</summary><pre>RightParenthesis is expected
    5 |…rm.Microsoft.Alpha(Opacity=" 60 ")";filter:alpha(opacity=60);opacity:.6}.aws-form-response{positio…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…orm.Microsoft.Alpha(Opacity=" 0 ")";filter:alpha(opacity=0);opacity:0}.aws-form-response-wrapper{p…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…orm.Microsoft.Alpha(Opacity=" 0 ")";filter:alpha(opacity=0);opacity:0}.aws-form-wrapper.aws-form-s…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…m.Microsoft.Alpha(Opacity=" 100 ")";filter:alpha(opacity=100);opacity:1;z-index:2;-webkit-transiti…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…m.Microsoft.Alpha(Opacity=" 100 ")";filter:alpha(opacity=100);opacity:1}table{background-color:tra…
----------------------------------------------------------------^
Unexpected input
    5 |…ve-dropdown{position:absolute;left:-9999px;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    5 |…mb-wrapper .breadcrumb .small-logo-wrapper{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    5 |…align:center;padding:15px;margin:8px 8px 0;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    5 |…ftnavcontainer .sidebar-cta.show-in-author{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    5 |…ion-duration:0.2s;transition-duration:0.2s;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    5 |…ion-duration:0.2s;transition-duration:0.2s;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    5 |…ion-duration:0.4s;transition-duration:0.4s;filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    5 |…ion-duration:0.4s;transition-duration:0.4s;filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    5 |…ion-duration:0.4s;transition-duration:0.4s;filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    5 |…eftnavcontainer .affix-bottom .sidebar-cta{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    5 |…en}.leftnavcontainer.no-affix .sidebar-cta{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    5 |…ion .accordion-heading .accordion-toggle i{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    5 |…dion-heading .accordion-toggle.collapsed i{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    5 |…ousel-type-full-width:hover .carousel-next{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    5 |…1px;box-shadow:1px 1px 1px rgba(0,0,0,0.4);filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    5 |…arousel-dot:hover{background-color:#fbfbfb;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    5 |…e4;-webkit-tap-highlight-color:transparent;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…m.Microsoft.Alpha(Opacity=" 100 ")";filter:alpha(opacity=100);opacity:1;transition-delay:.185s}.aw…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…orm.Microsoft.Alpha(Opacity=" 0 ")";filter:alpha(opacity=0);opacity:0;transition-delay:.185s}.aws-…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…orm.Microsoft.Alpha(Opacity=" 0 ")";filter:alpha(opacity=0);opacity:0;transition-delay:.185s}.aws-…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…m.Microsoft.Alpha(Opacity=" 100 ")";filter:alpha(opacity=100);opacity:1;transition-delay:.185s}.aw…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…m.Microsoft.Alpha(Opacity=" 100 ")";filter:alpha(opacity=100);opacity:1;transition-delay:.185s}.aw…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…orm.Microsoft.Alpha(Opacity=" 0 ")";filter:alpha(opacity=0);opacity:0;transition-delay:.185s}.aws-…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…m.Microsoft.Alpha(Opacity=" 100 ")";filter:alpha(opacity=100);opacity:1;transition-delay:.185s}.aw…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…orm.Microsoft.Alpha(Opacity=" 0 ")";filter:alpha(opacity=0);opacity:0;transition-delay:.185s}.aws-…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…m.Microsoft.Alpha(Opacity=" 100 ")";filter:alpha(opacity=100);opacity:1;transition-delay:.185s}.aw…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…orm.Microsoft.Alpha(Opacity=" 0 ")";filter:alpha(opacity=0);opacity:0;transition-delay:.185s}.aws-…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…m.Microsoft.Alpha(Opacity=" 100 ")";filter:alpha(opacity=100);opacity:1;transition-delay:.185s}.aw…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…orm.Microsoft.Alpha(Opacity=" 0 ")";filter:alpha(opacity=0);opacity:0;transition-delay:.185s}.aws-…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…orm.Microsoft.Alpha(Opacity=" 0 ")";filter:alpha(opacity=0);opacity:0;transition-delay:.185s}.aws-…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…m.Microsoft.Alpha(Opacity=" 100 ")";filter:alpha(opacity=100);opacity:1;transition-delay:.185s}.aw…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…orm.Microsoft.Alpha(Opacity=" 0 ")";filter:alpha(opacity=0);opacity:0;transition-delay:.185s}@medi…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…m.Microsoft.Alpha(Opacity=" 100 ")";filter:alpha(opacity=100);opacity:1;transition-delay:.185s}}@m…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…m.Microsoft.Alpha(Opacity=" 100 ")";filter:alpha(opacity=100);opacity:1;transition-delay:.185s}}@m…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…m.Microsoft.Alpha(Opacity=" 100 ")";filter:alpha(opacity=100);opacity:1;transition-delay:.185s}}@m…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…m.Microsoft.Alpha(Opacity=" 100 ")";filter:alpha(opacity=100);opacity:1;transition-delay:.185s}}.c…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…em-wrapper{height:0;overflow:hidden;filter:alpha(opacity=0);opacity:0;padding:0;border-bottom-widt…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…arrow{display:block;font-size:.86em;filter:alpha(opacity=64);opacity:.64;line-height:24px;position…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…e .content-item-wrapper{height:auto;filter:alpha(opacity=100);opacity:1;border-bottom-width:1px}.a…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ottom-width:1px}.active .icon-arrow{filter:alpha(opacity=32);opacity:.32}.active .icon-arrow:befor…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…t-item .tab-title:hover .icon-arrow{filter:alpha(opacity=64);opacity:.64}.expander-menu-accordion …
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…t-item-wrapper{padding:0;height:0px;filter:alpha(opacity=0);opacity:0;border-bottom-width:0}.expan…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…em-wrapper{padding:15px;height:auto;filter:alpha(opacity=100);opacity:1;border-bottom-width:1px;bo…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…t-item-wrapper{padding:0;height:0px;filter:alpha(opacity=0);opacity:0;border-bottom-width:0}.expan…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ordion .m-hidden.active .icon-arrow{filter:alpha(opacity=64);opacity:.64}.expander-menu-accordion …
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…e.content-item h4:hover .icon-arrow{filter:alpha(opacity=64);opacity:.64}.content-item-wrapper{bor…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…t-item-wrapper{padding:0;height:0px;filter:alpha(opacity=0);opacity:0;border-bottom-width:0}.m-hid…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…us:3px}.m-hidden.active .icon-arrow{filter:alpha(opacity=64);opacity:.64}.m-hidden.active .icon-ar…
----------------------------------------------------------------^
Unexpected input
    5 |…ure-carousel .next.disabled{cursor:default;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…m.Microsoft.Alpha(Opacity=" 100 ")";filter:alpha(opacity=100);opacity:1;-webkit-transition-delay:.…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…orm.Microsoft.Alpha(Opacity=" 0 ")";filter:alpha(opacity=0);opacity:0;-webkit-transition-delay:.18…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…orm.Microsoft.Alpha(Opacity=" 0 ")";filter:alpha(opacity=0);opacity:0;-webkit-transition-delay:.18…
----------------------------------------------------------------^
Unexpected input
    6 |…:linear-gradient(180deg,#fee6b0 0,#eeba37);filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
    6 |…:linear-gradient(180deg,#fede97 0,#ecb21f);filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
    6 |…:linear-gradient(180deg,#fee6b0 0,#eeba37);filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
    6 |…:linear-gradient(180deg,#fede97 0,#ecb21f);filter:progid:DXImageTransform.Microsoft.gradient(Gradi…
----------------------------------------------------------------^</pre></details></td><td><details><summary>14 warnings</summary><pre>The rest part of value can't be matched to `-ms-filter` grammar
     value: "progid:DXImageTransform.Microsoft.Alpha(Opacity=" 60 ")"
    -----------------------------------------------------------^
Node has no children × 61
The rest part of value can't be matched to `-ms-filter` grammar × 12
     value: "progid:DXImageTransform.Microsoft.Alpha(Opacity=" 0 ")"
    -----------------------------------------------------------^
The rest part of value can't be matched to `-ms-filter` grammar × 14
     value: "progid:DXImageTransform.Microsoft.Alpha(Opacity=" 100 ")"
    -----------------------------------------------------------^
Invalid value for `word-break` × 2
     value: hyphenate
    --------^
Invalid value for `background`
     value: -webkit-gradient(linear,50% 0%,50% 100%,color-stop(0%,rgba(0,0,0,0.…
    ---------------------------------------------------------------------------…
Invalid value for `-moz-user-select`
     value: auto
    --------^
Invalid value for `-ms-user-select`
     value: auto
    --------^
Invalid value for `cursor`
     value: -o-grab
    --------^
Invalid value for `cursor`
     value: -ms-grab
    --------^
Invalid value for `font-size`
     value: 14
    --------^
Invalid value for `top` × 2
     value: 1
    --------^
Invalid value for `background`
     value: linear-gradient(#f7f7f7 30%,hsla(0,0%,100%,0)),linear-gradient(hsla…
    ---------------------------------------------------------------------------…
The rest part of value can't be matched to `box-shadow` grammar
     value: 0 1px 1px awsNavMobileHeaderBoxShadowColor
    ------------------^</pre></details></td></tr>
<tr><td>130</td><td>⚠️</td><td>theepochtimes.com</td><td colspan="2">–</td></tr>
<tr><td>131</td><td>⚠️</td><td>ebay.de</td><td><details><summary>Errors: 16</summary><pre>Unexpected input
  123 |…m5ltcqnto1o4baovyl.png) no-repeat 0 -200px;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
  123 |…4baovyl.png) no-repeat 0 -200px !important;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
  123 |…us,#gh .btn-prim:active{background:#00509d;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  123 |…(top,#45aad6,#2386c0);text-decoration:none;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  123 |….gh-w a.btn-scnd:active{background:#2386c0;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  123 |…:-moz-linear-gradient(top,#fefefe,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  123 |…d transparent;content:"";opacity:.8;filter:alpha(opacity=80)}.gh-w .caret-dn{margin-top:8px;margin…
----------------------------------------------------------------^
Unexpected input
  123 |…:-moz-linear-gradient(top,#0079bc,#00509d);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  123 |…tant;-ms-filter:"alpha(opacity=60)";filter:alpha(opacity=60);opacity:.6;left:0}.ghn-g-num-c{height…
----------------------------------------------------------------^
RightParenthesis is expected
  130 |…isabled]+.checkbox__icon{opacity:.5;filter:alpha(opacity=50)}.checkbox__custom-control[type="check…
----------------------------------------------------------------^
RightParenthesis is expected
  130 |…isabled]+.checkbox__icon{opacity:.5;filter:alpha(opacity=50)}.checkbox__icon{color:#ccc;display:-w…
----------------------------------------------------------------^
RightParenthesis is expected
  130 |…][disabled]+.radio__icon{opacity:.5;filter:alpha(opacity=50)}.radio__custom-control[type="radio"]+…
----------------------------------------------------------------^
RightParenthesis is expected
  130 |…][disabled]+.radio__icon{opacity:.5;filter:alpha(opacity=50)}.radio__icon{color:#ccc;display:-webk…
----------------------------------------------------------------^
RightParenthesis is expected
  130 |…tch&gt;input[disabled]+span{opacity:.5;filter:alpha(opacity=50)}span.switch{display:-webkit-inline-bo…
----------------------------------------------------------------^
RightParenthesis is expected
  132 |…ria-disabled=true]:focus{opacity:.5;filter:alpha(opacity=50)}button.hl-common-carousel__btn-prev{l…
----------------------------------------------------------------^
RightParenthesis is expected
  132 |…tton[aria-disabled=true]{opacity:.5;filter:alpha(opacity=50)}.hl-card-header__header-container{dis…
----------------------------------------------------------------^</pre></details></td><td><details><summary>15 warnings</summary><pre>Invalid value for `stroke-miterlimit` × 14
     value: 0
    --------^
Node has no children × 16
The rest part of value can't be matched to `-moz-transition` grammar
     value: background-position .1s linear 0
    ---------------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `-moz-transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `-ms-transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `-moz-transition` grammar
     value: visibility 0 linear .1s,opacity .1s linear
    -------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: visibility 0 linear .1s,opacity .1s linear
    -------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: visibility 0 linear .1s,opacity .1s linear
    -------------------^
The rest part of value can't be matched to `transition` grammar
     value: visibility 0 linear .1s,opacity .1s linear
    -------------------^
The rest part of value can't be matched to `transition` grammar × 2
     value: left .15s ease-out 0
    ---------------------------^
Invalid value for `background-color`
     value: none
    --------^
Unknown property `font-display` × 2</pre></details></td></tr>
<tr><td>132</td><td>⚠️</td><td>mediafire.com</td><td><details><summary>Errors: 43</summary><pre>RightParenthesis is expected
   31 |…ge_screen { background-color:#000; filter: alpha(opacity=10); opacity: 0; position: fixed; top: 0p…
----------------------------------------------------------------^
Unexpected input
   31 |…-gradient(top, #EDF1F5 0%, #BFD0E0 100%); filter: progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
RightParenthesis is expected
   31 |…/ .elementDisabled { opacity: .5; filter: alpha(opacity = 50); } /*+++++++++++++++++++++++++++++++…
----------------------------------------------------------------^
RightParenthesis is expected
   31 |… background: rgba(0, 0, 0, 0.65); filter: alpha(opacity = 65); -moz-border-radius: 3px; -webkit-bo…
----------------------------------------------------------------^
Number or identifier is expected
   31 |…adding: 0; text-align: center; font-size: 12px; color: #; } #notify_main span.notify_msgtitle_min …
----------------------------------------------------------------^
Unexpected input
   31 |…: linear-gradient(top, #467bb7, #2d629e); filter: progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   31 |…: linear-gradient(top, #84b943, #619620); filter: progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   31 |… 0; position: absolute; opacity: 0; filter:Alpha(Opacity=0); } .ui-front { z-index: 100; } /* Inte…
----------------------------------------------------------------^
RightParenthesis is expected
   31 |…imated-overlay.gif); height: 100%; filter: alpha(opacity=25); opacity: 0.25; } .ui-progressbar-ind…
----------------------------------------------------------------^
RightParenthesis is expected
   31 |…i-priority-secondary { opacity: .7; filter:Alpha(Opacity=70); font-weight: normal; } .ui-state-dis…
----------------------------------------------------------------^
RightParenthesis is expected
   31 |… .ui-state-disabled { opacity: .35; filter:Alpha(Opacity=35); background-image: none; } .ui-state-…
----------------------------------------------------------------^
RightParenthesis is expected
   31 |…ne; } .ui-state-disabled .ui-icon { filter:Alpha(Opacity=35); /* For IE8 - See #6059 */ } /* Misc …
----------------------------------------------------------------^
RightParenthesis is expected
   31 |…ng) 50% 50% repeat-x; opacity: .3; filter: Alpha(Opacity=30); } .ui-widget-shadow { margin: -8px 0…
----------------------------------------------------------------^
RightParenthesis is expected
   31 |…ng) 50% 50% repeat-x; opacity: .3; filter: Alpha(Opacity=30); border-radius: 8px; } /* This remove…
----------------------------------------------------------------^
Identifier `deep` is expected
   31 |…/*////////////////////////////////////////////Initial*// .ico16.user { background-position: 0px 0p…
----------------------------------------------------------------^
Unexpected input
   31 |…m; line-height: 10em; } .flag-rotate-90 { filter: progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   31 |…form: rotate(90deg); } .flag-rotate-180 { filter: progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   31 |…orm: rotate(180deg); } .flag-rotate-270 { filter: progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   31 |…rotate(270deg); } .flag-flip-horizontal { filter: progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   31 |…rm: scale(-1, 1); } .flag-flip-vertical { filter: progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   31 |…(-90deg); -moz-transform: rotate(-90deg); filter: progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   31 |…(180deg); -moz-transform: rotate(180deg); filter: progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   31 |…und: #2760a3; /* for non-css3 browsers */ filter: progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   31 |…,247,247,1) 0%,rgba(235,235,235,1) 100%); filter: progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   33 |…: linear-gradient(top, #f5f9fc, #ebf0f5); filter: progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   33 |…nk_main { display: block; width: 310px; overflow: hidden: text-overflow: ellipsis; } a.customurl_c…
----------------------------------------------------------------^
Unexpected input
   33 |…{ font-size: 16px; height: 41px; margin-right: 0 padding: 0 13px; } #productPool div:after { displ…
----------------------------------------------------------------^
Unexpected input
   33 |…r-gradient(top, #fff, #FCFCFC 50%, #EEE); filter: progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   33 |…o-linear-gradient(top, #DFFEE5, #CCF5D5); filter: progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   33 |…o-linear-gradient(top, #12b70d, #0c8b09); filter: progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   33 |…: -o-linear-gradient(top, #ffc, #FFE98F); filter: progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   33 |…o-linear-gradient(top, #ffdede, #ffbaba); filter: progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   33 |…: linear-gradient(top, #c0e7f5, #9bd6ed); filter: progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…abled .btn.primary { opacity: .5; filter: alpha(opacity = 50); } #dmcaRequestStep3 { } /*+++++++++…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…IP.netAuthDisabled { opacity: .4; filter: alpha(opacity = 40); } .dmcaIP.netAuthDisabled .dmcaNewI…
----------------------------------------------------------------^
Unexpected input
   33 |… 50%,#80c217 51%,#7cbc0a 100%); /* W3C */ filter: progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   33 |…) 53%,rgba(220,247,84,0) 100%); /* W3C */ filter: progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   33 |…(top, #4c4c4c 0%,#000000 100%); /* W3C */ filter: progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   33 |…ttom, #dbdbdb 0%,#eaeaea 100%); /* W3C */ filter: progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   33 |…6 0%,#bc8d02 50%,#d23d09 100%); /* W3C */ filter: progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   33 |…e 0%,#fdba01 50%,#ff4a0b 100%); /* W3C */ filter: progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   33 |…f 0%,#cccccc 50%,#ffffff 100%); /* W3C */ filter: progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   33 |…0,0) 0%,rgba(0,0,0,0.65) 100%); /* W3C */ filter: progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^</pre></details></td><td><details><summary>45 warnings</summary><pre>Node has no children × 42
Invalid value for `background`
     value: linear-gradient(top,#EDF1F5 0%,#BFD0E0 100%)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,rgba(255,255,255,.3) 0%,rgba(255,255,255,1) 100…
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,.08),rgba(0,0,0,.08))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#eff0f1)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5ffd7,#e1f3c6)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#C2C7CB,#D9DADE)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#2978e6,#4F99E3)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#ecf0f3,#d4d8db)
    ------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: left 0s linear .1s,right 0s linear .1s,margin-right 0s linear .1
    ----------------------------------------------------------------------^
Invalid value for `background`
     value: linear-gradient(top,#5EB4ED 30%,#0C93ED)
    ------------------------^
Invalid value for `border`
     value: 1 px solid #fff
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#467bb7,#2d629e)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#84b943,#619620)
    ------------------------^
Unknown property `rotation` × 4
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,.05),transparent 5px)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,transparent,rgba(0,0,0,.15))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f9fc,#ebf0f5)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(255,255,255,.3),rgba(255,255,255,.1) 50%,r…
    ------------------------^
Invalid value for `background-image` × 4
     value: linear-gradient(top,white,rgba(255,255,255,0))
    ------------------------^
Unknown property `moz-box-shadow`
Invalid value for `background-image`
     value: e6e6e6linear-gradient(left,#fff,#e6e6e6,#fff)
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(255,255,255,.3),rgba(255,255,255,.0)),url(…
    ------------------------^
Invalid value for `background-image`
     value:    -moz-linear-gradient(left,#00aafc,#00f9fd)
    --------^
Invalid value for `background-image`
     value:     -ms-linear-gradient(left,#00aafc,#00f9fd)
    --------^
Invalid value for `background-image`
     value:      -o-linear-gradient(left,#00aafc,#00f9fd)
    --------^
Invalid value for `background-image`
     value:         linear-gradient(left,#00aafc,#00f9fd)
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(255,255,255,.5),rgba(255,255,255,0))
    ------------------------^
Invalid value for `background`
     value: linear-gradient(left,transparent,rgba(0,0,0,.1),transparent)
    ------------------------^
Invalid value for `margin-top`
     value: &lt;empty string&gt;
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#c0e7f5,#9bd6ed)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(bottom,rgba(255,255,255,.3),rgba(255,255,255,0))
    ------------------------^
Invalid value for `background` × 2
     value: linear-gradient(top,#78D7FF 0%,#349EEE 100%)
    ------------------------^
Invalid value for `background`
     value: url(//static.mediafire.com/images/backgrounds/mobileApp/android.png…
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: url(//static.mediafire.com/images/backgrounds/mobileApp/apple.png) …
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: url(//static.mediafire.com/images/backgrounds/mobileApp/android.png…
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: url(//static.mediafire.com/images/backgrounds/mobileApp/apple.png) …
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: linear-gradient(top,#88E7FF 0%,#44AEFE 100%)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(bottom,#C0CAD6 0%,#E1E6EC 100%)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(bottom,#2B68A5 0%,#4CA9DB 100%)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#9dd53a 0%,#a1d54f 50%,#80c217 51%,#7cbc0a 100%…
    ------------------------^
Invalid value for `background`
     value: linear-gradient(left,rgba(220,247,84,0) 0%,rgba(239,244,212,1) 53%,…
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#4c4c4c 0%,#000000 100%)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(bottom,rgba(0,0,0,.25) -10px,transparent 20px)
    ------------------------^
Invalid value for `background`
     value: -webkit-gradient(radial,top center,0px,center center,100%,color-sto…
    --------------------------------^</pre></details></td></tr>
<tr><td>133</td><td>⚠️</td><td>douyu.com</td><td><details><summary>Errors: 46</summary><pre>RightParenthesis is expected
    9 |…ght:6.818%;cursor:pointer;opacity:0;filter:alpha(opacity=0);z-index:3}.pop-zoom-container .pop-zoo…
----------------------------------------------------------------^
RightParenthesis is expected
    9 |…eight:30px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}.pop-cookie-container .pop-cookie-logi…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…ght:6.818%;cursor:pointer;opacity:0;filter:alpha(opacity=0);z-index:3}.pop-zoom-container .pop-zoo…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…eight:30px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}.pop-cookie-container .pop-cookie-logi…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…0%;background-color:#000;opacity:.6;filter:Alpha(Opacity=60)}.login-pop-shadow,.loginbox-shadow{op…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…-shadow,.loginbox-shadow{opacity:.7;filter:Alpha(Opacity=70)}.dia-ie7-container{background:url(../…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…ght:100%;background:#000;opacity:.7;filter:alpha(opacity=70)}.pop-tips .arrow{position:absolute;bo…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…px;background-color:#000;opacity:.5;filter:alpha(opacity=50)}.nobility-privilege .privilege-items …
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…0%;background-color:#000;opacity:.5;filter:alpha(opacity=50)}.normallevel-box{position:absolute;le…
----------------------------------------------------------------^
Identifier is expected
   11 |…{position:relative;float:left;width:880px;height:560px}. .normallevel-btn-con{position:absolute;le…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…opacity:.5;-o-opacity:.5;opacity:.5;filter:alpha(opacity=50)}.fans-badge-box{position:absolute;lef…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…top:0;left:0;z-index:1002;opacity:0;filter:Alpha(Opacity=0);background-color:#000}.vcode9{width:38…
----------------------------------------------------------------^
Unexpected input
   11 |…und:-moz-linear-gradient(top,#fff,#fafafa);filter:progid:DXImageTransform.Microsoft.Gradient(gradi…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…px;background-color:#000;opacity:.9;filter:alpha(opacity=90);padding-left:8px}.vcode9-sign .s-cdow…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…ground:#000;opacity:.7;display:none;filter:alpha(opacity=70)}.shark-ui-dialog-title{font-size:14px…
----------------------------------------------------------------^
Unexpected input
   11 |… 0 1px 0,#b75922 -1px 0 0,#b75922 0 -1px 0;filter:progid:DXImageTransform.Microsoft.Glow(Color='#b…
----------------------------------------------------------------^
Unexpected input
   11 |…0,#555 0 1px 0,#555 -1px 0 0,#555 0 -1px 0;filter:progid:DXImageTransform.Microsoft.Glow(Color='#5…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |….dia-presented-btn:hover{opacity:.8;filter:alpha(opacity=80)}.dia-presented-btn{width:114px;height…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…-repeat}.dia-tab-btn img{opacity:.6;filter:alpha(opacity=60)}.dia-nobility-tab th .dia-tab-btn{wid…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…td:hover .dia-tab-btn img{opacity:1;filter:alpha(opacity=100)}.dia-nobility-tab td.cur{background:…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…eight:100%;cursor:pointer;opacity:0;filter:alpha(opacity=0);transition:all 250ms ease-out;-webkit-…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…sition:all 250ms ease-out;opacity:0;filter:alpha(opacity=0);background:url(../../../res/page/index…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…y&gt;ul&gt;li a:hover .pic span{opacity:1;filter:alpha(opacity=100)}.banner .starshow .classify&gt;ul&gt;li a:…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…ul&gt;li a:hover .pic span b{opacity:1;filter:alpha(opacity=100);z-index:1;-webkit-transform:scale(1)…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…ign-2 .s-pic-2 img:hover{opacity:.8;filter:alpha(opacity=80)}.banner .starshow .classify&gt;ul&gt;li a .…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…t-align:center;color:#fff;opacity:0;filter:alpha(opacity:0);transition:all .3s ease-in-out;-webkit…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…1px;bottom:1px;color:#f70;opacity:0;filter:alpha(opacity:0);transition:all .3s ease-in;-webkit-tra…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…a:hover .pic-box .pb-wait{opacity:1;filter:alpha(opacity=100);border-radius:4px}.row-1 .hot-play l…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…hot-recom ul li:hover img.img-hover{filter:alpha(opacity:100);opacity:1}.hot-bg,.phoneplay-bg,.web…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…}.row-2 .hot-recom li img.img-hover{filter:alpha(opacity:0);opacity:0;position:absolute;top:0;left…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…e;top:5px;z-index:2;background:#fff;filter:alpha(opacity:0);opacity:0;transition:all .3s ease-in-o…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…e-in}.row-3 li img:hover{opacity:.8;filter:alpha(opacity=80)}.row-4 .theatre-left .ish,.row-4 .the…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…ish,.row-4 .theatre-right{opacity:0;filter:alpha(opacity=0);display:block}.row-4{margin-top:20px;b…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…over p span.theatre-right{opacity:1;filter:alpha(opacity=100)}.row-5{position:relative;overflow:hi…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…5 .act-list li img:hover{opacity:.8;filter:alpha(opacity=80)}.row-pack .play-list li{float:left;wi…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…p:-25px;margin-left:-25px;opacity:0;filter:alpha(opacity=0);-webkit-transform:scale(2);-ms-transfo…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…lay-list li .mes-tit span{opacity:1;filter:alpha(opacity=100);transition:all 150ms ease-in-out;-we…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…st li:hover .mes-tit span{opacity:0;filter:alpha(opacity=0)}.row-pack .play-list li .mes-tit .tag{…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…k .play-list li a:hover b{opacity:1;filter:alpha(opacity=100);z-index:1;-webkit-transform:scale(1)…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…-list li a:hover i.black{opacity:.2;filter:alpha(opacity=20)}
----------------------------------------------------------------^
Unexpected input
   15 |…}.aui_sw{background-position:-3px -45px;_png:#00f/ie6/sw.png}.aui_se{background-position:-15px -45…
----------------------------------------------------------------^
Unexpected input
   15 |….aui_se{background-position:-15px -45px;_png:#00f/ie6/se.png}.aui_close{top:0;*top:-5px;right:0;_z…
----------------------------------------------------------------^
Unexpected input
   15 |…150127) 6px -113px no-repeat #fa7102;_png:#00f/ie6/close.png;transition:all .5s ease-in-out 0s;-mo…
----------------------------------------------------------------^
Unexpected input
   15 |…6002}.aui_s{background-position:0 -100px;_png:#00f/ie6/s.png}@media screen and (min-width:0){.aui_…
----------------------------------------------------------------^
Unexpected input
   15 |…}.aui_sw{background-position:-3px -45px;_png:#00f/ie6/sw.png}.aui_se{background-position:-15px -45…
----------------------------------------------------------------^
Unexpected input
   15 |….aui_se{background-position:-15px -45px;_png:#00f/ie6/se.png}.aui_n{background-position:0 -55px}.a…
----------------------------------------------------------------^</pre></details></td><td><details><summary>18 warnings</summary><pre>Invalid value for `filter` × 6
     value: "alpha(opacity=75)"
    --------^
Invalid value for `filter` × 2
     value: "alpha(opacity=0)"
    --------^
Invalid value for `filter` × 2
     value: "alpha(opacity=100)"
    --------^
Invalid value for `filter` × 4
     value: "alpha(opacity=40)"
    --------^
Invalid value for `filter` × 2
     value: "alpha(opacity=85)"
    --------^
Invalid value for `filter` × 4
     value: "alpha(opacity=90)"
    --------^
Invalid value for `filter` × 6
     value: "alpha(opacity=30)"
    --------^
Invalid value for `filter` × 4
     value: "alpha(opacity=20)"
    --------^
Invalid value for `filter` × 4
     value: "alpha(opacity=50)"
    --------^
Node has no children × 39
Unknown property `moz-transform-style`
Invalid value for `-ms-filter`
     value: drop-shadow(0 0 7px rgba(0,0,0,.17))
    --------^
The rest part of value can't be matched to `-webkit-text-shadow` grammar
     value: #b75922 1px 0 0,#b75922 0 1px 0,2#b75922 -1px 0 0,#b75922 0 -1px 0
    ---------------------------------------^
The rest part of value can't be matched to `-webkit-text-shadow` grammar
     value: #555 1px 0 0,#555 0 1px 0,2#555 -1px 0 0,#555 0 -1px 0
    ---------------------------------^
The rest part of value can't be matched to `min-width` grammar
     value: 0 \18
    ---------^
The rest part of value can't be matched to `font-family` grammar
     value: Tahoma,Arial/9
    --------------------^
Invalid value for `*width`
     value: 1
    --------^
Unknown property `_png` × 6</pre></details></td></tr>
<tr><td>134</td><td>⚠️</td><td>ettoday.net</td><td colspan="2">–</td></tr>
<tr><td>135</td><td>⚠️</td><td>ntd.tv</td><td><details><summary>Errors: 4</summary><pre>RightParenthesis is expected
    6 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
    8 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
Colon is expected
   16 |…ft:calc(50% - 30px)}aside .the_editorial_advises_you{las;:30px}aside .the_editorial_advises_you li…
----------------------------------------------------------------^
Identifier is expected
   16 |…t:calc(50% - 30px)}aside .the_editorial_advises_you{las;:30px}aside .the_editorial_advises_you li{…
----------------------------------------------------------------^</pre></details></td><td><details><summary>2 warnings</summary><pre>Node has no children
Invalid value for `vertical-align` × 2
     value: -webkit-baseline-middle
    --------^</pre></details></td></tr>
<tr><td>136</td><td>⚠️</td><td>cnn.com</td><td colspan="2">–</td></tr>
<tr><td>137</td><td>⚠️</td><td>spotify.com</td><td>OK</td><td><details><summary>6 warnings</summary><pre>The rest part of value can't be matched to `color` grammar × 3
     value: #000,#fae62d
    ------------^
Invalid value for `width`
     value: device-width
    --------^
Invalid value for `-webkit-transition-duration`
     value: 0
    --------^
Invalid value for `transition-duration`
     value: 0
    --------^
Invalid value for `display` × 9
     value: -moz-flex
    --------^
Invalid value for `display` × 9
     value: -ms-flex
    --------^</pre></details></td></tr>
<tr><td>138</td><td>⚠️</td><td>stackexchange.com</td><td><details><summary>Errors: 3</summary><pre>Unexpected input
    5 |…near-gradient(to bottom, #fba00c, #f67c16);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…near-gradient(to bottom, #ffffff, #e2e2e2);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…:linear-gradient(to bottom, #eee, #fdfdfd);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>9 warnings</summary><pre>Invalid value for `-ms-flex-wrap`
     value: none
    --------^
Invalid value for `flex-wrap`
     value: none
    --------^
Invalid value for `min-width`
     value: none
    --------^
Invalid value for `min-height`
     value: none
    --------^
Invalid value for `align-items`
     value: right
    --------^
Invalid value for `grid-template-columns`
     value: repeat(auto-fit,minmax(130px,1fr))
    ---------------^
Node has no children × 3
Invalid value for `-moz-background-clip` × 2
     value: content
    --------^
The rest part of value can't be matched to `content` grammar
     value: counter(section) "." counters(clause,".") " "
    -----------------------------^</pre></details></td></tr>
<tr><td>139</td><td>⚠️</td><td>rakuten.co.jp</td><td colspan="2">–</td></tr>
<tr><td>140</td><td>⚠️</td><td>1688.com</td><td><details><summary>Errors: 20</summary><pre>RightParenthesis is expected
   29 |…y:.4;-ms-filter:"alpha(Opacity=40)";filter:alpha(opacity=40);top:0}.ui-upbrowser-float-win{backgro…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…54,0,.95);_background-color:#ff3600;filter:alpha(opacity=95)}ul.nav-main li a:hover,ul.nav-main li…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…54,0,.95);_background-color:#ff3600;filter:alpha(opacity=95)}.nav-main-item-intro.line-2 span{heig…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ba(0,0,0,.2);_background-color:#000;filter:alpha(opacity=20);z-index:10;display:none}#main_slider:…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ba(0,0,0,.4);_background-color:#000;filter:alpha(opacity=40)}#main_slider .prev{left:0}#main_slide…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…,255,255,.5);_background-color:#fff;filter:alpha(opacity=50)}.logoImageContain{overflow:hidden;mar…
----------------------------------------------------------------^
Identifier is expected
   33 |…k5 a.index{font-weight:700!important;margin-bottom:14px;!important}#industry_floors_list li.floor_…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ba(0,0,0,.2);_background-color:#000;filter:alpha(opacity=20);display:none}.industry_floor_item_dyn…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ba(0,0,0,.4);_background-color:#000;filter:alpha(opacity=40)}.industry_floor_item_dynamic .good_of…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ba(0,0,0,.3);_background-color:#000;filter:alpha(opacity=30)}.community_ctn .body .community_left …
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ba(0,0,0,.2);_background-color:#000;filter:alpha(opacity=20);top:89px;z-index:10;display:none}.com…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ba(0,0,0,.4);_background-color:#000;filter:alpha(opacity=40)}.community_ctn .body .community_left …
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…8,248,.9);_background-color:#f8f8f8;filter:alpha(opacity=90)}.community_ctn .body .community_left …
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ba(0,0,0,.2);_background-color:#000;filter:alpha(opacity=20)}.latest_view_ctn .body .latest_view_t…
----------------------------------------------------------------^
RightParenthesis is expected
   33 |…ba(0,0,0,.4);_background-color:#000;filter:alpha(opacity=40)}.latest_view_ctn .body .latest_view_t…
----------------------------------------------------------------^
RightParenthesis is expected
   41 |…one;background-color:rgba(0,0,0,.5);filter:alpha(opacity=50)}.ocms-component-1688-pc-home-identity…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…d-color:rgba(0,0,0,.2);z-index:1005;filter:alpha(opacity=20)}.firstScreen .floatLayer .floatLayer_…
----------------------------------------------------------------^
RightParenthesis is expected
   44 |…ver{background-color:rgba(0,0,0,.4);filter:alpha(opacity=40)}.firstScreen .floatLayer_img,.firstSc…
----------------------------------------------------------------^
RightParenthesis is expected
   67 |… #000;height:100%;left:0;opacity:.5;filter:alpha(opacity=50);position:fixed;top:0;width:100%;z-ind…
----------------------------------------------------------------^
Unexpected input
  343 |    filter: progid:DXImageTransform.Microsoft.Shadow(Strength=5, Direction=90, Color='#E5E5E5');
-------------------------^</pre></details></td><td><details><summary>9 warnings</summary><pre>Invalid value for `font`
     value: Tahoma,Arial,'\5B8B\4F53',sans-serif
    --------^
Invalid value for `word-spacing`
     value: no-wrap
    --------^
Invalid value for `font-weight`
     value: 50
    --------^
Node has no children × 19
Invalid value for `text-justify` × 4
     value: distribute-all-lines
    --------^
Invalid value for `perspective`
     value: 1000
    --------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to left,#ff4800,#ff00ba)
    -----------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to left,#ff4800,#ff00ba)
    ---------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to left,#ff4800,#ff00ba)
    --------------------------------^</pre></details></td></tr>
<tr><td>141</td><td>⚠️</td><td>aparat.com</td><td colspan="2">–</td></tr>
<tr><td>142</td><td>⚠️</td><td>steamcommunity.com</td><td><details><summary>Errors: 11</summary><pre>Identifier is expected
  363 |            background: -webkit-linear-gradient( -60deg, #417a9b 5%,#67c1f5 95%););background: lin…
----------------------------------------------------------------------------------------^
Identifier is expected
  363 |…round: linear-gradient( -60deg, #417a9b 5%,#67c1f5 95%););    }
----------------------------------------------------------------^
Unexpected input
  509 |    background: #transparent;    }
------------------------^
Unexpected input
  523 |    background: #transparent;    }
------------------------^
Unexpected input
 2878 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3d6c8d', endColorstr='#2e5…
-------------------------^
Identifier is expected
 3067 |…  rgba(88,88,88,1) 0%,rgba(76,76,76,1) 100%); /* W3C */*/
----------------------------------------------------------------^
RightParenthesis is expected
 5374 |    filter:alpha(opacity=60);
-------------------------------^
Unexpected input
 7438 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001b1b1b', endColorstr='#1…
-------------------------^
Identifier is expected
 8428 |    background: -webkit-linear-gradient( 107deg, #24313f 0%,#171a21 33%););background: linear-grad…
--------------------------------------------------------------------------------^
Identifier is expected
 8428 |…round: linear-gradient( 107deg, #24313f 0%,#171a21 33%););}
----------------------------------------------------------------^
Unexpected input
 9018 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00191919', endColorstr='#1…
-------------------------^</pre></details></td><td><details><summary>1 warning</summary><pre>Node has no children × 6</pre></details></td></tr>
<tr><td>143</td><td>🆗</td><td>google.cn</td><td>OK</td><td>OK</td></tr>
<tr><td>144</td><td>⚠️</td><td>cnblogs.com</td><td>OK</td><td><details><summary>1 warning</summary><pre>Invalid value for `background`
     value: -moz-linear-gradient(center top,#2b6695,#0e4773) repeat scroll 0 0 …
    -----------------------------^</pre></details></td></tr>
<tr><td>145</td><td>⚠️</td><td>deviantart.com</td><td><details><summary>Errors: 123</summary><pre>Unexpected input
    5 |…y.gruze div.bubbleview div.tabselect a.tab{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…e div.bubbleview div.tabselect a.tab:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |… div.bubbleview div.tabselect a.tab:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…bleview div.tabselect a.tab.selected:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…bleview div.tabselect a.tab.selected:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |….lt9 .right-buttons.browse-buttons .button{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…right-buttons.browse-buttons .button:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…tons.browse-buttons .button.disabled:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…tons.browse-buttons .button.disabled:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…+PC9zdmc+)}.ie.lt9 .browse-buttons .button{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…mc+)}.ie.lt9 .browse-buttons .button:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…mc+)}.ie.lt9 .browse-buttons .button:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…lt9 .browse-buttons .button.disabled:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…urnalsBrowseWrapper #sidebarPoll .rightbut{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…apper #sidebarPoll .rightbut.enabled:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…apper #sidebarPoll .rightbut.enabled:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…u .browse-facet.browse-facet-state .button{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…wse-facet.browse-facet-state .button:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…wse-facet.browse-facet-state .button:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |….browse-facet-state .button.disabled:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…c+)}.ie.lt9 .browse-sidebar-opener .button{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…e.lt9 .browse-sidebar-opener .button:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…e.lt9 .browse-sidebar-opener .button:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…owse-sidebar-opener .button.disabled:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…PC9zdmc+)}.ie.lt9 #fave-btn-wrap .favemenu{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…c+)}.ie.lt9 #fave-btn-wrap .favemenu:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…c+)}.ie.lt9 #fave-btn-wrap .favemenu:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |… #favesnav li ul li a.new_collection:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |… #favesnav li ul li a.new_collection:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |… #favesnav li ul li a.new_collection:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…kground-position:0 -120px;opacity:0;filter:alpha(opacity=0)}.megabundle{width:247px;height:110px}.…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…kground-position:0 -120px;opacity:0;filter:alpha(opacity=0)}.ultrabag{width:248px;height:98px;marg…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…sition:relative;top:-98px;opacity:0;filter:alpha(opacity=0)}#deviation-collect-bubble div.rrbox{ma…
----------------------------------------------------------------^
Unexpected input
    5 |…ie.lt9 #deviation-collect-bubble div.rrbox{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…8+PC9zdmc+)}.ie.lt9 .right-buttons .button{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…dmc+)}.ie.lt9 .right-buttons .button:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…dmc+)}.ie.lt9 .right-buttons .button:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |….lt9 .right-buttons .button.disabled:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…deviation-full-minipage .smbutton.disabled{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…deviation-full-minipage .smbutton.disabled{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…ie.lt9 .browse-paging a.load_more.disabled{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…ie.lt9 #browse-results .thumb-limit-picker{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |… #browse-results .thumb-limit-picker:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |… #browse-results .thumb-limit-picker:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |… .action-button.disabled{opacity:.4;filter:alpha(opacity=40);cursor:default}.deviation-full-minipa…
----------------------------------------------------------------^
Unexpected input
    5 |…scoverytag_right_bar hr.fade-highlight-bar{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…ytag_right_bar hr.fade-highlight-bar:after{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…XRlZCkiIC8+PC9zdmc+)}.ie.lt9 .devpage_gate{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…9zdmc+)}.ie.lt9 .maturehide .thumb_agegate{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…gegate,.ie.lt9 .mobile_white .devpage_gate{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    5 |…gegate,.ie.lt9 .mobile_white .devpage_gate{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…user-select:none}.ie.eq8 input.file-upload{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    7 |…kiIC8+PC9zdmc+)}.ie.lt9 .tt-fh a.thumb.lit{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…#gruze-main .tt-fh.tt-a .tt-fh-purchasable{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…WdlbmVyYXRlZCkiIC8+PC9zdmc+)}.ie.lt9 a.lit{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…iIC8+PC9zdmc+)}.ie.lt9 a.lit.journal .wrap{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…mb ul.artist-info li.artist-actions .watch{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…ist-info li.artist-actions .watch.selected{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…158px;z-index:11;background:white\9;filter:alpha(opacity=0)}div.stream div.tt-a div.stackzone div.…
----------------------------------------------------------------^
Unexpected input
    7 |… !important}.ie.eq8 div.tv150 div.a-stream{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…z-index:19}.ie.eq8 div.tv150 div.tv150-tag{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…te\9;background:rgba(255,255,255,0);filter:alpha(opacity=0);z-index:20}div.rs-customicon&gt;div.rs-cu…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |….tv70-tag{font-size:7pt;opacity:.45;filter:alpha(opacity=45)}.image-placeholder.processing{width:1…
----------------------------------------------------------------^
Unexpected input
    7 |…9}* html div.popup2-shadow{background:#000;filter:progid:DXImageTransform.Microsoft.Blur(pixelradi…
----------------------------------------------------------------^
Unexpected input
    7 |…mVyYXRlZCkiIC8+PC9zdmc+)}.ie.lt9 .smbutton{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…t9 .smbutton:hover,.ie.lt9 .smbutton.hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…ZCkiIC8+PC9zdmc+)}.ie.lt9 .smbutton:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |….smbutton-lightgreen.disabledbutton:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…9zdmc+)}.ie.lt9 .smbutton-lightgreen:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…zdmc+)}.ie.lt9 .smbutton-lightgreen:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…t9 body.stash-page .smbutton.smbutton-blue{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…on-blue:hover,.ie.lt9 .smbutton-blue.hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…-blue:active,.ie.lt9 .smbutton-blue.active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…utton.smbutton-black.disabledbutton:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…C8+PC9zdmc+)}.ie.lt9 .smbutton-black:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…8+PC9zdmc+)}.ie.lt9 .smbutton-black:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |….lt9 .smbutton-green.disabledbutton:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…-green:hover,.ie.lt9 .smbutton-green.hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…reen:active,.ie.lt9 .smbutton-green.active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…lt9 .smbutton-orange.disabledbutton:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…8+PC9zdmc+)}.ie.lt9 .smbutton-orange:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…+PC9zdmc+)}.ie.lt9 .smbutton-orange:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…ie.lt9 .smbutton-red.disabledbutton:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…tton-red:hover,.ie.lt9 .smbutton-red:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…IC8+PC9zdmc+)}.ie.lt9 .smbutton-red:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…lt9 .smbutton-purple.disabledbutton:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…8+PC9zdmc+)}.ie.lt9 .smbutton-purple:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |….lt9 .smbutton-white.disabledbutton:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…hite:active,.ie.lt9 .smbutton-white.active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…e.lt9 .smbutton-pale.disabledbutton:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…IC8+PC9zdmc+)}.ie.lt9 .smbutton-pale:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…C8+PC9zdmc+)}.ie.lt9 .smbutton-pale:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…n.smbutton-deepgreen.disabledbutton:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…C9zdmc+)}.ie.lt9 .smbutton-deepgreen:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…9zdmc+)}.ie.lt9 .smbutton-deepgreen:active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…zoom:1}.ccomment-loading{opacity:.5;filter:alpha(opacity=50);cursor:wait}.ccomment-hidden .ch-ctrl…
----------------------------------------------------------------^
Unexpected input
    7 |….lt9 div.popup2-ccomment-manage .blockmenu{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…C8+PC9zdmc+)}.ie.lt9 div.blockmenu a:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…er .text{cursor:pointer;opacity:.5;_filter:alpha(opacity=50)}#deviation_critiques{width:auto !impo…
----------------------------------------------------------------^
Unexpected input
    7 |….ie.lt9 .deviation-share-new .share-button{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…ie.lt9 .deviation-share-links-dropdown-new{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…e.lt9 .dev-page-view hr.fade-highlight-bar{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |….dev-page-view hr.fade-highlight-bar:after{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…-page-view .dev-meta-producttabs #buy-tabs{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…-page-view .dev-meta-producttabs #buy-tabs{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…,0.2),inset 0 -1px 0 rgba(255,255,255,0.2);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…lt9 .dev-page-view .dev-page-button-drawer{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…ev-title-container a.dev-page-watch-button{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…le-container a.dev-page-watch-button.green{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…-btn-wrap #gmi-ResourceViewFavouriteButton{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…rap #favesnav li:hover a.favesnav-downlink{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…smbutton-big.smbutton-green.comment-submit{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…on-big.smbutton-green.comment-submit.hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…n-big.smbutton-green.comment-submit.active{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…toolbar .default-toolbar .headerMenu:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…toolbar-menu li.disabled{opacity:.3;filter:alpha(opacity=30);cursor:default}body.ccwriter-subframe…
----------------------------------------------------------------^
Unexpected input
   15 |…ollection:not(.with-background-art) .cover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   20 |…r_skins_container .skins-edit a.apply-skin{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…:300;pointer-events:none;opacity:.5;filter:alpha(opacity=50)}.writer-sidebar-drag-helper-inner{-we…
----------------------------------------------------------------^
Unexpected input
   20 |…, left bottom, from(#f3f3f3), to(#e2e2e2));filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   22 |….lt9 .stashwriter-subtoolbar-menu li:hover{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…none;cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:no…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…nsform.Microsoft.Alpha(Opacity=50)";filter:alpha(opacity=50);position:fixed;z-index:999999;top:0;l…
----------------------------------------------------------------^</pre></details></td><td><details><summary>85 warnings</summary><pre>Invalid value for `background`
     value: linear-gradient(top,#f1f4f1,#eaeee9)
    ------------------------^
Node has no children × 123
Invalid value for `background`
     value: linear-gradient(top,#fff,#f3f4f5)
    ------------------------^
Invalid value for `background` × 2
     value: linear-gradient(top,#cad4c5,#e1e6df)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#d8e1d4,#e1e6df)
    ------------------------^
Invalid value for `background-color`
     value: none
    --------^
Invalid value for `background` × 2
     value: linear-gradient(top,#e3ebe2,#c7d5c0)
    ------------------------^
Invalid value for `background` × 15
     value: -webkit-linear-gradient(center top,#e3ebe2,#c7d5c0)
    --------------------------------^
Invalid value for `background` × 15
     value: -moz-linear-gradient(center top,#e3ebe2,#c7d5c0)
    -----------------------------^
Invalid value for `background` × 15
     value: linear-gradient(center top,#e3ebe2,#c7d5c0)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(left top,#d0dfc5,#bfd2b5)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(left top,#dfe8d9,#c3d6b9)
    ------------------------^
Invalid value for `margin`
     value: none
    --------^
Invalid value for `background`
     value: linear-gradient(left top,#dbf088,#b1e03e)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(left top,#e7f78a,#bfeb2e)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#dae4d9,#bdd1b4)
    ------------------------^
Invalid value for `_height`
     value: 150
    --------^
Unknown property `backgroud-repeat`
Invalid value for `background` × 2
     value: -webkit-linear-gradient(to right,rgba(190,203,186,0) 0%,rgba(190,20…
    --------------------------------^
Invalid value for `background` × 2
     value: -moz-linear-gradient(to right,rgba(190,203,186,0) 0%,rgba(190,203,1…
    -----------------------------^
Invalid value for `background` × 2
     value: -webkit-linear-gradient(to right,rgba(255,247,247,0) 0%,rgba(255,24…
    --------------------------------^
Invalid value for `background` × 2
     value: -moz-linear-gradient(to right,rgba(255,247,247,0) 0%,rgba(255,247,2…
    -----------------------------^
Invalid value for `background` × 2
     value: linear-gradient(top,#e4eae6,#dce1db)
    ------------------------^
Unknown property `list-style-display`
Invalid value for `height`
     value: 1
    --------^
Invalid value for `background`
     value: linear-gradient(top,#f3f7f2,#e0e8dc)
    ------------------------^
Invalid value for `white-space`
     value: no-wrap
    --------^
Invalid value for `background`
     value: linear-gradient(top,#dfe6d9,#d2dcc8)
    ------------------------^
Invalid value for `background` × 2
     value: linear-gradient(top,#f3f6f1,#e0e8dc)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#e6eae5,#d9e4d8)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#dff582,#b3de4b)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#d2dfc5,#bdd1b4)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#e0e9da,#c2d5b8)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#a2b598,#c0c9ba)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#e1e8e0,#d5e0d4)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#eef2ed,#e7eee7)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#c5d4c3,#d1dbcf)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#0088b5,#005d7c)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#00a4c6,#00739a)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#00537a,#0084a6)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c4d45,#2d3836)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#455a50,#384743)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#2d3735,#3c4c43)
    ------------------------^
Invalid value for `background` × 2
     value: linear-gradient(top,#dbf088,#b1e03e)
    ------------------------^
Invalid value for `background` × 2
     value: linear-gradient(top,#e7f78a,#bfeb2e)
    ------------------------^
Invalid value for `background` × 2
     value: linear-gradient(top,#91c01e,#bcd168)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#fdc55e,#d89c08)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#fdd56b,#eab617)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#d08d07,#f1b24a)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#e64768,#e4375b)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#e95a77,#e74b6c)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#d82741,#e84b6e)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#b8a9f3,#a591f0)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#bdafff,#b8a9f3)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#fff,#eee)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#bbb,#ddd)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#e6eae5,#d7ded5)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#ecefec,#e1e6e0)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#c9d3c8,#e0e4e0)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c4e45,#2d3736)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#455a50,#384643)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#2e3837,#3b4441)
    ------------------------^
Unknown property `box-model`
Unknown property `-moz-box-model`
Unknown property `-webkit-box-model`
Invalid value for `_left`
     value: -16
    --------^
Invalid value for `background`
     value: linear-gradient(top,#e8ece6,#dce5db)
    ------------------------^
Invalid value for `background` × 2
     value: linear-gradient(top,#518fa1,#39798d)
    ------------------------^
Invalid value for `background` × 2
     value: linear-gradient(top,#e0ebdc,#ccd9c6)
    ------------------------^
The rest part of value can't be matched to `cursor` grammar × 3
     value: pointer,url(/minish/deviation/zoomin.cur)
    ---------------^
Invalid value for `cursor` × 2
     value: url(/minish/deviation/zoomout.cur)
    --------^
Invalid value for `background` × 2
     value: linear-gradient(top,#e2ece1,#d6e1d1)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#cad9c4,#c3d0be)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#e5ece3,#d9e4d7)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#e8fb93,#c2ed6d)
    ------------------------^
Invalid value for `background` × 2
     value: linear-gradient(top,#e2ece1,#d4e0ce)
    ------------------------^
The rest part of value can't be matched to `background-repeat` grammar
     value: no-repeat -650px -7px
    ------------------^
Invalid value for `_height`
     value: 42
    --------^
Invalid value for `background`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Invalid value for `vertical-align`
     value: center
    --------^
Invalid value for `-ms-flex-align`
     value: space-between
    --------^
Invalid value for `align-items`
     value: space-between
    --------^
Unknown property `marigin-bottom`
Invalid value for `background`
     value: linear-gradient(top,rgba(0,0,0,.4),rgba(0,0,0,.6) 40%,rgba(0,0,0,.6…
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#fff,#f9f9f9)
    ------------------------^</pre></details></td></tr>
<tr><td>146</td><td>⚠️</td><td>bet9ja.com</td><td><details><summary>Errors: 9</summary><pre>Unexpected input
    5 |…gradient(to bottom,#0fad68 0,#02a15c 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
    5 |…gradient(to bottom,#bb1300 0,#b31200 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
    5 |…gradient(to bottom,#0fad68 0,#02a15c 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
    5 |…gradient(to bottom,#3a3e47 0,#2b2e37 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
    5 |…cials--iframe-item-share{border-radius:3px;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
    5 |…gradient(to bottom,#40ae61 0,#289047 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
    5 |…gradient(to bottom,#c02122 0,#961112 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
    5 |…gradient(to bottom,#209a47 0,#20803e 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
    5 |…gradient(to bottom,#209a47 0,#20803e 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^</pre></details></td><td><details><summary>1 warning</summary><pre>Node has no children × 9</pre></details></td></tr>
<tr><td>147</td><td>⚠️</td><td>google.nl</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>148</td><td>⚠️</td><td>avito.ru</td><td><details><summary>Errors: 14</summary><pre>RightParenthesis is expected
    7 |…0% !important;opacity:.3 !important;filter:alpha(opacity=30) !important;width:200% !important;heig…
----------------------------------------------------------------^
Unexpected input
    7 |…ine-block !important;opacity:.3 !important;filter:progid:DXImageTransform.Microsoft.Blur(PixelRadi…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…px !important;opacity:.7 !important;filter:alpha(opacity=70) !important;cursor:pointer !important}…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…drpcrhkv:hover{opacity:1 !important;filter:alpha(opacity=100) !important}.byhvpwket .modrpcrhkv:ho…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…ket .kykrmhmw{opacity:.8 !important;filter:alpha(opacity=80) !important;font-size:1em !important;l…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…en !important;opacity:.7 !important;filter:alpha(opacity=50) !important;text-align:center !importa…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…go_stamp:hover{opacity:1 !important;filter:alpha(opacity=100) !important}.yap-R-188382-217 .yap-lo…
----------------------------------------------------------------^
RightParenthesis is expected
   11 |…0% !important;opacity:.3 !important;filter:alpha(opacity=30) !important;width:200% !important;heig…
----------------------------------------------------------------^
Unexpected input
   11 |…ine-block !important;opacity:.3 !important;filter:progid:DXImageTransform.Microsoft.Blur(PixelRadi…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…0% !important;opacity:.3 !important;filter:alpha(opacity=30) !important;width:200% !important;heig…
----------------------------------------------------------------^
Unexpected input
   13 |…ine-block !important;opacity:.3 !important;filter:progid:DXImageTransform.Microsoft.Blur(PixelRadi…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…px !important;opacity:.7 !important;filter:alpha(opacity=70) !important;cursor:pointer !important}…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…drpcrhkv:hover{opacity:1 !important;filter:alpha(opacity=100) !important}.fyhzzmazx .modrpcrhkv:ho…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…azx .kykrmhmw{opacity:.8 !important;filter:alpha(opacity=80) !important;font-size:1em !important;l…
----------------------------------------------------------------^</pre></details></td><td><details><summary>13 warnings</summary><pre>Node has no children × 14
Invalid value for `top`
     value: 1
    --------^
Invalid value for `height` × 2
     value: NaNpx
    --------^
Invalid value for `width` × 2
     value: NaNpx
    --------^
Invalid value for `border-bottom-width` × 2
     value: &lt;empty string&gt;
    --------^
Invalid value for `border-right-width` × 2
     value: &lt;empty string&gt;
    --------^
Invalid value for `width`
     value: &lt;empty string&gt;
    --------^
Invalid value for `height`
     value: &lt;empty string&gt;
    --------^
Invalid value for `width`
     value: px
    --------^
Invalid value for `height`
     value: px
    --------^
Invalid value for `margin-top`
     value: &lt;empty string&gt;
    --------^
Invalid value for `font-size`
     value: &lt;empty string&gt;
    --------^
Unknown property `tap-highlight-color` × 2</pre></details></td></tr>
<tr><td>149</td><td>⚠️</td><td>softonic.com</td><td><details><summary>Errors: 2</summary><pre>RightParenthesis is expected
  100 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
  102 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^</pre></details></td><td><details><summary>11 warnings</summary><pre>Invalid value for `background-color` × 3
     value: &lt;empty string&gt;
    --------^
Invalid value for `border-color`
     value: &lt;empty string&gt;
    --------^
Invalid value for `color` × 2
     value: &lt;empty string&gt;
    --------^
Node has no children
Invalid value for `font-style`
     value: bold
    --------^
Invalid value for `-webkit-animation-fill-mode`
     value: backward
    --------^
Invalid value for `animation-fill-mode`
     value: backward
    --------^
Invalid value for `-moz-font-feature-settings`
     value: “liga” on
    --------^
Invalid value for `width`
     value: -webkit-min-content
    --------^
Invalid value for `width`
     value: -moz-min-content
    --------^
Invalid value for `overflow` × 2
     value: none
    --------^</pre></details></td></tr>
<tr><td>150</td><td>⚠️</td><td>google.co.za</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>151</td><td>⚠️</td><td>nextoptim.com</td><td colspan="2">–</td></tr>
<tr><td>152</td><td>⚠️</td><td>detik.com</td><td colspan="2">–</td></tr>
<tr><td>153</td><td>⚠️</td><td>google.az</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>154</td><td>⚠️</td><td>4chan.org</td><td>OK</td><td><details><summary>2 warnings</summary><pre>Invalid value for `*font`
     value: x-small
    --------^
Invalid value for `font`
     value: 100%
    --------^</pre></details></td></tr>
<tr><td>155</td><td>⚠️</td><td>ebay.co.uk</td><td><details><summary>Errors: 16</summary><pre>RightParenthesis is expected
  155 |…isabled]+.checkbox__icon{opacity:.5;filter:alpha(opacity=50)}.checkbox__custom-control[type="check…
----------------------------------------------------------------^
RightParenthesis is expected
  155 |…isabled]+.checkbox__icon{opacity:.5;filter:alpha(opacity=50)}.checkbox__icon{color:#ccc;display:-w…
----------------------------------------------------------------^
RightParenthesis is expected
  155 |…][disabled]+.radio__icon{opacity:.5;filter:alpha(opacity=50)}.radio__custom-control[type="radio"]+…
----------------------------------------------------------------^
RightParenthesis is expected
  155 |…][disabled]+.radio__icon{opacity:.5;filter:alpha(opacity=50)}.radio__icon{color:#ccc;display:-webk…
----------------------------------------------------------------^
RightParenthesis is expected
  155 |…tch&gt;input[disabled]+span{opacity:.5;filter:alpha(opacity=50)}span.switch{display:-webkit-inline-bo…
----------------------------------------------------------------^
RightParenthesis is expected
  157 |…ria-disabled=true]:focus{opacity:.5;filter:alpha(opacity=50)}button.hl-common-carousel__btn-prev{l…
----------------------------------------------------------------^
RightParenthesis is expected
  157 |…tton[aria-disabled=true]{opacity:.5;filter:alpha(opacity=50)}.hl-card-header__header-container{dis…
----------------------------------------------------------------^
Unexpected input
  159 |…m5ltcqnto1o4baovyl.png) no-repeat 0 -200px;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
  159 |…4baovyl.png) no-repeat 0 -200px !important;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
  159 |…us,#gh .btn-prim:active{background:#00509d;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  159 |…(top,#45aad6,#2386c0);text-decoration:none;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  159 |….gh-w a.btn-scnd:active{background:#2386c0;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  159 |…:-moz-linear-gradient(top,#fefefe,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  159 |…d transparent;content:"";opacity:.8;filter:alpha(opacity=80)}.gh-w .caret-dn{margin-top:8px;margin…
----------------------------------------------------------------^
Unexpected input
  159 |…:-moz-linear-gradient(top,#0079bc,#00509d);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  159 |…tant;-ms-filter:"alpha(opacity=60)";filter:alpha(opacity=60);opacity:.6;left:0}.ghn-g-num-c{height…
----------------------------------------------------------------^</pre></details></td><td><details><summary>15 warnings</summary><pre>Invalid value for `stroke-miterlimit` × 18
     value: 0
    --------^
Node has no children × 16
The rest part of value can't be matched to `transition` grammar × 2
     value: left .15s ease-out 0
    ---------------------------^
Invalid value for `background-color`
     value: none
    --------^
Unknown property `font-display` × 2
The rest part of value can't be matched to `-moz-transition` grammar
     value: background-position .1s linear 0
    ---------------------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `-moz-transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `-ms-transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `transition` grammar
     value: border .1s linear 0,box-shadow .2s linear 0s
    --------------------------^
The rest part of value can't be matched to `-moz-transition` grammar
     value: visibility 0 linear .1s,opacity .1s linear
    -------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: visibility 0 linear .1s,opacity .1s linear
    -------------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: visibility 0 linear .1s,opacity .1s linear
    -------------------^
The rest part of value can't be matched to `transition` grammar
     value: visibility 0 linear .1s,opacity .1s linear
    -------------------^</pre></details></td></tr>
<tr><td>156</td><td>⚠️</td><td>hotmovs.com</td><td><details><summary>Errors: 35</summary><pre>Selector is expected
    5 |…margin-top:0px;margin-bottom:0px;vertical-align:middle}}}
----------------------------------------------------------------^
Colon is expected
    7 |@keyframes OmE32w{from{width:0%}to{width:100%}}.t5Fid0{position:absolute;top:0;left:0;overflow:hid…
-----------------------------^
RightParenthesis is expected
  121 |….btn{cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:no…
----------------------------------------------------------------^
Unexpected input
  121 |…nd-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
RightParenthesis is expected
  121 |…or:#000;text-shadow:none;opacity:.2;filter:alpha(opacity=20)}.close:focus,.close:hover{color:#000;…
----------------------------------------------------------------^
RightParenthesis is expected
  121 |…tion:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer…
----------------------------------------------------------------^
RightParenthesis is expected
  121 |…#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:a…
----------------------------------------------------------------^
RightParenthesis is expected
  121 |…ty=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{padding:15px;border-bot…
----------------------------------------------------------------^
RightParenthesis is expected
  121 |…rap:normal;font-size:12px;opacity:0;filter:alpha(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(op…
----------------------------------------------------------------^
RightParenthesis is expected
  121 |…a(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{margin-top:-3px;padding:…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…kbox input[type=checkbox]{opacity:0;filter:alpha(opacity=0);z-index:1;cursor:pointer}.checkbox inp…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…heckbox]:disabled+label{opacity:.65;filter:alpha(opacity=65)}.checkbox input[type=checkbox]:disabl…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…}.radio input[type=radio]{opacity:0;filter:alpha(opacity=0);z-index:1;cursor:pointer}.radio input[…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…e=radio]:disabled+label{opacity:.65;filter:alpha(opacity=65)}.radio input[type=radio]:disabled+lab…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…}.form-control[disabled]{opacity:.8;filter:alpha(opacity=80)}.form-control:-webkit-autofill{-webki…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…ze:100px;text-align:right;opacity:0;filter:alpha(opacity=0);outline:none;background:#fff;cursor:in…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…menu-avatar .mdi.mdi-plus{opacity:0;filter:alpha(opacity=0)}.navbar-actions .navbar-nav .user-menu…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…-menu-avatar .mdi-account{opacity:0;filter:alpha(opacity=0)}.navbar-actions .navbar-nav .user-menu…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…ser-menu-avatar .mdi-plus{opacity:1;filter:alpha(opacity=100)}.navbar-actions .navbar-nav .user-me…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…-menu-avatar .mdi-account{opacity:0;filter:alpha(opacity=0)}.navbar-actions .navbar-nav .open&gt;.use…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…ser-menu-avatar .mdi-plus{opacity:1;filter:alpha(opacity=100)}.navbar-actions .navbar-nav .open&gt;.u…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…0;left:0;right:0;bottom:0;opacity:0;filter:alpha(opacity=0);-webkit-transition:opacity .16s ease-o…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…-color:hsla(0,0%,100%,.3);opacity:1;filter:alpha(opacity=100)}html.flexbox .thumbnail .thumb-pagin…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…0;left:0;right:0;bottom:0;opacity:0;filter:alpha(opacity=0);-webkit-transition:opacity .16s ease-o…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…l:hover .thumb-pagination{opacity:1;filter:alpha(opacity=100)}.thumbnail-placeholder{position:abso…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…lism input[type=checkbox]{opacity:0;filter:alpha(opacity=0);z-index:1;cursor:pointer;position:abso…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…size:35px;line-height:.5;opacity:.6;filter:alpha(opacity=60);-webkit-transition:opacity .2s,color …
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…2s,color .2s}.close:hover{opacity:1;filter:alpha(opacity=100)}.modal-header{padding-bottom:0}.moda…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…0px;text-decoration:none;opacity:.4;filter:alpha(opacity=40);-webkit-transition:opacity .4s;transi…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…slider:hover .slick-prev{opacity:.8;filter:alpha(opacity=80);text-decoration:none}.slick-next.slic…
----------------------------------------------------------------^
Unexpected input
  126 |…eft,.tc-slider-container .tc-control.right{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…iew .comment.dim-comment{opacity:.5;filter:alpha(opacity=50);-webkit-transition:opacity .3s ease;t…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…comment.dim-comment:hover{opacity:1;filter:alpha(opacity=100)}.video_view .comment .no-avatar{colo…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…s .comment-like.disabled{opacity:.5;filter:alpha(opacity=50);cursor:default}.video_view .comment-o…
----------------------------------------------------------------^
RightParenthesis is expected
  126 |…wn-menu{left:-3px}.faded{opacity:.1;filter:alpha(opacity=10)}.feedback{z-index:9999;position:fixed…
----------------------------------------------------------------^</pre></details></td><td><details><summary>3 warnings</summary><pre>Node has no children × 33
Invalid value for `width`
     value: device-width
    --------^
Invalid value for `right`
     value: none
    --------^</pre></details></td></tr>
<tr><td>157</td><td>⚠️</td><td>vimeo.com</td><td><details><summary>Errors: 7</summary><pre>PercentSign is expected
    7 |…on:none;transition:none}@-webkit-keyframes menu_bounce{0,100%{-webkit-transform:translateY(0);tran…
----------------------------------------------------------------^
PercentSign is expected
    7 |…px);transform:translateY(-3px)}}@keyframes menu_bounce{0,100%{-webkit-transform:translateY(0);tran…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…content:"";background:url("../../../../../../svg/iris/" + iris_icon_link_12 + ".svg") no-repeat}.i…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…content:"";background:url("../../../../../../svg/iris/" + iris_icon_link_16 + ".svg") no-repeat}.i…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…content:"";background:url("../../../../../../svg/iris/" + iris_icon_search_12 + ".svg") no-repeat}…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…content:"";background:url("../../../../../../svg/iris/" + iris_icon_search_16 + ".svg") no-repeat}…
----------------------------------------------------------------^
Identifier is expected
   10 |…-video-wrapper .vp-telecine.hide-webkit-controls video::--webkit-media-controls-play-button{displa…
----------------------------------------------------------------^</pre></details></td><td><details><summary>10 warnings</summary><pre>The rest part of value can't be matched to `font-size` grammar
     value: 16px 2
    ------------^
Node has no children × 4
Invalid value for `font-size`
     value: g-fontSize(9)
    --------^
Invalid value for `color`
     value: grayDark(4)
    --------^
Unknown property `font-smoothing`
Invalid value for `visibility`
     value: 0
    --------^
The rest part of value can't be matched to `padding-bottom` grammar
     value: 1.375rem 0
    ----------------^
Invalid value for `background-repeat`
     value: none
    --------^
The rest part of value can't be matched to `transition` grammar
     value: opacity .1s ease-out,transform 10s spring(1 400 25 20)
    -------------------------------------------^
Invalid value for `break-after`
     value: always
    --------^</pre></details></td></tr>
<tr><td>158</td><td>⚠️</td><td>theguardian.com</td><td>OK</td><td><details><summary>21 warnings</summary><pre>The rest part of value can't be matched to `top` grammar
     value: 2.25rem 0.25rem
    ---------------^
Invalid value for `text-decoration-skip`
     value: ink
    --------^
Invalid value for `-webkit-text-decoration-skip`
     value: ink
    --------^
Invalid value for `-moz-text-decoration-skip`
     value: ink
    --------^
Invalid value for `width`
     value: 0x
    --------^
Invalid value for `grid-template-columns`
     value: repeat(auto-fit,minmax(40%,1fr))
    ---------------^
Invalid value for `grid-template-columns`
     value: repeat(auto-fit,minmax(7.5rem,1fr))
    ---------------^
The rest part of value can't be matched to `-webkit-border-bottom-left-radius` …
     value: -webkit-calc(0.75rem * 2)4
    ---------------------------------^
The rest part of value can't be matched to `border-bottom-left-radius` grammar
     value: calc(0.75rem * 2)4
    -------------------------^
The rest part of value can't be matched to `-webkit-border-top-left-radius` gra…
     value: -webkit-calc(0.75rem * 2)4
    ---------------------------------^
The rest part of value can't be matched to `border-top-left-radius` grammar
     value: calc(0.75rem * 2)4
    -------------------------^
Invalid value for `width`
     value: -webkit-max-content
    --------^
Invalid value for `width`
     value: -moz-max-content
    --------^
Invalid value for `max-height`
     value: 40
    --------^
Invalid value for `-webkit-box-align`
     value: left
    --------^
Invalid value for `-webkit-align-items`
     value: left
    --------^
Invalid value for `-ms-flex-align`
     value: left
    --------^
Invalid value for `align-items`
     value: left
    --------^
Invalid value for `color`
     value: status-positive
    --------^
Invalid value for `color`
     value: status-negative
    --------^
Invalid value for `color`
     value: status-neutral
    --------^</pre></details></td></tr>
<tr><td>159</td><td>🆗</td><td>doublepimpssl.com</td><td>OK</td><td>OK</td></tr>
<tr><td>160</td><td>⚠️</td><td>nih.gov</td><td><details><summary>Errors: 24</summary><pre>Unexpected input
   32 |…t{padding:.75em;font:12px arial,sans-serif;filter:progid:DXImageTransform.Microsoft.Gradient(Gradi…
----------------------------------------------------------------^
Unexpected input
   32 |…qtip-titlebar{background-color:transparent;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   32 |…orstr=#4A4A4A)"}.qtip-jtools .qtip-content{filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   32 |…ge:-o-linear-gradient(top,#3A79B8,#2E629D);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   32 |…text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}#qtip-overlay,#qtip-overlay div{left:…
----------------------------------------------------------------^
RightParenthesis is expected
   32 |…tion:none;cursor:pointer;opacity:.4;filter:alpha(opacity=40)}.qtip:not(.ie9haxors) div.qtip-conten…
----------------------------------------------------------------^
RightParenthesis is expected
   32 |…te;background-color:#000;opacity:.7;filter:alpha(opacity=70);-ms-filter:"progid:DXImageTransform.M…
----------------------------------------------------------------^
Selector is expected
  558 |.H_disabled .H_pano_mm svg.H_icon, {
------------------------------------------^
RightParenthesis is expected
  689 |… .flex-disabled{opacity:0!important;filter:alpha(opacity=0);cursor:default;}.flex-direction-nav a:…
----------------------------------------------------------------^
Unexpected input
  761 |…in-height:30px;}.l-ribbon li .ribbon-right{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
  834 |…er p a:active{color:#a00000;}}.back-to-top{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
  834 |…splay:table;clear:both;}.back-to-top:hover{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
  834 |…op:0.4em;width:auto;}}.back-to-top a .text{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
  834 |…dia (min-width:800px){.back-to-top a .text{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
  834 |…width:800px){.back-to-top a .icon-arrow-up{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
  901 |…t:0;}.subnav-toggle{background:transparent;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
  901 |…isplay:none;}}.subnav-toggle.subnav-active{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
  901 |…;}}.sub-menu-toggle{background:transparent;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
  901 |…{display:none;}.sub-menu-toggle.sub-active{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
RightParenthesis is expected
 1009 |…;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}#usasearch_sayt .ui-state-disabled{cur…
----------------------------------------------------------------^
RightParenthesis is expected
 1018 |…r .ui-priority-secondary{opacity:.7;filter:Alpha(Opacity=70);font-weight:normal}#usasearch_sayt .u…
----------------------------------------------------------------^
RightParenthesis is expected
 1018 |…ader .ui-state-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none}#usasearch_sayt…
----------------------------------------------------------------^
RightParenthesis is expected
 1018 |…1a.png) 50% 50% repeat-x;opacity:.3;filter:Alpha(Opacity=30)}#usasearch_sayt .ui-widget-shadow{mar…
----------------------------------------------------------------^
RightParenthesis is expected
 1018 |…1a.png) 50% 50% repeat-x;opacity:.3;filter:Alpha(Opacity=30);-moz-border-radius:8px;-khtml-border-…
----------------------------------------------------------------^</pre></details></td><td><details><summary>9 warnings</summary><pre>Node has no children × 23
Invalid value for `-ms-filter`
     value: none
    --------^
Invalid value for `-webkit-transform`
     value: translate3d(0,1,0)
    ----------------------^
Invalid value for `min-height` × 5
     value: intrinsic
    --------^
Invalid value for `top`
     value: 1
    --------^
Unknown property `print-color-adjust`
Invalid value for `background-image`
     value: transparent
    --------^
Invalid value for `background`
     value: linear-gradient(top,rgba(255,255,255,1) 0,rgba(223,223,223,1) 100%)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,rgba(227,227,227,1) 0,rgba(198,198,198,1) 100%)
    ------------------------^</pre></details></td></tr>
<tr><td>161</td><td>⚠️</td><td>oath.com</td><td><details><summary>Errors: 3</summary><pre>Unexpected input
   81 |…(ellipse at center,#fefefe 0,#e6e8e8 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   81 |…eg,#fff 0,#fff 23%,#fff 49%,#fff 77%,#fff);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   81 |…:linear-gradient(180deg,#1389c7 0,#0b53a3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>7 warnings</summary><pre>Unknown property `interpolation-mode`
Unknown property `overflow-scrolling`
Unknown property `-webkit-font-smooth`
Invalid value for `overflow`
     value: none
    --------^
Unknown property `webkit-transition`
Node has no children × 3
Unknown property `font-smoothing` × 2</pre></details></td></tr>
<tr><td>162</td><td>⚠️</td><td>chase.com</td><td><details><summary>Errors: 8</summary><pre>Unexpected input
    3 |…);-o-filter:blur(5px);-ms-filter:blur(5px);filter:progid:DXImageTransform.Microsoft.Blur(PixelRadi…
----------------------------------------------------------------^
Unexpected input
    3 |…);-o-filter:blur(5px);-ms-filter:blur(5px);filter:progid:DXImageTransform.Microsoft.Blur(PixelRadi…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…obutton input[type=radio]{opacity:0;filter:alpha(opacity=0);position:absolute;height:2em;width:2em…
----------------------------------------------------------------^
Identifier or parenthesis is expected
    5 |…der__section--link.login{display:none !important}@media $bp-tablet-lower{.system-outage--title{fon…
----------------------------------------------------------------^
Identifier or parenthesis is expected
    5 |…-outage--desc{font-size:1em;line-height:1.375em}}@media $bp-tablet-midrange{.system-outage--title{…
----------------------------------------------------------------^
Unexpected input
    5 |…ans;font-size:600;font-size:16px;line-height:24px;color:$414042;text-transform:none}.home-lending-…
----------------------------------------------------------------^
Unexpected input
    5 |…obile-btn:active,.left-nav--mobile-btn:focus{background:$leftnav-dark-gray;border-color:#999;font-…
----------------------------------------------------------------^
Unexpected input
    5 |…n:0 auto;padding-bottom:14px}.sticky-footer:not(.sticky)--container-inner{padding:0 0 10px 0}.stic…
----------------------------------------------------------------^</pre></details></td><td><details><summary>23 warnings</summary><pre>Invalid value for `-ms-filter` × 2
     value: blur(5px)
    --------^
Node has no children × 5
Unknown property `-webkit-padding-before` × 2
Unknown property `-webkit-padding-end` × 2
Unknown property `-webkit-padding-after` × 2
Unknown property `-webkit-padding-start` × 2
Invalid value for `border-color` × 6
     value: none
    --------^
Invalid value for `box-shadow` × 6
     value: 2px solid #bf2155
    --------^
Invalid value for `Opacity`
     value: 40%
    --------^
Invalid value for `font-weight`
     value: none
    --------^
Invalid value for `font-style`
     value: regular
    --------^
Invalid value for `margin`
     value: none
    --------^
Invalid value for `margin-bottom`
     value: 20x
    --------^
Unknown property `margin-botton`
Invalid value for `font-size` × 2
     value: .875
    --------^
Unknown property `margim-bottom`
The rest part of value can't be matched to `-webkit-transition` grammar
     value: all .4 ease
    ------------^
The rest part of value can't be matched to `transition` grammar
     value: all .4 ease
    ------------^
Unknown property `font-wieght`
The rest part of value can't be matched to `color` grammar
     value: rgba(68,17,68,0) 2
    -------------------------^
Invalid value for `font-size`
     value: 600
    --------^
Invalid value for `-webkit-box-shadow` × 2
     value: 0
    --------^
Invalid value for `box-shadow` × 2
     value: 0
    --------^</pre></details></td></tr>
<tr><td>163</td><td>⚠️</td><td>flipkart.com</td><td colspan="2">–</td></tr>
<tr><td>164</td><td>⚠️</td><td>dailymail.co.uk</td><td><details><summary>Errors: 41</summary><pre>String or Raw is expected
  228 |  background: transparent url() 0 0 no-repeat;
-------------------------------------^
String or Raw is expected
  401 |  background: transparent url() 0 0 no-repeat;
-------------------------------------^
String or Raw is expected
  477 |  background: transparent url() 0 0 no-repeat;
-------------------------------------^
String or Raw is expected
  561 |  background: transparent url() 0 0 no-repeat;
-------------------------------------^
String or Raw is expected
  619 |  background: transparent url() 0 0 no-repeat;
-------------------------------------^
RightParenthesis is expected
  971 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
  973 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…y:block;padding:2px 4px;opacity:.85;filter:alpha(opacity=85)}.carousel .itemlist li img{display:bl…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…isplay:block;padding:6px;opacity:.9;filter:alpha(opacity=90);margin:0 0 5px;font-size:1.2em}.big-p…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…e:1.83em;font-weight:700;opacity:.7;filter:alpha(opacity=70)}.image-swap-carousel .scroller{width:…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…th:294px;font-weight:700;opacity:.9;filter:alpha(opacity=90)}.lightbox-gallery .hidden{display:non…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…s li .product-container{margin:10px;filter:alpha(opacity=0);opacity:0;font-weight:700}.showcase .p…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…ute;top:10px;right:10px;opacity:.7;filter:alpha(opacity = 70);display:block}.carouselVideoIcon{flo…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…t:0;width:7px;height:6px;opacity:1;filter:alpha(opacity = 100)}.teaser a,.teaser span{display:bloc…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…nsform.Microsoft.Alpha(Opacity=50)";filter:alpha(opacity=50);width:11px;height:7px;padding-top:4px…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…osoft.Alpha(Opacity=100)"!important;filter:alpha(opacity=100)!important}.video_carousel_container …
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…nsform.Microsoft.Alpha(Opacity=80)";filter:alpha(opacity=80)}.video_carousel_container .right_scro…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…nsform.Microsoft.Alpha(Opacity=85)";filter:alpha(opacity=85);height:38px;font-size:13px}.video_car…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…er{background-color:#fff;opacity:.5;filter:alpha(opacity=50)}.football-team-news .team-news-header…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…0;background-color:#fff;opacity:.75;filter:alpha(opacity=75);font-size:.9em;min-height:410px;_heig…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…apline-large .inner-text{opacity:.9;filter:alpha(opacity=90);margin:0 0 5px}.image-strapline .link…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…ze:1.4em;font-weight:700;opacity:.9;filter:alpha(opacity=90);width:100%;height:3em}.reviews-featur…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…m:0;left:0;display:block;opacity:.9;filter:alpha(opacity=90);width:100%}.offer-type-double li span…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…olor:#be9eff;width:auto;opacity:.75;filter:alpha(opacity=75);bottom:0;top:auto;color:#3f2474;paddi…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…ght:1.6em;font-size:.9em;opacity:.8;filter:alpha(opacity=80);font-family:Arial}.videoplayer-small …
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…osition:absolute;right:0;opacity:.8;filter:alpha(opacity=80)}.videoplayer-small .btnBg{top:49px;le…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…y:.6;-ms-filter:"alpha(Opacity=60)";filter:alpha(opacity=60);left:-5px;top:13px;width:626px;height…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…nsform.Microsoft.Alpha(Opacity=85)";filter:alpha(opacity=85);height:60px;font-size:22px}.videoplay…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…ght:1.6em;font-size:.9em;opacity:.8;filter:alpha(opacity=80);font-family:Arial}.videoplayer-previe…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…y:1;-ms-filter:"alpha(Opacity=100)";filter:alpha(opacity=100)}.articleFullWidth .x-wide .xwv-relat…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…sform.Microsoft.Alpha(opacity=100)";filter:alpha(opacity=100);opacity:1;visibility:visible}#infini…
----------------------------------------------------------------^
RightParenthesis is expected
 1068 |…ansform.Microsoft.Alpha(opacity=0)";filter:alpha(opacity=0);opacity:0;visibility:hidden}#infinite-…
----------------------------------------------------------------^
RightParenthesis is expected
 1075 |…nsform.Microsoft.Alpha(Opacity=80)";filter:alpha(opacity=80)}.ez-modal{transition:opacity .4s,tran…
----------------------------------------------------------------^
RightParenthesis is expected
 1075 |…#overlay{background:#000;opacity:.6;filter:alpha(opacity=60);width:100%;height:100%;z-index:100000…
----------------------------------------------------------------^
Unexpected input
 1079 |…t(0deg,rgba(7,20,30,.7) 0,rgba(7,20,30,0));filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
 1079 |…ute;top:36px;right:0;bottom:50px;left:0;height:calc(1 - $control-bar-height);z-index:900;transform…
----------------------------------------------------------------^
RightParenthesis is expected
 1085 |…nsform.Microsoft.Alpha(Opacity=30)";filter:alpha(opacity=30);opacity:.3;cursor:auto}.reg a.reg-btn…
----------------------------------------------------------------^
Unexpected input
 1089 |…stop(1%,#f8f8f8),color-stop(100%,#e1e1e1));filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
 1089 |…isabled .selectBox-arrow{opacity:.5;filter:alpha(opacity=50);border-color:#666}.selectBox-inline.s…
----------------------------------------------------------------^
RightParenthesis is expected
 1096 |…annotation{background:rgba(0,0,0,0);filter:alpha(opacity=0);font-family:sans-serif;white-space:pre…
----------------------------------------------------------------^
RightParenthesis is expected
 1096 |…v-button[disabled]:focus{opacity:.5;filter:alpha(opacity=50);cursor:auto;box-shadow:none}.iv-butto…
----------------------------------------------------------------^</pre></details></td><td><details><summary>30 warnings</summary><pre>The rest part of value can't be matched to `background` grammar
     value: transparent url () 0 0 no-repeat
    --------------------^
Unknown property `-moz-scrollbars`
Node has no children × 40
Invalid value for `background-size`
     value: fill
    --------^
Invalid value for `overflow-y`
     value: -moz-scrollbars-vertical
    --------^
Unknown property `scrollbar-face-color`
Unknown property `scrollbar-shadow-color`
Unknown property `scrollbar-highlight-color`
Unknown property `scrollbar-darkshadow-color`
Unknown property `scrollbar-track-color`
Unknown property `scrollbar-arrow-color`
Unknown property `-moz-font-smoothing` × 4
Invalid value for `font-weight`
     value: 600px
    --------^
Invalid value for `line-height`
     value: auto
    --------^
Unknown property `moz-border-radius`
Invalid value for `background-repeat`
     value: none
    --------^
Unknown property `font-color`
Invalid value for `min-height`
     value: 0p
    --------^
Invalid value for `font-style`
     value: bold
    --------^
Unknown property `-webkit-transform-origin-y`
Unknown property `-moz-transform-origin-y`
Unknown property `transform-origin-y`
Invalid value for `max-height`
     value: auto
    --------^
The rest part of value can't be matched to `margin-top` grammar
     value: 15px -1px
    ------------^
Invalid value for `display` × 8
     value: -moz-flexbox
    --------^
Invalid value for `-ms-filter`
     value: blur(20px)
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(20,20,20,0.6),rgba(209,209,209,0.6))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.8),rgba(0,0,0,0.7) 40%,rgba(0,0,0,…
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.4) 60%,rgba(0,0…
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#ffec7b,#dea405)
    ------------------------^</pre></details></td></tr>
<tr><td>165</td><td>⚠️</td><td>google.com.vn</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>166</td><td>⚠️</td><td>google.co.ve</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>167</td><td>⚠️</td><td>bukalapak.com</td><td><details><summary>Errors: 20</summary><pre>RightParenthesis is expected
    4 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
    6 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
Unexpected input
   13 |…-single .chzn-single{background-color:#fff;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   13 |…-clip:padding-box;background-color:#e4e4e4;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   13 |…h-choice-disabled{background-color:#e4e4e4;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   13 |…ults .highlighted{background-color:#3875d7;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   13 |…w:0 1px 0 #fff inset;background-color:#eee;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…s ease-out;opacity:0;-moz-opacity:0;filter:alpha(opacity=0);transition-delay:.2s;-moz-transition-d…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…oxNext{opacity:.99;-moz-opacity:.99;filter:alpha(opacity=99)}#cboxPrevious:hover,#cboxNext:hover{b…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…s ease-out;opacity:0;-moz-opacity:0;filter:alpha(opacity=0)}#cboxClose:hover:before{opacity:.99;-m…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…before{opacity:.99;-moz-opacity:.99;filter:alpha(opacity=99)}#cboxClose:focus{outline:none}.emotic…
----------------------------------------------------------------^
RightParenthesis is expected
   16 |…-index:9998;margin:0;left:0;top:5px;filter:alpha(opacity=0);opacity:0}.pika-label{display:inline-b…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…tant;margin:0 !important;opacity:.8;filter:alpha(opacity=80)}.gu-hide{display:none !important}.gu-…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…e !important}.gu-transit{opacity:.2;filter:alpha(opacity=20)}.process-diagram{display:block;margin…
----------------------------------------------------------------^
RightParenthesis is expected
   24 |…osition:absolute;opacity:0;margin:0;filter:alpha(opacity=0)}.field--rating .radio.rating-5:checked…
----------------------------------------------------------------^
Unexpected input
   27 |…ngle .chzn-single{background-color:#ffffff;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   27 |…-clip:padding-box;background-color:#e4e4e4;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   27 |…h-choice-disabled{background-color:#e4e4e4;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   27 |…ults .highlighted{background-color:#3875d7;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   27 |…w:0 1px 0 #fff inset;background-color:#eee;filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^</pre></details></td><td><details><summary>26 warnings</summary><pre>Node has no children × 19
Unknown property `-webkit-margin-start` × 4
Invalid value for `-webkit-box-sizing`
     value: box
    --------^
Invalid value for `-moz-box-sizing`
     value: box
    --------^
Invalid value for `box-sizing`
     value: box
    --------^
Invalid value for `background-color`
     value: none
    --------^
Invalid value for `-ms-grid-row-align`
     value: flex-start
    --------^
Invalid value for `padding-top`
     value: rem-calc(12px)
    --------^
Invalid value for `padding-bottom`
     value: rem-calc(12px)
    --------^
Invalid value for `padding`
     value: auto
    --------^
Unknown property `column-break-inside`
Invalid value for `-webkit-box-flex`
     value: 50%
    --------^
Invalid value for `-ms-grid-row-align`
     value: flex-end
    --------^
Invalid value for `background-image`
     value: -webkit-gradient(linear,left top,right top,from(#fff),color-stop(rg…
    -------------------------------------------------------------------------^
Invalid value for `background-image`
     value: -webkit-gradient(linear,left top,right top,from(#f5f5f5),color-stop…
    ---------------------------------------------------------------------------…
Invalid value for `background-image`
     value: -webkit-gradient(linear,right top,left top,from(#fff),color-stop(rg…
    -------------------------------------------------------------------------^
Invalid value for `background-image`
     value: -webkit-gradient(linear,right top,left top,from(#f5f5f5),color-stop…
    ---------------------------------------------------------------------------…
Invalid value for `margin`
     value: "HelveticaNeue",Helvetica,Arial,"Lucida Grande",sans-serif 0 0
    --------^
Invalid value for `-webkit-box-shadow`
     value: 0
    --------^
Invalid value for `box-shadow`
     value: 0
    --------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: opacity 0 linear
    ----------------^
The rest part of value can't be matched to `-o-transition` grammar
     value: opacity 0 linear
    ----------------^
The rest part of value can't be matched to `transition` grammar
     value: opacity 0 linear
    ----------------^
Invalid value for `background-image`
     value: -webkit-gradient(linear,left top,right top,from(#fafafa),color-stop…
    ---------------------------------------------------------------------------…
Invalid value for `background-image`
     value: -webkit-gradient(linear,left top,right top,from(#fff),color-stop(#e…
    -------------------------------------------------------------------------^
Invalid value for `font`
     value: 400
    --------^</pre></details></td></tr>
<tr><td>168</td><td>⚠️</td><td>cricbuzz.com</td><td><details><summary>Errors: 3</summary><pre>RightParenthesis is expected
   13 |…-img1{top:25px;left:25px;opacity:.6;filter:alpha(opacity=60)}.gallery-img2{background-position:-14…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:a…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…ty=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{padding:15px;border-bot…
----------------------------------------------------------------^</pre></details></td><td><details><summary>2 warnings</summary><pre>Node has no children × 3
Invalid value for `max-height`
     value: auto
    --------^</pre></details></td></tr>
<tr><td>169</td><td>⚠️</td><td>yts.am</td><td><details><summary>Errors: 64</summary><pre>Unexpected input
  207 |…{display:inline-block;vertical-align:baseline}audio:not ([controls]){display:none;height:0}[hidden…
----------------------------------------------------------------^
Unexpected input
  207 |…ne}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not (:root){overflow:hidden}figure{margin:1em …
----------------------------------------------------------------^
RightParenthesis is expected
  207 |…wed;pointer-events:none;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:no…
----------------------------------------------------------------^
Unexpected input
  207 |…oolbar&gt;.input-group{margin-left:5px}.btn-group&gt;.btn:not (:first-child):not (:last-child):not (.dro…
----------------------------------------------------------------^
Unexpected input
  207 |…rst-child{margin-left:0}.btn-group&gt;.btn:first-child:not (:last-child):not (.dropdown-toggle){borde…
----------------------------------------------------------------^
Unexpected input
  207 |…order-top-right-radius:0}.btn-group&gt;.btn:last-child:not (:first-child),.btn-group&gt;.dropdown-toggle…
----------------------------------------------------------------^
Unexpected input
  207 |…n-group&gt;.btn-group{float:left}.btn-group&gt;.btn-group:not (:first-child):not (:last-child)&gt;.btn{bord…
----------------------------------------------------------------^
Unexpected input
  207 |…gin-top:-1px;margin-left:0}.btn-group-vertical&gt;.btn:not (:first-child):not (:last-child){border-ra…
----------------------------------------------------------------^
Unexpected input
  207 |…order-radius:0}.btn-group-vertical&gt;.btn:first-child:not (:last-child){border-top-right-radius:4px;…
----------------------------------------------------------------^
Unexpected input
  207 |…m-left-radius:0}.btn-group-vertical&gt;.btn:last-child:not (:first-child){border-bottom-left-radius:4…
----------------------------------------------------------------^
Unexpected input
  207 |…er-top-left-radius:0}.btn-group-vertical&gt;.btn-group:not (:first-child):not (:last-child)&gt;.btn{bord…
----------------------------------------------------------------^
Unexpected input
  207 |…radius:0}.btn-group-vertical&gt;.btn-group:first-child:not (:last-child)&gt;.btn:last-child,.btn-group-v…
----------------------------------------------------------------^
Unexpected input
  207 |…-radius:0}.btn-group-vertical&gt;.btn-group:last-child:not (:first-child)&gt;.btn:first-child{border-top…
----------------------------------------------------------------^
Unexpected input
  207 |….form-control{display:table-cell}.input-group-addon:not (:first-child):not (:last-child),.input-gr…
----------------------------------------------------------------^
Unexpected input
  207 |…d&gt;.dropdown-toggle,.input-group-btn:last-child&gt;.btn:not (:last-child):not (.dropdown-toggle),.inpu…
----------------------------------------------------------------^
Unexpected input
  207 |…&gt;.dropdown-toggle,.input-group-btn:first-child&gt;.btn:not (:first-child),.input-group-btn:first-chil…
----------------------------------------------------------------^
Unexpected input
  215 |…ar-gradient(to bottom,#fff 0,#e0e0e0 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…f',endColorstr='#ffe0e0e0',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
  215 |…gradient(to bottom,#428bca 0,#2d6ca2 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…a',endColorstr='#ff2d6ca2',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
  215 |…gradient(to bottom,#5cb85c 0,#419641 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…c',endColorstr='#ff419641',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
  215 |…gradient(to bottom,#5bc0de 0,#2aabd2 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…e',endColorstr='#ff2aabd2',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
  215 |…gradient(to bottom,#f0ad4e 0,#eb9316 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…e',endColorstr='#ffeb9316',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
  215 |…gradient(to bottom,#d9534f 0,#c12e2a 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…f',endColorstr='#ffc12e2a',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#e8e8e8 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#357ebd 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#f8f8f8 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…f',endColorstr='#fff8f8f8',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#e2e2e2 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…3c 0,#222 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…c',endColorstr='#ff222222',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#0f0f0f 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#357ebd 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#c8e5bc 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#b9def0 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#f8efc0 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#e7c3c3 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#3071a9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#449d44 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#31b0d5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#ec971f 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#c9302c 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#3278b3 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#959595 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#357ebd 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#d0e9c6 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#c4e3f3 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#faf2cc 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#ebcccc 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  215 |…ba(29,29,29,0.65) 0,rgba(29,29,29,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  215 |…ius:4px;border-radius:4px;opacity:0;filter:alpha(opacity=0);-o-transition:background-color .2s lin…
----------------------------------------------------------------^
RightParenthesis is expected
  215 |…ver .ps-scrollbar-x-rail{opacity:.6;filter:alpha(opacity=60)}.ps-container .ps-scrollbar-x-rail:ho…
----------------------------------------------------------------^
RightParenthesis is expected
  215 |…er{background-color:#eee;opacity:.9;filter:alpha(opacity=90)}.ps-container .ps-scrollbar-x-rail.in…
----------------------------------------------------------------^
RightParenthesis is expected
  215 |…ng{background-color:#eee;opacity:.9;filter:alpha(opacity=90)}.ps-container .ps-scrollbar-y-rail{po…
----------------------------------------------------------------^
RightParenthesis is expected
  215 |…ius:4px;border-radius:4px;opacity:0;filter:alpha(opacity=0);-o-transition:background-color .2s lin…
----------------------------------------------------------------^
RightParenthesis is expected
  215 |…ver .ps-scrollbar-y-rail{opacity:.6;filter:alpha(opacity=60)}.ps-container .ps-scrollbar-y-rail:ho…
----------------------------------------------------------------^
RightParenthesis is expected
  215 |…er{background-color:#333;opacity:.9;filter:alpha(opacity=90)}.ps-container .ps-scrollbar-y-rail.in…
----------------------------------------------------------------^
RightParenthesis is expected
  215 |…ng{background-color:#333;opacity:.9;filter:alpha(opacity=90)}.ps-container .ps-scrollbar-x{positio…
----------------------------------------------------------------^</pre></details></td><td><details><summary>9 warnings</summary><pre>Node has no children × 49
Invalid value for `width`
     value: device-width
    --------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: opacity .3s 0,visibility 0 .3s
    --------------------^
The rest part of value can't be matched to `-moz-transition` grammar
     value: opacity .3s 0,visibility 0 .3s
    --------------------^
The rest part of value can't be matched to `transition` grammar
     value: opacity .3s 0,visibility 0 .3s
    --------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: opacity .3s 0,visibility 0 0
    --------------------^
The rest part of value can't be matched to `-moz-transition` grammar
     value: opacity .3s 0,visibility 0 0
    --------------------^
The rest part of value can't be matched to `transition` grammar
     value: opacity .3s 0,visibility 0 0
    --------------------^
Invalid value for `display`
     value: relative
    --------^</pre></details></td></tr>
<tr><td>170</td><td>⚠️</td><td>bles.com</td><td><details><summary>Errors: 15</summary><pre>RightParenthesis is expected
   41 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
   43 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
Selector is expected
   81 |…rapper .video-frame.embed-responsive-4by3{width:510.6px}{height:313px!important}}@media(max-width:…
----------------------------------------------------------------^
RightParenthesis is expected
   89 |…-toolbar.dark a.disabled{opacity:.2;filter:alpha(opacity=20);cursor:default;background-color:#000!…
----------------------------------------------------------------^
RightParenthesis is expected
   89 |…box-button.dark.disabled{opacity:.1;filter:alpha(opacity=10);cursor:default;background-color:#000!…
----------------------------------------------------------------^
RightParenthesis is expected
   91 |…y:.9;-ms-filter:"alpha(opacity=90)";filter:alpha(opacity=90);-webkit-border-radius:0 100px 100px 0…
----------------------------------------------------------------^
Unexpected input
   91 |…x;-moz-border-radius:4px;border-radius:4px;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   91 |…f',endColorstr='#ffe6e6e6',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
  323 |  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=7, Direction=135, Color='#888888');
-----------------------^
RightParenthesis is expected
  342 |  filter: alpha(opacity=0);
------------------------------^
RightParenthesis is expected
  354 |  filter: alpha(opacity=80);
------------------------------^
RightParenthesis is expected
 1637 |  filter: alpha(opacity=33.3);
------------------------------^
Unexpected input
 2091 |  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=7, Direction=135, Color='#888888');
-----------------------^
Unexpected input
 2462 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#4d90fe',EndColorStr='#4787ed'…
-----------------------^
Unexpected input
 2475 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#4d90fe',EndColorStr='#357ae8'…
-----------------------^</pre></details></td><td><details><summary>14 warnings</summary><pre>Node has no children × 13
Invalid value for `filter` × 2
     value: "alpha(opacity=75)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=0)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=100)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=40)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=85)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=90)"
    --------^
Unknown property `webkit-transition` × 2
The rest part of value can't be matched to `list-style` grammar
     value: outside disc
    ----------------^
The rest part of value can't be matched to `list-style` grammar
     value: outside decimal
    ----------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `border`
     value: block
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,whiteSmoke,#F1F1F1)
    ------------------------^</pre></details></td></tr>
<tr><td>171</td><td>⚠️</td><td>hotstar.com</td><td><details><summary>Errors: 29</summary><pre>RightParenthesis is expected
    6 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
    8 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…wed;pointer-events:none;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:no…
----------------------------------------------------------------^
Unexpected input
   17 |…coration:none;background-color:transparent;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.carousel-caption .btn,.text-hide{tex…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…tion:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:a…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…ty=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{padding:15px;min-height…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…eight:400;line-height:1.4;opacity:0;filter:alpha(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(op…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…a(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{margin-top:-3px;padding:…
----------------------------------------------------------------^
Unexpected input
   17 |…0,0,0,.5) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…rsor:pointer;z-index:100;height:76%;filter:alpha(opacity=80)}.carousel-control.left{filter:none;ba…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…ver{color:#fff;text-decoration:none;filter:alpha(opacity=100);outline:0;opacity:1}#CarouselPlaylis…
----------------------------------------------------------------^
RightParenthesis is expected
   17 |…ver{color:#fff;text-decoration:none;filter:alpha(opacity=90);outline:0;opacity:.9}.mantainance{mar…
----------------------------------------------------------------^
Unexpected input
   20 |…g);transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   20 |…eg);transform:rotate(90deg)}.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   20 |…g);transform:rotate(180deg)}.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   20 |…ansform:rotate(270deg)}.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   20 |…1);transform:scale(-1,1)}.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…ver{color:#fff;text-decoration:none;filter:alpha(opacity=90);outline:0;opacity:.9}.fixPosIcon{posi…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…nsform.Microsoft.Alpha(Opacity=50)";filter:alpha(opacity=50);-moz-opacity:.5;-khtml-opacity:.5;opa…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
Unexpected input
   20 |…on,.master-head-gr,header .header-gradient{filter:progid: DXImageTransform.Microsoft.gradient( sta…
----------------------------------------------------------------^
Semicolon or block is expected
   20 |…verflow-scrolling:touch;max-height:3000px}@media screen and(min-color-index:0) and(-webkit-min-dev…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…r&gt;.item{opacity:.07;-moz-opacity:.1;filter:alpha(opacity=40);-moz-transition:opacity .7s ease-in-o…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…er .active{opacity:1;-moz-opacity:1;filter:alpha(opacity=100);-webkit-transform:translate3d(0,0,0)…
----------------------------------------------------------------^
Selector is expected
   20 |…8px;font-size:16px;font-weight:500;text-decoration:none},.signin-container a:active,.signin-contai…
----------------------------------------------------------------^
Identifier is expected
   20 |…tainer button.btn-freemium:hover,.open&gt;.dropdown-toggle..btn-freemium{box-shadow:inherit}.freemium…
----------------------------------------------------------------^
Selector is expected
   20 |…op:20px}.sihs-itemList select{text-transform:capitalize}; .si-scorecard .si-select-box:before{cont…
----------------------------------------------------------------^</pre></details></td><td><details><summary>24 warnings</summary><pre>Node has no children × 24
Invalid value for `-webkit-perspective`
     value: 1000
    --------^
Invalid value for `perspective`
     value: 1000
    --------^
Invalid value for `width` × 2
     value: device-width
    --------^
Invalid value for `background-image`
     value: linear-gradient(left,#e4e5e6,#e1e2e3)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(left,#eff0f1,#d8d9dc)
    ------------------------^
Invalid value for `border-color`
     value: -moz-use-text-color #575f69 -moz-use-text-color -moz-use-text-color
    --------^
Unknown property `fot-size`
The rest part of value can't be matched to `font` grammar
     value: 500 13px/18px Gibson' 13px/18px'
    ----------------------------^
Unknown property `-display` × 2
Unknown property `ie-dummy`
Invalid value for `background`
     value: -webkit-linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.6) 100%)
    --------------------------------^
Invalid value for `background`
     value: -o-linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.6) 100%)
    ---------------------------^
Invalid value for `background`
     value: -ms-linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.6) 100%)
    ----------------------------^
The rest part of value can't be matched to `-ms-transition` grammar
     value: opacity opacity .9s ease-in-out
    ----------------^
Invalid value for `-ms-filter` × 2
     value: blur(5px)
    --------^
Invalid value for `background-color`
     value: none
    --------^
Invalid value for `text-align`
     value: -o-center
    --------^
Invalid value for `text-align`
     value: -ms-center
    --------^
Invalid value for `text-align`
     value: -moz-center
    --------^
Invalid value for `text-align`
     value: -webkit-center
    --------^
Invalid value for `text-decoration`
     value: null
    --------^
Invalid value for `display`
     value: #000
    --------^
Invalid value for `width`
     value: 18.36
    --------^</pre></details></td></tr>
<tr><td>172</td><td>⚠️</td><td>mozilla.org</td><td>OK</td><td><details><summary>2 warnings</summary><pre>Unknown property `font-display` × 6
Invalid value for `-webkit-box-pack`
     value: flex-end
    --------^</pre></details></td></tr>
<tr><td>173</td><td>⚠️</td><td>bet365.com</td><td colspan="2">–</td></tr>
<tr><td>174</td><td>⚠️</td><td>google.se</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>175</td><td>⚠️</td><td>cnet.com</td><td><details><summary>Errors: 33</summary><pre>Unexpected input
    6 |…sor:default}.uvpjs--touch .uvpjs__controls{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    6 |…ialiased;-moz-osx-font-smoothing:grayscale;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…learnmore:hover,.uvpjs__ad-learnmore:focus{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    6 |…;cursor:default}.uvpjs__controlbar--hidden{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…efore,button.uvpjs__btn-fullscreen::before{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…utton.uvpjs__btn-fullscreen:active::before{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    6 |…ft:0}button.uvpjs__btn-playstate--disabled{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…utton.uvpjs__btn-playstate--disabled:focus{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…inter}button.uvpjs__btn-ccaption--disabled{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…button.uvpjs__btn-ccaption--disabled:focus{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…inter}button.uvpjs__btn-settings--disabled{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…button.uvpjs__btn-settings--disabled:focus{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…pointer}button.uvpjs__btn-volume--disabled{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…r,button.uvpjs__btn-volume--disabled:focus{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…ter}button.uvpjs__btn-fullscreen--disabled{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…tton.uvpjs__btn-fullscreen--disabled:focus{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…nsition:visibility 0s, opacity .1s ease-in;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…js__progress:hover,.uvpjs__progress:active{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    6 |…isibility:visible}.uvpjs__progress--hidden{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…led:hover,.uvpjs__progress--disabled:focus{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…pjs__progress-slider::-webkit-slider-thumb{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |… .uvpjs__progress-slider::-moz-range-thumb{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…d:focus .uvpjs__progress-slider::-ms-thumb{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…pjs__progress-slider::-webkit-slider-thumb{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |… .uvpjs__progress-slider::-moz-range-thumb{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…isabled .uvpjs__progress-slider::-ms-thumb{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…gin-top:-5px}.uvpjs__volume-slider--hidden{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…olume-slider--hidden::-webkit-slider-thumb{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…s__volume-slider--hidden::-moz-range-thumb{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…n}.uvpjs__volume-slider--hidden::-ms-thumb{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…hover,.uvpjs__btn-large-play--hidden:focus{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…en:hover,.uvpjs__btn-preview--hidden:focus{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    6 |…den:hover,.uvpjs__btn-replay--hidden:focus{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^</pre></details></td><td><details><summary>9 warnings</summary><pre>Invalid value for `background`
     value: -webkit-linear-gradient(to right,#642950,#8F2645,#B3233E,#D9192C)
    --------------------------------^
Invalid value for `-webkit-transition-delay`
     value: 0
    --------^
Invalid value for `transition-delay`
     value: 0
    --------^
Invalid value for `background`
     value: -webkit-gradient(linear,50% 0%,50% 100%,color-stop(244px,#000000),c…
    -----------------------------------------------------------^
Invalid value for `text-indent`
     value: -9999999
    --------^
Node has no children × 33
Invalid value for `background-color` × 2
     value: 0%
    --------^
Invalid value for `color`
     value: 0%
    --------^
Invalid value for `letter-spacing`
     value: 1
    --------^</pre></details></td></tr>
<tr><td>176</td><td>⚠️</td><td>twimg.com</td><td colspan="2">–</td></tr>
<tr><td>177</td><td>⚠️</td><td>lifedaily.com</td><td><details><summary>Errors: 39</summary><pre>RightParenthesis is expected
    3 |…px;background-color:#000;opacity:.6;filter:alpha(opacity=60)}.videoCube span.video-label.trc_ellip…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |… .thumbBlock .trc_sponsored_overlay{filter:alpha(opacity=60);opacity:.6;display:block;position:abs…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…0;left:0;background:#000;opacity:.4;filter:alpha(opacity=40);border:0}.trc_lightbox_base{z-index:1…
----------------------------------------------------------------^
Unexpected input
    3 |…,sans-serif;width:320px;background:#191919;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…bsolute;background:#000;opacity:.75;filter:alpha(opacity=75);top:0;_display:none}.videoCube.thumbn…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…sibility:hidden}.trc_fade{opacity:0;filter:alpha(opacity=0);visibility:hidden;transition:opacity 5…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…verlay{visibility:visible;opacity:1;filter:alpha(opacity=100);transition-delay:0s,0s;-moz-transiti…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…dable .trc_exclude_overlay.trc_fade{filter:alpha(opacity=80)\9}.videoCube.trc_user_excluded .trc_e…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…erlay{visibility:visible;opacity:.8;filter:alpha(opacity=80)}.videoCube.trc_user_excluded .thumbBl…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-a_abp-mode .video-lab…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-c_abp-mode .video-lab…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-c_backup .video-label…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-d_3x5-arrow .video-la…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-d_3x6-arrow .video-la…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-d_abp-mode .video-lab…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-d_horizontal-hero .vi…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-d_vertical-hero .vide…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.alternating-thumbnails-a .video-lab…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.organic-thumbnails-a .video-label-b…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.organic-thumbnails-f .video-label-b…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.organic-thumbnails-g .video-label-b…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.organic-thumbnails-i .video-label-b…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.organic-thumbnails-rr .video-label-…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.rbox-blended .video-label-box{text-…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.right-rail-bulk1 .video-label-box{t…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-a .video-label-box{text-…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-b .video-label-box{text-…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-c .video-label-box{text-…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-d .video-label-box{text-…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-e .video-label-box{text-…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-f .video-label-box{text-…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-h .video-label-box{text-…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-i .video-label-box{text-…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-m .video-label-box{text-…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-m2 .video-label-box{text…
----------------------------------------------------------------^
RightParenthesis is expected
 2505 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
 2507 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
Unexpected input
 2509 |…ortant;font-family:Open Sans,Arial,sans-serif !important!important;margin-top:14px!important;margi…
----------------------------------------------------------------^
RightParenthesis is expected
 2509 |…lt-ie9 .article_preview--pic{zoom:1;filter:alpha(opacity=70)}.lt-ie9 .article_preview:hover .artic…
----------------------------------------------------------------^</pre></details></td><td><details><summary>11 warnings</summary><pre>Invalid value for `white-space`
     value: -moz-pre-wrap
    --------^
Invalid value for `white-space`
     value: -o-pre-wrap
    --------^
Node has no children × 37
Invalid value for `background`
     value: linear-gradient(top,#191919,#393939)
    ------------------------^
Invalid value for `filter`
     value: gray
    --------^
Invalid value for `background-image` × 182
     value: null
    --------^
Invalid value for `margin-left` × 4
     value: &lt;empty string&gt;
    --------^
Invalid value for `margin-right` × 2
     value: &lt;empty string&gt;
    --------^
Invalid value for `-ms-flex-align`
     value: space-between
    --------^
Invalid value for `align-items`
     value: space-between
    --------^
Invalid value for `max-width`
     value: auto
    --------^</pre></details></td></tr>
<tr><td>178</td><td>⚠️</td><td>redtube.com</td><td>OK</td><td><details><summary>3 warnings</summary><pre>Invalid value for `font-size` × 2
     value: &lt;empty string&gt;
    --------^
Invalid value for `right`
     value: &lt;empty string&gt;
    --------^
Unknown property `textShadow` × 2</pre></details></td></tr>
<tr><td>179</td><td>⚠️</td><td>myfastappz.com</td><td>OK</td><td><details><summary>4 warnings</summary><pre>Lexer matching doesn't applicable for custom properties × 29
Matching for a tree with var() is not supported × 4
Invalid value for `width`
     value: device-width
    --------^
Unknown property `size`</pre></details></td></tr>
<tr><td>180</td><td>⚠️</td><td>fapmeth.com</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   28 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   28 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>181</td><td>⚠️</td><td>digitaldsp.com</td><td colspan="2">–</td></tr>
<tr><td>182</td><td>⚠️</td><td>walmart.com</td><td><details><summary>Errors: 3</summary><pre>Unexpected input
   87 |…ibility:hidden;margin-right:.625em}.ada-label{font-size:$font-size-small;color:#666;margin-left:12…
----------------------------------------------------------------^
Unexpected input
   87 |…olor:#666;margin-left:12px}.ada-error-message{font-size:$font-size-small;margin-top:12px;color:#ea…
----------------------------------------------------------------^
Unexpected input
   87 |…ock;position:absolute;height:0;top:-3px;right:1px;color:$grey-medium-light;font-weight:700}button.…
----------------------------------------------------------------^</pre></details></td><td><details><summary>4 warnings</summary><pre>Unknown property `-mos-osx-font-smoothing`
Invalid value for `-webkit-perspective`
     value: 1000
    --------^
Node has no children × 3
Invalid value for `font`
     value: 1em/1.5em
    --------^</pre></details></td></tr>
<tr><td>183</td><td>⚠️</td><td>globo.com</td><td><details><summary>Errors: 16</summary><pre>RightParenthesis is expected
    3 |…oat-box.config-active a.config-icon{filter:alpha(opacity=100);opacity:1}#user-bar .barra-notificat…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…transition:opacity .15s ease-in-out;filter:alpha(opacity=60);opacity:.6}#user-bar .barra-notificat…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…area .float-box a.config-icon:hover{filter:alpha(opacity=80);opacity:.8}#user-bar .barra-notificat…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…rea .float-box a.config-icon:active{filter:alpha(opacity=100);opacity:1}#user-bar .barra-notificat…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…d .config-loading{visibility:hidden;filter:alpha(opacity=0);opacity:0}#user-bar .barra-notificatio…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…osition:absolute;visibility:visible;filter:alpha(opacity=100);opacity:1;-webkit-transition:all .15…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…s-loaded .loading{visibility:hidden;filter:alpha(opacity=0);opacity:0}#user-bar .barra-user-area{f…
----------------------------------------------------------------^
Unexpected input
    3 |…p;color:#333;background-color:#fff;*zoom:1;filter:progid:DXImageTransform.Microsoft.gradient(gradi…
----------------------------------------------------------------^
Unexpected input
    3 |…r:#d1d1d1;background-color:#ebebeb;*zoom:1;filter:progid:DXImageTransform.Microsoft.gradient(gradi…
----------------------------------------------------------------^
Unexpected input
    3 |…left:-2px;background-color:#dedede;*zoom:1;filter:progid:DXImageTransform.Microsoft.gradient(gradi…
----------------------------------------------------------------^
Unexpected input
    3 |…0;color:#333;background-color:#fff;*zoom:1;filter:progid:DXImageTransform.Microsoft.gradient(gradi…
----------------------------------------------------------------^
Unexpected input
    3 |…;height:29px;background-color:#ddd;*zoom:1;filter:progid:DXImageTransform.Microsoft.gradient(gradi…
----------------------------------------------------------------^
Unexpected input
    3 |…ton-area&gt;div{background-color:#fff;*zoom:1;filter:progid:DXImageTransform.Microsoft.gradient(gradi…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |… .1s;transition:opacity easy-in .1s;filter:alpha(opacity=100);opacity:1}.widget-menu.nested .gshow…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ng:border-box;border-radius:2px/2px;filter:alpha(opacity=0);opacity:0}.widget-menu.nested .gshow .…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…tent{padding:25px 13px 0;height:75%;filter:alpha(opacity=0);opacity:0;position:relative}@media onl…
----------------------------------------------------------------^</pre></details></td><td><details><summary>8 warnings</summary><pre>Node has no children × 16
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#fff 54%,#f4f4f4 92%,#ededed)
    ------------------------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: opacity easy-in .1s
    ----------------^
The rest part of value can't be matched to `transition` grammar
     value: opacity easy-in .1s
    ----------------^
Invalid value for `text-align`
     value: -webkit-right
    --------^
Invalid value for `letter-spacing`
     value: auto
    --------^
Invalid value for `-ms-grid-row-align`
     value: baseline
    --------^
Invalid value for `background`
     value: linear-gradient(top,#d3d3d3 0,#cecece 20%,#dedede 40%,#e9e9e9 60%,#…
    ------------------------^</pre></details></td></tr>
<tr><td>184</td><td>⚠️</td><td>google.com.co</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>185</td><td>⚠️</td><td>crptentry.com</td><td colspan="2">–</td></tr>
<tr><td>186</td><td>⚠️</td><td>google.com.sg</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>187</td><td>⚠️</td><td>onlinevideoconverter.com</td><td><details><summary>Errors: 16</summary><pre>RightParenthesis is expected
    4 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
    6 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
RightParenthesis is expected
   19 |…nter-events:none;cursor:not-allowed;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:no…
----------------------------------------------------------------^
Unexpected input
   19 |…nd-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
RightParenthesis is expected
   19 |…color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.close:focus,.close:hover{…
----------------------------------------------------------------^
RightParenthesis is expected
   19 |…text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5}button.close{-webkit-appea…
----------------------------------------------------------------^
RightParenthesis is expected
   19 |…und-color:#000}.modal-backdrop.fade{filter:alpha(opacity=0);opacity:0}.modal-backdrop.in{filter:al…
----------------------------------------------------------------^
RightParenthesis is expected
   19 |…ity=0);opacity:0}.modal-backdrop.in{filter:alpha(opacity=50);opacity:.5}.modal-header{min-height:1…
----------------------------------------------------------------^
RightParenthesis is expected
   19 |…2px;font-weight:400;line-height:1.4;filter:alpha(opacity=0);opacity:0}.tooltip.in{filter:alpha(opa…
----------------------------------------------------------------^
RightParenthesis is expected
   19 |…ha(opacity=0);opacity:0}.tooltip.in{filter:alpha(opacity=90);opacity:.9}.tooltip.top{padding:5px 0…
----------------------------------------------------------------^
RightParenthesis is expected
   19 |…ext-shadow:0 1px 2px rgba(0,0,0,.6);filter:alpha(opacity=50);opacity:.5}.carousel-control.left{bac…
----------------------------------------------------------------^
Unexpected input
   19 |…t,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   19 |…t,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   19 |…ver{color:#fff;text-decoration:none;filter:alpha(opacity=90);outline:0;opacity:.9}.carousel-contro…
----------------------------------------------------------------^
RightParenthesis is expected
   21 |…sform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);opacity:1}.show_mobile&gt;b{display:inl…
----------------------------------------------------------------^
RightParenthesis is expected
   21 |…0;width:100%;height:100%;opacity:.9;filter:alpha(opacity=90);z-index:1}.loader-msg{position:fixed;…
----------------------------------------------------------------^</pre></details></td><td><details><summary>7 warnings</summary><pre>Node has no children × 15
Invalid value for `-webkit-perspective`
     value: 1000
    --------^
Invalid value for `perspective`
     value: 1000
    --------^
Invalid value for `width`
     value: device-width
    --------^
Invalid value for `-moz-transform-origin`
     value: loader8 2s linear infinite
    --------^
Invalid value for `-ms-transform-origin`
     value: loader8 2s linear infinite
    --------^
Invalid value for `-o-transform-origin`
     value: loader8 2s linear infinite
    --------^</pre></details></td></tr>
<tr><td>188</td><td>🆗</td><td>mega.nz</td><td>OK</td><td>OK</td></tr>
<tr><td>189</td><td>⚠️</td><td>slideshare.net</td><td colspan="2">–</td></tr>
<tr><td>190</td><td>⚠️</td><td>doubleclick.net</td><td>OK</td><td><details><summary>11 warnings</summary><pre>Invalid value for `min-height`
     value: none
    --------^
Invalid value for `-ms-touch-action`
     value: cross-slide-y pinch-zoom double-tap-zoom
    --------^
Invalid value for `touch-action`
     value: cross-slide-y pinch-zoom double-tap-zoom
    --------^
Invalid value for `-webkit-transform-style`
     value: none
    --------^
Invalid value for `transform-style`
     value: none
    --------^
Invalid value for `-webkit-transition-duration`
     value: color
    --------^
Invalid value for `transition-duration`
     value: color
    --------^
Unknown property `tap-highlight-color`
The rest part of value can't be matched to `-webkit-transform-origin` grammar ×…
     value: 0,0
    ---------^
The rest part of value can't be matched to `-ms-transform-origin` grammar × 2
     value: 0,0
    ---------^
The rest part of value can't be matched to `transform-origin` grammar × 2
     value: 0,0
    ---------^</pre></details></td></tr>
<tr><td>191</td><td>⚠️</td><td>steampowered.com</td><td><details><summary>Errors: 36</summary><pre>Unexpected input
 2117 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3d6c8d', endColorstr='#2e5…
-------------------------^
Unexpected input
 2377 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4d000000', endColorstr='#8…
-------------------------^
Unexpected input
 2730 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#919…
-------------------------^
Unexpected input
 2867 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#67c1f5', endColorstr='#417…
-------------------------^
Unexpected input
 2917 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#67c1f5', endColorstr='#417…
-------------------------^
Unexpected input
 3092 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3d6c8d', endColorstr='#2e5…
-------------------------^
Unexpected input
 3849 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e3eaef', endColorstr='#c7d…
-------------------------^
Identifier is expected
 4540 |    background: -webkit-linear-gradient( -60deg, #417a9b 5%,#67c1f5 95%););background: linear-grad…
--------------------------------------------------------------------------------^
Identifier is expected
 4540 |…round: linear-gradient( -60deg, #417a9b 5%,#67c1f5 95%););}
----------------------------------------------------------------^
Colon is expected
 4769 |    width 616px;
-----------------^
Unexpected input
 4929 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#67c1f5', endColorstr='#417…
-------------------------^
Identifier is expected
 4950 |    background: -webkit-linear-gradient( -45deg, rgba(64,121,153,1) 5%,rgba(42,62,89,1) 95%););bac…
----------------------------------------------------------------------------------------------------^
Identifier is expected
 4950 |…nt( -45deg, rgba(64,121,153,1) 5%,rgba(42,62,89,1) 95%););}
----------------------------------------------------------------^
Selector is expected
 5728 | {
--------^
Identifier is expected
 5958 |…( 255, 255, 255, 0.2) 5%,rgba( 255, 255, 255, 0.1) 95%););background: linear-gradient( 153deg, rgb…
----------------------------------------------------------------^
Identifier is expected
 5958 |…( 255, 255, 255, 0.2) 5%,rgba( 255, 255, 255, 0.1) 95%););    box-shadow: inset 0 0 160px rgba(255…
----------------------------------------------------------------^
Identifier is expected
 6463 |            background: -webkit-linear-gradient( -60deg, #417a9b 5%,#67c1f5 95%););background: lin…
----------------------------------------------------------------------------------------^
Identifier is expected
 6463 |…round: linear-gradient( -60deg, #417a9b 5%,#67c1f5 95%););    }
----------------------------------------------------------------^
Unexpected input
 6609 |    background: #transparent;    }
------------------------^
Unexpected input
 6623 |    background: #transparent;    }
------------------------^
Identifier is expected
 7365 |    background: -webkit-linear-gradient( 107deg, #24313f 0%,#171a21 33%););background: linear-grad…
--------------------------------------------------------------------------------^
Identifier is expected
 7365 |…round: linear-gradient( 107deg, #24313f 0%,#171a21 33%););}
----------------------------------------------------------------^
Unexpected input
 7802 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#67c1f5', endColorstr='#417…
-------------------------^
Unexpected input
 7874 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#67c1f5', endColorstr='#417…
-------------------------^
Unexpected input
 7883 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#67c1f5', endColorstr='#006…
-------------------------^
Unexpected input
 8144 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#67c1f5', endColorstr='#417…
-------------------------^
Unexpected input
 8707 |    background: background: -webkit-linear-gradient( left, rgba(0,0,0,0.2) 5%,rgba(0,0,0,0.4) 95%)…
---------------------------------^
Unexpected input
 9466 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#abd…
-------------------------^
Identifier is expected
 9824 |background: -webkit-linear-gradient( -65deg, rgba(37,49,63,1) 5%,rgba(54,97,125,1) 95%););backgrou…
-----------------------------------------------------------------------------------------------^
Identifier is expected
 9824 |…ent( -65deg, rgba(37,49,63,1) 5%,rgba(54,97,125,1) 95%););}
----------------------------------------------------------------^
Identifier is expected
 9827 |background: -webkit-linear-gradient( -65deg, #304761 5%,#30739f 95%););background: linear-gradient…
----------------------------------------------------------------------------^
Identifier is expected
 9827 |…round: linear-gradient( -65deg, #304761 5%,#30739f 95%););}
----------------------------------------------------------------^
Identifier is expected
 9989 |background: -webkit-linear-gradient( 134deg, #e8f5fc 5%,#cce9f9 95%););background: linear-gradient…
----------------------------------------------------------------------------^
Identifier is expected
 9989 |…round: linear-gradient( 134deg, #e8f5fc 5%,#cce9f9 95%););
----------------------------------------------------------------^
Identifier is expected
 10077 |background: -webkit-linear-gradient( 135deg, rgba(37,49,63,1) 5%,rgba(54,97,125,1) 95%););backgrou…
------------------------------------------------------------------------------------------------^
Identifier is expected
 10077 |…ent( 135deg, rgba(37,49,63,1) 5%,rgba(54,97,125,1) 95%););}
-----------------------------------------------------------------^</pre></details></td><td><details><summary>2 warnings</summary><pre>Node has no children × 16
Invalid value for `text-decoration`
     value: uppercase
    --------^</pre></details></td></tr>
<tr><td>192</td><td>⚠️</td><td>etsy.com</td><td><details><summary>Errors: 126</summary><pre>Unexpected input
    4 |…@-webkit-keyframes web-toolkit-scale-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…rm:scale(0.95);transform:scale(0.95);}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…;}}@-moz-keyframes web-toolkit-scale-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…rm:scale(0.95);transform:scale(0.95);}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…);}}@-ms-keyframes web-toolkit-scale-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…rm:scale(0.95);transform:scale(0.95);}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…le(1);}}@keyframes web-toolkit-scale-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…rm:scale(0.95);transform:scale(0.95);}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…-webkit-keyframes web-toolkit-scale-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…ransform:scale(1);transform:scale(1);}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…}}@-moz-keyframes web-toolkit-scale-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…ransform:scale(1);transform:scale(1);}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…;}}@-ms-keyframes web-toolkit-scale-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…ransform:scale(1);transform:scale(1);}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |….95);}}@keyframes web-toolkit-scale-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…ransform:scale(1);transform:scale(1);}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…}@-webkit-keyframes web-toolkit-fade-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Microsoft.Alpha(Opacity=0);opacity:0;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…1;}}@-moz-keyframes web-toolkit-fade-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Microsoft.Alpha(Opacity=0);opacity:0;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…:1;}}@-ms-keyframes web-toolkit-fade-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Microsoft.Alpha(Opacity=0);opacity:0;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…city:1;}}@keyframes web-toolkit-fade-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Microsoft.Alpha(Opacity=0);opacity:0;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…@-webkit-keyframes web-toolkit-fade-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…osoft.Alpha(enabled=false);opacity:1;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…;}}@-moz-keyframes web-toolkit-fade-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…osoft.Alpha(enabled=false);opacity:1;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…0;}}@-ms-keyframes web-toolkit-fade-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…osoft.Alpha(enabled=false);opacity:1;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…ity:0;}}@keyframes web-toolkit-fade-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…osoft.Alpha(enabled=false);opacity:1;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…e;}.ui-toolkit .has-char-limit .char-limit{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…-limit .char-limit.character-counter-focus{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |….checkbox,.ui-toolkit .radio-custom .radio{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…tive;}.ui-toolkit .checkbox-icon .checkbox{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…oolkit .checkbox-icon[disabled="disabled"]{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…dle;}.ui-toolkit .alert .alert-close:hover{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…r,.ui-toolkit .btn-transparent.is-hovering{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…t.is-disabled{background-color:transparent;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |….ui-toolkit .has-validation .checkbox-icon{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…it .has-validation.is-valid .checkbox-icon{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…xt-link-underline.is-active{cursor:pointer;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…white:hover,.ui-toolkit .link-white :focus{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…hover,.ui-toolkit .link-gray-darker :focus{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |….ui-toolkit .card.is-disabled .card-action{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…lkit .card-body:hover .card-img-wrap:after{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…dth:100%;}.ui-toolkit .card-img-wrap:after{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…card .card-body:hover .card-img-wrap:after{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…relative;}.ui-toolkit .overlay-close:hover{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…ght:-18px;}.ui-toolkit .overlay-back:hover{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…p]:before,.ui-toolkit [data-tooltip]:after{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…er,.ui-toolkit [data-tooltip]:hover:before{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…pagination-dot-thumbnail{border-radius:3px;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…ui-toolkit .pagination-dot-thumbnail:hover{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…ion:absolute;top:0;right:0;bottom:0;left:0;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…l-07-17 .carousel .carousel-pane.is-active{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…el .carousel-pane.carousel-pane-swipe-prev{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…carousel-07-17 body.is-touch .carousel-nav{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |….experimental-carousel-07-17 .carousel-nav{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…7-17 .carousel-nav.carousel-nav-left:hover{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…-17 .carousel-nav.carousel-nav-right:hover{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…ion:none;transition:none;border-radius:3px;filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…ion:absolute;top:0;right:0;bottom:0;left:0;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…toolkit .carousel .carousel-pane.is-active{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…el .carousel-pane.carousel-pane-swipe-prev{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…av,.ui-toolkit body.is-touch .carousel-nav{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…ranslateY(-50%);}.ui-toolkit .carousel-nav{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…4px 0 #CBCCC9;box-shadow:0 0 4px 0 #CBCCC9;filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…ar:hover .global-nav-avatar-img-wrap:after{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…-toolkit .global-nav-avatar-img-wrap:after{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…it .global-nav-avatar-img-wrap:hover:after{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…hover-darken .child-img-hover-darken:after{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…darken:focus .child-img-hover-darken:after{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
RightParenthesis is expected
    4 |… .count.hide{display:none;opacity:0;filter:alpha(opacity=0);}.gnav-header .text-link{display:block…
----------------------------------------------------------------^
RightParenthesis is expected
    4 |…-12px;position:absolute;opacity:0.1;filter:alpha(opacity=10);box-sizing:border-box;}.nav-icon.nav-…
----------------------------------------------------------------^
Unexpected input
    4 |…kit-keyframes web-toolkit-drift-left-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…pacity=0);opacity:0;margin-left:-30px;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…osoft.Alpha(enabled=false);opacity:1;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…moz-keyframes web-toolkit-drift-left-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…pacity=0);opacity:0;margin-left:-30px;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…osoft.Alpha(enabled=false);opacity:1;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…-ms-keyframes web-toolkit-drift-left-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…pacity=0);opacity:0;margin-left:-30px;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…osoft.Alpha(enabled=false);opacity:1;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…;}}@keyframes web-toolkit-drift-left-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…pacity=0);opacity:0;margin-left:-30px;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…osoft.Alpha(enabled=false);opacity:1;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…it-keyframes web-toolkit-drift-left-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…nabled=false);opacity:1;margin-left:0;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Microsoft.Alpha(Opacity=0);opacity:0;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…oz-keyframes web-toolkit-drift-left-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…nabled=false);opacity:1;margin-left:0;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Microsoft.Alpha(Opacity=0);opacity:0;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…ms-keyframes web-toolkit-drift-left-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…nabled=false);opacity:1;margin-left:0;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Microsoft.Alpha(Opacity=0);opacity:0;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…}}@keyframes web-toolkit-drift-left-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…nabled=false);opacity:1;margin-left:0;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Microsoft.Alpha(Opacity=0);opacity:0;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…it-keyframes web-toolkit-drift-right-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Opacity=0);opacity:0;margin-left:30px;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…osoft.Alpha(enabled=false);opacity:1;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…oz-keyframes web-toolkit-drift-right-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Opacity=0);opacity:0;margin-left:30px;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…osoft.Alpha(enabled=false);opacity:1;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…ms-keyframes web-toolkit-drift-right-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Opacity=0);opacity:0;margin-left:30px;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…osoft.Alpha(enabled=false);opacity:1;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…}}@keyframes web-toolkit-drift-right-in{0%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Opacity=0);opacity:0;margin-left:30px;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…osoft.Alpha(enabled=false);opacity:1;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…t-keyframes web-toolkit-drift-right-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…nabled=false);opacity:1;margin-left:0;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Microsoft.Alpha(Opacity=0);opacity:0;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…z-keyframes web-toolkit-drift-right-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…nabled=false);opacity:1;margin-left:0;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Microsoft.Alpha(Opacity=0);opacity:0;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…s-keyframes web-toolkit-drift-right-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…nabled=false);opacity:1;margin-left:0;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Microsoft.Alpha(Opacity=0);opacity:0;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…}@keyframes web-toolkit-drift-right-out{0%{filter:progid:DXImageTransform.Microsoft.Alpha(enabled=…
----------------------------------------------------------------^
Unexpected input
    4 |…nabled=false);opacity:1;margin-left:0;}50%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
Unexpected input
    4 |…Microsoft.Alpha(Opacity=0);opacity:0;}100%{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…ion:none;animation:none;opacity:0.5;filter:alpha(opacity=50);background-position:-34px 0;}.btn-col…
----------------------------------------------------------------^
RightParenthesis is expected
   13 |…ion:none;animation:none;opacity:0.3;filter:alpha(opacity=30);background-position:-53px 0;}.ie-fix{…
----------------------------------------------------------------^</pre></details></td><td><details><summary>12 warnings</summary><pre>Node has no children × 126
The rest part of value can't be matched to `box-shadow` grammar
     value: 0 1px 2px rgba(0,0,0,0.05) 0 inset
    -----------------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#FFF 20%,#FAF9F5)
    ------------------------^
The rest part of value can't be matched to `box-shadow` grammar × 2
     value: 0 0 0 #9A9A9A 0 inset
    ----------------------^
The rest part of value can't be matched to `box-shadow` grammar
     value: 0 -4px 0 #F56400 0 inset
    -------------------------^
The rest part of value can't be matched to `box-shadow` grammar
     value: 0 -4px 0 #9A9A9A 0 inset
    -------------------------^
Invalid value for `float`
     value: center
    --------^
The rest part of value can't be matched to `-moz-box-shadow` grammar × 2
     value: 0 0 2px rgba(0,0,0,0.2) rgba(0,0,0,0.1)
    --------------------------------^
The rest part of value can't be matched to `-webkit-box-shadow` grammar × 2
     value: 0 0 2px rgba(0,0,0,0.2) rgba(0,0,0,0.1)
    --------------------------------^
The rest part of value can't be matched to `box-shadow` grammar × 2
     value: 0 0 2px rgba(0,0,0,0.2) rgba(0,0,0,0.1)
    --------------------------------^
Invalid value for `-moz-background-clip` × 2
     value: padding-box
    --------^
Invalid value for `display`
     value: visible
    --------^</pre></details></td></tr>
<tr><td>193</td><td>⚠️</td><td>yelp.com</td><td><details><summary>Errors: 8</summary><pre>RightParenthesis is expected
    5 |…eight:30px;-moz-opacity:0;opacity:0;filter:alpha(opacity=0);-webkit-appearance:none;-moz-appearanc…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…t:0;bottom:0;width:100%;height:100%;filter:alpha(opacity=0);opacity:0}.photo-box--background.photo…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |… 3px}.photo-box-overlay--fade-hover{filter:alpha(opacity=0);opacity:0}.photo-box-overlay--fade-hov…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…over .photo-box-overlay--fade-hover{filter:alpha(opacity=100);opacity:1}.photo-box-overlay_caption…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…acity:0}.ltie9 .photo-box .biz-shim{filter:alpha(opacity=0)}.photo-box.is-loading{position:relativ…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…r:pointer;font-size:24px;color:#666;filter:alpha(opacity=50);opacity:.5}.dismiss-link:focus,.dismi…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…miss-link:focus,.dismiss-link:hover{filter:alpha(opacity=70);opacity:.7;text-decoration:none}.bull…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…t:0;bottom:0;width:100%;height:100%;filter:alpha(opacity=0);opacity:0}.feed-item_photos--single&gt;.f…
----------------------------------------------------------------^</pre></details></td><td><details><summary>14 warnings</summary><pre>Invalid value for `-webkit-box-align` × 3
     value: flex-end
    --------^
Invalid value for `-ms-flex-align` × 3
     value: flex-end
    --------^
Invalid value for `box-align` × 3
     value: flex-end
    --------^
Invalid value for `text-overflow` × 9
     value: -o-ellipsis-lastline
    --------^
The rest part of value can't be matched to `-webkit-box-flex` grammar × 2
     value: 1 0 auto
    ----------^
Node has no children × 8
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 1 0
    ----------^
Invalid value for `border-top-color`
     value: ""
    --------^
Invalid value for `border-left-color`
     value: ""
    --------^
Invalid value for `border-bottom-color`
     value: ""
    --------^
Invalid value for `-moz-user-select`
     value: auto
    --------^
Invalid value for `-ms-user-select`
     value: auto
    --------^
The rest part of value can't be matched to `-moz-box-flex` grammar
     value: 1 0 auto
    ----------^
Invalid value for `-moz-box-align`
     value: flex-end
    --------^</pre></details></td></tr>
<tr><td>194</td><td>⚠️</td><td>speakol.com</td><td><details><summary>Errors: 17</summary><pre>RightParenthesis is expected
   21 |…t[disabled] .btn{cursor:not-allowed;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:no…
----------------------------------------------------------------^
Unexpected input
   21 |…nd-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
RightParenthesis is expected
   21 |…color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.close:hover,.close:focus{…
----------------------------------------------------------------^
RightParenthesis is expected
   21 |…text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5}button.close{-webkit-appea…
----------------------------------------------------------------^
RightParenthesis is expected
   21 |…und-color:#000}.modal-backdrop.fade{filter:alpha(opacity=0);opacity:0}.modal-backdrop.in{filter:al…
----------------------------------------------------------------^
RightParenthesis is expected
   21 |…ity=0);opacity:0}.modal-backdrop.in{filter:alpha(opacity=50);opacity:.5}.modal-header{padding:15px…
----------------------------------------------------------------^
RightParenthesis is expected
   21 |…word-wrap:normal;white-space:normal;filter:alpha(opacity=0);opacity:0;line-break:auto}.tooltip.in{…
----------------------------------------------------------------^
RightParenthesis is expected
   21 |…acity:0;line-break:auto}.tooltip.in{filter:alpha(opacity=90);opacity:.9}.tooltip.top{padding:5px 0…
----------------------------------------------------------------^
RightParenthesis is expected
   21 |…,0,.6);background-color:transparent;filter:alpha(opacity=50);opacity:.5}.carousel-control.left{bac…
----------------------------------------------------------------^
Unexpected input
   21 |…,rgba(0,0,0,.5) 0%,rgba(0,0,0,.0001) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   21 |…,rgba(0,0,0,.0001) 0%,rgba(0,0,0,.5) 100%);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   21 |…cus{color:#fff;text-decoration:none;filter:alpha(opacity=90);outline:0;opacity:.9}.carousel-contro…
----------------------------------------------------------------^
Unexpected input
   24 |…ottom,#8c1897 0%,#c3116d 52%,#ef4d2c 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
   28 |…d-repeat:no-repeat}.rc-anchor-logo-img-ie8{filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
RightParenthesis is expected
   28 |…s cubic-bezier(0.49,0.78,0.46,1.34);filter:alpha(opacity=0)}.rc-image-followup-tile{display:block}…
----------------------------------------------------------------^
Unexpected input
   30 |…d-repeat:no-repeat}.rc-anchor-logo-img-ie8{filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
RightParenthesis is expected
   30 |…s cubic-bezier(0.49,0.78,0.46,1.34);filter:alpha(opacity=0)}.rc-image-followup-tile{display:block}…
----------------------------------------------------------------^</pre></details></td><td><details><summary>4 warnings</summary><pre>Node has no children × 17
Invalid value for `width`
     value: device-width
    --------^
Unknown property `tap-highlight-color`
Invalid value for `background`
     value: -webkit-gradient(left top,left bottom,color-stop(0%,#8c1897),color-…
    -------------------------^</pre></details></td></tr>
<tr><td>195</td><td>⚠️</td><td>google.gr</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>196</td><td>⚠️</td><td>wikihow.com</td><td><details><summary>Errors: 17</summary><pre>RightParenthesis is expected
   12 |…or:#8fb778;background-color:#f6f5f4;filter:alpha(opacity=95);opacity:.95;padding:30px;border-radiu…
----------------------------------------------------------------^
RightParenthesis is expected
   14 |…ht:49px;margin-top:-49px;opacity:.9;filter:alpha(opacity=90);-ms-filter:"progid:DXImageTransform.M…
----------------------------------------------------------------^
Unexpected input
   20 |…ty:0.6;-webkit-opacity:0.6;opacity:0.6;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(opacity=…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…ansform.Microsoft.Alpha(opacity=60);filter:alpha(opacity=60);position:fixed;top:15px;right:15px;wi…
----------------------------------------------------------------^
Unexpected input
   20 |…-opacity:1;-webkit-opacity:1;opacity:1;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(opacity=…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…nsform.Microsoft.Alpha(opacity=100);filter:alpha(opacity=100)}.wh-featherlight .featherlight-conte…
----------------------------------------------------------------^
Unexpected input
   20 |…ty:0.0;-webkit-opacity:0.0;opacity:0.0;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(opacity=…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…ransform.Microsoft.Alpha(opacity=0);filter:alpha(opacity=0);background-color:black;cursor:pointer;…
----------------------------------------------------------------^
Unexpected input
   20 |…ty:0.7;-webkit-opacity:0.7;opacity:0.7;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(opacity=…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…ansform.Microsoft.Alpha(opacity=70);filter:alpha(opacity=70);display:none;position:absolute;backgr…
----------------------------------------------------------------^
Unexpected input
   20 |…ty:0.5;-webkit-opacity:0.5;opacity:0.5;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(opacity=…
----------------------------------------------------------------^
RightParenthesis is expected
   20 |…ansform.Microsoft.Alpha(opacity=50);filter:alpha(opacity=50);display:inline-block}.wh-featherlight…
----------------------------------------------------------------^
RightParenthesis is expected
   40 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
   42 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
RightParenthesis is expected
  163 |…width:100%;left:0;position:absolute;filter:alpha(opacity=10);opacity:0.10;border-radius:2px}.ulb_b…
----------------------------------------------------------------^
Unexpected input
  335 |…ndex:0;background-color:rgba(45,45,45,.45);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
RightParenthesis is expected
  381 |…/images/article_sprite.png)}.fading{filter:alpha(opacity=40);opacity:0.4}.template_top.wh_block{pa…
----------------------------------------------------------------^</pre></details></td><td><details><summary>11 warnings</summary><pre>Node has no children × 16
Invalid value for `padding` × 2
     value: none
    --------^
Invalid value for `float`
     value: center
    --------^
Invalid value for `white-space`
     value: wrap
    --------^
Unknown property `-moz-user-drag`
Unknown property `user-drag`
Unknown property `top-left-border-radius` × 3
The rest part of value can't be matched to `margin` grammar
     value: 0 auto 2 auto
    ---------------^
The rest part of value can't be matched to `border` grammar
     value: 0 27px
    ----------^
Invalid value for `display` × 5
     value: box
    --------^
Invalid value for `display` × 5
     value: -moz-flex
    --------^</pre></details></td></tr>
<tr><td>197</td><td>⚠️</td><td>mercadolivre.com.br</td><td>OK</td><td><details><summary>3 warnings</summary><pre>Unknown property `font-display` × 3
Invalid value for `background-color` × 2
     value: none
    --------^
Invalid value for `background-image`
     value: -webkit-gradient(linear,left top,left bottom,from(0),color-stop(#e6…
    ----------------------------------------------------------^</pre></details></td></tr>
<tr><td>198</td><td>⚠️</td><td>igmatik.com</td><td><details><summary>Errors: 27</summary><pre>RightParenthesis is expected
   81 |…wed;pointer-events:none;opacity:.65;filter:alpha(opacity=65);box-shadow:none}.btn-default{color:#4…
----------------------------------------------------------------^
Unexpected input
   81 |…nd-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
RightParenthesis is expected
   81 |…text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:focus,.close:hover{color:#000;…
----------------------------------------------------------------^
RightParenthesis is expected
   81 |…tion:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer…
----------------------------------------------------------------^
RightParenthesis is expected
   81 |…#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:a…
----------------------------------------------------------------^
RightParenthesis is expected
   81 |…ty=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{padding:15px;border-bot…
----------------------------------------------------------------^
RightParenthesis is expected
   81 |…eight:400;line-height:1.4;opacity:0;filter:alpha(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(op…
----------------------------------------------------------------^
RightParenthesis is expected
   81 |…a(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{margin-top:-3px;padding:…
----------------------------------------------------------------^
RightParenthesis is expected
   81 |…eft:0;bottom:0;width:15%;opacity:.5;filter:alpha(opacity=50);font-size:20px;color:#fff;text-align:…
----------------------------------------------------------------^
Unexpected input
   81 |…,0,.0001) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   81 |…0,0,0,.5) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
   81 |…fff;text-decoration:none;opacity:.9;filter:alpha(opacity=90)}.carousel-control .glyphicon-chevron-…
----------------------------------------------------------------^
Unexpected input
   81 |…g);transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   81 |…eg);transform:rotate(90deg)}.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   81 |…g);transform:rotate(180deg)}.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   81 |…ansform:rotate(270deg)}.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   81 |…1);transform:scale(-1,1)}.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rot…
----------------------------------------------------------------^
Unexpected input
   83 |…botoDraft,'Helvetica Neue',Helvetica,Arial;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
   83 |…',Helvetica,Arial;background-color:#f7f7f7;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
   83 |…choice div{border-left:none;background:0 0;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
   83 |…rder-left-color:transparent;background:0 0;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
Unexpected input
   83 |…44;background:#efefef;border-color:#e7e7e7;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
RightParenthesis is expected
   83 |…ion:absolute!important;top:0;left:0;filter:alpha(opacity=0);opacity:0;z-index:-1}.bootstrap-switch…
----------------------------------------------------------------^
RightParenthesis is expected
   83 |…ch-readonly .bootstrap-switch-label{filter:alpha(opacity=50);opacity:.5;cursor:default!important}.…
----------------------------------------------------------------^
RightParenthesis is expected
   83 |…ccc;background-color:#222!important;filter:alpha(opacity=90);opacity:.9;background:0 0;border:none…
----------------------------------------------------------------^
RightParenthesis is expected
   83 |…%;height:100%;background-color:#000;filter:alpha(opacity=30);opacity:.3}.note-handle .note-control…
----------------------------------------------------------------^
RightParenthesis is expected
   83 |…00;font-size:12px;border-radius:5px;filter:alpha(opacity=70);opacity:.7}.demo-icons-list{padding:2…
----------------------------------------------------------------^</pre></details></td><td><details><summary>17 warnings</summary><pre>Node has no children × 27
Invalid value for `border-top-right-radius` × 5
     value: -1
    --------^
Invalid value for `border-top-left-radius` × 5
     value: -1
    --------^
Invalid value for `border-bottom-right-radius` × 5
     value: -1
    --------^
Invalid value for `border-bottom-left-radius` × 5
     value: -1
    --------^
Invalid value for `-webkit-perspective`
     value: 1000
    --------^
The rest part of value can't be matched to `transition` grammar
     value: all border .15s ease-in-out,color .15s ease-in-out ease-out
    ------------^
The rest part of value can't be matched to `transition` grammar
     value: all border .15s ease-in-out ease-out
    ------------^
The rest part of value can't be matched to `transition` grammar × 2
     value: all border-color ease-in-out .15s,box-shadow ease-in-out .15s ease-…
    ------------^
The rest part of value can't be matched to `transition` grammar
     value: all margin-left .5s ease-out
    ------------^
Invalid value for `-webkit-animation-delay` × 2
     value: 0,3s
    --------^
Invalid value for `animation-delay` × 2
     value: 0,3s
    --------^
The rest part of value can't be matched to `-webkit-animation-delay` grammar
     value: 3s,0
    ----------^
The rest part of value can't be matched to `animation-delay` grammar
     value: 3s,0
    ----------^
Invalid value for `-webkit-animation-delay`
     value: 0
    --------^
Invalid value for `animation-delay`
     value: 0
    --------^
Unknown property `pointer-event`</pre></details></td></tr>
<tr><td>199</td><td>⚠️</td><td>hulu.com</td><td>OK</td><td><details><summary>6 warnings</summary><pre>Invalid value for `-webkit-box-align` × 10
     value: flex-start
    --------^
Invalid value for `-ms-flex-align` × 10
     value: flex-start
    --------^
Invalid value for `-webkit-box-align` × 8
     value: flex-end
    --------^
Invalid value for `-ms-flex-align` × 8
     value: flex-end
    --------^
Invalid value for `-webkit-box-pack` × 7
     value: space-around
    --------^
Invalid value for `-ms-flex-pack` × 7
     value: space-around
    --------^</pre></details></td></tr>
<tr><td>200</td><td>⚠️</td><td>jf71qh5v14.com</td><td colspan="2">–</td></tr>
<tr><td>201</td><td>⚠️</td><td>youporn.com</td><td colspan="2">–</td></tr>
<tr><td>202</td><td>⚠️</td><td>alibaba.com</td><td><details><summary>Errors: 2</summary><pre>RightParenthesis is expected
  122 |…:transparent\9;_border-color:tomato;_filter:chroma(color=tomato);border-style:solid;overflow:hidde…
----------------------------------------------------------------^
RightParenthesis is expected
  127 |….ui-footer-sociality .share a:hover{filter:alpha(opacity=80);-moz-opacity:.8;-khtml-opacity:.8;opa…
----------------------------------------------------------------^</pre></details></td><td><details><summary>6 warnings</summary><pre>Invalid value for `cursor`
     value: normal
    --------^
Unknown property `vertical`
Node has no children × 2
Invalid value for `background-color`
     value: none
    --------^
Invalid value for `word-spacing`
     value: nowrap
    --------^
Invalid value for `font`
     value: 12px/18px
    --------^</pre></details></td></tr>
<tr><td>203</td><td>⚠️</td><td>google.be</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>204</td><td>⚠️</td><td>rumble.com</td><td><details><summary>Errors: 9</summary><pre>RightParenthesis is expected
   48 |…; right:5px; top:15px; opacity:0.7; filter:alpha(opacity=70); }
----------------------------------------------------------------^
RightParenthesis is expected
   49 |.minus-channel:hover { opacity:1; filter:alpha(opacity=100); }
-------------------------------------------------------------^
RightParenthesis is expected
   50 |.iconPlus { float:right; width:20px; opacity: 0.5; filter:alpha(opacity=50); margin-top:10px; }
------------------------------------------------------------------------------^
RightParenthesis is expected
   66 |.thumbnail-video:hover img{opacity:0.8;filter:alpha(opacity=80)}
------------------------------------------------------------------^
RightParenthesis is expected
   67 |…:-15px; background:#fff; opacity:0; filter:alpha(opacity=0); -webkit-transition:all 0.5s; -ms-tran…
----------------------------------------------------------------^
RightParenthesis is expected
   68 |.thumbnail-video:hover .icon-play{opacity:1;filter:alpha(opacity=100)}
-----------------------------------------------------------------------^
RightParenthesis is expected
  174 |.thumbContainers img { min-height:100px; background:#fff; opacity:0.7; filter:alpha(opacity=70); c…
--------------------------------------------------------------------------------------------------^
RightParenthesis is expected
  175 |.thumbContainers img:last-child, .thumbContainers img.active { opacity:1; filter:alpha(opacity=100…
-----------------------------------------------------------------------------------------------------^
RightParenthesis is expected
  225 |…ze:20px; cursor:pointer; opacity:0; filter:alpha(opacity=0); }
----------------------------------------------------------------^</pre></details></td><td><details><summary>4 warnings</summary><pre>Unknown property `webkit-transition`
Node has no children × 9
Invalid value for `border-radius`
     value: none
    --------^
Invalid value for `max-width`
     value: auto
    --------^</pre></details></td></tr>
<tr><td>205</td><td>⚠️</td><td>vice.com</td><td>OK</td><td><details><summary>9 warnings</summary><pre>Invalid value for `-webkit-box-pack` × 5
     value: space-evenly
    --------^
Invalid value for `-ms-flex-pack` × 5
     value: space-evenly
    --------^
Unknown property `size` × 2
Unknown property `-webkit-scrollbar-face-color`
Unknown property `-moz-scrollbar-face-color`
Unknown property `scrollbar-face-color`
Unknown property `-webkit-scrollbar-track-color`
Unknown property `-moz-scrollbar-track-color`
Unknown property `scrollbar-track-color`</pre></details></td></tr>
<tr><td>206</td><td>⚠️</td><td>sogou.com</td><td><details><summary>Errors: 15</summary><pre>RightParenthesis is expected
    5 |…ition:fixed;height:114px;width:100%;filter:alpha(opacity=0);-moz-opacity:0;opacity:0;transition:op…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…2s ease;transition:opacity .2s ease;filter:alpha(opacity=100);-moz-opacity:1;opacity:1;z-index:3;d…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…olute;right:15px;top:36px;opacity:1;filter:alpha(opacity=100)}.c-top .pos-more a{padding:0;margin:…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…t:0;top:0;z-index:5;background:#fff;filter:alpha(opacity=70);-moz-opacity:.7;opacity:.7}.gjss-err{…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…xed;*position:absolute;left:0;top:0;filter:alpha(opacity=85);-moz-opacity:.85;opacity:.85;z-index:…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…xtpage{margin-left:-1px}.se_endpage{filter:alpha(opacity=50);opacity:.5}.se_tvpagebar{clear:both;w…
----------------------------------------------------------------^
Unexpected input
    7 |…ff;width:31px;height:28px;line-height:28px;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    7 |…border:1px solid #cacaca;border-radius:2px;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…3{height:17px;background-color:#000;filter:alpha(opacity=50);opacity:.5;cursor:pointer}.se_vtimebg…
----------------------------------------------------------------^
Unexpected input
    7 |…:9pt;box-shadow:1px 1px 2px rgba(0,0,0,.1);filter:progid:DXImageTransform.Microsoft.Shadow(Color=#…
----------------------------------------------------------------^
Unexpected input
    7 |…round:-o-linear-gradient(top,#f9f9f9,#eee);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…t:left;margin-right:15px;opacity:.8;filter:alpha(opacity=80);position:relative}.mag-area .sw-info …
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…ound:#000;overflow:hidden;opacity:1;filter:alpha(opacity=100)}.hotmovie-img img{vertical-align:top…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…}.hotmovie-img:hover img{opacity:.5;filter:alpha(opacity=50)}.hotmovie-img .vr-mv-v2-play{display:…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…tem .sug-smpic:hover img{opacity:.5;filter:alpha(opacity=50)}.sug-starmovie .sug-smitem .sug-smpic…
----------------------------------------------------------------^</pre></details></td><td><details><summary>27 warnings</summary><pre>Invalid value for `background-image`
     value: -webkit-image-set(url(../images/ico_spy_mac.png) 2x,url(../images/i…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/ico_spy_mac.png) 2x,url(../images/ico_…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(../images/ico_beta2x.png) 2x,url(../images/ic…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/ico_beta2x.png) 2x,url(../images/ico_b…
    --------^
Invalid value for `background-image` × 6
     value: -webkit-image-set(url(../images/ico_spy2x.png) 2x,url(../images/ico…
    --------^
Invalid value for `background-image` × 6
     value: -moz-image-set(url(../images/ico_spy2x.png) 2x,url(../images/ico_sp…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(../images/logo_880x280.v.2.png) 2x,url(../ima…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/logo_880x280.v.2.png) 2x,url(../images…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(../images/logo_880x280_white.v.2.png) 2x,url(…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/logo_880x280_white.v.2.png) 2x,url(../…
    --------^
Invalid value for `background-image` × 2
     value: -webkit-image-set(url(../images/btn_card2x.png) 2x,url(../images/bt…
    --------^
Invalid value for `background-image` × 2
     value: -moz-image-set(url(../images/btn_card2x.png) 2x,url(../images/btn_c…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(../images/ico_erwm2.png) 2x,url(../images/ico…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/ico_erwm2.png) 2x,url(../images/ico_er…
    --------^
Invalid value for `background-image` × 2
     value: -webkit-image-set(url(../images/back_top_big.png) 2x,url(../images/…
    --------^
Invalid value for `background-image` × 2
     value: -moz-image-set(url(../images/back_top_big.png) 2x,url(../images/bac…
    --------^
Node has no children × 15
Invalid value for `background-image` × 2
     value: -webkit-image-set(url(../images/ico_spy_white2x.png) 2x,url(../imag…
    --------^
Invalid value for `background-image` × 2
     value: -moz-image-set(url(../images/ico_spy_white2x.png) 2x,url(../images/…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(../images/erweima2.png) 2x,url(../images/erwe…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/erweima2.png) 2x,url(../images/erweima…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(../images/ico_ft2x.gif?v=1) 2x,url(../images/…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/ico_ft2x.gif?v=1) 2x,url(../images/ico…
    --------^
Invalid value for `background-image`
     value: -webkit-image-set(url(../images/logo_300x116.png?v=1) 2x,url(../ima…
    --------^
Invalid value for `background-image`
     value: -moz-image-set(url(../images/logo_300x116.png?v=1) 2x,url(../images…
    --------^
The rest part of value can't be matched to `outline` grammar
     value: medium 0
    ---------------^
Unknown property `hiehgt`</pre></details></td></tr>
<tr><td>207</td><td>⚠️</td><td>youm7.com</td><td colspan="2">–</td></tr>
<tr><td>208</td><td>⚠️</td><td>abs-cbn.com</td><td colspan="2">–</td></tr>
<tr><td>209</td><td>⚠️</td><td>google.com.ph</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>210</td><td>⚠️</td><td>doublepimp.com</td><td><details><summary>Errors: 4</summary><pre>Unexpected input
  440 |…d-repeat:no-repeat}.rc-anchor-logo-img-ie8{filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
RightParenthesis is expected
  440 |…s cubic-bezier(0.49,0.78,0.46,1.34);filter:alpha(opacity=0)}.rc-image-followup-tile{display:block}…
----------------------------------------------------------------^
Unexpected input
  442 |…d-repeat:no-repeat}.rc-anchor-logo-img-ie8{filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
RightParenthesis is expected
  442 |…s cubic-bezier(0.49,0.78,0.46,1.34);filter:alpha(opacity=0)}.rc-image-followup-tile{display:block}…
----------------------------------------------------------------^</pre></details></td><td><details><summary>1 warning</summary><pre>Node has no children × 4</pre></details></td></tr>
<tr><td>211</td><td>⚠️</td><td>fbspyster.com</td><td><details><summary>Errors: 1</summary><pre>Unexpected input
   56 |    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#868f99', endColorstr='#efe…
-------------------------^</pre></details></td><td><details><summary>2 warnings</summary><pre>Invalid value for `background`
     value: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#868f99)…
    ---------------------------------------------------------------------------…
Node has no children</pre></details></td></tr>
<tr><td>212</td><td>⚠️</td><td>messenger.com</td><td>OK</td><td><details><summary>1 warning</summary><pre>The rest part of value can't be matched to `content` grammar
     value: attr(title),""
    -------------------^</pre></details></td></tr>
<tr><td>213</td><td>⚠️</td><td>coinmarketcap.com</td><td><details><summary>Errors: 12</summary><pre>RightParenthesis is expected
    3 |…wed;pointer-events:none;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:no…
----------------------------------------------------------------^
Unexpected input
    3 |…nd-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:hover,.close:focus{color:#000;…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…tion:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:a…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…ty=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{padding:15px;border-bot…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…size:12px;line-height:1.4;opacity:0;filter:alpha(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(op…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…a(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{margin-top:-3px;padding:…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…eft:0;bottom:0;width:15%;opacity:.5;filter:alpha(opacity=50);font-size:20px;color:#fff;text-align:…
----------------------------------------------------------------^
Unexpected input
    3 |…,0,.0001) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…0,0,0,.5) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
    3 |…fff;text-decoration:none;opacity:.9;filter:alpha(opacity=90)}.carousel-control .icon-prev,.carouse…
----------------------------------------------------------------^</pre></details></td><td><details><summary>9 warnings</summary><pre>Node has no children × 12
Invalid value for `background-image`
     value: -webkit-linear-gradient(left,color-stop(rgba(0,0,0,.5) 0),color-sto…
    -------------------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(left,color-stop(rgba(0,0,0,.0001) 0),color-…
    -------------------------------------^
Invalid value for `width`
     value: device-width
    --------^
Invalid value for `width`
     value: 32
    --------^
Invalid value for `height`
     value: 32
    --------^
Invalid value for `position`
     value: -moz-sticky
    --------^
Invalid value for `position`
     value: -ms-sticky
    --------^
Invalid value for `position`
     value: -o-sticky
    --------^</pre></details></td></tr>
<tr><td>214</td><td>⚠️</td><td>blastingnews.com</td><td><details><summary>Errors: 24</summary><pre>RightParenthesis is expected
    4 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
    6 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
RightParenthesis is expected
 2104 |  filter: alpha(opacity=65);
------------------------------^
Unexpected input
 5478 |  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
-----------------------^
RightParenthesis is expected
 7410 |  filter: alpha(opacity=20);
------------------------------^
RightParenthesis is expected
 7420 |  filter: alpha(opacity=50);
------------------------------^
RightParenthesis is expected
 7487 |  filter: alpha(opacity=0);
------------------------------^
RightParenthesis is expected
 7491 |  filter: alpha(opacity=50);
------------------------------^
RightParenthesis is expected
 7557 |  filter: alpha(opacity=0);
------------------------------^
RightParenthesis is expected
 7561 |  filter: alpha(opacity=90);
------------------------------^
RightParenthesis is expected
 7706 |  filter: alpha(opacity=50);
------------------------------^
Unexpected input
 7719 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#0000…
-----------------------^
Unexpected input
 7730 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#8000…
-----------------------^
RightParenthesis is expected
 7738 |  filter: alpha(opacity=90);
------------------------------^
Unexpected input
 11134 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#ffff…
------------------------^
Unexpected input
 11155 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#ffff…
------------------------^
Unexpected input
 12176 |    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#a6…
--------------------------^
Unexpected input
 12391 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#a600…
------------------------^
Unexpected input
 17357 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#ffff…
------------------------^
Unexpected input
 17458 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#a600…
------------------------^
Unexpected input
 22938 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e4e4e4', endColorstr='#cacaca…
------------------------^
Unexpected input
 23726 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e4e4e4', endColorstr='#cacaca…
------------------------^
Unexpected input
 24049 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e4e4e4', endColorstr='#cacaca…
------------------------^
Unexpected input
 24675 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#ffff…
------------------------^</pre></details></td><td><details><summary>26 warnings</summary><pre>Node has no children × 23
Unknown property `font-weigth` × 3
Invalid value for `background-image`
     value: -webkit-linear-gradient(left,color-stop(rgba(0,0,0,0.5) 0%),color-s…
    -------------------------------------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(left,color-stop(rgba(0,0,0,0.0001) 0%),colo…
    -------------------------------------^
Unknown property `-web-kit-animation-delay`
Invalid value for `width`
     value: device-width
    --------^
Invalid value for `overflow`
     value: overlay
    --------^
The rest part of value can't be matched to `border-top` grammar
     value: 1px solid a5a5a5
    ------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to right,rgba(0,0,0,0.76),rgba(0,0,0,0))
    --------------------------------^
Invalid value for `background`
     value: -o-linear-gradient(to right,rgba(0,0,0,0.76),rgba(0,0,0,0))
    ---------------------------^
Invalid value for `max-width`
     value: vw
    --------^
Unknown property `taxt-align`
Invalid value for `-webkit-filter`
     value: gray
    --------^
Invalid value for `filter` × 2
     value: gray
    --------^
Invalid value for `-ms-filter`
     value: grayscale(100%)
    --------^
Invalid value for `filter` × 2
     value: "alpha(opacity=75)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=0)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=100)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=40)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=90)"
    --------^
Invalid value for `filter` × 3
     value: "alpha(opacity=30)"
    --------^
Invalid value for `filter` × 2
     value: "alpha(opacity=20)"
    --------^
Invalid value for `filter` × 2
     value: "alpha(opacity=50)"
    --------^
Invalid value for `background-image` × 9
     value: -webkit-gradient(linear,color-stop(0,#ffffff),color-stop(0.97,#f4f4…
    --------------------------------^
Unknown property `border-rigth`
Invalid value for `background-image`
     value: -webkit-gradient(linear,0 291.125,0 0,from(#407474),color-stop(0.00…
    ----------------------------------^</pre></details></td></tr>
<tr><td>215</td><td>⚠️</td><td>scribd.com</td><td><details><summary>Errors: 4</summary><pre>RightParenthesis is expected
    4 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
    6 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^
RightParenthesis is expected
 5603 |…100%); filter: url('data:image/svg+xml;utf8,&lt;svg xmlns='http://www.w3.org/2000/svg'&gt;&lt;filter id='gr…
----------------------------------------------------------------^
Identifier is expected
 5970 |@media (950px) {.autogen_class_views_landing_home2_folds_base .landing_sub_heading .split {display…
---------------^</pre></details></td><td><details><summary>20 warnings</summary><pre>Node has no children × 2
Invalid value for `max-height` × 2
     value: 4.5
    --------^
Invalid value for `max-height`
     value: 3
    --------^
Unknown property `font-color` × 8
The rest part of value can't be matched to `line-height` grammar
     value: 2.5625em/2
    ----------------^
Invalid value for `font-size`
     value: body_size_medium
    --------^
Invalid value for `border-radius`
     value: none
    --------^
Invalid value for `margin-bottom`
     value: none
    --------^
Invalid value for `-webkit-box-flex`
     value: auto
    --------^
Invalid value for `-ms-flex-positive`
     value: auto
    --------^
Invalid value for `flex-grow`
     value: auto
    --------^
Invalid value for `color`
     value: flash_notice_text_color
    --------^
Invalid value for `-webkit-box-align` × 4
     value: left
    --------^
Invalid value for `-ms-flex-align` × 4
     value: left
    --------^
Invalid value for `align-items` × 4
     value: left
    --------^
Invalid value for `font-size`
     value: body_size_med
    --------^
Invalid value for `-webkit-filter`
     value: gray
    --------^
Invalid value for `filter`
     value: gray
    --------^
Invalid value for `width` × 2
     value: -webkit-fit-content
    --------^
Invalid value for `width` × 2
     value: -moz-fit-content
    --------^</pre></details></td></tr>
<tr><td>216</td><td>⚠️</td><td>indeed.com</td><td>OK</td><td><details><summary>5 warnings</summary><pre>Unknown property `-webkit-highlight` × 9
Invalid value for `color` × 2
     value: set-text-color(primary)
    --------^
Invalid value for `margin-left`
     value: -10x
    --------^
Invalid value for `margin-right`
     value: -10x
    --------^
Unknown property `-webkit-flex-align`</pre></details></td></tr>
<tr><td>217</td><td>⚠️</td><td>babytree.com</td><td><details><summary>Errors: 18</summary><pre>Unexpected input
  152 |…v3/reg_boxy_nw1.png'); #background: none; #filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
  153 |…v3/reg_boxy_nw2.png'); #background: none; #filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
  154 |…v3/reg_boxy_ne1.png'); #background: none; #filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
  155 |…v3/reg_boxy_ne2.png'); #background: none; #filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
  156 |…_v3/reg_boxy_se.png'); #background: none; #filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
  157 |…_v3/reg_boxy_sw.png'); #background: none; #filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
  158 |…_v3/reg_boxy_tw.png'); #background: none; #filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
  159 |…_v3/reg_boxy_te.png'); #background: none; #filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
  160 |…_v3/reg_boxy_n1.png'); #background: none; #filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
  161 |…_v3/reg_boxy_n2.png'); #background: none; #filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
  162 |…g_v3/reg_boxy_t.png'); #background: none; #filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
  163 |…g_v3/reg_boxy_s.png'); #background: none; #filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
  164 |…g_v3/reg_boxy_w.png'); #background: none; #filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
Unexpected input
  165 |…g_v3/reg_boxy_e.png'); #background: none; #filter:progid:DXImageTransform.Microsoft.AlphaImageLoad…
----------------------------------------------------------------^
RightParenthesis is expected
  182 |…kground-position:-11px 0;opacity:.7;filter:alpha(opacity=70)\0/;font-size:0;line-height:9999px;pad…
----------------------------------------------------------------^
RightParenthesis is expected
  182 |…se:hover,.bui-close:focus{opacity:1;filter:alpha(opacity=100)\0/}.bui-close:focus,.bui-close:activ…
----------------------------------------------------------------^
Unexpected input
  182 |…mWNgYGDYDAAAuAC0lXSlKAAAAABJRU5ErkJggg==);*filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^
Unexpected input
  182 |…,endColorstr='#10000000',GradientType=1 );_filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^</pre></details></td><td><details><summary>11 warnings</summary><pre>Invalid value for `color` × 2
     value: &lt;empty string&gt;
    --------^
Node has no children × 18
Invalid value for `background-repeat` × 8
     value: 0
    --------^
Unknown property `star`
Unknown property `bb`
The rest part of value can't be matched to `font-family` grammar
     value: "宋体",
    ------------^
Invalid value for `font`
     value: bold 14px/22px default
    --------^
The rest part of value can't be matched to `padding` grammar
     value: 1px solid #CCC
    ------------^
Invalid value for `font` × 5
     value: bold 14px/20px default
    --------^
Invalid value for `font`
     value: bold 16px/18px default
    --------^
Invalid value for `display`
     value: box
    --------^</pre></details></td></tr>
<tr><td>218</td><td>⚠️</td><td>google.com.pe</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr>
<tr><td>219</td><td>⚠️</td><td>naver.com</td><td><details><summary>Errors: 43</summary><pre>RightParenthesis is expected
    5 |…gn:top;line-height:999px;opacity:.5;filter:alpha(opacity=50)}.flick_next{position:absolute;top:50%…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…gn:top;line-height:999px;opacity:.5;filter:alpha(opacity=50)}#veta_top{position:relative;height:12…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ight:1px;background:#000;opacity:.1;filter:alpha(opacity=10)}.veta_bdr{position:absolute;top:1px;r…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…idth:1px;background:#000;opacity:.1;filter:alpha(opacity=10)}.veta_bdl{position:absolute;top:1px;b…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…idth:1px;background:#000;opacity:.1;filter:alpha(opacity=10)}.veta_bdb{position:absolute;right:0;b…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ight:1px;background:#000;opacity:.1;filter:alpha(opacity=10)}#ad_branding_hide{position:absolute;t…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…t{background:rgba(255,255,255,.001);filter:alpha(opacity=1) \0IE9}.search .ico_search_submit{posit…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…link[aria-disabled=true]{opacity:.2;filter:alpha(opacity=20)}.area_newsstand .api_logo{display:inl…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…d .aplc_link.is_disabled{opacity:.3;filter:alpha(opacity=30)}.area_newsstand .aplc_link:hover .apl…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…0;border:1px solid #000;opacity:.05;filter:alpha(opacity=5)}.area_newsstand .apln_nt_link{position…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…0;left:0;background:#000;opacity:.3;filter:alpha(opacity=30)}.area_newsstand .apln_list_wrap{posit…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…0;width:102px;height:11px;opacity:0;filter:alpha(opacity=0);-webkit-appearance:none}.login .chk_id…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…nd-position:-320px -78px;opacity:.3;filter:alpha(opacity=30)}.area_catebtns .ac_btn_next{right:0;b…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…nd-position:-320px -26px;opacity:.3;filter:alpha(opacity=30)}.area_catebtns .ac_bgl{position:absol…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ight:2px;background:#fff;opacity:.5;filter:alpha(opacity=50)}.tl_title .tt_links{position:relative…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ault .td_a:hover .td_time{opacity:1;filter:alpha(opacity=100);transition-delay:80ms;transition-dur…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…0;border:1px solid #000;opacity:.05;filter:alpha(opacity=5)}.tl_default .td_tag{position:absolute;…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…background-color:#00c73c;opacity:.9;filter:alpha(opacity=90)}.id_livinghome .tl_default .td_tag .t…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…dth:24px;background:#000;opacity:.4;filter:alpha(opacity=40);transition:width .2s cubic-bezier(.21…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ns-serif;line-height:24px;opacity:0;filter:alpha(opacity=0);transition:opacity .1s cubic-bezier(.2…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…0;border:1px solid #000;opacity:.05;filter:alpha(opacity=5)}.tl_bundle .tb_media .tbm_tw{display:b…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…#000;border-radius:21px;opacity:.05;filter:alpha(opacity=5)}.tl_bundle .tb_rec .tbr_tw{display:blo…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…0;border:1px solid #000;opacity:.05;filter:alpha(opacity=5)}.tl_bigimage .tb_ow{position:absolute;…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…0;left:0;background:#000;opacity:.3;filter:alpha(opacity=30)}.tl_bigimage .tb_omw{position:relativ…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…:0;border:1px solid #fff;opacity:.5;filter:alpha(opacity=50)}.tl_bigimage .tb_tw{position:relative…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ze:12px;line-height:16px;opacity:.8;filter:alpha(opacity=80)}.tl_bigimage .tb_d~.tb_t{overflow:hid…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…0;border:1px solid #000;opacity:.05;filter:alpha(opacity=5)}.tl_special .ts_thumb{position:absolut…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ial .tst_a:hover .ts_time{opacity:1;filter:alpha(opacity=100);transition-delay:80ms;transition-dur…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…dth:21px;background:#000;opacity:.4;filter:alpha(opacity=40);transition:width .2s cubic-bezier(.21…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…ns-serif;line-height:21px;opacity:0;filter:alpha(opacity=0);transition:opacity .1s cubic-bezier(.2…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…0;left:0;background:#000;opacity:.3;filter:alpha(opacity=30)}.tl_special .tst_omw{position:relativ…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…e:12px;line-height:18px;opacity:.85;filter:alpha(opacity=85)}.tl_special .tst_ico_video{display:bl…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…0;border:1px solid #000;opacity:.05;filter:alpha(opacity=5)}.tl_banner .tbt_m{display:block;transi…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…0;border:1px solid #000;opacity:.05;filter:alpha(opacity=5)}.tl_btmbanner .tb_tw{display:inline-bl…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…:0;border:1px solid #000;opacity:.1;filter:alpha(opacity=10)}.tl_ranking .tr_rt{display:inline-blo…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…0;border:1px solid #000;opacity:.05;filter:alpha(opacity=5)}.btmbanner_list .bl_tw{overflow:hidden…
----------------------------------------------------------------^
RightParenthesis is expected
    5 |…0;left:0;background:#000;opacity:.3;filter:alpha(opacity=30)}.section_svcmore .ss_svcbox{position:…
----------------------------------------------------------------^
RightParenthesis is expected
  163 |…00%;background-color:#fff;opacity:0;filter:alpha(opacity=0)}
----------------------------------------------------------------^
RightParenthesis is expected
  191 |…gn:top;line-height:999px;opacity:.5;filter:alpha(opacity=50)}.flick_next{position:absolute;top:50%…
----------------------------------------------------------------^
RightParenthesis is expected
  191 |…gn:top;line-height:999px;opacity:.5;filter:alpha(opacity=50)}.malllst{overflow:hidden;margin:0 16p…
----------------------------------------------------------------^
RightParenthesis is expected
  191 |…0;border:1px solid #000;opacity:.05;filter:alpha(opacity=5)}.giftlst_a{display:block}.giftlst_word…
----------------------------------------------------------------^
RightParenthesis is expected
  191 |…to;border:1px solid #000;opacity:.1;filter:alpha(opacity=10)}.pf_banner .pf_thumb{position:absolut…
----------------------------------------------------------------^
RightParenthesis is expected
  191 |…px;border:1px solid #000;opacity:.1;filter:alpha(opacity=10)}.pf_banner .banner_words{position:abs…
----------------------------------------------------------------^</pre></details></td><td><details><summary>2 warnings</summary><pre>Node has no children × 43
Unknown property `line-heught`</pre></details></td></tr>
<tr><td>220</td><td>⚠️</td><td>buzzfeed.com</td><td><details><summary>Errors: 2</summary><pre>RightParenthesis is expected
    6 |…osition:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_d…
----------------------------------------------------------------^
PercentSign is expected
    8 |…opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale…
----------------------------------------------------------------^</pre></details></td><td><details><summary>5 warnings</summary><pre>Invalid value for `-ms-flex-align` × 8
     value: space-around
    --------^
Invalid value for `align-items` × 8
     value: space-around
    --------^
Invalid value for `-ms-flex-align` × 8
     value: space-between
    --------^
Invalid value for `align-items` × 8
     value: space-between
    --------^
Node has no children</pre></details></td></tr>
<tr><td>221</td><td>⚠️</td><td>uol.com.br</td><td><details><summary>Errors: 56</summary><pre>RightParenthesis is expected
  181 |…hover .opacity60-inherit{opacity:.6;filter:alpha(opacity=60)}.opacity70:hover,.opacity70:hover .ho…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…hover .opacity70-inherit{opacity:.7;filter:alpha(opacity=70)}.opacity80:hover,.opacity80:hover .ho…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…hover .opacity80-inherit{opacity:.8;filter:alpha(opacity=80)}.opacity90:hover,.opacity90:hover .ho…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…hover .opacity90-inherit{opacity:.9;filter:alpha(opacity=90)}.opacity100:hover,.opacity100:hover .…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…hover .opacity100-inherit{opacity:1;filter:alpha(opacity=100)}.bg-transition,.bg-transition .hover…
----------------------------------------------------------------^
PercentSign is expected
  181 |…tion:savedLink .3s linear}@-webkit-keyframes savedLink{0{transform:scale(1);-webkit-transform:scal…
----------------------------------------------------------------^
PercentSign is expected
  181 |…;-webkit-transform:scale(1)}}@-moz-keyframes savedLink{0{transform:scale(1);-webkit-transform:scal…
----------------------------------------------------------------^
PercentSign is expected
  181 |…);-webkit-transform:scale(1)}}@-ms-keyframes savedLink{0{transform:scale(1);-webkit-transform:scal…
----------------------------------------------------------------^
PercentSign is expected
  181 |…le(1);-webkit-transform:scale(1)}}@keyframes savedLink{0{transform:scale(1);-webkit-transform:scal…
----------------------------------------------------------------^
Unexpected input
  181 |…(Strength=4, Direction=135, Color='#000')";filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Unexpected input
  181 |…(Strength=4, Direction=135, Color='#000')";filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
PercentSign is expected
  181 |…00%{background-position:-3654px}}@keyframes changeText{0{opacity:0}50%{opacity:1}60%{opacity:0}100…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…ew-voted .opacity90:hover{opacity:1;filter:alpha(opacity=100)}.horizontal-bbb.mod-horizontal .enqu…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…#000;-ms-filter:"alpha(opacity=60)";filter:alpha(opacity=60);-moz-opacity:.6;-khtml-opacity:.6;opa…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…-side .mask-left{width:305px;left:0;filter:alpha(opacity=40);-ms-filter:"alpha(opacity=40)";-webki…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…ight{float:left;width:220px;right:0;filter:alpha(opacity=30);-ms-filter:"alpha(opacity=30)";-webki…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…tal-label{font-size:12px;color:#fff;filter:alpha(opacity=50);-ms-filter:"alpha(opacity=50)";-webki…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |… .percent{color:#fff;font-size:12px;filter:alpha(opacity=60);-ms-filter:"alpha(opacity=60)";-webki…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…2px;display:block;text-align:center;filter:alpha(opacity=60);-ms-filter:"alpha(opacity=60)";-webki…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…px;font-size:18px;text-align:center;filter:alpha(opacity=0);-ms-filter:"alpha(opacity=0)";-webkit-…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…ing-label{font-size:12px;color:#fff;filter:alpha(opacity=70);-ms-filter:"alpha(opacity=70)";-webki…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…-button-complete{visibility:visible;filter:alpha(opacity=95);-ms-filter:"alpha(opacity=95)";-webki…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…city-candidates .candidate .percent{filter:alpha(opacity=50);-ms-filter:"alpha(opacity=50)";-webki…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…aceholder{font-size:14px;color:#fff;filter:alpha(opacity=100);-ms-filter:"alpha(opacity=100)";-web…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…aceholder{font-size:14px;color:#fff;filter:alpha(opacity=100);-ms-filter:"alpha(opacity=100)";-web…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…aceholder{font-size:14px;color:#fff;filter:alpha(opacity=100);-ms-filter:"alpha(opacity=100)";-web…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…aceholder{font-size:14px;color:#fff;filter:alpha(opacity=100);-ms-filter:"alpha(opacity=100)";-web…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…h:10000px;list-style:none;z-index:1;filter:alpha(opacity=100);-ms-filter:"alpha(opacity=100)";-web…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…tus{left:50px}.score-slider.fade-in{filter:alpha(opacity=0);-ms-filter:"alpha(opacity=0)";-webkit-…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…lor:#000;position:relative;top:-2px;filter:alpha(opacity=70);-ms-filter:"alpha(opacity=70)";-webki…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…tion-2 .situation-0 .candidate-mask{filter:alpha(opacity=30);-ms-filter:"alpha(opacity=30)";-webki…
----------------------------------------------------------------^
PercentSign is expected
  181 |…sor:pointer;display:block}@-webkit-keyframes placarGol{0{background-position:-202px -35px}5%{backg…
----------------------------------------------------------------^
PercentSign is expected
  181 |…ound-position:-2323px -35px}}@-moz-keyframes placarGol{0{background-position:-202px -35px}5%{backg…
----------------------------------------------------------------^
PercentSign is expected
  181 |…ground-position:-2323px -35px}}@-o-keyframes placarGol{0{background-position:-202px -35px}5%{backg…
----------------------------------------------------------------^
PercentSign is expected
  181 |…round-position:-2323px -35px}}@-ms-keyframes placarGol{0{background-position:-202px -35px}5%{backg…
----------------------------------------------------------------^
PercentSign is expected
  181 |…ackground-position:-2323px -35px}}@keyframes placarGol{0{background-position:-202px -35px}5%{backg…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…:.55;-khtml-opacity:.55;opacity:.55;filter:alpha(opacity=55);filter:progid:DXImageTransform.Micros…
----------------------------------------------------------------^
Unexpected input
  181 |…y:.55;opacity:.55;filter:alpha(opacity=55);filter:progid:DXImageTransform.Microsoft.Gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…per-foto .gradient-gray{opacity:.45;filter:alpha(opacity=45),progid:DXImageTransform.Microsoft.Gra…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |… a:hover .gradient-gray{opacity:.35;filter:alpha(opacity=35)}.mod-super-foto .full-absolute{positi…
----------------------------------------------------------------^
Unexpected input
  181 |…px) !important;filter:blur(5px) !important;filter:progid:DXImageTransform.Microsoft.Blur(PixelRadi…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…0%;background-color:#fff;opacity:.3;filter:alpha(opacity=20);z-index:1}.mod-super-foto .opacity-ho…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…opo-destaque .chamada-imagem a span{filter:alpha(opacity=100) !important}.mod-super-foto .topo-des…
----------------------------------------------------------------^
PercentSign is expected
  181 |…ion-fill-mode:forwards;height:40px}@keyframes slide-in{0{height:0}100%{height:40px}}@keyframes sli…
----------------------------------------------------------------^
PercentSign is expected
  181 |…e-in{0{height:0}100%{height:40px}}@keyframes slide-out{0{height:40px}100%{height:0}}@keyframes fad…
----------------------------------------------------------------^
PercentSign is expected
  181 |…e-out{0{height:40px}100%{height:0}}@keyframes fade-out{0{transform:rotateY(0);opacity:1}100%{trans…
----------------------------------------------------------------^
PercentSign is expected
  181 |…ransform:rotateY(180deg);opacity:0}}@keyframes fade-in{0{transform:rotateY(180deg);opacity:1}100%{…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…r li{-ms-filter:"alpha(opacity=50)";filter:alpha(opacity=50);-moz-opacity:.5;-khtml-opacity:.5;opa…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…ver{-ms-filter:"alpha(opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opac…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…verflow:hidden;clear:both;opacity:0;filter:alpha(opacity=0);position:absolute;top:0;left:0;z-index…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…zontal-aovivo .item.ativo{opacity:1;filter:alpha(opacity=100);-webkit-transition-delay:.5s;z-index…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…left:10px;cursor:pointer;opacity:.5;filter:alpha(opacity=50);background-color:#fff}.horizontal-aov…
----------------------------------------------------------------^
RightParenthesis is expected
  181 |…al-aovivo .nav-item.ativo{opacity:1;filter:alpha(opacity=100)}.mod-horizontal .horizontal-aovivo .…
----------------------------------------------------------------^
PercentSign is expected
  183 |…oat:right}@keyframes widget-container-avatar-see-later{0{opacity:1;transform:rotateY(0)}11.5%{opac…
----------------------------------------------------------------^
PercentSign is expected
  183 |…}}@keyframes widget-container-avatar-see-later-counter{0{opacity:1}5%{opacity:0}89.7%{opacity:0}10…
----------------------------------------------------------------^
PercentSign is expected
  183 |…y:1}}@keyframes widget-container-avatar-see-later-flag{0{width:0;height:70%;opacity:0;visibility:h…
----------------------------------------------------------------^</pre></details></td><td><details><summary>10 warnings</summary><pre>Node has no children × 39
Invalid value for `font-style`
     value: 400
    --------^
Invalid value for `-moz-transition-delay` × 2
     value: 0
    --------^
Invalid value for `-webkit-transition-delay` × 2
     value: 0
    --------^
Invalid value for `-ms-transition-delay` × 2
     value: 0
    --------^
Invalid value for `transition-delay` × 2
     value: 0
    --------^
Invalid value for `-ms-filter`
     value: blur(5px)
    --------^
The rest part of value can't be matched to `transform` grammar
     value: translateZ(0),rotate(1deg)
    ---------------------^
The rest part of value can't be matched to `-moz-transform` grammar
     value: translateZ(0),rotate(1deg)
    ---------------------^
The rest part of value can't be matched to `-webkit-transform` grammar
     value: translateZ(0),rotate(1deg)
    ---------------------^</pre></details></td></tr>
<tr><td>222</td><td>🆗</td><td>china.com.cn</td><td>OK</td><td>OK</td></tr>
<tr><td>223</td><td>⚠️</td><td>kissanime.ru</td><td colspan="2">–</td></tr>
<tr><td>224</td><td>⚠️</td><td>qulsqiqrev.com</td><td colspan="2">–</td></tr>
<tr><td>225</td><td>⚠️</td><td>amazon.fr</td><td><details><summary>Errors: 11</summary><pre>Unexpected input
  112 |….a-lt-ie9 .feed-carousel .feed-left{zoom:1;filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Unexpected input
  112 |…a-lt-ie9 .feed-carousel .feed-right{zoom:1;filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Identifier or asterisk is expected
  112 |…color:#FFF;vertical-align:baseline;white-space:nowrap}*|:-moz-full-screen-ancestor{transform:initi…
----------------------------------------------------------------^
Identifier or asterisk is expected
  112 |…color:#FFF;vertical-align:baseline;white-space:nowrap}*|:-moz-full-screen-ancestor{transform:initi…
----------------------------------------------------------------^
RightParenthesis is expected
  114 |…d-color:#000;-ms-filter:opacity(.6);filter:alpha(opacity=60);-webkit-opacity:.6;-moz-opacity:.6;-o…
----------------------------------------------------------------^
Unexpected input
  114 |…inset 0 1px 0 0 #fcf3dc;background:#f3ce72;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  114 |…ction-button:link:hover{background:#f1c65a;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  114 |…;padding:0;cursor:pointer;opacity:0;filter:alpha(opacity=0);visibility:visible;border:0;line-heigh…
----------------------------------------------------------------^
RightParenthesis is expected
  114 |…height:32px;-ms-filter:opacity(.95);filter:alpha(opacity=95);-webkit-opacity:.95;-moz-opacity:.95;…
----------------------------------------------------------------^
RightParenthesis is expected
  114 |…av-feed-arrow{-ms-filter:opacity(0);filter:alpha(opacity=0);-webkit-opacity:0;-moz-opacity:0;-o-op…
----------------------------------------------------------------^
Unexpected input
  114 |…-box;background:#eff0f3;background:#eff0f3;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>20 warnings</summary><pre>Invalid value for `background`
     value: -webkit-linear-gradient(to right,#f6f6f6,rgba(255,255,255,0),#f6f6f…
    --------------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3…
    --------------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to right,#fff,rgba(255,255,255,0),#fff)
    --------------------------------^
Invalid value for `color` × 4
     value: a_nullable_with_important()
    --------^
Invalid value for `margin-right`
     value: none
    --------^
Invalid value for `left`
     value: -
    --------^
Invalid value for `right`
     value: -
    --------^
Invalid value for `top`
     value: -
    --------^
Node has no children × 9
Invalid value for `vertical-align`
     value: center
    --------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to bottom,#cb0400,#a50200)
    --------------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to bottom,#cb0400,#a50200)
    -----------------------------^
Invalid value for `background-image`
     value: -ms-linear-gradient(to bottom,#cb0400,#a50200)
    ----------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to bottom,#cb0400,#a50200)
    ---------------------------^
Invalid value for `-ms-filter`
     value: opacity(.6)
    --------^
Invalid value for `-ms-filter`
     value: opacity(.95)
    --------^
Invalid value for `-ms-filter`
     value: opacity(0)
    --------^
Invalid value for `background`
     value: -webkit-gradient(linear,left top,left bottom,color-stop(0,#ddd),col…
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: linear-gradient(top,#ddd,#f7f7f7 3px,#fff)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(left,#fff,rgba(255,255,255,0),#fff)
    ------------------------^</pre></details></td></tr>
<tr><td>226</td><td>⚠️</td><td>kompas.com</td><td><details><summary>Errors: 2</summary><pre>RightParenthesis is expected
   65 |…annotation{background:rgba(0,0,0,0);filter:alpha(opacity=0);font-family:sans-serif;white-space:pre…
----------------------------------------------------------------^
RightParenthesis is expected
   65 |…v-button[disabled]:focus{opacity:.5;filter:alpha(opacity=50);cursor:auto;box-shadow:none}.iv-butto…
----------------------------------------------------------------^</pre></details></td><td><details><summary>7 warnings</summary><pre>Invalid value for `display` × 8
     value: -moz-flexbox
    --------^
Node has no children × 2
Invalid value for `-ms-filter`
     value: blur(20px)
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(20,20,20,0.6),rgba(209,209,209,0.6))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.8),rgba(0,0,0,0.7) 40%,rgba(0,0,0,…
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.4) 60%,rgba(0,0…
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#ffec7b,#dea405)
    ------------------------^</pre></details></td></tr>
<tr><td>227</td><td>⚠️</td><td>sciencedirect.com</td><td><details><summary>Errors: 6</summary><pre>RightParenthesis is expected
  983 |…;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-front{z-index:100}.ui-state-disabl…
----------------------------------------------------------------^
RightParenthesis is expected
  983 |…r .ui-priority-secondary{opacity:.7;filter:Alpha(Opacity=70);font-weight:normal}.ui-state-disabled…
----------------------------------------------------------------^
RightParenthesis is expected
  983 |…ader .ui-state-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none}.ui-state-disab…
----------------------------------------------------------------^
RightParenthesis is expected
  983 |…ge:none}.ui-state-disabled .ui-icon{filter:Alpha(Opacity=35)}.ui-icon{width:16px;height:16px}.ui-i…
----------------------------------------------------------------^
RightParenthesis is expected
  983 |…0.png") 50% 50% repeat-x;opacity:.3;filter:Alpha(Opacity=30)}.ui-widget-shadow{margin:-8px 0 0 -8p…
----------------------------------------------------------------^
RightParenthesis is expected
  983 |…0.png") 50% 50% repeat-x;opacity:.3;filter:Alpha(Opacity=30);border-radius:8px}
----------------------------------------------------------------^</pre></details></td><td><details><summary>2 warnings</summary><pre>The rest part of value can't be matched to `list-style` grammar
     value: outside none none
    ---------------------^
Node has no children × 6</pre></details></td></tr>
<tr><td>228</td><td>⚠️</td><td>liputan6.com</td><td><details><summary>Errors: 5</summary><pre>RightParenthesis is expected
   81 |…#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:a…
----------------------------------------------------------------^
RightParenthesis is expected
   81 |…ty=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{padding:15px;border-bot…
----------------------------------------------------------------^
RightParenthesis is expected
   81 |…rap:normal;font-size:12px;opacity:0;filter:alpha(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(op…
----------------------------------------------------------------^
RightParenthesis is expected
   81 |…a(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{margin-top:-3px;padding:…
----------------------------------------------------------------^
Unexpected input
   81 |…nd-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabl…
----------------------------------------------------------------^</pre></details></td><td><details><summary>5 warnings</summary><pre>Node has no children × 5
The rest part of value can't be matched to `border-left` grammar
     value: 1px solid 1px #DDD
    ------------------^
The rest part of value can't be matched to `border-right` grammar
     value: 1px solid 1px #DDD
    ------------------^
Invalid value for `background-clip`
     value: text
    --------^
Invalid value for `width`
     value: 100/3%
    --------^</pre></details></td></tr>
<tr><td>229</td><td>⚠️</td><td>zhihu.com</td><td><details><summary>Errors: 3</summary><pre>Number or identifier is expected
    3 |…dal-button-weibo{background-color:#f1403c;border-color:##F1403C;color:#fff}html[data-theme=dark] .…
----------------------------------------------------------------^
Number or identifier is expected
    3 |…dal-button-weibo{background-color:#b7302d;border-color:##B7302D;color:#1a1a1a}.SignInModal-button-…
----------------------------------------------------------------^
Semicolon or block is expected
    3 |…rection:row;flex-direction:row;white-space:nowrap;@nest .is-vertical &amp;{white-space:normal}}.Carous…
----------------------------------------------------------------^</pre></details></td><td><details><summary>17 warnings</summary><pre>Invalid value for `width`
     value: -webkit-fit-content
    --------^
Invalid value for `width`
     value: -moz-fit-content
    --------^
The rest part of value can't be matched to `border-radius` grammar
     value: inherit inherit 0 0
    -------------------------^
Node has no children × 2
Invalid value for `transition-delay` × 2
     value: 0
    --------^
The rest part of value can't be matched to `transition-property` grammar
     value: -webkit-transform opacity
    --------------------------^
The rest part of value can't be matched to `transition-property` grammar
     value: transform opacity
    ------------------^
The rest part of value can't be matched to `transition-property` grammar
     value: transform opacity,-webkit-transform opacity
    ------------------^
Invalid value for `-webkit-box-flex` × 2
     value: 100%
    --------^
Invalid value for `color` × 2
     value: darken(#cacccd,10%)
    --------^
Invalid value for `font-weight`
     value: auto
    --------^
Invalid value for `line-height`
     value: auto
    --------^
The rest part of value can't be matched to `transition-property` grammar
     value: background-color width
    -------------------------^
The rest part of value can't be matched to `transition-property` grammar
     value: background-color height
    -------------------------^
Invalid value for `-webkit-box-align`
     value: self-start
    --------^
Invalid value for `-ms-flex-align`
     value: self-start
    --------^
Invalid value for `-ms-grid-row-align`
     value: auto
    --------^</pre></details></td></tr>
<tr><td>230</td><td>🆗</td><td>huanqiu.com</td><td>OK</td><td>OK</td></tr>
<tr><td>231</td><td>⚠️</td><td>1337x.to</td><td><details><summary>Errors: 9</summary><pre>RightParenthesis is expected
    7 |…;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-front{z-index:100}.ui-state-disabl…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…r3aElaqrq56Bq7VAAAOw==);height:100%;filter:alpha(opacity=25);opacity:.25}.ui-progressbar-indetermi…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…r .ui-priority-secondary{opacity:.7;filter:Alpha(Opacity=70);font-weight:400}.ui-state-disabled,.u…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…ader .ui-state-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none}.ui-state-disab…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…ge:none}.ui-state-disabled .ui-icon{filter:Alpha(Opacity=35)}.ui-icon{width:16px;height:16px}.ui-i…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…0x40.png) 50% 50% repeat;opacity:.5;filter:Alpha(Opacity=50)}.ui-widget-shadow{margin:-5px 0 0 -5p…
----------------------------------------------------------------^
RightParenthesis is expected
    7 |…00.png) 50% 50% repeat-x;opacity:.2;filter:Alpha(Opacity=20);border-radius:5px}
----------------------------------------------------------------^
RightParenthesis is expected
 1073 |…wed;pointer-events:none;opacity:.65;filter:alpha(opacity=65);box-shadow:none}.btn-sm{font-family:o…
----------------------------------------------------------------^
Unexpected input
 1073 |…bottom,#2b2b2b 0,#1c1c1c 44%,#0f0f0f 100%);filter:progid:DXImageTransform.Microsoft.gradient( star…
----------------------------------------------------------------^</pre></details></td><td><details><summary>16 warnings</summary><pre>Node has no children × 9
Invalid value for `filter` × 3
     value: "alpha(opacity=75)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=0)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=100)"
    --------^
Invalid value for `filter` × 2
     value: "alpha(opacity=40)"
    --------^
Invalid value for `filter`
     value: "alpha(opacity=85)"
    --------^
Invalid value for `filter` × 2
     value: "alpha(opacity=90)"
    --------^
Invalid value for `filter` × 3
     value: "alpha(opacity=30)"
    --------^
Invalid value for `filter` × 2
     value: "alpha(opacity=20)"
    --------^
Invalid value for `filter` × 2
     value: "alpha(opacity=50)"
    --------^
The rest part of value can't be matched to `border` grammar × 16
     value: 0 0
    ----------^
Invalid value for `box-shadow`
     value: 0
    --------^
The rest part of value can't be matched to `list-style` grammar × 3
     value: outside none none
    ---------------------^
The rest part of value can't be matched to `border-right` grammar × 2
     value: 0 0
    ----------^
The rest part of value can't be matched to `border-left` grammar
     value: 0 0
    ----------^
Invalid value for `width`
     value: &lt;empty string&gt;
    --------^</pre></details></td></tr>
<tr><td>232</td><td>⚠️</td><td>irctc.co.in</td><td><details><summary>Errors: 15</summary><pre>RightParenthesis is expected
  209 |…es/swap.png') no-repeat;opacity:.55;filter:alpha(opacity=40);padding-left:12px}.SwapFromTo:hover{o…
----------------------------------------------------------------^
RightParenthesis is expected
  209 |…t:12px}.SwapFromTo:hover{opacity:.9;filter:alpha(opacity=90);cursor:pointer}.home-menu a{backgroun…
----------------------------------------------------------------^
Identifier `deep` is expected
  209 |…px;margin-top:0;position:absolute;right:4px;width:23px}//.dropmenudiv_b .dropmenudiv_b a:hover{bac…
----------------------------------------------------------------^
RightParenthesis is expected
  213 |…;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-front{z-index:100}.ui-state-disabl…
----------------------------------------------------------------^
RightParenthesis is expected
  213 |…r .ui-priority-secondary{opacity:.7;filter:Alpha(Opacity=70);font-weight:normal}.ui-state-disabled…
----------------------------------------------------------------^
RightParenthesis is expected
  213 |…ader .ui-state-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none}.ui-state-disab…
----------------------------------------------------------------^
RightParenthesis is expected
  213 |…ge:none}.ui-state-disabled .ui-icon{filter:Alpha(Opacity=35)}.ui-icon{width:16px;height:16px}.ui-i…
----------------------------------------------------------------^
RightParenthesis is expected
  213 |…0.png") 50% 50% repeat-x;opacity:.3;filter:Alpha(Opacity=30)}.ui-widget-shadow{margin:-8px 0 0 -8p…
----------------------------------------------------------------^
RightParenthesis is expected
  213 |…0.png") 50% 50% repeat-x;opacity:.3;filter:Alpha(Opacity=30);border-radius:8px}a:link{text-decorat…
----------------------------------------------------------------^
RightParenthesis is expected
  215 |…:absolute;right:0;top:0}*.rf-fu-inp{filter:alpha(opacity=0);font-size:10em;margin:0;opacity:0;posi…
----------------------------------------------------------------^
RightParenthesis is expected
  215 |…eft:0;top:0;z-index:-300;opacity:.1;filter:alpha(opacity=10)}*.rf-pp-shade{position:fixed;width:10…
----------------------------------------------------------------^
RightParenthesis is expected
  215 |…background-color:#d0d0d0;opacity:.5;filter:alpha(opacity=50)}*.rf-pp-shdw{background-color:#000;op…
----------------------------------------------------------------^
RightParenthesis is expected
  215 |…dw{background-color:#000;opacity:.1;filter:alpha(opacity=10);position:absolute;top:6px;left:6px;bo…
----------------------------------------------------------------^
RightParenthesis is expected
  215 |…dtr-shdw{background:#FFF;opacity:.5;filter:alpha(opacity=50)}*.rf-cal-timepicker-cnt{background:#e…
----------------------------------------------------------------^
RightParenthesis is expected
  215 |…r:#000;position:absolute;opacity:.3;filter:alpha(opacity=30)}*.rf-cal-edtr-btn{width:36px;padding:…
----------------------------------------------------------------^</pre></details></td><td><details><summary>12 warnings</summary><pre>The rest part of value can't be matched to `border` grammar
     value: solid 1px transparent*
    -----------------------------^
Unknown property `-moz-border-radius-toprleft`
Node has no children × 14
Invalid value for `border-collapse`
     value: &lt;empty string&gt;
    --------^
Invalid value for `BORDER-BOTTOM`
     value: #0 0 solid
    --------^
Unknown property `align`
The rest part of value can't be matched to `padding` grammar
     value: 10px auto
    -------------^
Invalid value for `color`
     value: #fffff
    --------^
The rest part of value can't be matched to `border` grammar
     value: 1px solid "#E5973E "
    ------------------^
Unknown property `text-color`
Unknown property `repeat-x`
Invalid value for `font-size`
     value: 11
    --------^</pre></details></td></tr>
<tr><td>233</td><td>⚠️</td><td>hibids10.com</td><td colspan="2">–</td></tr>
<tr><td>234</td><td>⚠️</td><td>ladbible.com</td><td colspan="2">–</td></tr>
<tr><td>235</td><td>⚠️</td><td>exoclick.com</td><td><details><summary>Errors: 2</summary><pre>Identifier is expected
   72 |        text-decoration: none; !important;
--------------------------------------^
Identifier is expected
   73 |        color: white; !important;
-----------------------------^</pre></details></td><td><details><summary>1 warning</summary><pre>Invalid value for `width`
     value: device-width
    --------^</pre></details></td></tr>
<tr><td>236</td><td>⚠️</td><td>mama.cn</td><td><details><summary>Errors: 16</summary><pre>RightParenthesis is expected
 1767 |    filter: alpha(opacity=100)
--------------------------------^
RightParenthesis is expected
 1775 |    filter: alpha(opacity=0);
--------------------------------^
RightParenthesis is expected
 1785 |    filter: alpha(opacity=50);
--------------------------------^
RightParenthesis is expected
 1869 |    filter: alpha(opacity=100)
--------------------------------^
RightParenthesis is expected
 1876 |    filter: alpha(opacity=0);
--------------------------------^
RightParenthesis is expected
 1886 |    filter: alpha(opacity=50);
--------------------------------^
RightParenthesis is expected
 2365 |    filter: alpha(opacity=100);
--------------------------------^
RightParenthesis is expected
 2792 |    filter: alpha(opacity=60);
--------------------------------^
RightParenthesis is expected
 3015 |    filter: alpha(opacity=100);
--------------------------------^
RightParenthesis is expected
 3312 |…;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-front{z-index:100}.ui-state-disabl…
----------------------------------------------------------------^
RightParenthesis is expected
 3312 |…r .ui-priority-secondary{opacity:.7;filter:Alpha(Opacity=70);font-weight:normal}.ui-state-disabled…
----------------------------------------------------------------^
RightParenthesis is expected
 3312 |…ader .ui-state-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none}.ui-state-disab…
----------------------------------------------------------------^
RightParenthesis is expected
 3312 |…ge:none}.ui-state-disabled .ui-icon{filter:Alpha(Opacity=35)}.ui-icon{width:16px;height:16px}.ui-i…
----------------------------------------------------------------^
RightParenthesis is expected
 3312 |…0x10.png) 50% 50% repeat;opacity:.6;filter:Alpha(Opacity=60)}.ui-widget-shadow{margin:0 0 0 -10px;…
----------------------------------------------------------------^
RightParenthesis is expected
 3312 |…0x10.png) 50% 50% repeat;opacity:.6;filter:Alpha(Opacity=60);border-radius:18px}
----------------------------------------------------------------^
Unexpected input
 3347 |}
-------^</pre></details></td><td><details><summary>1 warning</summary><pre>Node has no children × 15</pre></details></td></tr>
<tr><td>237</td><td>⚠️</td><td>newsprofin.com</td><td colspan="2">–</td></tr>
<tr><td>238</td><td>🆗</td><td>metropcs.mobi</td><td>OK</td><td>OK</td></tr>
<tr><td>239</td><td>⚠️</td><td>rambler.ru</td><td><details><summary>Errors: 17</summary><pre>RightParenthesis is expected
 1612 |…0% !important;opacity:.3 !important;filter:alpha(opacity=30) !important;width:200% !important;heig…
----------------------------------------------------------------^
Unexpected input
 1612 |…ine-block !important;opacity:.3 !important;filter:progid:DXImageTransform.Microsoft.Blur(PixelRadi…
----------------------------------------------------------------^
RightParenthesis is expected
 1612 |…px !important;opacity:.7 !important;filter:alpha(opacity=70) !important;cursor:pointer !important}…
----------------------------------------------------------------^
RightParenthesis is expected
 1612 |…kdkghgdg:hover{opacity:1 !important;filter:alpha(opacity=100) !important}.exwkxmvwbj .exkdkghgdg:h…
----------------------------------------------------------------^
RightParenthesis is expected
 1612 |…wbj .jwsefyix{opacity:.8 !important;filter:alpha(opacity=80) !important;font-size:1em !important;l…
----------------------------------------------------------------^
RightParenthesis is expected
 2217 |…-items:center}._7NBx{background:transparent url([object Object]) no-repeat 50%;width:15px;height:1…
----------------------------------------------------------------^
RightParenthesis is expected
 2223 |…px;right:140px;margin:auto;background-image:url([object Object]);background-color:#fff;border:0;cu…
----------------------------------------------------------------^
RightParenthesis is expected
 2223 |…e;display:none}.vt-8:hover{background-image:url([object Object])}.vt-8.P_6n{display:block}._3-se{w…
----------------------------------------------------------------^
RightParenthesis is expected
 2223 |…argin-right:0;padding-right:20px;background:url([object Object]) no-repeat 100%}._1rz3{display:non…
----------------------------------------------------------------^
RightParenthesis is expected
 2223 |…y:none}._2E7O{padding-right:19px;background:url([object Object]) no-repeat 100%;margin-left:8px;tr…
----------------------------------------------------------------^
RightParenthesis is expected
 2232 |…_1dT8:hover{color:#8d96b2}._19bP{background:url([object Object]) no-repeat 50%;width:6px;height:9p…
----------------------------------------------------------------^
RightParenthesis is expected
 2248 |…ght:19px;margin-right:40px;background-image:url([object Object]);background-size:cover;background-…
----------------------------------------------------------------^
RightParenthesis is expected
 2248 |…eat:no-repeat}._1HL9:hover{background-image:url([object Object])}@media only screen and (min-width…
----------------------------------------------------------------^
RightParenthesis is expected
 2249 |…ght:35px;margin-right:40px;background-image:url([object Object]);background-size:cover}._2Rn4:hove…
----------------------------------------------------------------^
RightParenthesis is expected
 2249 |…nd-size:cover}._2Rn4:hover{background-image:url([object Object])}@media only screen and (min-width…
----------------------------------------------------------------^
RightParenthesis is expected
 2268 |…color:#2541fa}._3b-2{background:transparent url([object Object]) no-repeat 50%;width:15px;height:1…
----------------------------------------------------------------^
RightParenthesis is expected
 2269 |…ht:9px;width:6px;margin-left:5px;background:url([object Object]) no-repeat 100%;padding-right:12px…
----------------------------------------------------------------^</pre></details></td><td><details><summary>5 warnings</summary><pre>Unknown property `tap-highlight-color`
Node has no children × 17
Invalid value for `transition-duration`
     value: 0
    --------^
Invalid value for `perspective`
     value: 1000
    --------^
Invalid value for `align-items`
     value: left
    --------^</pre></details></td></tr>
<tr><td>240</td><td>⚠️</td><td>amazon.it</td><td><details><summary>Errors: 11</summary><pre>RightParenthesis is expected
  108 |…d-color:#000;-ms-filter:opacity(.6);filter:alpha(opacity=60);-webkit-opacity:.6;-moz-opacity:.6;-o…
----------------------------------------------------------------^
Unexpected input
  108 |…inset 0 1px 0 0 #fcf3dc;background:#f3ce72;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  108 |…ction-button:link:hover{background:#f1c65a;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  108 |…;padding:0;cursor:pointer;opacity:0;filter:alpha(opacity=0);visibility:visible;border:0;line-heigh…
----------------------------------------------------------------^
RightParenthesis is expected
  108 |…height:32px;-ms-filter:opacity(.95);filter:alpha(opacity=95);-webkit-opacity:.95;-moz-opacity:.95;…
----------------------------------------------------------------^
RightParenthesis is expected
  108 |…av-feed-arrow{-ms-filter:opacity(0);filter:alpha(opacity=0);-webkit-opacity:0;-moz-opacity:0;-o-op…
----------------------------------------------------------------^
Unexpected input
  108 |…-box;background:#eff0f3;background:#eff0f3;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
  128 |….a-lt-ie9 .feed-carousel .feed-left{zoom:1;filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Unexpected input
  128 |…a-lt-ie9 .feed-carousel .feed-right{zoom:1;filter:progid:DXImageTransform.Microsoft.Shadow(Strengt…
----------------------------------------------------------------^
Identifier or asterisk is expected
  128 |…color:#FFF;vertical-align:baseline;white-space:nowrap}*|:-moz-full-screen-ancestor{transform:initi…
----------------------------------------------------------------^
Identifier or asterisk is expected
  128 |…color:#FFF;vertical-align:baseline;white-space:nowrap}*|:-moz-full-screen-ancestor{transform:initi…
----------------------------------------------------------------^</pre></details></td><td><details><summary>20 warnings</summary><pre>Invalid value for `background`
     value: -webkit-linear-gradient(to right,#f6f6f6,rgba(255,255,255,0),#f6f6f…
    --------------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3…
    --------------------------------^
Invalid value for `background`
     value: -webkit-linear-gradient(to right,#fff,rgba(255,255,255,0),#fff)
    --------------------------------^
Invalid value for `color` × 4
     value: a_nullable_with_important()
    --------^
Invalid value for `margin-right`
     value: none
    --------^
Invalid value for `left`
     value: -
    --------^
Invalid value for `right`
     value: -
    --------^
Invalid value for `top`
     value: -
    --------^
Invalid value for `-ms-filter`
     value: opacity(.6)
    --------^
Node has no children × 9
Invalid value for `-ms-filter`
     value: opacity(.95)
    --------^
Invalid value for `-ms-filter`
     value: opacity(0)
    --------^
Invalid value for `background`
     value: -webkit-gradient(linear,left top,left bottom,color-stop(0,#ddd),col…
    ---------------------------------------------------------------------------…
Invalid value for `background`
     value: linear-gradient(top,#ddd,#f7f7f7 3px,#fff)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(left,#fff,rgba(255,255,255,0),#fff)
    ------------------------^
Invalid value for `vertical-align`
     value: center
    --------^
Invalid value for `background-image`
     value: -webkit-linear-gradient(to bottom,#cb0400,#a50200)
    --------------------------------^
Invalid value for `background-image`
     value: -moz-linear-gradient(to bottom,#cb0400,#a50200)
    -----------------------------^
Invalid value for `background-image`
     value: -ms-linear-gradient(to bottom,#cb0400,#a50200)
    ----------------------------^
Invalid value for `background-image`
     value: -o-linear-gradient(to bottom,#cb0400,#a50200)
    ---------------------------^</pre></details></td></tr>
<tr><td>241</td><td>⚠️</td><td>gamespot.com</td><td><details><summary>Errors: 35</summary><pre>RightParenthesis is expected
  197 |…px;background-color:#000;opacity:.6;filter:alpha(opacity=60)}.videoCube span.video-label.trc_ellip…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |… .thumbBlock .trc_sponsored_overlay{filter:alpha(opacity=60);opacity:.6;display:block;position:abs…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…0;left:0;background:#000;opacity:.4;filter:alpha(opacity=40);border:0}.trc_lightbox_base{z-index:1…
----------------------------------------------------------------^
Unexpected input
  197 |…,sans-serif;width:320px;background:#191919;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…bsolute;background:#000;opacity:.75;filter:alpha(opacity=75);top:0;_display:none}.videoCube.thumbn…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…sibility:hidden}.trc_fade{opacity:0;filter:alpha(opacity=0);visibility:hidden;transition:opacity 5…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…verlay{visibility:visible;opacity:1;filter:alpha(opacity=100);transition-delay:0s,0s;-moz-transiti…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…dable .trc_exclude_overlay.trc_fade{filter:alpha(opacity=80)\9}.videoCube.trc_user_excluded .trc_e…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…erlay{visibility:visible;opacity:.8;filter:alpha(opacity=80)}.videoCube.trc_user_excluded .thumbBl…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_alternating-thumbnails-b_abp-mod…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_alternating-thumbnails-c_abp-mod…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_alternating-thumbnails-e_abp-mod…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-a_abp-mode .video-lab…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-b_abp-mode .video-lab…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-rr_abp-mode .video-la…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.alternating-thumbnails-a .video-lab…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.alternating-thumbnails-b .video-lab…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.alternating-thumbnails-c .video-lab…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.alternating-thumbnails-d .video-lab…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.alternating-thumbnails-e .video-lab…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.organic-thumbnails-feed .video-labe…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.organic-thumbnails-feed-a .video-la…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.organic-thumbnails-feed-c .video-la…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.rbox-blended .video-label-box{text-…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-a .video-label-box{text-…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-b .video-label-box{text-…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-b-abp .video-label-box{t…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-feed .video-label-box{te…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-feed-a .video-label-box{…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-m .video-label-box{text-…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-m-amp .video-label-box{t…
----------------------------------------------------------------^
RightParenthesis is expected
  197 |…ckground-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-rr .video-label-box{text…
----------------------------------------------------------------^
RightParenthesis is expected
 2270 |…{ visibility: visible; opacity: 1; filter: alpha(opacity=100); transition-delay: 0s, 0s; -moz-tran…
----------------------------------------------------------------^
RightParenthesis is expected
 2270 |… { visibility: hidden; opacity: 0; filter: alpha(opacity=0); transition: opacity 500ms 0s, visibil…
----------------------------------------------------------------^
Unexpected input
 2312 |…-radius:0 2px 2px 0}@media print{background:transparent !important;color:#000 !important;box-shado…
----------------------------------------------------------------^</pre></details></td><td><details><summary>34 warnings</summary><pre>Invalid value for `flex-wrap` × 2
     value: no-wrap
    --------^
Invalid value for `font-weight` × 24
     value: "normal"
    --------^
Invalid value for `font-style` × 24
     value: "normal"
    --------^
Invalid value for `font-weight` × 4
     value: "bold"
    --------^
Invalid value for `font-style` × 4
     value: "italic"
    --------^
Invalid value for `white-space`
     value: -moz-pre-wrap
    --------^
Invalid value for `white-space`
     value: -o-pre-wrap
    --------^
Node has no children × 34
Invalid value for `background`
     value: linear-gradient(top,#191919,#393939)
    ------------------------^
Invalid value for `filter`
     value: gray
    --------^
Invalid value for `background-image` × 161
     value: null
    --------^
Invalid value for `margin-left` × 10
     value: &lt;empty string&gt;
    --------^
Invalid value for `margin-right` × 5
     value: &lt;empty string&gt;
    --------^
Invalid value for `content`
     value: counters(section,".")
    --------^
Unknown property `-webkit-margin-top-collapse`
Invalid value for `opacity` × 2
     value: 100
    --------^
The rest part of value can't be matched to `-webkit-animation` grammar
     value: spin 2s linear 0 infinite reverse
    -------------------------^
The rest part of value can't be matched to `-moz-animation` grammar
     value: spin 2s linear 0 infinite reverse
    -------------------------^
The rest part of value can't be matched to `-o-animation` grammar
     value: spin 2s linear 0 infinite reverse
    -------------------------^
The rest part of value can't be matched to `animation` grammar
     value: spin 2s linear 0 infinite reverse
    -------------------------^
Invalid value for `-webkit-touch-callout`
     value: text
    --------^
Invalid value for `border-radius`
     value: 12pxw
    --------^
Lexer matching doesn't applicable for custom properties × 2
The rest part of value can't be matched to `-webkit-transition` grammar
     value: opacity 0
    ----------------^
The rest part of value can't be matched to `transition` grammar
     value: opacity 0
    ----------------^
Invalid value for `font-weight`
     value: base_font_weight_bold
    --------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: background 2.5s false
    ------------------------^
The rest part of value can't be matched to `transition` grammar
     value: background 2.5s false 2s
    ------------------------^
Invalid value for `align-items`
     value: space-between
    --------^
Invalid value for `display`
     value: 70%
    --------^
Unknown property `last-child-padding`
Invalid value for `-webkit-transform`
     value: -50%
    --------^
Invalid value for `transform`
     value: -50%
    --------^
Invalid value for `position`
     value: inline
    --------^</pre></details></td></tr>
<tr><td>242</td><td>⚠️</td><td>w3schools.com</td><td><details><summary>Errors: 9</summary><pre>Identifier is expected
  371 |…active,#goog-gt-tt .translate-form .activity-form input:.focus:active{box-shadow:inset 0 0 0 1px r…
----------------------------------------------------------------^
Unexpected input
  603 |  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=7, Direction=135, Color='#888888');
-----------------------^
RightParenthesis is expected
  622 |  filter: alpha(opacity=0);
------------------------------^
RightParenthesis is expected
  634 |  filter: alpha(opacity=80);
------------------------------^
RightParenthesis is expected
 1917 |  filter: alpha(opacity=33.3);
------------------------------^
Unexpected input
 2371 |  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=7, Direction=135, Color='#888888');
-----------------------^
Unexpected input
 2742 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#4d90fe',EndColorStr='#4787ed'…
-----------------------^
Unexpected input
 2755 |  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#4d90fe',EndColorStr='#357ae8'…
-----------------------^
Identifier is expected
 3324 |…active,#goog-gt-tt .translate-form .activity-form input:.focus:active{box-shadow:inset 0 0 0 1px r…
----------------------------------------------------------------^</pre></details></td><td><details><summary>11 warnings</summary><pre>Invalid value for `display` × 2
     value: auto
    --------^
Invalid value for `background` × 2
     value: linear-gradient(top,#29910d 0%,#20af0e 100%)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f6f6f6,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#eeeeee,#e0e0e0)
    ------------------------^
Invalid value for `background-image` × 3
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image` × 4
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Node has no children × 7
Invalid value for `border`
     value: block
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,whiteSmoke,#F1F1F1)
    ------------------------^</pre></details></td></tr>
<tr><td>243</td><td>⚠️</td><td>cloudfront.net</td><td colspan="2">–</td></tr>
<tr><td>244</td><td>⚠️</td><td>thewhizmarketing.com</td><td colspan="2">–</td></tr>
<tr><td>245</td><td>⚠️</td><td>caijing.com.cn</td><td colspan="2">–</td></tr>
<tr><td>246</td><td>🆗</td><td>bilibili.com</td><td>OK</td><td>OK</td></tr>
<tr><td>247</td><td>⚠️</td><td>speedtest.net</td><td colspan="2">–</td></tr>
<tr><td>248</td><td>⚠️</td><td>eastday.com</td><td colspan="2">–</td></tr>
<tr><td>249</td><td>⚠️</td><td>livejournal.com</td><td><details><summary>Errors: 7</summary><pre>RightParenthesis is expected
   81 |…z-index:5000;width:100%;height:100%;filter:alpha(opacity=60);opacity:.6;background:#000!important;…
----------------------------------------------------------------^
RightParenthesis is expected
   86 |…rgin:0;padding:0;border:0;opacity:0;filter:alpha(opacity=0);line-height:0;font-size:.1px}.super{ve…
----------------------------------------------------------------^
RightParenthesis is expected
   86 |…v,.b-pager-last .b-pager-link--next{filter:alpha(opacity=50);opacity:.5;cursor:default;pointer-eve…
----------------------------------------------------------------^
RightParenthesis is expected
   86 |…{display:block}.b-selectus-disabled{filter:alpha(opacity=50);opacity:.5;cursor:default;-webkit-tou…
----------------------------------------------------------------^
RightParenthesis is expected
  131 |…type-P .i-ljuser-userhead{opacity:0;filter:alpha(opacity=0)}HTML BODY .s-header-extra .i-ljuser-ty…
----------------------------------------------------------------^
RightParenthesis is expected
  131 |…type-P .i-ljuser-userhead{opacity:1;filter:alpha(opacity=1)}HTML BODY .s-header-extra .i-ljuser-ty…
----------------------------------------------------------------^
RightParenthesis is expected
  171 |…type-P .i-ljuser-userhead{opacity:0;filter:alpha(opacity=0)}HTML BODY .b-discoverytimes .s-header-…
----------------------------------------------------------------^</pre></details></td><td><details><summary>11 warnings</summary><pre>Invalid value for `-webkit-overflow-scrolling`
     value: none
    --------^
Node has no children × 7
Invalid value for `-webkit-transform-origin` × 2
     value: none
    --------^
Invalid value for `-ms-transform-origin` × 2
     value: none
    --------^
Invalid value for `transform-origin` × 2
     value: none
    --------^
The rest part of value can't be matched to `-webkit-transition` grammar
     value: -webkit-transform 1s easy 0
    -----------------------------^
The rest part of value can't be matched to `transition` grammar
     value: -webkit-transform 1s easy 0
    -----------------------------^
The rest part of value can't be matched to `transition` grammar
     value: transform 1s easy 0
    ---------------------^
The rest part of value can't be matched to `transition` grammar
     value: transform 1s easy 0,-webkit-transform 1s easy 0
    ---------------------^
Invalid value for `content`
     value: counters(item,".") ". "
    --------^
Unknown property `font-display` × 6</pre></details></td></tr>
<tr><td>250</td><td>⚠️</td><td>google.no</td><td><details><summary>Errors: 5</summary><pre>Unexpected input
    3 |…nd-image:linear-gradient(top,#fff,#f8f8f8);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
    3 |…round:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…d rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^
Unexpected input
   30 |…ebkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(start…
----------------------------------------------------------------^</pre></details></td><td><details><summary>28 warnings</summary><pre>Invalid value for `unicode-bidi`
     value: -webkit-isolate-override
    --------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#4787ed)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#4d90fe,#357ae8)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#d14836)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#c53727)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#dd4b39,#b0281a)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#398a00)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#3d9400,#368200)
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,#f5f5f5,#f1f1f1)
    ------------------------^
Invalid value for `background-image` × 2
     value: linear-gradient(top,#f8f8f8,#f1f1f1)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 3
     value: 0 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 3
     value: 0 1 main-size
    ------------^
Invalid value for `background-image`
     value: linear-gradient(top,#fff,#f8f8f8)
    ------------------------^
Node has no children × 5
Invalid value for `background-image`
     value: -webkit-image-set(url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png…
    --------^
Invalid value for `background`
     value: linear-gradient(top,#4387fd,#4683ea)
    ------------------------^
Invalid value for `background`
     value: linear-gradient(top,#3c7ae4,#3f76d3)
    ------------------------^
The rest part of value can't be matched to `-webkit-flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar × 2
     value: 0 0 main-size
    ------------^
The rest part of value can't be matched to `-webkit-flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `flex` grammar
     value: 1 1 main-size
    ------------^
The rest part of value can't be matched to `-webkit-box-flex` grammar
     value: 0 0 auto
    ----------^
The rest part of value can't be matched to `padding-top` grammar
     value: 1px 0 2px 0
    -----------------^
Invalid value for `transition-delay` × 3
     value: 0
    --------^
The rest part of value can't be matched to `animation` grammar
     value: allow-alert .75s 0 infinite
    ---------------------------^
Unknown property `tap-highlight-color`
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2))
    ------------------------^
Invalid value for `background-image`
     value: linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2))
    ------------------------^</pre></details></td></tr></table>

<!-- /table -->
