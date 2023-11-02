'use strict' //will use strict mode

window.name = 'Vinayak'
document.write('window: '+window.name + '<br>')

//closing the window
// window.close()

//opening new window
// let udemyWidnow = window.open('https://www.udemy.com', 'Udemy window', 'width=100,height=100')
// udemyWidnow.resizeTo(500,500)
// udemyWidnow.moveTo(500,250)

// let to = window.setTimeout(()=> console.log('hello world'),2000)
// clearTimeout(to)

// let interval = window.setInterval(()=> console.log('hello world'),2000)
// clearInterval(interval)

document.write(window.screen.width + '<br>')
document.write(window.screen.height+ '<br>')
document.write(screen.availWidth+ '<br>')
document.write(screen.availHeight+ '<br>')
document.write(screen.colorDepth+ '<br>')
document.write(screen.pixelDepth+ '<br>')

//history is used to go back and forth in url
document.write(window.history.length + '<br>')
// history.back();
// history.forward();

//history.go() to go forward or backward, positive parameter to go forward, and negative paramter to go backward

document.write('document cookies: '+window.navigator.cookieEnabled + '<br>')
document.write(`name: ${navigator.appName}
version: ${navigator.appVersion}
code name: ${navigator.appCodeName}
platform: ${navigator.platform}
language: ${navigator.language}
java enabled: ${navigator.javaEnabled}
`)

// window.location = 'https://www.google.com' //navigate to new page
document.write('url: ' + location.href+ '<br>')
document.write('host: '+location.hostname+ '<br>')
document.write('protocol: '+location.protocol+ '<br>')
document.write('pathname: '+location.pathname+ '<br>')

// location.reload();
// location.assign('www.google.com')

// location.replace('https://www.google.com')

//creating cookie
document.cookie = 'username=VinayakG; expires=Thu, 2 Nov 2023, 10:30 UTC'
document.write(document.cookie +'<br>')
//deleting cookie
document.cookie = 'username=VinayakG; expires=Thu, 1 Nov 2010, 07:00 UTC'
document.write(document.cookie)