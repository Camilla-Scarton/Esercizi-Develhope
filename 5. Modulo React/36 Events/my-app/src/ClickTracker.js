import React from "react";

export class ClickTracker extends React.Component {
    state = {
        lastClicked: "No one",
    }

    lastClicked = (event) => {
        console.log(event.currentTarget)
        this.setState(state => {
            return {
                lastClicked: event.target.name,
            }
        }) 
    }

    render() {
        return (
            <div>
                <button name="Button 1" onClick={this.lastClicked}>
                    Button 1
                    <img name="Butterfly 1" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Freemind_Icon.png?20100115140705" alt="Butterfly 1"/>
                </button>
                <button name="Button 2" onClick={this.lastClicked}>
                    Button 2
                    <img name="Butterfly 2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Butterfly_icon_%28Noun_Project%29.svg/100px-Butterfly_icon_%28Noun_Project%29.svg.png?20140113002307" alt="Butterfly 2"/>
                </button>
                <button name="Button 3" onClick={this.lastClicked}>
                    Button 3
                    <img name="Butterfly 3" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Farm-Fresh_butterfly.png?20100918141022" alt="Butterfly 3"/>
                </button>
                <h1>The target name is: {this.state.lastClicked}</h1>
                <div>The target name is either the button or the image. It depends on where we click.</div>
                <div>The event.currentTarget is always the button, because the function is linked to it.</div>
                <div>In console we can print the event.currentTarget: it's a readonly property.</div>
            </div>
        )
    }
}