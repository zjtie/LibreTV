const CUSTOMER_SITES = {
    jyzy: {
        api: 'https://jyzyapi.com/provide/vod',
        name: '金鹰资源ll',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod/api.php/provide/vod',
        name: '非凡资源ll',
    },
    slzy: {
        api: 'https://slapibf.com/api.php/provide/vod',
        name: '森林资源',
        adult: true
    },
    mdzy: {
        api: 'https://www.bt4.cc/api.php/provide/vod',
        name: '麻豆资源',
        adult: true
    },
    yhzy: {
        api: 'https://yhzy.cc/api.php/provide/vod',
        name: '樱花资源ll',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源ll',
    },
    dytt: {
        api: 'https://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂',
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源ll',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源ll',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源xxx',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源ll',
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源ll',
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源ll',
    },
    r91: {
        api: 'https://91md.me/api.php/provide/vod',
        name: '91资源',
        adult: true
    },
    lajiao: {
        api: 'https://apilj.com/api.php/provide/vod',
        name: '辣椒资源',
        adult: true
    },
    souav: {
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        name: 'souav资源',
        adult: true
    },
    ckzy: {
        api: 'https://ckzy.me/api.php/provide/vod',
        name: 'CK资源ll',
    },
    jkun: {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: 'jkun资源',
        adult: true
    },
    bwzy: {
        api: 'https://api.bwzyz.com/api.php/provide/vod',
        name: '百万资源',
        adult: true
    },
    r155: {
        api: 'https://155api.com/api.php/provide/vod',
        name: '155资源',
        adult: true
    },
    lsb: {
        api: 'https://apilsbzy1.com/api.php/provide/vod',
        name: 'lsb资源',
        adult: true
    },
    huangcang: {
        api: 'https://hsckzy.vip/api.php/provide/vod',
        name: '黄色仓库',
        adult: true
    },
    yutu: {
        api: 'https://yutuzy10.com/api.php/provide/vod',
        name: '玉兔资源',
        adult: true
    },
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台资源ll',
    },
    kuaibo: {
        api: 'https://gayapi.com/api.php/provide/vod',
        name: '快播资源',
        adult: true
    },
    xingba: {
        api: 'https://xingba222.com/api.php/provide/vod',
        name: '杏吧资源',
        adult: true
    },
    r91jp: {
        api: 'https://91jpzyw.com/api.php/provide/vod',
        name: '91jpzyw',
        adult: true
    },
    danai: {
        api: 'https://apidanaizi.com/api.php/provide/vod',
        name: '大奶资源',
        adult: true
    },
    maoyan: {
        api: 'https://api.maoyanapi.top/api.php/provide/vod',
        name: '猫眼资源ll',
    },
    xibao: {
        api: 'https://www.xxibaozyw.com/api.php/provide/vod',
        name: '细胞资源',
        adult: true
    },
    shayu: {
        api: 'https://shayuzy.com/api.php/provide/vod',
        name: '鲨鱼资源',
        adult: true
    },
    xiaoji: {
        api: 'https://api.xiaojizy.live/provide/vod',
        name: '小鸡资源',
        adult: true
    },
    mugua: {
        api: 'https://www.fczy907.com/api.php/provide/vod',
        name: '木瓜AC',
        adult: true
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
