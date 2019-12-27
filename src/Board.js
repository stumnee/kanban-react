import React from 'react'
import Column from './Column'
import data from './data'

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        let fromLocalStorage = localStorage.getItem('cards');
        this.state = {data: fromLocalStorage ? JSON.parse(fromLocalStorage) : data};
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.saveData()
    }

    moveCard(card, src, dest) {
        const data = this.state.data;

        data[src].cards = data[src].cards.filter(item => item !== card);
        data[dest].cards.push(card);

        this.setState({data: data})
    }

    saveData() {
        localStorage.setItem('cards', JSON.stringify(this.state.data));
    }

    render() {
        const columns = this.state.data.map((item, idx) =>
            <Column key={idx}
                    idx={idx}
                    moveCard={this.moveCard.bind(this)}
                    saveData={this.saveData.bind(this)}
                    label={item.label}
                    color={item.headerColor}
                    cards={item.cards}>
            </Column>);

        return <div className="board">
            {columns}
        </div>
    }
}