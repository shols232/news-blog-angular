var ad1 = document.getElementById('ad1')
jsAd1 = document.createElement('script')
jsAd1.type = 'text/javascript'
jsAd1.text = `
atOptions = {
'key' : '11c5f233a048f7ae616cecaa2548fe24',
'format' : 'iframe',
'height' : 250,
'width' : 300,
'params' : {}
};
atOptions = {
    'key' : '3ea17290266c263ed1b6ed4aed845b41',
    'format' : 'iframe',
    'height' : 300,
    'width' : 160,
    'params' : {}
};
`
jsAd2 = document.createElement('script')
jsAd2.type = 'text/javascript'
jsAd2.src = `http${location.protocol === 'https:' ? 's' : ''}://www.gatetodisplaycontent.com/11c5f233a048f7ae616cecaa2548fe24/invoke.js`
jsAd3 = document.createElement('script')
jsAd3.type = 'text/javascript'
jsAd3.src = `http${location.protocol === 'https:' ? 's' : ''}://www.gatetodisplaycontent.com/3ea17290266c263ed1b6ed4aed845b41/invoke.js`
ad1.appendChild(jsAd1)
ad1.appendChild(jsAd2)
ad1.appendChild(jsAd3)

