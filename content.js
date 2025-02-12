
let lastUrl = window.location.pathname;
let count = localStorage.getItem("shortsCount") || 0
console.log("count is ",count);

const observer = new MutationObserver(() => {
  if (window.location.pathname != lastUrl) {
    lastUrl = window.location.pathname;
    console.log(`Shorts url changes from last url ${lastUrl}`);
    if (lastUrl.includes("/shorts/")) {
      if(count > 5){
        alert("You have reached your YouTube Shorts limit for today!");
        console.log("Count is now greater than 5");
        window.location.href = "about:blank"
      } else {
        count++
        localStorage.setItem("shortsCount", count);
        console.log("Shorts Count",count);
      }
      console.log("You're watching a YouTube Short:", lastUrl);
    }
  }
});

observer.observe(document.body , {childList: true , subtree:true})

