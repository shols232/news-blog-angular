let urls = [
    {'opt':`'key' : '11c5f233a048f7ae616cecaa2548fe24',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
        `,'url':'://www.gatetodisplaycontent.com/11c5f233a048f7ae616cecaa2548fe24/invoke.js'
    },
    // {'opt':`'key' : '1fbea0da52d5901c0c56e04842f997df',
    //     'format' : 'iframe',
    //     'height' : 50,
    //     'width' : 320,
    //     'params' : {}
    //     `,'url':'://www.gatetodisplaycontent.com/1fbea0da52d5901c0c56e04842f997df/invoke.js'
    // },
    // {'opt':`'key' : '3ea17290266c263ed1b6ed4aed845b41',
    //     'format' : 'iframe',
    //     'height' : 300,
    //     'width' : 160,
    //     'params' : {}`,'url':'://www.gatetodisplaycontent.com/3ea17290266c263ed1b6ed4aed845b41/invoke.js'
    // },
    // {'opt':`'key' : '50a3a8a1e114ebbf0963dfc4e7ba071b',
	// 	'format' : 'iframe',
	// 	'height' : 600,
	// 	'width' : 160,
    //     'params' : {}
    //     `,'url':'://www.gatetodisplaycontent.com/50a3a8a1e114ebbf0963dfc4e7ba071b/invoke.js'
    // }
     ]

     let urls_revhits = [
        // {'url':'://p422935.clksite.com/adServe/banners?tid=422935_829305_0'},
        // {'url': '://p422935.clksite.com/adServe/banners?tid=422935_829305_3'},
        // {'url':'://p422935.clksite.com/adServe/banners?tid=422935_829305_4'},
        // {'url':'://p422935.clksite.com/adServe/banners?tid=422935_829305_5'}
    ]


     window.onload = () => {
        var ad1 = document.getElementById('ad1')
        // var nav = document.getElementById('nav-ad')

        if(ad1){
            // url list count
            runIt(urls.length)
            runIt2(urls_revhits.length)
        }
     }

     function runIt2(num){
        if(num<1){
            return;
        }
       var ad1 = document.getElementById('ad1')
        setTimeout(()=>{
            var div = document.createElement('div')
            var elAd = document.createElement('script')
            elAd.type = 'text/javascript'
            elAd.async = true
            elAd.src = `http${location.protocol === 'https:' ? 's' : ''}${urls_revhits[num-1].url}`

            div.appendChild(elAd)
            ad1.appendChild(div)
        }, num *2000)
           runIt2(num-1)
     }

     function runIt(num){
         if(num<1){
             return;
         }
        var ad1 = document.getElementById('ad1')
        setTimeout(()=>{
            var div = document.createElement('div')
            var elAd = document.createElement('script')
            elAd.type = 'text/javascript'
            elAd.async = true
            elAd.src = `http${location.protocol === 'https:' ? 's' : ''}${urls[num-1].url}`
            var elText = document.createElement('script')
            elText.type = 'text/javascript'
            elText.text = `atOptions = {${urls[num-1].opt.toString()}} 
            console.log('bruuuuhhhh')
            `

            div.appendChild(elText)
            div.appendChild(elAd)
            ad1.appendChild(div)
        }, num *2000)
        runIt(num-1)
     }


