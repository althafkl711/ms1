// DropDown Search Input(3-41)
// Dummy data
var fruits = ['Ecommerce Customers', 


'General Customer',
'A hazmi cold store',
'ABDUL NASIR M.H. AL SINAN TRADING EST.',
'ABU MANSOOR INTERNATIONAL TRADING COMPANY',
'ABU ZAID RESTAURANT COMPANY',
'AFAQ SWEETS AND FOODS ESTABLISHMENT',
'Ahmed eid albishri establishment',
'Ahmed Saleh Al Haqal Al Harthy Trade Company',
'AKUN',
'AL ALIDAGREER TRADING EST',
'AL AMAL ICE CREAM',
'AL ANZI TURKI KHAIRALLAH',
'AL EHSAN COMPANI',
'AL FARIS COLD STORE TRADING COMPANY',
'AL FIFI TRADING COMPANI',
	'AL HADEEL INTERNATIONAL TRADING COMPANY',
	'AL HAYA MEDICAL COMPANI',
	'AL HAZMI COLDSTOR',
	'AL HAZMI INTERNATIONAL COMPANY',
	'AL KHALEEJ TRADING COMPANI',
	'AL NAQA AL MUBTAKIR ICE FACTORY',
	'AL RABI SAUDI FOOD COMPANY',
	'AL SHAALAN SWEETS EST',
	'AL SOUKYAINTERNATIONAL COMPANY .',
'AL TURATH SAUDIA',
'AL ZAMIL FOOD INDUSTRIES LIMITED',
'AL-EKHLAS BUSINESS',
'AL-HAFASH EST. FOR TRANSPORT',
'Al-Takhhara Caravan Company',
'ALFANAR BREAD CO LTD .',
'ALI MANDILI TRADING COMPANY',
'ALI MUBARAK MHD AL JUHAINI TRADING EST',
'ALKHAZAR FISHERIES FACTORY COMPANY',
'ALSAFA WAREHOUSE FOR PHARMACEUTICALS COMPANY LTD',
'Amkin transport company',
'AMOODI COMPANY',
'anas sameer bahasman',
'ARABIAN PRODUCTS FACTORY FOR MEDICAL DISINFECTANTS',
'arcoma arabian commercoial agency',
'AREABIAN TRANSPORT CO. LTD',
'ARROW FOOD DISTRIBUTION COMPANY',
'AWANEY AND BASHAR SHAKEER COMPANY',
'BAKERS CHOICE',
'Banet food company ltd.',
'BASMAH MARKETING COMPANY',
'BEST FOODS TRADING COMPANY',
'BEST HARVEST TRADING COMPANY',
'BLUE LIMITS',
'BURGER ALTAZAJ',
'BUSHRA FRESH FLOWERS',
'CIGALAH HEALTH CARE COMPANY',
'CITYLINK TRADE & TRANSPORT CO LTD',
'COMPANY MOHAMMED MUSA ABU KHAMSEEN',
'COMPANY NRTC',
'cus',
'Daily food company',
'DAR JABHAN TRADING COMPANY',
'DEL MONTE SAUDI ARABIA .CO .LTD',
'EMDAD',
'est. tyur al khyr',
'FAISAL',
'FAISAL SALEH AL HARAZI NAQLIYATH',
'FAMOUS TRADING COMPANY',
'FOOD AHDIYAT COMPANY',
'FUTURE COLD STORES TRADING COMPANY LTD',
'GLOBAL STAR',
'green basket',
'HAJAR COLD STORE COMPANY',
'HARVEST',
'hotel nadwi',
'IBRAHIM AL SHANAFI',
'IBRAHIM AL SHANIFI COMPANY',
'IBRAHIM JAMEEL DIAB COMPANY',
'IBRAHIM MOHAMED AL HODAITHY CO.',
'IKRAM CHARITY ORGANIZATION FOR SAVING FOOD',
'INNOVA SAUDI HEALTH CARE',
'ISLAM COMMERCIAL ENTERPRISES COMPANY',
'Jazz Contracting Company',
'joody pack',
'khairallah',
'KITAYKIT FAST FOOD EST.',
'KTAYKIT FAST FOOD EST.',
'Kyan al nasar company',
'MADINAH COMPANY',
'maitham hassan al humaidi trading establishment',
'MAJID RASHID HAMAD AL JAHANI COM',
'MAWFOOR',
'MOSAREH ALHADISHA',
'MULTI BRAND FOR TRADING COMPANY',
'NABD TIHAMA TRADING COMPANY',
'NAHADA MODERN COMPANY',
'NAQA ICE COMPANY',
'NAQAWH BILLS LTD',
'NASER ALI M JOODI FOOD STUFF EST',
'nesma united',
'NEW DAMMAM EST. FOR TRADING',
'OMAR ALI BALSHARAF TRADING EST',
'PRIME TRADING COMPANY',
'RAGAD WORLD TRADING COMPANY',
'rashid',
'REFADAH ALHEJAZ COMPANY',
'REFADAH ALHEJAZ COMPANY',
'SAFA AL BAHAR TRADING COMPANY ',
'SAGER COLD STORE ( ARABIAN SAGER TRADING COMPANY)',
'Saleh ali al omri establishment',
'SALIM HUSSAIN SALIM ALMALKI FOR TRADE EST.',
'SANVA FLOWERS',
'SAUDI AREABIAN ENGINEERING COPANI',
'SHAIJATH MOHAMMED ALI TRADING ESTABLISHMENT',
'SHAR COMPANY',
'sheera lateen',
'SHELL FISHERIES TRADING COMPANY LTD ',
'SIAFA INTERNATIONAL',
'SIDDHA',
'STAR LINKS',
'support services company ltd. (hamard)',
'TABIAT BELADI ESTABLISHMENT',
'Tadawul raheese trading company',
'Talal one trading company',
'tamimi global company',
'TAZA COMPANY LIMITED',
'TAZAJ',
'Tharfiya',
'THUJJAR SHUTTAR TRADING COMPANY(HOUSE CARE)',
'UNITED CARTON INDUSTRIES COMPANY',
'UNITED PHARMA COMPANY',
'UNITED TRADING COMPANY',
'WAHATH AL ROOHAH FOOD EST',
'western union poultry corporation',
'WRAPS ARABIA',
'YAG TRADING COMPANY',
'ةشركة المدحدة اللادوية',
'جمعية الصيادين التعاونيه بمنطقة مكه المكرمه '
,'شركة البرج العالميه لاداره الفنادق المحدوده'
,'شركة السدة لتقديم الوجبات '
,'شركة الصالحية التخارية مسا همه مقفله'
,'شركة الصالحية التخارية مساهمة مقفله'
,'شركة العهد الوطنية المحدودة لخدمة الحجاج الداخل '
,'شركة المتحدة اللا دوية'
,'شركة بيوت العربية المحدودة (شركة شخصواحد)'
,'شركة سواعد الرياض'
,'شركة محمصة تسالي مرسي مطروح'
,'مؤسسة احمد عيد البشري '
,'مؤسسة ثجرة الصفقاتالتخارية'
,'مؤسسة حسين عبده عسيري للتخارة '
,'مؤسسة ستةبحورالتخارية'
,'مؤسسة شخرة الصفقات التخارية '
,'مصنح ستار اللاغدية'];


