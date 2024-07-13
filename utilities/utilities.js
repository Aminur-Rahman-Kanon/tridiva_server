function cronJob (){
    setInterval(() => {
        https.get('https://tridiva-server.onrender.com', (res) => {
            console.log('pinging...');
        })
    }, 840000);
}

module.exports = {
    cronJob
}