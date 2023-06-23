const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts : [],
			userContacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			createContact: async (name, email, address, phone)=>{

				const agendaSlug = "lucia_belen2023"
				const newContact = {
					full_name : name,
					email: email,
					agenda_slug: agendaSlug,
					address: address,
					phone: phone
				} 
				console.log(name, email, address, phone)

				try {
					await fetch("https://assets.breatheco.de/apis/fake/contact/", {
					  method: "POST",
					  headers: {
						"Content-Type": "application/json",
					  },
					  body: JSON.stringify(newContact),
					})
					  .then((response) => response.json())
					  .then((data) => {
						setStore({ contacts: [...getStore().contacts, data] });

						console.log(data)
					  });
				  } catch (error) {
					console.error("Error:", error);
				  }
				

			},
			getUserContacts: async ()=>{
				const requestOptions = {
					method: 'GET',
				  };
				  
				 await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/lucia_belen2023", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));
				
					
				
			}
		}
	};
};

export default getState;
