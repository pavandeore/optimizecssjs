if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log("registered",reg))
    .catch((err) => console.log('Not registered',err))
}