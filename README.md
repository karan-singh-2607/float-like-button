<h1 align="center">Floating Button</h1>
<p align="center">A FLoating effect like button built uisng svg and vanila JS, <a href="https://www.npmjs.com/package/floating-button">NPM Repository</a></p>

<p align="center">
    <a href="https://twitter.com/intent/tweet?text=A Liquid effect button built uisng svg and vanila JS.&url=https://github.com/karan-singh-2607/floating-like-button.git&hashtags=javascript,opensource,js,webdev,developers,npm"><img src="http://randojs.com/images/tweetShield.svg" alt="Tweet" height="30"/></a>
</p><br/><br/>

<img href="https://www.npmjs.com/package/float-button" src="https://github.com/karan-singh-2607/float-like-button/blob/master/screenshot/SS-3.png"/>

To use the LIquid button in your project -

1. - npm install floating-button
2. - Then Import floating-button in your react project

   `import FloatingButton from 'FloatingButton/src/FloatingButton'` if generate error then copy the FloatingButton.js file from the node_moudle folder and paste inside your src folder and import as `import FloatingButton from './FloatingButton' `

3. - use `<FloatingButton class="your-class-name-here" name="FirstButton" background="black" firstcolor="#1e88e5" secondcolor="yellow" />`
     -------- put your desired colors -----

   #### You should have different class name each time you are using the component like -

   `ReactDOM.render(<div>`
   `<FloatingButton class="floating-button" name="FirstButton" background="black" firstcolor="#1e88e5" secondcolor="yellow" />`
   `<FloatingButton class="floating-button2" name="FirstButton" background="black" firstcolor="#1e88e5" secondcolor="yellow" />`
   `</div>, document.getElementById('root'));`

   see the above example it will show 2 buttons if you want to use more than your class name should be different each time.

   Now you can use more than one floating-buttons on same page.

   Feel free to contribute on github - ( https://github.com/karan-singh-2607/float-like-button )

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##### License: MIT
