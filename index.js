function getIp(text) {
    const ipRegexp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
    const [ip] = text.match(ipRegexp);
    return ip;
}

function getPortsData(text) {
    const res = {};
    const portsRegexp = /(\d*\/\w*)/g;
    const portsData = text.match(portsRegexp);
    portsData.map(el => {
        const [portNum, portType] = el.split('/');
        if (res[portType]) {
            res[portType].push(portNum);
        } else {
            res[portType] = [portNum];
        }
    });
    return res;
}

function getFullAddress(portsData, ip) {
    const res = [];
    Object.keys(portsData).map(portType => {
        const portNumbers = portsData[portType];
        portNumbers.map(portNum => {
            const fullAddress = `${portType}://${ip}:${portNum}`;
            res.push(fullAddress);
        });
    });

    return res;
}

function handleClickParse() {
    const inputValue = document.getElementById('inputText').value;
    if (!inputValue) {
        return;
    }

    const arr = inputValue.split('\n');

    const outputText = arr.map(el => {
        const ip = getIp(el);
        const portData = getPortsData(el);
        const address = getFullAddress(portData, ip);
        return address;
    }).flat().join('\n');

    const outputTextArea = document.getElementById('outputText');
    outputTextArea.value = outputText;
}
