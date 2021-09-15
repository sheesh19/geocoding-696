import places from 'places.js';

const initAutocomplete = () => {
    // goes to the flat form && finds the class with flat_address && generates an autocomplete drop down
    const addressInput = document.getElementById('flat_address');
    if (addressInput) {
        places({ container: addressInput });
    }
};

export { initAutocomplete };