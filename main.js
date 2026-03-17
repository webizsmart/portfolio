/**
 * 초정밀 디버깅 모드가 포함된 포트폴리오 스크립트
 */
(function() {
    const GITHUB_USERNAME = 'webizsmart'; 
    const REPO_NAMES = [
        'mailbox', 'carreer', 'sapeong', 'tagflow', 'kch2', 'kangchon', 'snol', 'meloapp', 
        'meloditon', 'realestate', 'guesthouse', 'aurora', 'frs_co', 'wooriai', 'metome', 
        'k-seodang', 'wooriai2', 'aminofit', 'hfs', 'ai_it', '1000cha', 'construct', 
        'dagency', 'syhcoach', 'livewithesg', 'kdrama', 'vibe'
    ];

    function createProjectCard(repoName, index) {
        try {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.style.animationDelay = `${index * 0.05}s`;

            const projectUrl = `https://webizsmart.github.io/${repoName.toLowerCase()}`;
            const thumbnailUrl = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repoName.toLowerCase()}`;

            card.innerHTML = `
                <a href="${projectUrl}" target="_blank" class="card-link">
                    <div class="card-image-box">
                        <img src="${thumbnailUrl}" alt="${repoName}" loading="lazy" 
                             onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop'">
                        <div class="card-overlay">
                            <span class="view-btn">방문하기 <i class="fas fa-external-link-alt"></i></span>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3>${repoName.toUpperCase()}</h3>
                        <p class="repo-link">${GITHUB_USERNAME} / ${repoName}</p>
                    </div>
                </a>
            `;
            return card;
        } catch (e) {
            console.error('Card creation failed for:', repoName, e);
            return null;
        }
    }

    function render() {
        console.log('Starting render process...');
        const grid = document.getElementById('project-grid');
        
        if (!grid) {
            alert('에러: "project-grid" 요소를 찾을 수 없습니다. index.html 파일이 정상인지 확인해주세요.');
            return;
        }

        grid.innerHTML = ''; // 로딩 스피너 제거

        let count = 0;
        REPO_NAMES.forEach((repo, index) => {
            const card = createProjectCard(repo, index);
            if (card) {
                grid.appendChild(card);
                count++;
            }
        });

        console.log(`Rendered ${count} out of ${REPO_NAMES.length} projects.`);
        
        if (count === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 2rem;">표시할 프로젝트가 없습니다.</p>';
        }
    }

    // 초기화 실행
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }

    // 전역 에러 캡처 (콘솔 에러를 화면에 경고창으로 띄워 확인)
    window.onerror = function(msg, url, line) {
        console.log('Caught global error:', msg, 'at line:', line);
        return false;
    };
})();
