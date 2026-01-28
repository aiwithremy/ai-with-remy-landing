/**
 * Attribution Tracking Script
 * Captures UTM parameters and referrer data for Beehiiv attribution
 */

(function() {
  'use strict';

  // Helper function to get URL parameters
  function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Helper function to extract domain from URL
  function extractDomain(url) {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.replace('www.', '');
    } catch (e) {
      return null;
    }
  }

  // Map referrer domains to appropriate medium
  function getDefaultMedium(referrer) {
    if (!referrer) return null;

    const domain = extractDomain(referrer);
    if (!domain) return null;

    // Social media platforms
    const socialPlatforms = ['instagram.com', 'facebook.com', 'twitter.com', 'x.com', 'linkedin.com', 'tiktok.com', 'pinterest.com'];
    if (socialPlatforms.some(platform => domain.includes(platform))) {
      return 'social';
    }

    // Search engines
    const searchEngines = ['google.com', 'bing.com', 'yahoo.com', 'duckduckgo.com', 'baidu.com'];
    if (searchEngines.some(engine => domain.includes(engine))) {
      return 'organic';
    }

    // Video platforms
    const videoPlatforms = ['youtube.com', 'vimeo.com'];
    if (videoPlatforms.some(platform => domain.includes(platform))) {
      return 'referral';
    }

    // Default for other referrers
    return 'referral';
  }

  // Initialize tracking on page load
  function initializeTracking() {
    const SESSION_KEY = 'beehiiv_attribution';

    // Check if we already have attribution data in this session
    let attributionData = sessionStorage.getItem(SESSION_KEY);
    let shouldUpdate = false;

    // Parse existing data or create new object
    if (attributionData) {
      try {
        attributionData = JSON.parse(attributionData);
      } catch (e) {
        attributionData = {};
        shouldUpdate = true;
      }
    } else {
      attributionData = {};
      shouldUpdate = true;
    }

    // Capture UTM parameters from current URL (these override stored values)
    const utmSource = getURLParameter('utm_source');
    const utmMedium = getURLParameter('utm_medium');
    const utmCampaign = getURLParameter('utm_campaign');

    if (utmSource || utmMedium || utmCampaign) {
      if (utmSource) attributionData.utm_source = utmSource;
      if (utmMedium) attributionData.utm_medium = utmMedium;
      if (utmCampaign) attributionData.utm_campaign = utmCampaign;
      shouldUpdate = true;
    }

    // Capture referrer if we don't have UTM data
    const referrer = document.referrer;
    if (referrer && !attributionData.referring_site) {
      const referrerDomain = extractDomain(referrer);

      // Only store if it's an external referrer (not from our own site)
      if (referrerDomain && !window.location.hostname.includes(referrerDomain)) {
        attributionData.referring_site = referrer;

        // Set default source and medium based on referrer if not already set
        if (!attributionData.utm_source) {
          attributionData.utm_source = referrerDomain;
        }
        if (!attributionData.utm_medium) {
          attributionData.utm_medium = getDefaultMedium(referrer);
        }

        shouldUpdate = true;
      }
    }

    // Save updated attribution data
    if (shouldUpdate) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(attributionData));
    }
  }

  // Public function to get attribution data
  window.getAttributionData = function() {
    const SESSION_KEY = 'beehiiv_attribution';
    const data = sessionStorage.getItem(SESSION_KEY);

    if (data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        return {};
      }
    }

    return {};
  };

  // Initialize tracking when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTracking);
  } else {
    initializeTracking();
  }

})();
