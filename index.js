let sign_up = document.querySelector("#sign_up");
		let login = document.querySelector("#login");

		sign_up.addEventListener('click',event=>{
			let email = document.getElementById('email').value;
			let pass = document.getElementById('password').value;

			
			console.log(email);
			console.log(pass);
			
			if(email == 'admin@gmail.com' && pass == 'admin'){
				window.href = "registraction_customer.html";
			}else{
				let err = document.querySelector("#email");
				err.style.borderColor = 'red';
				
				let err2 = document.querySelector("#password");
				err2.style.borderColor = 'red';
			}

			
		})
		login.addEventListener('click',event=>{
			let email = document.getElementById('email').value;
			let pass = document.getElementById('password').value;

			
			
			
			if(email == 'admin@gmail.com' && pass == 'admin'){
				window.location.href = "home_page_customer.html";
				console.log(email);
				console.log(pass);
			}else{
				alert('please enter valid email or password');
				let err = document.querySelector("#email");
				err.style.borderColor = 'red';
				
				let err2 = document.querySelector("#password");
				err2.style.borderColor = 'red';
			}

			
		})
		