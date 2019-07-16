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

Update date: 2019-07-16T00:25:39.237Z

<!-- /date -->


<!-- table -->

* Sites: `250`
* Downloaded: `218` (32 failed)
* Parsed: `218` (0 failed)
* Validation passed: `21` (197 failed)

<table>
<thead>
<tr><th>#</th><th></th><th>Site</th><th>Parsing</th><th>Validation</th></tr>
</thead>
<tr><td>1</td><td>⚠️</td><td>google.com</td><td><a href="test-details.md#1-googlecom-parsing">5 errors</a></td><td><a href="test-details.md#1-googlecom-validation">26 errors</a></td></tr>
<tr><td>2</td><td>⚠️</td><td>youtube.com</td><td><a href="test-details.md#2-youtubecom-parsing">7 errors</a></td><td><a href="test-details.md#2-youtubecom-validation">20 errors</a></td></tr>
<tr><td>3</td><td>⚠️</td><td>baidu.com</td><td colspan="2">–</td></tr>
<tr><td>4</td><td>⚠️</td><td>facebook.com</td><td><a href="test-details.md#4-facebookcom-parsing">2 errors</a></td><td><a href="test-details.md#4-facebookcom-validation">1 error</a></td></tr>
<tr><td>5</td><td>⚠️</td><td>qq.com</td><td><a href="test-details.md#5-qqcom-parsing">7 errors</a></td><td><a href="test-details.md#5-qqcom-validation">24 errors</a></td></tr>
<tr><td>6</td><td>⚠️</td><td>wikipedia.org</td><td>✅</td><td><a href="test-details.md#6-wikipediaorg-validation">3 errors</a></td></tr>
<tr><td>7</td><td>⚠️</td><td>yahoo.com</td><td><a href="test-details.md#7-yahoocom-parsing">40 errors</a></td><td><a href="test-details.md#7-yahoocom-validation">35 errors</a></td></tr>
<tr><td>8</td><td>⚠️</td><td>tmall.com</td><td><a href="test-details.md#8-tmallcom-parsing">16 errors</a></td><td><a href="test-details.md#8-tmallcom-validation">7 errors</a></td></tr>
<tr><td>9</td><td>⚠️</td><td>taobao.com</td><td><a href="test-details.md#9-taobaocom-parsing">8 errors</a></td><td><a href="test-details.md#9-taobaocom-validation">4 errors</a></td></tr>
<tr><td>10</td><td>⚠️</td><td>sohu.com</td><td colspan="2">–</td></tr>
<tr><td>11</td><td>⚠️</td><td>vk.com</td><td><a href="test-details.md#11-vkcom-parsing">78 errors</a></td><td><a href="test-details.md#11-vkcom-validation">9 errors</a></td></tr>
<tr><td>12</td><td>⚠️</td><td>amazon.com</td><td><a href="test-details.md#12-amazoncom-parsing">13 errors</a></td><td><a href="test-details.md#12-amazoncom-validation">39 errors</a></td></tr>
<tr><td>13</td><td>⚠️</td><td>live.com</td><td>✅</td><td><a href="test-details.md#13-livecom-validation">1 error</a></td></tr>
<tr><td>14</td><td>⚠️</td><td>yandex.ru</td><td>✅</td><td><a href="test-details.md#14-yandexru-validation">10 errors</a></td></tr>
<tr><td>15</td><td>⚠️</td><td>sina.com.cn</td><td><a href="test-details.md#15-sinacomcn-parsing">54 errors</a></td><td><a href="test-details.md#15-sinacomcn-validation">5 errors</a></td></tr>
<tr><td>16</td><td>⚠️</td><td>twitter.com</td><td><a href="test-details.md#16-twittercom-parsing">5 errors</a></td><td><a href="test-details.md#16-twittercom-validation">3 errors</a></td></tr>
<tr><td>17</td><td>⚠️</td><td>weibo.com</td><td><a href="test-details.md#17-weibocom-parsing">9 errors</a></td><td><a href="test-details.md#17-weibocom-validation">9 errors</a></td></tr>
<tr><td>18</td><td>⚠️</td><td>jd.com</td><td><a href="test-details.md#18-jdcom-parsing">8 errors</a></td><td><a href="test-details.md#18-jdcom-validation">4 errors</a></td></tr>
<tr><td>19</td><td>⚠️</td><td>instagram.com</td><td>✅</td><td><a href="test-details.md#19-instagramcom-validation">16 errors</a></td></tr>
<tr><td>20</td><td>⚠️</td><td>reddit.com</td><td><a href="test-details.md#20-redditcom-parsing">1 error</a></td><td><a href="test-details.md#20-redditcom-validation">10 errors</a></td></tr>
<tr><td>21</td><td>⚠️</td><td>login.tmall.com</td><td><a href="test-details.md#21-logintmallcom-parsing">7 errors</a></td><td><a href="test-details.md#21-logintmallcom-validation">1 error</a></td></tr>
<tr><td>22</td><td>⚠️</td><td>360.cn</td><td><a href="test-details.md#22-360cn-parsing">7 errors</a></td><td><a href="test-details.md#22-360cn-validation">4 errors</a></td></tr>
<tr><td>23</td><td>⚠️</td><td>blogspot.com</td><td>✅</td><td><a href="test-details.md#23-blogspotcom-validation">11 errors</a></td></tr>
<tr><td>24</td><td>⚠️</td><td>netflix.com</td><td><a href="test-details.md#24-netflixcom-parsing">2 errors</a></td><td><a href="test-details.md#24-netflixcom-validation">35 errors</a></td></tr>
<tr><td>25</td><td>🆗</td><td>linkedin.com</td><td><a href="test-details.md#25-linkedincom-parsing">1 error</a></td><td>✅</td></tr>
<tr><td>26</td><td>🆗</td><td>alipay.com</td><td>✅</td><td>✅</td></tr>
<tr><td>27</td><td>⚠️</td><td>csdn.net</td><td><a href="test-details.md#27-csdnnet-parsing">14 errors</a></td><td><a href="test-details.md#27-csdnnet-validation">8 errors</a></td></tr>
<tr><td>28</td><td>⚠️</td><td>pages.tmall.com</td><td><a href="test-details.md#28-pagestmallcom-parsing">4 errors</a></td><td><a href="test-details.md#28-pagestmallcom-validation">1 error</a></td></tr>
<tr><td>29</td><td>⚠️</td><td>bing.com</td><td><a href="test-details.md#29-bingcom-parsing">4 errors</a></td><td><a href="test-details.md#29-bingcom-validation">1 error</a></td></tr>
<tr><td>30</td><td>⚠️</td><td>pornhub.com</td><td><a href="test-details.md#30-pornhubcom-parsing">1 error</a></td><td><a href="test-details.md#30-pornhubcom-validation">36 errors</a></td></tr>
<tr><td>31</td><td>⚠️</td><td>mail.ru</td><td><a href="test-details.md#31-mailru-parsing">9 errors</a></td><td><a href="test-details.md#31-mailru-validation">20 errors</a></td></tr>
<tr><td>32</td><td>⚠️</td><td>aliexpress.com</td><td><a href="test-details.md#32-aliexpresscom-parsing">12 errors</a></td><td><a href="test-details.md#32-aliexpresscom-validation">37 errors</a></td></tr>
<tr><td>33</td><td>⚠️</td><td>livejasmin.com</td><td colspan="2">–</td></tr>
<tr><td>34</td><td>⚠️</td><td>yahoo.co.jp</td><td><a href="test-details.md#34-yahoocojp-parsing">2 errors</a></td><td><a href="test-details.md#34-yahoocojp-validation">8 errors</a></td></tr>
<tr><td>35</td><td>⚠️</td><td>ebay.com</td><td><a href="test-details.md#35-ebaycom-parsing">10 errors</a></td><td><a href="test-details.md#35-ebaycom-validation">18 errors</a></td></tr>
<tr><td>36</td><td>⚠️</td><td>microsoft.com</td><td><a href="test-details.md#36-microsoftcom-parsing">1 error</a></td><td><a href="test-details.md#36-microsoftcom-validation">15 errors</a></td></tr>
<tr><td>37</td><td>⚠️</td><td>whatsapp.com</td><td>✅</td><td><a href="test-details.md#37-whatsappcom-validation">8 errors</a></td></tr>
<tr><td>38</td><td>⚠️</td><td>tribunnews.com</td><td><a href="test-details.md#38-tribunnewscom-parsing">7 errors</a></td><td><a href="test-details.md#38-tribunnewscom-validation">15 errors</a></td></tr>
<tr><td>39</td><td>⚠️</td><td>google.com.hk</td><td><a href="test-details.md#39-googlecomhk-parsing">5 errors</a></td><td><a href="test-details.md#39-googlecomhk-validation">26 errors</a></td></tr>
<tr><td>40</td><td>⚠️</td><td>twitch.tv</td><td>✅</td><td><a href="test-details.md#40-twitchtv-validation">9 errors</a></td></tr>
<tr><td>41</td><td>⚠️</td><td>google.co.in</td><td><a href="test-details.md#41-googlecoin-parsing">5 errors</a></td><td><a href="test-details.md#41-googlecoin-validation">26 errors</a></td></tr>
<tr><td>42</td><td>⚠️</td><td>naver.com</td><td><a href="test-details.md#42-navercom-parsing">43 errors</a></td><td><a href="test-details.md#42-navercom-validation">4 errors</a></td></tr>
<tr><td>43</td><td>⚠️</td><td>okezone.com</td><td><a href="test-details.md#43-okezonecom-parsing">21 errors</a></td><td><a href="test-details.md#43-okezonecom-validation">29 errors</a></td></tr>
<tr><td>44</td><td>⚠️</td><td>xvideos.com</td><td><a href="test-details.md#44-xvideoscom-parsing">14 errors</a></td><td><a href="test-details.md#44-xvideoscom-validation">21 errors</a></td></tr>
<tr><td>45</td><td>⚠️</td><td>office.com</td><td>✅</td><td><a href="test-details.md#45-officecom-validation">3 errors</a></td></tr>
<tr><td>46</td><td>⚠️</td><td>hao123.com</td><td><a href="test-details.md#46-hao123com-parsing">40 errors</a></td><td><a href="test-details.md#46-hao123com-validation">7 errors</a></td></tr>
<tr><td>47</td><td>⚠️</td><td>msn.com</td><td>✅</td><td><a href="test-details.md#47-msncom-validation">6 errors</a></td></tr>
<tr><td>48</td><td>🆗</td><td>xhamster.com</td><td><a href="test-details.md#48-xhamstercom-parsing">1 error</a></td><td>✅</td></tr>
<tr><td>49</td><td>⚠️</td><td>imdb.com</td><td><a href="test-details.md#49-imdbcom-parsing">22 errors</a></td><td><a href="test-details.md#49-imdbcom-validation">23 errors</a></td></tr>
<tr><td>50</td><td>⚠️</td><td>paypal.com</td><td><a href="test-details.md#50-paypalcom-parsing">7 errors</a></td><td><a href="test-details.md#50-paypalcom-validation">13 errors</a></td></tr>
<tr><td>51</td><td>⚠️</td><td>soso.com</td><td>✅</td><td><a href="test-details.md#51-sosocom-validation">1 error</a></td></tr>
<tr><td>52</td><td>⚠️</td><td>microsoftonline.com</td><td colspan="2">–</td></tr>
<tr><td>53</td><td>⚠️</td><td>amazon.co.jp</td><td><a href="test-details.md#53-amazoncojp-parsing">12 errors</a></td><td><a href="test-details.md#53-amazoncojp-validation">39 errors</a></td></tr>
<tr><td>54</td><td>⚠️</td><td>stackoverflow.com</td><td><a href="test-details.md#54-stackoverflowcom-parsing">1 error</a></td><td><a href="test-details.md#54-stackoverflowcom-validation">13 errors</a></td></tr>
<tr><td>55</td><td>⚠️</td><td>wordpress.com</td><td>✅</td><td><a href="test-details.md#55-wordpresscom-validation">1 error</a></td></tr>
<tr><td>56</td><td>⚠️</td><td>google.ru</td><td><a href="test-details.md#56-googleru-parsing">5 errors</a></td><td><a href="test-details.md#56-googleru-validation">26 errors</a></td></tr>
<tr><td>57</td><td>⚠️</td><td>github.com</td><td>✅</td><td><a href="test-details.md#57-githubcom-validation">15 errors</a></td></tr>
<tr><td>58</td><td>⚠️</td><td>163.com</td><td colspan="2">–</td></tr>
<tr><td>59</td><td>⚠️</td><td>fandom.com</td><td>✅</td><td><a href="test-details.md#59-fandomcom-validation">15 errors</a></td></tr>
<tr><td>60</td><td>⚠️</td><td>google.de</td><td><a href="test-details.md#60-googlede-parsing">5 errors</a></td><td><a href="test-details.md#60-googlede-validation">26 errors</a></td></tr>
<tr><td>61</td><td>⚠️</td><td>apple.com</td><td>✅</td><td><a href="test-details.md#61-applecom-validation">6 errors</a></td></tr>
<tr><td>62</td><td>⚠️</td><td>pinterest.com</td><td>✅</td><td><a href="test-details.md#62-pinterestcom-validation">17 errors</a></td></tr>
<tr><td>63</td><td>⚠️</td><td>amazon.in</td><td><a href="test-details.md#63-amazonin-parsing">12 errors</a></td><td><a href="test-details.md#63-amazonin-validation">39 errors</a></td></tr>
<tr><td>64</td><td>⚠️</td><td>so.com</td><td><a href="test-details.md#64-socom-parsing">7 errors</a></td><td><a href="test-details.md#64-socom-validation">14 errors</a></td></tr>
<tr><td>65</td><td>⚠️</td><td>xinhuanet.com</td><td><a href="test-details.md#65-xinhuanetcom-parsing">31 errors</a></td><td><a href="test-details.md#65-xinhuanetcom-validation">4 errors</a></td></tr>
<tr><td>66</td><td>⚠️</td><td>booking.com</td><td><a href="test-details.md#66-bookingcom-parsing">33 errors</a></td><td><a href="test-details.md#66-bookingcom-validation">33 errors</a></td></tr>
<tr><td>67</td><td>🆗</td><td>bongacams.com</td><td><a href="test-details.md#67-bongacamscom-parsing">1 error</a></td><td>✅</td></tr>
<tr><td>68</td><td>⚠️</td><td>roblox.com</td><td colspan="2">–</td></tr>
<tr><td>69</td><td>⚠️</td><td>babytree.com</td><td colspan="2">–</td></tr>
<tr><td>70</td><td>⚠️</td><td>adobe.com</td><td>✅</td><td><a href="test-details.md#70-adobecom-validation">17 errors</a></td></tr>
<tr><td>71</td><td>🆗</td><td>t.co</td><td>✅</td><td>✅</td></tr>
<tr><td>72</td><td>⚠️</td><td>detail.tmall.com</td><td><a href="test-details.md#72-detailtmallcom-parsing">4 errors</a></td><td><a href="test-details.md#72-detailtmallcom-validation">1 error</a></td></tr>
<tr><td>73</td><td>⚠️</td><td>google.fr</td><td><a href="test-details.md#73-googlefr-parsing">5 errors</a></td><td><a href="test-details.md#73-googlefr-validation">26 errors</a></td></tr>
<tr><td>74</td><td>⚠️</td><td>google.co.jp</td><td><a href="test-details.md#74-googlecojp-parsing">5 errors</a></td><td><a href="test-details.md#74-googlecojp-validation">26 errors</a></td></tr>
<tr><td>75</td><td>⚠️</td><td>tumblr.com</td><td><a href="test-details.md#75-tumblrcom-parsing">10 errors</a></td><td><a href="test-details.md#75-tumblrcom-validation">19 errors</a></td></tr>
<tr><td>76</td><td>⚠️</td><td>deloplen.com</td><td><a href="test-details.md#76-deloplencom-parsing">5 errors</a></td><td><a href="test-details.md#76-deloplencom-validation">26 errors</a></td></tr>
<tr><td>77</td><td>🆗</td><td>bilibili.com</td><td>✅</td><td>✅</td></tr>
<tr><td>78</td><td>⚠️</td><td>tianya.cn</td><td colspan="2">–</td></tr>
<tr><td>79</td><td>⚠️</td><td>dropbox.com</td><td><a href="test-details.md#79-dropboxcom-parsing">13 errors</a></td><td><a href="test-details.md#79-dropboxcom-validation">13 errors</a></td></tr>
<tr><td>80</td><td>⚠️</td><td>google.com.br</td><td><a href="test-details.md#80-googlecombr-parsing">5 errors</a></td><td><a href="test-details.md#80-googlecombr-validation">26 errors</a></td></tr>
<tr><td>81</td><td>⚠️</td><td>imgur.com</td><td>✅</td><td><a href="test-details.md#81-imgurcom-validation">8 errors</a></td></tr>
<tr><td>82</td><td>⚠️</td><td>google.it</td><td><a href="test-details.md#82-googleit-parsing">5 errors</a></td><td><a href="test-details.md#82-googleit-validation">26 errors</a></td></tr>
<tr><td>83</td><td>⚠️</td><td>pixnet.net</td><td>✅</td><td><a href="test-details.md#83-pixnetnet-validation">1 error</a></td></tr>
<tr><td>84</td><td>⚠️</td><td>onlinesbi.com</td><td><a href="test-details.md#84-onlinesbicom-parsing">12 errors</a></td><td><a href="test-details.md#84-onlinesbicom-validation">3 errors</a></td></tr>
<tr><td>85</td><td>⚠️</td><td>bbc.com</td><td><a href="test-details.md#85-bbccom-parsing">15 errors</a></td><td><a href="test-details.md#85-bbccom-validation">8 errors</a></td></tr>
<tr><td>86</td><td>🆗</td><td>google.cn</td><td>✅</td><td>✅</td></tr>
<tr><td>87</td><td>⚠️</td><td>cnblogs.com</td><td>✅</td><td><a href="test-details.md#87-cnblogscom-validation">1 error</a></td></tr>
<tr><td>88</td><td>⚠️</td><td>amazon.de</td><td><a href="test-details.md#88-amazonde-parsing">12 errors</a></td><td><a href="test-details.md#88-amazonde-validation">39 errors</a></td></tr>
<tr><td>89</td><td>⚠️</td><td>detik.com</td><td colspan="2">–</td></tr>
<tr><td>90</td><td>⚠️</td><td>google.es</td><td><a href="test-details.md#90-googlees-parsing">5 errors</a></td><td><a href="test-details.md#90-googlees-validation">26 errors</a></td></tr>
<tr><td>91</td><td>⚠️</td><td>thestartmagazine.com</td><td><a href="test-details.md#91-thestartmagazinecom-parsing">2 errors</a></td><td><a href="test-details.md#91-thestartmagazinecom-validation">11 errors</a></td></tr>
<tr><td>92</td><td>⚠️</td><td>iqiyi.com</td><td colspan="2">–</td></tr>
<tr><td>93</td><td>⚠️</td><td>aparat.com</td><td>✅</td><td><a href="test-details.md#93-aparatcom-validation">1 error</a></td></tr>
<tr><td>94</td><td>⚠️</td><td>ettoday.net</td><td><a href="test-details.md#94-ettodaynet-parsing">2 errors</a></td><td><a href="test-details.md#94-ettodaynet-validation">24 errors</a></td></tr>
<tr><td>95</td><td>⚠️</td><td>xnxx.com</td><td><a href="test-details.md#95-xnxxcom-parsing">13 errors</a></td><td><a href="test-details.md#95-xnxxcom-validation">4 errors</a></td></tr>
<tr><td>96</td><td>⚠️</td><td>ok.ru</td><td><a href="test-details.md#96-okru-parsing">5 errors</a></td><td><a href="test-details.md#96-okru-validation">21 errors</a></td></tr>
<tr><td>97</td><td>⚠️</td><td>soundcloud.com</td><td>✅</td><td><a href="test-details.md#97-soundcloudcom-validation">4 errors</a></td></tr>
<tr><td>98</td><td>⚠️</td><td>salesforce.com</td><td><a href="test-details.md#98-salesforcecom-parsing">5 errors</a></td><td><a href="test-details.md#98-salesforcecom-validation">1 error</a></td></tr>
<tr><td>99</td><td>⚠️</td><td>youku.com</td><td><a href="test-details.md#99-youkucom-parsing">22 errors</a></td><td><a href="test-details.md#99-youkucom-validation">13 errors</a></td></tr>
<tr><td>100</td><td>⚠️</td><td>amazon.co.uk</td><td><a href="test-details.md#100-amazoncouk-parsing">12 errors</a></td><td><a href="test-details.md#100-amazoncouk-validation">39 errors</a></td></tr>
<tr><td>101</td><td>⚠️</td><td>mediafire.com</td><td><a href="test-details.md#101-mediafirecom-parsing">32 errors</a></td><td><a href="test-details.md#101-mediafirecom-validation">85 errors</a></td></tr>
<tr><td>102</td><td>⚠️</td><td>force.com</td><td><a href="test-details.md#102-forcecom-parsing">143 errors</a></td><td><a href="test-details.md#102-forcecom-validation">41 errors</a></td></tr>
<tr><td>103</td><td>⚠️</td><td>douyu.com</td><td><a href="test-details.md#103-douyucom-parsing">10 errors</a></td><td><a href="test-details.md#103-douyucom-validation">23 errors</a></td></tr>
<tr><td>104</td><td>⚠️</td><td>chase.com</td><td><a href="test-details.md#104-chasecom-parsing">3 errors</a></td><td><a href="test-details.md#104-chasecom-validation">7 errors</a></td></tr>
<tr><td>105</td><td>⚠️</td><td>cnn.com</td><td>✅</td><td><a href="test-details.md#105-cnncom-validation">16 errors</a></td></tr>
<tr><td>106</td><td>⚠️</td><td>quora.com</td><td><a href="test-details.md#106-quoracom-parsing">23 errors</a></td><td><a href="test-details.md#106-quoracom-validation">90 errors</a></td></tr>
<tr><td>107</td><td>⚠️</td><td>gmw.cn</td><td><a href="test-details.md#107-gmwcn-parsing">6 errors</a></td><td><a href="test-details.md#107-gmwcn-validation">2 errors</a></td></tr>
<tr><td>108</td><td>⚠️</td><td>1688.com</td><td><a href="test-details.md#108-1688com-parsing">19 errors</a></td><td><a href="test-details.md#108-1688com-validation">8 errors</a></td></tr>
<tr><td>109</td><td>⚠️</td><td>rakuten.co.jp</td><td><a href="test-details.md#109-rakutencojp-parsing">40 errors</a></td><td><a href="test-details.md#109-rakutencojp-validation">13 errors</a></td></tr>
<tr><td>110</td><td>⚠️</td><td>sogou.com</td><td><a href="test-details.md#110-sogoucom-parsing">15 errors</a></td><td><a href="test-details.md#110-sogoucom-validation">46 errors</a></td></tr>
<tr><td>111</td><td>⚠️</td><td>avito.ru</td><td>✅</td><td><a href="test-details.md#111-avitoru-validation">12 errors</a></td></tr>
<tr><td>112</td><td>⚠️</td><td>spotify.com</td><td><a href="test-details.md#112-spotifycom-parsing">13 errors</a></td><td><a href="test-details.md#112-spotifycom-validation">10 errors</a></td></tr>
<tr><td>113</td><td>⚠️</td><td>godaddy.com</td><td><a href="test-details.md#113-godaddycom-parsing">2 errors</a></td><td><a href="test-details.md#113-godaddycom-validation">21 errors</a></td></tr>
<tr><td>114</td><td>⚠️</td><td>cricbuzz.com</td><td><a href="test-details.md#114-cricbuzzcom-parsing">3 errors</a></td><td><a href="test-details.md#114-cricbuzzcom-validation">1 error</a></td></tr>
<tr><td>115</td><td>⚠️</td><td>sindonews.com</td><td>✅</td><td><a href="test-details.md#115-sindonewscom-validation">18 errors</a></td></tr>
<tr><td>116</td><td>⚠️</td><td>ebay.de</td><td><a href="test-details.md#116-ebayde-parsing">10 errors</a></td><td><a href="test-details.md#116-ebayde-validation">18 errors</a></td></tr>
<tr><td>117</td><td>⚠️</td><td>amazonaws.com</td><td><a href="test-details.md#117-amazonawscom-parsing">4 errors</a></td><td><a href="test-details.md#117-amazonawscom-validation">10 errors</a></td></tr>
<tr><td>118</td><td>⚠️</td><td>bbc.co.uk</td><td><a href="test-details.md#118-bbccouk-parsing">15 errors</a></td><td><a href="test-details.md#118-bbccouk-validation">12 errors</a></td></tr>
<tr><td>119</td><td>⚠️</td><td>craigslist.org</td><td><a href="test-details.md#119-craigslistorg-parsing">14 errors</a></td><td><a href="test-details.md#119-craigslistorg-validation">1 error</a></td></tr>
<tr><td>120</td><td>⚠️</td><td>gloyah.net</td><td colspan="2">–</td></tr>
<tr><td>121</td><td>🆗</td><td>nicovideo.jp</td><td>✅</td><td>✅</td></tr>
<tr><td>122</td><td>⚠️</td><td>google.com.mx</td><td><a href="test-details.md#122-googlecommx-parsing">5 errors</a></td><td><a href="test-details.md#122-googlecommx-validation">26 errors</a></td></tr>
<tr><td>123</td><td>⚠️</td><td>w3schools.com</td><td><a href="test-details.md#123-w3schoolscom-parsing">7 errors</a></td><td><a href="test-details.md#123-w3schoolscom-validation">17 errors</a></td></tr>
<tr><td>124</td><td>⚠️</td><td>google.co.uk</td><td><a href="test-details.md#124-googlecouk-parsing">5 errors</a></td><td><a href="test-details.md#124-googlecouk-validation">26 errors</a></td></tr>
<tr><td>125</td><td>🆗</td><td>panda.tv</td><td>✅</td><td>✅</td></tr>
<tr><td>126</td><td>⚠️</td><td>discordapp.com</td><td>✅</td><td><a href="test-details.md#126-discordappcom-validation">22 errors</a></td></tr>
<tr><td>127</td><td>⚠️</td><td>nytimes.com</td><td><a href="test-details.md#127-nytimescom-parsing">6 errors</a></td><td><a href="test-details.md#127-nytimescom-validation">14 errors</a></td></tr>
<tr><td>128</td><td>⚠️</td><td>stackexchange.com</td><td><a href="test-details.md#128-stackexchangecom-parsing">3 errors</a></td><td><a href="test-details.md#128-stackexchangecom-validation">11 errors</a></td></tr>
<tr><td>129</td><td>⚠️</td><td>nih.gov</td><td><a href="test-details.md#129-nihgov-parsing">24 errors</a></td><td><a href="test-details.md#129-nihgov-validation">13 errors</a></td></tr>
<tr><td>130</td><td>⚠️</td><td>duckduckgo.com</td><td><a href="test-details.md#130-duckduckgocom-parsing">5 errors</a></td><td><a href="test-details.md#130-duckduckgocom-validation">13 errors</a></td></tr>
<tr><td>131</td><td>⚠️</td><td>hotstar.com</td><td><a href="test-details.md#131-hotstarcom-parsing">4 errors</a></td><td><a href="test-details.md#131-hotstarcom-validation">1 error</a></td></tr>
<tr><td>132</td><td>⚠️</td><td>walmart.com</td><td><a href="test-details.md#132-walmartcom-parsing">27 errors</a></td><td><a href="test-details.md#132-walmartcom-validation">24 errors</a></td></tr>
<tr><td>133</td><td>⚠️</td><td>zhanqi.tv</td><td><a href="test-details.md#133-zhanqitv-parsing">50 errors</a></td><td><a href="test-details.md#133-zhanqitv-validation">17 errors</a></td></tr>
<tr><td>134</td><td>⚠️</td><td>uol.com.br</td><td><a href="test-details.md#134-uolcombr-parsing">54 errors</a></td><td><a href="test-details.md#134-uolcombr-validation">14 errors</a></td></tr>
<tr><td>135</td><td>⚠️</td><td>google.com.tw</td><td><a href="test-details.md#135-googlecomtw-parsing">5 errors</a></td><td><a href="test-details.md#135-googlecomtw-validation">26 errors</a></td></tr>
<tr><td>136</td><td>🆗</td><td>china.com.cn</td><td>✅</td><td>✅</td></tr>
<tr><td>137</td><td>⚠️</td><td>indeed.com</td><td>✅</td><td><a href="test-details.md#137-indeedcom-validation">8 errors</a></td></tr>
<tr><td>138</td><td>⚠️</td><td>wetransfer.com</td><td>✅</td><td><a href="test-details.md#138-wetransfercom-validation">20 errors</a></td></tr>
<tr><td>139</td><td>🆗</td><td>dailymotion.com</td><td><a href="test-details.md#139-dailymotioncom-parsing">1 error</a></td><td>✅</td></tr>
<tr><td>140</td><td>⚠️</td><td>butheptesitrew.pro</td><td colspan="2">–</td></tr>
<tr><td>141</td><td>⚠️</td><td>espn.com</td><td colspan="2">–</td></tr>
<tr><td>142</td><td>⚠️</td><td>globo.com</td><td><a href="test-details.md#142-globocom-parsing">16 errors</a></td><td><a href="test-details.md#142-globocom-validation">7 errors</a></td></tr>
<tr><td>143</td><td>⚠️</td><td>flipkart.com</td><td colspan="2">–</td></tr>
<tr><td>144</td><td>⚠️</td><td>alibaba.com</td><td><a href="test-details.md#144-alibabacom-parsing">4 errors</a></td><td><a href="test-details.md#144-alibabacom-validation">13 errors</a></td></tr>
<tr><td>145</td><td>⚠️</td><td>youporn.com</td><td colspan="2">–</td></tr>
<tr><td>146</td><td>⚠️</td><td>myshopify.com</td><td colspan="2">–</td></tr>
<tr><td>147</td><td>⚠️</td><td>vimeo.com</td><td>✅</td><td><a href="test-details.md#147-vimeocom-validation">5 errors</a></td></tr>
<tr><td>148</td><td>⚠️</td><td>researchgate.net</td><td>✅</td><td><a href="test-details.md#148-researchgatenet-validation">3 errors</a></td></tr>
<tr><td>149</td><td>⚠️</td><td>medium.com</td><td>✅</td><td><a href="test-details.md#149-mediumcom-validation">27 errors</a></td></tr>
<tr><td>150</td><td>⚠️</td><td>onlinevideoconverter.com</td><td><a href="test-details.md#150-onlinevideoconvertercom-parsing">14 errors</a></td><td><a href="test-details.md#150-onlinevideoconvertercom-validation">7 errors</a></td></tr>
<tr><td>151</td><td>⚠️</td><td>mercadolivre.com.br</td><td>✅</td><td><a href="test-details.md#151-mercadolivrecombr-validation">5 errors</a></td></tr>
<tr><td>152</td><td>⚠️</td><td>kompas.com</td><td><a href="test-details.md#152-kompascom-parsing">3 errors</a></td><td><a href="test-details.md#152-kompascom-validation">51 errors</a></td></tr>
<tr><td>153</td><td>⚠️</td><td>daum.net</td><td><a href="test-details.md#153-daumnet-parsing">5 errors</a></td><td><a href="test-details.md#153-daumnet-validation">1 error</a></td></tr>
<tr><td>154</td><td>⚠️</td><td>canva.com</td><td>✅</td><td><a href="test-details.md#154-canvacom-validation">9 errors</a></td></tr>
<tr><td>155</td><td>⚠️</td><td>indiatimes.com</td><td><a href="test-details.md#155-indiatimescom-parsing">7 errors</a></td><td><a href="test-details.md#155-indiatimescom-validation">13 errors</a></td></tr>
<tr><td>156</td><td>⚠️</td><td>google.com.tr</td><td><a href="test-details.md#156-googlecomtr-parsing">5 errors</a></td><td><a href="test-details.md#156-googlecomtr-validation">26 errors</a></td></tr>
<tr><td>157</td><td>⚠️</td><td>savefrom.net</td><td><a href="test-details.md#157-savefromnet-parsing">4 errors</a></td><td><a href="test-details.md#157-savefromnet-validation">2 errors</a></td></tr>
<tr><td>158</td><td>⚠️</td><td>theguardian.com</td><td>✅</td><td><a href="test-details.md#158-theguardiancom-validation">13 errors</a></td></tr>
<tr><td>159</td><td>⚠️</td><td>bukalapak.com</td><td><a href="test-details.md#159-bukalapakcom-parsing">18 errors</a></td><td><a href="test-details.md#159-bukalapakcom-validation">26 errors</a></td></tr>
<tr><td>160</td><td>⚠️</td><td>yts.lt</td><td><a href="test-details.md#160-ytslt-parsing">64 errors</a></td><td><a href="test-details.md#160-ytslt-validation">10 errors</a></td></tr>
<tr><td>161</td><td>⚠️</td><td>wikihow.com</td><td><a href="test-details.md#161-wikihowcom-parsing">15 errors</a></td><td><a href="test-details.md#161-wikihowcom-validation">22 errors</a></td></tr>
<tr><td>162</td><td>⚠️</td><td>caijing.com.cn</td><td colspan="2">–</td></tr>
<tr><td>163</td><td>⚠️</td><td>blogger.com</td><td>✅</td><td><a href="test-details.md#163-bloggercom-validation">11 errors</a></td></tr>
<tr><td>164</td><td>🆗</td><td>chaturbate.com</td><td><a href="test-details.md#164-chaturbatecom-parsing">1 error</a></td><td>✅</td></tr>
<tr><td>165</td><td>⚠️</td><td>shutterstock.com</td><td>✅</td><td><a href="test-details.md#165-shutterstockcom-validation">20 errors</a></td></tr>
<tr><td>166</td><td>⚠️</td><td>freepik.com</td><td>✅</td><td><a href="test-details.md#166-freepikcom-validation">29 errors</a></td></tr>
<tr><td>167</td><td>⚠️</td><td>ebay.co.uk</td><td><a href="test-details.md#167-ebaycouk-parsing">10 errors</a></td><td><a href="test-details.md#167-ebaycouk-validation">18 errors</a></td></tr>
<tr><td>168</td><td>⚠️</td><td>liputan6.com</td><td><a href="test-details.md#168-liputan6com-parsing">6 errors</a></td><td><a href="test-details.md#168-liputan6com-validation">5 errors</a></td></tr>
<tr><td>169</td><td>⚠️</td><td>softonic.com</td><td>✅</td><td><a href="test-details.md#169-softoniccom-validation">16 errors</a></td></tr>
<tr><td>170</td><td>⚠️</td><td>deviantart.com</td><td><a href="test-details.md#170-deviantartcom-parsing">121 errors</a></td><td><a href="test-details.md#170-deviantartcom-validation">85 errors</a></td></tr>
<tr><td>171</td><td>⚠️</td><td>slideshare.net</td><td colspan="2">–</td></tr>
<tr><td>172</td><td>⚠️</td><td>cnet.com</td><td><a href="test-details.md#172-cnetcom-parsing">68 errors</a></td><td><a href="test-details.md#172-cnetcom-validation">12 errors</a></td></tr>
<tr><td>173</td><td>⚠️</td><td>etsy.com</td><td><a href="test-details.md#173-etsycom-parsing">118 errors</a></td><td><a href="test-details.md#173-etsycom-validation">22 errors</a></td></tr>
<tr><td>174</td><td>⚠️</td><td>eastday.com</td><td><a href="test-details.md#174-eastdaycom-parsing">7 errors</a></td><td><a href="test-details.md#174-eastdaycom-validation">4 errors</a></td></tr>
<tr><td>175</td><td>⚠️</td><td>aliyun.com</td><td><a href="test-details.md#175-aliyuncom-parsing">16 errors</a></td><td><a href="test-details.md#175-aliyuncom-validation">8 errors</a></td></tr>
<tr><td>176</td><td>🆗</td><td>thepiratebay.org</td><td><a href="test-details.md#176-thepiratebayorg-parsing">1 error</a></td><td>✅</td></tr>
<tr><td>177</td><td>🆗</td><td>youth.cn</td><td><a href="test-details.md#177-youthcn-parsing">7 errors</a></td><td>✅</td></tr>
<tr><td>178</td><td>⚠️</td><td>grid.id</td><td><a href="test-details.md#178-gridid-parsing">1 error</a></td><td><a href="test-details.md#178-gridid-validation">3 errors</a></td></tr>
<tr><td>179</td><td>⚠️</td><td>trello.com</td><td><a href="test-details.md#179-trellocom-parsing">7 errors</a></td><td><a href="test-details.md#179-trellocom-validation">5 errors</a></td></tr>
<tr><td>180</td><td>⚠️</td><td>exoclick.com</td><td>✅</td><td><a href="test-details.md#180-exoclickcom-validation">7 errors</a></td></tr>
<tr><td>181</td><td>⚠️</td><td>redd.it</td><td><a href="test-details.md#181-reddit-parsing">1 error</a></td><td><a href="test-details.md#181-reddit-validation">10 errors</a></td></tr>
<tr><td>182</td><td>🆗</td><td>ask.com</td><td><a href="test-details.md#182-askcom-parsing">9 errors</a></td><td>✅</td></tr>
<tr><td>183</td><td>⚠️</td><td>ltn.com.tw</td><td><a href="test-details.md#183-ltncomtw-parsing">23 errors</a></td><td><a href="test-details.md#183-ltncomtw-validation">20 errors</a></td></tr>
<tr><td>184</td><td>⚠️</td><td>google.ca</td><td><a href="test-details.md#184-googleca-parsing">5 errors</a></td><td><a href="test-details.md#184-googleca-validation">26 errors</a></td></tr>
<tr><td>185</td><td>⚠️</td><td>mama.cn</td><td colspan="2">–</td></tr>
<tr><td>186</td><td>⚠️</td><td>spankbang.com</td><td><a href="test-details.md#186-spankbangcom-parsing">56 errors</a></td><td><a href="test-details.md#186-spankbangcom-validation">38 errors</a></td></tr>
<tr><td>187</td><td>🆗</td><td>huanqiu.com</td><td><a href="test-details.md#187-huanqiucom-parsing">10 errors</a></td><td>✅</td></tr>
<tr><td>188</td><td>⚠️</td><td>fc2.com</td><td colspan="2">–</td></tr>
<tr><td>189</td><td>⚠️</td><td>twimg.com</td><td colspan="2">–</td></tr>
<tr><td>190</td><td>⚠️</td><td>amazon.fr</td><td><a href="test-details.md#190-amazonfr-parsing">12 errors</a></td><td><a href="test-details.md#190-amazonfr-validation">39 errors</a></td></tr>
<tr><td>191</td><td>⚠️</td><td>youm7.com</td><td colspan="2">–</td></tr>
<tr><td>192</td><td>⚠️</td><td>espncricinfo.com</td><td><a href="test-details.md#192-espncricinfocom-parsing">125 errors</a></td><td><a href="test-details.md#192-espncricinfocom-validation">38 errors</a></td></tr>
<tr><td>193</td><td>⚠️</td><td>rambler.ru</td><td><a href="test-details.md#193-ramblerru-parsing">5 errors</a></td><td><a href="test-details.md#193-ramblerru-validation">11 errors</a></td></tr>
<tr><td>194</td><td>⚠️</td><td>steamcommunity.com</td><td><a href="test-details.md#194-steamcommunitycom-parsing">12 errors</a></td><td><a href="test-details.md#194-steamcommunitycom-validation">4 errors</a></td></tr>
<tr><td>195</td><td>⚠️</td><td>archive.org</td><td><a href="test-details.md#195-archiveorg-parsing">50 errors</a></td><td><a href="test-details.md#195-archiveorg-validation">10 errors</a></td></tr>
<tr><td>196</td><td>⚠️</td><td>kinopoisk.ru</td><td colspan="2">–</td></tr>
<tr><td>197</td><td>⚠️</td><td>digikala.com</td><td><a href="test-details.md#197-digikalacom-parsing">15 errors</a></td><td><a href="test-details.md#197-digikalacom-validation">23 errors</a></td></tr>
<tr><td>198</td><td>⚠️</td><td>google.com.sg</td><td><a href="test-details.md#198-googlecomsg-parsing">5 errors</a></td><td><a href="test-details.md#198-googlecomsg-validation">26 errors</a></td></tr>
<tr><td>199</td><td>⚠️</td><td>bankofamerica.com</td><td><a href="test-details.md#199-bankofamericacom-parsing">6 errors</a></td><td><a href="test-details.md#199-bankofamericacom-validation">14 errors</a></td></tr>
<tr><td>200</td><td>⚠️</td><td>wellsfargo.com</td><td>✅</td><td><a href="test-details.md#200-wellsfargocom-validation">2 errors</a></td></tr>
<tr><td>201</td><td>⚠️</td><td>gfycat.com</td><td><a href="test-details.md#201-gfycatcom-parsing">1 error</a></td><td><a href="test-details.md#201-gfycatcom-validation">5 errors</a></td></tr>
<tr><td>202</td><td>⚠️</td><td>zhihu.com</td><td>✅</td><td><a href="test-details.md#202-zhihucom-validation">15 errors</a></td></tr>
<tr><td>203</td><td>⚠️</td><td>scribd.com</td><td><a href="test-details.md#203-scribdcom-parsing">1 error</a></td><td><a href="test-details.md#203-scribdcom-validation">16 errors</a></td></tr>
<tr><td>204</td><td>⚠️</td><td>speedtest.net</td><td>✅</td><td><a href="test-details.md#204-speedtestnet-validation">3 errors</a></td></tr>
<tr><td>205</td><td>⚠️</td><td>amazon.it</td><td><a href="test-details.md#205-amazonit-parsing">12 errors</a></td><td><a href="test-details.md#205-amazonit-validation">39 errors</a></td></tr>
<tr><td>206</td><td>⚠️</td><td>vice.com</td><td><a href="test-details.md#206-vicecom-parsing">24 errors</a></td><td><a href="test-details.md#206-vicecom-validation">19 errors</a></td></tr>
<tr><td>207</td><td>⚠️</td><td>foxnews.com</td><td><a href="test-details.md#207-foxnewscom-parsing">49 errors</a></td><td><a href="test-details.md#207-foxnewscom-validation">24 errors</a></td></tr>
<tr><td>208</td><td>⚠️</td><td>patria.org.ve</td><td colspan="2">–</td></tr>
<tr><td>209</td><td>⚠️</td><td>gamepedia.com</td><td><a href="test-details.md#209-gamepediacom-parsing">27 errors</a></td><td><a href="test-details.md#209-gamepediacom-validation">62 errors</a></td></tr>
<tr><td>210</td><td>⚠️</td><td>sciencedirect.com</td><td><a href="test-details.md#210-sciencedirectcom-parsing">5 errors</a></td><td><a href="test-details.md#210-sciencedirectcom-validation">1 error</a></td></tr>
<tr><td>211</td><td>⚠️</td><td>google.pl</td><td><a href="test-details.md#211-googlepl-parsing">5 errors</a></td><td><a href="test-details.md#211-googlepl-validation">26 errors</a></td></tr>
<tr><td>212</td><td>⚠️</td><td>jianshu.com</td><td><a href="test-details.md#212-jianshucom-parsing">12 errors</a></td><td><a href="test-details.md#212-jianshucom-validation">4 errors</a></td></tr>
<tr><td>213</td><td>⚠️</td><td>amazon.es</td><td><a href="test-details.md#213-amazones-parsing">13 errors</a></td><td><a href="test-details.md#213-amazones-validation">39 errors</a></td></tr>
<tr><td>214</td><td>⚠️</td><td>ladbible.com</td><td>✅</td><td><a href="test-details.md#214-ladbiblecom-validation">3 errors</a></td></tr>
<tr><td>215</td><td>⚠️</td><td>shopify.com</td><td><a href="test-details.md#215-shopifycom-parsing">18 errors</a></td><td><a href="test-details.md#215-shopifycom-validation">4 errors</a></td></tr>
<tr><td>216</td><td>⚠️</td><td>zillow.com</td><td><a href="test-details.md#216-zillowcom-parsing">4 errors</a></td><td><a href="test-details.md#216-zillowcom-validation">9 errors</a></td></tr>
<tr><td>217</td><td>⚠️</td><td>rednet.cn</td><td colspan="2">–</td></tr>
<tr><td>218</td><td>⚠️</td><td>yy.com</td><td><a href="test-details.md#218-yycom-parsing">15 errors</a></td><td><a href="test-details.md#218-yycom-validation">9 errors</a></td></tr>
<tr><td>219</td><td>⚠️</td><td>bet9ja.com</td><td><a href="test-details.md#219-bet9jacom-parsing">11 errors</a></td><td><a href="test-details.md#219-bet9jacom-validation">1 error</a></td></tr>
<tr><td>220</td><td>🆗</td><td>mega.nz</td><td>✅</td><td>✅</td></tr>
<tr><td>221</td><td>🆗</td><td>fiverr.com</td><td><a href="test-details.md#221-fiverrcom-parsing">2 errors</a></td><td>✅</td></tr>
<tr><td>222</td><td>⚠️</td><td>livejournal.com</td><td><a href="test-details.md#222-livejournalcom-parsing">5 errors</a></td><td><a href="test-details.md#222-livejournalcom-validation">14 errors</a></td></tr>
<tr><td>223</td><td>⚠️</td><td>google.com.sa</td><td><a href="test-details.md#223-googlecomsa-parsing">5 errors</a></td><td><a href="test-details.md#223-googlecomsa-validation">26 errors</a></td></tr>
<tr><td>224</td><td>⚠️</td><td>google.co.th</td><td><a href="test-details.md#224-googlecoth-parsing">5 errors</a></td><td><a href="test-details.md#224-googlecoth-validation">26 errors</a></td></tr>
<tr><td>225</td><td>⚠️</td><td>rt.com</td><td><a href="test-details.md#225-rtcom-parsing">9 errors</a></td><td><a href="test-details.md#225-rtcom-validation">15 errors</a></td></tr>
<tr><td>226</td><td>🆗</td><td>udemy.com</td><td><a href="test-details.md#226-udemycom-parsing">2 errors</a></td><td>✅</td></tr>
<tr><td>227</td><td>🆗</td><td>rutracker.org</td><td><a href="test-details.md#227-rutrackerorg-parsing">1 error</a></td><td>✅</td></tr>
<tr><td>228</td><td>⚠️</td><td>messenger.com</td><td>✅</td><td><a href="test-details.md#228-messengercom-validation">3 errors</a></td></tr>
<tr><td>229</td><td>⚠️</td><td>steampowered.com</td><td><a href="test-details.md#229-steampoweredcom-parsing">26 errors</a></td><td><a href="test-details.md#229-steampoweredcom-validation">11 errors</a></td></tr>
<tr><td>230</td><td>⚠️</td><td>hesport.com</td><td><a href="test-details.md#230-hesportcom-parsing">20 errors</a></td><td><a href="test-details.md#230-hesportcom-validation">14 errors</a></td></tr>
<tr><td>231</td><td>⚠️</td><td>telegram.org</td><td colspan="2">–</td></tr>
<tr><td>232</td><td>⚠️</td><td>setn.com</td><td colspan="2">–</td></tr>
<tr><td>233</td><td>🆗</td><td>bestbuy.com</td><td><a href="test-details.md#233-bestbuycom-parsing">1 error</a></td><td>✅</td></tr>
<tr><td>234</td><td>⚠️</td><td>primevideo.com</td><td><a href="test-details.md#234-primevideocom-parsing">37 errors</a></td><td><a href="test-details.md#234-primevideocom-validation">46 errors</a></td></tr>
<tr><td>235</td><td>⚠️</td><td>line.me</td><td colspan="2">–</td></tr>
<tr><td>236</td><td>⚠️</td><td>tripadvisor.com</td><td><a href="test-details.md#236-tripadvisorcom-parsing">16 errors</a></td><td><a href="test-details.md#236-tripadvisorcom-validation">24 errors</a></td></tr>
<tr><td>237</td><td>⚠️</td><td>google.com.ar</td><td><a href="test-details.md#237-googlecomar-parsing">5 errors</a></td><td><a href="test-details.md#237-googlecomar-validation">26 errors</a></td></tr>
<tr><td>238</td><td>⚠️</td><td>google.com.eg</td><td><a href="test-details.md#238-googlecomeg-parsing">5 errors</a></td><td><a href="test-details.md#238-googlecomeg-validation">26 errors</a></td></tr>
<tr><td>239</td><td>⚠️</td><td>google.co.id</td><td><a href="test-details.md#239-googlecoid-parsing">5 errors</a></td><td><a href="test-details.md#239-googlecoid-validation">26 errors</a></td></tr>
<tr><td>240</td><td>⚠️</td><td>chouftv.ma</td><td><a href="test-details.md#240-chouftvma-parsing">1 error</a></td><td><a href="test-details.md#240-chouftvma-validation">18 errors</a></td></tr>
<tr><td>241</td><td>⚠️</td><td>zoho.com</td><td><a href="test-details.md#241-zohocom-parsing">6 errors</a></td><td><a href="test-details.md#241-zohocom-validation">11 errors</a></td></tr>
<tr><td>242</td><td>⚠️</td><td>yelp.com</td><td><a href="test-details.md#242-yelpcom-parsing">8 errors</a></td><td><a href="test-details.md#242-yelpcom-validation">11 errors</a></td></tr>
<tr><td>243</td><td>⚠️</td><td>washingtonpost.com</td><td colspan="2">–</td></tr>
<tr><td>244</td><td>⚠️</td><td>weather.com</td><td><a href="test-details.md#244-weathercom-parsing">6 errors</a></td><td><a href="test-details.md#244-weathercom-validation">21 errors</a></td></tr>
<tr><td>245</td><td>⚠️</td><td>zoom.us</td><td colspan="2">–</td></tr>
<tr><td>246</td><td>⚠️</td><td>3dmgame.com</td><td><a href="test-details.md#246-3dmgamecom-parsing">23 errors</a></td><td><a href="test-details.md#246-3dmgamecom-validation">5 errors</a></td></tr>
<tr><td>247</td><td>⚠️</td><td>cbbp1.com</td><td colspan="2">–</td></tr>
<tr><td>248</td><td>⚠️</td><td>gamersky.com</td><td colspan="2">–</td></tr>
<tr><td>249</td><td>⚠️</td><td>toutiao.com</td><td>✅</td><td><a href="test-details.md#249-toutiaocom-validation">12 errors</a></td></tr>
<tr><td>250</td><td>⚠️</td><td>mozilla.org</td><td>✅</td><td><a href="test-details.md#250-mozillaorg-validation">1 error</a></td></tr></table>

<!-- /table -->
