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

Update date: 2020-10-28T13:50:52.961Z

<!-- /date -->


<!-- table -->

* Sites: `250`
* Downloaded: `216` (34 failed)
* Parsed: `216` (0 failed)
* Validation passed: `14` (202 failed)

<table>
<thead>
<tr><th>#</th><th></th><th>Site</th><th>Parsing</th><th>Validation</th></tr>
</thead>
<tr><td>1</td><td>⚠️</td><td>google.com</td><td><a href="test-details.md#1-googlecom-parsing">4 errors</a></td><td><a href="test-details.md#1-googlecom-validation">16 errors</a></td></tr>
<tr><td>2</td><td>⚠️</td><td>youtube.com</td><td><a href="test-details.md#2-youtubecom-parsing">1 error</a></td><td><a href="test-details.md#2-youtubecom-validation">6 errors</a></td></tr>
<tr><td>3</td><td>⚠️</td><td>tmall.com</td><td><a href="test-details.md#3-tmallcom-parsing">16 errors</a></td><td><a href="test-details.md#3-tmallcom-validation">7 errors</a></td></tr>
<tr><td>4</td><td>⚠️</td><td>baidu.com</td><td colspan="2">–</td></tr>
<tr><td>5</td><td>⚠️</td><td>qq.com</td><td><a href="test-details.md#5-qqcom-parsing">8 errors</a></td><td><a href="test-details.md#5-qqcom-validation">25 errors</a></td></tr>
<tr><td>6</td><td>⚠️</td><td>sohu.com</td><td><a href="test-details.md#6-sohucom-parsing">38 errors</a></td><td><a href="test-details.md#6-sohucom-validation">10 errors</a></td></tr>
<tr><td>7</td><td>⚠️</td><td>taobao.com</td><td><a href="test-details.md#7-taobaocom-parsing">8 errors</a></td><td><a href="test-details.md#7-taobaocom-validation">5 errors</a></td></tr>
<tr><td>8</td><td>⚠️</td><td>facebook.com</td><td>✅</td><td><a href="test-details.md#8-facebookcom-validation">139 errors</a></td></tr>
<tr><td>9</td><td>⚠️</td><td>amazon.com</td><td><a href="test-details.md#9-amazoncom-parsing">15 errors</a></td><td><a href="test-details.md#9-amazoncom-validation">38 errors</a></td></tr>
<tr><td>10</td><td>⚠️</td><td>360.cn</td><td><a href="test-details.md#10-360cn-parsing">6 errors</a></td><td><a href="test-details.md#10-360cn-validation">4 errors</a></td></tr>
<tr><td>11</td><td>⚠️</td><td>yahoo.com</td><td>✅</td><td><a href="test-details.md#11-yahoocom-validation">4 errors</a></td></tr>
<tr><td>12</td><td>⚠️</td><td>zoom.us</td><td><a href="test-details.md#12-zoomus-parsing">66 errors</a></td><td><a href="test-details.md#12-zoomus-validation">18 errors</a></td></tr>
<tr><td>13</td><td>⚠️</td><td>jd.com</td><td><a href="test-details.md#13-jdcom-parsing">5 errors</a></td><td><a href="test-details.md#13-jdcom-validation">2 errors</a></td></tr>
<tr><td>14</td><td>⚠️</td><td>wikipedia.org</td><td>✅</td><td><a href="test-details.md#14-wikipediaorg-validation">2 errors</a></td></tr>
<tr><td>15</td><td>⚠️</td><td>weibo.com</td><td><a href="test-details.md#15-weibocom-parsing">9 errors</a></td><td><a href="test-details.md#15-weibocom-validation">10 errors</a></td></tr>
<tr><td>16</td><td>⚠️</td><td>sina.com.cn</td><td colspan="2">–</td></tr>
<tr><td>17</td><td>⚠️</td><td>live.com</td><td>✅</td><td><a href="test-details.md#17-livecom-validation">7 errors</a></td></tr>
<tr><td>18</td><td>⚠️</td><td>reddit.com</td><td><a href="test-details.md#18-redditcom-parsing">1 error</a></td><td><a href="test-details.md#18-redditcom-validation">9 errors</a></td></tr>
<tr><td>19</td><td>⚠️</td><td>microsoft.com</td><td><a href="test-details.md#19-microsoftcom-parsing">1 error</a></td><td><a href="test-details.md#19-microsoftcom-validation">18 errors</a></td></tr>
<tr><td>20</td><td>⚠️</td><td>xinhuanet.com</td><td><a href="test-details.md#20-xinhuanetcom-parsing">17 errors</a></td><td><a href="test-details.md#20-xinhuanetcom-validation">4 errors</a></td></tr>
<tr><td>21</td><td>⚠️</td><td>netflix.com</td><td>✅</td><td><a href="test-details.md#21-netflixcom-validation">27 errors</a></td></tr>
<tr><td>22</td><td>⚠️</td><td>office.com</td><td>✅</td><td><a href="test-details.md#22-officecom-validation">4 errors</a></td></tr>
<tr><td>23</td><td>⚠️</td><td>okezone.com</td><td>✅</td><td><a href="test-details.md#23-okezonecom-validation">30 errors</a></td></tr>
<tr><td>24</td><td>⚠️</td><td>vk.com</td><td><a href="test-details.md#24-vkcom-parsing">8 errors</a></td><td><a href="test-details.md#24-vkcom-validation">14 errors</a></td></tr>
<tr><td>25</td><td>⚠️</td><td>csdn.net</td><td><a href="test-details.md#25-csdnnet-parsing">15 errors</a></td><td><a href="test-details.md#25-csdnnet-validation">8 errors</a></td></tr>
<tr><td>26</td><td>⚠️</td><td>microsoftonline.com</td><td colspan="2">–</td></tr>
<tr><td>27</td><td>⚠️</td><td>instagram.com</td><td>✅</td><td><a href="test-details.md#27-instagramcom-validation">36 errors</a></td></tr>
<tr><td>28</td><td>⚠️</td><td>myshopify.com</td><td><a href="test-details.md#28-myshopifycom-parsing">2 errors</a></td><td><a href="test-details.md#28-myshopifycom-validation">4 errors</a></td></tr>
<tr><td>29</td><td>⚠️</td><td>zhanqi.tv</td><td><a href="test-details.md#29-zhanqitv-parsing">54 errors</a></td><td><a href="test-details.md#29-zhanqitv-validation">18 errors</a></td></tr>
<tr><td>30</td><td>⚠️</td><td>yahoo.co.jp</td><td>✅</td><td><a href="test-details.md#30-yahoocojp-validation">5 errors</a></td></tr>
<tr><td>31</td><td>⚠️</td><td>panda.tv</td><td colspan="2">–</td></tr>
<tr><td>32</td><td>🆗</td><td>alipay.com</td><td>✅</td><td>✅</td></tr>
<tr><td>33</td><td>⚠️</td><td>naver.com</td><td><a href="test-details.md#33-navercom-parsing">32 errors</a></td><td><a href="test-details.md#33-navercom-validation">3 errors</a></td></tr>
<tr><td>34</td><td>🆗</td><td>bongacams.com</td><td>✅</td><td>✅</td></tr>
<tr><td>35</td><td>🆗</td><td>bing.com</td><td>✅</td><td>✅</td></tr>
<tr><td>36</td><td>⚠️</td><td>amazon.in</td><td><a href="test-details.md#36-amazonin-parsing">15 errors</a></td><td><a href="test-details.md#36-amazonin-validation">38 errors</a></td></tr>
<tr><td>37</td><td>⚠️</td><td>google.com.hk</td><td><a href="test-details.md#37-googlecomhk-parsing">4 errors</a></td><td><a href="test-details.md#37-googlecomhk-validation">16 errors</a></td></tr>
<tr><td>38</td><td>⚠️</td><td>twitch.tv</td><td>✅</td><td><a href="test-details.md#38-twitchtv-validation">11 errors</a></td></tr>
<tr><td>39</td><td>⚠️</td><td>ebay.com</td><td><a href="test-details.md#39-ebaycom-parsing">10 errors</a></td><td><a href="test-details.md#39-ebaycom-validation">11 errors</a></td></tr>
<tr><td>40</td><td>⚠️</td><td>apple.com</td><td>✅</td><td><a href="test-details.md#40-applecom-validation">9 errors</a></td></tr>
<tr><td>41</td><td>⚠️</td><td>aliexpress.com</td><td><a href="test-details.md#41-aliexpresscom-parsing">2 errors</a></td><td><a href="test-details.md#41-aliexpresscom-validation">31 errors</a></td></tr>
<tr><td>42</td><td>⚠️</td><td>adobe.com</td><td colspan="2">–</td></tr>
<tr><td>43</td><td>⚠️</td><td>amazon.co.jp</td><td><a href="test-details.md#43-amazoncojp-parsing">15 errors</a></td><td><a href="test-details.md#43-amazoncojp-validation">40 errors</a></td></tr>
<tr><td>44</td><td>⚠️</td><td>sharepoint.com</td><td>✅</td><td><a href="test-details.md#44-sharepointcom-validation">21 errors</a></td></tr>
<tr><td>45</td><td>⚠️</td><td>google.co.in</td><td><a href="test-details.md#45-googlecoin-parsing">4 errors</a></td><td><a href="test-details.md#45-googlecoin-validation">16 errors</a></td></tr>
<tr><td>46</td><td>🆗</td><td>livejasmin.com</td><td>✅</td><td>✅</td></tr>
<tr><td>47</td><td>⚠️</td><td>yandex.ru</td><td><a href="test-details.md#47-yandexru-parsing">12 errors</a></td><td><a href="test-details.md#47-yandexru-validation">12 errors</a></td></tr>
<tr><td>48</td><td>⚠️</td><td>twitter.com</td><td>✅</td><td><a href="test-details.md#48-twittercom-validation">1 error</a></td></tr>
<tr><td>49</td><td>⚠️</td><td>tianya.cn</td><td colspan="2">–</td></tr>
<tr><td>50</td><td>⚠️</td><td>tribunnews.com</td><td><a href="test-details.md#50-tribunnewscom-parsing">6 errors</a></td><td><a href="test-details.md#50-tribunnewscom-validation">47 errors</a></td></tr>
<tr><td>51</td><td>⚠️</td><td>huanqiu.com</td><td colspan="2">–</td></tr>
<tr><td>52</td><td>⚠️</td><td>linkedin.com</td><td>✅</td><td><a href="test-details.md#52-linkedincom-validation">6 errors</a></td></tr>
<tr><td>53</td><td>⚠️</td><td>yy.com</td><td colspan="2">–</td></tr>
<tr><td>54</td><td>⚠️</td><td>dropbox.com</td><td><a href="test-details.md#54-dropboxcom-parsing">1 error</a></td><td><a href="test-details.md#54-dropboxcom-validation">20 errors</a></td></tr>
<tr><td>55</td><td>⚠️</td><td>instructure.com</td><td><a href="test-details.md#55-instructurecom-parsing">6 errors</a></td><td><a href="test-details.md#55-instructurecom-validation">9 errors</a></td></tr>
<tr><td>56</td><td>⚠️</td><td>aparat.com</td><td>✅</td><td><a href="test-details.md#56-aparatcom-validation">14 errors</a></td></tr>
<tr><td>57</td><td>🆗</td><td>google.cn</td><td>✅</td><td>✅</td></tr>
<tr><td>58</td><td>⚠️</td><td>sogou.com</td><td><a href="test-details.md#58-sogoucom-parsing">14 errors</a></td><td><a href="test-details.md#58-sogoucom-validation">15 errors</a></td></tr>
<tr><td>59</td><td>⚠️</td><td>msn.com</td><td>✅</td><td><a href="test-details.md#59-msncom-validation">6 errors</a></td></tr>
<tr><td>60</td><td>⚠️</td><td>wordpress.com</td><td>✅</td><td><a href="test-details.md#60-wordpresscom-validation">2 errors</a></td></tr>
<tr><td>61</td><td>🆗</td><td>chaturbate.com</td><td>✅</td><td>✅</td></tr>
<tr><td>62</td><td>⚠️</td><td>mail.ru</td><td><a href="test-details.md#62-mailru-parsing">7 errors</a></td><td><a href="test-details.md#62-mailru-validation">17 errors</a></td></tr>
<tr><td>63</td><td>⚠️</td><td>17ok.com</td><td><a href="test-details.md#63-17okcom-parsing">8 errors</a></td><td><a href="test-details.md#63-17okcom-validation">2 errors</a></td></tr>
<tr><td>64</td><td>🆗</td><td>pornhub.com</td><td>✅</td><td>✅</td></tr>
<tr><td>65</td><td>⚠️</td><td>1688.com</td><td><a href="test-details.md#65-1688com-parsing">4 errors</a></td><td><a href="test-details.md#65-1688com-validation">11 errors</a></td></tr>
<tr><td>66</td><td>⚠️</td><td>ok.ru</td><td><a href="test-details.md#66-okru-parsing">3 errors</a></td><td><a href="test-details.md#66-okru-validation">20 errors</a></td></tr>
<tr><td>67</td><td>⚠️</td><td>google.co.jp</td><td><a href="test-details.md#67-googlecojp-parsing">4 errors</a></td><td><a href="test-details.md#67-googlecojp-validation">16 errors</a></td></tr>
<tr><td>68</td><td>⚠️</td><td>whatsapp.com</td><td>✅</td><td><a href="test-details.md#68-whatsappcom-validation">9 errors</a></td></tr>
<tr><td>69</td><td>⚠️</td><td>amazonaws.com</td><td><a href="test-details.md#69-amazonawscom-parsing">4 errors</a></td><td><a href="test-details.md#69-amazonawscom-validation">11 errors</a></td></tr>
<tr><td>70</td><td>⚠️</td><td>mama.cn</td><td><a href="test-details.md#70-mamacn-parsing">16 errors</a></td><td><a href="test-details.md#70-mamacn-validation">1 error</a></td></tr>
<tr><td>71</td><td>⚠️</td><td>so.com</td><td><a href="test-details.md#71-socom-parsing">6 errors</a></td><td><a href="test-details.md#71-socom-validation">17 errors</a></td></tr>
<tr><td>72</td><td>⚠️</td><td>indeed.com</td><td>✅</td><td><a href="test-details.md#72-indeedcom-validation">14 errors</a></td></tr>
<tr><td>73</td><td>⚠️</td><td>alibaba.com</td><td><a href="test-details.md#73-alibabacom-parsing">6 errors</a></td><td><a href="test-details.md#73-alibabacom-validation">19 errors</a></td></tr>
<tr><td>74</td><td>⚠️</td><td>cnn.com</td><td>✅</td><td><a href="test-details.md#74-cnncom-validation">23 errors</a></td></tr>
<tr><td>75</td><td>⚠️</td><td>google.com.br</td><td><a href="test-details.md#75-googlecombr-parsing">4 errors</a></td><td><a href="test-details.md#75-googlecombr-validation">16 errors</a></td></tr>
<tr><td>76</td><td>⚠️</td><td>kumparan.com</td><td>✅</td><td><a href="test-details.md#76-kumparancom-validation">1 error</a></td></tr>
<tr><td>77</td><td>⚠️</td><td>etsy.com</td><td><a href="test-details.md#77-etsycom-parsing">2 errors</a></td><td><a href="test-details.md#77-etsycom-validation">14 errors</a></td></tr>
<tr><td>78</td><td>⚠️</td><td>imdb.com</td><td><a href="test-details.md#78-imdbcom-parsing">2 errors</a></td><td><a href="test-details.md#78-imdbcom-validation">15 errors</a></td></tr>
<tr><td>79</td><td>⚠️</td><td>jrj.com.cn</td><td colspan="2">–</td></tr>
<tr><td>80</td><td>⚠️</td><td>nytimes.com</td><td><a href="test-details.md#80-nytimescom-parsing">2 errors</a></td><td><a href="test-details.md#80-nytimescom-validation">15 errors</a></td></tr>
<tr><td>81</td><td>⚠️</td><td>freepik.com</td><td colspan="2">–</td></tr>
<tr><td>82</td><td>⚠️</td><td>flipkart.com</td><td colspan="2">–</td></tr>
<tr><td>83</td><td>⚠️</td><td>babytree.com</td><td><a href="test-details.md#83-babytreecom-parsing">19 errors</a></td><td><a href="test-details.md#83-babytreecom-validation">29 errors</a></td></tr>
<tr><td>84</td><td>⚠️</td><td>amazon.co.uk</td><td><a href="test-details.md#84-amazoncouk-parsing">15 errors</a></td><td><a href="test-details.md#84-amazoncouk-validation">38 errors</a></td></tr>
<tr><td>85</td><td>⚠️</td><td>rakuten.co.jp</td><td><a href="test-details.md#85-rakutencojp-parsing">25 errors</a></td><td><a href="test-details.md#85-rakutencojp-validation">19 errors</a></td></tr>
<tr><td>86</td><td>⚠️</td><td>spotify.com</td><td><a href="test-details.md#86-spotifycom-parsing">13 errors</a></td><td><a href="test-details.md#86-spotifycom-validation">9 errors</a></td></tr>
<tr><td>87</td><td>⚠️</td><td>alwafd.news</td><td><a href="test-details.md#87-alwafdnews-parsing">41 errors</a></td><td><a href="test-details.md#87-alwafdnews-validation">28 errors</a></td></tr>
<tr><td>88</td><td>⚠️</td><td>google.de</td><td><a href="test-details.md#88-googlede-parsing">4 errors</a></td><td><a href="test-details.md#88-googlede-validation">16 errors</a></td></tr>
<tr><td>89</td><td>⚠️</td><td>canva.com</td><td>✅</td><td><a href="test-details.md#89-canvacom-validation">1 error</a></td></tr>
<tr><td>90</td><td>⚠️</td><td>okta.com</td><td><a href="test-details.md#90-oktacom-parsing">1 error</a></td><td><a href="test-details.md#90-oktacom-validation">18 errors</a></td></tr>
<tr><td>91</td><td>⚠️</td><td>cnblogs.com</td><td colspan="2">–</td></tr>
<tr><td>92</td><td>⚠️</td><td>bbc.com</td><td><a href="test-details.md#92-bbccom-parsing">15 errors</a></td><td><a href="test-details.md#92-bbccom-validation">10 errors</a></td></tr>
<tr><td>93</td><td>⚠️</td><td>espn.com</td><td><a href="test-details.md#93-espncom-parsing">127 errors</a></td><td><a href="test-details.md#93-espncom-validation">47 errors</a></td></tr>
<tr><td>94</td><td>⚠️</td><td>walmart.com</td><td>✅</td><td><a href="test-details.md#94-walmartcom-validation">1 error</a></td></tr>
<tr><td>95</td><td>⚠️</td><td>kompas.com</td><td>✅</td><td><a href="test-details.md#95-kompascom-validation">1 error</a></td></tr>
<tr><td>96</td><td>🆗</td><td>xvideos.com</td><td>✅</td><td>✅</td></tr>
<tr><td>97</td><td>⚠️</td><td>google.fr</td><td><a href="test-details.md#97-googlefr-parsing">4 errors</a></td><td><a href="test-details.md#97-googlefr-validation">16 errors</a></td></tr>
<tr><td>98</td><td>⚠️</td><td>hao123.com</td><td colspan="2">–</td></tr>
<tr><td>99</td><td>⚠️</td><td>pixnet.net</td><td>✅</td><td><a href="test-details.md#99-pixnetnet-validation">1 error</a></td></tr>
<tr><td>100</td><td>⚠️</td><td>grid.id</td><td><a href="test-details.md#100-gridid-parsing">1 error</a></td><td><a href="test-details.md#100-gridid-validation">4 errors</a></td></tr>
<tr><td>101</td><td>⚠️</td><td>google.ru</td><td><a href="test-details.md#101-googleru-parsing">4 errors</a></td><td><a href="test-details.md#101-googleru-validation">16 errors</a></td></tr>
<tr><td>102</td><td>⚠️</td><td>detik.com</td><td><a href="test-details.md#102-detikcom-parsing">29 errors</a></td><td><a href="test-details.md#102-detikcom-validation">10 errors</a></td></tr>
<tr><td>103</td><td>⚠️</td><td>6.cn</td><td><a href="test-details.md#103-6cn-parsing">75 errors</a></td><td><a href="test-details.md#103-6cn-validation">7 errors</a></td></tr>
<tr><td>104</td><td>⚠️</td><td>thestartmagazine.com</td><td><a href="test-details.md#104-thestartmagazinecom-parsing">27 errors</a></td><td><a href="test-details.md#104-thestartmagazinecom-validation">48 errors</a></td></tr>
<tr><td>105</td><td>⚠️</td><td>wetransfer.com</td><td>✅</td><td><a href="test-details.md#105-wetransfercom-validation">11 errors</a></td></tr>
<tr><td>106</td><td>⚠️</td><td>google.es</td><td><a href="test-details.md#106-googlees-parsing">4 errors</a></td><td><a href="test-details.md#106-googlees-validation">12 errors</a></td></tr>
<tr><td>107</td><td>⚠️</td><td>stackexchange.com</td><td><a href="test-details.md#107-stackexchangecom-parsing">3 errors</a></td><td><a href="test-details.md#107-stackexchangecom-validation">10 errors</a></td></tr>
<tr><td>108</td><td>⚠️</td><td>ettoday.net</td><td><a href="test-details.md#108-ettodaynet-parsing">3 errors</a></td><td><a href="test-details.md#108-ettodaynet-validation">21 errors</a></td></tr>
<tr><td>109</td><td>🆗</td><td>udemy.com</td><td>✅</td><td>✅</td></tr>
<tr><td>110</td><td>⚠️</td><td>savefrom.net</td><td><a href="test-details.md#110-savefromnet-parsing">3 errors</a></td><td><a href="test-details.md#110-savefromnet-validation">2 errors</a></td></tr>
<tr><td>111</td><td>⚠️</td><td>zillow.com</td><td><a href="test-details.md#111-zillowcom-parsing">2 errors</a></td><td><a href="test-details.md#111-zillowcom-validation">9 errors</a></td></tr>
<tr><td>112</td><td>⚠️</td><td>tumblr.com</td><td><a href="test-details.md#112-tumblrcom-parsing">10 errors</a></td><td><a href="test-details.md#112-tumblrcom-validation">18 errors</a></td></tr>
<tr><td>113</td><td>⚠️</td><td>daum.net</td><td><a href="test-details.md#113-daumnet-parsing">7 errors</a></td><td><a href="test-details.md#113-daumnet-validation">2 errors</a></td></tr>
<tr><td>114</td><td>⚠️</td><td>zendesk.com</td><td><a href="test-details.md#114-zendeskcom-parsing">2 errors</a></td><td><a href="test-details.md#114-zendeskcom-validation">14 errors</a></td></tr>
<tr><td>115</td><td>⚠️</td><td>github.com</td><td><a href="test-details.md#115-githubcom-parsing">1 error</a></td><td><a href="test-details.md#115-githubcom-validation">32 errors</a></td></tr>
<tr><td>116</td><td>⚠️</td><td>padlet.com</td><td colspan="2">–</td></tr>
<tr><td>117</td><td>⚠️</td><td>sindonews.com</td><td>✅</td><td><a href="test-details.md#117-sindonewscom-validation">15 errors</a></td></tr>
<tr><td>118</td><td>⚠️</td><td>gome.com.cn</td><td colspan="2">–</td></tr>
<tr><td>119</td><td>⚠️</td><td>paypal.com</td><td>✅</td><td><a href="test-details.md#119-paypalcom-validation">18 errors</a></td></tr>
<tr><td>120</td><td>🆗</td><td>xhamster.com</td><td>✅</td><td>✅</td></tr>
<tr><td>121</td><td>⚠️</td><td>fandom.com</td><td>✅</td><td><a href="test-details.md#121-fandomcom-validation">12 errors</a></td></tr>
<tr><td>122</td><td>⚠️</td><td>stackoverflow.com</td><td><a href="test-details.md#122-stackoverflowcom-parsing">1 error</a></td><td><a href="test-details.md#122-stackoverflowcom-validation">11 errors</a></td></tr>
<tr><td>123</td><td>⚠️</td><td>roblox.com</td><td><a href="test-details.md#123-robloxcom-parsing">10 errors</a></td><td><a href="test-details.md#123-robloxcom-validation">3 errors</a></td></tr>
<tr><td>124</td><td>⚠️</td><td>amazon.de</td><td><a href="test-details.md#124-amazonde-parsing">15 errors</a></td><td><a href="test-details.md#124-amazonde-validation">40 errors</a></td></tr>
<tr><td>125</td><td>⚠️</td><td>soundcloud.com</td><td>✅</td><td><a href="test-details.md#125-soundcloudcom-validation">3 errors</a></td></tr>
<tr><td>126</td><td>⚠️</td><td>grammarly.com</td><td><a href="test-details.md#126-grammarlycom-parsing">387 errors</a></td><td><a href="test-details.md#126-grammarlycom-validation">132 errors</a></td></tr>
<tr><td>127</td><td>⚠️</td><td>telegram.org</td><td><a href="test-details.md#127-telegramorg-parsing">3 errors</a></td><td><a href="test-details.md#127-telegramorg-validation">7 errors</a></td></tr>
<tr><td>128</td><td>🆗</td><td>quizlet.com</td><td>✅</td><td>✅</td></tr>
<tr><td>129</td><td>⚠️</td><td>tradingview.com</td><td><a href="test-details.md#129-tradingviewcom-parsing">5 errors</a></td><td><a href="test-details.md#129-tradingviewcom-validation">16 errors</a></td></tr>
<tr><td>130</td><td>⚠️</td><td>shutterstock.com</td><td><a href="test-details.md#130-shutterstockcom-parsing">9 errors</a></td><td><a href="test-details.md#130-shutterstockcom-validation">22 errors</a></td></tr>
<tr><td>131</td><td>⚠️</td><td>google.it</td><td><a href="test-details.md#131-googleit-parsing">2 errors</a></td><td><a href="test-details.md#131-googleit-validation">10 errors</a></td></tr>
<tr><td>132</td><td>⚠️</td><td>nih.gov</td><td><a href="test-details.md#132-nihgov-parsing">23 errors</a></td><td><a href="test-details.md#132-nihgov-validation">12 errors</a></td></tr>
<tr><td>133</td><td>⚠️</td><td>primevideo.com</td><td><a href="test-details.md#133-primevideocom-parsing">41 errors</a></td><td><a href="test-details.md#133-primevideocom-validation">37 errors</a></td></tr>
<tr><td>134</td><td>⚠️</td><td>google.com.tw</td><td><a href="test-details.md#134-googlecomtw-parsing">4 errors</a></td><td><a href="test-details.md#134-googlecomtw-validation">16 errors</a></td></tr>
<tr><td>135</td><td>⚠️</td><td>ilovepdf.com</td><td><a href="test-details.md#135-ilovepdfcom-parsing">10 errors</a></td><td><a href="test-details.md#135-ilovepdfcom-validation">9 errors</a></td></tr>
<tr><td>136</td><td>⚠️</td><td>bilibili.com</td><td>✅</td><td><a href="test-details.md#136-bilibilicom-validation">6 errors</a></td></tr>
<tr><td>137</td><td>⚠️</td><td>bbc.co.uk</td><td><a href="test-details.md#137-bbccouk-parsing">15 errors</a></td><td><a href="test-details.md#137-bbccouk-validation">10 errors</a></td></tr>
<tr><td>138</td><td>⚠️</td><td>google.com.mx</td><td><a href="test-details.md#138-googlecommx-parsing">4 errors</a></td><td><a href="test-details.md#138-googlecommx-validation">16 errors</a></td></tr>
<tr><td>139</td><td>⚠️</td><td>salesforce.com</td><td><a href="test-details.md#139-salesforcecom-parsing">137 errors</a></td><td><a href="test-details.md#139-salesforcecom-validation">41 errors</a></td></tr>
<tr><td>140</td><td>⚠️</td><td>indiatimes.com</td><td>✅</td><td><a href="test-details.md#140-indiatimescom-validation">4 errors</a></td></tr>
<tr><td>141</td><td>⚠️</td><td>zhihu.com</td><td>✅</td><td><a href="test-details.md#141-zhihucom-validation">13 errors</a></td></tr>
<tr><td>142</td><td>⚠️</td><td>vimeo.com</td><td>✅</td><td><a href="test-details.md#142-vimeocom-validation">8 errors</a></td></tr>
<tr><td>143</td><td>⚠️</td><td>chase.com</td><td><a href="test-details.md#143-chasecom-parsing">3 errors</a></td><td><a href="test-details.md#143-chasecom-validation">6 errors</a></td></tr>
<tr><td>144</td><td>⚠️</td><td>theguardian.com</td><td>✅</td><td><a href="test-details.md#144-theguardiancom-validation">14 errors</a></td></tr>
<tr><td>145</td><td>⚠️</td><td>speedtest.net</td><td>✅</td><td><a href="test-details.md#145-speedtestnet-validation">2 errors</a></td></tr>
<tr><td>146</td><td>⚠️</td><td>onlinesbi.com</td><td colspan="2">–</td></tr>
<tr><td>147</td><td>⚠️</td><td>pikiran-rakyat.com</td><td><a href="test-details.md#147-pikiranrakyatcom-parsing">10 errors</a></td><td><a href="test-details.md#147-pikiranrakyatcom-validation">5 errors</a></td></tr>
<tr><td>148</td><td>⚠️</td><td>eastday.com</td><td><a href="test-details.md#148-eastdaycom-parsing">7 errors</a></td><td><a href="test-details.md#148-eastdaycom-validation">4 errors</a></td></tr>
<tr><td>149</td><td>⚠️</td><td>bet9ja.com</td><td><a href="test-details.md#149-bet9jacom-parsing">2 errors</a></td><td><a href="test-details.md#149-bet9jacom-validation">1 error</a></td></tr>
<tr><td>150</td><td>⚠️</td><td>wix.com</td><td>✅</td><td><a href="test-details.md#150-wixcom-validation">11 errors</a></td></tr>
<tr><td>151</td><td>⚠️</td><td>researchgate.net</td><td>✅</td><td><a href="test-details.md#151-researchgatenet-validation">2 errors</a></td></tr>
<tr><td>152</td><td>⚠️</td><td>booking.com</td><td><a href="test-details.md#152-bookingcom-parsing">27 errors</a></td><td><a href="test-details.md#152-bookingcom-validation">35 errors</a></td></tr>
<tr><td>153</td><td>⚠️</td><td>pixabay.com</td><td>✅</td><td><a href="test-details.md#153-pixabaycom-validation">1 error</a></td></tr>
<tr><td>154</td><td>⚠️</td><td>tiktok.com</td><td>✅</td><td><a href="test-details.md#154-tiktokcom-validation">27 errors</a></td></tr>
<tr><td>155</td><td>⚠️</td><td>google.com.sg</td><td><a href="test-details.md#155-googlecomsg-parsing">4 errors</a></td><td><a href="test-details.md#155-googlecomsg-validation">12 errors</a></td></tr>
<tr><td>156</td><td>⚠️</td><td>pinterest.com</td><td><a href="test-details.md#156-pinterestcom-parsing">2 errors</a></td><td><a href="test-details.md#156-pinterestcom-validation">16 errors</a></td></tr>
<tr><td>157</td><td>⚠️</td><td>amazon.ca</td><td><a href="test-details.md#157-amazonca-parsing">15 errors</a></td><td><a href="test-details.md#157-amazonca-validation">38 errors</a></td></tr>
<tr><td>158</td><td>⚠️</td><td>youm7.com</td><td colspan="2">–</td></tr>
<tr><td>159</td><td>⚠️</td><td>tokopedia.com</td><td colspan="2">–</td></tr>
<tr><td>160</td><td>⚠️</td><td>digikala.com</td><td><a href="test-details.md#160-digikalacom-parsing">5 errors</a></td><td><a href="test-details.md#160-digikalacom-validation">52 errors</a></td></tr>
<tr><td>161</td><td>⚠️</td><td>slideshare.net</td><td><a href="test-details.md#161-slidesharenet-parsing">5 errors</a></td><td><a href="test-details.md#161-slidesharenet-validation">10 errors</a></td></tr>
<tr><td>162</td><td>⚠️</td><td>craigslist.org</td><td><a href="test-details.md#162-craigslistorg-parsing">15 errors</a></td><td><a href="test-details.md#162-craigslistorg-validation">2 errors</a></td></tr>
<tr><td>163</td><td>⚠️</td><td>tistory.com</td><td><a href="test-details.md#163-tistorycom-parsing">23 errors</a></td><td><a href="test-details.md#163-tistorycom-validation">7 errors</a></td></tr>
<tr><td>164</td><td>⚠️</td><td>washingtonpost.com</td><td colspan="2">–</td></tr>
<tr><td>165</td><td>⚠️</td><td>google.com.tr</td><td><a href="test-details.md#165-googlecomtr-parsing">4 errors</a></td><td><a href="test-details.md#165-googlecomtr-validation">16 errors</a></td></tr>
<tr><td>166</td><td>⚠️</td><td>duckduckgo.com</td><td><a href="test-details.md#166-duckduckgocom-parsing">5 errors</a></td><td><a href="test-details.md#166-duckduckgocom-validation">15 errors</a></td></tr>
<tr><td>167</td><td>⚠️</td><td>163.com</td><td colspan="2">–</td></tr>
<tr><td>168</td><td>⚠️</td><td>hotstar.com</td><td colspan="2">–</td></tr>
<tr><td>169</td><td>⚠️</td><td>google.co.uk</td><td><a href="test-details.md#169-googlecouk-parsing">4 errors</a></td><td><a href="test-details.md#169-googlecouk-validation">16 errors</a></td></tr>
<tr><td>170</td><td>⚠️</td><td>avito.ru</td><td>✅</td><td><a href="test-details.md#170-avitoru-validation">7 errors</a></td></tr>
<tr><td>171</td><td>⚠️</td><td>forbes.com</td><td><a href="test-details.md#171-forbescom-parsing">2 errors</a></td><td><a href="test-details.md#171-forbescom-validation">17 errors</a></td></tr>
<tr><td>172</td><td>⚠️</td><td>setn.com</td><td colspan="2">–</td></tr>
<tr><td>173</td><td>⚠️</td><td>healthline.com</td><td><a href="test-details.md#173-healthlinecom-parsing">5 errors</a></td><td><a href="test-details.md#173-healthlinecom-validation">8 errors</a></td></tr>
<tr><td>174</td><td>⚠️</td><td>iqiyi.com</td><td colspan="2">–</td></tr>
<tr><td>175</td><td>⚠️</td><td>wellsfargo.com</td><td>✅</td><td><a href="test-details.md#175-wellsfargocom-validation">3 errors</a></td></tr>
<tr><td>176</td><td>⚠️</td><td>cnet.com</td><td><a href="test-details.md#176-cnetcom-parsing">66 errors</a></td><td><a href="test-details.md#176-cnetcom-validation">9 errors</a></td></tr>
<tr><td>177</td><td>⚠️</td><td>w3schools.com</td><td><a href="test-details.md#177-w3schoolscom-parsing">7 errors</a></td><td><a href="test-details.md#177-w3schoolscom-validation">19 errors</a></td></tr>
<tr><td>178</td><td>⚠️</td><td>rednet.cn</td><td colspan="2">–</td></tr>
<tr><td>179</td><td>⚠️</td><td>foxnews.com</td><td>✅</td><td><a href="test-details.md#179-foxnewscom-validation">4 errors</a></td></tr>
<tr><td>180</td><td>⚠️</td><td>ups.com</td><td><a href="test-details.md#180-upscom-parsing">33 errors</a></td><td><a href="test-details.md#180-upscom-validation">13 errors</a></td></tr>
<tr><td>181</td><td>⚠️</td><td>godaddy.com</td><td colspan="2">–</td></tr>
<tr><td>182</td><td>⚠️</td><td>mediafire.com</td><td><a href="test-details.md#182-mediafirecom-parsing">32 errors</a></td><td><a href="test-details.md#182-mediafirecom-validation">126 errors</a></td></tr>
<tr><td>183</td><td>⚠️</td><td>fedex.com</td><td><a href="test-details.md#183-fedexcom-parsing">28 errors</a></td><td><a href="test-details.md#183-fedexcom-validation">28 errors</a></td></tr>
<tr><td>184</td><td>⚠️</td><td>webex.com</td><td><a href="test-details.md#184-webexcom-parsing">3 errors</a></td><td><a href="test-details.md#184-webexcom-validation">31 errors</a></td></tr>
<tr><td>185</td><td>⚠️</td><td>force.com</td><td><a href="test-details.md#185-forcecom-parsing">137 errors</a></td><td><a href="test-details.md#185-forcecom-validation">41 errors</a></td></tr>
<tr><td>186</td><td>⚠️</td><td>bestbuy.com</td><td><a href="test-details.md#186-bestbuycom-parsing">1 error</a></td><td><a href="test-details.md#186-bestbuycom-validation">2 errors</a></td></tr>
<tr><td>187</td><td>⚠️</td><td>liputan6.com</td><td><a href="test-details.md#187-liputan6com-parsing">6 errors</a></td><td><a href="test-details.md#187-liputan6com-validation">6 errors</a></td></tr>
<tr><td>188</td><td>⚠️</td><td>investing.com</td><td colspan="2">–</td></tr>
<tr><td>189</td><td>⚠️</td><td>metropoles.com</td><td>✅</td><td><a href="test-details.md#189-metropolescom-validation">6 errors</a></td></tr>
<tr><td>190</td><td>⚠️</td><td>ca.gov</td><td><a href="test-details.md#190-cagov-parsing">9 errors</a></td><td><a href="test-details.md#190-cagov-validation">24 errors</a></td></tr>
<tr><td>191</td><td>⚠️</td><td>ikea.com</td><td>✅</td><td><a href="test-details.md#191-ikeacom-validation">22 errors</a></td></tr>
<tr><td>192</td><td>⚠️</td><td>worldometers.info</td><td><a href="test-details.md#192-worldometersinfo-parsing">17 errors</a></td><td><a href="test-details.md#192-worldometersinfo-validation">8 errors</a></td></tr>
<tr><td>193</td><td>⚠️</td><td>usps.com</td><td><a href="test-details.md#193-uspscom-parsing">10 errors</a></td><td><a href="test-details.md#193-uspscom-validation">11 errors</a></td></tr>
<tr><td>194</td><td>⚠️</td><td>line.me</td><td>✅</td><td><a href="test-details.md#194-lineme-validation">1 error</a></td></tr>
<tr><td>195</td><td>⚠️</td><td>google.ca</td><td><a href="test-details.md#195-googleca-parsing">4 errors</a></td><td><a href="test-details.md#195-googleca-validation">16 errors</a></td></tr>
<tr><td>196</td><td>⚠️</td><td>momoshop.com.tw</td><td colspan="2">–</td></tr>
<tr><td>197</td><td>⚠️</td><td>businessinsider.com</td><td>✅</td><td><a href="test-details.md#197-businessinsidercom-validation">8 errors</a></td></tr>
<tr><td>198</td><td>⚠️</td><td>google.com.sa</td><td><a href="test-details.md#198-googlecomsa-parsing">4 errors</a></td><td><a href="test-details.md#198-googlecomsa-validation">16 errors</a></td></tr>
<tr><td>199</td><td>⚠️</td><td>smallpdf.com</td><td>✅</td><td><a href="test-details.md#199-smallpdfcom-validation">4 errors</a></td></tr>
<tr><td>200</td><td>⚠️</td><td>skype.com</td><td><a href="test-details.md#200-skypecom-parsing">2 errors</a></td><td><a href="test-details.md#200-skypecom-validation">7 errors</a></td></tr>
<tr><td>201</td><td>⚠️</td><td>bukalapak.com</td><td>✅</td><td><a href="test-details.md#201-bukalapakcom-validation">5 errors</a></td></tr>
<tr><td>202</td><td>⚠️</td><td>wikihow.com</td><td><a href="test-details.md#202-wikihowcom-parsing">1 error</a></td><td><a href="test-details.md#202-wikihowcom-validation">9 errors</a></td></tr>
<tr><td>203</td><td>⚠️</td><td>varzesh3.com</td><td><a href="test-details.md#203-varzesh3com-parsing">1 error</a></td><td><a href="test-details.md#203-varzesh3com-validation">20 errors</a></td></tr>
<tr><td>204</td><td>⚠️</td><td>hdfcbank.com</td><td><a href="test-details.md#204-hdfcbankcom-parsing">18 errors</a></td><td><a href="test-details.md#204-hdfcbankcom-validation">35 errors</a></td></tr>
<tr><td>205</td><td>⚠️</td><td>box.com</td><td>✅</td><td><a href="test-details.md#205-boxcom-validation">29 errors</a></td></tr>
<tr><td>206</td><td>⚠️</td><td>suara.com</td><td><a href="test-details.md#206-suaracom-parsing">12 errors</a></td><td><a href="test-details.md#206-suaracom-validation">10 errors</a></td></tr>
<tr><td>207</td><td>⚠️</td><td>ebay.de</td><td><a href="test-details.md#207-ebayde-parsing">10 errors</a></td><td><a href="test-details.md#207-ebayde-validation">11 errors</a></td></tr>
<tr><td>208</td><td>⚠️</td><td>51.la</td><td>✅</td><td><a href="test-details.md#208-51la-validation">4 errors</a></td></tr>
<tr><td>209</td><td>⚠️</td><td>aliexpress.ru</td><td><a href="test-details.md#209-aliexpressru-parsing">2 errors</a></td><td><a href="test-details.md#209-aliexpressru-validation">36 errors</a></td></tr>
<tr><td>210</td><td>⚠️</td><td>google.com.ar</td><td><a href="test-details.md#210-googlecomar-parsing">4 errors</a></td><td><a href="test-details.md#210-googlecomar-validation">16 errors</a></td></tr>
<tr><td>211</td><td>⚠️</td><td>onmarshtompor.com</td><td colspan="2">–</td></tr>
<tr><td>212</td><td>⚠️</td><td>breitbart.com</td><td>✅</td><td><a href="test-details.md#212-breitbartcom-validation">3 errors</a></td></tr>
<tr><td>213</td><td>⚠️</td><td>deepl.com</td><td><a href="test-details.md#213-deeplcom-parsing">4 errors</a></td><td><a href="test-details.md#213-deeplcom-validation">10 errors</a></td></tr>
<tr><td>214</td><td>⚠️</td><td>blackboard.com</td><td><a href="test-details.md#214-blackboardcom-parsing">1 error</a></td><td><a href="test-details.md#214-blackboardcom-validation">8 errors</a></td></tr>
<tr><td>215</td><td>⚠️</td><td>google.com.eg</td><td><a href="test-details.md#215-googlecomeg-parsing">4 errors</a></td><td><a href="test-details.md#215-googlecomeg-validation">16 errors</a></td></tr>
<tr><td>216</td><td>⚠️</td><td>cnbc.com</td><td><a href="test-details.md#216-cnbccom-parsing">8 errors</a></td><td><a href="test-details.md#216-cnbccom-validation">17 errors</a></td></tr>
<tr><td>217</td><td>⚠️</td><td>360.com</td><td><a href="test-details.md#217-360com-parsing">6 errors</a></td><td><a href="test-details.md#217-360com-validation">4 errors</a></td></tr>
<tr><td>218</td><td>⚠️</td><td>fivethirtyeight.com</td><td><a href="test-details.md#218-fivethirtyeightcom-parsing">102 errors</a></td><td><a href="test-details.md#218-fivethirtyeightcom-validation">46 errors</a></td></tr>
<tr><td>219</td><td>🆗</td><td>chegg.com</td><td>✅</td><td>✅</td></tr>
<tr><td>220</td><td>⚠️</td><td>t.me</td><td><a href="test-details.md#220-tme-parsing">3 errors</a></td><td><a href="test-details.md#220-tme-validation">7 errors</a></td></tr>
<tr><td>221</td><td>⚠️</td><td>homedepot.com</td><td colspan="2">–</td></tr>
<tr><td>222</td><td>⚠️</td><td>amazon.cn</td><td><a href="test-details.md#222-amazoncn-parsing">13 errors</a></td><td><a href="test-details.md#222-amazoncn-validation">27 errors</a></td></tr>
<tr><td>223</td><td>⚠️</td><td>taboola.com</td><td>✅</td><td><a href="test-details.md#223-taboolacom-validation">5 errors</a></td></tr>
<tr><td>224</td><td>⚠️</td><td>haosou.com</td><td><a href="test-details.md#224-haosoucom-parsing">6 errors</a></td><td><a href="test-details.md#224-haosoucom-validation">17 errors</a></td></tr>
<tr><td>225</td><td>⚠️</td><td>uol.com.br</td><td><a href="test-details.md#225-uolcombr-parsing">103 errors</a></td><td><a href="test-details.md#225-uolcombr-validation">11 errors</a></td></tr>
<tr><td>226</td><td>⚠️</td><td>ladbible.com</td><td>✅</td><td><a href="test-details.md#226-ladbiblecom-validation">98 errors</a></td></tr>
<tr><td>227</td><td>⚠️</td><td>behance.net</td><td>✅</td><td><a href="test-details.md#227-behancenet-validation">13 errors</a></td></tr>
<tr><td>228</td><td>⚠️</td><td>51sole.com</td><td colspan="2">–</td></tr>
<tr><td>229</td><td>⚠️</td><td>target.com</td><td colspan="2">–</td></tr>
<tr><td>230</td><td>⚠️</td><td>borna.news</td><td><a href="test-details.md#230-bornanews-parsing">4 errors</a></td><td><a href="test-details.md#230-bornanews-validation">15 errors</a></td></tr>
<tr><td>231</td><td>⚠️</td><td>gosuslugi.ru</td><td>✅</td><td><a href="test-details.md#231-gosuslugiru-validation">1 error</a></td></tr>
<tr><td>232</td><td>⚠️</td><td>hulu.com</td><td>✅</td><td><a href="test-details.md#232-hulucom-validation">7 errors</a></td></tr>
<tr><td>233</td><td>🆗</td><td>zerodha.com</td><td><a href="test-details.md#233-zerodhacom-parsing">2 errors</a></td><td>✅</td></tr>
<tr><td>234</td><td>⚠️</td><td>kakao.com</td><td><a href="test-details.md#234-kakaocom-parsing">6 errors</a></td><td><a href="test-details.md#234-kakaocom-validation">11 errors</a></td></tr>
<tr><td>235</td><td>⚠️</td><td>namnak.com</td><td>✅</td><td><a href="test-details.md#235-namnakcom-validation">3 errors</a></td></tr>
<tr><td>236</td><td>⚠️</td><td>aliyun.com</td><td><a href="test-details.md#236-aliyuncom-parsing">17 errors</a></td><td><a href="test-details.md#236-aliyuncom-validation">12 errors</a></td></tr>
<tr><td>237</td><td>⚠️</td><td>ebay.co.uk</td><td><a href="test-details.md#237-ebaycouk-parsing">10 errors</a></td><td><a href="test-details.md#237-ebaycouk-validation">11 errors</a></td></tr>
<tr><td>238</td><td>⚠️</td><td>reverso.net</td><td><a href="test-details.md#238-reversonet-parsing">9 errors</a></td><td><a href="test-details.md#238-reversonet-validation">16 errors</a></td></tr>
<tr><td>239</td><td>⚠️</td><td>amazon.fr</td><td><a href="test-details.md#239-amazonfr-parsing">15 errors</a></td><td><a href="test-details.md#239-amazonfr-validation">38 errors</a></td></tr>
<tr><td>240</td><td>⚠️</td><td>heavy.com</td><td>✅</td><td><a href="test-details.md#240-heavycom-validation">3 errors</a></td></tr>
<tr><td>241</td><td>⚠️</td><td>japanpost.jp</td><td colspan="2">–</td></tr>
<tr><td>242</td><td>⚠️</td><td>google.co.th</td><td><a href="test-details.md#242-googlecoth-parsing">4 errors</a></td><td><a href="test-details.md#242-googlecoth-validation">16 errors</a></td></tr>
<tr><td>243</td><td>⚠️</td><td>bbcollab.com</td><td colspan="2">–</td></tr>
<tr><td>244</td><td>⚠️</td><td>sciencedirect.com</td><td><a href="test-details.md#244-sciencedirectcom-parsing">5 errors</a></td><td><a href="test-details.md#244-sciencedirectcom-validation">1 error</a></td></tr>
<tr><td>245</td><td>⚠️</td><td>medium.com</td><td>✅</td><td><a href="test-details.md#245-mediumcom-validation">2 errors</a></td></tr>
<tr><td>246</td><td>⚠️</td><td>merdeka.com</td><td><a href="test-details.md#246-merdekacom-parsing">27 errors</a></td><td><a href="test-details.md#246-merdekacom-validation">42 errors</a></td></tr>
<tr><td>247</td><td>⚠️</td><td>chouftv.ma</td><td><a href="test-details.md#247-chouftvma-parsing">1 error</a></td><td><a href="test-details.md#247-chouftvma-validation">23 errors</a></td></tr>
<tr><td>248</td><td>⚠️</td><td>icicibank.com</td><td colspan="2">–</td></tr>
<tr><td>249</td><td>🆗</td><td>t.co</td><td>✅</td><td>✅</td></tr>
<tr><td>250</td><td>⚠️</td><td>samsung.com</td><td><a href="test-details.md#250-samsungcom-parsing">23 errors</a></td><td><a href="test-details.md#250-samsungcom-validation">24 errors</a></td></tr></table>

<!-- /table -->
