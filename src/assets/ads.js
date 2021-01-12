let urls = [
    {'opt':`'key' : '11c5f233a048f7ae616cecaa2548fe24',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}`,'url':'://www.gatetodisplaycontent.com/11c5f233a048f7ae616cecaa2548fe24/invoke.js'
    },
    {'opt':`'key' : '3ea17290266c263ed1b6ed4aed845b41',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}`,'url':'://www.gatetodisplaycontent.com/3ea17290266c263ed1b6ed4aed845b41/invoke.js'
    }
     ]
var ad1 = document.getElementById('ad1')
for (let i=0; i<urls.length; i++){
    var div = document.createElement('div')
    var elText = document.createElement('script')
    elText.type = 'text/javascript'
    elText.text = `atOptions = {${urls[i].opt.toString()}}`
    elAd = document.createElement('script')
    elAd.type = 'text/javascript'
    elAd.src = `http${location.protocol === 'https:' ? 's' : ''}${urls[i].url}`
    div.appendChild(elText)
    div.appendChild(elAd)
    ad1.appendChild(div)
}


// var ad2 = document.getElementById('ad2')
// jsAd1Text = document.createElement('script')
// jsAd1Text.type = 'text/javascript'
// jsAd1Text.text = `
// atOptions = {
// 'key' : '11c5f233a048f7ae616cecaa2548fe24',
// 'format' : 'iframe',
// 'height' : 250,
// 'width' : 300,
// 'params' : {}
// };
// `
// jsAd2Text = document.createElement('script')
// jsAd2Text.type = 'text/javascript'
// jsAd2Text.text = `atOptions = {
//     'key' : '3ea17290266c263ed1b6ed4aed845b41',
//     'format' : 'iframe',
//     'height' : 300,
//     'width' : 160,
//     'params' : {}
// };`

// jsAd1 = document.createElement('script')
// jsAd1.type = 'text/javascript'
// jsAd1.src = `http${location.protocol === 'https:' ? 's' : ''}://www.gatetodisplaycontent.com/11c5f233a048f7ae616cecaa2548fe24/invoke.js`
// jsAd2 = document.createElement('script')
// jsAd2.type = 'text/javascript'
// jsAd2.src = `http${location.protocol === 'https:' ? 's' : ''}://www.gatetodisplaycontent.com/3ea17290266c263ed1b6ed4aed845b41/invoke.js`
// ad1.appendChild(jsAd1Text)
// ad1.appendChild(jsAd1)
// ad2.appendChild(jsAd2Text)
// ad2.appendChild(jsAd2)

