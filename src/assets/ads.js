var ad1 = document.getElementById('ad1')
// atOptions = {
//     'key' : '11c5f233a048f7ae616cecaa2548fe24',
//     'format' : 'iframe',
//     'height' : 250,
//     'width' : 300,
//     'params' : {}
//   };
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
  <script type="text/javascript" src="http${location.protocol === 'https:' ? 's' : ''}://www.gatetodisplaycontent.com/11c5f233a048f7ae616cecaa2548fe24/invoke.js"></script>`
  ad1.appendChild(jsAd1)
  console.log('yahooooooooooooooooooo')
// document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.gatetodisplaycontent.com/11c5f233a048f7ae616cecaa2548fe24/invoke.js"></scr' + 'ipt>');