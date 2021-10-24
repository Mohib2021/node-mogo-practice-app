import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
function Users() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	const handleDelete = (id) => {
		const url = `http://localhost:5000/users/${id}`;
		fetch(url, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				const makeSure = window.confirm("Are you sure you want to delete?");
				if (makeSure) {
					if (data.deletedCount > 0) {
						const remainingUsers = users.filter((single) => single._id !== id);
						setUsers(remainingUsers);
						alert("Deleted successfully");
					} else alert("Delete failed");
				}
			});
	};

	const history = useHistory();
	const handleUpdate = (id) => {
		history.push(`/users/update/${id}`);
	};
	return (
		<div>
			<ul>
				{users.map((single) => (
					<li key={single._id}>
						{" "}
						Name : {single.name} Email: {single.email} City : {single.city}
						&nbsp;
						<button onClick={() => handleUpdate(single._id)}>
							Update
						</button>{" "}
						&nbsp;
						<button onClick={() => handleDelete(single._id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Users;
