'use strict'

const noQueryBookList = {
  books: [{
    author: ['GreyWilson'],
    id: 51,
    image: 'https://img3.doubanio.com/lpic/s3337523.jpg',
    isbn: '9787111251330',
    price: '99.00\u5143',
    title: '\u4ee3\u7801\u4e4b\u7f8e'
  }, {
    author: ['MagnusLieHetland'],
    id: 183,
    image: 'https://img3.doubanio.com/lpic/s4387251.jpg',
    isbn: '9787115230270',
    price: '69.00\u5143',
    title: 'Python\u57fa\u7840\u6559\u7a0b'
  }, {
    author: ['\u970d\u987f (Ivor Horton)'],
    id: 254,
    image: 'https://img1.doubanio.com/lpic/s28035177.jpg',
    isbn: '9787302170839',
    price: '69.80\u5143',
    title: 'C\u8bed\u8a00\u5165\u95e8\u7ecf\u5178'
  }, {
    author: ['Neil Matthew', 'Richard Stones'],
    id: 302,
    image: 'https://img3.doubanio.com/lpic/s4360010.jpg',
    isbn: '9787115228215',
    price: '99.00\u5143',
    title: 'Linux\u7a0b\u5e8f\u8bbe\u8ba1'
  }, {
    author: ['Jonathan Bartlett'],
    id: 326,
    image: 'https://img3.doubanio.com/lpic/s1659283.jpg',
    isbn: '9780975283844',
    price: 'USD 34.95',
    title: 'Programming From The Ground Up'
  }, {
    author: ['\u674e\u96ea\u98de', '\u5434\u660e\u6656'],
    id: 387,
    image: 'https://img1.doubanio.com/lpic/s4532717.jpg',
    isbn: '9787115241160',
    price: '59.00\u5143',
    title: 'Android\u5f00\u53d1\u5165\u95e8\u6559\u7a0b'
  }, {
    author: ['W.Jason Gilmore'],
    id: 521,
    image: 'https://img3.doubanio.com/lpic/s2160043.jpg',
    isbn: '9787115155092',
    price: '79.00\u5143',
    title: 'PHP\u4e0eMySQL 5\u7a0b\u5e8f\u8bbe\u8ba1'
  }, {
    author: ['[\u7f8e] David Cochran', '[\u7f8e] Ian Whitley'],
    id: 600,
    image: 'https://img1.doubanio.com/lpic/s28058478.jpg',
    isbn: '9787115388872',
    price: '49.00\u5143',
    title: 'Bootstrap\u5b9e\u6218'
  }, {
    author: ['\u7f57\u5251\u950b'],
    id: 612,
    image: 'https://img1.doubanio.com/lpic/s6221009.jpg',
    isbn: '9787121115776',
    price: '79.00\u5143',
    title: 'Boost\u7a0b\u5e8f\u5e93\u5b8c\u5168\u5f00\u53d1\u6307\u5357'
  }, {
    author: ['\u8fbe\u79d1\u7279 (Jon Duckett)'],
    id: 639,
    image: 'https://img3.doubanio.com/lpic/s11372596.jpg',
    isbn: '9787302215974',
    price: '79.80\u5143',
    title: 'Web\u7f16\u7a0b\u5165\u95e8\u7ecf\u5178'
  }, {
    author: ['David S. Touretzky'],
    id: 708,
    image: 'https://img3.doubanio.com/lpic/s2723575.jpg',
    isbn: '9780805304923',
    price: 'GBP 38.03',
    title: 'Common Lisp'
  }, {
    author: ['(\u7f8e) \u7b56\u5e0c\u7eb3(Zechner, M.)', '\u65e0(\u7f8e) \u683c\u6797(Green, R.) \u8457'],
    id: 804,
    image: 'https://img3.doubanio.com/lpic/s24174500.jpg',
    isbn: '9787302301059',
    price: '69.00\u5143',
    title: 'Android 4\u6e38\u620f\u7f16\u7a0b\u5165\u95e8\u7ecf\u5178'
  }, {
    author: ['Till Adam'],
    id: 857,
    image: 'https://img3.doubanio.com/lpic/s4018061.jpg',
    isbn: '9787111283560',
    price: '75',
    title: '\u67b6\u6784\u4e4b\u7f8e'
  }, {
    author: ['[\u7f8e] Karli Watson', 'Christian Nagel'],
    id: 882,
    image: 'https://img3.doubanio.com/lpic/s25791815.jpg',
    isbn: '9787302127352',
    price: '98.00\u5143',
    title: 'C#\u5165\u95e8\u7ecf\u5178'
  }, {
    author: ['\u83ab\u91cc\u68ee'],
    id: 903,
    image: 'https://img3.doubanio.com/lpic/s26278533.jpg',
    isbn: '9787115136602',
    price: '49.00\u5143',
    title: '\u6e38\u620f\u7f16\u7a0b\u5165\u95e8'
  }, {
    author: ['[\u7f8e]Paul Wilton', '[\u7f8e]John Colby'],
    id: 914,
    image: 'https://img1.doubanio.com/lpic/s1765829.jpg',
    isbn: '9787302128335',
    price: '48.00\u5143',
    title: 'SQL\u5165\u95e8\u7ecf\u5178'
  }, {
    author: ['[\u82f1]\u963f\u9053\u53f8\u00b7\u8d6b\u80e5\u9ece'],
    id: 1021,
    image: 'https://img1.doubanio.com/lpic/s1344337.jpg',
    isbn: '9787536671805',
    price: '20.00\u5143',
    title: '\u7f8e\u4e3d\u65b0\u4e16\u754c'
  }, {
    author: ['[\u5965\u5730\u5229]\u65af\u8482\u82ac\u00b7\u8328\u5a01\u683c'],
    id: 1041,
    image: 'https://img1.doubanio.com/lpic/s2611329.jpg',
    isbn: '9787532741571',
    price: '20.00\u5143',
    title: '\u4e00\u4e2a\u964c\u751f\u5973\u4eba\u7684\u6765\u4fe1'
  }, {
    author: ['[\u7f8e]\u7f57\u4f2f\u7279\u00b7\u9ea6\u5361\u8499'],
    id: 1154,
    image: 'https://img3.doubanio.com/lpic/s5107054.jpg',
    isbn: '9787544716888',
    price: '36.00\u5143',
    title: '\u5947\u98ce\u5c81\u6708'
  }, {
    author: ['[\u7f8e]\u5361\u68ee\u00b7\u9ea6\u5361\u52d2\u65af'],
    id: 1243,
    image: 'https://img1.doubanio.com/lpic/s4048179.jpg',
    isbn: '9787542625229',
    price: '15.00\u5143',
    title: '\u4f24\u5fc3\u5496\u5561\u9986\u4e4b\u6b4c'
  },
  {
    author: ['\u5f20\u6052'],
    id: 2587,
    image: 'https://img3.doubanio.com/lpic/s27984315.jpg',
    isbn: '9787115371768',
    price: '35',
    title: '\u4ece\u95e8\u5916\u6c49\u5230BAT\u4ea7\u54c1\u7ecf\u7406\u6709\u591a\u8fdc'
  }, {
    author: ['Brad Stone'],
    id: 2635,
    image: 'https://img3.doubanio.com/lpic/s29320533.jpg',
    isbn: '9780593076354',
    price: 'GBP 13.99',
    title: 'The Upstarts'
  }, {
    author: ['[\u7f8e]\u4e9a\u5386\u514b\u65af\u2022\u535a\u53e4\u65af\u57fa\uff08Alex Bogusky\uff09', '[\u7f8e]\u7ea6\u7ff0\u2022\u6e29\u838e\uff08John Winsor\uff09'],
    id: 2764,
    image: 'https://img3.doubanio.com/lpic/s22896015.jpg',
    isbn: '9787213051289',
    price: '42.90\u5143',
    title: '\u81ea\u8425\u9500'
  }, {
    author: ['[\u7f8e]\u4f55\u9a6c\u514b\uff08Mark Hurst\uff09'],
    id: 2797,
    image: 'https://img1.doubanio.com/lpic/s24522698.jpg',
    isbn: '9787121191015',
    price: '45.00\u5143',
    title: '\u6bd4\u7279\u7d20\u517b'
  }, {
    author: ['[\u7f8e]\u5e03\u62c9\u5fb7\u00b7\u83f2\u5c14\u5fb7', '[\u7f8e]\u6770\u68ee\u00b7\u95e8\u5fb7\u5c14\u677e'],
    id: 2798,
    image: 'https://img1.doubanio.com/lpic/s28097168.jpg',
    isbn: '9787111473152',
    price: '49.00\u5143',
    title: '\u98ce\u9669\u6295\u8d44\u4ea4\u6613'
  }, {
    author: ['Melanie Swan'],
    id: 2815,
    image: 'https://img3.doubanio.com/lpic/s28271131.jpg',
    isbn: '9781491920497',
    price: 'USD 24.99',
    title: 'Blockchain'
  }, {
    author: ['\u5927\u536b\u2022\u82ac\u96f7\u5e03 (David Feinleib)'],
    id: 2913,
    image: 'https://img3.doubanio.com/lpic/s27153366.jpg',
    isbn: '9787213058424',
    price: '45.9\u5143',
    title: '\u5927\u6570\u636e\u4e91\u56fe'
  }, {
    author: ['[\u7f8e]\u7ea6\u7ff0\u00b7\u6885\u8fea\u7eb3'],
    id: 3057,
    image: 'https://img1.doubanio.com/lpic/s4331978.jpg',
    isbn: '9787300113913',
    price: '39.80\u5143',
    title: '\u8ba9\u5927\u8111\u81ea\u7531'
  }, {
    author: ['(\u7f8e)\u83f2\u5229\u666e\u00b7\u7eb3\u5c14\u900a'],
    id: 3122,
    image: 'https://img3.doubanio.com/lpic/s1991475.jpg',
    isbn: '9787532386222',
    price: '97.00\u5143',
    title: '\u751f\u7269\u7269\u7406\u5b66'
  }, {
    author: ['[\u82f1] \u5c3c\u514b\u30fb\u963f\u8bfa\u5fb7', '[\u82f1] \u6258\u5c3c\u30fb\u5fb7\u30fb\u7d22\u96f7\u65af'],
    id: 3240,
    image: 'https://img3.doubanio.com/lpic/s10297955.jpg',
    isbn: '9787530112649',
    price: '9.80',
    title: '\u8eab\u4f53\u4f7f\u7528\u624b\u518c'
  }, {
    author: ['Douglas R. Hofstadter'],
    id: 3403,
    image: 'https://img3.doubanio.com/lpic/s29404943.jpg',
    isbn: '9780465030781',
    price: 'USD 26.95',
    title: 'I Am a Strange Loop'
  }, {
    author: ['P. B. Medawar'],
    id: 3431,
    image: 'https://img3.doubanio.com/lpic/s4257580.jpg',
    isbn: '9780465000920',
    price: 'GBP 14.99',
    title: 'Advice to a Young Scientist'
  }, {
    author: ['[\u7f8e]\u96c5\u5404\u5e03\u00b7\u79d1\u7ef4'],
    id: 3527,
    image: 'https://img1.doubanio.com/lpic/s4555529.jpg',
    isbn: '9787802514461',
    price: '45.00\u5143',
    title: '\u5f02\u517d\u56fe\u5fd7'
  }, {
    author: ['[\u7f8e]\u535a\u897f\u683c\u8bfa'],
    id: 3575,
    image: 'https://img1.doubanio.com/lpic/s24933257.jpg',
    isbn: '9787508040004',
    price: '89.00\u5143',
    title: '\u6cd5\u5f8b\u4e4b\u95e8'
  }, {
    author: ['[\u7f8e] \u5927\u536b\u00b7\u514b\u91cc\u65af\u8482\u5b89\uff08David Christian\uff09', '\u8f9b\u897f\u5a05\u00b7\u65af\u6258\u514b\u65af\u00b7\u5e03\u6717 (Cynthia Stokes Brown)', '\u514b\u96f7\u683c\u00b7\u672c\u6770\u660e (Craig Benjamin)'],
    id: 3613,
    image: 'https://img1.doubanio.com/lpic/s28855417.jpg',
    isbn: '9787550274860',
    price: '88.00\u5143',
    title: '\u5927\u5386\u53f2'
  }, {
    author: ['[\u82f1] \u53f2\u8482\u82ac\u00b7\u970d\u91d1'],
    id: 3653,
    image: 'https://img1.doubanio.com/lpic/s29502247.jpg',
    isbn: '9787535792488',
    price: '39.00\u5143',
    title: '\u9ed1\u6d1e\u4e0d\u662f\u9ed1\u7684'
  }, {
    author: ['[\u5fb7] \u5ef6\u65af\u00b7\u54c8\u5fb7'],
    id: 3658,
    image: 'https://img1.doubanio.com/lpic/s29486857.jpg',
    isbn: '9787559603470',
    price: '188.00\u5143',
    title: '\u4e07\u7269\uff1a\u6587\u660e'
  }, {
    author: ['[\u7f8e]\u963f\u56fe\u00b7\u845b\u6587\u5fb7'],
    id: 3691,
    image: 'https://img3.doubanio.com/lpic/s29582632.jpg',
    isbn: '9787213067822',
    price: '49.90',
    title: '\u533b\u751f\u7684\u7cbe\u8fdb'
  }, {
    author: ['[\u7f8e]\u963f\u56fe\u00b7\u845b\u6587\u5fb7'],
    id: 3709,
    image: 'https://img3.doubanio.com/lpic/s28355811.jpg',
    isbn: '9787213067792',
    price: '49.90',
    title: '\u6700\u597d\u7684\u544a\u522b'
  }, {
    author: ['[\u82f1] \u8482\u59c6\u00b7\u4f2f\u514b\u9ed1\u5fb7'],
    id: 3732,
    image: 'https://img3.doubanio.com/lpic/s29234972.jpg',
    isbn: '9787100123730',
    price: '50.00',
    title: '\u9e1f\u7684\u611f\u5b98'
  },
  {
    author: ['[\u82f1]\u4f0a\u592b\u6797\u00b7\u6c83'],
    id: 1325,
    image: 'https://img3.doubanio.com/lpic/s4000802.jpg',
    isbn: '9787544709071',
    price: '29.80\u5143',
    title: '\u65e7\u5730\u91cd\u6e38'
  }, {
    author: ['[\u7f8e]\u675c\u9c81\u95e8\u00b7\u5361\u6ce2\u7279'],
    id: 1357,
    image: 'https://img3.doubanio.com/lpic/s4562901.jpg',
    isbn: '9787544236607',
    price: '28.00',
    title: '\u8482\u51e1\u5c3c\u7684\u65e9\u9910'
  }, {
    author: ['David Foster Wallace'],
    id: 1379,
    image: 'https://img1.doubanio.com/lpic/s4470718.jpg',
    isbn: '9780316921176',
    price: 'USD 19.95',
    title: 'Infinite Jest'
  }, {
    author: ['[\u7f8e]\u52b3\u4f26\u00b7\u5965\u5229\u5f17'],
    id: 1412,
    image: 'https://img1.doubanio.com/lpic/s28291238.jpg',
    isbn: '9787540446857',
    price: '38.00\u5143',
    title: '\u5ffd\u7136\u4e03\u65e5'
  }, {
    author: ['[\u963f\u6839\u5ef7]\u80e1\u5229\u5965\u00b7\u79d1\u5854\u8428\u5c14'],
    id: 1470,
    image: 'https://img3.doubanio.com/lpic/s4692954.jpg',
    isbn: '9787020084920',
    price: '16.00\u5143',
    title: '\u52a8\u7269\u5bd3\u8a00\u96c6'
  }, {
    author: ['[\u6cd5]\u5f17\u6717\u7d22\u74e6\u5179\u00b7\u8428\u5188'],
    id: 1493,
    image: 'https://img3.doubanio.com/lpic/s2349716.jpg',
    isbn: '9787020054367',
    price: '24.00\u5143',
    title: '\u4f60\u597d\uff0c\u5fe7\u6101'
  }, {
    author: ['\u5c3c\u845b\u6d1b\u5e9e\u5e1d'],
    id: 1999,
    image: 'https://img3.doubanio.com/lpic/s11133355.jpg',
    isbn: '9787806176436',
    price: '16.80\u5143',
    title: '\u6570\u5b57\u5316\u751f\u5b58'
  }, {
    author: ['\u9a6c\u514b\u00b7\u8d1d\u5c3c\u5965\u592b', '\u5361\u83b1\u5c14\u00b7\u963f\u5fb7\u52d2'],
    id: 2041,
    image: 'https://img3.doubanio.com/lpic/s4410422.jpg',
    isbn: '9787807479048',
    price: '36.00\u5143',
    title: '\u4e91\u653b\u7565'
  }, {
    author: ['[\u7f8e]\u6bd4\u5c14\u00b7\u76d6\u8328'],
    id: 2100,
    image: 'https://img3.doubanio.com/lpic/s1343093.jpg',
    isbn: '9787301040034',
    price: '26.00',
    title: '\u672a\u6765\u65f6\u901f-\u6570\u5b57\u7cfb\u7edf\u4e0e\u5546\u52a1\u65b0\u601d\u7ef4'
  }, {
    author: ['John Palfrey', 'Urs Gasser'],
    id: 2136,
    image: 'https://img3.doubanio.com/lpic/s4243606.jpg',
    isbn: '9780465005154',
    price: 'USD 25.95',
    title: 'Born Digital'
  }, {
    author: ['Gavin Bell'],
    id: 2138,
    image: 'https://img3.doubanio.com/lpic/s4616894.jpg',
    isbn: '9787111315216',
    price: '69.00\u5143',
    title: 'SNS\u7f51\u7ad9\u6784\u5efa'
  }, {
    author: ['(\u7f8e)\u83f2\u5229\u666e\u00b7\u79d1\u7279\u52d2', '(\u5fb7)\u5f17\u6c83\u5fb7'],
    id: 2249,
    image: 'https://img3.doubanio.com/lpic/s8881261.jpg',
    isbn: '9787543214064',
    price: '35.00\u5143',
    title: 'B2B\u54c1\u724c\u7ba1\u7406'
  }, {
    author: ['Peter Fisk'],
    id: 2272,
    image: 'https://img3.doubanio.com/lpic/s3965793.jpg',
    isbn: '9787802552548',
    price: '55.00\u5143',
    title: '\u5546\u4e1a\u5929\u624d'
  }, {
    author: ['[\u82f1]\u7ef4\u514b\u6258\u00b7\u8fc8\u5c14\u00b7\u820d\u6069\u4f2f\u683c'],
    id: 2283,
    image: 'https://img3.doubanio.com/lpic/s24574862.jpg',
    isbn: '9787213052545',
    price: '49.90\u5143',
    title: '\u5927\u6570\u636e\u65f6\u4ee3'
  }, {
    author: ['\u963f\u5c14\u6587\u5fb7\u00b7\u7eb3\u62c9\u4e9a\u5357', '\u7ea6\u4ec0\u00b7\u8d1d\u52aa', '\u7231\u5fb7\u534e\u00b7\u8d39\u5c14\u987f', '\u5b89\u5fb7\u9c81\u00b7\u7c73\u52d2', '\u53f2\u8482\u6587\u00b7\u6208\u5fb7\u8d39\u5fb7'],
    id: 2314,
    image: 'https://img3.doubanio.com/lpic/s28997272.jpg',
    isbn: '9787508665849',
    price: 'CNY 79.00',
    title: '\u533a\u5757\u94fe\u6280\u672f\u9a71\u52a8\u91d1\u878d'
  }, {
    author: ['\u3010\u7f8e\u3011\u5b89\u59ae\u5854\u2022\u57c3\u5c14\u4f2f\u65af'],
    id: 2427,
    image: 'https://img3.doubanio.com/lpic/s28385775.jpg',
    isbn: '9787508658742',
    price: '49',
    title: '\u7206\u6b3e\uff1a\u5982\u4f55\u6253\u9020\u8d85\u7ea7IP'
  }, {
    author: ['[\u7f8e]\u827e\u4f2f\u7279-\u62c9\u65af\u6d1b\u00b7\u5df4\u62c9\u5df4\u897f'],
    id: 2463,
    image: 'https://img3.doubanio.com/lpic/s10579445.jpg',
    isbn: '9787300154749',
    price: '59.90\u5143',
    title: '\u7206\u53d1'
  }, {
    author: ['\u5f7c\u5f97\u00b7 \u6234\u66fc\u8fea\u65af', '\u53f2\u8482\u82ac\u00b7 \u79d1\u7279\u52d2'],
    id: 2499,
    image: 'https://img3.doubanio.com/lpic/s28270594.jpg',
    isbn: '9787213067808',
    price: '69.90\u5143',
    title: '\u521b\u4e1a\u65e0\u754f'
  }, {
    author: ['[\u52a0]\u5510\u5854\u666e\u65af\u79d1\u7279\uff08Don Tapscott\uff09', '[\u52a0]\u4e9a\u529b\u514b\u65af\u00b7\u5854\u666e\u65af\u79d1\u7279(Alex Tapscott)'],
    id: 2511,
    image: 'https://img3.doubanio.com/lpic/s29036054.jpg',
    isbn: '9787508666853',
    price: '69',
    title: '\u533a\u5757\u94fe\u9769\u547d'
  }, {
    author: ['Cal Henderson'],
    id: 2544,
    image: 'https://img3.doubanio.com/lpic/s2966683.jpg',
    isbn: '9787121060793',
    price: '58.00\u5143',
    title: '\u6784\u5efa\u53ef\u6269\u5c55\u7684Web\u7ad9\u70b9'
  },
  {
    author: ['\u675c\u8fdc\u541b', '\u6797\u5eb7\u53f8', '\u6797\u4e0a\u6770'],
    id: 4121,
    image: 'https://img1.doubanio.com/lpic/s1248978.jpg',
    isbn: '9787505398245',
    price: '59.0',
    title: 'JSP 2.0\u6280\u672f\u624b\u518c'
  }, {
    author: ['\u9c8d\u683c\u65af\u5766'],
    id: 4680,
    image: 'https://img1.doubanio.com/lpic/s8822067.jpg',
    isbn: '9787508322735',
    price: '79.00\u5143',
    title: 'JSP\u8bbe\u8ba1\uff08\u7b2c\u4e09\u7248\uff09'
  }, {
    author: ['\u98de\u601d\u79d1\u6280\u4ea7\u54c1\u7814\u53d1\u4e2d\u5fc3'],
    id: 4814,
    image: 'https://img3.doubanio.com/lpic/s1157772.jpg',
    isbn: '9787505394193',
    price: '55.00',
    title: 'JSP \u5e94\u7528\u5f00\u53d1\u8be6\u89e3\uff08\u7b2c\u4e8c\u7248\uff09'
  }, {
    author: ['\u5218\u6653\u534e'],
    id: 4922,
    image: 'https://img1.doubanio.com/lpic/s24476118.jpg',
    isbn: '9787121028427',
    price: '59.80\u5143',
    title: 'JSP\u5e94\u7528\u5f00\u53d1\u8be6\u89e3'
  }, {
    author: ['\u738b\u9ece//\u4e8e\u6c38\u519b//\u5f20\u8c6a'],
    id: 5042,
    image: 'https://img1.doubanio.com/lpic/s6100467.jpg',
    isbn: '9787302209102',
    price: '49.00\u5143',
    title: 'JSP+Dreamweaver CS4+CSS+Ajax\u52a8\u6001\u7f51\u7ad9\u5f00\u53d1\u5178\u578b\u6848\u4f8b'
  }, {
    author: ['VIVEK CHOPRA', 'JON EAVES', 'RUPERT JONES'],
    id: 5069,
    image: 'https://img1.doubanio.com/lpic/s1536767.jpg',
    isbn: '9787115141521',
    price: '45.00\u5143',
    title: 'JSP\u7a0b\u5e8f\u8bbe\u8ba1'
  }, {
    author: ['\u67f3\u6c38\u5761'],
    id: 5185,
    image: 'https://img3.doubanio.com/lpic/s5686804.jpg',
    isbn: '9787115137241',
    price: '52.00\u5143',
    title: 'JSP\u5e94\u7528\u5f00\u53d1\u6280\u672f'
  }, {
    author: ['\u4e07\u5cf0\u79d1\u6280'],
    id: 5289,
    image: 'https://img3.doubanio.com/lpic/s9986822.jpg',
    isbn: '9787121014826',
    price: '49.00\u5143',
    title: 'JSP\u7f51\u7ad9\u5f00\u53d1\u56db\u201c\u9177\u201d\u5168\u4e66'
  }, {
    author: [],
    id: 5312,
    image: 'https://img1.doubanio.com/lpic/s5954069.jpg',
    isbn: '9787121071263',
    price: '79.00\u5143',
    title: 'JSP\u7f51\u7ad9\u5f00\u53d1\u8be6\u89e3'
  },
  {
    author: ['\u5f20\u8000\u6625', '\u7b49'],
    id: 4530,
    image: 'https://img1.doubanio.com/lpic/s29029037.jpg',
    isbn: '9787121287220',
    price: 'CNY 99.00',
    title: 'Vue.js\u6743\u5a01\u6307\u5357'
  }
  ],
  totalPage: 4,
}

module.exports = {
  noQueryBookList,
}
