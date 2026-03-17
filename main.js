/**
 * GitHub Commit aeb0198 로직 반영 및 리스트 최적화
 */
(function() {
    const GITHUB_USERNAME = 'webizsmart'; 
    
    // 최종 제외 항목: mailbox, carreer, snol, realestate, vibe
    const REPO_NAMES = [
        'sapeong', 'tagflow', 'kch2', 'kangchon', 'meloapp', 
        'meloditon', 'guesthouse', 'aurora', 'frs_co', 'wooriai', 'metome', 
        'k-seodang', 'wooriai2', 'aminofit', 'hfs', 'ai_it', '1000cha', 'construct', 
        'dagency', 'syhcoach', 'livewithesg', 'kdrama'
    ];

    const GRADIENTS = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #2af598 0%, #009efd 100%)',
        'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];

    function createProjectCard(repoName, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.05}s`;

        const projectUrl = `https://${GITHUB_USERNAME}.github.io/${repoName.toLowerCase()}`;
        const thumbnailUrl = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repoName.toLowerCase()}`;
        const initial = repoName.charAt(0).toUpperCase();
        const gradient = GRADIENTS[index % GRADIENTS.length];

        card.innerHTML = `
            <a href="${projectUrl}" target="_blank" class="card-link">
                <div class="card-image-box">
                    <div class="thumb-bg" style="background: ${gradient}">
                        <div class="initial">${initial}</div>
                    </div>
                    <img src="${thumbnailUrl}" alt="${repoName}" 
                         onload="this.classList.add('loaded')" 
                         onerror="this.style.display='none'">
                    <div class="view-btn">
                        VIEW <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
                <div class="card-content">
                    <h3>${repoName.toUpperCase()}</h3>
                    <p>${GITHUB_USERNAME} / ${repoName}</p>
                </div>
            </a>
        `;
        return card;
    }

    function render() {
        const grid = document.getElementById('project-grid');
        if (!grid) return;

        grid.innerHTML = ''; 

        REPO_NAMES.forEach((repo, index) => {
            const card = createProjectCard(repo, index);
            grid.appendChild(card);
        });
    }

    window.addEventListener('load', render);
})();
