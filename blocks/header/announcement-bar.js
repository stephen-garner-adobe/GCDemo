// Announcement Bar Component
export default function decorateAnnouncementBar() {
  const announcementBar = document.createElement('div');
  announcementBar.className = 'announcement-bar';
  announcementBar.innerHTML = `
    <span><strong>FREE SHIPPING</strong> on orders above £50 | Gold Standard Beauty Since 2011</span>
  `;

  // Insert announcement bar at the very top of the page
  const { body } = document;
  if (body.firstChild) {
    body.insertBefore(announcementBar, body.firstChild);
  } else {
    body.appendChild(announcementBar);
  }

  // Adjust header position to account for announcement bar
  const header = document.querySelector('header');
  if (header) {
    const navWrapper = header.querySelector('.nav-wrapper');
    if (navWrapper) {
      // The CSS already handles the positioning
    }
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', decorateAnnouncementBar);
} else {
  decorateAnnouncementBar();
}
