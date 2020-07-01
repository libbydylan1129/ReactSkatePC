import routes from "./routes."


function index(){
  const [isLoggedIn, setLoggedIn] = useState(false);

  return(
    <AuthContext.Provider value={{isLoggedIn, setLoggedIn}}>
    Is logged in? {JSON.stringify(isLoggedIn)}
    <div className="Index">
    <Header />
    <Switch>
    {routes.map(route => (
      <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      component={route.main}
      />
    ))}
    </Switch>
    </Router>
    </div>
    </AuthContext.Provider>

  )
}


const rootElement = document.getElementById("root");
