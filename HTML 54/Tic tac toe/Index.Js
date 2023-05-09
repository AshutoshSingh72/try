
async function connect(){
  try {
    await window.chia.request({ method: "connect" });
    const publicKeys = await window.chia.request({ method: "getPublicKeys" });
    // synthetic public keys
    // more details, please visit: https://docs.goby.app/example
    console.log(publicKeys)
    document.getElementById('connect').innerHTML = 'connected';
    
  } catch (err) {
    // { code: 4001, message: 'User rejected the request.' }
  }
  
}
function send() {
  const params = {
  "to": "xch1ymnduam0halenpw5kqm8s2l6qzjsva65l4xkhaszse579zzp79mqzyp7sf",
  "amount": "000008",
  "memos": ["0x68656c6c6f2063686961", ], // hex string, "hello chia".encode("utf-8)
  "assetId": "",
};
window.location = "/Users/ashutoshsingh/Downloads/HTML 54/Tic tac toe/MinecraftClone/index.html";

window.chia.request({ method: "transfer", params });
async function toHex(txt) {
    const encoder = new TextEncoder();
    return Array
        .from(encoder.encode(txt))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('')
        
}
toHex('hello world')
}
