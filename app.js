const players = [
    {
        name: "Spenser",
        score: 90,
        id: 1,
    },
    {
        name: "Nick",
        score: 85,
        id: 2,
    },
    {
        name: "John",
        score: 80,
        id: 3,
    },
    {
        name: "Haily",
        score: 95,
        id: 4,
    },
];

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

            <Counter score={props.score}/>
        </div>
    );
}

const Counter = (props) =>
    <div className="counter">
        <button className="counter-action decrement"> -</button>
        <span className="counter-score">{props.score}</span>
        <button className="counter-action increment"> +</button>
    </div>

const App = (props) =>
    <div className="scoreboard">
        <Header title={"Scoreboard"} totalPlayers={1}/>

        {props.initialPlayers.map(player => <Player key={player.id.toString()} name={player.name} score={player.score}/>)}
    </div>

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
)
