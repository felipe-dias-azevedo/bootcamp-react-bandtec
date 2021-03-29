var container = document.getElementById("app");
// var titulo = document.createElement("h1");
// titulo.innerHTML = "Título inserido por JS";
// container.appendChild(titulo);

function Contador(props) {
    // let numero = 0;
    const [numero, setNumero] = React.useState(0);

    function somar() {
        // numero++;
        setNumero(numero + 1);
        console.log(numero + " votos");
    }

    function subtrair() {
        // numero--;
        if (numero > 0) {
            setNumero(numero - 1);
        }
        console.log(numero + " votos");
    }

    var classPolitico = props.right ? "politico politico-right" : "politico"

    return (
        <React.Fragment>
            <div className={classPolitico}>
                <img src={props.url} alt={props.titulo} />
                <div className="cardPolitico">
                    <h2>{props.titulo}</h2>
                    <h3>Votos: {numero}</h3>
                    <section>
                        <button onClick={somar}>+</button>
                        <button onClick={subtrair}>-</button>
                    </section>
                </div>
            </div>
        </React.Fragment>
    );
}

function App(props) {
    return (
        <React.Fragment>
            <h2 className="titleApp">Votação Eleitoral 2022</h2>
            <div className="cardsPlace">
                <Contador titulo="Luiz Inácio Lula da Silva" url="img/lula.jpg" right={false} />
                <Contador titulo="Jair Messias Bolsonaro" url="img/bolsonaro.jpg" right={true} />
                <Contador titulo="João Doria" url="img/doria.jpg" right={false} />
                <Contador titulo="Luciano Hulk" url="img/huck.jpg" right={true} />
            </div>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);
// ReactDOM.render(App(), container);