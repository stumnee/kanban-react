import React from 'react'
import Column from './Column'
import data from './data'

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: data};
    }
    moveCard(card, src, dest) {
        const data = this.state.data;

        data[src].cards = data[src].cards.filter(item => item !== card);
        data[dest].cards.push(card);

        this.setState({data: data})
    }

    render() {
        const columns = this.state.data.map((item, idx) =>
            <Column key={idx}
                    idx={idx}
                    moveCard={this.moveCard.bind(this)}
                    label={item.label}
                    color={item.headerColor}
                    cards={item.cards}>
            </Column>);

        return <div className="board">
            {columns}
        </div>
    }
}