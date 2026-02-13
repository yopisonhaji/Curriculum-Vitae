function updateTime() {
    const timeElement = document.getElementById('status-time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
}

// Update time every minute
setInterval(updateTime, 1000);
updateTime();

// App Navigation Logic
function openApp(appId, event) {
    const homeScreen = document.getElementById('home-screen');
    const app = document.getElementById(appId);
    if (!app) return;

    // Calculate Transform Origin from Click
    if (event) {
        const icon = event.currentTarget;
        const rect = icon.getBoundingClientRect();
        const screenRect = document.querySelector('.screen').getBoundingClientRect();

        // Calculate center of the clicked icon relative to the screen container
        const originX = rect.left + rect.width / 2 - screenRect.left;
        const originY = rect.top + rect.height / 2 - screenRect.top;

        app.style.transformOrigin = `${originX}px ${originY}px`;
    } else {
        // Default center if triggered without event
        app.style.transformOrigin = 'center center';
    }

    homeScreen.classList.add('blurred');
    app.classList.add('active');

    // Enable home bar click area by showing it
    const homeBar = document.querySelector('.home-bar-area');
    if (homeBar) homeBar.classList.add('active');
}

function closeApp() {
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.remove('blurred');

    const apps = document.querySelectorAll('.app-modal');
    apps.forEach(app => {
        app.classList.remove('active');
        // Reset origin after transition for cleaner subsequent opens (optional)
        setTimeout(() => {
            app.style.transformOrigin = 'center center';
        }, 500);
    });

    // Hide home bar click area
    const homeBar = document.querySelector('.home-bar-area');
    if (homeBar) homeBar.classList.remove('active');

    // Reset Dynamic Island
    const island = document.querySelector('.dynamic-island');
    if (island) island.classList.remove('expanded');
}

// Dynamic Island Interaction
const island = document.querySelector('.dynamic-island');
island.addEventListener('click', () => {
    island.classList.toggle('expanded');
});
