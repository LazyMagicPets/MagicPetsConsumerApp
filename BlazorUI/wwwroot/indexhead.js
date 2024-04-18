// The purpose of this script is to pull any app specific index.html content into the
// BlazorUI project. This script is run by the index.html file in the WASMApp and MAUIApp 
// projects. This allows a single source of truth for both the WASMApp and MAUIApp projects.

document.title = "Consumer App";
var metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'utf-8');
document.head.appendChild(metaCharset);

// Link tags
var links = [
    { href: '_content/BlazorUI/favicon.png', rel: 'icon', type: 'image/png' },
    { href: '_content/BlazorUI/icon-512.png', rel: 'apple-touch-icon', sizes: '512x512' },
    { href: '_content/BlazorUI/icon-192.png', rel: 'apple-touch-icon', sizes: '192x192' }
];

links.forEach(function (linkInfo) {
    var link = document.createElement('link');
    Object.keys(linkInfo).forEach(function (key) {
        link.setAttribute(key, linkInfo[key]);
    });
    document.head.appendChild(link);
});
