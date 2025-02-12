document.addEventListener('DOMContentLoaded', function() {
    // Update counter display
    chrome.storage.local.get(['shortsCount'], function(result) {
      document.getElementById('count').textContent = result.shortsCount || 0;
    });
  
    // Reset counter button
    document.getElementById('reset').addEventListener('click', function() {
      chrome.storage.local.set({shortsCount: 0}, function() {
        document.getElementById('count').textContent = 0;
      });
    });
  });