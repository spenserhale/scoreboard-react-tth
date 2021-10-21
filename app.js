const title = '\'s First React Element!'
const desc = 'I just learned how to create a React node and render it into the Dom'
const myTitleId = 'main-title';
const name = 'Spenser';

const header = (
    <header>
        {/* Comment */}
        <h1 id={myTitleId}>{name}{title}</h1>
        <p className={'main-desc'}>{desc}</p>
    </header>
)

ReactDOM.render(
    header,
    document.getElementById('root')
)
