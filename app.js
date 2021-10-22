const Header = (props) =>
    <header>
        <h1>{props.title}</h1>
        <span className={'stats'}>Players: {props.totalPlayers}</span>
    </header>

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>

            <Counter/>
        </div>
    );
}

class Counter extends React.Component {

    state = {
        score: 0,
    };

    decrement() {
        this.setState(prevState => {
            return {
                score: prevState.score - 1
            }
        });
    }

    increment = () => {
        this.setState(prevState => ({
            score: prevState.score + 1,
        }));
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.decrement()}>-</button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.increment}>+</button>
            </div>
        );
    }
}

class App extends React.Component {
    state = {
        players: [
            {
                name: "Spenser",
                id: 1,
            },
            {
                name: "Nick",
                id: 2,
            },
            {
                name: "John",
                id: 3,
            },
            {
                name: "Haily",
                id: 4,
            },
        ]
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title={"Scoreboard"} totalPlayers={this.state.players.length}/>

                {this.state.players.map(player => <Player key={player.id.toString()} name={player.name}/>)}
            </div>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
