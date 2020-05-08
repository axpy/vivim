/* eslint-disable */

export default ({ app }) => {

  //if (process.env.NODE_ENV !== 'production') return

  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-57DB5FC');

  let noScript = document.createElement('noscript')
  let iFrame = document.createElement('iframe')
  iFrame.src = 'https://www.googletagmanager.com/ns.html?id=GTM-57DB5FC'
  iFrame.height = 0
  iFrame.width = 0
  iFrame.style = 'display:none;visibility:hidden'
  noScript.append(iFrame)
  document.body.prepend(noScript)
  //noscript: [{ hid: 'gtmBody', innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57DB5FC" height="0" width="0" style="display:none;visibility:hidden"></iframe>`, pbody: true }],
  //__dangerouslyDisableSanitizersByTagID: {
  //  'gtmBody': ['innerHTML']
  //},
  // это можно добавить в nuxt.config.js в head но тогда iframe показывается как строка
}