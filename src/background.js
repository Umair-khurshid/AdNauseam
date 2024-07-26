// Import external libraries and scripts
importScripts(
  "lib/lz4/lz4-block-codec-any.js",
  "lib/jszip.min.js",
  "lib/yamd5.js",
  "js/vapi.js" 
);

// Function expression to handle async module imports
(async () => {
  // Dynamically import your modules
  await import("js/start.js");
  await import("js/adn/core.js");
  await import("js/adn/dnt.js");
