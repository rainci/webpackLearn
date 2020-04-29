/*
 * @Author: your name
 * @Date: 2020-04-23 18:14:12
 * @LastEditTime: 2020-04-28 18:48:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wpDemo/src/index.js
 */
import _ from 'lodash';
import './index.css';
import Rainci from './x.jpg'
import PrintMe from './print.js'
import { cube } from './math.js';

function component() {
    var element = document.createElement('div');
    var pur = document.createElement('pre');
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack', ', i am rainci !'], ' ');
    element.classList.add('hello');
    
    pur.innerHTML = [
             'Hello webpack!',
             '5 cubed is equal to ' + cube(5)
          ].join('\n\n');
       
    element.appendChild(pur);
          
    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Rainci;

    element.appendChild(myIcon);

    var btn = document.createElement('button')
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = PrintMe;
    element.appendChild(btn);
    return element;
}

let el = component()
document.body.appendChild(el);
console.log(111,module.hot)
if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log('Accepting updated printMe');
        document.body.remove(el)
        el = component()
        document.body.appendChild(el);
    })
}