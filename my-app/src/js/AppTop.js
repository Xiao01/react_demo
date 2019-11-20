import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/demo.css';

//类定义
class AppTop extends Component {
    render() {
        return (
            <header>
                <h1>我是公共标题栏</h1>
            </header>
        );
    }
}

export default AppTop; //将自定义的DOM元素暴露出来，供给其他的页面使用