const CACHE_NAME = 'sanctuary-cache-v1';
const ASSETS = [
    './splash_screen/code.html',
    './sanctuary_dashboard/code.html',
    './task_details_with_budget/code.html',
    './calendar_with_deadline_alerts/code.html',
    './budgets/code.html',
    './advanced_settings/code.html',
    './stitch_task_list/code.html',
    './icons/icon-512.png',
    './manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
