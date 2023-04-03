// DropDown Search Input(3-41)
// Dummy data
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon', 'Mango'];

// Get the input and dropdown elements
const input = document.querySelector('.autocomplete input[type="text"]');
const dropdown = document.querySelector('.autocomplete-items');

// Add event listener to input
input.addEventListener('input', function() {
  // Clear previous results
  dropdown.innerHTML = '';
  // Filter the data based on input value
  const filtered = fruits.filter(function(fruit) {
    return fruit.toLowerCase().indexOf(input.value.toLowerCase()) !== -1;
  });
  // Add the filtered results to the dropdown
  filtered.forEach(function(fruit) {
    const div = document.createElement('div');
    div.textContent = fruit;
    dropdown.appendChild(div);
  });
  // Show the dropdown
  dropdown.style.display = 'block';
});

// Add event listener to dropdown
dropdown.addEventListener('click', function(event) {
  // Update input value with selected option
  input.value = event.target.textContent;
  // Hide the dropdown
  dropdown.style.display = 'none';
});

// Add event listener to document to hide dropdown when clicked outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.autocomplete')) {
    dropdown.style.display = 'none';
  }
});


// Form Submitting(45-72)

let form = document.querySelector("form");
		// The document.querySelector() method returns the first element that matches a specified CSS selector.
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			// The preventDefault() method stops the form from submitting and prevents the page from refreshing.
			document.querySelector("#sub").value = "Saving..";
			// Change the value of the submit button to "Submitting..." while the form is being submitted.
			let data = new FormData(form);
			// The FormData() method creates a new FormData object that contains the values of all the form fields.
			fetch('https://script.google.com/macros/s/AKfycbwuRkVJvVOMgtkFOOdXkDe57ZOR-0MbQPpjdMmsy45Y8jIXd_ILXtwp7C7d1IDHcrDn/exec', {
					method: "POST",
					body: data
				})
				// The fetch() method is used to make a request to the server and retrieve data.
				// This is an example API endpoint. Replace it with the actual URL for the API endpoint you want to use.
				.then(res => res.text())
				// The .then() method is used to handle the response from the server.
				// The response is converted to text using the res.text() method.
				.then(data => {
					document.querySelector("#msg").innerHTML = "Saved Succeffully";
					alert("Job Card Saved Successfully")
					window.location.reload()
					// The innerHTML property sets or returns the HTML content of an element.
					// Here, we are setting the content of the <h1> element to the response from the server.
					//document.querySelector("#sub").value = "Save Jobcard"
					// Change the value of the submit button back to "Submit" after the form has been submitted.
				});
		})