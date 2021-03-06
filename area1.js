/**
 * Created by Administrator on 2016/6/6.
 */
var city ={
  '北京市': [ '116.397947', '39.908173' ],
  '天津市': [ '117.252381', '39.103856' ],
  '石家庄': [ '114.489244', '38.074126' ],
  '唐山市': [ '118.180404', '39.630581' ],
  '秦皇岛': [ '119.633571', '39.954178' ],
  '邯郸市': [ '114.48064', '36.609637' ],
  '邢台市': [ '114.493246', '37.068302' ],
  '保定市': [ '115.474387', '38.867488' ],
  '张家口': [ '115.105519', '40.492344' ],
  '承德市': [ '117.88521', '41.029951' ],
  '沧州市': [ '116.838838', '38.304453' ],
  '廊坊市': [ '116.755518', '39.393224' ],
  '衡水市': [ '115.698684', '37.735299' ],
  '太原市': [ '112.522305', '37.835742' ],
  '大同市': [ '113.226621', '40.055779' ],
  '阳泉市': [ '113.592539', '37.856321' ],
  '长治市': [ '113.123474', '36.200867' ],
  '晋城市': [ '112.851766', '35.490865' ],
  '朔州市': [ '112.371436', '39.415126' ],
  '晋中市': [ '112.752632', '37.687208' ],
  '运城市': [ '111.007318', '35.026368' ],
  '忻州市': [ '112.734264', '38.416367' ],
  '临汾市': [ '111.518848', '36.087743' ],
  '吕梁市': [ '111.150591', '37.5177' ],
  '呼和浩特': [ '111.814556', '40.867233' ],
  '包头市': [ '109.930036', '40.642867' ],
  '乌海市': [ '106.822697', '39.690512' ],
  '赤峰市': [ '118.984745', '42.290382' ],
  '通辽市': [ '122.134699', '46.087177' ],
  '鄂尔多斯': [ '109.974421', '39.813712' ],
  '呼伦贝尔': [ '119.765772', '49.211941' ],
  '巴彦淖尔': [ '107.386819', '40.765908' ],
  '乌兰察布': [ '113.121092', '41.031707' ],
  '兴安盟': [ '122.134699', '46.087177' ],
  '锡林郭勒': [ '116.099374', '43.945488' ],
  '阿拉善': [ '105.686073', '38.846368' ],
  '沈阳市': [ '123.416408', '41.827587' ],
  '大连市': [ '121.616485', '38.914453' ],
  '鞍山市': [ '123.026898', '41.06319' ],
  '抚顺市': [ '123.95388', '41.876998' ],
  '本溪市': [ '123.799084', '41.292753' ],
  '丹东市': [ '124.384214', '40.124644' ],
  '锦州市': [ '121.096802', '41.125506' ],
  '营口市': [ '122.298507', '40.600244' ],
  '阜新市': [ '121.674829', '42.018166' ],
  '辽阳市': [ '123.401806', '41.15129' ],
  '盘锦市': [ '122.031144', '41.162897' ],
  '铁岭市': [ '123.842343', '42.286254' ],
  '朝阳市': [ '120.454627', '41.585276' ],
  '葫芦岛': [ '120.836316', '40.711012' ],
  '长春市': [ '125.324789', '43.886859' ],
  '吉林市': [ '126.468794', '43.873543' ],
  '四平市': [ '124.414651', '43.096862' ],
  '辽源市': [ '125.146111', '42.904223' ],
  '通化市': [ '125.994151', '41.75088' ],
  '白山市': [ '126.423583', '41.939996' ],
  '松原市': [ '124.825115', '45.141791' ],
  '白城市': [ '122.851052', '45.621669' ],
  '延边': [ '129.497652', '42.894155' ],
  '哈尔滨': [ '126.723787', '45.973419' ],
  '齐齐哈尔': [ '123.943344', '47.431803' ],
  '鸡西市': [ '130.938642', '45.323917' ],
  '鹤岗市': [ '130.300824', '47.333675' ],
  '双鸭山': [ '131.188227', '46.621088' ],
  '大庆市': [ '124.757513', '46.40183' ],
  '伊春市': [ '128.91852', '47.775322' ],
  '佳木斯': [ '130.2756', '46.770417' ],
  '七台河': [ '131.01575', '45.769581' ],
  '牡丹江': [ '129.700749', '44.51379' ],
  '黑河市': [ '127.500941', '50.247891' ],
  '绥化市': [ '126.980002', '46.636634' ],
  '大兴安岭': [ '124.397367', '51.673666' ],
  '上海市': [ '121.469269', '31.238176' ],
  '南京市': [ '118.797741', '32.055645' ],
  '无锡市': [ '120.31968', '31.526047' ],
  '徐州市': [ '118.350692', '34.29166' ],
  '常州市': [ '119.939214', '31.755841' ],
  '苏州市': [ '120.406916', '31.237022' ],
  '南通市': [ '120.908479', '31.954274' ],
  '连云港': [ '119.506767', '34.608663' ],
  '淮安市': [ '119.056649', '33.603325' ],
  '盐城市': [ '120.1635', '33.347469' ],
  '扬州市': [ '119.413201', '32.394475' ],
  '镇江市': [ '119.418318', '32.059064' ],
  '泰州市': [ '119.911834', '32.359944' ],
  '宿迁市': [ '118.275279', '33.962494' ],
  '杭州市': [ '120.172974', '30.273977' ],
  '宁波市': [ '121.54399', '29.868336' ],
  '温州市': [ '120.65486', '27.98704' ],
  '嘉兴市': [ '120.758543', '30.753924' ],
  '湖州市': [ '120.179003', '30.784502' ],
  '绍兴市': [ '120.586109', '29.995762' ],
  '金华市': [ '119.63238', '29.031361' ],
  '衢州市': [ '118.925543', '28.977144' ],
  '舟山市': [ '122.106267', '30.027516' ],
  '台州市': [ '121.213617', '28.627021' ],
  '丽水市': [ '119.916426', '28.451836' ],
  '合肥市': [ '117.259151', '31.795643' ],
  '芜湖市': [ '118.373244', '31.406781' ],
  '蚌埠市': [ '117.35851', '32.946841' ],
  '淮南市': [ '117.038534', '32.649674' ],
  '马鞍山': [ '118.552319', '31.692818' ],
  '淮北市': [ '116.886291', '34.01875' ],
  '铜陵市': [ '117.824786', '30.923782' ],
  '安庆市': [ '117.110052', '30.598238' ],
  '黄山市': [ '118.248811', '29.955836' ],
  '滁州市': [ '118.308409', '32.308046' ],
  '阜阳市': [ '115.826819', '32.908253' ],
  '宿州市': [ '116.985297', '33.639392' ],
  '巢湖市': [ '117.864718', '31.597856' ],
  '六安市': [ '116.495891', '31.748989' ],
  '亳州市': [ '115.779022', '33.876232' ],
  '池州市': [ '117.490786', '30.659926' ],
  '宣城市': [ '118.758817', '30.940716' ],
  '福州市': [ '119.306406', '26.076106' ],
  '厦门市': [ '118.089766', '24.479669' ],
  '莆田市': [ '119.108469', '25.384007' ],
  '三明市': [ '117.618213', '26.256483' ],
  '泉州市': [ '118.582295', '24.922033' ],
  '漳州市': [ '117.654991', '24.591529' ],
  '南平市': [ '118.182303', '26.640477' ],
  '龙岩市': [ '117.034188', '25.100649' ],
  '宁德市': [ '119.536679', '26.652819' ],
  '南昌市': [ '115.826905', '28.746779' ],
  '景德镇': [ '117.144492', '29.234554' ],
  '萍乡市': [ '113.854676', '27.622868' ],
  '九江市': [ '115.998105', '29.61015' ],
  '新余市': [ '114.934115', '27.804101' ],
  '鹰潭市': [ '117.069218', '28.26005' ],
  '赣州市': [ '114.941829', '25.862825' ],
  '吉安市': [ '114.992909', '27.113038' ],
  '宜春市': [ '114.395109', '27.796565' ],
  '抚州市': [ '116.362606', '27.979271' ],
  '上饶市': [ '117.976373', '28.443318' ],
  '济南市': [ '116.99741', '36.651016' ],
  '青岛市': [ '120.415961', '36.107933' ],
  '淄博市': [ '118.098607', '36.635805' ],
  '枣庄市': [ '117.323524', '34.822514' ],
  '东营市': [ '118.676055', '37.435059' ],
  '烟台市': [ '121.447946', '37.463695' ],
  '潍坊市': [ '119.162124', '36.707358' ],
  '济宁市': [ '116.597096', '35.406646' ],
  '泰安市': [ '117.087972', '36.20227' ],
  '威海市': [ '122.118498', '37.5125' ],
  '日照市': [ '119.444894', '35.423329' ],
  '莱芜市': [ '117.678069', '36.211697' ],
  '临沂市': [ '118.3464', '35.051834' ],
  '德州市': [ '116.302632', '37.451516' ],
  '聊城市': [ '115.98508', '36.459294' ],
  '滨州市': [ '117.971427', '37.381522' ],
  '菏泽市': [ '115.460354', '35.247485' ],
  '郑州市': [ '113.658221', '34.780377' ],
  '开封市': [ '114.34683', '34.817318' ],
  '洛阳市': [ '112.442075', '34.65155' ],
  '平顶山': [ '113.264387', '33.742078' ],
  '安阳市': [ '114.275247', '36.096967' ],
  '鹤壁市': [ '114.297273', '35.750483' ],
  '新乡市': [ '113.875061', '35.346898' ],
  '焦作市': [ '113.274386', '35.269098' ],
  '濮阳市': [ '115.029334', '35.762141' ],
  '许昌市': [ '113.832243', '34.022155' ],
  '漯河市': [ '114.016542', '33.581411' ],
  '三门峡': [ '111.200212', '34.771644' ],
  '南阳市': [ '112.548462', '32.995005' ],
  '商丘市': [ '115.635502', '34.416266' ],
  '信阳市': [ '114.08864', '32.106915' ],
  '周口市': [ '114.657515', '33.618354' ],
  '驻马店': [ '114.028022', '32.983171' ],
  '济源市': [ '112.588116', '35.090329' ],
  '武汉市': [ '114.381419', '30.561162' ],
  '黄石市': [ '115.038518', '30.199656' ],
  '十堰市': [ '110.701804', '32.583831' ],
  '宜昌市': [ '111.261345', '30.966552' ],
  '襄阳市': [ '112.158845', '32.129269' ],
  '鄂州市': [ '114.89414', '30.389072' ],
  '荆门市': [ '112.112313', '31.099522' ],
  '孝感市': [ '113.916904', '30.924574' ],
  '荆州市': [ '112.221694', '30.39072' ],
  '黄冈市': [ '114.874484', '30.458653' ],
  '咸宁市': [ '114.321767', '29.833543' ],
  '随州市': [ '113.375495', '31.716705' ],
  '恩施': [ '109.482343', '30.289922' ],
  '仙桃市': [ '113.167419', '30.767799' ],
  '潜江市': [ '113.16653', '30.663372' ],
  '天门市': [ '113.16653', '30.663372' ],
  '神农架': [ '113.16653', '30.663372' ],
  '长沙市': [ '113.009351', '28.208469' ],
  '株洲市': [ '113.168696', '27.88726' ],
  '湘潭市': [ '112.907342', '27.856322' ],
  '衡阳市': [ '112.636954', '26.883388' ],
  '邵阳市': [ '111.481866', '27.239788' ],
  '岳阳市': [ '113.035712', '29.444886' ],
  '常德市': [ '111.699146', '29.043498' ],
  '张家界': [ '110.475361', '29.205462' ],
  '益阳市': [ '112.347447', '28.582845' ],
  '郴州市': [ '113.028975', '25.795284' ],
  '永州市': [ '111.614002', '26.226228' ],
  '怀化市': [ '109.997638', '27.55584' ],
  '娄底市': [ '111.996002', '27.701692' ],
  '湘西': [ '109.600618', '27.947223' ],
  '广州市': [ '113.341527', '23.127041' ],
  '韶关市': [ '113.545579', '24.779127' ],
  '深圳市': [ '114.057795', '22.54423' ],
  '珠海市': [ '113.385912', '22.158354' ],
  '汕头市': [ '116.58096', '23.339074' ],
  '佛山市': [ '113.121489', '23.030501' ],
  '江门市': [ '113.029146', '22.451639' ],
  '湛江市': [ '110.386065', '21.156719' ],
  '茂名市': [ '110.857716', '21.653918' ],
  '肇庆市': [ '112.465196', '23.047729' ],
  '惠州市': [ '114.417425', '23.089611' ],
  '梅州市': [ '116.120542', '24.289941' ],
  '汕尾市': [ '115.419252', '22.781177' ],
  '河源市': [ '114.699883', '23.74326' ],
  '阳江市': [ '111.981851', '21.861339' ],
  '清远市': [ '113.045465', '23.688233' ],
  '东莞市': [ '113.751572', '23.019965' ],
  '中山市': [ '113.392746', '22.515976' ],
  '潮州市': [ '116.621515', '23.654745' ],
  '揭阳市': [ '116.368411', '23.549146' ],
  '云浮市': [ '112.044025', '22.929376' ],
  '南宁市': [ '108.310905', '22.653799' ],
  '柳州市': [ '109.379926', '24.399244' ],
  '桂林市': [ '110.351669', '25.175621' ],
  '梧州市': [ '111.295924', '23.490446' ],
  '北海市': [ '109.321003', '21.533749' ],
  '防城港': [ '108.34661', '21.615662' ],
  '钦州市': [ '108.653798', '21.981682' ],
  '贵港市': [ '109.598944', '23.112003' ],
  '玉林市': [ '110.16547', '22.638462' ],
  '百色市': [ '106.618742', '23.9022' ],
  '贺州市': [ '111.566656', '24.403562' ],
  '河池市': [ '108.085567', '24.692597' ],
  '来宾市': [ '109.219551', '23.752354' ],
  '崇左市': [ '107.357948', '22.402627' ],
  '海口市': [ '110.331187', '20.015845' ],
  '三亚市': [ '109.511923', '18.252625' ],
  '五指山': [ '109.511923', '18.252625' ],
  '琼海市': [ '110.45517', '19.254108' ],
  '儋州市': [ '116.562386', '11.318545' ],
  '文昌市': [ '116.562386', '11.318545' ],
  '万宁市': [ '116.562386', '11.318545' ],
  '东方市': [ '109.504133', '18.252013' ],
  '定安县': [ '116.562386', '11.318545' ],
  '屯昌县': [ '116.562386', '11.318545' ],
  '澄迈县': [ '109.507052', '18.249731' ],
  '临高县': [ '116.455078', '11.652236' ],
  '白沙': [ '116.562386', '11.318545' ],
  '昌江': [ '116.562386', '11.318545' ],
  '乐东': [ '109.17663', '18.745108' ],
  '陵水': [ '110.029085', '18.516726' ],
  '保亭': [ '109.700342', '18.626309' ],
  '琼中': [ '116.562386', '11.318545' ],
  '西沙': [ '116.562386', '11.318545' ],
  '南沙': [ '116.806641', '11.350797' ],
  '中沙': [ '113.291016', '12.297068' ],
  '重庆市': [ '106.548425', '29.554914' ],
  '成都市': [ '104.088668', '30.710589' ],
  '自贡市': [ '104.80912', '29.299995' ],
  '攀枝花': [ '101.718914', '26.583778' ],
  '泸州市': [ '105.408626', '28.763596' ],
  '德阳市': [ '104.397808', '31.127538' ],
  '绵阳市': [ '104.743084', '31.461477' ],
  '广元市': [ '105.843358', '32.435432' ],
  '遂宁市': [ '105.536932', '30.427593' ],
  '内江市': [ '105.127423', '29.634054' ],
  '乐山市': [ '103.701217', '29.47037' ],
  '南充市': [ '106.082997', '30.791258' ],
  '眉山市': [ '103.844297', '30.101484' ],
  '宜宾市': [ '104.621279', '28.770528' ],
  '广安市': [ '106.633204', '30.455925' ],
  '达州市': [ '107.500974', '31.217105' ],
  '雅安市': [ '103.013166', '29.980513' ],
  '巴中市': [ '106.744731', '31.865239' ],
  '资阳市': [ '104.627738', '30.127247' ],
  '阿坝': [ '102.222451', '31.899166' ],
  '甘孜': [ '101.865706', '30.14136' ],
  '凉山': [ '102.242289', '27.909523' ],
  '贵阳市': [ '106.761103', '26.543493' ],
  '六盘水': [ '104.872795', '26.582137' ],
  '遵义市': [ '106.909075', '27.65832' ],
  '安顺市': [ '105.938619', '26.245022' ],
  '铜仁': [ '109.187654', '27.718409' ],
  '黔西南': [ '104.894897', '25.093547' ],
  '毕节': [ '105.288398', '27.303223' ],
  '黔东南': [ '107.981003', '26.583068' ],
  '黔南': [ '107.511295', '26.283036' ],
  '昆明市': [ '102.700013', '25.012526' ],
  '曲靖市': [ '103.801478', '25.496016' ],
  '玉溪市': [ '102.546204', '24.351925' ],
  '保山市': [ '99.162598', '25.116213' ],
  '昭通市': [ '103.714017', '27.339245' ],
  '丽江市': [ '100.229945', '26.876096' ],
  '普洱市': [ '100.970535', '22.777794' ],
  '临沧市': [ '100.092756', '23.880344' ],
  '楚雄': [ '101.544721', '25.054929' ],
  '红河': [ '103.180032', '23.430135' ],
  '文山': [ '104.254632', '23.380294' ],
  '西双版纳': [ '100.79926', '22.010889' ],
  '大理': [ '100.222124', '25.584234' ],
  '德宏': [ '98.566933', '24.448439' ],
  '怒江': [ '98.902949', '25.858345' ],
  '迪庆': [ '99.709017', '27.859016' ],
  '拉萨市': [ '91.125101', '29.656843' ],
  '昌都': [ '97.150265', '31.181562' ],
  '山南': [ '91.804955', '29.240668' ],
  '日喀则': [ '88.888385', '29.271716' ],
  '那曲': [ '92.059293', '31.452426' ],
  '阿里': [ '80.102745', '32.551697' ],
  '林芝': [ '94.408318', '29.63521' ],
  '西安市': [ '108.94426', '34.264878' ],
  '铜川市': [ '108.980513', '34.908915' ],
  '宝鸡市': [ '106.951604', '34.426735' ],
  '咸阳市': [ '108.765035', '34.366314' ],
  '渭南市': [ '109.509788', '34.499996' ],
  '延安市': [ '109.489639', '36.585424' ],
  '汉中市': [ '107.031898', '33.068384' ],
  '榆林市': [ '109.735211', '38.285524' ],
  '安康市': [ '109.029307', '32.68478' ],
  '商洛市': [ '109.941237', '33.862701' ],
  '兰州市': [ '103.757243', '36.075898' ],
  '嘉峪关': [ '98.277887', '39.783559' ],
  '金昌市': [ '102.193762', '38.521016' ],
  '白银市': [ '104.141636', '36.54763' ],
  '天水市': [ '105.726028', '34.568696' ],
  '武威市': [ '102.642034', '37.928323' ],
  '张掖市': [ '100.461077', '38.931213' ],
  '平凉市': [ '106.697534', '35.529947' ],
  '酒泉市': [ '98.496466', '39.733693' ],
  '庆阳市': [ '107.632509', '35.738658' ],
  '定西市': [ '104.610604', '35.58066' ],
  '陇南市': [ '104.922534', '33.400581' ],
  '临夏': [ '103.201082', '35.591383' ],
  '甘南': [ '102.899215', '34.985443' ],
  '西宁市': [ '101.784693', '36.630614' ],
  '海东地': [ '102.086259', '36.509188' ],
  '海北': [ '100.972917', '36.943315' ],
  '黄南': [ '102.027336', '35.539935' ],
  '海南': [ '100.637727', '36.324383' ],
  '果洛': [ '100.295423', '34.477499' ],
  '玉树': [ '97.012968', '33.018308' ],
  '海西': [ '93.294536', '38.131367' ],
  '银川市': [ '106.273241', '38.475111' ],
  '石嘴山': [ '106.368288', '39.018842' ],
  '吴忠市': [ '106.200339', '37.998082' ],
  '固原市': [ '106.24261', '36.01593' ],
  '中卫市': [ '105.173836', '37.516942' ],
  '乌鲁木齐': [ '87.605163', '43.810314' ],
  '克拉玛依': [ '84.890403', '45.580421' ],
  '吐鲁番': [ '89.21069', '43.006962' ],
  '哈密': [ '93.550204', '42.899146' ],
  '昌吉': [ '87.988225', '44.00443' ],
  '博尔塔拉': [ '82.078718', '44.912555' ],
  '巴音郭楞': [ '86.182734', '41.897358' ],
  '阿克苏': [ '80.244527', '41.123922' ],
  '克孜勒苏': [ '76.66999', '39.887809' ],
  '喀什': [ '75.999373', '39.465702' ],
  '和田': [ '79.764079', '37.229645' ],
  '伊犁': [ '81.338332', '43.923252' ],
  '塔城地': [ '83.014787', '46.752263' ],
  '阿勒泰': [ '88.069013', '47.810049' ],
  '石河子': [ '86.036902', '44.295952' ],
  '阿拉尔': [ '81.280385', '40.546287' ],
  '图木舒克': [ '79.068775', '39.864903' ],
  '五家渠': [ '87.526349', '44.159402' ],
  '台湾省': [ '120.958132', '23.851606' ],
  '香港': [ '114.139452', '22.391577' ],
  '澳门': [ '113.567841', '22.167654' ] }