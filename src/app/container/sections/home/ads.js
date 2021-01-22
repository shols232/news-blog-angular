let urls = [
  {'opt':`'key' : '11c5f233a048f7ae616cecaa2548fe24',
      'format' : 'iframe',
      'height' : 250,
      'width' : 300,
      'params' : {}
      `,'url':'://www.gatetodisplaycontent.com/11c5f233a048f7ae616cecaa2548fe24/invoke.js'
  },
  {'opt':`'key' : '3ea17290266c263ed1b6ed4aed845b41',
      'format' : 'iframe',
      'height' : 300,
      'width' : 160,
      'params' : {}`,'url':'://www.gatetodisplaycontent.com/3ea17290266c263ed1b6ed4aed845b41/invoke.js'
  },
  {'opt':`'key' : '50a3a8a1e114ebbf0963dfc4e7ba071b',
  'format' : 'iframe',
  'height' : 600,
  'width' : 160,
      'params' : {}
      `,'url':'://www.gatetodisplaycontent.com/50a3a8a1e114ebbf0963dfc4e7ba071b/invoke.js'
  }
   ]

let urls_revhits = [
    // {'url':'//p422935.clksite.com/adServe/banners?tid=422935_829305_0'}
]

   window.onload = () => {
      var ad1 = document.getElementById('ad1')
      for(let j=0; j<urls_revhits.length; j++){
            console.log('lelelelelelelelelelellelelelelelelelelle')
          var div = document.createElement('div')
          var elAd = document.createElement('script')
          elAd.type = 'text/javascript'
          elAd.async = true
          elAd.setAttribute('data-cfasync', false)
          elAd.src = `http${location.protocol === 'https:' ? 's' : ''}${urls_revhits[i].url}`
          var elText = document.createElement('script')
          elText.type = 'text/javascript'
          div.appendChild(elText)
          div.appendChild(elAd)
          ad1.appendChild(div)
      }
      for (let i=0; i<urls.length; i++){
                  insertAds(i, url=urls[i].url, options=urls[i].opt.toString())   
      }
  function insertAds(count, url, options){
                  setTimeout(function(){
                  var div = document.createElement('div')
                  var elAd = document.createElement('script')
                  elAd.type = 'text/javascript'
                  elAd.async = true
                  elAd.src = `http${location.protocol === 'https:' ? 's' : ''}${url}`
                  var elText = document.createElement('script')
                  elText.type = 'text/javascript'
                  elText.text = `atOptions = {${options}} 
                  console.log('bruuuuhhhh', ${count}) 
                  alert('sisssss yoooo babyyyyyyyyyyyy${count}')
                  `

                  div.appendChild(elText)
                  div.appendChild(elAd)
                  ad1.appendChild(div)
          },6000)
        }
   }
