import React from 'react';
import ReactDOM from 'react-dom';
import './css/demo.css';
import AppTop from './js/AppTop.js';
import MyApp from "./js/MyApp";
import PropTypes from 'prop-types';



ReactDOM.render(
    <h1>Hello world</h1>,
    document.getElementById('root')
);


ReactDOM.render(
    <section>
        <h1>这是正确的例子</h1>
        <span>假设这里是标题下面的内容</span>
    </section>,
    document.getElementById("example")
);

ReactDOM.render(
    <AppTop />,
    document.getElementById('root2')
);

ReactDOM.render(
    <div>
        <h1>{1+1}</h1>
    </div>,
    document.getElementById('root3')
);

var i = 0;
ReactDOM.render(
    <div>
        <h1>{i == 1 ? 'True!' : 'False'}</h1>
    </div>,
    document.getElementById('root4')
);

var myStyle = {
    fontSize: 40,  //等价于fontSize: '100px',
    color: '#00ff00'
};
ReactDOM.render(
    <h1 style = {myStyle}>我是标题</h1>,
    document.getElementById('root5')
);

ReactDOM.render(
    /*标签外部的注释 */
    <h1>我是标题 {/*标签内部的注释*/}</h1>,
    document.getElementById('root6')
);

var arr = [
    <h1>HTML</h1>,
    <h2>CSS</h2>
];
ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('root7')
);

var my = <h1>我是标题呀</h1>;
ReactDOM.render(my, document.getElementById('root8'));


class My extends React.Component {
    render() {
        return (<h1>标题1</h1>);
    }
}

ReactDOM.render(<My />, document.getElementById('root9'));


ReactDOM.render(<MyApp />, document.getElementById('root10'));



class WebSite extends React.Component {
    render() {
        return (
            <div>
                <Name name={this.props.name} />
                <Link site={this.props.site} />
            </div>
        );
    }
}
class Name extends React.Component {
    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}
class Link extends React.Component {
    render() {
        return (
            <h1>{this.props.site}</h1>
        );
    }
}

ReactDOM.render(
    <WebSite name="百度一下，你就知道" site='http://www.baidu.com' />,
    document.getElementById('root11')
)


class MyApp2 extends React.Component {
    render() {
        return (<p>{this.props.name}</p>);
    }
}

ReactDOM.render(
    <MyApp2 name="张三" />,
    document.getElementById('root12')
);


class MyApp3 extends React.Component {
    //如果babel设置为es6的转码方式，会报错，因为定义静态属性不属于es6，而在es7的草案中。ES6的class中只有静态方法，没有静态属性。
    static defaultProps = {
        name: 'demo'
    }
    render() {
        return <p>this is my {this.props.name}</p>
    }
}

ReactDOM.render(
    <MyApp3 />,
    document.getElementById('root13')
);

class MyApp4 extends React.Component {
    render() {
        return <p>this is my {this.props.name}</p>
    }
}
//由于是用ES6 class语法创建组件，其内部只允许定义方法，而不能定义属性，class的属性只能定义在class之外。所以defaultProps要写在组件外部。
MyApp4.defaultProps = {
    name: 'xxx'
};

ReactDOM.render(
    <MyApp4 />,
    document.getElementById('root14')
);

class MyApp5 extends React.Component {
    render() {
        return(
            <h1>{this.props.name} : {this.props.age} : {this.props.sex}</h1>
        );
    }
}
MyApp5.props = {
    name: '张三',
    age: 18,
    sex: '男'
};

ReactDOM.render(
    //<MyApp name='张三' age='18' sex='男' />
    <MyApp5 {...MyApp5.props}/>,
    document.getElementById('root15')
);


var title = 'abc';
// var title = 123;
class MyApp6 extends React.Component {
    propTypes: {
        title: React.PropTypes.string.isRequired;
    }
    render() {
        return (<h1>{this.props.title}</h1>);
    }
}

ReactDOM.render(
    <MyApp6 title={title}/>,
    document.getElementById('root16')
);



class MyApp7 extends React.Component {
    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}
MyApp7.propTypes = {
    name: PropTypes.string
}

ReactDOM.render(
    <MyApp7 name='123' />,
    document.getElementById('root17')
)

class LikeButton extends React.Component {
    //constructor表示构造器，在constructor需要声明状态state，在声明state之前需要使用super(props);
    constructor(props) {
        super(props);//使用父类的属性

        //声明状态
        this.state={
            liked: false
        }
        //Currently, you are calling bind.
        //But bind returns a bound function.
        //You need to set the function to its bound value.
        //目前，你正在调用绑定。但是绑定返回绑定函数。您需要将函数设置为其绑定值。
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({liked: !this.state.liked});
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                你<strong>{this.state.liked ? '喜欢' : '不喜欢'}</strong>我，点我切换
            </button>
        )
    }
}

