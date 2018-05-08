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

Update date: 2018-05-08T22:30:10.373Z

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
<tr><td>1</td><td>⚠️</td><td>google.com</td><td><a href="test-details.md#1-googlecom-parsing">5 errors</a></td><td><a href="test-details.md#1-googlecom-validation">28 errors</a></td></tr>
<tr><td>2</td><td>⚠️</td><td>youtube.com</td><td><a href="test-details.md#2-youtubecom-parsing">4 errors</a></td><td><a href="test-details.md#2-youtubecom-validation">11 errors</a></td></tr>
<tr><td>3</td><td>⚠️</td><td>facebook.com</td><td>✅</td><td><a href="test-details.md#3-facebookcom-validation">3 errors</a></td></tr>
<tr><td>4</td><td>⚠️</td><td>baidu.com</td><td colspan="2">–</td></tr>
<tr><td>5</td><td>⚠️</td><td>wikipedia.org</td><td>✅</td><td><a href="test-details.md#5-wikipediaorg-validation">1 error</a></td></tr>
<tr><td>6</td><td>⚠️</td><td>reddit.com</td><td><a href="test-details.md#6-redditcom-parsing">8 errors</a></td><td><a href="test-details.md#6-redditcom-validation">12 errors</a></td></tr>
<tr><td>7</td><td>⚠️</td><td>yahoo.com</td><td><a href="test-details.md#7-yahoocom-parsing">40 errors</a></td><td><a href="test-details.md#7-yahoocom-validation">21 errors</a></td></tr>
<tr><td>8</td><td>⚠️</td><td>qq.com</td><td><a href="test-details.md#8-qqcom-parsing">35 errors</a></td><td><a href="test-details.md#8-qqcom-validation">1 error</a></td></tr>
<tr><td>9</td><td>⚠️</td><td>taobao.com</td><td><a href="test-details.md#9-taobaocom-parsing">8 errors</a></td><td><a href="test-details.md#9-taobaocom-validation">7 errors</a></td></tr>
<tr><td>10</td><td>⚠️</td><td>tmall.com</td><td><a href="test-details.md#10-tmallcom-parsing">22 errors</a></td><td><a href="test-details.md#10-tmallcom-validation">4 errors</a></td></tr>
<tr><td>11</td><td>⚠️</td><td>twitter.com</td><td><a href="test-details.md#11-twittercom-parsing">5 errors</a></td><td><a href="test-details.md#11-twittercom-validation">4 errors</a></td></tr>
<tr><td>12</td><td>⚠️</td><td>amazon.com</td><td><a href="test-details.md#12-amazoncom-parsing">13 errors</a></td><td><a href="test-details.md#12-amazoncom-validation">20 errors</a></td></tr>
<tr><td>13</td><td>⚠️</td><td>google.co.in</td><td><a href="test-details.md#13-googlecoin-parsing">5 errors</a></td><td><a href="test-details.md#13-googlecoin-validation">28 errors</a></td></tr>
<tr><td>14</td><td>⚠️</td><td>vk.com</td><td><a href="test-details.md#14-vkcom-parsing">77 errors</a></td><td><a href="test-details.md#14-vkcom-validation">4 errors</a></td></tr>
<tr><td>15</td><td>⚠️</td><td>instagram.com</td><td><a href="test-details.md#15-instagramcom-parsing">2 errors</a></td><td><a href="test-details.md#15-instagramcom-validation">12 errors</a></td></tr>
<tr><td>16</td><td>⚠️</td><td>sohu.com</td><td><a href="test-details.md#16-sohucom-parsing">22 errors</a></td><td><a href="test-details.md#16-sohucom-validation">5 errors</a></td></tr>
<tr><td>17</td><td>⚠️</td><td>jd.com</td><td><a href="test-details.md#17-jdcom-parsing">1error</a></td><td><a href="test-details.md#17-jdcom-validation">1 error</a></td></tr>
<tr><td>18</td><td>⚠️</td><td>live.com</td><td colspan="2">–</td></tr>
<tr><td>19</td><td>⚠️</td><td>sina.com.cn</td><td colspan="2">–</td></tr>
<tr><td>20</td><td>⚠️</td><td>weibo.com</td><td><a href="test-details.md#20-weibocom-parsing">9 errors</a></td><td><a href="test-details.md#20-weibocom-validation">13 errors</a></td></tr>
<tr><td>21</td><td>⚠️</td><td>360.cn</td><td><a href="test-details.md#21-360cn-parsing">5 errors</a></td><td><a href="test-details.md#21-360cn-validation">4 errors</a></td></tr>
<tr><td>22</td><td>⚠️</td><td>yandex.ru</td><td>✅</td><td><a href="test-details.md#22-yandexru-validation">7 errors</a></td></tr>
<tr><td>23</td><td>⚠️</td><td>netflix.com</td><td>✅</td><td><a href="test-details.md#23-netflixcom-validation">3 errors</a></td></tr>
<tr><td>24</td><td>⚠️</td><td>twitch.tv</td><td><a href="test-details.md#24-twitchtv-parsing">1error</a></td><td><a href="test-details.md#24-twitchtv-validation">9 errors</a></td></tr>
<tr><td>25</td><td>⚠️</td><td>login.tmall.com</td><td><a href="test-details.md#25-logintmallcom-parsing">7 errors</a></td><td><a href="test-details.md#25-logintmallcom-validation">3 errors</a></td></tr>
<tr><td>26</td><td>⚠️</td><td>pornhub.com</td><td><a href="test-details.md#26-pornhubcom-parsing">1error</a></td><td><a href="test-details.md#26-pornhubcom-validation">23 errors</a></td></tr>
<tr><td>27</td><td>⚠️</td><td>google.ru</td><td><a href="test-details.md#27-googleru-parsing">5 errors</a></td><td><a href="test-details.md#27-googleru-validation">28 errors</a></td></tr>
<tr><td>28</td><td>⚠️</td><td>google.co.uk</td><td><a href="test-details.md#28-googlecouk-parsing">5 errors</a></td><td><a href="test-details.md#28-googlecouk-validation">28 errors</a></td></tr>
<tr><td>29</td><td>⚠️</td><td>google.com.br</td><td><a href="test-details.md#29-googlecombr-parsing">5 errors</a></td><td><a href="test-details.md#29-googlecombr-validation">28 errors</a></td></tr>
<tr><td>30</td><td>⚠️</td><td>google.com.hk</td><td><a href="test-details.md#30-googlecomhk-parsing">5 errors</a></td><td><a href="test-details.md#30-googlecomhk-validation">28 errors</a></td></tr>
<tr><td>31</td><td>⚠️</td><td>google.de</td><td><a href="test-details.md#31-googlede-parsing">5 errors</a></td><td><a href="test-details.md#31-googlede-validation">28 errors</a></td></tr>
<tr><td>32</td><td>⚠️</td><td>google.co.jp</td><td><a href="test-details.md#32-googlecojp-parsing">5 errors</a></td><td><a href="test-details.md#32-googlecojp-validation">28 errors</a></td></tr>
<tr><td>33</td><td>⚠️</td><td>google.fr</td><td><a href="test-details.md#33-googlefr-parsing">5 errors</a></td><td><a href="test-details.md#33-googlefr-validation">28 errors</a></td></tr>
<tr><td>34</td><td>⚠️</td><td>yahoo.co.jp</td><td><a href="test-details.md#34-yahoocojp-parsing">4 errors</a></td><td><a href="test-details.md#34-yahoocojp-validation">8 errors</a></td></tr>
<tr><td>35</td><td>⚠️</td><td>bing.com</td><td><a href="test-details.md#35-bingcom-parsing">14 errors</a></td><td><a href="test-details.md#35-bingcom-validation">2 errors</a></td></tr>
<tr><td>36</td><td>⚠️</td><td>ebay.com</td><td><a href="test-details.md#36-ebaycom-parsing">30 errors</a></td><td><a href="test-details.md#36-ebaycom-validation">22 errors</a></td></tr>
<tr><td>37</td><td>⚠️</td><td>xvideos.com</td><td><a href="test-details.md#37-xvideoscom-parsing">7 errors</a></td><td><a href="test-details.md#37-xvideoscom-validation">5 errors</a></td></tr>
<tr><td>38</td><td>🆗</td><td>t.co</td><td>✅</td><td>✅</td></tr>
<tr><td>39</td><td>⚠️</td><td>imgur.com</td><td><a href="test-details.md#39-imgurcom-parsing">33 errors</a></td><td><a href="test-details.md#39-imgurcom-validation">15 errors</a></td></tr>
<tr><td>40</td><td>🆗</td><td>alipay.com</td><td>✅</td><td>✅</td></tr>
<tr><td>41</td><td>⚠️</td><td>csdn.net</td><td><a href="test-details.md#41-csdnnet-parsing">14 errors</a></td><td><a href="test-details.md#41-csdnnet-validation">7 errors</a></td></tr>
<tr><td>42</td><td>⚠️</td><td>ok.ru</td><td><a href="test-details.md#42-okru-parsing">2 errors</a></td><td><a href="test-details.md#42-okru-validation">18 errors</a></td></tr>
<tr><td>43</td><td>⚠️</td><td>wikia.com</td><td><a href="test-details.md#43-wikiacom-parsing">2 errors</a></td><td><a href="test-details.md#43-wikiacom-validation">9 errors</a></td></tr>
<tr><td>44</td><td>⚠️</td><td>google.it</td><td><a href="test-details.md#44-googleit-parsing">5 errors</a></td><td><a href="test-details.md#44-googleit-validation">28 errors</a></td></tr>
<tr><td>45</td><td>⚠️</td><td>microsoft.com</td><td><a href="test-details.md#45-microsoftcom-parsing">1error</a></td><td><a href="test-details.md#45-microsoftcom-validation">28 errors</a></td></tr>
<tr><td>46</td><td>⚠️</td><td>google.ca</td><td><a href="test-details.md#46-googleca-parsing">5 errors</a></td><td><a href="test-details.md#46-googleca-validation">28 errors</a></td></tr>
<tr><td>47</td><td>⚠️</td><td>pages.tmall.com</td><td><a href="test-details.md#47-pagestmallcom-parsing">4 errors</a></td><td><a href="test-details.md#47-pagestmallcom-validation">3 errors</a></td></tr>
<tr><td>48</td><td>⚠️</td><td>imdb.com</td><td><a href="test-details.md#48-imdbcom-parsing">21 errors</a></td><td><a href="test-details.md#48-imdbcom-validation">24 errors</a></td></tr>
<tr><td>49</td><td>⚠️</td><td>mail.ru</td><td><a href="test-details.md#49-mailru-parsing">7 errors</a></td><td><a href="test-details.md#49-mailru-validation">11 errors</a></td></tr>
<tr><td>50</td><td>⚠️</td><td>tumblr.com</td><td><a href="test-details.md#50-tumblrcom-parsing">10 errors</a></td><td><a href="test-details.md#50-tumblrcom-validation">19 errors</a></td></tr>
<tr><td>51</td><td>⚠️</td><td>aliexpress.com</td><td><a href="test-details.md#51-aliexpresscom-parsing">55 errors</a></td><td><a href="test-details.md#51-aliexpresscom-validation">34 errors</a></td></tr>
<tr><td>52</td><td>⚠️</td><td>google.es</td><td><a href="test-details.md#52-googlees-parsing">5 errors</a></td><td><a href="test-details.md#52-googlees-validation">28 errors</a></td></tr>
<tr><td>53</td><td>⚠️</td><td>xhamster.com</td><td colspan="2">–</td></tr>
<tr><td>54</td><td>⚠️</td><td>msn.com</td><td>✅</td><td><a href="test-details.md#54-msncom-validation">5 errors</a></td></tr>
<tr><td>55</td><td>⚠️</td><td>linkedin.com</td><td colspan="2">–</td></tr>
<tr><td>56</td><td>🆗</td><td>deloton.com</td><td>✅</td><td>✅</td></tr>
<tr><td>57</td><td>⚠️</td><td>google.com.mx</td><td><a href="test-details.md#57-googlecommx-parsing">5 errors</a></td><td><a href="test-details.md#57-googlecommx-validation">28 errors</a></td></tr>
<tr><td>58</td><td>⚠️</td><td>amazon.co.jp</td><td><a href="test-details.md#58-amazoncojp-parsing">11 errors</a></td><td><a href="test-details.md#58-amazoncojp-validation">20 errors</a></td></tr>
<tr><td>59</td><td>🆗</td><td>popads.net</td><td>✅</td><td>✅</td></tr>
<tr><td>60</td><td>⚠️</td><td>hao123.com</td><td><a href="test-details.md#60-hao123com-parsing">23 errors</a></td><td><a href="test-details.md#60-hao123com-validation">2 errors</a></td></tr>
<tr><td>61</td><td>⚠️</td><td>wordpress.com</td><td><a href="test-details.md#61-wordpresscom-parsing">2 errors</a></td><td><a href="test-details.md#61-wordpresscom-validation">6 errors</a></td></tr>
<tr><td>62</td><td>⚠️</td><td>office.com</td><td>✅</td><td><a href="test-details.md#62-officecom-validation">3 errors</a></td></tr>
<tr><td>63</td><td>⚠️</td><td>whatsapp.com</td><td>✅</td><td><a href="test-details.md#63-whatsappcom-validation">10 errors</a></td></tr>
<tr><td>64</td><td>⚠️</td><td>google.com.tw</td><td><a href="test-details.md#64-googlecomtw-parsing">5 errors</a></td><td><a href="test-details.md#64-googlecomtw-validation">28 errors</a></td></tr>
<tr><td>65</td><td>⚠️</td><td>google.com.tr</td><td><a href="test-details.md#65-googlecomtr-parsing">5 errors</a></td><td><a href="test-details.md#65-googlecomtr-validation">28 errors</a></td></tr>
<tr><td>66</td><td>⚠️</td><td>livejasmin.com</td><td colspan="2">–</td></tr>
<tr><td>67</td><td>⚠️</td><td>blogspot.com</td><td>✅</td><td><a href="test-details.md#67-blogspotcom-validation">11 errors</a></td></tr>
<tr><td>68</td><td>⚠️</td><td>bongacams.com</td><td><a href="test-details.md#68-bongacamscom-parsing">44 errors</a></td><td><a href="test-details.md#68-bongacamscom-validation">7 errors</a></td></tr>
<tr><td>69</td><td>⚠️</td><td>google.com.au</td><td><a href="test-details.md#69-googlecomau-parsing">5 errors</a></td><td><a href="test-details.md#69-googlecomau-validation">28 errors</a></td></tr>
<tr><td>70</td><td>⚠️</td><td>xnxx.com</td><td><a href="test-details.md#70-xnxxcom-parsing">7 errors</a></td><td><a href="test-details.md#70-xnxxcom-validation">3 errors</a></td></tr>
<tr><td>71</td><td>⚠️</td><td>paypal.com</td><td><a href="test-details.md#71-paypalcom-parsing">7 errors</a></td><td><a href="test-details.md#71-paypalcom-validation">8 errors</a></td></tr>
<tr><td>72</td><td>⚠️</td><td>microsoftonline.com</td><td colspan="2">–</td></tr>
<tr><td>73</td><td>⚠️</td><td>github.com</td><td>✅</td><td><a href="test-details.md#73-githubcom-validation">15 errors</a></td></tr>
<tr><td>74</td><td>⚠️</td><td>apple.com</td><td>✅</td><td><a href="test-details.md#74-applecom-validation">6 errors</a></td></tr>
<tr><td>75</td><td>⚠️</td><td>tribunnews.com</td><td><a href="test-details.md#75-tribunnewscom-parsing">9 errors</a></td><td><a href="test-details.md#75-tribunnewscom-validation">12 errors</a></td></tr>
<tr><td>76</td><td>⚠️</td><td>stackoverflow.com</td><td><a href="test-details.md#76-stackoverflowcom-parsing">1error</a></td><td><a href="test-details.md#76-stackoverflowcom-validation">10 errors</a></td></tr>
<tr><td>77</td><td>⚠️</td><td>diply.com</td><td><a href="test-details.md#77-diplycom-parsing">2 errors</a></td><td><a href="test-details.md#77-diplycom-validation">2 errors</a></td></tr>
<tr><td>78</td><td>⚠️</td><td>savefrom.net</td><td><a href="test-details.md#78-savefromnet-parsing">7 errors</a></td><td><a href="test-details.md#78-savefromnet-validation">9 errors</a></td></tr>
<tr><td>79</td><td>⚠️</td><td>providr.com</td><td><a href="test-details.md#79-providrcom-parsing">8 errors</a></td><td><a href="test-details.md#79-providrcom-validation">10 errors</a></td></tr>
<tr><td>80</td><td>⚠️</td><td>pinterest.com</td><td><a href="test-details.md#80-pinterestcom-parsing">7 errors</a></td><td><a href="test-details.md#80-pinterestcom-validation">41 errors</a></td></tr>
<tr><td>81</td><td>⚠️</td><td>fbcdn.net</td><td>✅</td><td><a href="test-details.md#81-fbcdnnet-validation">3 errors</a></td></tr>
<tr><td>82</td><td>⚠️</td><td>chaturbate.com</td><td>✅</td><td><a href="test-details.md#82-chaturbatecom-validation">6 errors</a></td></tr>
<tr><td>83</td><td>⚠️</td><td>google.pl</td><td><a href="test-details.md#83-googlepl-parsing">5 errors</a></td><td><a href="test-details.md#83-googlepl-validation">28 errors</a></td></tr>
<tr><td>84</td><td>⚠️</td><td>amazon.de</td><td><a href="test-details.md#84-amazonde-parsing">11 errors</a></td><td><a href="test-details.md#84-amazonde-validation">20 errors</a></td></tr>
<tr><td>85</td><td>⚠️</td><td>youth.cn</td><td colspan="2">–</td></tr>
<tr><td>86</td><td>⚠️</td><td>soso.com</td><td><a href="test-details.md#86-sosocom-parsing">15 errors</a></td><td><a href="test-details.md#86-sosocom-validation">27 errors</a></td></tr>
<tr><td>87</td><td>⚠️</td><td>txxx.com</td><td><a href="test-details.md#87-txxxcom-parsing">14 errors</a></td><td><a href="test-details.md#87-txxxcom-validation">5 errors</a></td></tr>
<tr><td>88</td><td>⚠️</td><td>coccoc.com</td><td><a href="test-details.md#88-coccoccom-parsing">6 errors</a></td><td><a href="test-details.md#88-coccoccom-validation">9 errors</a></td></tr>
<tr><td>89</td><td>⚠️</td><td>google.co.id</td><td colspan="2">–</td></tr>
<tr><td>90</td><td>⚠️</td><td>detail.tmall.com</td><td><a href="test-details.md#90-detailtmallcom-parsing">4 errors</a></td><td><a href="test-details.md#90-detailtmallcom-validation">3 errors</a></td></tr>
<tr><td>91</td><td>⚠️</td><td>k618.cn</td><td><a href="test-details.md#91-k618cn-parsing">8 errors</a></td><td><a href="test-details.md#91-k618cn-validation">2 errors</a></td></tr>
<tr><td>92</td><td>⚠️</td><td>pixnet.net</td><td colspan="2">–</td></tr>
<tr><td>93</td><td>⚠️</td><td>roblox.com</td><td colspan="2">–</td></tr>
<tr><td>94</td><td>⚠️</td><td>adobe.com</td><td><a href="test-details.md#94-adobecom-parsing">3 errors</a></td><td><a href="test-details.md#94-adobecom-validation">25 errors</a></td></tr>
<tr><td>95</td><td>🆗</td><td>thepiratebay.org</td><td>✅</td><td>✅</td></tr>
<tr><td>96</td><td>⚠️</td><td>thestartmagazine.com</td><td>✅</td><td><a href="test-details.md#96-thestartmagazinecom-validation">11 errors</a></td></tr>
<tr><td>97</td><td>⚠️</td><td>googleusercontent.com</td><td colspan="2">–</td></tr>
<tr><td>98</td><td>⚠️</td><td>bbc.com</td><td><a href="test-details.md#98-bbccom-parsing">16 errors</a></td><td><a href="test-details.md#98-bbccom-validation">9 errors</a></td></tr>
<tr><td>99</td><td>⚠️</td><td>google.com.ua</td><td><a href="test-details.md#99-googlecomua-parsing">5 errors</a></td><td><a href="test-details.md#99-googlecomua-validation">28 errors</a></td></tr>
<tr><td>100</td><td>⚠️</td><td>amazon.in</td><td><a href="test-details.md#100-amazonin-parsing">11 errors</a></td><td><a href="test-details.md#100-amazonin-validation">20 errors</a></td></tr>
<tr><td>101</td><td>⚠️</td><td>nicovideo.jp</td><td><a href="test-details.md#101-nicovideojp-parsing">4 errors</a></td><td><a href="test-details.md#101-nicovideojp-validation">9 errors</a></td></tr>
<tr><td>102</td><td>⚠️</td><td>dailymotion.com</td><td colspan="2">–</td></tr>
<tr><td>103</td><td>⚠️</td><td>craigslist.org</td><td><a href="test-details.md#103-craigslistorg-parsing">14 errors</a></td><td><a href="test-details.md#103-craigslistorg-validation">3 errors</a></td></tr>
<tr><td>104</td><td>⚠️</td><td>amazon.co.uk</td><td><a href="test-details.md#104-amazoncouk-parsing">11 errors</a></td><td><a href="test-details.md#104-amazoncouk-validation">20 errors</a></td></tr>
<tr><td>105</td><td>⚠️</td><td>google.com.ar</td><td colspan="2">–</td></tr>
<tr><td>106</td><td>⚠️</td><td>restorecosm.bid</td><td><a href="test-details.md#106-restorecosmbid-parsing">14 errors</a></td><td><a href="test-details.md#106-restorecosmbid-validation">40 errors</a></td></tr>
<tr><td>107</td><td>⚠️</td><td>espn.com</td><td><a href="test-details.md#107-espncom-parsing">310 errors</a></td><td><a href="test-details.md#107-espncom-validation">38 errors</a></td></tr>
<tr><td>108</td><td>⚠️</td><td>soundcloud.com</td><td>✅</td><td><a href="test-details.md#108-soundcloudcom-validation">3 errors</a></td></tr>
<tr><td>109</td><td>⚠️</td><td>bbc.co.uk</td><td><a href="test-details.md#109-bbccouk-parsing">16 errors</a></td><td><a href="test-details.md#109-bbccouk-validation">12 errors</a></td></tr>
<tr><td>110</td><td>⚠️</td><td>google.co.th</td><td><a href="test-details.md#110-googlecoth-parsing">5 errors</a></td><td><a href="test-details.md#110-googlecoth-validation">28 errors</a></td></tr>
<tr><td>111</td><td>⚠️</td><td>quora.com</td><td><a href="test-details.md#111-quoracom-parsing">11 errors</a></td><td><a href="test-details.md#111-quoracom-validation">74 errors</a></td></tr>
<tr><td>112</td><td>⚠️</td><td>so.com</td><td><a href="test-details.md#112-socom-parsing">6 errors</a></td><td><a href="test-details.md#112-socom-validation">14 errors</a></td></tr>
<tr><td>113</td><td>⚠️</td><td>booking.com</td><td><a href="test-details.md#113-bookingcom-parsing">48 errors</a></td><td><a href="test-details.md#113-bookingcom-validation">38 errors</a></td></tr>
<tr><td>114</td><td>⚠️</td><td>dkn.tv</td><td><a href="test-details.md#114-dkntv-parsing">16 errors</a></td><td><a href="test-details.md#114-dkntv-validation">12 errors</a></td></tr>
<tr><td>115</td><td>⚠️</td><td>openload.co</td><td><a href="test-details.md#115-openloadco-parsing">17 errors</a></td><td><a href="test-details.md#115-openloadco-validation">2 errors</a></td></tr>
<tr><td>116</td><td>⚠️</td><td>xinhuanet.com</td><td><a href="test-details.md#116-xinhuanetcom-parsing">32 errors</a></td><td><a href="test-details.md#116-xinhuanetcom-validation">5 errors</a></td></tr>
<tr><td>117</td><td>⚠️</td><td>onlinesbi.com</td><td><a href="test-details.md#117-onlinesbicom-parsing">4 errors</a></td><td><a href="test-details.md#117-onlinesbicom-validation">5 errors</a></td></tr>
<tr><td>118</td><td>🆗</td><td>ask.com</td><td><a href="test-details.md#118-askcom-parsing">9 errors</a></td><td>✅</td></tr>
<tr><td>119</td><td>⚠️</td><td>google.com.eg</td><td><a href="test-details.md#119-googlecomeg-parsing">5 errors</a></td><td><a href="test-details.md#119-googlecomeg-validation">28 errors</a></td></tr>
<tr><td>120</td><td>⚠️</td><td>dropbox.com</td><td><a href="test-details.md#120-dropboxcom-parsing">8 errors</a></td><td><a href="test-details.md#120-dropboxcom-validation">17 errors</a></td></tr>
<tr><td>121</td><td>⚠️</td><td>google.com.sa</td><td><a href="test-details.md#121-googlecomsa-parsing">5 errors</a></td><td><a href="test-details.md#121-googlecomsa-validation">28 errors</a></td></tr>
<tr><td>122</td><td>⚠️</td><td>tokopedia.com</td><td><a href="test-details.md#122-tokopediacom-parsing">36 errors</a></td><td><a href="test-details.md#122-tokopediacom-validation">52 errors</a></td></tr>
<tr><td>123</td><td>⚠️</td><td>discordapp.com</td><td><a href="test-details.md#123-discordappcom-parsing">1error</a></td><td><a href="test-details.md#123-discordappcom-validation">28 errors</a></td></tr>
<tr><td>124</td><td>⚠️</td><td>fc2.com</td><td><a href="test-details.md#124-fc2com-parsing">3 errors</a></td><td><a href="test-details.md#124-fc2com-validation">4 errors</a></td></tr>
<tr><td>125</td><td>⚠️</td><td>google.com.pk</td><td><a href="test-details.md#125-googlecompk-parsing">5 errors</a></td><td><a href="test-details.md#125-googlecompk-validation">28 errors</a></td></tr>
<tr><td>126</td><td>⚠️</td><td>exdynsrv.com</td><td colspan="2">–</td></tr>
<tr><td>127</td><td>⚠️</td><td>nytimes.com</td><td><a href="test-details.md#127-nytimescom-parsing">28 errors</a></td><td><a href="test-details.md#127-nytimescom-validation">23 errors</a></td></tr>
<tr><td>128</td><td>⚠️</td><td>tianya.cn</td><td><a href="test-details.md#128-tianyacn-parsing">11 errors</a></td><td><a href="test-details.md#128-tianyacn-validation">2 errors</a></td></tr>
<tr><td>129</td><td>⚠️</td><td>amazonaws.com</td><td><a href="test-details.md#129-amazonawscom-parsing">61 errors</a></td><td><a href="test-details.md#129-amazonawscom-validation">14 errors</a></td></tr>
<tr><td>130</td><td>⚠️</td><td>theepochtimes.com</td><td colspan="2">–</td></tr>
<tr><td>131</td><td>⚠️</td><td>ebay.de</td><td><a href="test-details.md#131-ebayde-parsing">16 errors</a></td><td><a href="test-details.md#131-ebayde-validation">15 errors</a></td></tr>
<tr><td>132</td><td>⚠️</td><td>mediafire.com</td><td><a href="test-details.md#132-mediafirecom-parsing">43 errors</a></td><td><a href="test-details.md#132-mediafirecom-validation">45 errors</a></td></tr>
<tr><td>133</td><td>⚠️</td><td>douyu.com</td><td><a href="test-details.md#133-douyucom-parsing">46 errors</a></td><td><a href="test-details.md#133-douyucom-validation">18 errors</a></td></tr>
<tr><td>134</td><td>⚠️</td><td>ettoday.net</td><td colspan="2">–</td></tr>
<tr><td>135</td><td>⚠️</td><td>ntd.tv</td><td><a href="test-details.md#135-ntdtv-parsing">4 errors</a></td><td><a href="test-details.md#135-ntdtv-validation">2 errors</a></td></tr>
<tr><td>136</td><td>⚠️</td><td>cnn.com</td><td colspan="2">–</td></tr>
<tr><td>137</td><td>⚠️</td><td>spotify.com</td><td>✅</td><td><a href="test-details.md#137-spotifycom-validation">6 errors</a></td></tr>
<tr><td>138</td><td>⚠️</td><td>stackexchange.com</td><td><a href="test-details.md#138-stackexchangecom-parsing">3 errors</a></td><td><a href="test-details.md#138-stackexchangecom-validation">9 errors</a></td></tr>
<tr><td>139</td><td>⚠️</td><td>rakuten.co.jp</td><td colspan="2">–</td></tr>
<tr><td>140</td><td>⚠️</td><td>1688.com</td><td><a href="test-details.md#140-1688com-parsing">20 errors</a></td><td><a href="test-details.md#140-1688com-validation">9 errors</a></td></tr>
<tr><td>141</td><td>⚠️</td><td>aparat.com</td><td colspan="2">–</td></tr>
<tr><td>142</td><td>⚠️</td><td>steamcommunity.com</td><td><a href="test-details.md#142-steamcommunitycom-parsing">11 errors</a></td><td><a href="test-details.md#142-steamcommunitycom-validation">1 error</a></td></tr>
<tr><td>143</td><td>🆗</td><td>google.cn</td><td>✅</td><td>✅</td></tr>
<tr><td>144</td><td>⚠️</td><td>cnblogs.com</td><td>✅</td><td><a href="test-details.md#144-cnblogscom-validation">1 error</a></td></tr>
<tr><td>145</td><td>⚠️</td><td>deviantart.com</td><td><a href="test-details.md#145-deviantartcom-parsing">123 errors</a></td><td><a href="test-details.md#145-deviantartcom-validation">85 errors</a></td></tr>
<tr><td>146</td><td>⚠️</td><td>bet9ja.com</td><td><a href="test-details.md#146-bet9jacom-parsing">9 errors</a></td><td><a href="test-details.md#146-bet9jacom-validation">1 error</a></td></tr>
<tr><td>147</td><td>⚠️</td><td>google.nl</td><td><a href="test-details.md#147-googlenl-parsing">5 errors</a></td><td><a href="test-details.md#147-googlenl-validation">28 errors</a></td></tr>
<tr><td>148</td><td>⚠️</td><td>avito.ru</td><td><a href="test-details.md#148-avitoru-parsing">14 errors</a></td><td><a href="test-details.md#148-avitoru-validation">13 errors</a></td></tr>
<tr><td>149</td><td>⚠️</td><td>softonic.com</td><td><a href="test-details.md#149-softoniccom-parsing">2 errors</a></td><td><a href="test-details.md#149-softoniccom-validation">11 errors</a></td></tr>
<tr><td>150</td><td>⚠️</td><td>google.co.za</td><td><a href="test-details.md#150-googlecoza-parsing">5 errors</a></td><td><a href="test-details.md#150-googlecoza-validation">28 errors</a></td></tr>
<tr><td>151</td><td>⚠️</td><td>nextoptim.com</td><td colspan="2">–</td></tr>
<tr><td>152</td><td>⚠️</td><td>detik.com</td><td colspan="2">–</td></tr>
<tr><td>153</td><td>⚠️</td><td>google.az</td><td><a href="test-details.md#153-googleaz-parsing">5 errors</a></td><td><a href="test-details.md#153-googleaz-validation">28 errors</a></td></tr>
<tr><td>154</td><td>⚠️</td><td>4chan.org</td><td>✅</td><td><a href="test-details.md#154-4chanorg-validation">2 errors</a></td></tr>
<tr><td>155</td><td>⚠️</td><td>ebay.co.uk</td><td><a href="test-details.md#155-ebaycouk-parsing">16 errors</a></td><td><a href="test-details.md#155-ebaycouk-validation">15 errors</a></td></tr>
<tr><td>156</td><td>⚠️</td><td>hotmovs.com</td><td><a href="test-details.md#156-hotmovscom-parsing">35 errors</a></td><td><a href="test-details.md#156-hotmovscom-validation">3 errors</a></td></tr>
<tr><td>157</td><td>⚠️</td><td>vimeo.com</td><td><a href="test-details.md#157-vimeocom-parsing">7 errors</a></td><td><a href="test-details.md#157-vimeocom-validation">10 errors</a></td></tr>
<tr><td>158</td><td>⚠️</td><td>theguardian.com</td><td>✅</td><td><a href="test-details.md#158-theguardiancom-validation">21 errors</a></td></tr>
<tr><td>159</td><td>🆗</td><td>doublepimpssl.com</td><td>✅</td><td>✅</td></tr>
<tr><td>160</td><td>⚠️</td><td>nih.gov</td><td><a href="test-details.md#160-nihgov-parsing">24 errors</a></td><td><a href="test-details.md#160-nihgov-validation">9 errors</a></td></tr>
<tr><td>161</td><td>⚠️</td><td>oath.com</td><td><a href="test-details.md#161-oathcom-parsing">3 errors</a></td><td><a href="test-details.md#161-oathcom-validation">7 errors</a></td></tr>
<tr><td>162</td><td>⚠️</td><td>chase.com</td><td><a href="test-details.md#162-chasecom-parsing">8 errors</a></td><td><a href="test-details.md#162-chasecom-validation">23 errors</a></td></tr>
<tr><td>163</td><td>⚠️</td><td>flipkart.com</td><td colspan="2">–</td></tr>
<tr><td>164</td><td>⚠️</td><td>dailymail.co.uk</td><td><a href="test-details.md#164-dailymailcouk-parsing">41 errors</a></td><td><a href="test-details.md#164-dailymailcouk-validation">30 errors</a></td></tr>
<tr><td>165</td><td>⚠️</td><td>google.com.vn</td><td><a href="test-details.md#165-googlecomvn-parsing">5 errors</a></td><td><a href="test-details.md#165-googlecomvn-validation">28 errors</a></td></tr>
<tr><td>166</td><td>⚠️</td><td>google.co.ve</td><td><a href="test-details.md#166-googlecove-parsing">5 errors</a></td><td><a href="test-details.md#166-googlecove-validation">28 errors</a></td></tr>
<tr><td>167</td><td>⚠️</td><td>bukalapak.com</td><td><a href="test-details.md#167-bukalapakcom-parsing">20 errors</a></td><td><a href="test-details.md#167-bukalapakcom-validation">26 errors</a></td></tr>
<tr><td>168</td><td>⚠️</td><td>cricbuzz.com</td><td><a href="test-details.md#168-cricbuzzcom-parsing">3 errors</a></td><td><a href="test-details.md#168-cricbuzzcom-validation">2 errors</a></td></tr>
<tr><td>169</td><td>⚠️</td><td>yts.am</td><td><a href="test-details.md#169-ytsam-parsing">64 errors</a></td><td><a href="test-details.md#169-ytsam-validation">9 errors</a></td></tr>
<tr><td>170</td><td>⚠️</td><td>bles.com</td><td><a href="test-details.md#170-blescom-parsing">15 errors</a></td><td><a href="test-details.md#170-blescom-validation">14 errors</a></td></tr>
<tr><td>171</td><td>⚠️</td><td>hotstar.com</td><td><a href="test-details.md#171-hotstarcom-parsing">29 errors</a></td><td><a href="test-details.md#171-hotstarcom-validation">24 errors</a></td></tr>
<tr><td>172</td><td>⚠️</td><td>mozilla.org</td><td>✅</td><td><a href="test-details.md#172-mozillaorg-validation">2 errors</a></td></tr>
<tr><td>173</td><td>⚠️</td><td>bet365.com</td><td colspan="2">–</td></tr>
<tr><td>174</td><td>⚠️</td><td>google.se</td><td><a href="test-details.md#174-googlese-parsing">5 errors</a></td><td><a href="test-details.md#174-googlese-validation">28 errors</a></td></tr>
<tr><td>175</td><td>⚠️</td><td>cnet.com</td><td><a href="test-details.md#175-cnetcom-parsing">33 errors</a></td><td><a href="test-details.md#175-cnetcom-validation">9 errors</a></td></tr>
<tr><td>176</td><td>⚠️</td><td>twimg.com</td><td colspan="2">–</td></tr>
<tr><td>177</td><td>⚠️</td><td>lifedaily.com</td><td><a href="test-details.md#177-lifedailycom-parsing">39 errors</a></td><td><a href="test-details.md#177-lifedailycom-validation">11 errors</a></td></tr>
<tr><td>178</td><td>⚠️</td><td>redtube.com</td><td>✅</td><td><a href="test-details.md#178-redtubecom-validation">3 errors</a></td></tr>
<tr><td>179</td><td>⚠️</td><td>myfastappz.com</td><td>✅</td><td><a href="test-details.md#179-myfastappzcom-validation">4 errors</a></td></tr>
<tr><td>180</td><td>⚠️</td><td>fapmeth.com</td><td><a href="test-details.md#180-fapmethcom-parsing">5 errors</a></td><td><a href="test-details.md#180-fapmethcom-validation">28 errors</a></td></tr>
<tr><td>181</td><td>⚠️</td><td>digitaldsp.com</td><td colspan="2">–</td></tr>
<tr><td>182</td><td>⚠️</td><td>walmart.com</td><td><a href="test-details.md#182-walmartcom-parsing">3 errors</a></td><td><a href="test-details.md#182-walmartcom-validation">4 errors</a></td></tr>
<tr><td>183</td><td>⚠️</td><td>globo.com</td><td><a href="test-details.md#183-globocom-parsing">16 errors</a></td><td><a href="test-details.md#183-globocom-validation">8 errors</a></td></tr>
<tr><td>184</td><td>⚠️</td><td>google.com.co</td><td><a href="test-details.md#184-googlecomco-parsing">5 errors</a></td><td><a href="test-details.md#184-googlecomco-validation">28 errors</a></td></tr>
<tr><td>185</td><td>⚠️</td><td>crptentry.com</td><td colspan="2">–</td></tr>
<tr><td>186</td><td>⚠️</td><td>google.com.sg</td><td><a href="test-details.md#186-googlecomsg-parsing">5 errors</a></td><td><a href="test-details.md#186-googlecomsg-validation">28 errors</a></td></tr>
<tr><td>187</td><td>⚠️</td><td>onlinevideoconverter.com</td><td><a href="test-details.md#187-onlinevideoconvertercom-parsing">16 errors</a></td><td><a href="test-details.md#187-onlinevideoconvertercom-validation">7 errors</a></td></tr>
<tr><td>188</td><td>🆗</td><td>mega.nz</td><td>✅</td><td>✅</td></tr>
<tr><td>189</td><td>⚠️</td><td>slideshare.net</td><td colspan="2">–</td></tr>
<tr><td>190</td><td>⚠️</td><td>doubleclick.net</td><td>✅</td><td><a href="test-details.md#190-doubleclicknet-validation">11 errors</a></td></tr>
<tr><td>191</td><td>⚠️</td><td>steampowered.com</td><td><a href="test-details.md#191-steampoweredcom-parsing">36 errors</a></td><td><a href="test-details.md#191-steampoweredcom-validation">2 errors</a></td></tr>
<tr><td>192</td><td>⚠️</td><td>etsy.com</td><td><a href="test-details.md#192-etsycom-parsing">126 errors</a></td><td><a href="test-details.md#192-etsycom-validation">12 errors</a></td></tr>
<tr><td>193</td><td>⚠️</td><td>yelp.com</td><td><a href="test-details.md#193-yelpcom-parsing">8 errors</a></td><td><a href="test-details.md#193-yelpcom-validation">14 errors</a></td></tr>
<tr><td>194</td><td>⚠️</td><td>speakol.com</td><td><a href="test-details.md#194-speakolcom-parsing">17 errors</a></td><td><a href="test-details.md#194-speakolcom-validation">4 errors</a></td></tr>
<tr><td>195</td><td>⚠️</td><td>google.gr</td><td><a href="test-details.md#195-googlegr-parsing">5 errors</a></td><td><a href="test-details.md#195-googlegr-validation">28 errors</a></td></tr>
<tr><td>196</td><td>⚠️</td><td>wikihow.com</td><td><a href="test-details.md#196-wikihowcom-parsing">17 errors</a></td><td><a href="test-details.md#196-wikihowcom-validation">11 errors</a></td></tr>
<tr><td>197</td><td>⚠️</td><td>mercadolivre.com.br</td><td>✅</td><td><a href="test-details.md#197-mercadolivrecombr-validation">3 errors</a></td></tr>
<tr><td>198</td><td>⚠️</td><td>igmatik.com</td><td><a href="test-details.md#198-igmatikcom-parsing">27 errors</a></td><td><a href="test-details.md#198-igmatikcom-validation">17 errors</a></td></tr>
<tr><td>199</td><td>⚠️</td><td>hulu.com</td><td>✅</td><td><a href="test-details.md#199-hulucom-validation">6 errors</a></td></tr>
<tr><td>200</td><td>⚠️</td><td>jf71qh5v14.com</td><td colspan="2">–</td></tr>
<tr><td>201</td><td>⚠️</td><td>youporn.com</td><td colspan="2">–</td></tr>
<tr><td>202</td><td>⚠️</td><td>alibaba.com</td><td><a href="test-details.md#202-alibabacom-parsing">2 errors</a></td><td><a href="test-details.md#202-alibabacom-validation">6 errors</a></td></tr>
<tr><td>203</td><td>⚠️</td><td>google.be</td><td><a href="test-details.md#203-googlebe-parsing">5 errors</a></td><td><a href="test-details.md#203-googlebe-validation">28 errors</a></td></tr>
<tr><td>204</td><td>⚠️</td><td>rumble.com</td><td><a href="test-details.md#204-rumblecom-parsing">9 errors</a></td><td><a href="test-details.md#204-rumblecom-validation">4 errors</a></td></tr>
<tr><td>205</td><td>⚠️</td><td>vice.com</td><td>✅</td><td><a href="test-details.md#205-vicecom-validation">9 errors</a></td></tr>
<tr><td>206</td><td>⚠️</td><td>sogou.com</td><td><a href="test-details.md#206-sogoucom-parsing">15 errors</a></td><td><a href="test-details.md#206-sogoucom-validation">27 errors</a></td></tr>
<tr><td>207</td><td>⚠️</td><td>youm7.com</td><td colspan="2">–</td></tr>
<tr><td>208</td><td>⚠️</td><td>abs-cbn.com</td><td colspan="2">–</td></tr>
<tr><td>209</td><td>⚠️</td><td>google.com.ph</td><td><a href="test-details.md#209-googlecomph-parsing">5 errors</a></td><td><a href="test-details.md#209-googlecomph-validation">28 errors</a></td></tr>
<tr><td>210</td><td>⚠️</td><td>doublepimp.com</td><td><a href="test-details.md#210-doublepimpcom-parsing">4 errors</a></td><td><a href="test-details.md#210-doublepimpcom-validation">1 error</a></td></tr>
<tr><td>211</td><td>⚠️</td><td>fbspyster.com</td><td><a href="test-details.md#211-fbspystercom-parsing">1error</a></td><td><a href="test-details.md#211-fbspystercom-validation">2 errors</a></td></tr>
<tr><td>212</td><td>⚠️</td><td>messenger.com</td><td>✅</td><td><a href="test-details.md#212-messengercom-validation">1 error</a></td></tr>
<tr><td>213</td><td>⚠️</td><td>coinmarketcap.com</td><td><a href="test-details.md#213-coinmarketcapcom-parsing">12 errors</a></td><td><a href="test-details.md#213-coinmarketcapcom-validation">9 errors</a></td></tr>
<tr><td>214</td><td>⚠️</td><td>blastingnews.com</td><td><a href="test-details.md#214-blastingnewscom-parsing">24 errors</a></td><td><a href="test-details.md#214-blastingnewscom-validation">26 errors</a></td></tr>
<tr><td>215</td><td>⚠️</td><td>scribd.com</td><td><a href="test-details.md#215-scribdcom-parsing">4 errors</a></td><td><a href="test-details.md#215-scribdcom-validation">20 errors</a></td></tr>
<tr><td>216</td><td>⚠️</td><td>indeed.com</td><td>✅</td><td><a href="test-details.md#216-indeedcom-validation">5 errors</a></td></tr>
<tr><td>217</td><td>⚠️</td><td>babytree.com</td><td><a href="test-details.md#217-babytreecom-parsing">18 errors</a></td><td><a href="test-details.md#217-babytreecom-validation">11 errors</a></td></tr>
<tr><td>218</td><td>⚠️</td><td>google.com.pe</td><td><a href="test-details.md#218-googlecompe-parsing">5 errors</a></td><td><a href="test-details.md#218-googlecompe-validation">28 errors</a></td></tr>
<tr><td>219</td><td>⚠️</td><td>naver.com</td><td><a href="test-details.md#219-navercom-parsing">43 errors</a></td><td><a href="test-details.md#219-navercom-validation">2 errors</a></td></tr>
<tr><td>220</td><td>⚠️</td><td>buzzfeed.com</td><td><a href="test-details.md#220-buzzfeedcom-parsing">2 errors</a></td><td><a href="test-details.md#220-buzzfeedcom-validation">5 errors</a></td></tr>
<tr><td>221</td><td>⚠️</td><td>uol.com.br</td><td><a href="test-details.md#221-uolcombr-parsing">56 errors</a></td><td><a href="test-details.md#221-uolcombr-validation">10 errors</a></td></tr>
<tr><td>222</td><td>🆗</td><td>china.com.cn</td><td>✅</td><td>✅</td></tr>
<tr><td>223</td><td>⚠️</td><td>kissanime.ru</td><td colspan="2">–</td></tr>
<tr><td>224</td><td>⚠️</td><td>qulsqiqrev.com</td><td colspan="2">–</td></tr>
<tr><td>225</td><td>⚠️</td><td>amazon.fr</td><td><a href="test-details.md#225-amazonfr-parsing">11 errors</a></td><td><a href="test-details.md#225-amazonfr-validation">20 errors</a></td></tr>
<tr><td>226</td><td>⚠️</td><td>kompas.com</td><td><a href="test-details.md#226-kompascom-parsing">2 errors</a></td><td><a href="test-details.md#226-kompascom-validation">7 errors</a></td></tr>
<tr><td>227</td><td>⚠️</td><td>sciencedirect.com</td><td><a href="test-details.md#227-sciencedirectcom-parsing">6 errors</a></td><td><a href="test-details.md#227-sciencedirectcom-validation">2 errors</a></td></tr>
<tr><td>228</td><td>⚠️</td><td>liputan6.com</td><td><a href="test-details.md#228-liputan6com-parsing">5 errors</a></td><td><a href="test-details.md#228-liputan6com-validation">5 errors</a></td></tr>
<tr><td>229</td><td>⚠️</td><td>zhihu.com</td><td><a href="test-details.md#229-zhihucom-parsing">3 errors</a></td><td><a href="test-details.md#229-zhihucom-validation">17 errors</a></td></tr>
<tr><td>230</td><td>🆗</td><td>huanqiu.com</td><td>✅</td><td>✅</td></tr>
<tr><td>231</td><td>⚠️</td><td>1337x.to</td><td><a href="test-details.md#231-1337xto-parsing">9 errors</a></td><td><a href="test-details.md#231-1337xto-validation">16 errors</a></td></tr>
<tr><td>232</td><td>⚠️</td><td>irctc.co.in</td><td><a href="test-details.md#232-irctccoin-parsing">15 errors</a></td><td><a href="test-details.md#232-irctccoin-validation">12 errors</a></td></tr>
<tr><td>233</td><td>⚠️</td><td>hibids10.com</td><td colspan="2">–</td></tr>
<tr><td>234</td><td>⚠️</td><td>ladbible.com</td><td colspan="2">–</td></tr>
<tr><td>235</td><td>⚠️</td><td>exoclick.com</td><td><a href="test-details.md#235-exoclickcom-parsing">2 errors</a></td><td><a href="test-details.md#235-exoclickcom-validation">1 error</a></td></tr>
<tr><td>236</td><td>⚠️</td><td>mama.cn</td><td><a href="test-details.md#236-mamacn-parsing">16 errors</a></td><td><a href="test-details.md#236-mamacn-validation">1 error</a></td></tr>
<tr><td>237</td><td>⚠️</td><td>newsprofin.com</td><td colspan="2">–</td></tr>
<tr><td>238</td><td>🆗</td><td>metropcs.mobi</td><td>✅</td><td>✅</td></tr>
<tr><td>239</td><td>⚠️</td><td>rambler.ru</td><td><a href="test-details.md#239-ramblerru-parsing">17 errors</a></td><td><a href="test-details.md#239-ramblerru-validation">5 errors</a></td></tr>
<tr><td>240</td><td>⚠️</td><td>amazon.it</td><td><a href="test-details.md#240-amazonit-parsing">11 errors</a></td><td><a href="test-details.md#240-amazonit-validation">20 errors</a></td></tr>
<tr><td>241</td><td>⚠️</td><td>gamespot.com</td><td><a href="test-details.md#241-gamespotcom-parsing">35 errors</a></td><td><a href="test-details.md#241-gamespotcom-validation">34 errors</a></td></tr>
<tr><td>242</td><td>⚠️</td><td>w3schools.com</td><td><a href="test-details.md#242-w3schoolscom-parsing">9 errors</a></td><td><a href="test-details.md#242-w3schoolscom-validation">11 errors</a></td></tr>
<tr><td>243</td><td>⚠️</td><td>cloudfront.net</td><td colspan="2">–</td></tr>
<tr><td>244</td><td>⚠️</td><td>thewhizmarketing.com</td><td colspan="2">–</td></tr>
<tr><td>245</td><td>⚠️</td><td>caijing.com.cn</td><td colspan="2">–</td></tr>
<tr><td>246</td><td>🆗</td><td>bilibili.com</td><td>✅</td><td>✅</td></tr>
<tr><td>247</td><td>⚠️</td><td>speedtest.net</td><td colspan="2">–</td></tr>
<tr><td>248</td><td>⚠️</td><td>eastday.com</td><td colspan="2">–</td></tr>
<tr><td>249</td><td>⚠️</td><td>livejournal.com</td><td><a href="test-details.md#249-livejournalcom-parsing">7 errors</a></td><td><a href="test-details.md#249-livejournalcom-validation">11 errors</a></td></tr>
<tr><td>250</td><td>⚠️</td><td>google.no</td><td><a href="test-details.md#250-googleno-parsing">5 errors</a></td><td><a href="test-details.md#250-googleno-validation">28 errors</a></td></tr></table>

<!-- /table -->
