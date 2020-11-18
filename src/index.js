import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FloatingButton from './FloatingButton';
import FloatingButtonMain from './FloatingButtonMain';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div><FloatingButton class="floating-button" name="Floating Buton 1" background="black" firstcolor="#480048" secondcolor="#C04848" />
                    <FloatingButton class="floating-button2" name="Floating Button 2" background="black" firstcolor="#12D8FA" secondcolor="#1FA2FF" />
                    
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
