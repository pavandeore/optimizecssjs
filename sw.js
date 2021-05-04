const cachename = 'static-data-v2';
const assets = [

]


self.addEventListener('install',(e)=>{
    console.log('service worker installed');
    e.waitUntil(
        caches.open(cachename).then( cache => {
            cache.addAll(assets)
        })
        
    )
    self.skipWaiting()
    
})

//some comment

self.addEventListener('activate',e =>{
    console.log('activated');
    evt.waitUntil(
        caches.keys().then(keys => {
          console.log(keys);
          return Promise.all(keys
            .filter(key => key !== cachename)
            .map(key => caches.delete(key))
          );
        })
    );
})

self.addEventListener("fetch",evt => {
    evt.respondWith(
        caches.match(evt.request).then(cachesRes=>{
            return cachesRes || fetch(evt.request);
        })
    )
})