let url = 'http://ip-api.com/json'

$httpClient.get(url, function(error, response, data) {
    let jsonData = JSON.parse(data)
    let ip = jsonData.query
    let isp = jsonData.isp
    let countryCode = jsonData.countryCode
    let emoji = getFlagEmoji(countryCode)
    let city = jsonData.city

    panel = {
        title: 'Query IP',
        content: `IP: ${ip}\nISP: ${isp}\nLocation: ${emoji} ${countryCode} - ${city}`,
        icon: 'network'
    }

    $done(panel);
});

function getFlagEmoji(countryCode) {
    const codePoints = countryCode
                        .toUpperCase()
                        .split('')
                        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
