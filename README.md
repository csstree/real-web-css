Using [CSSTree](https://github.com/csstree/csstree) to test a real site's CSS and collect usage data

## How to use

To load Alexa's site list and make a top of site (`data/top-sites.csv`):

```
npm run update:sites
```

To download a top site's CSS (`data/css/*.css`):

```
npm run download:css
```

> If something goes wrong on CSS downloading (freezing, network issue or errors on console), you can abort the process. Downloading will continue from the last successful processed site. You can set the start site by editing `data/idx.txt` file (if file doesn't exist downloading is start from the first one), which contains just a single number – site index.

To test collected CSS (`data/test-results.json`):

```
npm test
```

To generate a table with a test results and details (`README.md` and `test-details.md`):

```
npm run gen:table
```

To extract a usage data (`usage.md`):

```
npm run gen:usage
```

## Data

## Usage

- [The list of used CSS features on Alexa TOP 250 sites](usage.md)
- [Dictionaries](scripts/usage) used for testing an existence of feature (mix of different sources and data found on Alexa TOP 250 sites)

## Alexa TOP 250

<!-- date -->

Update date: 2018-05-08T22:07:31.255Z

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
<tr><td>1</td><td>⚠️</td><td>google.com</td><td>[5 errors](#1-googlecom)</td><td>[28 errors](#1-googlecom)</td></tr>
<tr><td>2</td><td>⚠️</td><td>youtube.com</td><td>[4 errors](#2-youtubecom)</td><td>[11 errors](#2-youtubecom)</td></tr>
<tr><td>3</td><td>⚠️</td><td>facebook.com</td><td>✅</td><td>[3 errors](#3-facebookcom)</td></tr>
<tr><td>4</td><td>⚠️</td><td>baidu.com</td><td colspan="2">–</td></tr>
<tr><td>5</td><td>⚠️</td><td>wikipedia.org</td><td>✅</td><td>[1 error](#5-wikipediaorg)</td></tr>
<tr><td>6</td><td>⚠️</td><td>reddit.com</td><td>[8 errors](#6-redditcom)</td><td>[12 errors](#6-redditcom)</td></tr>
<tr><td>7</td><td>⚠️</td><td>yahoo.com</td><td>[40 errors](#7-yahoocom)</td><td>[21 errors](#7-yahoocom)</td></tr>
<tr><td>8</td><td>⚠️</td><td>qq.com</td><td>[35 errors](#8-qqcom)</td><td>[1 error](#8-qqcom)</td></tr>
<tr><td>9</td><td>⚠️</td><td>taobao.com</td><td>[8 errors](#9-taobaocom)</td><td>[7 errors](#9-taobaocom)</td></tr>
<tr><td>10</td><td>⚠️</td><td>tmall.com</td><td>[22 errors](#10-tmallcom)</td><td>[4 errors](#10-tmallcom)</td></tr>
<tr><td>11</td><td>⚠️</td><td>twitter.com</td><td>[5 errors](#11-twittercom)</td><td>[4 errors](#11-twittercom)</td></tr>
<tr><td>12</td><td>⚠️</td><td>amazon.com</td><td>[13 errors](#12-amazoncom)</td><td>[20 errors](#12-amazoncom)</td></tr>
<tr><td>13</td><td>⚠️</td><td>google.co.in</td><td>[5 errors](#13-googlecoin)</td><td>[28 errors](#13-googlecoin)</td></tr>
<tr><td>14</td><td>⚠️</td><td>vk.com</td><td>[77 errors](#14-vkcom)</td><td>[4 errors](#14-vkcom)</td></tr>
<tr><td>15</td><td>⚠️</td><td>instagram.com</td><td>[2 errors](#15-instagramcom)</td><td>[12 errors](#15-instagramcom)</td></tr>
<tr><td>16</td><td>⚠️</td><td>sohu.com</td><td>[22 errors](#16-sohucom)</td><td>[5 errors](#16-sohucom)</td></tr>
<tr><td>17</td><td>⚠️</td><td>jd.com</td><td>[1error](#17-jdcom)</td><td>[1 error](#17-jdcom)</td></tr>
<tr><td>18</td><td>⚠️</td><td>live.com</td><td colspan="2">–</td></tr>
<tr><td>19</td><td>⚠️</td><td>sina.com.cn</td><td colspan="2">–</td></tr>
<tr><td>20</td><td>⚠️</td><td>weibo.com</td><td>[9 errors](#20-weibocom)</td><td>[13 errors](#20-weibocom)</td></tr>
<tr><td>21</td><td>⚠️</td><td>360.cn</td><td>[5 errors](#21-360cn)</td><td>[4 errors](#21-360cn)</td></tr>
<tr><td>22</td><td>⚠️</td><td>yandex.ru</td><td>✅</td><td>[7 errors](#22-yandexru)</td></tr>
<tr><td>23</td><td>⚠️</td><td>netflix.com</td><td>✅</td><td>[3 errors](#23-netflixcom)</td></tr>
<tr><td>24</td><td>⚠️</td><td>twitch.tv</td><td>[1error](#24-twitchtv)</td><td>[9 errors](#24-twitchtv)</td></tr>
<tr><td>25</td><td>⚠️</td><td>login.tmall.com</td><td>[7 errors](#25-logintmallcom)</td><td>[3 errors](#25-logintmallcom)</td></tr>
<tr><td>26</td><td>⚠️</td><td>pornhub.com</td><td>[1error](#26-pornhubcom)</td><td>[23 errors](#26-pornhubcom)</td></tr>
<tr><td>27</td><td>⚠️</td><td>google.ru</td><td>[5 errors](#27-googleru)</td><td>[28 errors](#27-googleru)</td></tr>
<tr><td>28</td><td>⚠️</td><td>google.co.uk</td><td>[5 errors](#28-googlecouk)</td><td>[28 errors](#28-googlecouk)</td></tr>
<tr><td>29</td><td>⚠️</td><td>google.com.br</td><td>[5 errors](#29-googlecombr)</td><td>[28 errors](#29-googlecombr)</td></tr>
<tr><td>30</td><td>⚠️</td><td>google.com.hk</td><td>[5 errors](#30-googlecomhk)</td><td>[28 errors](#30-googlecomhk)</td></tr>
<tr><td>31</td><td>⚠️</td><td>google.de</td><td>[5 errors](#31-googlede)</td><td>[28 errors](#31-googlede)</td></tr>
<tr><td>32</td><td>⚠️</td><td>google.co.jp</td><td>[5 errors](#32-googlecojp)</td><td>[28 errors](#32-googlecojp)</td></tr>
<tr><td>33</td><td>⚠️</td><td>google.fr</td><td>[5 errors](#33-googlefr)</td><td>[28 errors](#33-googlefr)</td></tr>
<tr><td>34</td><td>⚠️</td><td>yahoo.co.jp</td><td>[4 errors](#34-yahoocojp)</td><td>[8 errors](#34-yahoocojp)</td></tr>
<tr><td>35</td><td>⚠️</td><td>bing.com</td><td>[14 errors](#35-bingcom)</td><td>[2 errors](#35-bingcom)</td></tr>
<tr><td>36</td><td>⚠️</td><td>ebay.com</td><td>[30 errors](#36-ebaycom)</td><td>[22 errors](#36-ebaycom)</td></tr>
<tr><td>37</td><td>⚠️</td><td>xvideos.com</td><td>[7 errors](#37-xvideoscom)</td><td>[5 errors](#37-xvideoscom)</td></tr>
<tr><td>38</td><td>🆗</td><td>t.co</td><td>✅</td><td>✅</td></tr>
<tr><td>39</td><td>⚠️</td><td>imgur.com</td><td>[33 errors](#39-imgurcom)</td><td>[15 errors](#39-imgurcom)</td></tr>
<tr><td>40</td><td>🆗</td><td>alipay.com</td><td>✅</td><td>✅</td></tr>
<tr><td>41</td><td>⚠️</td><td>csdn.net</td><td>[14 errors](#41-csdnnet)</td><td>[7 errors](#41-csdnnet)</td></tr>
<tr><td>42</td><td>⚠️</td><td>ok.ru</td><td>[2 errors](#42-okru)</td><td>[18 errors](#42-okru)</td></tr>
<tr><td>43</td><td>⚠️</td><td>wikia.com</td><td>[2 errors](#43-wikiacom)</td><td>[9 errors](#43-wikiacom)</td></tr>
<tr><td>44</td><td>⚠️</td><td>google.it</td><td>[5 errors](#44-googleit)</td><td>[28 errors](#44-googleit)</td></tr>
<tr><td>45</td><td>⚠️</td><td>microsoft.com</td><td>[1error](#45-microsoftcom)</td><td>[28 errors](#45-microsoftcom)</td></tr>
<tr><td>46</td><td>⚠️</td><td>google.ca</td><td>[5 errors](#46-googleca)</td><td>[28 errors](#46-googleca)</td></tr>
<tr><td>47</td><td>⚠️</td><td>pages.tmall.com</td><td>[4 errors](#47-pagestmallcom)</td><td>[3 errors](#47-pagestmallcom)</td></tr>
<tr><td>48</td><td>⚠️</td><td>imdb.com</td><td>[21 errors](#48-imdbcom)</td><td>[24 errors](#48-imdbcom)</td></tr>
<tr><td>49</td><td>⚠️</td><td>mail.ru</td><td>[7 errors](#49-mailru)</td><td>[11 errors](#49-mailru)</td></tr>
<tr><td>50</td><td>⚠️</td><td>tumblr.com</td><td>[10 errors](#50-tumblrcom)</td><td>[19 errors](#50-tumblrcom)</td></tr>
<tr><td>51</td><td>⚠️</td><td>aliexpress.com</td><td>[55 errors](#51-aliexpresscom)</td><td>[34 errors](#51-aliexpresscom)</td></tr>
<tr><td>52</td><td>⚠️</td><td>google.es</td><td>[5 errors](#52-googlees)</td><td>[28 errors](#52-googlees)</td></tr>
<tr><td>53</td><td>⚠️</td><td>xhamster.com</td><td colspan="2">–</td></tr>
<tr><td>54</td><td>⚠️</td><td>msn.com</td><td>✅</td><td>[5 errors](#54-msncom)</td></tr>
<tr><td>55</td><td>⚠️</td><td>linkedin.com</td><td colspan="2">–</td></tr>
<tr><td>56</td><td>🆗</td><td>deloton.com</td><td>✅</td><td>✅</td></tr>
<tr><td>57</td><td>⚠️</td><td>google.com.mx</td><td>[5 errors](#57-googlecommx)</td><td>[28 errors](#57-googlecommx)</td></tr>
<tr><td>58</td><td>⚠️</td><td>amazon.co.jp</td><td>[11 errors](#58-amazoncojp)</td><td>[20 errors](#58-amazoncojp)</td></tr>
<tr><td>59</td><td>🆗</td><td>popads.net</td><td>✅</td><td>✅</td></tr>
<tr><td>60</td><td>⚠️</td><td>hao123.com</td><td>[23 errors](#60-hao123com)</td><td>[2 errors](#60-hao123com)</td></tr>
<tr><td>61</td><td>⚠️</td><td>wordpress.com</td><td>[2 errors](#61-wordpresscom)</td><td>[6 errors](#61-wordpresscom)</td></tr>
<tr><td>62</td><td>⚠️</td><td>office.com</td><td>✅</td><td>[3 errors](#62-officecom)</td></tr>
<tr><td>63</td><td>⚠️</td><td>whatsapp.com</td><td>✅</td><td>[10 errors](#63-whatsappcom)</td></tr>
<tr><td>64</td><td>⚠️</td><td>google.com.tw</td><td>[5 errors](#64-googlecomtw)</td><td>[28 errors](#64-googlecomtw)</td></tr>
<tr><td>65</td><td>⚠️</td><td>google.com.tr</td><td>[5 errors](#65-googlecomtr)</td><td>[28 errors](#65-googlecomtr)</td></tr>
<tr><td>66</td><td>⚠️</td><td>livejasmin.com</td><td colspan="2">–</td></tr>
<tr><td>67</td><td>⚠️</td><td>blogspot.com</td><td>✅</td><td>[11 errors](#67-blogspotcom)</td></tr>
<tr><td>68</td><td>⚠️</td><td>bongacams.com</td><td>[44 errors](#68-bongacamscom)</td><td>[7 errors](#68-bongacamscom)</td></tr>
<tr><td>69</td><td>⚠️</td><td>google.com.au</td><td>[5 errors](#69-googlecomau)</td><td>[28 errors](#69-googlecomau)</td></tr>
<tr><td>70</td><td>⚠️</td><td>xnxx.com</td><td>[7 errors](#70-xnxxcom)</td><td>[3 errors](#70-xnxxcom)</td></tr>
<tr><td>71</td><td>⚠️</td><td>paypal.com</td><td>[7 errors](#71-paypalcom)</td><td>[8 errors](#71-paypalcom)</td></tr>
<tr><td>72</td><td>⚠️</td><td>microsoftonline.com</td><td colspan="2">–</td></tr>
<tr><td>73</td><td>⚠️</td><td>github.com</td><td>✅</td><td>[15 errors](#73-githubcom)</td></tr>
<tr><td>74</td><td>⚠️</td><td>apple.com</td><td>✅</td><td>[6 errors](#74-applecom)</td></tr>
<tr><td>75</td><td>⚠️</td><td>tribunnews.com</td><td>[9 errors](#75-tribunnewscom)</td><td>[12 errors](#75-tribunnewscom)</td></tr>
<tr><td>76</td><td>⚠️</td><td>stackoverflow.com</td><td>[1error](#76-stackoverflowcom)</td><td>[10 errors](#76-stackoverflowcom)</td></tr>
<tr><td>77</td><td>⚠️</td><td>diply.com</td><td>[2 errors](#77-diplycom)</td><td>[2 errors](#77-diplycom)</td></tr>
<tr><td>78</td><td>⚠️</td><td>savefrom.net</td><td>[7 errors](#78-savefromnet)</td><td>[9 errors](#78-savefromnet)</td></tr>
<tr><td>79</td><td>⚠️</td><td>providr.com</td><td>[8 errors](#79-providrcom)</td><td>[10 errors](#79-providrcom)</td></tr>
<tr><td>80</td><td>⚠️</td><td>pinterest.com</td><td>[7 errors](#80-pinterestcom)</td><td>[41 errors](#80-pinterestcom)</td></tr>
<tr><td>81</td><td>⚠️</td><td>fbcdn.net</td><td>✅</td><td>[3 errors](#81-fbcdnnet)</td></tr>
<tr><td>82</td><td>⚠️</td><td>chaturbate.com</td><td>✅</td><td>[6 errors](#82-chaturbatecom)</td></tr>
<tr><td>83</td><td>⚠️</td><td>google.pl</td><td>[5 errors](#83-googlepl)</td><td>[28 errors](#83-googlepl)</td></tr>
<tr><td>84</td><td>⚠️</td><td>amazon.de</td><td>[11 errors](#84-amazonde)</td><td>[20 errors](#84-amazonde)</td></tr>
<tr><td>85</td><td>⚠️</td><td>youth.cn</td><td colspan="2">–</td></tr>
<tr><td>86</td><td>⚠️</td><td>soso.com</td><td>[15 errors](#86-sosocom)</td><td>[27 errors](#86-sosocom)</td></tr>
<tr><td>87</td><td>⚠️</td><td>txxx.com</td><td>[14 errors](#87-txxxcom)</td><td>[5 errors](#87-txxxcom)</td></tr>
<tr><td>88</td><td>⚠️</td><td>coccoc.com</td><td>[6 errors](#88-coccoccom)</td><td>[9 errors](#88-coccoccom)</td></tr>
<tr><td>89</td><td>⚠️</td><td>google.co.id</td><td colspan="2">–</td></tr>
<tr><td>90</td><td>⚠️</td><td>detail.tmall.com</td><td>[4 errors](#90-detailtmallcom)</td><td>[3 errors](#90-detailtmallcom)</td></tr>
<tr><td>91</td><td>⚠️</td><td>k618.cn</td><td>[8 errors](#91-k618cn)</td><td>[2 errors](#91-k618cn)</td></tr>
<tr><td>92</td><td>⚠️</td><td>pixnet.net</td><td colspan="2">–</td></tr>
<tr><td>93</td><td>⚠️</td><td>roblox.com</td><td colspan="2">–</td></tr>
<tr><td>94</td><td>⚠️</td><td>adobe.com</td><td>[3 errors](#94-adobecom)</td><td>[25 errors](#94-adobecom)</td></tr>
<tr><td>95</td><td>🆗</td><td>thepiratebay.org</td><td>✅</td><td>✅</td></tr>
<tr><td>96</td><td>⚠️</td><td>thestartmagazine.com</td><td>✅</td><td>[11 errors](#96-thestartmagazinecom)</td></tr>
<tr><td>97</td><td>⚠️</td><td>googleusercontent.com</td><td colspan="2">–</td></tr>
<tr><td>98</td><td>⚠️</td><td>bbc.com</td><td>[16 errors](#98-bbccom)</td><td>[9 errors](#98-bbccom)</td></tr>
<tr><td>99</td><td>⚠️</td><td>google.com.ua</td><td>[5 errors](#99-googlecomua)</td><td>[28 errors](#99-googlecomua)</td></tr>
<tr><td>100</td><td>⚠️</td><td>amazon.in</td><td>[11 errors](#100-amazonin)</td><td>[20 errors](#100-amazonin)</td></tr>
<tr><td>101</td><td>⚠️</td><td>nicovideo.jp</td><td>[4 errors](#101-nicovideojp)</td><td>[9 errors](#101-nicovideojp)</td></tr>
<tr><td>102</td><td>⚠️</td><td>dailymotion.com</td><td colspan="2">–</td></tr>
<tr><td>103</td><td>⚠️</td><td>craigslist.org</td><td>[14 errors](#103-craigslistorg)</td><td>[3 errors](#103-craigslistorg)</td></tr>
<tr><td>104</td><td>⚠️</td><td>amazon.co.uk</td><td>[11 errors](#104-amazoncouk)</td><td>[20 errors](#104-amazoncouk)</td></tr>
<tr><td>105</td><td>⚠️</td><td>google.com.ar</td><td colspan="2">–</td></tr>
<tr><td>106</td><td>⚠️</td><td>restorecosm.bid</td><td>[14 errors](#106-restorecosmbid)</td><td>[40 errors](#106-restorecosmbid)</td></tr>
<tr><td>107</td><td>⚠️</td><td>espn.com</td><td>[310 errors](#107-espncom)</td><td>[38 errors](#107-espncom)</td></tr>
<tr><td>108</td><td>⚠️</td><td>soundcloud.com</td><td>✅</td><td>[3 errors](#108-soundcloudcom)</td></tr>
<tr><td>109</td><td>⚠️</td><td>bbc.co.uk</td><td>[16 errors](#109-bbccouk)</td><td>[12 errors](#109-bbccouk)</td></tr>
<tr><td>110</td><td>⚠️</td><td>google.co.th</td><td>[5 errors](#110-googlecoth)</td><td>[28 errors](#110-googlecoth)</td></tr>
<tr><td>111</td><td>⚠️</td><td>quora.com</td><td>[11 errors](#111-quoracom)</td><td>[74 errors](#111-quoracom)</td></tr>
<tr><td>112</td><td>⚠️</td><td>so.com</td><td>[6 errors](#112-socom)</td><td>[14 errors](#112-socom)</td></tr>
<tr><td>113</td><td>⚠️</td><td>booking.com</td><td>[48 errors](#113-bookingcom)</td><td>[38 errors](#113-bookingcom)</td></tr>
<tr><td>114</td><td>⚠️</td><td>dkn.tv</td><td>[16 errors](#114-dkntv)</td><td>[12 errors](#114-dkntv)</td></tr>
<tr><td>115</td><td>⚠️</td><td>openload.co</td><td>[17 errors](#115-openloadco)</td><td>[2 errors](#115-openloadco)</td></tr>
<tr><td>116</td><td>⚠️</td><td>xinhuanet.com</td><td>[32 errors](#116-xinhuanetcom)</td><td>[5 errors](#116-xinhuanetcom)</td></tr>
<tr><td>117</td><td>⚠️</td><td>onlinesbi.com</td><td>[4 errors](#117-onlinesbicom)</td><td>[5 errors](#117-onlinesbicom)</td></tr>
<tr><td>118</td><td>🆗</td><td>ask.com</td><td>[9 errors](#118-askcom)</td><td>✅</td></tr>
<tr><td>119</td><td>⚠️</td><td>google.com.eg</td><td>[5 errors](#119-googlecomeg)</td><td>[28 errors](#119-googlecomeg)</td></tr>
<tr><td>120</td><td>⚠️</td><td>dropbox.com</td><td>[8 errors](#120-dropboxcom)</td><td>[17 errors](#120-dropboxcom)</td></tr>
<tr><td>121</td><td>⚠️</td><td>google.com.sa</td><td>[5 errors](#121-googlecomsa)</td><td>[28 errors](#121-googlecomsa)</td></tr>
<tr><td>122</td><td>⚠️</td><td>tokopedia.com</td><td>[36 errors](#122-tokopediacom)</td><td>[52 errors](#122-tokopediacom)</td></tr>
<tr><td>123</td><td>⚠️</td><td>discordapp.com</td><td>[1error](#123-discordappcom)</td><td>[28 errors](#123-discordappcom)</td></tr>
<tr><td>124</td><td>⚠️</td><td>fc2.com</td><td>[3 errors](#124-fc2com)</td><td>[4 errors](#124-fc2com)</td></tr>
<tr><td>125</td><td>⚠️</td><td>google.com.pk</td><td>[5 errors](#125-googlecompk)</td><td>[28 errors](#125-googlecompk)</td></tr>
<tr><td>126</td><td>⚠️</td><td>exdynsrv.com</td><td colspan="2">–</td></tr>
<tr><td>127</td><td>⚠️</td><td>nytimes.com</td><td>[28 errors](#127-nytimescom)</td><td>[23 errors](#127-nytimescom)</td></tr>
<tr><td>128</td><td>⚠️</td><td>tianya.cn</td><td>[11 errors](#128-tianyacn)</td><td>[2 errors](#128-tianyacn)</td></tr>
<tr><td>129</td><td>⚠️</td><td>amazonaws.com</td><td>[61 errors](#129-amazonawscom)</td><td>[14 errors](#129-amazonawscom)</td></tr>
<tr><td>130</td><td>⚠️</td><td>theepochtimes.com</td><td colspan="2">–</td></tr>
<tr><td>131</td><td>⚠️</td><td>ebay.de</td><td>[16 errors](#131-ebayde)</td><td>[15 errors](#131-ebayde)</td></tr>
<tr><td>132</td><td>⚠️</td><td>mediafire.com</td><td>[43 errors](#132-mediafirecom)</td><td>[45 errors](#132-mediafirecom)</td></tr>
<tr><td>133</td><td>⚠️</td><td>douyu.com</td><td>[46 errors](#133-douyucom)</td><td>[18 errors](#133-douyucom)</td></tr>
<tr><td>134</td><td>⚠️</td><td>ettoday.net</td><td colspan="2">–</td></tr>
<tr><td>135</td><td>⚠️</td><td>ntd.tv</td><td>[4 errors](#135-ntdtv)</td><td>[2 errors](#135-ntdtv)</td></tr>
<tr><td>136</td><td>⚠️</td><td>cnn.com</td><td colspan="2">–</td></tr>
<tr><td>137</td><td>⚠️</td><td>spotify.com</td><td>✅</td><td>[6 errors](#137-spotifycom)</td></tr>
<tr><td>138</td><td>⚠️</td><td>stackexchange.com</td><td>[3 errors](#138-stackexchangecom)</td><td>[9 errors](#138-stackexchangecom)</td></tr>
<tr><td>139</td><td>⚠️</td><td>rakuten.co.jp</td><td colspan="2">–</td></tr>
<tr><td>140</td><td>⚠️</td><td>1688.com</td><td>[20 errors](#140-1688com)</td><td>[9 errors](#140-1688com)</td></tr>
<tr><td>141</td><td>⚠️</td><td>aparat.com</td><td colspan="2">–</td></tr>
<tr><td>142</td><td>⚠️</td><td>steamcommunity.com</td><td>[11 errors](#142-steamcommunitycom)</td><td>[1 error](#142-steamcommunitycom)</td></tr>
<tr><td>143</td><td>🆗</td><td>google.cn</td><td>✅</td><td>✅</td></tr>
<tr><td>144</td><td>⚠️</td><td>cnblogs.com</td><td>✅</td><td>[1 error](#144-cnblogscom)</td></tr>
<tr><td>145</td><td>⚠️</td><td>deviantart.com</td><td>[123 errors](#145-deviantartcom)</td><td>[85 errors](#145-deviantartcom)</td></tr>
<tr><td>146</td><td>⚠️</td><td>bet9ja.com</td><td>[9 errors](#146-bet9jacom)</td><td>[1 error](#146-bet9jacom)</td></tr>
<tr><td>147</td><td>⚠️</td><td>google.nl</td><td>[5 errors](#147-googlenl)</td><td>[28 errors](#147-googlenl)</td></tr>
<tr><td>148</td><td>⚠️</td><td>avito.ru</td><td>[14 errors](#148-avitoru)</td><td>[13 errors](#148-avitoru)</td></tr>
<tr><td>149</td><td>⚠️</td><td>softonic.com</td><td>[2 errors](#149-softoniccom)</td><td>[11 errors](#149-softoniccom)</td></tr>
<tr><td>150</td><td>⚠️</td><td>google.co.za</td><td>[5 errors](#150-googlecoza)</td><td>[28 errors](#150-googlecoza)</td></tr>
<tr><td>151</td><td>⚠️</td><td>nextoptim.com</td><td colspan="2">–</td></tr>
<tr><td>152</td><td>⚠️</td><td>detik.com</td><td colspan="2">–</td></tr>
<tr><td>153</td><td>⚠️</td><td>google.az</td><td>[5 errors](#153-googleaz)</td><td>[28 errors](#153-googleaz)</td></tr>
<tr><td>154</td><td>⚠️</td><td>4chan.org</td><td>✅</td><td>[2 errors](#154-4chanorg)</td></tr>
<tr><td>155</td><td>⚠️</td><td>ebay.co.uk</td><td>[16 errors](#155-ebaycouk)</td><td>[15 errors](#155-ebaycouk)</td></tr>
<tr><td>156</td><td>⚠️</td><td>hotmovs.com</td><td>[35 errors](#156-hotmovscom)</td><td>[3 errors](#156-hotmovscom)</td></tr>
<tr><td>157</td><td>⚠️</td><td>vimeo.com</td><td>[7 errors](#157-vimeocom)</td><td>[10 errors](#157-vimeocom)</td></tr>
<tr><td>158</td><td>⚠️</td><td>theguardian.com</td><td>✅</td><td>[21 errors](#158-theguardiancom)</td></tr>
<tr><td>159</td><td>🆗</td><td>doublepimpssl.com</td><td>✅</td><td>✅</td></tr>
<tr><td>160</td><td>⚠️</td><td>nih.gov</td><td>[24 errors](#160-nihgov)</td><td>[9 errors](#160-nihgov)</td></tr>
<tr><td>161</td><td>⚠️</td><td>oath.com</td><td>[3 errors](#161-oathcom)</td><td>[7 errors](#161-oathcom)</td></tr>
<tr><td>162</td><td>⚠️</td><td>chase.com</td><td>[8 errors](#162-chasecom)</td><td>[23 errors](#162-chasecom)</td></tr>
<tr><td>163</td><td>⚠️</td><td>flipkart.com</td><td colspan="2">–</td></tr>
<tr><td>164</td><td>⚠️</td><td>dailymail.co.uk</td><td>[41 errors](#164-dailymailcouk)</td><td>[30 errors](#164-dailymailcouk)</td></tr>
<tr><td>165</td><td>⚠️</td><td>google.com.vn</td><td>[5 errors](#165-googlecomvn)</td><td>[28 errors](#165-googlecomvn)</td></tr>
<tr><td>166</td><td>⚠️</td><td>google.co.ve</td><td>[5 errors](#166-googlecove)</td><td>[28 errors](#166-googlecove)</td></tr>
<tr><td>167</td><td>⚠️</td><td>bukalapak.com</td><td>[20 errors](#167-bukalapakcom)</td><td>[26 errors](#167-bukalapakcom)</td></tr>
<tr><td>168</td><td>⚠️</td><td>cricbuzz.com</td><td>[3 errors](#168-cricbuzzcom)</td><td>[2 errors](#168-cricbuzzcom)</td></tr>
<tr><td>169</td><td>⚠️</td><td>yts.am</td><td>[64 errors](#169-ytsam)</td><td>[9 errors](#169-ytsam)</td></tr>
<tr><td>170</td><td>⚠️</td><td>bles.com</td><td>[15 errors](#170-blescom)</td><td>[14 errors](#170-blescom)</td></tr>
<tr><td>171</td><td>⚠️</td><td>hotstar.com</td><td>[29 errors](#171-hotstarcom)</td><td>[24 errors](#171-hotstarcom)</td></tr>
<tr><td>172</td><td>⚠️</td><td>mozilla.org</td><td>✅</td><td>[2 errors](#172-mozillaorg)</td></tr>
<tr><td>173</td><td>⚠️</td><td>bet365.com</td><td colspan="2">–</td></tr>
<tr><td>174</td><td>⚠️</td><td>google.se</td><td>[5 errors](#174-googlese)</td><td>[28 errors](#174-googlese)</td></tr>
<tr><td>175</td><td>⚠️</td><td>cnet.com</td><td>[33 errors](#175-cnetcom)</td><td>[9 errors](#175-cnetcom)</td></tr>
<tr><td>176</td><td>⚠️</td><td>twimg.com</td><td colspan="2">–</td></tr>
<tr><td>177</td><td>⚠️</td><td>lifedaily.com</td><td>[39 errors](#177-lifedailycom)</td><td>[11 errors](#177-lifedailycom)</td></tr>
<tr><td>178</td><td>⚠️</td><td>redtube.com</td><td>✅</td><td>[3 errors](#178-redtubecom)</td></tr>
<tr><td>179</td><td>⚠️</td><td>myfastappz.com</td><td>✅</td><td>[4 errors](#179-myfastappzcom)</td></tr>
<tr><td>180</td><td>⚠️</td><td>fapmeth.com</td><td>[5 errors](#180-fapmethcom)</td><td>[28 errors](#180-fapmethcom)</td></tr>
<tr><td>181</td><td>⚠️</td><td>digitaldsp.com</td><td colspan="2">–</td></tr>
<tr><td>182</td><td>⚠️</td><td>walmart.com</td><td>[3 errors](#182-walmartcom)</td><td>[4 errors](#182-walmartcom)</td></tr>
<tr><td>183</td><td>⚠️</td><td>globo.com</td><td>[16 errors](#183-globocom)</td><td>[8 errors](#183-globocom)</td></tr>
<tr><td>184</td><td>⚠️</td><td>google.com.co</td><td>[5 errors](#184-googlecomco)</td><td>[28 errors](#184-googlecomco)</td></tr>
<tr><td>185</td><td>⚠️</td><td>crptentry.com</td><td colspan="2">–</td></tr>
<tr><td>186</td><td>⚠️</td><td>google.com.sg</td><td>[5 errors](#186-googlecomsg)</td><td>[28 errors](#186-googlecomsg)</td></tr>
<tr><td>187</td><td>⚠️</td><td>onlinevideoconverter.com</td><td>[16 errors](#187-onlinevideoconvertercom)</td><td>[7 errors](#187-onlinevideoconvertercom)</td></tr>
<tr><td>188</td><td>🆗</td><td>mega.nz</td><td>✅</td><td>✅</td></tr>
<tr><td>189</td><td>⚠️</td><td>slideshare.net</td><td colspan="2">–</td></tr>
<tr><td>190</td><td>⚠️</td><td>doubleclick.net</td><td>✅</td><td>[11 errors](#190-doubleclicknet)</td></tr>
<tr><td>191</td><td>⚠️</td><td>steampowered.com</td><td>[36 errors](#191-steampoweredcom)</td><td>[2 errors](#191-steampoweredcom)</td></tr>
<tr><td>192</td><td>⚠️</td><td>etsy.com</td><td>[126 errors](#192-etsycom)</td><td>[12 errors](#192-etsycom)</td></tr>
<tr><td>193</td><td>⚠️</td><td>yelp.com</td><td>[8 errors](#193-yelpcom)</td><td>[14 errors](#193-yelpcom)</td></tr>
<tr><td>194</td><td>⚠️</td><td>speakol.com</td><td>[17 errors](#194-speakolcom)</td><td>[4 errors](#194-speakolcom)</td></tr>
<tr><td>195</td><td>⚠️</td><td>google.gr</td><td>[5 errors](#195-googlegr)</td><td>[28 errors](#195-googlegr)</td></tr>
<tr><td>196</td><td>⚠️</td><td>wikihow.com</td><td>[17 errors](#196-wikihowcom)</td><td>[11 errors](#196-wikihowcom)</td></tr>
<tr><td>197</td><td>⚠️</td><td>mercadolivre.com.br</td><td>✅</td><td>[3 errors](#197-mercadolivrecombr)</td></tr>
<tr><td>198</td><td>⚠️</td><td>igmatik.com</td><td>[27 errors](#198-igmatikcom)</td><td>[17 errors](#198-igmatikcom)</td></tr>
<tr><td>199</td><td>⚠️</td><td>hulu.com</td><td>✅</td><td>[6 errors](#199-hulucom)</td></tr>
<tr><td>200</td><td>⚠️</td><td>jf71qh5v14.com</td><td colspan="2">–</td></tr>
<tr><td>201</td><td>⚠️</td><td>youporn.com</td><td colspan="2">–</td></tr>
<tr><td>202</td><td>⚠️</td><td>alibaba.com</td><td>[2 errors](#202-alibabacom)</td><td>[6 errors](#202-alibabacom)</td></tr>
<tr><td>203</td><td>⚠️</td><td>google.be</td><td>[5 errors](#203-googlebe)</td><td>[28 errors](#203-googlebe)</td></tr>
<tr><td>204</td><td>⚠️</td><td>rumble.com</td><td>[9 errors](#204-rumblecom)</td><td>[4 errors](#204-rumblecom)</td></tr>
<tr><td>205</td><td>⚠️</td><td>vice.com</td><td>✅</td><td>[9 errors](#205-vicecom)</td></tr>
<tr><td>206</td><td>⚠️</td><td>sogou.com</td><td>[15 errors](#206-sogoucom)</td><td>[27 errors](#206-sogoucom)</td></tr>
<tr><td>207</td><td>⚠️</td><td>youm7.com</td><td colspan="2">–</td></tr>
<tr><td>208</td><td>⚠️</td><td>abs-cbn.com</td><td colspan="2">–</td></tr>
<tr><td>209</td><td>⚠️</td><td>google.com.ph</td><td>[5 errors](#209-googlecomph)</td><td>[28 errors](#209-googlecomph)</td></tr>
<tr><td>210</td><td>⚠️</td><td>doublepimp.com</td><td>[4 errors](#210-doublepimpcom)</td><td>[1 error](#210-doublepimpcom)</td></tr>
<tr><td>211</td><td>⚠️</td><td>fbspyster.com</td><td>[1error](#211-fbspystercom)</td><td>[2 errors](#211-fbspystercom)</td></tr>
<tr><td>212</td><td>⚠️</td><td>messenger.com</td><td>✅</td><td>[1 error](#212-messengercom)</td></tr>
<tr><td>213</td><td>⚠️</td><td>coinmarketcap.com</td><td>[12 errors](#213-coinmarketcapcom)</td><td>[9 errors](#213-coinmarketcapcom)</td></tr>
<tr><td>214</td><td>⚠️</td><td>blastingnews.com</td><td>[24 errors](#214-blastingnewscom)</td><td>[26 errors](#214-blastingnewscom)</td></tr>
<tr><td>215</td><td>⚠️</td><td>scribd.com</td><td>[4 errors](#215-scribdcom)</td><td>[20 errors](#215-scribdcom)</td></tr>
<tr><td>216</td><td>⚠️</td><td>indeed.com</td><td>✅</td><td>[5 errors](#216-indeedcom)</td></tr>
<tr><td>217</td><td>⚠️</td><td>babytree.com</td><td>[18 errors](#217-babytreecom)</td><td>[11 errors](#217-babytreecom)</td></tr>
<tr><td>218</td><td>⚠️</td><td>google.com.pe</td><td>[5 errors](#218-googlecompe)</td><td>[28 errors](#218-googlecompe)</td></tr>
<tr><td>219</td><td>⚠️</td><td>naver.com</td><td>[43 errors](#219-navercom)</td><td>[2 errors](#219-navercom)</td></tr>
<tr><td>220</td><td>⚠️</td><td>buzzfeed.com</td><td>[2 errors](#220-buzzfeedcom)</td><td>[5 errors](#220-buzzfeedcom)</td></tr>
<tr><td>221</td><td>⚠️</td><td>uol.com.br</td><td>[56 errors](#221-uolcombr)</td><td>[10 errors](#221-uolcombr)</td></tr>
<tr><td>222</td><td>🆗</td><td>china.com.cn</td><td>✅</td><td>✅</td></tr>
<tr><td>223</td><td>⚠️</td><td>kissanime.ru</td><td colspan="2">–</td></tr>
<tr><td>224</td><td>⚠️</td><td>qulsqiqrev.com</td><td colspan="2">–</td></tr>
<tr><td>225</td><td>⚠️</td><td>amazon.fr</td><td>[11 errors](#225-amazonfr)</td><td>[20 errors](#225-amazonfr)</td></tr>
<tr><td>226</td><td>⚠️</td><td>kompas.com</td><td>[2 errors](#226-kompascom)</td><td>[7 errors](#226-kompascom)</td></tr>
<tr><td>227</td><td>⚠️</td><td>sciencedirect.com</td><td>[6 errors](#227-sciencedirectcom)</td><td>[2 errors](#227-sciencedirectcom)</td></tr>
<tr><td>228</td><td>⚠️</td><td>liputan6.com</td><td>[5 errors](#228-liputan6com)</td><td>[5 errors](#228-liputan6com)</td></tr>
<tr><td>229</td><td>⚠️</td><td>zhihu.com</td><td>[3 errors](#229-zhihucom)</td><td>[17 errors](#229-zhihucom)</td></tr>
<tr><td>230</td><td>🆗</td><td>huanqiu.com</td><td>✅</td><td>✅</td></tr>
<tr><td>231</td><td>⚠️</td><td>1337x.to</td><td>[9 errors](#231-1337xto)</td><td>[16 errors](#231-1337xto)</td></tr>
<tr><td>232</td><td>⚠️</td><td>irctc.co.in</td><td>[15 errors](#232-irctccoin)</td><td>[12 errors](#232-irctccoin)</td></tr>
<tr><td>233</td><td>⚠️</td><td>hibids10.com</td><td colspan="2">–</td></tr>
<tr><td>234</td><td>⚠️</td><td>ladbible.com</td><td colspan="2">–</td></tr>
<tr><td>235</td><td>⚠️</td><td>exoclick.com</td><td>[2 errors](#235-exoclickcom)</td><td>[1 error](#235-exoclickcom)</td></tr>
<tr><td>236</td><td>⚠️</td><td>mama.cn</td><td>[16 errors](#236-mamacn)</td><td>[1 error](#236-mamacn)</td></tr>
<tr><td>237</td><td>⚠️</td><td>newsprofin.com</td><td colspan="2">–</td></tr>
<tr><td>238</td><td>🆗</td><td>metropcs.mobi</td><td>✅</td><td>✅</td></tr>
<tr><td>239</td><td>⚠️</td><td>rambler.ru</td><td>[17 errors](#239-ramblerru)</td><td>[5 errors](#239-ramblerru)</td></tr>
<tr><td>240</td><td>⚠️</td><td>amazon.it</td><td>[11 errors](#240-amazonit)</td><td>[20 errors](#240-amazonit)</td></tr>
<tr><td>241</td><td>⚠️</td><td>gamespot.com</td><td>[35 errors](#241-gamespotcom)</td><td>[34 errors](#241-gamespotcom)</td></tr>
<tr><td>242</td><td>⚠️</td><td>w3schools.com</td><td>[9 errors](#242-w3schoolscom)</td><td>[11 errors](#242-w3schoolscom)</td></tr>
<tr><td>243</td><td>⚠️</td><td>cloudfront.net</td><td colspan="2">–</td></tr>
<tr><td>244</td><td>⚠️</td><td>thewhizmarketing.com</td><td colspan="2">–</td></tr>
<tr><td>245</td><td>⚠️</td><td>caijing.com.cn</td><td colspan="2">–</td></tr>
<tr><td>246</td><td>🆗</td><td>bilibili.com</td><td>✅</td><td>✅</td></tr>
<tr><td>247</td><td>⚠️</td><td>speedtest.net</td><td colspan="2">–</td></tr>
<tr><td>248</td><td>⚠️</td><td>eastday.com</td><td colspan="2">–</td></tr>
<tr><td>249</td><td>⚠️</td><td>livejournal.com</td><td>[7 errors](#249-livejournalcom)</td><td>[11 errors](#249-livejournalcom)</td></tr>
<tr><td>250</td><td>⚠️</td><td>google.no</td><td>[5 errors](#250-googleno)</td><td>[28 errors](#250-googleno)</td></tr></table>

<!-- /table -->
