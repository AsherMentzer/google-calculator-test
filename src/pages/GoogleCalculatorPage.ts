import { BasePage } from './BasePage';
import { GoogleCalculatorLocators } from '../locators/GoogleCalculatorLocators';
import { ButtonMap } from '../types';
import { BUTTON_MAP } from '../constans';
import { Page } from 'puppeteer';

export class GoogleCalculatorPage extends BasePage {
  private buttonMap: ButtonMap;

  // Constructor to initialize the page and button map
  constructor(page: Page) {
    super(page);
    this.buttonMap = BUTTON_MAP;
  }

  // Navigate to the Google Calculator page and wait for the calculator to load
  async navigate(): Promise<void> {
    await this.navigateTo(GoogleCalculatorLocators.URL);
    await this.waitForSelector(GoogleCalculatorLocators.CALCULATOR);
  }

  // Click a button on the calculator
  async clickButton(button: string): Promise<void> {
    const buttonSelector = `${GoogleCalculatorLocators.CALCULATOR} ${GoogleCalculatorLocators.BUTTON(this.getJsName(button))}`;
    await this.click(buttonSelector);
  }

  // Get the result displayed on the calculator
  async getResult(): Promise<string> {
    return this.getText(GoogleCalculatorLocators.RESULT);
  }

  // Get the texts of all number buttons on the calculator
  async getNumberButtons(): Promise<string[]> {
    const selector = `${GoogleCalculatorLocators.CALCULATOR} ${GoogleCalculatorLocators.NUMBER_BUTTONS}`;
    return this.page.$$eval(selector, (tds: Element[]) => 
      tds.map(td => td.textContent?.trim() || '')
        .filter((b) => !isNaN(Number(b)) && b.trim() !== '')
    );
  }

  // Get the texts of all buttons on the calculator
  async getAllButtonTexts(): Promise<string[]> {
    const selector = `${GoogleCalculatorLocators.CALCULATOR} ${GoogleCalculatorLocators.NUMBER_BUTTONS}`;
    return this.page.$$eval(selector, (tds: Element[]) => 
      tds.map(td => td.textContent?.trim() || '')
    );
  }

  // Helper method to get JavaScript-friendly button name
  private getJsName(button: string): string {
    return this.buttonMap[button] || button;
  }
}
