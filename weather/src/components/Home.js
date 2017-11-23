var today = new Date();


export const Home = () =>
    <div className="container">
        <div id="first" style={{height: '100vh', marginTop: '100px'}}>
            <h1 className="text-center" style={{marginTop: '50px', marginBottom: '50px'}}>This is the first Div</h1>
            <div className="row">
                <div className="col-md-4">test</div>
                <div className="col-md-4">test</div>
                <div className="col-md-4">test</div>

            </div>

        </div>
    </div>

function test(){

}

/*
function tick() {
    const element = (
        <div>

        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}
*/
//setInterval(tick, 1000);
/*
<nav className="menu">
    <Link to="#first" activeClassName="selected">
        <HomeIcon />
    </Link>
    <Link to="#second" activeClassName="selected">
        <AddDayIcon />
    </Link>
    <Link to="#thirt" activeClassName="selected">
        <ListDaysIcon />
    </Link>
</nav>*/