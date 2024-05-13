let totalElement = document.getElementById("total");
        let paidFeesElement = document.getElementById("paidFees");
        let balanceElement = document.getElementById("balance");
        let netPriceElements = document.getElementsByClassName("netPrice");
        let totalInWordsElement = document.getElementById("rupees");

        function numberToWords(number) {
            const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
            const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

            if (number < 20) return units[number];
            if (number < 100) return tens[Math.floor(number / 10)] + (number % 10 !== 0 ? ' ' + units[number % 10] : '');
            if (number < 1000) return units[Math.floor(number / 100)] + ' hundred' + (number % 100 !== 0 ? ' and ' + numberToWords(number % 100) : '');
            return numberToWords(Math.floor(number / 1000)) + ' thousand' + (number % 1000 !== 0 ? ' ' + numberToWords(number % 1000) : '');
        }

        function calculateTotal(){
            let cal = 0;
            for (let i = 0; i < netPriceElements.length; i++) {
                cal += parseInt(netPriceElements[i].value) || 0;
            }
            totalElement.innerHTML = cal;
            let totalInWords = numberToWords(cal);
            totalInWordsElement.innerHTML = totalInWords.charAt(0).toUpperCase() + totalInWords.slice(1) + " rupees only";
            calculateBalance();
        }

        function calculateBalance(){
            let total = parseInt(totalElement.innerHTML) || 0;
            let paid = parseInt(paidFeesElement.value) || 0;
            balanceElement.innerHTML = total - paid;
        }

        for (let i = 0; i < netPriceElements.length; i++) {
            netPriceElements[i].addEventListener('input', calculateTotal);
        }

        paidFeesElement.addEventListener('input', calculateBalance);
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()

  // Date 
  const d = new Date();
  document.getElementById("dateFormat").innerText = d.toDateString();

  const d1 = new Date();
  document.getElementById("time").innerHTML = d1.toDateString();

  // Success
  let inputs = document.querySelector("#myForm").querySelectorAll("input");
  let invalidFlag = false; // Flag to track if an invalid event has been fired
  
  for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('invalid', function(event) {
          if (!invalidFlag) { // Only show the alert if the flag hasn't been set yet
              event.preventDefault(); // Prevent form from submitting
              alert('Please fill out all fields.');
              invalidFlag = true; // Set the flag
          }
      });
  }
  
  document.querySelector("#myForm").addEventListener('submit', function(event) {
      if (invalidFlag) { // If an invalid event was fired, prevent form from submitting
          event.preventDefault();
      } else { // Only show the success alert if no invalid events were fired
          alert('Form submitted successfully.');
      }
      invalidFlag = false; // Reset the flag at the end of the submit event
  });
  

document.addEventListener("DOMContentLoaded", function() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;
  document.getElementById("dateFormat").value = today;
}); 

//Table input

window.onload = function() {
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        let inputField = this.parentElement.parentElement.querySelector("input[type='text']");
        if (this.checked) {
          inputField.disabled = false;
        } else {
          inputField.disabled = true;
        }
      });
    });
  }; 


  