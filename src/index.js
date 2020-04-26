/*
 * @Author: your name
 * @Date: 2020-04-23 18:14:12
 * @LastEditTime: 2020-04-24 10:23:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wpDemo/src/index.js
 */
import _ from 'lodash';
import './index.css';
import Rainci from './x.jpg'
import printMe from './print.js'

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack', ', i am rainci !'], ' ');
    element.classList.add('hello');
    

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Rainci;

    element.appendChild(myIcon);

    var btn = document.createElement('button')
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());