ReactDOM.render(
    <LikeButton />,
    document.getElementById('root18')
)


class MyApp8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({clickCount: this.state.clickCount + 1});
    }

    render() {
        return (
            <h2 onClick={this.handleClick}>
                点击后次数变更： {this.state.clickCount}
            </h2>
        );
    }
}

ReactDOM.render(
    <MyApp8 />,
    document.getElementById('root19')
);

class MyApp9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0,
            isRed: false,
            smallFont: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState(
            {clickCount: this.state.clickCount + 1},
            function() {
                this.setState(
                    {isRed: !this.state.isRed},
                    function() {
                        this.setState({smallFont: !this.state.smallFont});
                    }
                );
            }
        );
        console.log(this.state.isred);
    }

    render() {
        var redStyle = {color: 'red', fontSize: 30};
        var blueStyle = {color: 'blue', fontSize: 14};
        return (
            <h2 onClick={this.handleClick} style={this.state.isRed ? redStyle : blueStyle}>
                点击后次数变更： {this.state.clickCount}
            </h2>
        );
    }
}

ReactDOM.render(
    <MyApp9 />,
    document.getElementById('root20')
);

class MyApp10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    //通过componentDidMount 方法设置一个定时器，每隔1秒重新设置时间，并重新渲染：
    componentDidMount() {
        var oThis=this;
        clearInterval(this.timer);

        this.timer=setInterval(function() {
            oThis.setState({
                date: new Date()
            })
        }, 1000)
    }

    render(){
        return (
            <h2>{this.state.date.toLocaleTimeString()}</h2>
        );
    }
}
ReactDOM.render(
    <MyApp10 />,
    document.getElementById('root21')
);

class Content extends React.Component {
    //在渲染前调用,在客户端也在服务端
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    //在第一次渲染后调用，只在客户端
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    //在组件接收到一个新的 prop (更新后)时被调用
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
    }
    //在组件接收到新的props或者state时被调用
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    //在组件接收到新的props或者state但还没有render时被调用
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    //在组件完成更新后立即调用
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    //在组件从 DOM 中移除的时候立刻被调用
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

class MyApp11 extends React.Component {
    constructor(props) {
        super(props);
        //声明状态
        this.state = {
            data: 0
        };

        this.setNewNumber = this.setNewNumber.bind(this);
    }

    setNewNumber() {
        this.setState({data: this.state.data + 1});
    }

    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>点我改变</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <MyApp11 />
    </div>,
    document.getElementById('root21')
);

class MyApp12 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'hello'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.value} onChange={this.handleChange}/>
                <h2>{this.state.value}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <MyApp12 />,
    document.getElementById('root22')
);

//子组件
class Son extends React.Component {
    render() {
        return(
            <div>
                <input type='text' value={this.props.myData} onChange={this.props.updateState}/>
                <h2>{this.props.myData}</h2>
            </div>
        );
    }
}

//父组件
class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'hello'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({data: event.target.value});
    }

    render() {
        return (
            <div>
                <Son myData={this.state.data} updateState={this.handleChange}/>
            </div>
        );
    }
}



ReactDOM.render(
    <Father />,
    document.getElementById('root23')
);







class ClickEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'hello world'
        };
        this.changeData = this.changeData.bind(this);
    }

    changeData(event) {
        this.setState({value: '萨瓦迪卡'});
    }

    render() {
        return (
            <div>
                <button onClick={this.changeData}>点击改变</button>
                <h2>{this.state.value}</h2>
            </div>
        );
    }
}


ReactDOM.render(
    <ClickEvent />,
    document.getElementById('root24')
);

//子组件
class Site extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.updateState}>点击改变</button>
                <h2>{this.props.myData}</h2>
            </div>
        );
    }
}

//父组件
class Content2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'hello'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: '你好'});
    }

    render() {
        return(
            <div>
                <Site myData={this.state.value} updateState={this.handleChange}/>
            </div>
        );
    }
}


ReactDOM.render(
    <Content2 />,
    document.getElementById('root25')
);



class RefContent extends React.Component {
    constructor(props) {
        super(props);

        this.getFocus = this.getFocus.bind(this);
    }

    getFocus() {
        // 使用原生的DOM API获取焦点
        this.refs.myInput.focus();
    }

    render() {
        // 当组件插入到DOM后，ref属性添加一个组件的引用到`this.refs`
        return(
            <div>
                <input type='text' ref='myInput' />
                <button onClick={this.getFocus}>点击按钮获取焦点</button>
            </div>
        );
    }
}


ReactDOM.render(
    <RefContent />,
    document.getElementById('root26')
);








