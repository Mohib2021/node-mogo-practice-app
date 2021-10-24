import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
	return (
		<div className="nav">
			<Link to="/home"> Home</Link>
			<Link to="/addProduct"> Add User</Link>
			<Link to="/users"> Users</Link>
		</div>
	);
}

export default Header;
