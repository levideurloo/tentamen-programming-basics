window.addEventListener("load", init);

//global variables
const carCategories = [
  {
    category: "A",
    minHeight: 0,
    maxHeight: 1.8,
    price: 2.56
  },
  {
    category: "B",
    minHeight: 1.9,
    maxHeight: 3,
    price: 3.05
  },
  {
    category: "C",
    minHeight: 3.1,
    maxHeight: 5,
    price: 5.67
  },
  {
    category: "D",
    minHeight: 5.1,
    maxHeight: 8,
    price: 2.45
  }
];

/**
 * Function to initialize the application
 */
function init() {
  const submitButton = document.getElementById('sbmButton');
  submitButton.addEventListener('click', getCategory);
}

/**
 * Function to read out the input fields
 * @param {*} event
 */
function getCategory(event) {
  event.preventDefault();
  removeError();

  // console.log(height);
  let vehicle = document.getElementById('inputVehicleType').value;
  let height = document.getElementById('inputHeight').value;

  for (let i = 0; i < carCategories.length; i++) {
    const element = carCategories[i];

    if (height > 8) {
      showError();
      break;
    }

    else if (height >= element.minHeight && height <= element.maxHeight)
      writeCategory(element);
  }
}

/**
 * Function to show error
 */
function showError() {
  console.log('error');
  let errorPosition = document.getElementById('message');
  errorPosition.classList.add('error');
  errorPosition.innerHTML = 'Je voertuig is te hoog voor onze tolwegen!';
}

/**
 * Function to remove error
 */
function removeError() {
  let errorPosition = document.getElementById('message');

  if (errorPosition.classList.contains('error')) {
    errorPosition.classList.remove('error');
    errorPosition.innerHTML = '';
  }
}

/**
 * Function to write the DOM
 * @param {*} element
 */
function writeCategory(element) {
  console.log(element);

  let categoryLabel = document.getElementById('category-label');
  let categoryPrice = document.getElementById('category-price');

  categoryLabel.innerHTML = element.category;
  categoryPrice.innerHTML = element.price + " &euro;";
}