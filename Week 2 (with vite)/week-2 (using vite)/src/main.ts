import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import '../CSS/Style.scss'

let theme = 'light'
document.querySelector('button').addEventListener('click',()=>{
    theme = theme ==='light' ? 'dark' : 'light'
    document.body.setAttribute('data-theme',theme)
})

  
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
