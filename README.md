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

- [The list of CSS features used on Alexa TOP 250 sites](usage.md)
- [Dictionaries](scripts/usage) used for testing an existence of feature (mix of different sources and data found on Alexa TOP 250 sites)

## Alexa TOP 250

<!-- date -->

Update date: 2019-07-16T00:19:57.627Z

<!-- /date -->


<!-- table -->

* Sites: `250`
* Downloaded: `1` (249 failed)
* Parsed: `1` (0 failed)
* Validation passed: `0` (1 failed)

<table>
<thead>
<tr><th>#</th><th></th><th>Site</th><th>Parsing</th><th>Validation</th></tr>
</thead>
<tr><td>1</td><td>⚠️</td><td>google.com</td><td colspan="2">–</td></tr>
<tr><td>2</td><td>⚠️</td><td>youtube.com</td><td colspan="2">–</td></tr>
<tr><td>3</td><td>⚠️</td><td>baidu.com</td><td colspan="2">–</td></tr>
<tr><td>4</td><td>⚠️</td><td>facebook.com</td><td colspan="2">–</td></tr>
<tr><td>5</td><td>⚠️</td><td>qq.com</td><td colspan="2">–</td></tr>
<tr><td>6</td><td>⚠️</td><td>wikipedia.org</td><td colspan="2">–</td></tr>
<tr><td>7</td><td>⚠️</td><td>yahoo.com</td><td colspan="2">–</td></tr>
<tr><td>8</td><td>⚠️</td><td>tmall.com</td><td colspan="2">–</td></tr>
<tr><td>9</td><td>⚠️</td><td>taobao.com</td><td colspan="2">–</td></tr>
<tr><td>10</td><td>⚠️</td><td>sohu.com</td><td colspan="2">–</td></tr>
<tr><td>11</td><td>⚠️</td><td>vk.com</td><td colspan="2">–</td></tr>
<tr><td>12</td><td>⚠️</td><td>amazon.com</td><td colspan="2">–</td></tr>
<tr><td>13</td><td>⚠️</td><td>live.com</td><td colspan="2">–</td></tr>
<tr><td>14</td><td>⚠️</td><td>yandex.ru</td><td colspan="2">–</td></tr>
<tr><td>15</td><td>⚠️</td><td>sina.com.cn</td><td colspan="2">–</td></tr>
<tr><td>16</td><td>⚠️</td><td>twitter.com</td><td colspan="2">–</td></tr>
<tr><td>17</td><td>⚠️</td><td>weibo.com</td><td colspan="2">–</td></tr>
<tr><td>18</td><td>⚠️</td><td>jd.com</td><td colspan="2">–</td></tr>
<tr><td>19</td><td>⚠️</td><td>instagram.com</td><td colspan="2">–</td></tr>
<tr><td>20</td><td>⚠️</td><td>reddit.com</td><td colspan="2">–</td></tr>
<tr><td>21</td><td>⚠️</td><td>login.tmall.com</td><td colspan="2">–</td></tr>
<tr><td>22</td><td>⚠️</td><td>360.cn</td><td colspan="2">–</td></tr>
<tr><td>23</td><td>⚠️</td><td>blogspot.com</td><td colspan="2">–</td></tr>
<tr><td>24</td><td>⚠️</td><td>netflix.com</td><td colspan="2">–</td></tr>
<tr><td>25</td><td>⚠️</td><td>linkedin.com</td><td colspan="2">–</td></tr>
<tr><td>26</td><td>⚠️</td><td>alipay.com</td><td colspan="2">–</td></tr>
<tr><td>27</td><td>⚠️</td><td>csdn.net</td><td colspan="2">–</td></tr>
<tr><td>28</td><td>⚠️</td><td>pages.tmall.com</td><td colspan="2">–</td></tr>
<tr><td>29</td><td>⚠️</td><td>bing.com</td><td colspan="2">–</td></tr>
<tr><td>30</td><td>⚠️</td><td>pornhub.com</td><td colspan="2">–</td></tr>
<tr><td>31</td><td>⚠️</td><td>mail.ru</td><td colspan="2">–</td></tr>
<tr><td>32</td><td>⚠️</td><td>aliexpress.com</td><td colspan="2">–</td></tr>
<tr><td>33</td><td>⚠️</td><td>livejasmin.com</td><td colspan="2">–</td></tr>
<tr><td>34</td><td>⚠️</td><td>yahoo.co.jp</td><td colspan="2">–</td></tr>
<tr><td>35</td><td>⚠️</td><td>ebay.com</td><td colspan="2">–</td></tr>
<tr><td>36</td><td>⚠️</td><td>microsoft.com</td><td colspan="2">–</td></tr>
<tr><td>37</td><td>⚠️</td><td>whatsapp.com</td><td colspan="2">–</td></tr>
<tr><td>38</td><td>⚠️</td><td>tribunnews.com</td><td colspan="2">–</td></tr>
<tr><td>39</td><td>⚠️</td><td>google.com.hk</td><td colspan="2">–</td></tr>
<tr><td>40</td><td>⚠️</td><td>twitch.tv</td><td colspan="2">–</td></tr>
<tr><td>41</td><td>⚠️</td><td>google.co.in</td><td colspan="2">–</td></tr>
<tr><td>42</td><td>⚠️</td><td>naver.com</td><td colspan="2">–</td></tr>
<tr><td>43</td><td>⚠️</td><td>okezone.com</td><td colspan="2">–</td></tr>
<tr><td>44</td><td>⚠️</td><td>xvideos.com</td><td colspan="2">–</td></tr>
<tr><td>45</td><td>⚠️</td><td>office.com</td><td colspan="2">–</td></tr>
<tr><td>46</td><td>⚠️</td><td>hao123.com</td><td colspan="2">–</td></tr>
<tr><td>47</td><td>⚠️</td><td>msn.com</td><td colspan="2">–</td></tr>
<tr><td>48</td><td>⚠️</td><td>xhamster.com</td><td colspan="2">–</td></tr>
<tr><td>49</td><td>⚠️</td><td>imdb.com</td><td colspan="2">–</td></tr>
<tr><td>50</td><td>⚠️</td><td>paypal.com</td><td colspan="2">–</td></tr>
<tr><td>51</td><td>⚠️</td><td>soso.com</td><td colspan="2">–</td></tr>
<tr><td>52</td><td>⚠️</td><td>microsoftonline.com</td><td colspan="2">–</td></tr>
<tr><td>53</td><td>⚠️</td><td>amazon.co.jp</td><td colspan="2">–</td></tr>
<tr><td>54</td><td>⚠️</td><td>stackoverflow.com</td><td colspan="2">–</td></tr>
<tr><td>55</td><td>⚠️</td><td>wordpress.com</td><td colspan="2">–</td></tr>
<tr><td>56</td><td>⚠️</td><td>google.ru</td><td colspan="2">–</td></tr>
<tr><td>57</td><td>⚠️</td><td>github.com</td><td colspan="2">–</td></tr>
<tr><td>58</td><td>⚠️</td><td>163.com</td><td colspan="2">–</td></tr>
<tr><td>59</td><td>⚠️</td><td>fandom.com</td><td colspan="2">–</td></tr>
<tr><td>60</td><td>⚠️</td><td>google.de</td><td colspan="2">–</td></tr>
<tr><td>61</td><td>⚠️</td><td>apple.com</td><td colspan="2">–</td></tr>
<tr><td>62</td><td>⚠️</td><td>pinterest.com</td><td colspan="2">–</td></tr>
<tr><td>63</td><td>⚠️</td><td>amazon.in</td><td colspan="2">–</td></tr>
<tr><td>64</td><td>⚠️</td><td>so.com</td><td colspan="2">–</td></tr>
<tr><td>65</td><td>⚠️</td><td>xinhuanet.com</td><td colspan="2">–</td></tr>
<tr><td>66</td><td>⚠️</td><td>booking.com</td><td colspan="2">–</td></tr>
<tr><td>67</td><td>⚠️</td><td>bongacams.com</td><td colspan="2">–</td></tr>
<tr><td>68</td><td>⚠️</td><td>roblox.com</td><td colspan="2">–</td></tr>
<tr><td>69</td><td>⚠️</td><td>babytree.com</td><td colspan="2">–</td></tr>
<tr><td>70</td><td>⚠️</td><td>adobe.com</td><td colspan="2">–</td></tr>
<tr><td>71</td><td>⚠️</td><td>t.co</td><td colspan="2">–</td></tr>
<tr><td>72</td><td>⚠️</td><td>detail.tmall.com</td><td colspan="2">–</td></tr>
<tr><td>73</td><td>⚠️</td><td>google.fr</td><td colspan="2">–</td></tr>
<tr><td>74</td><td>⚠️</td><td>google.co.jp</td><td colspan="2">–</td></tr>
<tr><td>75</td><td>⚠️</td><td>tumblr.com</td><td colspan="2">–</td></tr>
<tr><td>76</td><td>⚠️</td><td>deloplen.com</td><td colspan="2">–</td></tr>
<tr><td>77</td><td>⚠️</td><td>bilibili.com</td><td colspan="2">–</td></tr>
<tr><td>78</td><td>⚠️</td><td>tianya.cn</td><td colspan="2">–</td></tr>
<tr><td>79</td><td>⚠️</td><td>dropbox.com</td><td colspan="2">–</td></tr>
<tr><td>80</td><td>⚠️</td><td>google.com.br</td><td colspan="2">–</td></tr>
<tr><td>81</td><td>⚠️</td><td>imgur.com</td><td colspan="2">–</td></tr>
<tr><td>82</td><td>⚠️</td><td>google.it</td><td colspan="2">–</td></tr>
<tr><td>83</td><td>⚠️</td><td>pixnet.net</td><td colspan="2">–</td></tr>
<tr><td>84</td><td>⚠️</td><td>onlinesbi.com</td><td colspan="2">–</td></tr>
<tr><td>85</td><td>⚠️</td><td>bbc.com</td><td colspan="2">–</td></tr>
<tr><td>86</td><td>⚠️</td><td>google.cn</td><td colspan="2">–</td></tr>
<tr><td>87</td><td>⚠️</td><td>cnblogs.com</td><td colspan="2">–</td></tr>
<tr><td>88</td><td>⚠️</td><td>amazon.de</td><td colspan="2">–</td></tr>
<tr><td>89</td><td>⚠️</td><td>detik.com</td><td colspan="2">–</td></tr>
<tr><td>90</td><td>⚠️</td><td>google.es</td><td colspan="2">–</td></tr>
<tr><td>91</td><td>⚠️</td><td>thestartmagazine.com</td><td colspan="2">–</td></tr>
<tr><td>92</td><td>⚠️</td><td>iqiyi.com</td><td colspan="2">–</td></tr>
<tr><td>93</td><td>⚠️</td><td>aparat.com</td><td colspan="2">–</td></tr>
<tr><td>94</td><td>⚠️</td><td>ettoday.net</td><td colspan="2">–</td></tr>
<tr><td>95</td><td>⚠️</td><td>xnxx.com</td><td colspan="2">–</td></tr>
<tr><td>96</td><td>⚠️</td><td>ok.ru</td><td colspan="2">–</td></tr>
<tr><td>97</td><td>⚠️</td><td>soundcloud.com</td><td colspan="2">–</td></tr>
<tr><td>98</td><td>⚠️</td><td>salesforce.com</td><td colspan="2">–</td></tr>
<tr><td>99</td><td>⚠️</td><td>youku.com</td><td colspan="2">–</td></tr>
<tr><td>100</td><td>⚠️</td><td>amazon.co.uk</td><td colspan="2">–</td></tr>
<tr><td>101</td><td>⚠️</td><td>mediafire.com</td><td colspan="2">–</td></tr>
<tr><td>102</td><td>⚠️</td><td>force.com</td><td colspan="2">–</td></tr>
<tr><td>103</td><td>⚠️</td><td>douyu.com</td><td colspan="2">–</td></tr>
<tr><td>104</td><td>⚠️</td><td>chase.com</td><td colspan="2">–</td></tr>
<tr><td>105</td><td>⚠️</td><td>cnn.com</td><td colspan="2">–</td></tr>
<tr><td>106</td><td>⚠️</td><td>quora.com</td><td colspan="2">–</td></tr>
<tr><td>107</td><td>⚠️</td><td>gmw.cn</td><td colspan="2">–</td></tr>
<tr><td>108</td><td>⚠️</td><td>1688.com</td><td colspan="2">–</td></tr>
<tr><td>109</td><td>⚠️</td><td>rakuten.co.jp</td><td colspan="2">–</td></tr>
<tr><td>110</td><td>⚠️</td><td>sogou.com</td><td colspan="2">–</td></tr>
<tr><td>111</td><td>⚠️</td><td>avito.ru</td><td colspan="2">–</td></tr>
<tr><td>112</td><td>⚠️</td><td>spotify.com</td><td colspan="2">–</td></tr>
<tr><td>113</td><td>⚠️</td><td>godaddy.com</td><td colspan="2">–</td></tr>
<tr><td>114</td><td>⚠️</td><td>cricbuzz.com</td><td colspan="2">–</td></tr>
<tr><td>115</td><td>⚠️</td><td>sindonews.com</td><td colspan="2">–</td></tr>
<tr><td>116</td><td>⚠️</td><td>ebay.de</td><td colspan="2">–</td></tr>
<tr><td>117</td><td>⚠️</td><td>amazonaws.com</td><td colspan="2">–</td></tr>
<tr><td>118</td><td>⚠️</td><td>bbc.co.uk</td><td colspan="2">–</td></tr>
<tr><td>119</td><td>⚠️</td><td>craigslist.org</td><td colspan="2">–</td></tr>
<tr><td>120</td><td>⚠️</td><td>gloyah.net</td><td colspan="2">–</td></tr>
<tr><td>121</td><td>⚠️</td><td>nicovideo.jp</td><td colspan="2">–</td></tr>
<tr><td>122</td><td>⚠️</td><td>google.com.mx</td><td colspan="2">–</td></tr>
<tr><td>123</td><td>⚠️</td><td>w3schools.com</td><td colspan="2">–</td></tr>
<tr><td>124</td><td>⚠️</td><td>google.co.uk</td><td colspan="2">–</td></tr>
<tr><td>125</td><td>⚠️</td><td>panda.tv</td><td colspan="2">–</td></tr>
<tr><td>126</td><td>⚠️</td><td>discordapp.com</td><td colspan="2">–</td></tr>
<tr><td>127</td><td>⚠️</td><td>nytimes.com</td><td colspan="2">–</td></tr>
<tr><td>128</td><td>⚠️</td><td>stackexchange.com</td><td colspan="2">–</td></tr>
<tr><td>129</td><td>⚠️</td><td>nih.gov</td><td colspan="2">–</td></tr>
<tr><td>130</td><td>⚠️</td><td>duckduckgo.com</td><td colspan="2">–</td></tr>
<tr><td>131</td><td>⚠️</td><td>hotstar.com</td><td colspan="2">–</td></tr>
<tr><td>132</td><td>⚠️</td><td>walmart.com</td><td colspan="2">–</td></tr>
<tr><td>133</td><td>⚠️</td><td>zhanqi.tv</td><td colspan="2">–</td></tr>
<tr><td>134</td><td>⚠️</td><td>uol.com.br</td><td colspan="2">–</td></tr>
<tr><td>135</td><td>⚠️</td><td>google.com.tw</td><td colspan="2">–</td></tr>
<tr><td>136</td><td>⚠️</td><td>china.com.cn</td><td colspan="2">–</td></tr>
<tr><td>137</td><td>⚠️</td><td>indeed.com</td><td colspan="2">–</td></tr>
<tr><td>138</td><td>⚠️</td><td>wetransfer.com</td><td colspan="2">–</td></tr>
<tr><td>139</td><td>⚠️</td><td>dailymotion.com</td><td colspan="2">–</td></tr>
<tr><td>140</td><td>⚠️</td><td>butheptesitrew.pro</td><td colspan="2">–</td></tr>
<tr><td>141</td><td>⚠️</td><td>espn.com</td><td colspan="2">–</td></tr>
<tr><td>142</td><td>⚠️</td><td>globo.com</td><td colspan="2">–</td></tr>
<tr><td>143</td><td>⚠️</td><td>flipkart.com</td><td colspan="2">–</td></tr>
<tr><td>144</td><td>⚠️</td><td>alibaba.com</td><td colspan="2">–</td></tr>
<tr><td>145</td><td>⚠️</td><td>youporn.com</td><td colspan="2">–</td></tr>
<tr><td>146</td><td>⚠️</td><td>myshopify.com</td><td colspan="2">–</td></tr>
<tr><td>147</td><td>⚠️</td><td>vimeo.com</td><td colspan="2">–</td></tr>
<tr><td>148</td><td>⚠️</td><td>researchgate.net</td><td colspan="2">–</td></tr>
<tr><td>149</td><td>⚠️</td><td>medium.com</td><td colspan="2">–</td></tr>
<tr><td>150</td><td>⚠️</td><td>onlinevideoconverter.com</td><td colspan="2">–</td></tr>
<tr><td>151</td><td>⚠️</td><td>mercadolivre.com.br</td><td colspan="2">–</td></tr>
<tr><td>152</td><td>⚠️</td><td>kompas.com</td><td colspan="2">–</td></tr>
<tr><td>153</td><td>⚠️</td><td>daum.net</td><td colspan="2">–</td></tr>
<tr><td>154</td><td>⚠️</td><td>canva.com</td><td colspan="2">–</td></tr>
<tr><td>155</td><td>⚠️</td><td>indiatimes.com</td><td colspan="2">–</td></tr>
<tr><td>156</td><td>⚠️</td><td>google.com.tr</td><td colspan="2">–</td></tr>
<tr><td>157</td><td>⚠️</td><td>savefrom.net</td><td colspan="2">–</td></tr>
<tr><td>158</td><td>⚠️</td><td>theguardian.com</td><td colspan="2">–</td></tr>
<tr><td>159</td><td>⚠️</td><td>bukalapak.com</td><td colspan="2">–</td></tr>
<tr><td>160</td><td>⚠️</td><td>yts.lt</td><td colspan="2">–</td></tr>
<tr><td>161</td><td>⚠️</td><td>wikihow.com</td><td colspan="2">–</td></tr>
<tr><td>162</td><td>⚠️</td><td>caijing.com.cn</td><td colspan="2">–</td></tr>
<tr><td>163</td><td>⚠️</td><td>blogger.com</td><td colspan="2">–</td></tr>
<tr><td>164</td><td>⚠️</td><td>chaturbate.com</td><td colspan="2">–</td></tr>
<tr><td>165</td><td>⚠️</td><td>shutterstock.com</td><td colspan="2">–</td></tr>
<tr><td>166</td><td>⚠️</td><td>freepik.com</td><td colspan="2">–</td></tr>
<tr><td>167</td><td>⚠️</td><td>ebay.co.uk</td><td colspan="2">–</td></tr>
<tr><td>168</td><td>⚠️</td><td>liputan6.com</td><td colspan="2">–</td></tr>
<tr><td>169</td><td>⚠️</td><td>softonic.com</td><td colspan="2">–</td></tr>
<tr><td>170</td><td>⚠️</td><td>deviantart.com</td><td colspan="2">–</td></tr>
<tr><td>171</td><td>⚠️</td><td>slideshare.net</td><td colspan="2">–</td></tr>
<tr><td>172</td><td>⚠️</td><td>cnet.com</td><td colspan="2">–</td></tr>
<tr><td>173</td><td>⚠️</td><td>etsy.com</td><td colspan="2">–</td></tr>
<tr><td>174</td><td>⚠️</td><td>eastday.com</td><td colspan="2">–</td></tr>
<tr><td>175</td><td>⚠️</td><td>aliyun.com</td><td colspan="2">–</td></tr>
<tr><td>176</td><td>⚠️</td><td>thepiratebay.org</td><td colspan="2">–</td></tr>
<tr><td>177</td><td>⚠️</td><td>youth.cn</td><td colspan="2">–</td></tr>
<tr><td>178</td><td>⚠️</td><td>grid.id</td><td colspan="2">–</td></tr>
<tr><td>179</td><td>⚠️</td><td>trello.com</td><td colspan="2">–</td></tr>
<tr><td>180</td><td>⚠️</td><td>exoclick.com</td><td colspan="2">–</td></tr>
<tr><td>181</td><td>⚠️</td><td>redd.it</td><td colspan="2">–</td></tr>
<tr><td>182</td><td>⚠️</td><td>ask.com</td><td colspan="2">–</td></tr>
<tr><td>183</td><td>⚠️</td><td>ltn.com.tw</td><td colspan="2">–</td></tr>
<tr><td>184</td><td>⚠️</td><td>google.ca</td><td colspan="2">–</td></tr>
<tr><td>185</td><td>⚠️</td><td>mama.cn</td><td colspan="2">–</td></tr>
<tr><td>186</td><td>⚠️</td><td>spankbang.com</td><td colspan="2">–</td></tr>
<tr><td>187</td><td>⚠️</td><td>huanqiu.com</td><td colspan="2">–</td></tr>
<tr><td>188</td><td>⚠️</td><td>fc2.com</td><td colspan="2">–</td></tr>
<tr><td>189</td><td>⚠️</td><td>twimg.com</td><td colspan="2">–</td></tr>
<tr><td>190</td><td>⚠️</td><td>amazon.fr</td><td colspan="2">–</td></tr>
<tr><td>191</td><td>⚠️</td><td>youm7.com</td><td colspan="2">–</td></tr>
<tr><td>192</td><td>⚠️</td><td>espncricinfo.com</td><td colspan="2">–</td></tr>
<tr><td>193</td><td>⚠️</td><td>rambler.ru</td><td colspan="2">–</td></tr>
<tr><td>194</td><td>⚠️</td><td>steamcommunity.com</td><td colspan="2">–</td></tr>
<tr><td>195</td><td>⚠️</td><td>archive.org</td><td colspan="2">–</td></tr>
<tr><td>196</td><td>⚠️</td><td>kinopoisk.ru</td><td colspan="2">–</td></tr>
<tr><td>197</td><td>⚠️</td><td>digikala.com</td><td colspan="2">–</td></tr>
<tr><td>198</td><td>⚠️</td><td>google.com.sg</td><td colspan="2">–</td></tr>
<tr><td>199</td><td>⚠️</td><td>bankofamerica.com</td><td colspan="2">–</td></tr>
<tr><td>200</td><td>⚠️</td><td>wellsfargo.com</td><td colspan="2">–</td></tr>
<tr><td>201</td><td>⚠️</td><td>gfycat.com</td><td colspan="2">–</td></tr>
<tr><td>202</td><td>⚠️</td><td>zhihu.com</td><td colspan="2">–</td></tr>
<tr><td>203</td><td>⚠️</td><td>scribd.com</td><td colspan="2">–</td></tr>
<tr><td>204</td><td>⚠️</td><td>speedtest.net</td><td colspan="2">–</td></tr>
<tr><td>205</td><td>⚠️</td><td>amazon.it</td><td colspan="2">–</td></tr>
<tr><td>206</td><td>⚠️</td><td>vice.com</td><td colspan="2">–</td></tr>
<tr><td>207</td><td>⚠️</td><td>foxnews.com</td><td colspan="2">–</td></tr>
<tr><td>208</td><td>⚠️</td><td>patria.org.ve</td><td colspan="2">–</td></tr>
<tr><td>209</td><td>⚠️</td><td>gamepedia.com</td><td colspan="2">–</td></tr>
<tr><td>210</td><td>⚠️</td><td>sciencedirect.com</td><td colspan="2">–</td></tr>
<tr><td>211</td><td>⚠️</td><td>google.pl</td><td colspan="2">–</td></tr>
<tr><td>212</td><td>⚠️</td><td>jianshu.com</td><td colspan="2">–</td></tr>
<tr><td>213</td><td>⚠️</td><td>amazon.es</td><td colspan="2">–</td></tr>
<tr><td>214</td><td>⚠️</td><td>ladbible.com</td><td colspan="2">–</td></tr>
<tr><td>215</td><td>⚠️</td><td>shopify.com</td><td colspan="2">–</td></tr>
<tr><td>216</td><td>⚠️</td><td>zillow.com</td><td colspan="2">–</td></tr>
<tr><td>217</td><td>⚠️</td><td>rednet.cn</td><td colspan="2">–</td></tr>
<tr><td>218</td><td>⚠️</td><td>yy.com</td><td colspan="2">–</td></tr>
<tr><td>219</td><td>⚠️</td><td>bet9ja.com</td><td colspan="2">–</td></tr>
<tr><td>220</td><td>⚠️</td><td>mega.nz</td><td colspan="2">–</td></tr>
<tr><td>221</td><td>⚠️</td><td>fiverr.com</td><td colspan="2">–</td></tr>
<tr><td>222</td><td>⚠️</td><td>livejournal.com</td><td colspan="2">–</td></tr>
<tr><td>223</td><td>⚠️</td><td>google.com.sa</td><td colspan="2">–</td></tr>
<tr><td>224</td><td>⚠️</td><td>google.co.th</td><td colspan="2">–</td></tr>
<tr><td>225</td><td>⚠️</td><td>rt.com</td><td><a href="test-details.md#225-rtcom-parsing">9 errors</a></td><td><a href="test-details.md#225-rtcom-validation">15 errors</a></td></tr>
<tr><td>226</td><td>⚠️</td><td>udemy.com</td><td colspan="2">–</td></tr>
<tr><td>227</td><td>⚠️</td><td>rutracker.org</td><td colspan="2">–</td></tr>
<tr><td>228</td><td>⚠️</td><td>messenger.com</td><td colspan="2">–</td></tr>
<tr><td>229</td><td>⚠️</td><td>steampowered.com</td><td colspan="2">–</td></tr>
<tr><td>230</td><td>⚠️</td><td>hesport.com</td><td colspan="2">–</td></tr>
<tr><td>231</td><td>⚠️</td><td>telegram.org</td><td colspan="2">–</td></tr>
<tr><td>232</td><td>⚠️</td><td>setn.com</td><td colspan="2">–</td></tr>
<tr><td>233</td><td>⚠️</td><td>bestbuy.com</td><td colspan="2">–</td></tr>
<tr><td>234</td><td>⚠️</td><td>primevideo.com</td><td colspan="2">–</td></tr>
<tr><td>235</td><td>⚠️</td><td>line.me</td><td colspan="2">–</td></tr>
<tr><td>236</td><td>⚠️</td><td>tripadvisor.com</td><td colspan="2">–</td></tr>
<tr><td>237</td><td>⚠️</td><td>google.com.ar</td><td colspan="2">–</td></tr>
<tr><td>238</td><td>⚠️</td><td>google.com.eg</td><td colspan="2">–</td></tr>
<tr><td>239</td><td>⚠️</td><td>google.co.id</td><td colspan="2">–</td></tr>
<tr><td>240</td><td>⚠️</td><td>chouftv.ma</td><td colspan="2">–</td></tr>
<tr><td>241</td><td>⚠️</td><td>zoho.com</td><td colspan="2">–</td></tr>
<tr><td>242</td><td>⚠️</td><td>yelp.com</td><td colspan="2">–</td></tr>
<tr><td>243</td><td>⚠️</td><td>washingtonpost.com</td><td colspan="2">–</td></tr>
<tr><td>244</td><td>⚠️</td><td>weather.com</td><td colspan="2">–</td></tr>
<tr><td>245</td><td>⚠️</td><td>zoom.us</td><td colspan="2">–</td></tr>
<tr><td>246</td><td>⚠️</td><td>3dmgame.com</td><td colspan="2">–</td></tr>
<tr><td>247</td><td>⚠️</td><td>cbbp1.com</td><td colspan="2">–</td></tr>
<tr><td>248</td><td>⚠️</td><td>gamersky.com</td><td colspan="2">–</td></tr>
<tr><td>249</td><td>⚠️</td><td>toutiao.com</td><td colspan="2">–</td></tr>
<tr><td>250</td><td>⚠️</td><td>mozilla.org</td><td colspan="2">–</td></tr></table>

<!-- /table -->
