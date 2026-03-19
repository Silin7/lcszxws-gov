document.addEventListener('DOMContentLoaded', function() {
    // 1. 根据不同页面设置不同的分享内容
    setWeChatShareMeta();
    
});

/**
 * 根据不同页面动态设置分享Meta标签
 */
function setWeChatShareMeta() {
    const path = window.location.pathname;
    let shareConfig = {};
    
    // 根据不同页面设置不同的分享内容
    if (path.includes('news') || path.includes('detai')) {
        // 新闻/文章页面
        const articleTitle = document.querySelector('.news-title, .article-title, h1')?.textContent || '';
        const articleDesc = document.querySelector('.news-desc, .article-summary')?.textContent || '';
        
        shareConfig = {
            title: articleTitle ? `${articleTitle} - 聊城市政协文史馆` : '文史动态 - 聊城市政协文史馆',
            description: articleDesc.substring(0, 100) + (articleDesc.length > 100 ? '...' : ''),
            image: getArticleImage() || '/public/images/fenxiang.jpg'
        };
    } 
    else if (path.includes('literature')) {
        // 文史典籍页面
        const bookTitle = document.querySelector('.book-title, h1')?.textContent || '';
        const bookDesc = document.querySelector('.book-desc')?.textContent || '';
        
        shareConfig = {
            title: bookTitle ? `${bookTitle} - 文史典籍` : '文史典籍 - 聊城市政协文史馆',
            description: bookDesc || '珍贵文史典籍在线阅读',
            image: '/public/images/fenxiang.jpg'
        };
    }
    else if (path.includes('people')) {
        // 人物页面
        const personName = document.querySelector('.people-name, h1')?.textContent || '';
        
        shareConfig = {
            title: personName ? `${personName} - 人物春秋` : '人物春秋 - 聊城市政协文史馆',
            description: '聊城历史名人传记资料',
            image: getPersonImage() || '/public/images/fenxiang.jpg'
        };
    }
    else if (path.includes('art')) {
        // 书画作品页面
        shareConfig = {
            title: '书画作品 - 聊城市政协文史馆',
            description: '政协书画艺术精品展示',
            image: getArtImage() || '/public/images/fenxiang.jpg'
        };
    }
    else {
        // 首页默认配置
        shareConfig = {
            title: '聊城市政协文史馆',
            description: '聊城市政协文史馆数字化平台，展示政协历程、文史典籍、书画作品等珍贵资料。',
            image: '/public/images/fenxiang.jpg'
        };
    }
    
    // 更新Meta标签
    updateShareMeta(shareConfig);
}

/**
 * 更新分享相关的Meta标签
 */
function updateShareMeta(config) {
    // 更新Open Graph标签
    setMetaTag('property', 'og:title', config.title);
    setMetaTag('property', 'og:description', config.description);
    setMetaTag('property', 'og:image', getFullUrl(config.image));
    setMetaTag('property', 'og:url', window.location.href);
    
    // 更新页面标题和描述
    document.title = config.title;
    setMetaTag('name', 'description', config.description);
    
    console.log('微信分享配置已更新:', config);
}

/**
 * 设置Meta标签
 */
function setMetaTag(attr, name, content) {
    let meta = document.querySelector(`meta[${attr}="${name}"]`);
    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
}

/**
 * 获取完整URL
 */
function getFullUrl(url) {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    if (url.startsWith('/')) return window.location.origin + url;
    return window.location.origin + '/' + url;
}

/**
 * 检测是否在微信浏览器中
 */
function isWeChatBrowser() {
    return /micromessenger/i.test(navigator.userAgent);
}



/**
 * 为单个内容项添加分享提示
 */
function addShareHintToItem(item, hintText) {
    const shareHint = document.createElement('div');
    shareHint.className = 'share-hint';
    shareHint.innerHTML = `
        <div class="share-hint-content">
            <span class="share-hint-icon">📤</span>
            <span class="share-hint-text">${hintText}</span>
        </div>
    `;
    
    // 悬停时显示提示
    item.style.position = 'relative';
    shareHint.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(7, 193, 96, 0.9);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        display: none;
        z-index: 10;
        cursor: pointer;
    `;
    
    item.appendChild(shareHint);
    
    // 鼠标悬停显示提示
    item.addEventListener('mouseenter', function() {
        shareHint.style.display = 'block';
    });
    
    item.addEventListener('mouseleave', function() {
        shareHint.style.display = 'none';
    });
    
    // 点击提示
    shareHint.addEventListener('click', function(e) {
        e.stopPropagation();
        if (isWeChatBrowser()) {
            alert('在微信中，请点击右上角"..."进行分享');
        } else {
            alert('请复制链接分享给微信好友');
        }
    });
}

/**
 * 获取文章图片
 */
function getArticleImage() {
    // 尝试获取文章中的第一张图片
    const img = document.querySelector('.article-content img, .news-content img');
    return img ? img.src : null;
}

/**
 * 获取人物图片
 */
function getPersonImage() {
    const img = document.querySelector('.people-image img');
    return img ? img.src : null;
}

/**
 * 获取书画作品图片
 */
function getArtImage() {
    const img = document.querySelector('.art-image img');
    return img ? img.src : null;
}

// 在页面可见性变化时刷新Meta（解决微信缓存问题）
document.addEventListener('visibilitychange', function() {
    if (!document.hidden && isWeChatBrowser()) {
        // 页面重新可见时，重新设置Meta标签（解决微信分享缓存）
        setTimeout(setWeChatShareMeta, 100);
    }
});

// 监听页面跳转
window.addEventListener('pageshow', function(event) {
    if (event.persisted && isWeChatBrowser()) {
        // 从缓存恢复时重新设置Meta
        setWeChatShareMeta();
    }
});