



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = null;
 
 
 var CS_env = {"profileUrl":null,"projectHomeUrl":"/p/webrtc-samples","loggedInUserEmail":null,"projectName":"webrtc-samples","token":null,"assetHostPath":"https://ssl.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"https://ssl.gstatic.com/codesite/ph/17200360115907490597","relativeBaseUrl":""};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>ccv.js - 
 webrtc-samples -
 
 
 Sample WebRTC applications - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/17200360115907490597/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/17200360115907490597/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/17200360115907490597/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/17200360115907490597/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 <a href="#" id="projects-dropdown" onclick="return false;"><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=https%3A%2F%2Fcode.google.com%2Fp%2Fwebrtc-samples%2Fsource%2Fbrowse%2Ftrunk%2Fapprtc%2Fjs%2Fccv.js&amp;followup=https%3A%2F%2Fcode.google.com%2Fp%2Fwebrtc-samples%2Fsource%2Fbrowse%2Ftrunk%2Fapprtc%2Fjs%2Fccv.js" onclick="_CS_click('/gb/ph/signin');"><u>Sign in</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 
 
 <td id="plogo">
 <link itemprop="url" href="/p/webrtc-samples">
 <a href="/p/webrtc-samples/">
 
 <img src="https://ssl.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/webrtc-samples/"><span itemprop="name">webrtc-samples</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/webrtc-samples/"><span itemprop="description">Sample WebRTC applications</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/webrtc-samples/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/webrtc-samples/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 <a href="/p/webrtc-samples/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/webrtc-samples/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/webrtc-samples/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/p/webrtc-samples/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/webrtc-samples/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/webrtc-samples/source/list">Changes</a></span> &nbsp;
 
 
 
 
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/webrtc-samples/source/browse/">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/webrtc-samples/source/browse/trunk/">trunk</a><span class="sp">/&nbsp;</span><a href="/p/webrtc-samples/source/browse/trunk/apprtc/">apprtc</a><span class="sp">/&nbsp;</span><a href="/p/webrtc-samples/source/browse/trunk/apprtc/js/">js</a><span class="sp">/&nbsp;</span>ccv.js</span>
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper"><b>r84</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(https://ssl.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn84_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn84_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn84_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn84_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn84_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn84_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn84_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn84_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn84_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn84_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn84_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn84_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn84_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn84_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn84_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn84_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn84_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn84_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn84_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn84_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn84_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn84_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn84_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn84_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn84_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn84_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn84_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn84_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn84_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn84_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn84_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn84_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn84_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn84_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn84_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn84_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn84_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn84_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn84_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn84_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn84_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn84_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn84_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn84_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn84_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn84_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn84_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn84_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn84_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn84_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn84_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn84_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn84_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn84_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn84_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn84_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn84_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn84_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn84_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn84_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn84_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn84_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn84_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn84_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn84_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn84_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn84_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn84_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn84_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn84_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn84_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn84_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn84_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn84_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn84_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn84_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn84_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn84_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn84_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn84_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn84_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn84_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn84_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn84_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn84_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn84_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn84_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn84_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn84_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn84_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn84_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn84_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn84_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn84_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn84_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn84_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn84_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn84_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn84_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn84_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn84_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn84_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn84_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn84_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn84_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn84_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn84_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn84_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn84_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn84_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn84_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn84_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn84_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn84_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn84_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn84_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn84_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn84_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn84_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn84_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn84_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn84_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn84_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn84_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn84_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn84_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn84_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn84_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn84_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn84_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn84_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn84_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn84_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn84_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn84_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn84_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn84_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn84_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn84_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn84_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn84_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn84_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn84_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn84_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn84_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn84_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn84_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn84_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn84_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn84_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn84_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn84_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn84_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn84_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn84_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn84_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn84_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn84_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn84_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn84_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn84_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn84_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn84_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn84_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn84_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn84_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn84_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn84_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn84_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn84_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn84_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn84_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn84_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn84_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn84_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn84_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn84_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn84_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn84_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn84_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn84_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn84_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn84_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn84_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn84_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn84_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn84_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn84_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn84_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn84_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn84_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn84_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn84_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn84_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn84_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn84_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn84_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn84_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn84_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn84_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn84_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn84_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn84_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn84_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn84_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn84_206"

><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn84_207"

><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn84_208"

><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn84_209"

><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn84_210"

><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn84_211"

><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn84_212"

><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn84_213"

><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn84_214"

><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn84_215"

><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn84_216"

><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn84_217"

><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn84_218"

><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn84_219"

><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn84_220"

><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn84_221"

><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn84_222"

><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn84_223"

><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn84_224"

><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn84_225"

><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn84_226"

><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn84_227"

><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn84_228"

><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn84_229"

><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn84_230"

><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn84_231"

><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn84_232"

><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn84_233"

><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn84_234"

><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn84_235"

><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn84_236"

><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn84_237"

><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn84_238"

><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn84_239"

><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn84_240"

><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn84_241"

><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn84_242"

><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn84_243"

><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn84_244"

><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn84_245"

><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn84_246"

><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn84_247"

><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn84_248"

><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn84_249"

><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn84_250"

><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn84_251"

><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn84_252"

><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn84_253"

><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn84_254"

><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn84_255"

><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn84_256"

><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn84_257"

><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn84_258"

><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn84_259"

><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn84_260"

><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn84_261"

><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn84_262"

><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn84_263"

><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn84_264"

><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn84_265"

><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn84_266"

><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn84_267"

><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn84_268"

><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn84_269"

><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn84_270"

><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn84_271"

><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn84_272"

><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn84_273"

><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn84_274"

><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn84_275"

><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn84_276"

><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn84_277"

><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn84_278"

><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn84_279"

><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn84_280"

><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn84_281"

><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn84_282"

><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn84_283"

><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn84_284"

><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn84_285"

><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn84_286"

><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn84_287"

><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn84_288"

><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn84_289"

><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn84_290"

><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn84_291"

><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn84_292"

><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn84_293"

><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn84_294"

><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn84_295"

><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn84_296"

><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn84_297"

><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn84_298"

><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn84_299"

><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn84_300"

><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn84_301"

><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn84_302"

><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn84_303"

><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn84_304"

><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn84_305"

><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn84_306"

><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn84_307"

><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn84_308"

><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn84_309"

><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn84_310"

><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn84_311"

><td id="311"><a href="#311">311</a></td></tr
><tr id="gr_svn84_312"

><td id="312"><a href="#312">312</a></td></tr
><tr id="gr_svn84_313"

><td id="313"><a href="#313">313</a></td></tr
><tr id="gr_svn84_314"

><td id="314"><a href="#314">314</a></td></tr
><tr id="gr_svn84_315"

><td id="315"><a href="#315">315</a></td></tr
><tr id="gr_svn84_316"

><td id="316"><a href="#316">316</a></td></tr
><tr id="gr_svn84_317"

><td id="317"><a href="#317">317</a></td></tr
><tr id="gr_svn84_318"

><td id="318"><a href="#318">318</a></td></tr
><tr id="gr_svn84_319"

><td id="319"><a href="#319">319</a></td></tr
><tr id="gr_svn84_320"

><td id="320"><a href="#320">320</a></td></tr
><tr id="gr_svn84_321"

><td id="321"><a href="#321">321</a></td></tr
><tr id="gr_svn84_322"

><td id="322"><a href="#322">322</a></td></tr
><tr id="gr_svn84_323"

><td id="323"><a href="#323">323</a></td></tr
><tr id="gr_svn84_324"

><td id="324"><a href="#324">324</a></td></tr
><tr id="gr_svn84_325"

><td id="325"><a href="#325">325</a></td></tr
><tr id="gr_svn84_326"

><td id="326"><a href="#326">326</a></td></tr
><tr id="gr_svn84_327"

><td id="327"><a href="#327">327</a></td></tr
><tr id="gr_svn84_328"

><td id="328"><a href="#328">328</a></td></tr
><tr id="gr_svn84_329"

><td id="329"><a href="#329">329</a></td></tr
><tr id="gr_svn84_330"

><td id="330"><a href="#330">330</a></td></tr
><tr id="gr_svn84_331"

><td id="331"><a href="#331">331</a></td></tr
><tr id="gr_svn84_332"

><td id="332"><a href="#332">332</a></td></tr
><tr id="gr_svn84_333"

><td id="333"><a href="#333">333</a></td></tr
><tr id="gr_svn84_334"

><td id="334"><a href="#334">334</a></td></tr
><tr id="gr_svn84_335"

><td id="335"><a href="#335">335</a></td></tr
><tr id="gr_svn84_336"

><td id="336"><a href="#336">336</a></td></tr
><tr id="gr_svn84_337"

><td id="337"><a href="#337">337</a></td></tr
><tr id="gr_svn84_338"

><td id="338"><a href="#338">338</a></td></tr
><tr id="gr_svn84_339"

><td id="339"><a href="#339">339</a></td></tr
><tr id="gr_svn84_340"

><td id="340"><a href="#340">340</a></td></tr
><tr id="gr_svn84_341"

><td id="341"><a href="#341">341</a></td></tr
><tr id="gr_svn84_342"

><td id="342"><a href="#342">342</a></td></tr
><tr id="gr_svn84_343"

><td id="343"><a href="#343">343</a></td></tr
><tr id="gr_svn84_344"

><td id="344"><a href="#344">344</a></td></tr
><tr id="gr_svn84_345"

><td id="345"><a href="#345">345</a></td></tr
><tr id="gr_svn84_346"

><td id="346"><a href="#346">346</a></td></tr
><tr id="gr_svn84_347"

><td id="347"><a href="#347">347</a></td></tr
><tr id="gr_svn84_348"

><td id="348"><a href="#348">348</a></td></tr
><tr id="gr_svn84_349"

><td id="349"><a href="#349">349</a></td></tr
><tr id="gr_svn84_350"

><td id="350"><a href="#350">350</a></td></tr
><tr id="gr_svn84_351"

><td id="351"><a href="#351">351</a></td></tr
><tr id="gr_svn84_352"

><td id="352"><a href="#352">352</a></td></tr
><tr id="gr_svn84_353"

><td id="353"><a href="#353">353</a></td></tr
><tr id="gr_svn84_354"

><td id="354"><a href="#354">354</a></td></tr
><tr id="gr_svn84_355"

><td id="355"><a href="#355">355</a></td></tr
><tr id="gr_svn84_356"

><td id="356"><a href="#356">356</a></td></tr
><tr id="gr_svn84_357"

><td id="357"><a href="#357">357</a></td></tr
><tr id="gr_svn84_358"

><td id="358"><a href="#358">358</a></td></tr
><tr id="gr_svn84_359"

><td id="359"><a href="#359">359</a></td></tr
><tr id="gr_svn84_360"

><td id="360"><a href="#360">360</a></td></tr
><tr id="gr_svn84_361"

><td id="361"><a href="#361">361</a></td></tr
><tr id="gr_svn84_362"

><td id="362"><a href="#362">362</a></td></tr
><tr id="gr_svn84_363"

><td id="363"><a href="#363">363</a></td></tr
><tr id="gr_svn84_364"

><td id="364"><a href="#364">364</a></td></tr
><tr id="gr_svn84_365"

><td id="365"><a href="#365">365</a></td></tr
><tr id="gr_svn84_366"

><td id="366"><a href="#366">366</a></td></tr
><tr id="gr_svn84_367"

><td id="367"><a href="#367">367</a></td></tr
><tr id="gr_svn84_368"

><td id="368"><a href="#368">368</a></td></tr
><tr id="gr_svn84_369"

><td id="369"><a href="#369">369</a></td></tr
><tr id="gr_svn84_370"

><td id="370"><a href="#370">370</a></td></tr
><tr id="gr_svn84_371"

><td id="371"><a href="#371">371</a></td></tr
><tr id="gr_svn84_372"

><td id="372"><a href="#372">372</a></td></tr
><tr id="gr_svn84_373"

><td id="373"><a href="#373">373</a></td></tr
><tr id="gr_svn84_374"

><td id="374"><a href="#374">374</a></td></tr
><tr id="gr_svn84_375"

><td id="375"><a href="#375">375</a></td></tr
><tr id="gr_svn84_376"

><td id="376"><a href="#376">376</a></td></tr
><tr id="gr_svn84_377"

><td id="377"><a href="#377">377</a></td></tr
><tr id="gr_svn84_378"

><td id="378"><a href="#378">378</a></td></tr
><tr id="gr_svn84_379"

><td id="379"><a href="#379">379</a></td></tr
><tr id="gr_svn84_380"

><td id="380"><a href="#380">380</a></td></tr
><tr id="gr_svn84_381"

><td id="381"><a href="#381">381</a></td></tr
><tr id="gr_svn84_382"

><td id="382"><a href="#382">382</a></td></tr
><tr id="gr_svn84_383"

><td id="383"><a href="#383">383</a></td></tr
><tr id="gr_svn84_384"

><td id="384"><a href="#384">384</a></td></tr
><tr id="gr_svn84_385"

><td id="385"><a href="#385">385</a></td></tr
><tr id="gr_svn84_386"

><td id="386"><a href="#386">386</a></td></tr
><tr id="gr_svn84_387"

><td id="387"><a href="#387">387</a></td></tr
><tr id="gr_svn84_388"

><td id="388"><a href="#388">388</a></td></tr
><tr id="gr_svn84_389"

><td id="389"><a href="#389">389</a></td></tr
><tr id="gr_svn84_390"

><td id="390"><a href="#390">390</a></td></tr
><tr id="gr_svn84_391"

><td id="391"><a href="#391">391</a></td></tr
><tr id="gr_svn84_392"

><td id="392"><a href="#392">392</a></td></tr
><tr id="gr_svn84_393"

><td id="393"><a href="#393">393</a></td></tr
><tr id="gr_svn84_394"

><td id="394"><a href="#394">394</a></td></tr
><tr id="gr_svn84_395"

><td id="395"><a href="#395">395</a></td></tr
><tr id="gr_svn84_396"

><td id="396"><a href="#396">396</a></td></tr
><tr id="gr_svn84_397"

><td id="397"><a href="#397">397</a></td></tr
><tr id="gr_svn84_398"

><td id="398"><a href="#398">398</a></td></tr
><tr id="gr_svn84_399"

><td id="399"><a href="#399">399</a></td></tr
><tr id="gr_svn84_400"

><td id="400"><a href="#400">400</a></td></tr
><tr id="gr_svn84_401"

><td id="401"><a href="#401">401</a></td></tr
><tr id="gr_svn84_402"

><td id="402"><a href="#402">402</a></td></tr
><tr id="gr_svn84_403"

><td id="403"><a href="#403">403</a></td></tr
><tr id="gr_svn84_404"

><td id="404"><a href="#404">404</a></td></tr
><tr id="gr_svn84_405"

><td id="405"><a href="#405">405</a></td></tr
><tr id="gr_svn84_406"

><td id="406"><a href="#406">406</a></td></tr
><tr id="gr_svn84_407"

><td id="407"><a href="#407">407</a></td></tr
><tr id="gr_svn84_408"

><td id="408"><a href="#408">408</a></td></tr
><tr id="gr_svn84_409"

><td id="409"><a href="#409">409</a></td></tr
><tr id="gr_svn84_410"

><td id="410"><a href="#410">410</a></td></tr
><tr id="gr_svn84_411"

><td id="411"><a href="#411">411</a></td></tr
><tr id="gr_svn84_412"

><td id="412"><a href="#412">412</a></td></tr
><tr id="gr_svn84_413"

><td id="413"><a href="#413">413</a></td></tr
><tr id="gr_svn84_414"

><td id="414"><a href="#414">414</a></td></tr
><tr id="gr_svn84_415"

><td id="415"><a href="#415">415</a></td></tr
><tr id="gr_svn84_416"

><td id="416"><a href="#416">416</a></td></tr
><tr id="gr_svn84_417"

><td id="417"><a href="#417">417</a></td></tr
><tr id="gr_svn84_418"

><td id="418"><a href="#418">418</a></td></tr
><tr id="gr_svn84_419"

><td id="419"><a href="#419">419</a></td></tr
><tr id="gr_svn84_420"

><td id="420"><a href="#420">420</a></td></tr
><tr id="gr_svn84_421"

><td id="421"><a href="#421">421</a></td></tr
><tr id="gr_svn84_422"

><td id="422"><a href="#422">422</a></td></tr
><tr id="gr_svn84_423"

><td id="423"><a href="#423">423</a></td></tr
><tr id="gr_svn84_424"

><td id="424"><a href="#424">424</a></td></tr
><tr id="gr_svn84_425"

><td id="425"><a href="#425">425</a></td></tr
><tr id="gr_svn84_426"

><td id="426"><a href="#426">426</a></td></tr
><tr id="gr_svn84_427"

><td id="427"><a href="#427">427</a></td></tr
><tr id="gr_svn84_428"

><td id="428"><a href="#428">428</a></td></tr
><tr id="gr_svn84_429"

><td id="429"><a href="#429">429</a></td></tr
><tr id="gr_svn84_430"

><td id="430"><a href="#430">430</a></td></tr
><tr id="gr_svn84_431"

><td id="431"><a href="#431">431</a></td></tr
><tr id="gr_svn84_432"

><td id="432"><a href="#432">432</a></td></tr
><tr id="gr_svn84_433"

><td id="433"><a href="#433">433</a></td></tr
><tr id="gr_svn84_434"

><td id="434"><a href="#434">434</a></td></tr
><tr id="gr_svn84_435"

><td id="435"><a href="#435">435</a></td></tr
><tr id="gr_svn84_436"

><td id="436"><a href="#436">436</a></td></tr
><tr id="gr_svn84_437"

><td id="437"><a href="#437">437</a></td></tr
><tr id="gr_svn84_438"

><td id="438"><a href="#438">438</a></td></tr
><tr id="gr_svn84_439"

><td id="439"><a href="#439">439</a></td></tr
><tr id="gr_svn84_440"

><td id="440"><a href="#440">440</a></td></tr
><tr id="gr_svn84_441"

><td id="441"><a href="#441">441</a></td></tr
><tr id="gr_svn84_442"

><td id="442"><a href="#442">442</a></td></tr
><tr id="gr_svn84_443"

><td id="443"><a href="#443">443</a></td></tr
><tr id="gr_svn84_444"

><td id="444"><a href="#444">444</a></td></tr
><tr id="gr_svn84_445"

><td id="445"><a href="#445">445</a></td></tr
><tr id="gr_svn84_446"

><td id="446"><a href="#446">446</a></td></tr
><tr id="gr_svn84_447"

><td id="447"><a href="#447">447</a></td></tr
><tr id="gr_svn84_448"

><td id="448"><a href="#448">448</a></td></tr
><tr id="gr_svn84_449"

><td id="449"><a href="#449">449</a></td></tr
><tr id="gr_svn84_450"

><td id="450"><a href="#450">450</a></td></tr
><tr id="gr_svn84_451"

><td id="451"><a href="#451">451</a></td></tr
><tr id="gr_svn84_452"

><td id="452"><a href="#452">452</a></td></tr
><tr id="gr_svn84_453"

><td id="453"><a href="#453">453</a></td></tr
><tr id="gr_svn84_454"

><td id="454"><a href="#454">454</a></td></tr
><tr id="gr_svn84_455"

><td id="455"><a href="#455">455</a></td></tr
><tr id="gr_svn84_456"

><td id="456"><a href="#456">456</a></td></tr
><tr id="gr_svn84_457"

><td id="457"><a href="#457">457</a></td></tr
><tr id="gr_svn84_458"

><td id="458"><a href="#458">458</a></td></tr
><tr id="gr_svn84_459"

><td id="459"><a href="#459">459</a></td></tr
><tr id="gr_svn84_460"

><td id="460"><a href="#460">460</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn84_1

><td class="source">if (parallable === undefined) {<br></td></tr
><tr
id=sl_svn84_2

><td class="source">	var parallable = function (file, funct) {<br></td></tr
><tr
id=sl_svn84_3

><td class="source">		parallable.core[funct.toString()] = funct().core;<br></td></tr
><tr
id=sl_svn84_4

><td class="source">		return function () {<br></td></tr
><tr
id=sl_svn84_5

><td class="source">			var i;<br></td></tr
><tr
id=sl_svn84_6

><td class="source">			var async, worker_num, params;<br></td></tr
><tr
id=sl_svn84_7

><td class="source">			if (arguments.length &gt; 1) {<br></td></tr
><tr
id=sl_svn84_8

><td class="source">				async = arguments[arguments.length - 2];<br></td></tr
><tr
id=sl_svn84_9

><td class="source">				worker_num = arguments[arguments.length - 1];<br></td></tr
><tr
id=sl_svn84_10

><td class="source">				params = new Array(arguments.length - 2);<br></td></tr
><tr
id=sl_svn84_11

><td class="source">				for (i = 0; i &lt; arguments.length - 2; i++)<br></td></tr
><tr
id=sl_svn84_12

><td class="source">					params[i] = arguments[i];<br></td></tr
><tr
id=sl_svn84_13

><td class="source">			} else {<br></td></tr
><tr
id=sl_svn84_14

><td class="source">				async = arguments[0].async;<br></td></tr
><tr
id=sl_svn84_15

><td class="source">				worker_num = arguments[0].worker;<br></td></tr
><tr
id=sl_svn84_16

><td class="source">				params = arguments[0];<br></td></tr
><tr
id=sl_svn84_17

><td class="source">				delete params[&quot;async&quot;];<br></td></tr
><tr
id=sl_svn84_18

><td class="source">				delete params[&quot;worker&quot;];<br></td></tr
><tr
id=sl_svn84_19

><td class="source">				params = [params];<br></td></tr
><tr
id=sl_svn84_20

><td class="source">			}<br></td></tr
><tr
id=sl_svn84_21

><td class="source">			var scope = { &quot;shared&quot; : {} };<br></td></tr
><tr
id=sl_svn84_22

><td class="source">			var ctrl = funct.apply(scope, params);<br></td></tr
><tr
id=sl_svn84_23

><td class="source">			if (async) {<br></td></tr
><tr
id=sl_svn84_24

><td class="source">				return function (complete, error) {<br></td></tr
><tr
id=sl_svn84_25

><td class="source">					var executed = 0;<br></td></tr
><tr
id=sl_svn84_26

><td class="source">					var outputs = new Array(worker_num);<br></td></tr
><tr
id=sl_svn84_27

><td class="source">					var inputs = ctrl.pre.apply(scope, [worker_num]);<br></td></tr
><tr
id=sl_svn84_28

><td class="source">					/* sanitize scope shared because for Chrome/WebKit, worker only support JSONable data */<br></td></tr
><tr
id=sl_svn84_29

><td class="source">					for (i in scope.shared)<br></td></tr
><tr
id=sl_svn84_30

><td class="source">						/* delete function, if any */<br></td></tr
><tr
id=sl_svn84_31

><td class="source">						if (typeof scope.shared[i] == &quot;function&quot;)<br></td></tr
><tr
id=sl_svn84_32

><td class="source">							delete scope.shared[i];<br></td></tr
><tr
id=sl_svn84_33

><td class="source">						/* delete DOM object, if any */<br></td></tr
><tr
id=sl_svn84_34

><td class="source">						else if (scope.shared[i].tagName !== undefined)<br></td></tr
><tr
id=sl_svn84_35

><td class="source">							delete scope.shared[i];<br></td></tr
><tr
id=sl_svn84_36

><td class="source">					for (i = 0; i &lt; worker_num; i++) {<br></td></tr
><tr
id=sl_svn84_37

><td class="source">						var worker = new Worker(file);<br></td></tr
><tr
id=sl_svn84_38

><td class="source">						worker.onmessage = (function (i) {<br></td></tr
><tr
id=sl_svn84_39

><td class="source">							return function (event) {<br></td></tr
><tr
id=sl_svn84_40

><td class="source">								outputs[i] = (typeof event.data == &quot;string&quot;) ? JSON.parse(event.data) : event.data;<br></td></tr
><tr
id=sl_svn84_41

><td class="source">								executed++;<br></td></tr
><tr
id=sl_svn84_42

><td class="source">								if (executed == worker_num)<br></td></tr
><tr
id=sl_svn84_43

><td class="source">									complete(ctrl.post.apply(scope, [outputs]));<br></td></tr
><tr
id=sl_svn84_44

><td class="source">							}<br></td></tr
><tr
id=sl_svn84_45

><td class="source">						})(i);<br></td></tr
><tr
id=sl_svn84_46

><td class="source">						var msg = { &quot;input&quot; : inputs[i],<br></td></tr
><tr
id=sl_svn84_47

><td class="source">									&quot;name&quot; : funct.toString(),<br></td></tr
><tr
id=sl_svn84_48

><td class="source">									&quot;shared&quot; : scope.shared,<br></td></tr
><tr
id=sl_svn84_49

><td class="source">									&quot;id&quot; : i,<br></td></tr
><tr
id=sl_svn84_50

><td class="source">									&quot;worker&quot; : params.worker_num };<br></td></tr
><tr
id=sl_svn84_51

><td class="source">						try {<br></td></tr
><tr
id=sl_svn84_52

><td class="source">							worker.postMessage(msg);<br></td></tr
><tr
id=sl_svn84_53

><td class="source">						} catch (e) {<br></td></tr
><tr
id=sl_svn84_54

><td class="source">							worker.postMessage(JSON.stringify(msg));<br></td></tr
><tr
id=sl_svn84_55

><td class="source">						}<br></td></tr
><tr
id=sl_svn84_56

><td class="source">					}<br></td></tr
><tr
id=sl_svn84_57

><td class="source">				}<br></td></tr
><tr
id=sl_svn84_58

><td class="source">			} else {<br></td></tr
><tr
id=sl_svn84_59

><td class="source">				return ctrl.post.apply(scope, [[ctrl.core.apply(scope, [ctrl.pre.apply(scope, [1])[0], 0, 1])]]);<br></td></tr
><tr
id=sl_svn84_60

><td class="source">			}<br></td></tr
><tr
id=sl_svn84_61

><td class="source">		}<br></td></tr
><tr
id=sl_svn84_62

><td class="source">	};<br></td></tr
><tr
id=sl_svn84_63

><td class="source">	parallable.core = {};<br></td></tr
><tr
id=sl_svn84_64

><td class="source">}<br></td></tr
><tr
id=sl_svn84_65

><td class="source"><br></td></tr
><tr
id=sl_svn84_66

><td class="source">function get_named_arguments(params, names) {<br></td></tr
><tr
id=sl_svn84_67

><td class="source">	if (params.length &gt; 1) {<br></td></tr
><tr
id=sl_svn84_68

><td class="source">		var new_params = {};<br></td></tr
><tr
id=sl_svn84_69

><td class="source">		for (var i = 0; i &lt; names.length; i++)<br></td></tr
><tr
id=sl_svn84_70

><td class="source">			new_params[names[i]] = params[i];<br></td></tr
><tr
id=sl_svn84_71

><td class="source">		return new_params;<br></td></tr
><tr
id=sl_svn84_72

><td class="source">	} else if (params.length == 1) {<br></td></tr
><tr
id=sl_svn84_73

><td class="source">		return params[0];<br></td></tr
><tr
id=sl_svn84_74

><td class="source">	} else {<br></td></tr
><tr
id=sl_svn84_75

><td class="source">		return {};<br></td></tr
><tr
id=sl_svn84_76

><td class="source">	}<br></td></tr
><tr
id=sl_svn84_77

><td class="source">}<br></td></tr
><tr
id=sl_svn84_78

><td class="source"><br></td></tr
><tr
id=sl_svn84_79

><td class="source">var ccv = {<br></td></tr
><tr
id=sl_svn84_80

><td class="source">	pre : function (image) {<br></td></tr
><tr
id=sl_svn84_81

><td class="source">		if (image.tagName.toLowerCase() == &quot;img&quot;) {<br></td></tr
><tr
id=sl_svn84_82

><td class="source">			var canvas = document.createElement(&quot;canvas&quot;);<br></td></tr
><tr
id=sl_svn84_83

><td class="source">			document.body.appendChild(image);<br></td></tr
><tr
id=sl_svn84_84

><td class="source">			canvas.width = image.offsetWidth;<br></td></tr
><tr
id=sl_svn84_85

><td class="source">			canvas.style.width = image.offsetWidth.toString() + &quot;px&quot;;<br></td></tr
><tr
id=sl_svn84_86

><td class="source">			canvas.height = image.offsetHeight;<br></td></tr
><tr
id=sl_svn84_87

><td class="source">			canvas.style.height = image.offsetHeight.toString() + &quot;px&quot;;<br></td></tr
><tr
id=sl_svn84_88

><td class="source">			document.body.removeChild(image);<br></td></tr
><tr
id=sl_svn84_89

><td class="source">			var ctx = canvas.getContext(&quot;2d&quot;);<br></td></tr
><tr
id=sl_svn84_90

><td class="source">			ctx.drawImage(image, 0, 0);<br></td></tr
><tr
id=sl_svn84_91

><td class="source">			return canvas;<br></td></tr
><tr
id=sl_svn84_92

><td class="source">		}<br></td></tr
><tr
id=sl_svn84_93

><td class="source">		return image;<br></td></tr
><tr
id=sl_svn84_94

><td class="source">	},<br></td></tr
><tr
id=sl_svn84_95

><td class="source"><br></td></tr
><tr
id=sl_svn84_96

><td class="source">	grayscale : function (canvas) {<br></td></tr
><tr
id=sl_svn84_97

><td class="source">		var ctx = canvas.getContext(&quot;2d&quot;);<br></td></tr
><tr
id=sl_svn84_98

><td class="source">		var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);<br></td></tr
><tr
id=sl_svn84_99

><td class="source">		var data = imageData.data;<br></td></tr
><tr
id=sl_svn84_100

><td class="source">		var pix1, pix2, pix = canvas.width * canvas.height * 4;<br></td></tr
><tr
id=sl_svn84_101

><td class="source">		while (pix &gt; 0)<br></td></tr
><tr
id=sl_svn84_102

><td class="source">			data[pix -= 4] = data[pix1 = pix + 1] = data[pix2 = pix + 2] = (data[pix] * 0.3 + data[pix1] * 0.59 + data[pix2] * 0.11);<br></td></tr
><tr
id=sl_svn84_103

><td class="source">		ctx.putImageData(imageData, 0, 0);<br></td></tr
><tr
id=sl_svn84_104

><td class="source">		return canvas;<br></td></tr
><tr
id=sl_svn84_105

><td class="source">	},<br></td></tr
><tr
id=sl_svn84_106

><td class="source"><br></td></tr
><tr
id=sl_svn84_107

><td class="source">	array_group : function (seq, gfunc) {<br></td></tr
><tr
id=sl_svn84_108

><td class="source">		var i, j;<br></td></tr
><tr
id=sl_svn84_109

><td class="source">		var node = new Array(seq.length);<br></td></tr
><tr
id=sl_svn84_110

><td class="source">		for (i = 0; i &lt; seq.length; i++)<br></td></tr
><tr
id=sl_svn84_111

><td class="source">			node[i] = {&quot;parent&quot; : -1,<br></td></tr
><tr
id=sl_svn84_112

><td class="source">					   &quot;element&quot; : seq[i],<br></td></tr
><tr
id=sl_svn84_113

><td class="source">					   &quot;rank&quot; : 0};<br></td></tr
><tr
id=sl_svn84_114

><td class="source">		for (i = 0; i &lt; seq.length; i++) {<br></td></tr
><tr
id=sl_svn84_115

><td class="source">			if (!node[i].element)<br></td></tr
><tr
id=sl_svn84_116

><td class="source">				continue;<br></td></tr
><tr
id=sl_svn84_117

><td class="source">			var root = i;<br></td></tr
><tr
id=sl_svn84_118

><td class="source">			while (node[root].parent != -1)<br></td></tr
><tr
id=sl_svn84_119

><td class="source">				root = node[root].parent;<br></td></tr
><tr
id=sl_svn84_120

><td class="source">			for (j = 0; j &lt; seq.length; j++) {<br></td></tr
><tr
id=sl_svn84_121

><td class="source">				if( i != j &amp;&amp; node[j].element &amp;&amp; gfunc(node[i].element, node[j].element)) {<br></td></tr
><tr
id=sl_svn84_122

><td class="source">					var root2 = j;<br></td></tr
><tr
id=sl_svn84_123

><td class="source"><br></td></tr
><tr
id=sl_svn84_124

><td class="source">					while (node[root2].parent != -1)<br></td></tr
><tr
id=sl_svn84_125

><td class="source">						root2 = node[root2].parent;<br></td></tr
><tr
id=sl_svn84_126

><td class="source"><br></td></tr
><tr
id=sl_svn84_127

><td class="source">					if(root2 != root) {<br></td></tr
><tr
id=sl_svn84_128

><td class="source">						if(node[root].rank &gt; node[root2].rank)<br></td></tr
><tr
id=sl_svn84_129

><td class="source">							node[root2].parent = root;<br></td></tr
><tr
id=sl_svn84_130

><td class="source">						else {<br></td></tr
><tr
id=sl_svn84_131

><td class="source">							node[root].parent = root2;<br></td></tr
><tr
id=sl_svn84_132

><td class="source">							if (node[root].rank == node[root2].rank)<br></td></tr
><tr
id=sl_svn84_133

><td class="source">							node[root2].rank++;<br></td></tr
><tr
id=sl_svn84_134

><td class="source">							root = root2;<br></td></tr
><tr
id=sl_svn84_135

><td class="source">						}<br></td></tr
><tr
id=sl_svn84_136

><td class="source"><br></td></tr
><tr
id=sl_svn84_137

><td class="source">						/* compress path from node2 to the root: */<br></td></tr
><tr
id=sl_svn84_138

><td class="source">						var temp, node2 = j;<br></td></tr
><tr
id=sl_svn84_139

><td class="source">						while (node[node2].parent != -1) {<br></td></tr
><tr
id=sl_svn84_140

><td class="source">							temp = node2;<br></td></tr
><tr
id=sl_svn84_141

><td class="source">							node2 = node[node2].parent;<br></td></tr
><tr
id=sl_svn84_142

><td class="source">							node[temp].parent = root;<br></td></tr
><tr
id=sl_svn84_143

><td class="source">						}<br></td></tr
><tr
id=sl_svn84_144

><td class="source"><br></td></tr
><tr
id=sl_svn84_145

><td class="source">						/* compress path from node to the root: */<br></td></tr
><tr
id=sl_svn84_146

><td class="source">						node2 = i;<br></td></tr
><tr
id=sl_svn84_147

><td class="source">						while (node[node2].parent != -1) {<br></td></tr
><tr
id=sl_svn84_148

><td class="source">							temp = node2;<br></td></tr
><tr
id=sl_svn84_149

><td class="source">							node2 = node[node2].parent;<br></td></tr
><tr
id=sl_svn84_150

><td class="source">							node[temp].parent = root;<br></td></tr
><tr
id=sl_svn84_151

><td class="source">						}<br></td></tr
><tr
id=sl_svn84_152

><td class="source">					}<br></td></tr
><tr
id=sl_svn84_153

><td class="source">				}<br></td></tr
><tr
id=sl_svn84_154

><td class="source">			}<br></td></tr
><tr
id=sl_svn84_155

><td class="source">		}<br></td></tr
><tr
id=sl_svn84_156

><td class="source">		var idx = new Array(seq.length);<br></td></tr
><tr
id=sl_svn84_157

><td class="source">		var class_idx = 0;<br></td></tr
><tr
id=sl_svn84_158

><td class="source">		for(i = 0; i &lt; seq.length; i++) {<br></td></tr
><tr
id=sl_svn84_159

><td class="source">			j = -1;<br></td></tr
><tr
id=sl_svn84_160

><td class="source">			var node1 = i;<br></td></tr
><tr
id=sl_svn84_161

><td class="source">			if(node[node1].element) {<br></td></tr
><tr
id=sl_svn84_162

><td class="source">				while (node[node1].parent != -1)<br></td></tr
><tr
id=sl_svn84_163

><td class="source">					node1 = node[node1].parent;<br></td></tr
><tr
id=sl_svn84_164

><td class="source">				if(node[node1].rank &gt;= 0)<br></td></tr
><tr
id=sl_svn84_165

><td class="source">					node[node1].rank = ~class_idx++;<br></td></tr
><tr
id=sl_svn84_166

><td class="source">				j = ~node[node1].rank;<br></td></tr
><tr
id=sl_svn84_167

><td class="source">			}<br></td></tr
><tr
id=sl_svn84_168

><td class="source">			idx[i] = j;<br></td></tr
><tr
id=sl_svn84_169

><td class="source">		}<br></td></tr
><tr
id=sl_svn84_170

><td class="source">		return {&quot;index&quot; : idx, &quot;cat&quot; : class_idx};<br></td></tr
><tr
id=sl_svn84_171

><td class="source">	},<br></td></tr
><tr
id=sl_svn84_172

><td class="source"><br></td></tr
><tr
id=sl_svn84_173

><td class="source">	detect_objects : parallable(&quot;ccv.js&quot;, function (canvas, cascade, interval, min_neighbors) {<br></td></tr
><tr
id=sl_svn84_174

><td class="source">		if (this.shared !== undefined) {<br></td></tr
><tr
id=sl_svn84_175

><td class="source">			var params = get_named_arguments(arguments, [&quot;canvas&quot;, &quot;cascade&quot;, &quot;interval&quot;, &quot;min_neighbors&quot;]);<br></td></tr
><tr
id=sl_svn84_176

><td class="source">			this.shared.canvas = params.canvas;<br></td></tr
><tr
id=sl_svn84_177

><td class="source">			this.shared.interval = params.interval;<br></td></tr
><tr
id=sl_svn84_178

><td class="source">			this.shared.min_neighbors = params.min_neighbors;<br></td></tr
><tr
id=sl_svn84_179

><td class="source">			this.shared.cascade = params.cascade;<br></td></tr
><tr
id=sl_svn84_180

><td class="source">			this.shared.scale = Math.pow(2, 1 / (params.interval + 1));<br></td></tr
><tr
id=sl_svn84_181

><td class="source">			this.shared.next = params.interval + 1;<br></td></tr
><tr
id=sl_svn84_182

><td class="source">			this.shared.scale_upto = Math.floor(Math.log(Math.min(params.canvas.width / params.cascade.width, params.canvas.height / params.cascade.height)) / Math.log(this.shared.scale));<br></td></tr
><tr
id=sl_svn84_183

><td class="source">			var i;<br></td></tr
><tr
id=sl_svn84_184

><td class="source">			for (i = 0; i &lt; this.shared.cascade.stage_classifier.length; i++)<br></td></tr
><tr
id=sl_svn84_185

><td class="source">				this.shared.cascade.stage_classifier[i].orig_feature = this.shared.cascade.stage_classifier[i].feature;<br></td></tr
><tr
id=sl_svn84_186

><td class="source">		}<br></td></tr
><tr
id=sl_svn84_187

><td class="source">		function pre(worker_num) {<br></td></tr
><tr
id=sl_svn84_188

><td class="source">			var canvas = this.shared.canvas;<br></td></tr
><tr
id=sl_svn84_189

><td class="source">			var interval = this.shared.interval;<br></td></tr
><tr
id=sl_svn84_190

><td class="source">			var scale = this.shared.scale;<br></td></tr
><tr
id=sl_svn84_191

><td class="source">			var next = this.shared.next;<br></td></tr
><tr
id=sl_svn84_192

><td class="source">			var scale_upto = this.shared.scale_upto;<br></td></tr
><tr
id=sl_svn84_193

><td class="source">			var pyr = new Array((scale_upto + next * 2) * 4);<br></td></tr
><tr
id=sl_svn84_194

><td class="source">			var ret = new Array((scale_upto + next * 2) * 4);<br></td></tr
><tr
id=sl_svn84_195

><td class="source">			pyr[0] = canvas;<br></td></tr
><tr
id=sl_svn84_196

><td class="source">			ret[0] = { &quot;width&quot; : pyr[0].width,<br></td></tr
><tr
id=sl_svn84_197

><td class="source">					   &quot;height&quot; : pyr[0].height,<br></td></tr
><tr
id=sl_svn84_198

><td class="source">					   &quot;data&quot; : pyr[0].getContext(&quot;2d&quot;).getImageData(0, 0, pyr[0].width, pyr[0].height).data };<br></td></tr
><tr
id=sl_svn84_199

><td class="source">			var i;<br></td></tr
><tr
id=sl_svn84_200

><td class="source">			for (i = 1; i &lt;= interval; i++) {<br></td></tr
><tr
id=sl_svn84_201

><td class="source">				pyr[i * 4] = document.createElement(&quot;canvas&quot;);<br></td></tr
><tr
id=sl_svn84_202

><td class="source">				pyr[i * 4].width = Math.floor(pyr[0].width / Math.pow(scale, i));<br></td></tr
><tr
id=sl_svn84_203

><td class="source">				pyr[i * 4].height = Math.floor(pyr[0].height / Math.pow(scale, i));<br></td></tr
><tr
id=sl_svn84_204

><td class="source">				pyr[i * 4].getContext(&quot;2d&quot;).drawImage(pyr[0], 0, 0, pyr[0].width, pyr[0].height, 0, 0, pyr[i * 4].width, pyr[i * 4].height);<br></td></tr
><tr
id=sl_svn84_205

><td class="source">				ret[i * 4] = { &quot;width&quot; : pyr[i * 4].width,<br></td></tr
><tr
id=sl_svn84_206

><td class="source">							   &quot;height&quot; : pyr[i * 4].height,<br></td></tr
><tr
id=sl_svn84_207

><td class="source">							   &quot;data&quot; : pyr[i * 4].getContext(&quot;2d&quot;).getImageData(0, 0, pyr[i * 4].width, pyr[i * 4].height).data };<br></td></tr
><tr
id=sl_svn84_208

><td class="source">			}<br></td></tr
><tr
id=sl_svn84_209

><td class="source">			for (i = next; i &lt; scale_upto + next * 2; i++) {<br></td></tr
><tr
id=sl_svn84_210

><td class="source">				pyr[i * 4] = document.createElement(&quot;canvas&quot;);<br></td></tr
><tr
id=sl_svn84_211

><td class="source">				pyr[i * 4].width = Math.floor(pyr[i * 4 - next * 4].width / 2);<br></td></tr
><tr
id=sl_svn84_212

><td class="source">				pyr[i * 4].height = Math.floor(pyr[i * 4 - next * 4].height / 2);<br></td></tr
><tr
id=sl_svn84_213

><td class="source">				pyr[i * 4].getContext(&quot;2d&quot;).drawImage(pyr[i * 4 - next * 4], 0, 0, pyr[i * 4 - next * 4].width, pyr[i * 4 - next * 4].height, 0, 0, pyr[i * 4].width, pyr[i * 4].height);<br></td></tr
><tr
id=sl_svn84_214

><td class="source">				ret[i * 4] = { &quot;width&quot; : pyr[i * 4].width,<br></td></tr
><tr
id=sl_svn84_215

><td class="source">							   &quot;height&quot; : pyr[i * 4].height,<br></td></tr
><tr
id=sl_svn84_216

><td class="source">							   &quot;data&quot; : pyr[i * 4].getContext(&quot;2d&quot;).getImageData(0, 0, pyr[i * 4].width, pyr[i * 4].height).data };<br></td></tr
><tr
id=sl_svn84_217

><td class="source">			}<br></td></tr
><tr
id=sl_svn84_218

><td class="source">			for (i = next * 2; i &lt; scale_upto + next * 2; i++) {<br></td></tr
><tr
id=sl_svn84_219

><td class="source">				pyr[i * 4 + 1] = document.createElement(&quot;canvas&quot;);<br></td></tr
><tr
id=sl_svn84_220

><td class="source">				pyr[i * 4 + 1].width = Math.floor(pyr[i * 4 - next * 4].width / 2);<br></td></tr
><tr
id=sl_svn84_221

><td class="source">				pyr[i * 4 + 1].height = Math.floor(pyr[i * 4 - next * 4].height / 2);<br></td></tr
><tr
id=sl_svn84_222

><td class="source">				pyr[i * 4 + 1].getContext(&quot;2d&quot;).drawImage(pyr[i * 4 - next * 4], 1, 0, pyr[i * 4 - next * 4].width - 1, pyr[i * 4 - next * 4].height, 0, 0, pyr[i * 4 + 1].width - 2, pyr[i * 4 + 1].height);<br></td></tr
><tr
id=sl_svn84_223

><td class="source">				ret[i * 4 + 1] = { &quot;width&quot; : pyr[i * 4 + 1].width,<br></td></tr
><tr
id=sl_svn84_224

><td class="source">								   &quot;height&quot; : pyr[i * 4 + 1].height,<br></td></tr
><tr
id=sl_svn84_225

><td class="source">								   &quot;data&quot; : pyr[i * 4 + 1].getContext(&quot;2d&quot;).getImageData(0, 0, pyr[i * 4 + 1].width, pyr[i * 4 + 1].height).data };<br></td></tr
><tr
id=sl_svn84_226

><td class="source">				pyr[i * 4 + 2] = document.createElement(&quot;canvas&quot;);<br></td></tr
><tr
id=sl_svn84_227

><td class="source">				pyr[i * 4 + 2].width = Math.floor(pyr[i * 4 - next * 4].width / 2);<br></td></tr
><tr
id=sl_svn84_228

><td class="source">				pyr[i * 4 + 2].height = Math.floor(pyr[i * 4 - next * 4].height / 2);<br></td></tr
><tr
id=sl_svn84_229

><td class="source">				pyr[i * 4 + 2].getContext(&quot;2d&quot;).drawImage(pyr[i * 4 - next * 4], 0, 1, pyr[i * 4 - next * 4].width, pyr[i * 4 - next * 4].height - 1, 0, 0, pyr[i * 4 + 2].width, pyr[i * 4 + 2].height - 2);<br></td></tr
><tr
id=sl_svn84_230

><td class="source">				ret[i * 4 + 2] = { &quot;width&quot; : pyr[i * 4 + 2].width,<br></td></tr
><tr
id=sl_svn84_231

><td class="source">								   &quot;height&quot; : pyr[i * 4 + 2].height,<br></td></tr
><tr
id=sl_svn84_232

><td class="source">								   &quot;data&quot; : pyr[i * 4 + 2].getContext(&quot;2d&quot;).getImageData(0, 0, pyr[i * 4 + 2].width, pyr[i * 4 + 2].height).data };<br></td></tr
><tr
id=sl_svn84_233

><td class="source">				pyr[i * 4 + 3] = document.createElement(&quot;canvas&quot;);<br></td></tr
><tr
id=sl_svn84_234

><td class="source">				pyr[i * 4 + 3].width = Math.floor(pyr[i * 4 - next * 4].width / 2);<br></td></tr
><tr
id=sl_svn84_235

><td class="source">				pyr[i * 4 + 3].height = Math.floor(pyr[i * 4 - next * 4].height / 2);<br></td></tr
><tr
id=sl_svn84_236

><td class="source">				pyr[i * 4 + 3].getContext(&quot;2d&quot;).drawImage(pyr[i * 4 - next * 4], 1, 1, pyr[i * 4 - next * 4].width - 1, pyr[i * 4 - next * 4].height - 1, 0, 0, pyr[i * 4 + 3].width - 2, pyr[i * 4 + 3].height - 2);<br></td></tr
><tr
id=sl_svn84_237

><td class="source">				ret[i * 4 + 3] = { &quot;width&quot; : pyr[i * 4 + 3].width,<br></td></tr
><tr
id=sl_svn84_238

><td class="source">								   &quot;height&quot; : pyr[i * 4 + 3].height,<br></td></tr
><tr
id=sl_svn84_239

><td class="source">								   &quot;data&quot; : pyr[i * 4 + 3].getContext(&quot;2d&quot;).getImageData(0, 0, pyr[i * 4 + 3].width, pyr[i * 4 + 3].height).data };<br></td></tr
><tr
id=sl_svn84_240

><td class="source">			}<br></td></tr
><tr
id=sl_svn84_241

><td class="source">			return [ret];<br></td></tr
><tr
id=sl_svn84_242

><td class="source">		};<br></td></tr
><tr
id=sl_svn84_243

><td class="source"><br></td></tr
><tr
id=sl_svn84_244

><td class="source">		function core(pyr, id, worker_num) {<br></td></tr
><tr
id=sl_svn84_245

><td class="source">			var cascade = this.shared.cascade;<br></td></tr
><tr
id=sl_svn84_246

><td class="source">			var interval = this.shared.interval;<br></td></tr
><tr
id=sl_svn84_247

><td class="source">			var scale = this.shared.scale;<br></td></tr
><tr
id=sl_svn84_248

><td class="source">			var next = this.shared.next;<br></td></tr
><tr
id=sl_svn84_249

><td class="source">			var scale_upto = this.shared.scale_upto;<br></td></tr
><tr
id=sl_svn84_250

><td class="source">			var i, j, k, x, y, q;<br></td></tr
><tr
id=sl_svn84_251

><td class="source">			var scale_x = 1, scale_y = 1;<br></td></tr
><tr
id=sl_svn84_252

><td class="source">			var dx = [0, 1, 0, 1];<br></td></tr
><tr
id=sl_svn84_253

><td class="source">			var dy = [0, 0, 1, 1];<br></td></tr
><tr
id=sl_svn84_254

><td class="source">			var seq = [];<br></td></tr
><tr
id=sl_svn84_255

><td class="source">			for (i = 0; i &lt; scale_upto; i++) {<br></td></tr
><tr
id=sl_svn84_256

><td class="source">				var qw = pyr[i * 4 + next * 8].width - Math.floor(cascade.width / 4);<br></td></tr
><tr
id=sl_svn84_257

><td class="source">				var qh = pyr[i * 4 + next * 8].height - Math.floor(cascade.height / 4);<br></td></tr
><tr
id=sl_svn84_258

><td class="source">				var step = [pyr[i * 4].width * 4, pyr[i * 4 + next * 4].width * 4, pyr[i * 4 + next * 8].width * 4];<br></td></tr
><tr
id=sl_svn84_259

><td class="source">				var paddings = [pyr[i * 4].width * 16 - qw * 16,<br></td></tr
><tr
id=sl_svn84_260

><td class="source">								pyr[i * 4 + next * 4].width * 8 - qw * 8,<br></td></tr
><tr
id=sl_svn84_261

><td class="source">								pyr[i * 4 + next * 8].width * 4 - qw * 4];<br></td></tr
><tr
id=sl_svn84_262

><td class="source">				for (j = 0; j &lt; cascade.stage_classifier.length; j++) {<br></td></tr
><tr
id=sl_svn84_263

><td class="source">					var orig_feature = cascade.stage_classifier[j].orig_feature;<br></td></tr
><tr
id=sl_svn84_264

><td class="source">					var feature = cascade.stage_classifier[j].feature = new Array(cascade.stage_classifier[j].count);<br></td></tr
><tr
id=sl_svn84_265

><td class="source">					for (k = 0; k &lt; cascade.stage_classifier[j].count; k++) {<br></td></tr
><tr
id=sl_svn84_266

><td class="source">						feature[k] = {&quot;size&quot; : orig_feature[k].size,<br></td></tr
><tr
id=sl_svn84_267

><td class="source">									  &quot;px&quot; : new Array(orig_feature[k].size),<br></td></tr
><tr
id=sl_svn84_268

><td class="source">									  &quot;pz&quot; : new Array(orig_feature[k].size),<br></td></tr
><tr
id=sl_svn84_269

><td class="source">									  &quot;nx&quot; : new Array(orig_feature[k].size),<br></td></tr
><tr
id=sl_svn84_270

><td class="source">									  &quot;nz&quot; : new Array(orig_feature[k].size)};<br></td></tr
><tr
id=sl_svn84_271

><td class="source">						for (q = 0; q &lt; orig_feature[k].size; q++) {<br></td></tr
><tr
id=sl_svn84_272

><td class="source">							feature[k].px[q] = orig_feature[k].px[q] * 4 + orig_feature[k].py[q] * step[orig_feature[k].pz[q]];<br></td></tr
><tr
id=sl_svn84_273

><td class="source">							feature[k].pz[q] = orig_feature[k].pz[q];<br></td></tr
><tr
id=sl_svn84_274

><td class="source">							feature[k].nx[q] = orig_feature[k].nx[q] * 4 + orig_feature[k].ny[q] * step[orig_feature[k].nz[q]];<br></td></tr
><tr
id=sl_svn84_275

><td class="source">							feature[k].nz[q] = orig_feature[k].nz[q];<br></td></tr
><tr
id=sl_svn84_276

><td class="source">						}<br></td></tr
><tr
id=sl_svn84_277

><td class="source">					}<br></td></tr
><tr
id=sl_svn84_278

><td class="source">				}<br></td></tr
><tr
id=sl_svn84_279

><td class="source">				for (q = 0; q &lt; 4; q++) {<br></td></tr
><tr
id=sl_svn84_280

><td class="source">					var u8 = [pyr[i * 4].data, pyr[i * 4 + next * 4].data, pyr[i * 4 + next * 8 + q].data];<br></td></tr
><tr
id=sl_svn84_281

><td class="source">					var u8o = [dx[q] * 8 + dy[q] * pyr[i * 4].width * 8, dx[q] * 4 + dy[q] * pyr[i * 4 + next * 4].width * 4, 0];<br></td></tr
><tr
id=sl_svn84_282

><td class="source">					for (y = 0; y &lt; qh; y++) {<br></td></tr
><tr
id=sl_svn84_283

><td class="source">						for (x = 0; x &lt; qw; x++) {<br></td></tr
><tr
id=sl_svn84_284

><td class="source">							var sum = 0;<br></td></tr
><tr
id=sl_svn84_285

><td class="source">							var flag = true;<br></td></tr
><tr
id=sl_svn84_286

><td class="source">							for (j = 0; j &lt; cascade.stage_classifier.length; j++) {<br></td></tr
><tr
id=sl_svn84_287

><td class="source">								sum = 0;<br></td></tr
><tr
id=sl_svn84_288

><td class="source">								var alpha = cascade.stage_classifier[j].alpha;<br></td></tr
><tr
id=sl_svn84_289

><td class="source">								var feature = cascade.stage_classifier[j].feature;<br></td></tr
><tr
id=sl_svn84_290

><td class="source">								for (k = 0; k &lt; cascade.stage_classifier[j].count; k++) {<br></td></tr
><tr
id=sl_svn84_291

><td class="source">									var feature_k = feature[k];<br></td></tr
><tr
id=sl_svn84_292

><td class="source">									var p, pmin = u8[feature_k.pz[0]][u8o[feature_k.pz[0]] + feature_k.px[0]];<br></td></tr
><tr
id=sl_svn84_293

><td class="source">									var n, nmax = u8[feature_k.nz[0]][u8o[feature_k.nz[0]] + feature_k.nx[0]];<br></td></tr
><tr
id=sl_svn84_294

><td class="source">									if (pmin &lt;= nmax) {<br></td></tr
><tr
id=sl_svn84_295

><td class="source">										sum += alpha[k * 2];<br></td></tr
><tr
id=sl_svn84_296

><td class="source">									} else {<br></td></tr
><tr
id=sl_svn84_297

><td class="source">										var f, shortcut = true;<br></td></tr
><tr
id=sl_svn84_298

><td class="source">										for (f = 0; f &lt; feature_k.size; f++) {<br></td></tr
><tr
id=sl_svn84_299

><td class="source">											if (feature_k.pz[f] &gt;= 0) {<br></td></tr
><tr
id=sl_svn84_300

><td class="source">												p = u8[feature_k.pz[f]][u8o[feature_k.pz[f]] + feature_k.px[f]];<br></td></tr
><tr
id=sl_svn84_301

><td class="source">												if (p &lt; pmin) {<br></td></tr
><tr
id=sl_svn84_302

><td class="source">													if (p &lt;= nmax) {<br></td></tr
><tr
id=sl_svn84_303

><td class="source">														shortcut = false;<br></td></tr
><tr
id=sl_svn84_304

><td class="source">														break;<br></td></tr
><tr
id=sl_svn84_305

><td class="source">													}<br></td></tr
><tr
id=sl_svn84_306

><td class="source">													pmin = p;<br></td></tr
><tr
id=sl_svn84_307

><td class="source">												}<br></td></tr
><tr
id=sl_svn84_308

><td class="source">											}<br></td></tr
><tr
id=sl_svn84_309

><td class="source">											if (feature_k.nz[f] &gt;= 0) {<br></td></tr
><tr
id=sl_svn84_310

><td class="source">												n = u8[feature_k.nz[f]][u8o[feature_k.nz[f]] + feature_k.nx[f]];<br></td></tr
><tr
id=sl_svn84_311

><td class="source">												if (n &gt; nmax) {<br></td></tr
><tr
id=sl_svn84_312

><td class="source">													if (pmin &lt;= n) {<br></td></tr
><tr
id=sl_svn84_313

><td class="source">														shortcut = false;<br></td></tr
><tr
id=sl_svn84_314

><td class="source">														break;<br></td></tr
><tr
id=sl_svn84_315

><td class="source">													}<br></td></tr
><tr
id=sl_svn84_316

><td class="source">													nmax = n;<br></td></tr
><tr
id=sl_svn84_317

><td class="source">												}<br></td></tr
><tr
id=sl_svn84_318

><td class="source">											}<br></td></tr
><tr
id=sl_svn84_319

><td class="source">										}<br></td></tr
><tr
id=sl_svn84_320

><td class="source">										sum += (shortcut) ? alpha[k * 2 + 1] : alpha[k * 2];<br></td></tr
><tr
id=sl_svn84_321

><td class="source">									}<br></td></tr
><tr
id=sl_svn84_322

><td class="source">								}<br></td></tr
><tr
id=sl_svn84_323

><td class="source">								if (sum &lt; cascade.stage_classifier[j].threshold) {<br></td></tr
><tr
id=sl_svn84_324

><td class="source">									flag = false;<br></td></tr
><tr
id=sl_svn84_325

><td class="source">									break;<br></td></tr
><tr
id=sl_svn84_326

><td class="source">								}<br></td></tr
><tr
id=sl_svn84_327

><td class="source">							}<br></td></tr
><tr
id=sl_svn84_328

><td class="source">							if (flag) {<br></td></tr
><tr
id=sl_svn84_329

><td class="source">								seq.push({&quot;x&quot; : (x * 4 + dx[q] * 2) * scale_x,<br></td></tr
><tr
id=sl_svn84_330

><td class="source">										  &quot;y&quot; : (y * 4 + dy[q] * 2) * scale_y,<br></td></tr
><tr
id=sl_svn84_331

><td class="source">										  &quot;width&quot; : cascade.width * scale_x,<br></td></tr
><tr
id=sl_svn84_332

><td class="source">										  &quot;height&quot; : cascade.height * scale_y,<br></td></tr
><tr
id=sl_svn84_333

><td class="source">										  &quot;neighbor&quot; : 1,<br></td></tr
><tr
id=sl_svn84_334

><td class="source">										  &quot;confidence&quot; : sum});<br></td></tr
><tr
id=sl_svn84_335

><td class="source">							}<br></td></tr
><tr
id=sl_svn84_336

><td class="source">							u8o[0] += 16;<br></td></tr
><tr
id=sl_svn84_337

><td class="source">							u8o[1] += 8;<br></td></tr
><tr
id=sl_svn84_338

><td class="source">							u8o[2] += 4;<br></td></tr
><tr
id=sl_svn84_339

><td class="source">						}<br></td></tr
><tr
id=sl_svn84_340

><td class="source">						u8o[0] += paddings[0];<br></td></tr
><tr
id=sl_svn84_341

><td class="source">						u8o[1] += paddings[1];<br></td></tr
><tr
id=sl_svn84_342

><td class="source">						u8o[2] += paddings[2];<br></td></tr
><tr
id=sl_svn84_343

><td class="source">					}<br></td></tr
><tr
id=sl_svn84_344

><td class="source">				}<br></td></tr
><tr
id=sl_svn84_345

><td class="source">				scale_x *= scale;<br></td></tr
><tr
id=sl_svn84_346

><td class="source">				scale_y *= scale;<br></td></tr
><tr
id=sl_svn84_347

><td class="source">			}<br></td></tr
><tr
id=sl_svn84_348

><td class="source">			return seq;<br></td></tr
><tr
id=sl_svn84_349

><td class="source">		};<br></td></tr
><tr
id=sl_svn84_350

><td class="source"><br></td></tr
><tr
id=sl_svn84_351

><td class="source">		function post(seq) {<br></td></tr
><tr
id=sl_svn84_352

><td class="source">			var min_neighbors = this.shared.min_neighbors;<br></td></tr
><tr
id=sl_svn84_353

><td class="source">			var cascade = this.shared.cascade;<br></td></tr
><tr
id=sl_svn84_354

><td class="source">			var interval = this.shared.interval;<br></td></tr
><tr
id=sl_svn84_355

><td class="source">			var scale = this.shared.scale;<br></td></tr
><tr
id=sl_svn84_356

><td class="source">			var next = this.shared.next;<br></td></tr
><tr
id=sl_svn84_357

><td class="source">			var scale_upto = this.shared.scale_upto;<br></td></tr
><tr
id=sl_svn84_358

><td class="source">			var i, j;<br></td></tr
><tr
id=sl_svn84_359

><td class="source">			for (i = 0; i &lt; cascade.stage_classifier.length; i++)<br></td></tr
><tr
id=sl_svn84_360

><td class="source">				cascade.stage_classifier[i].feature = cascade.stage_classifier[i].orig_feature;<br></td></tr
><tr
id=sl_svn84_361

><td class="source">			seq = seq[0];<br></td></tr
><tr
id=sl_svn84_362

><td class="source">			if (!(min_neighbors &gt; 0))<br></td></tr
><tr
id=sl_svn84_363

><td class="source">				return seq;<br></td></tr
><tr
id=sl_svn84_364

><td class="source">			else {<br></td></tr
><tr
id=sl_svn84_365

><td class="source">				var result = ccv.array_group(seq, function (r1, r2) {<br></td></tr
><tr
id=sl_svn84_366

><td class="source">					var distance = Math.floor(r1.width * 0.25 + 0.5);<br></td></tr
><tr
id=sl_svn84_367

><td class="source"><br></td></tr
><tr
id=sl_svn84_368

><td class="source">					return r2.x &lt;= r1.x + distance &amp;&amp;<br></td></tr
><tr
id=sl_svn84_369

><td class="source">						   r2.x &gt;= r1.x - distance &amp;&amp;<br></td></tr
><tr
id=sl_svn84_370

><td class="source">						   r2.y &lt;= r1.y + distance &amp;&amp;<br></td></tr
><tr
id=sl_svn84_371

><td class="source">						   r2.y &gt;= r1.y - distance &amp;&amp;<br></td></tr
><tr
id=sl_svn84_372

><td class="source">						   r2.width &lt;= Math.floor(r1.width * 1.5 + 0.5) &amp;&amp;<br></td></tr
><tr
id=sl_svn84_373

><td class="source">						   Math.floor(r2.width * 1.5 + 0.5) &gt;= r1.width;<br></td></tr
><tr
id=sl_svn84_374

><td class="source">				});<br></td></tr
><tr
id=sl_svn84_375

><td class="source">				var ncomp = result.cat;<br></td></tr
><tr
id=sl_svn84_376

><td class="source">				var idx_seq = result.index;<br></td></tr
><tr
id=sl_svn84_377

><td class="source">				var comps = new Array(ncomp + 1);<br></td></tr
><tr
id=sl_svn84_378

><td class="source">				for (i = 0; i &lt; comps.length; i++)<br></td></tr
><tr
id=sl_svn84_379

><td class="source">					comps[i] = {&quot;neighbors&quot; : 0,<br></td></tr
><tr
id=sl_svn84_380

><td class="source">								&quot;x&quot; : 0,<br></td></tr
><tr
id=sl_svn84_381

><td class="source">								&quot;y&quot; : 0,<br></td></tr
><tr
id=sl_svn84_382

><td class="source">								&quot;width&quot; : 0,<br></td></tr
><tr
id=sl_svn84_383

><td class="source">								&quot;height&quot; : 0,<br></td></tr
><tr
id=sl_svn84_384

><td class="source">								&quot;confidence&quot; : 0};<br></td></tr
><tr
id=sl_svn84_385

><td class="source"><br></td></tr
><tr
id=sl_svn84_386

><td class="source">				// count number of neighbors<br></td></tr
><tr
id=sl_svn84_387

><td class="source">				for(i = 0; i &lt; seq.length; i++)<br></td></tr
><tr
id=sl_svn84_388

><td class="source">				{<br></td></tr
><tr
id=sl_svn84_389

><td class="source">					var r1 = seq[i];<br></td></tr
><tr
id=sl_svn84_390

><td class="source">					var idx = idx_seq[i];<br></td></tr
><tr
id=sl_svn84_391

><td class="source"><br></td></tr
><tr
id=sl_svn84_392

><td class="source">					if (comps[idx].neighbors == 0)<br></td></tr
><tr
id=sl_svn84_393

><td class="source">						comps[idx].confidence = r1.confidence;<br></td></tr
><tr
id=sl_svn84_394

><td class="source"><br></td></tr
><tr
id=sl_svn84_395

><td class="source">					++comps[idx].neighbors;<br></td></tr
><tr
id=sl_svn84_396

><td class="source"><br></td></tr
><tr
id=sl_svn84_397

><td class="source">					comps[idx].x += r1.x;<br></td></tr
><tr
id=sl_svn84_398

><td class="source">					comps[idx].y += r1.y;<br></td></tr
><tr
id=sl_svn84_399

><td class="source">					comps[idx].width += r1.width;<br></td></tr
><tr
id=sl_svn84_400

><td class="source">					comps[idx].height += r1.height;<br></td></tr
><tr
id=sl_svn84_401

><td class="source">					comps[idx].confidence = Math.max(comps[idx].confidence, r1.confidence);<br></td></tr
><tr
id=sl_svn84_402

><td class="source">				}<br></td></tr
><tr
id=sl_svn84_403

><td class="source"><br></td></tr
><tr
id=sl_svn84_404

><td class="source">				var seq2 = [];<br></td></tr
><tr
id=sl_svn84_405

><td class="source">				// calculate average bounding box<br></td></tr
><tr
id=sl_svn84_406

><td class="source">				for(i = 0; i &lt; ncomp; i++)<br></td></tr
><tr
id=sl_svn84_407

><td class="source">				{<br></td></tr
><tr
id=sl_svn84_408

><td class="source">					var n = comps[i].neighbors;<br></td></tr
><tr
id=sl_svn84_409

><td class="source">					if (n &gt;= min_neighbors)<br></td></tr
><tr
id=sl_svn84_410

><td class="source">						seq2.push({&quot;x&quot; : (comps[i].x * 2 + n) / (2 * n),<br></td></tr
><tr
id=sl_svn84_411

><td class="source">								   &quot;y&quot; : (comps[i].y * 2 + n) / (2 * n),<br></td></tr
><tr
id=sl_svn84_412

><td class="source">								   &quot;width&quot; : (comps[i].width * 2 + n) / (2 * n),<br></td></tr
><tr
id=sl_svn84_413

><td class="source">								   &quot;height&quot; : (comps[i].height * 2 + n) / (2 * n),<br></td></tr
><tr
id=sl_svn84_414

><td class="source">								   &quot;neighbors&quot; : comps[i].neighbors,<br></td></tr
><tr
id=sl_svn84_415

><td class="source">								   &quot;confidence&quot; : comps[i].confidence});<br></td></tr
><tr
id=sl_svn84_416

><td class="source">				}<br></td></tr
><tr
id=sl_svn84_417

><td class="source"><br></td></tr
><tr
id=sl_svn84_418

><td class="source">				var result_seq = [];<br></td></tr
><tr
id=sl_svn84_419

><td class="source">				// filter out small face rectangles inside large face rectangles<br></td></tr
><tr
id=sl_svn84_420

><td class="source">				for(i = 0; i &lt; seq2.length; i++)<br></td></tr
><tr
id=sl_svn84_421

><td class="source">				{<br></td></tr
><tr
id=sl_svn84_422

><td class="source">					var r1 = seq2[i];<br></td></tr
><tr
id=sl_svn84_423

><td class="source">					var flag = true;<br></td></tr
><tr
id=sl_svn84_424

><td class="source">					for(j = 0; j &lt; seq2.length; j++)<br></td></tr
><tr
id=sl_svn84_425

><td class="source">					{<br></td></tr
><tr
id=sl_svn84_426

><td class="source">						var r2 = seq2[j];<br></td></tr
><tr
id=sl_svn84_427

><td class="source">						var distance = Math.floor(r2.width * 0.25 + 0.5);<br></td></tr
><tr
id=sl_svn84_428

><td class="source"><br></td></tr
><tr
id=sl_svn84_429

><td class="source">						if(i != j &amp;&amp;<br></td></tr
><tr
id=sl_svn84_430

><td class="source">						   r1.x &gt;= r2.x - distance &amp;&amp;<br></td></tr
><tr
id=sl_svn84_431

><td class="source">						   r1.y &gt;= r2.y - distance &amp;&amp;<br></td></tr
><tr
id=sl_svn84_432

><td class="source">						   r1.x + r1.width &lt;= r2.x + r2.width + distance &amp;&amp;<br></td></tr
><tr
id=sl_svn84_433

><td class="source">						   r1.y + r1.height &lt;= r2.y + r2.height + distance &amp;&amp;<br></td></tr
><tr
id=sl_svn84_434

><td class="source">						   (r2.neighbors &gt; Math.max(3, r1.neighbors) || r1.neighbors &lt; 3))<br></td></tr
><tr
id=sl_svn84_435

><td class="source">						{<br></td></tr
><tr
id=sl_svn84_436

><td class="source">							flag = false;<br></td></tr
><tr
id=sl_svn84_437

><td class="source">							break;<br></td></tr
><tr
id=sl_svn84_438

><td class="source">						}<br></td></tr
><tr
id=sl_svn84_439

><td class="source">					}<br></td></tr
><tr
id=sl_svn84_440

><td class="source"><br></td></tr
><tr
id=sl_svn84_441

><td class="source">					if(flag)<br></td></tr
><tr
id=sl_svn84_442

><td class="source">						result_seq.push(r1);<br></td></tr
><tr
id=sl_svn84_443

><td class="source">				}<br></td></tr
><tr
id=sl_svn84_444

><td class="source">				return result_seq;<br></td></tr
><tr
id=sl_svn84_445

><td class="source">			}<br></td></tr
><tr
id=sl_svn84_446

><td class="source">		};<br></td></tr
><tr
id=sl_svn84_447

><td class="source">		return { &quot;pre&quot; : pre, &quot;core&quot; : core, &quot;post&quot; : post };<br></td></tr
><tr
id=sl_svn84_448

><td class="source">	})<br></td></tr
><tr
id=sl_svn84_449

><td class="source">}<br></td></tr
><tr
id=sl_svn84_450

