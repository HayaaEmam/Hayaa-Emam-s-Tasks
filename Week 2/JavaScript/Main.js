let theme = 'light'
document.querySelector('button').addEventListener('click',()=>{
    theme = theme ==='light' ? 'dark' : 'light'
    document.body.setAttribute('data-theme',theme)
})