import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard.js";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect (() => {
		actions.getUserContacts()
	}, [] );


	return (
	<div className="text-center mt-5 m-auto">
		<ContactCard />
	</div>
	)
};
