import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class FormsPage extends BasePage {
  readonly pageHeading: Locator;

  // Text Inputs
  readonly textInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly numberInput: Locator;
  readonly phoneInput: Locator;
  readonly urlInput: Locator;

  // Textarea
  readonly messageTextarea: Locator;

  // Checkboxes
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;
  readonly checkbox3: Locator;
  readonly disabledCheckbox: Locator;

  // Radio Buttons
  readonly radio1: Locator;
  readonly radio2: Locator;
  readonly radio3: Locator;
  readonly disabledRadio: Locator;

  // Dropdowns
  readonly singleSelect: Locator;

  // Date and Time
  readonly datePicker: Locator;
  readonly timePicker: Locator;

  // Range Slider
  readonly rangeSlider: Locator;

  // Color Picker
  readonly colorPicker: Locator;

  // Input States
  readonly disabledInput: Locator;
  readonly readonlyInput: Locator;
  readonly requiredInput: Locator;
  readonly patternInput: Locator;

  // Form Actions
  readonly fullNameInput: Locator;
  readonly formEmailInput: Locator;
  readonly formMessageTextarea: Locator;
  readonly termsCheckbox: Locator;
  readonly submitButton: Locator;
  readonly resetButton: Locator;
  readonly clearOutputButton: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByRole('heading', { name: 'Forms Testing' });

    // Text Inputs
    this.textInput = page.locator('#text-input');
    this.emailInput = page.locator('#email-input');
    this.passwordInput = page.locator('#password-input');
    this.numberInput = page.locator('#number-input');
    this.phoneInput = page.locator('#phone-input');
    this.urlInput = page.locator('#url-input');

    // Textarea
    this.messageTextarea = page.locator('#message');

    // Checkboxes
    this.checkbox1 = page.locator('#checkbox1');
    this.checkbox2 = page.locator('#checkbox2');
    this.checkbox3 = page.locator('#checkbox3');
    this.disabledCheckbox = page.locator('#checkbox-disabled');

    // Radio Buttons
    this.radio1 = page.locator('#radio1');
    this.radio2 = page.locator('#radio2');
    this.radio3 = page.locator('#radio3');
    this.disabledRadio = page.locator('#radio-disabled');

    // Dropdowns
    this.singleSelect = page.locator('#single-select');

    // Date and Time
    this.datePicker = page.locator('#date-picker');
    this.timePicker = page.locator('#time-picker');

    // Range Slider
    this.rangeSlider = page.locator('#range-slider');

    // Color Picker
    this.colorPicker = page.locator('#color-picker');

    // Input States
    this.disabledInput = page.locator('#disabled-input');
    this.readonlyInput = page.locator('#readonly-input');
    this.requiredInput = page.locator('#required-input');
    this.patternInput = page.locator('#pattern-input');

    // Form Actions
    this.fullNameInput = page.locator('#full-name');
    this.formEmailInput = page.locator('#form-email');
    this.formMessageTextarea = page.locator('#form-message');
    this.termsCheckbox = page.locator('#terms');
    this.submitButton = page.getByRole('button', { name: 'Submit Form' });
    this.resetButton = page.getByRole('button', { name: 'Reset Form' });
    this.clearOutputButton = page.getByRole('button', { name: 'Clear Output' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/pages/forms.html');
  }

  async fillTextInput(text: string): Promise<void> {
    await this.textInput.fill(text);
  }

  async fillEmailInput(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async fillPasswordInput(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async fillNumberInput(number: string): Promise<void> {
    await this.numberInput.fill(number);
  }

  async selectRadioButton(radio: 'radio1' | 'radio2' | 'radio3'): Promise<void> {
    await this[radio].check();
  }

  async checkCheckbox(checkbox: 'checkbox1' | 'checkbox2' | 'checkbox3'): Promise<void> {
    await this[checkbox].check();
  }

  async selectDropdownOption(value: string): Promise<void> {
    await this.singleSelect.selectOption(value);
  }

  async fillAndSubmitForm(name: string, email: string, message: string): Promise<void> {
    await this.fullNameInput.fill(name);
    await this.formEmailInput.fill(email);
    await this.formMessageTextarea.fill(message);
    await this.termsCheckbox.check();
    await this.submitButton.click();
  }
}
