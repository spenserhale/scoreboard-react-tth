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

            <Counter score={props.score} />
        </div>
    );
}

const Counter = (props)  =>
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{props.score}</span>
        <button className="counter-action increment"> + </button>
    </div>

const App = () =>
    <div className="scoreboard">
        <Header title={"Scoreboard"} totalPlayers={1} />
        <Player name={"Spenser"} score={50} />
        <Player name={"Nick"} score={40} />
        <Player name={"John"} score={10} />
        <Player name={"Haily"} score={25} />
    </div>

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
