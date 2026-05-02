/**
 * Handles YouTube's Single Page Application (SPA) navigation.
 * Redirects internal navigations to /shorts/ to the standard video player.
 */
function handleRedirection() {
  if (window.location.pathname.startsWith('/shorts/')) {
    const videoId = window.location.pathname.split('/')[2];
    if (videoId) {
      const newUrl = `${window.location.origin}/watch?v=${videoId}${window.location.search}${window.location.hash}`;
      window.location.replace(newUrl);
    }
  }
}

// Initial check
handleRedirection();

// Listen for YouTube's custom navigation finish event
window.addEventListener('yt-navigate-finish', handleRedirection);

// Backup: also listen to popstate for general navigation
window.addEventListener('popstate', handleRedirection);
