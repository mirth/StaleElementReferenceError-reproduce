import { assert } from 'chai';
// import the webdriver and the high level browser wrapper
import { VSBrowser, WebDriver, By, WebviewView, Workbench } from 'vscode-extension-tester';

// Create a Mocha suite
describe('My Test Suite', async () => {
  let browser: VSBrowser;
  let driver: WebDriver;
  
  // initialize the browser and webdriver
  before(async () => {
    browser = VSBrowser.instance;
    driver = browser.driver;
  });
  
  // test whatever we want using webdriver, here we are just checking the page title
  it('My Test Case', async () => {
		await new Workbench().executeCommand('Calico Colors: Focus on Tests View View');

		const webviewView = new WebviewView();
		await webviewView.switchToFrame();
		const runTest = await webviewView.findElement(By.css('vscode-button'));
		const buttonName = await runTest.getText();
		console.log('buttonName: ', buttonName);
  });
});