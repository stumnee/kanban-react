import React from "react";

export default class Welcome extends React.Component {
    addCard() {
        let card = window.prompt("Enter a card");
        if (!!card) {
            const {label, cards} = this.props;
            cards.push(card);
            this.setState({
                cards: cards,
                label: label
            });
            this.props.saveData()
        }
    }
    render() {
        const {idx, label, cards, moveCard, color} = this.props;
        const items = cards.map((card, key) => <li key={key}>
            <button className="btn-left" onClick={moveCard.bind(this, card, idx, idx - 1)}>&lt;</button>
            <span>{card}</span>
            <button className="btn-right" onClick={moveCard.bind(this, card, idx, idx + 1)}>&gt;</button>
        </li>);
        return <div className="col">
            <header style={{backgroundColor: '#' + color}}>{ label }</header>
            <ul>
                    {items}
            </ul>
            <button className="btn-add" onClick={this.addCard.bind(this)}>+ Add a card</button>
        </div>;
    }
}