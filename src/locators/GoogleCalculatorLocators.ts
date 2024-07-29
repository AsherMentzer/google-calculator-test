export const GoogleCalculatorLocators = {
    // URL for the Google Calculator page
    URL: 'https://www.google.co.il/search?q=google+calculator',

    // Selector for the result display element
    RESULT: '#cwos',

    // Selector for the calculator container
    CALCULATOR: '.tyYmIf',

    // Function to generate the selector for a button based on its jsname attribute
    BUTTON: (jsname: string) => `[jsname="${jsname}"]`,

    // Selector for all number buttons (assuming they are 'td' elements)
    BUTTONS: '[role="button"]',
};
