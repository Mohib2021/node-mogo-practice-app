import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/addProduct/AddProduct";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import UpdateProduct from "./components/updateProduct/UpdateProduct";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/addProduct">
						<AddProduct />
					</Route>
					<Route path="/users/update/:id">
						<UpdateProduct />
					</Route>
					<Route path="/users">
						<Users></Users>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
