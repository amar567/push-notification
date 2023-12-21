self.addEventListener('push', function (event) {
    // const data = event.data.json();

    // event.waitUntil(
    //     self.registration.showNotification(data.title, data.options)
    // );
});

if (navigator.setAppBadge) {
    // Display the number of unread messages.
    navigator.setAppBadge(numberOfUnreadMessages);
}

// Listen to "push" events in the service worker.
self.addEventListener("push", (event) => {
    // Extract the unread count from the push message data.
    const message = event.data.json();
    const unreadCount = message.unreadCount;
  
    // Set or clear the badge.
    if (navigator.setAppBadge) {
      if (unreadCount && unreadCount > 0) {
        navigator.setAppBadge(unreadCount);
      } else {
        navigator.clearAppBadge();
      }
    }
  });