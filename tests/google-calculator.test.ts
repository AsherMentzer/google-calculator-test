import puppeteer, { Browser, Page } from 'puppeteer';
import { GoogleCalculatorPage } from '../src/pages/GoogleCalculatorPage';
import { TestConfig } from '../config/test-config';

let page: Page;
let browser: Browser;
let calculatorPage: GoogleCalculatorPage;

// Set Jest timeout based on TestConfig
jest.setTimeout(TestConfig.TIMEOUT);

beforeAll(async () => {
  // Launch Puppeteer browser with headless option from TestConfig
  browser = await puppeteer.launch({ headless: TestConfig.HEADLESS });
  page = await browser.newPage();
  // Initialize GoogleCalculatorPage with the Puppeteer page
  calculatorPage = new GoogleCalculatorPage(page);
});

afterAll(async () => {
  // Close the Puppeteer browser after all tests
  await browser.close();
});

describe('Google Calculator Tests', () => {
  beforeEach(async () => {
    // Navigate to the Google Calculator page before each test
    await calculatorPage.navigate();
  });

  test('Addition: 5 + 10 should equal 15', async () => {
    // Perform addition operation: 5 + 10
    await calculatorPage.clickButton('5');
    await calculatorPage.clickButton('+');
    await calculatorPage.clickButton('1');
    await calculatorPage.clickButton('0');
    await calculatorPage.clickButton('=');
    
    // Get the result and verify it is 15
    const result = await calculatorPage.getResult();
    expect(result).toBe('15');
  });

  test('Count number buttons', async () => {
    // Get number buttons and verify their count and values
    const numberButtons = await calculatorPage.getNumberButtons();
    expect(numberButtons.sort()).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
    expect(numberButtons.length).toBe(10);
  });

  test('Total buttons count should be 34', async () => {
    // Get all button texts and verify the total count
    const allButtonTexts = await calculatorPage.getAllButtonTexts();
    expect(allButtonTexts.length).toBe(34); // Adjust if necessary
  });
});
