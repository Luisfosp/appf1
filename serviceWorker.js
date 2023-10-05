const staticCars = "dev-f1-site-v1"

const assets = [
    "/",
    "/index.html",
    "/css/styele.css",
    "/js/app.js",
    "/img/rb2.avif",
    "/img/mamg2.avif",
    "/img/fe2.avif",
    "/img/am2.avif",
    "/img/ml2.avif",
    "/img/al2.avif",
    "/img/wi2.avif",
    "/img/ha2.avif",
    "/img/ar2.avif",
    "/img/at2.avif",
]

async function preCache(){
    const cache = await caches.open(staticCars);
    return cache.addAll(assets);
}

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        preCache()
    )
})

async function cacheFirst(request){
    const cacheResponse = await caches.match(request)

    if (cacheResponse){
        return cacheResponse;
    }

    try{
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            const cache = await caches.open(staticCars);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;

    }
    catch(error){
        return Response.error();
    }
}      

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        cacheFirst(fetchEvent.request)
    )
} )