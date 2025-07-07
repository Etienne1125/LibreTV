// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified'，  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000，  // 验证有效期（90天，约3个月）
    adminLocalStorageKey: 'adminPasswordVerified'  // 新增的管理员验证状态的键名
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV'，
    url: 'https://libretv.is-an.org'，
    description: '免费在线视频搜索与观看平台'，
    logo: 'image/logo.png'，
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod'，
        name: '电影天堂资源'，
        detail: 'http://caiji.dyttzyapi.com'， 
    }，
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod'，
        name: '如意资源'，
    }，
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod'，
        name: '暴风资源'，
    }，
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod'，
        name: '天涯资源'，
    }，
    // xiaomaomi: {
    //     api: 'https://zy.xiaomaomi.cc/api.php/provide/vod',
    //     name: '小猫咪资源',
    // },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod'，
        name: '非凡影视'，
        detail: 'http://ffzy5.tv'， 
    }，
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod'，
        name: '黑木耳'，
        detail: 'https://heimuer.tv'， 
    }，
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod'，
        name: '360资源'，
    }，
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod'，
        name: 'iqiyi资源'，
    }，
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod'，
        name: '卧龙资源'，
    }， 
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod'，
        name: '华为吧资源'，
    }，
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod'，
        name: '极速资源'，
        detail: 'https://jszyapi.com'， 
    }，
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod'，
        name: '豆瓣资源'，
    }，
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod'，
        name: '魔爪资源'，
    }，
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod'，
        name: '魔都资源'，
    }，
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod'，
        name: '最大资源'
    }，
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod'，
        name: '樱花资源'
    }，
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod'，
        name: '百度云资源'
    }，
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod'，
        name: '无尽资源'
    }，
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod'，
        name: '旺旺短剧'
    }，
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod'，
        name: 'iKun资源'
    }，
    fantuan: {
        api: 'https://www.fantuan.tv/api.php/provide/vod'，
        name: '飯糰影視'
    }，
    lziapi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod'，
        name: '影視工廠'
    }，
    qiqidys: {
        api: 'https://www.qiqidys.com/api.php/provide/vod'，
        name: '七七資源'
    }，
    dilidili: {
        api: 'http://dilidili.la/api.php/app'，
        name: '嘀哩嘀哩'
    }，
