import React, { useRef } from "react";
import "./addProduct.css";
function AddProduct() {
	const nameRef = useRef();
	const emailRef = useRef();
	const cityRef = useRef();
	const handleDataSubmit = (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const city = cityRef.current.value;
		const newUser = { name, email, city };
		fetch("http://localhost:5000/users", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newUser),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					alert("User added successfully");
				}
				e.target.reset();
			});
	};
	return (
		<div>
			<form onSubmit={handleDataSubmit}>
				<div className="mb-3">
					<input type="text" ref={nameRef} name="" placeholder="Name" id="" />
				</div>
				<div className="mb-3">
					<input
						type="email"
						ref={emailRef}
						name=""
						placeholder="Email"
						id=""
					/>
				</div>
				<div className="mb-3">
					<input type="text" name="" placeholder="City" ref={cityRef} id="" />
				</div>
				<input type="submit" value="Add" />
			</form>
		</div>
	);
}

export default AddProduct;