// Get the input and dropdown elements
var input = document.querySelector('.autocomplete input[type="text"]');
var dropdown = document.querySelector('.autocomplete-items');

// Add event listener to input
input.addEventListener('input', function() {
  // Clear previous results
  dropdown.innerHTML = '';
  // Filter the data based on input value
  var filtered = fruits.filter(function(fruit) {
    return fruit.toLowerCase().indexOf(input.value.toLowerCase()) !== -1;
  });
  // Add the filtered results to the dropdown
  filtered.forEach(function(fruit) {
    var div = document.createElement('div');
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
			fetch('https://script.google.com/macros/s/AKfycbx7Q5CBXf08EHfdba5XhARr9Rz6MGEf4tirYIp8UgOsk0uhDVXHntp2LJFix5iGTDXC/exec', {
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


		// Adding Sapre and Labour charge and autofill Total

		
		function calculate() {
			var labourCharge=0;
            var oldSpare=0;
			var newSpare=0;
			var gasAmount=0;
            if(parseInt(document.getElementById('LabourCharge').value)){
				labourCharge=parseInt(document.getElementById('LabourCharge').value) ;
				
			}
			if(parseInt(document.getElementById('OldSpare').value)){
				oldSpare=parseInt(document.getElementById('OldSpare').value);
				
			}
			if(parseInt(document.getElementById('NewSpare').value)){
				newSpare=parseInt(document.getElementById('NewSpare').value);
				
			}
			if(parseInt(document.getElementById('GasAmount').value)){
				gasAmount=parseInt(document.getElementById('GasAmount').value);
				
			}
			
			
			
			
           
			var total= labourCharge  + oldSpare + newSpare + gasAmount;
			document.getElementById('LabourCharge').value=labourCharge;
			document.getElementById('OldSpare').value=oldSpare;
			document.getElementById('NewSpare').value=newSpare;
			document.getElementById('GasAmount').value=gasAmount;
		    document.getElementById('TotalBill').value=total;
			 
	   }


 
// Sheet import

  let SHEET_ID = '1IcBjk5Y5dmbO4Jxpbz4rKQ0iqdrJm4y5xjbmGDJbjlc'
let SHEET_TITLE = 'Sheet1';
let SHEET_RANGE = 'A:A';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    let dataa = JSON.parse(rep.substr(47).slice(0,-2));
	console.log(dataa.table.rows.length);
	let rownum= dataa.table.rows.length;
	console.log(dataa.table.rows[rownum-1].c[0].v);
	let invoiceNum = dataa.table.rows[rownum-1].c[0].v + 1;
	document.getElementById('InvoiceNumber').value=invoiceNum;
})