><td class="source"><br></td></tr
><tr
id=sl_svn84_451

><td class="source">onmessage = function (event) {<br></td></tr
><tr
id=sl_svn84_452

><td class="source">	var data = (typeof event.data == &quot;string&quot;) ? JSON.parse(event.data) : event.data;<br></td></tr
><tr
id=sl_svn84_453

><td class="source">	var scope = { &quot;shared&quot; : data.shared };<br></td></tr
><tr
id=sl_svn84_454

><td class="source">	var result = parallable.core[data.name].apply(scope, [data.input, data.id, data.worker]);<br></td></tr
><tr
id=sl_svn84_455

><td class="source">	try {<br></td></tr
><tr
id=sl_svn84_456

><td class="source">		postMessage(result);<br></td></tr
><tr
id=sl_svn84_457

><td class="source">	} catch (e) {<br></td></tr
><tr
id=sl_svn84_458

><td class="source">		postMessage(JSON.stringify(result));<br></td></tr
><tr
id=sl_svn84_459

><td class="source">	}<br></td></tr
><tr
id=sl_svn84_460

><td class="source">}<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn84_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn84_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/webrtc-samples/source/detail?spec=svn84&amp;r=8">r8</a>
 by jube...@google.com
 on Feb 29, 2012
 &nbsp; <a href="/p/webrtc-samples/source/diff?spec=svn84&r=8&amp;format=side&amp;path=/trunk/apprtc/js/ccv.js&amp;old_path=/trunk/apprtc/js/ccv.js&amp;old=">Diff</a>
 </div>
 <pre>Downloaded from liuliu.me on 2/29/2012</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/webrtc-samples/source/detail?r=8&spec=svn84';
 var publish_url = '/p/webrtc-samples/source/detail?r=8&spec=svn84#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/apprtc/js');
 changed_urls.push('/p/webrtc-samples/source/browse/trunk/apprtc/js?r\x3d8\x26spec\x3dsvn84');
 
 
 changed_paths.push('/trunk/apprtc/js/ccv.js');
 changed_urls.push('/p/webrtc-samples/source/browse/trunk/apprtc/js/ccv.js?r\x3d8\x26spec\x3dsvn84');
 
 var selected_path = '/trunk/apprtc/js/ccv.js';
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/webrtc-samples/source/browse/trunk/apprtc/js?r=8&amp;spec=svn84"
 
 >/trunk/apprtc/js</option>
 
 <option value="/p/webrtc-samples/source/browse/trunk/apprtc/js/ccv.js?r=8&amp;spec=svn84"
 selected="selected"
 >/trunk/apprtc/js/ccv.js</option>
 
 </select>
 </td></tr></table>
 
 
 



 <div style="white-space:nowrap">
 Project members,
 <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=https%3A%2F%2Fcode.google.com%2Fp%2Fwebrtc-samples%2Fsource%2Fbrowse%2Ftrunk%2Fapprtc%2Fjs%2Fccv.js&amp;followup=https%3A%2F%2Fcode.google.com%2Fp%2Fwebrtc-samples%2Fsource%2Fbrowse%2Ftrunk%2Fapprtc%2Fjs%2Fccv.js"
 >sign in</a> to write a code review</div>


 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 <a href="/p/webrtc-samples/source/list?path=/trunk/apprtc/js/ccv.js&start=8">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 16722 bytes,
 460 lines</div>
 
 <div><a href="//webrtc-samples.googlecode.com/svn/trunk/apprtc/js/ccv.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="https://ssl.gstatic.com/codesite/ph/17200360115907490597/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="https://ssl.gstatic.com/codesite/ph/17200360115907490597/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/17200360115907490597/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="https://ssl.gstatic.com/codesite/ph/17200360115907490597/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn84': '/trunk/apprtc/js/ccv.js'}
 codereviews = CR_controller.setup(
 {"profileUrl":null,"projectHomeUrl":"/p/webrtc-samples","loggedInUserEmail":null,"projectName":"webrtc-samples","token":null,"assetHostPath":"https://ssl.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"https://ssl.gstatic.com/codesite/ph/17200360115907490597","relativeBaseUrl":""}, '', 'svn84', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/17200360115907490597/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/17200360115907490597/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

