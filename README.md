# Remove YouTube Shorts

A minimalist, privacy-focused Chrome extension to hide YouTube Shorts and redirect Shorts links to the standard YouTube video player.

YouTube Shorts can be a distraction, and the standard video player controls are better for viewing content anyway. This extension gives you back control over your viewing experience without relying on third-party extensions with broad permissions or hidden source code.

## Features

- **UI Cleanup**: Removes the "Shorts" tab from the sidebar and mini-sidebar.
- **Feed Filtering**: Hides Shorts sections/shelves from the Home page, Subscriptions, and Search results.
- **Automatic Redirects**:
  - Uses `declarativeNetRequest` (DNR) for network-level redirection of direct URL entries.
  - Uses a content script to handle internal YouTube navigation (SPA), ensuring `/shorts/` links always open in the standard `/watch?v=` player.
- **Privacy First**: No tracking, no external dependencies, and runs strictly on `youtube.com`.

## Installation (Developer Mode)

1. Clone or download this repository.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** using the toggle in the top-right corner.
4. Click **Load unpacked**.
5. Select the directory containing this extension.
