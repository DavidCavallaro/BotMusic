module.exports = async (client) => {
    console.log(`Online by @DavidCavallaro on GitHub`);
    
    let status = [
        {name: `AnimePlus_ |
        Per info -> ,help`, type: 'LISTENING'},
        {name: ` AnimePlus_ |
        Per info -> ,help`, type: 'LISTENING'},
    ]
    function setStatus(){
        let randomStatus = status[Math.floor(Math.random()*status.length)]
        client.user.setPresence({activity: randomStatus})
    }
    setStatus();
    setInterval(() => setStatus(), 20000)
};