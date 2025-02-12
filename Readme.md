# YouTube Shorts Limiter - Browser Extension

## Overview

This browser extension helps users limit their YouTube Shorts consumption. If the user watches more than **5 Shorts**, the extension automatically redirects them to a blank page (`about:blank`), preventing further distraction.

## Features

- Monitors the user's activity on YouTube Shorts.
- Keeps track of the number of Shorts watched using `localStorage`.
- Alerts the user upon reaching the limit.
- Automatically changes the tab to prevent excessive Shorts consumption.

## How It Works

1. The extension observes URL changes on YouTube.
2. If the user visits a Shorts video (`/shorts/` in the URL), it increments the count.
3. Once the user exceeds the limit of **5 Shorts**, an alert is displayed, and the tab is redirected.
4. The count is stored in `localStorage` to persist between sessions.

## Installation

1. Download the repository as a ZIP or clone it using:
   ```sh
   git clone <repository-url>
   ```
2. Open **Google Chrome** (or any Chromium-based browser) and navigate to:
   ```
   chrome://extensions/
   ```
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the extension folder.
5. The extension will be installed and active.

## Main Code Functionality

```javascript
let lastUrl = window.location.pathname;
let count = localStorage.getItem("shortsCount") || 0;
console.log("count is ", count);

const observer = new MutationObserver(() => {
  if (window.location.pathname !== lastUrl) {
    lastUrl = window.location.pathname;
    console.log(`Shorts URL changed from last URL: ${lastUrl}`);
    if (lastUrl.includes("/shorts/")) {
      if (count > 5) {
        alert("You have reached your YouTube Shorts limit for today!");
        console.log("Count is now greater than 5");
        window.location.href = "about:blank";
      } else {
        count++;
        localStorage.setItem("shortsCount", count);
        console.log("Shorts Count", count);
      }
      console.log("You're watching a YouTube Short:", lastUrl);
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });
```

## Future Enhancements

- Option to customize the limit (e.g., setting it to 10 instead of 5).
- A popup interface to reset the counter or disable the extension.
- A statistics page showing Shorts consumption trends.

## License

This project is open-source and available under the MIT License.

## Contributing

Feel free to submit issues or contribute by making a pull request. Any suggestions for improvement are welcome!

## Author

**Sachin Sadiwal**

