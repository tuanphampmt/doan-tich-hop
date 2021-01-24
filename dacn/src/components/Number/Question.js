import React, {Component} from 'react';

class Question extends Component {

    toSpeak = (id) => {
        var msg = new SpeechSynthesisUtterance(id);
        window.speechSynthesis.speak(msg);
    }
    displayElement = () => {
        var Aaudio = new Audio('/music/1.mp3');
        var Baudio = new Audio('/music/2.mp3');
        var Caudio = new Audio('/music/3.mp3');
        var Daudio = new Audio('/music/4.mp3');
        var Eaudio = new Audio('/music/5.mp3');
        var Faudio = new Audio('/music/6.mp3');
        var Gaudio = new Audio('/music/7.mp3');
        var Haudio = new Audio('/music/8.mp3');
        var Jaudio = new Audio('/music/9.mp3');
        switch (this.props.code) {
            case "one":
                return (
                    <a onClick={() => Aaudio.play()}>
                        <img className="h1" src="/Images/one.JPG" alt="" style={{height: '100px'}}/>
                    </a>
                )
            case "six":
                return (
                    <a onClick={() => Faudio.play()}>
                        <img className="h2" src="/Images/six.JPG" alt=""/>
                    </a>
                )
            case "five":
                return (
                    <a onClick={() => Eaudio.play()}>
                        <img className="h3" src="/Images/five.JPG" alt=""/>
                    </a>
                )
            case "two":
                return (
                    <a onClick={() => Baudio.play()}>
                        <img className="h4" src="/Images/two.JPG" alt=""/>
                    </a>
                )
            case "three":
                return (
                    <a onClick={() => Caudio.play()}>
                        <img className="h5" src="/Images/three.JPG" alt=""/>
                    </a>
                )
            case "nine":
                return (
                    <a onClick={() => Jaudio.play()}>
                        <img className="h6" src="/Images/nine.JPG" alt=""/>
                    </a>
                )
            case "four":
                return (
                    <a onClick={() => Daudio.play()}>
                        <img className="h7" src="/Images/four.JPG" alt=""/>
                    </a>
                )
            case "seven":
                return (
                    <a onClick={() => Gaudio.play()}>
                        <img className="h8" src="/Images/seven.JPG" alt=""/>
                    </a>
                )
            default:
                return (
                    <a onClick={() => Haudio.play()}>
                        <img className="h9" src="/Images/eight.JPG" alt=""/>
                    </a>
                )
        }
    }

    render() {
        return (
            <div className="number">
                {this.displayElement()}
            </div>
        );
    }
}

export default Question;