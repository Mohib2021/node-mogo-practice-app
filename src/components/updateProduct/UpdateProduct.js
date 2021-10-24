import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";

function UpdateProduct() {
	const [user, setUser] = useState({});
	const { id } = useParams();
	const history = useHistory();
	useEffect(() => {
		const url = `http://localhost:5000/users/${id}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, []);
	const handleNameChange = (e) => {
		const updatedName = e.target.value;
		const updatedUser = { ...user };
		updatedUser.name = updatedName;
		setUser(updatedUser);
	};
	const handleEmailChange = (e) => {
		const updatedEmail = e.target.value;
		const updatedUser = { ...user };
		updatedUser.email = updatedEmail;
		setUser(updatedUser);
	};
	const handleCityChange = (e) => {
		const updatedCity = e.target.value;
		const updatedUser = { ...user };
		updatedUser.city = updatedCity;
		setUser(updatedUser);
	};
	const handleUpdateData = (e) => {
		e.preventDefault();
		const url = `http://localhost:5000/users/${id}`;
		fetch(url, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					alert("Updated Successfully");
					setUser({});
					history.push("/users");
				} else {
					alert("Sorry updated failed");
					history.push("/users");
				}
			});
	};
	return (
		<div>
			<form onSubmit={handleUpdateData}>
				<input
					onChange={handleNameChange}
					type="text"
					value={user.name || ""}
				/>
				<input
					onChange={handleEmailChange}
					type="email"
					value={user.email || ""}
				/>
				<input
					onChange={handleCityChange}
					type="text"
					value={user.city || ""}
				/>
				<input type="submit" value="Update" />
			</form>
		</div>
	);
}

export default UpdateProduct;
