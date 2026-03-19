// 微信分享配置
const ShareConfig = {
  // 默认分享配置
  default: {
    title: '聊城市政协文史馆',
    desc: '聊城市政协文史资料数字化平台，展示历史文化珍贵资料',
    link: window.location.href,
    imgUrl: 'http://wsg.lcszx.gov.cn/public/images/fenxiang.jpg'
  },
  
  // 不同页面的分享配置
  pages: {
    'index': {
      title: '聊城市政协文史馆首页',
      desc: '探索聊城历史文化，传承政协文史资料',
      imgUrl: 'http://wsg.lcszx.gov.cn/public/images/fenxiang.jpg'
    },
    'news': {
      title: '文史动态 - 聊城市政协文史馆',
      desc: '最新文史资讯和活动信息',
      imgUrl: 'http://wsg.lcszx.gov.cn/public/images/fenxiang.jpg'
    },
    'literature': {
      title: '文史典籍 - 聊城市政协文史馆',
      desc: '珍贵文史典籍在线阅读',
      imgUrl: 'http://wsg.lcszx.gov.cn/public/images/fenxiang.jpg'
    },
    'people': {
      title: '人物春秋 - 聊城市政协文史馆',
      desc: '聊城历史名人传记资料',
      imgUrl: 'http://wsg.lcszx.gov.cn/public/images/fenxiang.jpg'
    }
  }
};

// 获取当前页面类型
function getPageType() {
  const path = window.location.pathname;
  if (path.includes('news')) return 'news';
  if (path.includes('literature')) return 'literature';
  if (path.includes('people')) return 'people';
  return 'index';
}

// 动态更新meta标签
function updateShareMeta(config) {
  // 更新Open Graph meta
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', config.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', config.desc);
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', config.imgUrl);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', config.link);
  
  // 更新微信专用meta
  document.querySelector('meta[property="wechat:title"]')?.setAttribute('content', config.title);
  document.querySelector('meta[property="wechat:description"]')?.setAttribute('content', config.desc);
  document.querySelector('meta[property="wechat:image"]')?.setAttribute('content', config.imgUrl);
}

// 初始化分享配置
function initShareConfig() {
  const pageType = getPageType();
  const pageConfig = ShareConfig.pages[pageType] || ShareConfig.default;
  const currentConfig = {
    ...ShareConfig.default,
    ...pageConfig,
    link: window.location.href
  };
  
  updateShareMeta(currentConfig);
  
  // 如果是微信环境，调用微信JS-SDK
  if (isWeChat()) {
    initWeChatShare(currentConfig);
  }
}

// 检测是否在微信中
function isWeChat() {
  return /micromessenger/i.test(navigator.userAgent);
}

// 初始化微信分享（需要后端配合获取签名）
function initWeChatShare(config) {
  // 这里需要后端接口获取微信签名
  fetch('/api/wechat-signature?url=' + encodeURIComponent(window.location.href))
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        wx.config({
          debug: false, // 调试模式
          appId: data.appId,
          timestamp: data.timestamp,
          nonceStr: data.nonceStr,
          signature: data.signature,
          jsApiList: [
            'updateAppMessageShareData',
            'updateTimelineShareData',
            'onMenuShareAppMessage',
            'onMenuShareTimeline'
          ]
        });
        
        wx.ready(function() {
          // 分享给朋友
          wx.updateAppMessageShareData({
            title: config.title,
            desc: config.desc,
            link: config.link,
            imgUrl: config.imgUrl,
            success: function() {
              console.log('分享配置成功');
            }
          });
          
          // 分享到朋友圈
          wx.updateTimelineShareData({
            title: config.title,
            link: config.link,
            imgUrl: config.imgUrl,
            success: function() {
              console.log('朋友圈分享配置成功');
            }
          });
        });
      }
    })
    .catch(error => {
      console.error('微信分享配置失败:', error);
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initShareConfig);

// 导出函数供其他模块使用
window.ShareUtils = {
  updateShareConfig: function(customConfig) {
    const config = { ...ShareConfig.default, ...customConfig };
    updateShareMeta(config);
    if (isWeChat()) {
      initWeChatShare(config);
    }
  },
  shareToWeChat: function(config) {
    if (isWeChat() && window.wx) {
      wx.updateAppMessageShareData(config);
    }
  }
};