shouzhi: {
    api: 'https://szys5678.com/mogai_api.php/v1.vod',
    name: '手指影視'
},
xinaivs: {
    api: 'https://xays6677.com/mogai_api.php/v1.vod',
    name: '心愛影視'
},
tiankong: {
    api: 'https://tkys.tv/xgapp.php/v1/',
    name: '天空影視'
},
tiankong2: {
    api: 'https://www.tkys.tv/xgapp.php/v2/',
    name: '天空影視V2'
},
didiyingyuan2: {
    api: 'http://dd88.icu:6080/xgapp.php/v2/',
    name: '迪迪影院V2'
},
api1080p: {
    api: 'https://1080p.one/mogai_api.php/v1.vod',
    name: '1080p'
},
api1231d: {
    api: 'https://vue.app.yunboys.cn/api.php/v1.vod',
    name: '1231D'
},
ksj300: {
    api: 'https://300ys.xyz/api.php/v1.vod',
    name: '300看世界'
},
cinema4k: {
    api: 'http://1api.4kdytv.com/api.php/v1.vod',
    name: '4K影院'
},
dy80k: {
    api: 'https://1080p.tv/api.php/v1.vod',
    name: '80K影視'
},
cjt: {
    api: 'https://www.cjt521.com/api.php/v1.vod',
    name: 'CJT影院'
},
dcys: {
    api: 'http://chaorenbb.com/api.php/v1.vod',
    name: 'DC影視'
},
f7stream: {
    api: 'http://bc.haokanju1.cc/lvdou_api.php/v1.vod',
    name: 'F7stream'
},
hgys: {
    api: 'http://api.hgyx.vip/api.php/iptv/vod/',
    name: 'HG影視'
},
lol: {
    api: 'https://l0l.tv/api.php/v1.vod',
    name: 'l0l影院'
},
aikanmj: {
    api: 'https://www.uumjw.com/api.php/v1.vod'，
    name: '愛看美劇'
}，
aikukys: {
    api: 'https://www.zhanlangbu.com/ruifenglb_api.php/v1.vod'，
    name: '愛酷影視'
}，
aikanxy: {
    api: 'http://www.a91.cm/api.php/v1.vod'，
    name: '愛看戲院'
}，
cainiaozj: {
    api: 'http://81.71.18.95:5555/mogai_api.php/v1.vod'，
    name: '菜鳥追劇'
}，
baipiaoys: {
    api: 'http://zgjxdtg.cn/api.php/v1.vod'，
    name: '白嫖影視'
}，
chuxin: {
    api: 'https://www.18mv.club/api.php/v1.vod'，
    name: '初心影視'
}，
duboshe: {
    api: 'http://35ys.cc/api.php/v1.vod'，
    name: '獨播社'
}，
dingdang: {
    api: 'https://tv.0573wl.com/api.php/v1.vod'，
    name: '叮噹影視'
}，
duanyou: {
    api: 'http://121.204.249.135:4433/ruifenglb_api.php/v1.vod'，
    name: '段友影視'
}，
duanyou2: {
    api: 'https://shangjihuoke.com/api.php/tv.vod'，
    name: '段友2影視'
}，
fanhoudianying: {
    api: 'http://baicai.summ.vip/api.php/v1.vod'，
    name: '飯後電影'
}，
fjys: {
    api: 'https://www.fj6080.com/api.php/v1.vod'，
    name: '飛捷影視'
}，
fengkuangkan: {
    api: 'http://app.fkkdy.vip/mogai_api.php/v1.vod'，
    name: '瘋狂看'
}，
fenxiang: {
    api: 'http://42.157.129.15:34444/lvdou_api.php/v1.vod'，
    name: '粉象視界'
}，
feiyun: {
    api: 'http://app.kxtv.ltd/lvdou_api.php/v1.vod'，
    name: '飛雲影片'
}，
humao: {
    api: 'https://humaosp.com/mogai_api.php/v1.vod'，
    name: '虎貓影片'
}，
kemivs: {
    api: 'http://sj.kmys.vip/ruifenglb_api.php/v1.vod'，
    name: '可米影視'
}，
kangyao: {
    api: 'http://124.222.126.23:999/mogai_api.php/v1.vod'，
    name: '康耀影視'
}，
lvjian: {
    api: 'http://www.69ty.cc/mogai_api.php/v1.vod'，
    name: '綠箭影視'
}，
lingke: {
    api: 'https://ys.ling00.cn/api.php/v1.vod'，
    name: '零刻戲院'
}，
lanmao: {
    api: 'http://lanmao.lanmaoymw.cn/ruifenglb_api.php/v1.vod'，
    name: '懶貓電影'
}，
lansemao: {
    api: 'http://www.baofu111.top/mogai_api.php/v1.vod'，
    name: '藍色貓劇院'
}，
mifeng: {
    api: 'http://app.f8tp.com/lvdou_api.php/v1.vod'，
    name: '蜜蜂影視'
}，
magua: {
    api: 'http://aliyun.k8aa.com/mogai_api.php/v1.vod'，
    name: '麻瓜影片'
}，
meijuchong: {
    api: 'https://meijuchong.com/api.php/v1.vod'，
    name: '美劇蟲'
}，
muzidianying: {
    api: 'http://www.muzidy.top/mogai_api.php/v1.vod'，
    name: '木子電影'
}，
naifeimi: {
    api: 'https://app.netflixmi.com/api.php/v1.vod'，
    name: '奈非迷'
}，
nuanguang: {
    api: 'https://app.bl210.com/api.php/v1.vod'，
    name: '暖光影視'
}，
nianys: {
    api: 'https://998.yuanmajs.cn/api.php/v1.vod'，
    name: '念影視'
}，
ningyou: {
    api: 'http://nu.e4tv.cn/lvdou_api.php/v1.vod'，
    name: '檸柚影視'
}，
qiguaivod: {
    api: 'https://giguai.net/api.php/v1.vod'，
    name: '奇怪影片'
}，
qilingdongman: {
    api: 'https://cf.70yu.cn/mogai_api.php/v1.vod'，
    name: '七零動漫'
}，
ruifeng: {
    api: 'https://tv.yjhan.com:4433/api.php/v1.vod'，
    name: '瑞豐資源'
}，
shanguang: {
    api: 'http://101.35.128.192/mubai_api.php/m2.vod'，
    name: '閃光影視'
}，
sile: {
    api: 'https://www.huandian.top/ruifenglb_api.php/v1.vod'，
    name: '思樂影視'
}，
tiancheng: {
    api: 'http://tcspvip.cn/api.php/v1.vod'，
    name: '天誠影視'
}，
tiantianys: {
    api: 'https://app.daishusc.com/api.php/v1.vod'，
    name: '天天影視'
}，
xiaobaidm: {
    api: 'http://121.62.60.222:20222/mogai_api.php/v1.vod'，
    name: '小白動漫'
}，
xingdi: {
    api: 'http://app.xdys.vip/mogai_api.php/v1.vod'，
    name: '兄弟影視'
}，
xiaohongmao: {
    api: 'https://api.xiaohongmao666.com/mogai_api.php/v1.vod'，
    name: '小紅貓影視'
}，
xiaoxiong: {
    api: 'http://api.xiaoxiongtv.com/mogai_api.php/v1.vod'，
    name: '小熊影視'
}，
xiaoya: {
    api: 'http://www.xyys.vip/api.php/v1.vod'，
    name: '小鴨影視'
}，
xiaozhu: {
    api: 'https://api.xiaozhuyy.com/mogai_api.php/v1.vod'，
    name: '小豬影院'
}，
yingshidaquan: {
    api: 'http://www.ysdq.tv/api.php/v1.vod'，
    name: '影視大全'
}，
yingyuan: {
    api: 'http://www.yy6080.cc/api.php/v1.vod'，
    name: '影院'
}，
yiqukan: {
    api: 'https://www.yiqukan.cn/api.php/v1.vod'，
    name: '壹起看'
}，
yisu: {
    api: 'https://api.yisuyy.com/mogai_api.php/v1.vod'，
    name: '易速影院'
}，
yuyu: {
    api: 'https://api.yuyutv1.com/mogai_api.php/v1.vod'，
    name: '魚魚影視'
}，
zhizun: {
    api: 'http://api.zzyyds.com/mogai_api.php/v1.vod'，
    name: '至尊影視'
}，
zhuifan: {
    api: 'https://api.zhuifantv.com/mogai_api.php/v1.vod'，
    name: '追番TV'
}，
zhuiju: {
    api: 'https://api.zhuijutv.com/mogai_api.php/v1.vod'，
    name: '追劇TV'
}，
zhuiju2: {
    api: 'https://www.zhuiju2.com/api.php/v1.vod'，
    name: '追劇2'
}，
zuidamovie: {
    api: 'http://www.zuidazy2.net/api.php/v1.vod'，
    name: '最大資源'
}，
zuikzy: {
    api: 'https://www.zuikzy.com/api.php/v1.vod'，
    name: '最快資源'
}，
zuimv: {
    api: 'https://www.zuimv.com/api.php/v1.vod'，
    name: '最影'
}，
zuixin: {
    api: 'https://www.zuixinys.com/api.php/v1.vod'，
    name: '最新影視'
}，
zuixindianying: {
    api: 'https://www.zuixindianying.com/api.php/v1.vod'，
    name: '最新電影'
}
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod'，
        name: '空内容测试源'，
        adult: true
    }，
    // 下面是一些成人内容的API源，默认隐藏，使用本项目浏览黄色内容违背项目初衷
    // 互联网上传播的色情内容将人彻底客体化、工具化，是性别解放和人类平等道路上的巨大障碍。
    // 这些黄色影片是资本主义父权制压迫的最恶毒体现，它将暴力和屈辱商品化，践踏人的尊严，对受害者造成无法弥愈的伤害，并毒害社会关系。
    // 资本为了利润，不惜将最卑劣的剥削（包括对受害者和表演者的剥削）和暴力商品化，
    // 把性别剥削塑造成“性享受”麻痹观众的意识，转移我们对现实生活中矛盾和压迫的注意力。
    // 这些影片和背后的产业已经使数百万男女“下海”，出卖自己的身体，甚至以此为生计。
    // 而作为观众无辜吗？毫无疑问，他们促成了黄色产业链的再生产。
    // 我们提供此警告，是希望您能认清这些内容的本质——它们是压迫和奴役的工具，而非娱乐。
    // ckzy: {
    //     api: 'https://www.ckzy1.com',
    //     name: 'CK资源',
    //     adult: true
    // },
    // jkun: {
    //     api: 'https://jkunzyapi.com',
    //     name: 'jkun资源',
    //     adult: true
    // },
    // bwzy: {
    //     api: 'https://api.bwzym3u8.com',
    //     name: '百万资源',
    //     adult: true
    // },
    // souav: {
    //     api: 'https://api.souavzy.vip',
    //     name: 'souav资源',
    //     adult: true
    // },
    // r155: {
    //     api: 'https://155api.com',
    //     name: '155资源',
    //     adult: true
    // },
    // lsb: {
    //     api: 'https://apilsbzy1.com',
    //     name: 'lsb资源',
    //     adult: true
    // },
    // huangcang: {
    //     api: 'https://hsckzy.vip',
    //     name: '黄色仓库',
    //     adult: true,
    //     detail: 'https://hsckzy.vip'
    // },
    // yutu: {
    //     api: 'https://yutuzy10.com',
    //     name: '玉兔资源',
    //     adult: true
    // },

    // 下面是资源失效率高的API源，不建议使用
    // subo: {
    //     api: 'https://subocaiji.com/api.php/provide/vod',
    //     name: '速播资源'
    // },
    // fczy: {
    //     api: 'https://api.fczy888.me/api.php/provide/vod',
    //     name: '蜂巢资源'
    // },
    // ukzy: {
    //     api: 'https://api.ukuapi88.com/api.php/provide/vod',
    //     name: 'U酷资源'
    // },
};

// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
