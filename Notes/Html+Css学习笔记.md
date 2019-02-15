[toc]
# 前端学习笔记
## Q & A
[消除display设置为inline-block产生间距的方法](https://www.cnblogs.com/gavinzzh-firstday/p/5710712.html)

[怎么通过Math.random 取得 [0,1]中任意数字？](https://segmentfault.com/q/1010000016767879)


## 2018-11-6 标签
```html
<h1></h1>
```
主标题，基本上只出现一次，权重最大
一般给logo区域

在开发者工具里，显示为蓝条的区域 => 块级标签

```html
<span></span>
```
最普通的标签，不是块级标签，用于细节的调节

```html
<strong></strong>
```
使用得当非常重要，不需要包两层标签：

```html
<span><strong></strong></span>
```
```html
<b></b>
```
弱化使用，能用样式解决，不用标签。
```html
<i></i>
```
倾斜，不弱化。可以用来装小图标。装阿里图标。italic
```html
<em></em>
```
倾斜加强调 emphasize

```html
<br />
```
单标签，换行 但是不要使用。不利于维护

```html
<hr>
```
单标签，分割线 不要使用

```html
<sup>
<sub>
```
上标
下标


```html
<ol>
<ul>
```
无序列表和有序列表

菜单栏区域

ul无序列表

li是ul的儿子

不要在里面用别的标签，如span

Type：a I A i

List-style-type:none

List-style:none
某些浏览器会默认取消


```html
<Dl>
<Dt>
<Dd>
```
自定义列表

描述标题

描述项

用法：比如网页后面的解释块，卡的夫官网最后的那部分，黑底白字的


==Tips:==

==嵌套问题：ul li ol li dl dt dd之前不允许其他元素参与==

==p 标签里面不可以套可以换行的标签==


```html
<img src = "">
```
图片四要素：
1. src：图片路径。右键，open in new tab。网站是相对于服务器出发的绝对路径。
2. alt 描述作用
3. width
4. height

Title 鼠标在图片上会有提示效果。

像素单位可以删掉，写代码能省就省。

- Jpg 小，压缩会失真，重复操作更加失真
- png 色彩多，不失真
- gif 像素最低，动态


```html
<a>
```
超链接anchor

hypertext reference

Href属性
跳转 需要写协议（http/https加s是相对安全的协议）

Target属性

跳转网页出现的位置

默认值为_self，在当前页面跳转
_blank新的空白页

发送邮件

mailto:xxxxx@xx.com

锚点
1. id
Href=“#id”
2. name 不常用，可能性
在后面给一个<a>标签，里面给name
Name=”name名”

Title属性 提示作用


```html
<base>
```
设置所有跳转的基础设置

如：<base target=”_blank”>


## 2018-11-08 层叠样式表
Css

层叠样式表

Cascading Style Sheets

下面相同的属性，会覆盖上面的属性值

优先级高的，会被优先级低的覆盖

行内样式、内部样式、外部样式

@charset “utf-8”


标签内部，行内样式，不利于维护。耦合度，让代码非常冗杂。


```
{}
```

花括号内，是声明。

写在标签内部的是 html 的属性

写在{}里的是css的属性
分号结束

不会写内部样式，写外部样式。

Color：字体颜色

Background-color：背景颜色

- 选择器

标签选择器 

如Span{}

Id选择器

Id名唯一

Id建名规则：
1. 见名知意
2. 不能用拼音，不能用数字开头，不能用特殊符号
3. 建议英文小写开头 
4. -符号连词 与 _下划线不建议使用 驼峰命名 js里最常见 也不建议使用
5. 不要和广告相关，如ad，adv，advert，adverting等。防止被浏览器给过滤

类名选择器

.类名 

类名可以重复，并且可以多个

小的box用class，大的box用id

一般不用id来控制样式。

选择的范围越小，优先级越高

Id>class>tagName(标签名)>*

行内样式>Id>class>tagName(标签名)>*>默认样式>继承的属性

在开发者工具可以看出来

只覆盖相同的东西

同优先级，下面的覆盖上面的

*{}全选选择器

组合选择器

例如， p span 这个中间的空格表示后代

\> 子元素 缩小范围，而不是所有的后代

+ 兄弟元素的下一个，并列，不能隔着东西

～ 兄弟元素选择器

Id用来分块，慎用，有取名规范

#box .container p{} 也是可行的

p.col-8 和 p col-8 不一样

p.col-8是一个整体

## 2018-11-09 标准盒模型
盒子模型

标准盒模型

![box.png](http://note.youdao.com/yws/res/5648/WEBRESOURCE485016ad2b78bc62f5221465cc22788e)

Border  复合属性

1px solid blue 最常见的三个值

大小，粗细，颜色(不写的话默认为字体颜色) 三要素全写

Px： medium thick thin

Border-style：

Solid dashed dotted double

十六进制颜色值

Cc=> Red 33=> Green 00=>blue
RGB() 0~255

#fff白色 #000黑色 #999灰色 #eee淡灰色 0～f越来越灰

Rgba 透明度alpha

0～1  0完全透明 0.5半透明 1全透明

RGb（0，0，0，0.5）0可以省略
如：（0，0，0，.5）

复合属性在开发者工具里面是一个向右的小箭头

Padding 内边距

border线以内的距离，会撑大盒子，撑开多少，宽高减去多少

父级盒子和内容的距离

Padding里一个值，四个方向

两个值，第一个上下，第二个左右。

三个值， 上、左右、下

四个值，上、右、下、左


Margin 外边距 border以外的距离

类似于往盒子外面贴有厚度的模板

排版的时候，木板可能会把别人挤走

兄弟盒子和兄弟盒子的距离

margin里一个值，四个方向

两个值，第一个上下，第二个左右。

三个值， 上、左右、下

四个值，上、右、下、左

左右Auto

从外写到内，从上写到下，全部给上边框线
外面的盒子和里面内容的关系 =》padding 减去撑大的部分
<a>包住<p>就可以换行
下划线的取消a{text-decoration:none; font-size:}

Font-size最小为12px
可以设置margin-bottom，也可以给标签设置高度。
但要设置line-height
行高能让单排文字 再行高内上下居中

行高，字体，文本样式可以继承

<li>标签里的小黑点是在<li>的margin里的
Padding会撑大盒子

外边距合并问题 只存在于 块级盒子之间的相遇
父子级关系的盒子，块级盒子，垂直方向相遇的margin值，会产生合并，合并为较大的margin
兄弟元素之间，垂直方向相遇的margin值，会产生合并，合并为最大的margin
相遇时关键，中间隔着padding也是不会合并的

解决方案：
1. 直接给父级padding
2. 给border线 不适用（有时候不用给边框线）
3. 给overflow: hidden;
4. 给 浮动 定位

## 2018-11-16 样式初始化
样式初始化
```css
*{margin: 0; padding: 0;}
ul, ol {list-style:none;}
a{text-decoration:none;}
img{border:0}
```
1. 默认样式中的margin和padding取消（缺点：有点浪费性能 优点：可以选中页面所有元素）
2. list-style
3. text-decoration文本装饰
4. 取消图片没显示出来时的边框线

## 2018-11-17 元素类型
块级标签=>布局

display:block;
1. 独占一行 换行显示
2. 支持 设置宽高<br/>不设置宽度时,宽度是父级内容区域的宽度。<br/>不设置高度是，高度由内容撑开。<br/>设置宽度和高度时，宽度高度不能撑开。
3. margin padding 四个方向支持 也支持marign:auto

常见的块级标签：div p h1~h6 ul li ol dl dt dd form

内联元素/行内元素=>内容

display:inline;
1. 友好横排显示（和别的行内元素）
2. 不支持设置宽度和高度（内容撑开宽高）
3. margin只支持左右，不支持上下、margin auto
4. padding支持显示，但是上下的padding撑大的部分对别的元素没有影响
5. 行内元素 和 行内元素 中间会产生空格。（取消空格，利用font-size来调整，一般很少用到。除a标签横排时偶尔使用）
6. 存在基线对齐问题

常见的内联元素有：span a b em strong img input


元素类型转换

display:inline;
块级变行内（不需要）

display:block;
行内变块级；（a标签用的多）

display:inline-block;
行内块，内联块元素
1. 能够横排显示=>行内
2. 支持宽高=>块
3. 支持margin四个方向 不支持margin: auto;
4. 支持padding四个方向
5. 产生空格
6. 基线对齐问题

特殊的行内元素：img input


元素嵌套规则
div
a
span
p

块级元素：可以套其他任意元素 div
1. h1~h6不要包块级标签
2. p不要套块级 可以套行内、行内块
3. ul>li ol>li dl>dt+dd之间不能套其他任意元素

行内元素：不能套块级

例外：a标签可以套块级，但是不能直接拿来布局。



## 2018-11-25 垂直对齐
垂直对齐方式 英文的第三根线
1. 图片下方间隙问题
2. 图文对齐，行内元素和行内元素之间的对齐（块级是没有基线对齐问题的）

解决方案：

问题1的解决方案：

vertical-align给一个值来覆盖baseline

问题2的解决方案：

图文居中对齐：给需要对齐的行内块元素每人来一个middle(不适用与多行内容)


vertical-align:baseline; (默认值：基于基线对齐) 
1. top 对齐元素的顶端 与父元素的line-box的顶端对齐
2. bottom 对齐元素的底端 与父元素的line-box的底端对齐
3. middle 对齐元素的中线 基于父元素的基线再往上移动小写x的一半距离（只用来解决基线对齐问题，而没有垂直居中的功能）
4. text-top 对齐元素的顶端 与父元素的内容文字的顶端对齐
5. text-bottom  对齐元素的底端 与父元素的内容文字的底端对齐
6. px -2px 2px 具体的像素值，用来微调
7. % line-height决定line-box的高度，弱line-box设置了200px的line-height，则20% = 40px，与px效果相同。

其余值均可取消基线。

inline-box特点：
1. inline-box 行内元素与内容（有名字的）或者文本（没有名字的）
2. line-box的高度取决于最后一行中最高的inline-box
3. line-box 行框盒子一行 里面由inline-box组成

注：==给谁设置，就谁动==

这就是为什么有时候改变了对齐方式，有时div会进行重新包裹住元素，有时候不。取决于设置的对象是谁。

这也是为什么经验和实战重要的原因，能够区分该调整什么元素的对齐方式。

父元素的内容和字体大小设置有关，一点父元素的内容有了自己的font-size，则不能代表父元素的内容文字。

## 2018-11-25 背景

1. background-image:url(); 
2. background-repeat:reapeat; <br/>repeat:默认平铺<br/>no-repeat:不平铺;<br/>repeat-x:x轴方向平铺;<br/>repeat-y:y轴方向平铺;
3. background-position:100px 200px;<br/>px: 只有一个值，是x轴，第二个默认居中。<br/>center left right top bottom <br/> % （相对于 父容器-背景图的大小）
4. background-size:100% 100%; px & %(相对于父元素的大小) <br/>cover & contain 等比例缩放
5. backgroud-attachment:; <br/> scroll & fix
6. background-origin
- padding-box
- content-box
- border-box

7. background-clip
- padding-box 
- content-box
- border-box 
- webkit-background-clip:text

复合属性

精灵图：减少请求次数，加快加载速度。
1. 确定外部盒子大小
2. 确定背景位置

另外，背景图是优先加载的，所以不是网页的主体的图片，请用img.

新增背景颜色
hsl
-  h hue 色调
-  s saturation 饱和度
-  l lightness 亮度 

hsl(x,x,x,0.5) 透明度



## 2018-12-3 hover

display:none;让元素消失不占位置。

hover有用到很多选择器的知识。

需要注意的是，如果想hover将display:none;变为block后，还想对其进行后续的操作，那么要让他们成为嵌套关系。

需要遵循元素选择器的规则。

## 2018-12-4 border-radius
border-radius:50%;

可以写px，最高八个值，八个值中间需要用/分隔。

## 2018-12-4 字体样式
字体有继承性。

font-size:12px; 默认为16px。

font-size:1em; 父级字体大小。

font-size:1rem; html字体大小。移动端使用、width、padding

font-size:50%; 父级字体大小。

```css
<!--因为span可能会body的font-size影响-->
body{font-size:12px;}
```

font-family:"黑体","微软雅黑"，arial; 

sans-serif 非衬线字体(字体较黑，粗细均匀，网页用的多); serif 衬线字体(带勾的)

@font-face{
    font-family:"繁体";
    src:url("font/hychf.ttf");
}

font-weight:bold; normal-用来清除默认样式,100-900粗细指数，不一定有用。

lighter，bolder

font-style:normal; 可以清除倾斜样式。

italic oblique（字体没有倾斜字体的话）

font-variant:small-caps;定义小型大写字母

line-height:1.5em;行高。行间距=行高-字体大小。

px，em，rem，%

复合写法（必写大小和类型）：

font:small-caps oblique 12px/1.5 "微软雅黑"; 12px要放在倒数第二个

这个1.5是line-height,默认为Normal

## 2018-12-8 文本样式

```
text-align
```
 
文本对齐方式。控制内容里的文字、行内元素、图片、行内块

- left
- right
- center
- justify

```css
<!--如何让元素在另一个元素里居中-->
div{
    width:200px;
    height:200px;
    background-color:red;
    text-align:center; 
    line-height:200px; 
}
<!--text-align:center;文本居中，对行内块生效。
    line-height:200px;文本上下居中-->
p{
    width:100px;
    height:100px;
    background-color:blue;
    display:inline-block; 
    vertical-align:middle;
}
<!--display:inline-block;让其能拥有text-align
    vertical-align:middle;图文居中-->
```
   
```
text-indent
```
- px
- em
```
text-transform
```
- upercase
- lowercase
- capitalize
 
```
text-decoration
```
- none
- underline
- line-through
- overline

```
letter-spacing
```
- px

    
```
word-spacing
```

单词之间的距离

    
```
white-space
```
- wrap
- nowarp

    overflow 
    
    隐藏属性。要给父元素设置

```
text-overflow:ellipsis；
```
ellipsis 省略号

```
word-break:break-all
```


```html
转义字符：
&lt; 
&gt;
&nbsp;
```

## 2018-12-8 浮动
文档流：元素 没有改变特性时，原本所排列的位置和规则。

浮动：可以让元素，脱离文档流。遇到父级边界或者相邻的浮动元素，就会停下来。浮动元素 在文档流内不占位置。

作用：让元素，既能布局，又能横排显示。

1. 父级浮动不够，浮动元素掉下来。
2. 浮动元素被卡住（margin也会卡）

 浮动元素：
 
1. 浮动元素 不占位置 文档流的位置
2. 横排显示 和浮动元素横排显示
3. 支持宽高
4. margin padding 不支持margin auto

和行内块的区别：（优点）
1. 不会解析空格
2. 不会存在垂直对齐问题
3. 脱离文档流


## 2018-12-10 消除浮动的影响

解决浮动对父级造成的高度塌陷的问题
1. 给父级设置固定高度 （不灵活，一般是由内容撑开）
2. 给父级来overflow:hidden; 
3. 给父级的内容最后，添加一个空的块级标签。（造成了代码冗余，添加了无用的空标签，比如ol li ul li之间不适用）
4. 给父级inline-block; （不要使用，见和行内块的区别）
5. 如果父级是浮动元素的话，高度不会塌陷。（要给父级的父级清除浮动）
6. 伪元素 通过css创建的一个没有名字的行内元素
- :before:
- :after:
- 为元素必须要写content

```css
.clearfix:before{
    display:blcok;
    content:"";
    clear:both;
}
IE低版本
.clearfix{
    zoom:1;
}
```

## 2018-12-10 怪异盒模型
标准盒模型

```css
box-sizing:content-box;
```
width height是内容区域的宽高，整个盒子的实际大小，是内容区域+padding+border

怪异盒子模型
```css
box-sizing:border-box;
```
width height是内容区域的宽高，整个盒子的实际大小=width height - padding - border

## 2018-12-10 min-width & max-width

Tips: 网页内，外面最大的盒子不要固定宽度

 还可适用overflow:hidden；
 
 ## 2018-12-10 cursor
 
 鼠标样式属性
 
-  default
-  pointer
-  wait
-  text
-  move
-  auto

```css
cursor:url("cursor/xxx.cur"),pointer;
```
给个备胎，pointer

tips：写css时，属性顺序问题。

显示属性：
- display
- float
- position
- overflow
- visiblity
- list-style
- clear

自身属性：
- width
- height
- padding
- margin
- border
- background

文本属性：
- 字体属性
- 文本属性

css3属性：
- border-radius
- transition
- animation
- box-shadow

Tips：关于作业里，a标签的点击范围，可以添加：

```css
a{ display:block; height:12px;}    
```

## 2018-12-10 相对定位 & 绝对定位
relative
1. 不脱离文档流
2. 不改变元素特性 
3. 层级未设置时，后来居上


absolute
1. 脱离文档流
2. 提升层级，后来居上
3. 不设置定位值时，top:auto; 绝对定位元素会飘在原来的位置上空，并且在文档流里不占位置。
4. 由内容撑开宽高，但宽度不会超过定位父级的临界点。！绝对定位元素，一定要给固定宽高
5. 改变元素特性
- 能够支持宽高
- 不占位置
- margin padding支持，但不支持margin auto

绝对定位：用来改变元素位置，用于元素出现在另一个元素上面

相对定位：
1. 稍微的移动一点点
2. 配合绝对定位使用
3. 用来变成定位元素，使元素支持层级 

## 2018-12-11 固定定位，绝对居中

```css
position:fixed;
```
相对于浏览器窗口

特性：
1. 支持宽高
2. 不占位置，脱离文档流
3. 由内容撑开


绝对居中
1. 绝对定位 50% 并且 margin-top 或者 left - 自己宽高的一般

```css
div{
    position:absolute;
    width:100px;
    height:100px;
    top:50%;
    left:50%;
    margin-top:-50px;
    margin-left:-50px;
    background-color:black;
}
```

2. 第二种方法  

```css
div{
    position:absolute;
    width:100px;
    height:100px;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    background-color:black;
}
```

## 2018-12-11 定位
z-index 层级 
- 只有定位元素具备
- 默认值 auto 后来居上 0
- 层级高，则飘更高。
- 不能和不同级元素比
- 只能和兄弟元素比
- 支持负值，但不要使用
- 如果父级a比父级b低，则其子元素永远不会高于b

## 2018-12-11 box-shadow

```css
box-shadow:0px 0px 15px 0px red;
```
- h-shadow
- v-shadow
- blur
- spread
- color
- inset / outset

## 2018-12-11 组合选择器的优先级
比较优先级时，保证精准控制到了元素。

比较id选择器，如果id多，优先级高

id选择器一样时，比较class选择器，class多，优先级高

class如果相等，比较标签选择器

伪类选择器的优先级等同于class

## 2018-12-11 a伪类
a:link 未被点击过的a标签
a:active
a:visited
a:hover

## 2018-12-11 结构性伪类
p:first-of-type 无视其他元素

p:last-of-type

p:nth-of-type(5)

p:nth-last-of-type(2)

p:only-of-type

p:first-child 不无视其他元素

p:last-child

p:nth-child(5)

p:nth-last-child(3)

p:only-child

tips:比如写横排显示的时候，会有右边距，最后一个元素的右边距可以清除。
```css
div:nth-child(5n){
    margin-right:0;
}
```

child 主要用在，元素类型差不多一致时

type 主要用在类型比较杂乱时

否定选择器：
```css
p:not(.no){
    font-size:30px;
}
```

## 2018-12-12 其他伪类

div:first-letter

div:first-line

div::selection

## 2018-12-12 属性选择器
[src = "5.jpg"]{border:5px solid blue};

[class = "box"]{
    
}

[class ~= "box"]{
    
}

不是模糊匹配

[src ^= "0"]{
    
}

以0开头

[src $= "jpg"]{
    
}

[src *= "5.j"]{
    
}

li:before{
    position:absolute;
    content:"";
    height: px;
    width: px;
    background-color: #fff;
}

Tips: 选中除了第一个以外的li， li + li

如何在不知道高度的情况下让单行文字居中：利用伪元素和vertical-align

## 2018-12-12 opacity & visibility
opacity:; 0~1

ie兼容filter:alpha(opacity=0~100);

visibility
- visible
- hidden

隐藏不会被选中

## 2018-12-12 表单
form 表单元素

action 一个接收数据的后台地址

method 传输的方法
- get 会把提交的数据，暴露在地址栏
- post

name 不为空，还要独一无二

target 跳转的位置 _blank新的页面

ps：数据是以键值对的形式传输到后台

name = vaule

input 表单元素 标签

type
- text
- password
- submit
- reset
- radio 
手动传入value属性值 

disabled 禁选

checked 默认选中 

label for="man" 前面设置id="man" label 标签关联

- checkbox
- button
- hidden
- file

input{
    width:200px;
    height:35px;
    border:1px solid #ccc;
    outline:none;
    text-indent:15px;
}
placeholder


textarea
- cols
- rows
- resize both / none
- vertical
- horizontal

select
- option
- size

datalist

fieldset
- legend

表单的伪类:
input:focus

input:disabled

input:enabled

input:checked

惊呆了。纯css也能伪装点击效果。。z-index 和 opacity


## 2018-12-12 小三角形

```css
div{
    width:0;
    height:0;
    border:50px solid red;
    border-right-color:transparent;
    border-left-color:transparent;
    border-bottom:0;
}
```

## 2018-12-13 表格
table
- thead
- tbody
- tfoot


- tr
- th


- colspan
- rowspan


- border-spacing
- border-collapse:collapse;

table特性:
1. th 加粗 左右上下居中
2. td 上下居中
3. tbody单元格默认根据内容平分宽高
4. 给td宽度后，会完全评分
5. 行与列的宽度，取决于当前行列最大的单元格


- 没有设置宽高时，由内容撑开
- 支持宽高
- 独占一行
- 支持margin, margin auto
- td th不支持margin,padding样式奇怪
- table tr thead
- td这些表格元素之间，不能嵌套任意其他元素。
- td th里面，可以嵌套

## 2018-12-13 阿里图标和iframe
添加到项目

3种方法

fontclass

iframe
内联框架，能够支持宽高，能够横排显示

scrolling
- yes
- auto
- no

frameborder

可以直接在地址后面加锚点

## 2018-12-13 transition
transition 一次性，需要触发
- transition-property
- transition-duration
- transition-delays
- transition-timing-function

(linear,ease,ease-in,ease-out,ease-in-out,cubic bezier等同于linear)

display 不支持过渡

display:none; 不支持
visibility:hidden; 支持，但没效果
opacity:0;

改变定位值，一定要有初始值。因为，定位值的默认值为auto
 
 
 
 
 ```css
transition{width 2s linear 2 infinite alternate, background-color 2s linear;
}
```

## 2018-12-13 transform

transform
- transfrom-origin
- transform:translate(x,y); 

{translateY(y),translateX(x)}

- transoform:rotate();

{deg,turn,rad,grad}

- transform:skew();
- transform:scale();

## 2018-12-14 animation
animation 两个部分，需要用动画名链接起来
 
 animation
 
-  animation-name
-  animation-duration
-  animation-delay
-  animation-timing-function
-  animation-iteration-count

{number,infinite}
 
 @keyframes
 
-  animation-direction

{noraml,reverse,alternate,alternate-reverse}
 
-  animation-fill-mode

{none,forwards,backwards,both}

- animation-play-state

{running,paused}


```css
div{
    width: 50px;
    height: 100px;
    background-color: skyblue;
    animation: run duration timing-function delay iteration-count direction fill-mode;
}
@keyframes run{
    from{width: 50px;}
    to{width: 800px;}
}
```

## 2018-12-14 3D

```css
body {
    perspective: 800px;
    /* perspective-origin: left; */
}

.stage {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 200px auto;
    box-shadow: 0 0 15px slategrey inset;
    transform-style: preserve-3d;
    transition: 2s;
}

.face {
    position: absolute;
    width: 200px;
    height: 200px;
    box-shadow: 0 0 15px black inset;
    transition: 2s;
}

.face-front {
    transform: translateZ(100px);
    box-shadow: 0 0 15px red inset;
}

.face-back {
    transform: rotateY(180deg) translateZ(100px);
    box-shadow: 0 0 15px orange inset;
    /*面朝哪，Z轴正值就在哪*/
}

.face-left {
    transform: rotateY(-90deg) translateZ(100px);
    box-shadow: 0 0 15px rgb(252, 252, 61) inset;
}

.face-right {
    transform: rotateY(90deg) translateZ(100px);
    box-shadow: 0 0 15px green inset;
}

.face-top {
    transform: rotateX(90deg) translateZ(100px);
    box-shadow: 0 0 15px blue inset;
}

.face-bottom {
    transform: rotateX(-90deg) translateZ(100px);
    box-shadow: 0 0 15px purple inset;
}

.stage:hover {
    transform: rotateZ(180deg) rotateY(180deg);
}

.stage:hover .face-front {
    transform: translateZ(200px);
}

.stage:hover .face-back {
    transform: rotateY(180deg) translateZ(200px);
}

.stage:hover .face-left {
    transform: rotateY(-90deg) translateZ(200px);
}

.stage:hover .face-right {
    transform: rotateY(90deg) translateZ(200px);
}

.stage:hover .face-top {
    transform: rotateX(90deg) translateZ(200px);
}

.stage:hover .face-bottom {
    transform: rotateX(-90deg) translateZ(200px);
}
```

## 2018-12-14 线性渐变

```css
div{
    background-image:linear-gradient(red,blue,yellow);
}
```
- left
- right
- top
- bottom

注意IE低版本兼容

## 2018-12-14 径向 & 重复
```css
div{
    background-image:radial-gradient(blue,yellow);
}
```

- top
- left
- bottom
- center
- right

- px 半径
- closest-side
- closest-corner
- farthest-side
- farthest-corner

- ellipse
- circle

```css
div{
    background-image: repeating-linear-gradient(pink,pink 10%,#cf9 10%,#cf9 20%);
}
```
重复其实是一个整体


## 2018-12-14 倒影 & 遮罩
Tips: 兼容很差
```css
div{
    -webkit-box-reflect: ;
}
```
- 第一个值 方向 above
- 第二个值 距离 可以为负值

```css
div{
    -webkit-mask-image: url();
    -webkit-mask-size: 0;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;   
}
```

## 2018-12-19 弹性盒模型
display:flex;
inline-flex

flex-direction
- row
- row-reverse
- colunm
- colunm-reverse
- 
flex-wrap
- nowarp
- warp
- warp-reverse

flex;
- felx-grow
- flex-shrink
- flex-basis

justify-content
- flex-start
- flex-end
- center
- space-between
- space-around 

align-item
- strench
- flex-start
- center
- baseline

align-content
- strench
- flex-start
- center
- space-between
- space-around

单个时
align-self 


## 2018-12-19 小知识
contenteditable



resize 需要配合overflow使用
- none
- horizontal
- vertiacal
- both

calc

```css
width:calc(100% - 3 * 100px);
运算符两侧必须空格
```

## 2018-12-19 媒体查询
响应式布局：响应式布局只适合内容较少的网页的布局。

媒体查询
- all
- screen
- print

关键词
- not
- only
- and

媒体特性：
- min-width
- max-width
- orientation:portrait
- orientation:landscrope

```css
@media all and (min-width:500px) and (max-width:800px){
    div{
        background-color:pink;
    }
}
```

## 2018-12-19 移动端
%百分比布局的弊端在于图片 & 父级元素没有设置高度

em父级的字体大小，可变性太大

rem根标签字体大小 html 16px

## 2018-12-19 html5新增标签
为了语义化

- header
- nav
- section
- article
- footer
- aside
- figure
- caption

- hgroup
- mark
- progress (min max value)
- meter (min max value low high otimum)
- dialog (open)
- details
- summary

