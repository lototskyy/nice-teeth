import React from "react";
import "../styles/styles.css"

class App extends React.Component {
    constructor() {
        super();
    };

    state = {
        url: './images/young_girls_with_pigtails_brushing_her_teeth.jpg',
        update: true,
    };

    changeMe = (event) => {
        console.log(this.state.update)
        if (this.state.update === true) {
            console.log('yes');
            this.setState({
                url: './images/brush.jpg',
                update: false
            });
        }else {
            console.log('no');
            this.setState({
                url: './images/young_girls_with_pigtails_brushing_her_teeth.jpg',
                update: true
            });
        }
        console.log(this.state.url)





    }
   // backgroundImg = this.state.url;
    render() {
        return (
            <div className="nt-image" style={{backgroundImage: `url(${this.state.url})`}}
                 onDoubleClick={this.changeMe}>
                hello
            </div>
        )

    }
}

export default App;
