let urls = [
    {'opt':`'key' : '11c5f233a048f7ae616cecaa2548fe24',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
        console.log('she no get designer)
        alert('buntecky yoooo)
        `,'url':'://www.gatetodisplaycontent.com/11c5f233a048f7ae616cecaa2548fe24/invoke.js'
    },
    // {'opt':`'key' : '3ea17290266c263ed1b6ed4aed845b41',
    //     'format' : 'iframe',
    //     'height' : 300,
    //     'width' : 160,
    //     'params' : {}`,'url':'://www.gatetodisplaycontent.com/3ea17290266c263ed1b6ed4aed845b41/invoke.js'
    // },
    {'opt':`'key' : '50a3a8a1e114ebbf0963dfc4e7ba071b',
		'format' : 'iframe',
		'height' : 600,
		'width' : 160,
        'params' : {}
        console.log('ayeeeeee)
        `,'url':'://www.gatetodisplaycontent.com/50a3a8a1e114ebbf0963dfc4e7ba071b/invoke.js'
    }
     ]

     window.onload = () => {
        var ad1 = document.getElementById('ad1')
        for (let i=0; i<urls.length; i++){
            setTimeout(()=>{
                if(i==1){
                    ad1 = document.getElementById('ad2') 
                }
                var div = document.createElement('div')
                var elText = document.createElement('script')
                elText.type = 'text/javascript'
                elText.text = `atOptions = {${urls[i].opt.toString()}}`
                elAd = document.createElement('script')
                elAd.type = 'text/javascript'
                elAd.src = `http${location.protocol === 'https:' ? 's' : ''}${urls[i].url}`
                var done = false
                var done2 = false
                elText.onload = elText.onreadystatechanged = function(){
                    if(!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")){
                        done = true
                        console.log('done')
                    }
                } 
                elAd.onload = elText.onreadystatechanged = function(){
                    if(!done2 && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")){
                        done2 = true
                        console.log('done2')
                    }
                }

                div.appendChild(elText)
                div.appendChild(elAd)
                ad1.appendChild(div)
            }, 1000)
            
        }
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

