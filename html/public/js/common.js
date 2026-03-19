// 视频第一帧封面处理
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('historyVideo');
    const videoContainer = document.querySelector('.video-wrapper');
    
    if (video) {
        // 创建封面画布
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        let posterGenerated = false;
        
        // 设置画布尺寸
        video.addEventListener('loadedmetadata', function() {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
        });
        
        // 尝试获取第一帧
        video.addEventListener('loadeddata', function() {
            if (!posterGenerated && video.readyState >= 2) {
                try {
                    // 跳转到第一帧
                    video.currentTime = 0;
                } catch (e) {
                    console.log('视频时间设置失败:', e);
                }
            }
        });
        
        // 当可以获取当前帧时，生成封面
        video.addEventListener('seeked', function() {
            if (!posterGenerated) {
                try {
                    // 绘制第一帧到canvas
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    
                    // 将canvas转换为base64作为封面
                    const posterDataUrl = canvas.toDataURL('image/jpeg', 0.8);
                    
                    // 创建临时图片显示第一帧
                    const tempImg = new Image();
                    tempImg.src = posterDataUrl;
                    tempImg.className = 'video-poster';
                    tempImg.alt = '视频封面';
                    
                    // 将封面图片插入到视频前面
                    videoContainer.insertBefore(tempImg, video);
                    
                    // 点击封面开始播放
                    tempImg.addEventListener('click', function() {
                        tempImg.style.display = 'none';
                        video.style.display = 'block';
                        video.play().catch(e => {
                            console.log('自动播放被阻止，需要用户交互');
                            video.controls = true;
                        });
                    });
                    
                    posterGenerated = true;
                } catch (e) {
                    console.log('生成封面失败:', e);
                }
            }
        });
        
        // 视频播放时隐藏封面
        video.addEventListener('play', function() {
            const poster = videoContainer.querySelector('.video-poster');
            if (poster) {
                poster.style.display = 'none';
            }
        });
        
        // 视频暂停时显示封面
        video.addEventListener('pause', function() {
            if (video.currentTime > 0) {
                const poster = videoContainer.querySelector('.video-poster');
                if (poster) {
                    poster.style.display = 'block';
                    video.style.display = 'none';
                }
            }
        });
        
        // 视频结束时显示封面
        video.addEventListener('ended', function() {
            const poster = videoContainer.querySelector('.video-poster');
            if (poster) {
                poster.style.display = 'block';
                video.style.display = 'none';
                video.currentTime = 0;
            }
        });
        
        // 错误处理
        video.addEventListener('error', function() {
            console.log('视频加载错误:', video.error);
        });
    }
});

