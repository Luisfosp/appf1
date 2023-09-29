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

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticCars).then(cache => {
            cache.addAll(assets)
        })
    )
})