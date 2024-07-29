import { Page } from 'puppeteer';

export class BasePage {
  protected page: Page;

  // Constructor to initialize the page object
  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to a specific URL
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  // Wait for a specific selector to appear on the page
  async waitForSelector(selector: string, timeout = 5000): Promise<void> {
    await this.page.waitForSelector(selector, { timeout });
  }

  // Click on an element specified by the selector
  async click(selector: string): Promise<void> {
    await this.waitForSelector(selector);
    await this.page.click(selector);
  }

  // Get text content from an element specified by the selector
  async getText(selector: string): Promise<string> {
    await this.waitForSelector(selector);
    return this.page.$eval(selector, (el: Element) => el.textContent || '');
  }
}
