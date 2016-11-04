import { browser, protractor} from 'protractor';
import {EpamComponent} from '../support/components/epam.components';
import {EpamHomePage} from '../support/pages/epam.homePage';
import {EpamSolutionPage} from '../support/pages/epam.solutionPage';
import {EpamCareerPage} from '../support/pages/epam.careerPage';
import {EpamIdeasPage} from '../support/pages/epam.ideasPage';
import {EpamIndustriesPage} from '../support/pages/epam.industriesPage';
import {EpamContactPage} from '../support/pages/epam.contactPage';

describe('Header navigation', () => {

  let epamComponent: EpamComponent;

  beforeAll(function() {
    epamComponent = new EpamComponent();
    browser.ignoreSynchronization = true;
  });

  beforeEach(() => {
    EpamHomePage.openPage();
  });

  it('check Solution Page', () => {
    EpamHomePage.goToSolutionsPage();
    expect(browser.getTitle()).toEqual(EpamSolutionPage.title);
  });

  it('check Ideas Page', () => {
    EpamHomePage.goToIdeasPage();
    expect(browser.getTitle()).toEqual(EpamIdeasPage.title);
  });

  it('check Industries Page', () => {
    EpamHomePage.goToIndustriesPage();
    expect(browser.getTitle()).toEqual(EpamIndustriesPage.title);
  });

  it('check Career Page', () => {
    EpamHomePage.goToCareerPage()
    expect(browser.getTitle()).toEqual(EpamCareerPage.title);
  });

  it('check Contact Page',() => {
    EpamHomePage.goToContactPage();
    expect(browser.getTitle()).toEqual(EpamContactPage.title);
  })

});
describe('Job search', () => {

  let epamComponent: EpamComponent;

  beforeAll(function() {
    epamComponent = new EpamComponent();
    browser.ignoreSynchronization = true;
    //driver.manage().window().maximize() ;
  });

  beforeEach(() => {
    EpamHomePage.openPage();
  });

  it('search and autocomplete should work', () => {
    expect(browser.getTitle()).toEqual(EpamHomePage.title);
    browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.careerMenuItem), 15000);
    epamComponent.careerMenuItem.click();
    expect(browser.getTitle()).toEqual(EpamCareerPage.title);
    epamComponent.searchButtonMenuItem.click();
    epamComponent.searchInput.sendKeys("JavaScript");
    browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.autocompleteField), 15000);
    expect((epamComponent.autocompleteField).getText()).toEqual("javascript");
    epamComponent.searchButton.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.serchHeader), 15000);
    expect((epamComponent.serchHeader).getText()).toContain('We found');
  });

});
