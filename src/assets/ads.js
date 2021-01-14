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
        {'url':'//p422935.clksite.com/adServe/banners?tid=422935_829305_0'},
        {'url':'https://www.greatdexchange.com/a/display.php?r=4054579'}
    ]


     window.onload = () => {
        var ad1 = document.getElementById('ad2')
        for(let j=0; j<urls_revhits.length; j++){
            console.log('lelelelelelelelelelellelelelelelelelelle')
          var div = document.createElement('div')
          var elAd = document.createElement('script')
          elAd.type = 'text/javascript'
          elAd.async = true
          elAd.setAttribute('data-cfasync', false)
          elAd.src = `http${location.protocol === 'https:' ? 's' : ''}${urls_revhits[j].url}`
          var elText = document.createElement('script')
          elText.type = 'text/javascript'

          div.appendChild(elText)
          div.appendChild(elAd)
          ad1.appendChild(div)
        }
        // for (let i=2; i<urls.length; i++){
        //     setTimeout(()=>{
        //         var div = document.createElement('div')
        //         var elAd = document.createElement('script')
        //         elAd.type = 'text/javascript'
        //         elAd.src = `http${location.protocol === 'https:' ? 's' : ''}${urls[i].url}`
        //         var elText = document.createElement('script')
        //         elText.type = 'text/javascript'
        //         elText.text = `atOptions = {${urls[i].opt.toString()}} 
        //         console.log('bruuuuhhhh') 
        //         alert('sisssss yoooo babyyyyyyyyyyyy')
        //         `

        //         div.appendChild(elText)
        //         div.appendChild(elAd)
        //         ad1.appendChild(div)
        //     }, 10000)
        // }
        // runIt(0)
        runIt(3)
     }


     function runIt(num){
         if(num<1){
             return;
         }
        var ad1 = document.getElementById('ad1')
        // for (let i=0; i<num; i++){
            setTimeout(()=>{
                if(num==1){
                    ad1 = document.getElementById('ad2') 
                }
                var div = document.createElement('div')
                var elAd = document.createElement('script')
                elAd.type = 'text/javascript'
                elAd.async = true
                elAd.src = `http${location.protocol === 'https:' ? 's' : ''}${urls[num-1].url}`
                var elText = document.createElement('script')
                elText.type = 'text/javascript'
                elText.text = `atOptions = {${urls[num-1].opt.toString()}} 
                console.log('bruuuuhhhh') 
                alert('sisssss yoooo')
                `

                div.appendChild(elText)
                div.appendChild(elAd)
                ad1.appendChild(div)
            }, num *3500)
            runIt(num-1)
        // }
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

