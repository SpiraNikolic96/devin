import { test, expect } from '@playwright/test';
import { FormsPage } from '../pages/forms.page';

test.describe('Forms Page', () => {
  let formsPage: FormsPage;

  test.beforeEach(async ({ page }) => {
    formsPage = new FormsPage(page);
    await formsPage.goto();
  });

  test('should display the page heading', async () => {
    await expect(formsPage.pageHeading).toBeVisible();
  });

  test.describe('Text Inputs', () => {
    test('should accept text input', async () => {
      await formsPage.fillTextInput('Hello World');
      await expect(formsPage.textInput).toHaveValue('Hello World');
    });

    test('should accept email input', async () => {
      await formsPage.fillEmailInput('test@example.com');
      await expect(formsPage.emailInput).toHaveValue('test@example.com');
    });

    test('should accept password input and mask it', async () => {
      await formsPage.fillPasswordInput('secret123');
      await expect(formsPage.passwordInput).toHaveValue('secret123');
      await expect(formsPage.passwordInput).toHaveAttribute('type', 'password');
    });

    test('should accept number input', async () => {
      await formsPage.fillNumberInput('42');
      await expect(formsPage.numberInput).toHaveValue('42');
    });

    test('should have phone input field', async () => {
      await formsPage.phoneInput.fill('+1234567890');
      await expect(formsPage.phoneInput).toHaveValue('+1234567890');
    });

    test('should have URL input field', async () => {
      await formsPage.urlInput.fill('https://example.com');
      await expect(formsPage.urlInput).toHaveValue('https://example.com');
    });
  });

  test.describe('Textarea', () => {
    test('should accept multiline text', async () => {
      const message = 'Line 1\nLine 2\nLine 3';
      await formsPage.messageTextarea.fill(message);
      await expect(formsPage.messageTextarea).toHaveValue(message);
    });
  });

  test.describe('Checkboxes', () => {
    test('should toggle checkbox on and off', async () => {
      await formsPage.checkCheckbox('checkbox1');
      await expect(formsPage.checkbox1).toBeChecked();

      await formsPage.checkbox1.uncheck();
      await expect(formsPage.checkbox1).not.toBeChecked();
    });

    test('should have pre-checked checkbox', async () => {
      await expect(formsPage.checkbox2).toBeChecked();
    });

    test('should have disabled checkbox', async () => {
      await expect(formsPage.disabledCheckbox).toBeDisabled();
    });
  });

  test.describe('Radio Buttons', () => {
    test('should select radio button', async () => {
      await formsPage.selectRadioButton('radio1');
      await expect(formsPage.radio1).toBeChecked();
    });

    test('should have pre-selected radio button (Radio 3)', async () => {
      await expect(formsPage.radio3).toBeChecked();
    });

    test('should switch between radio buttons', async () => {
      await formsPage.selectRadioButton('radio1');
      await expect(formsPage.radio1).toBeChecked();
      await expect(formsPage.radio3).not.toBeChecked();

      await formsPage.selectRadioButton('radio2');
      await expect(formsPage.radio2).toBeChecked();
      await expect(formsPage.radio1).not.toBeChecked();
    });

    test('should have disabled radio button', async () => {
      await expect(formsPage.disabledRadio).toBeDisabled();
    });
  });

  test.describe('Dropdowns', () => {
    test('should select option from dropdown', async () => {
      await formsPage.selectDropdownOption('option2');
      await expect(formsPage.singleSelect).toHaveValue('option2');
    });
  });

  test.describe('Input States', () => {
    test('should have disabled input', async () => {
      await expect(formsPage.disabledInput).toBeDisabled();
    });

    test('should have readonly input', async () => {
      await expect(formsPage.readonlyInput).toHaveAttribute('readonly', '');
    });
  });

  test.describe('Form Actions', () => {
    test('should fill and submit the form', async () => {
      await formsPage.fillAndSubmitForm(
        'John Doe',
        'john@example.com',
        'This is a test message'
      );
      // Verify the form was submitted (output should appear)
      await expect(formsPage.fullNameInput).toHaveValue('John Doe');
    });

    test('should reset the form', async () => {
      await formsPage.fullNameInput.fill('John Doe');
      await formsPage.formEmailInput.fill('john@example.com');
      await formsPage.resetButton.click();
      await expect(formsPage.fullNameInput).toHaveValue('');
      await expect(formsPage.formEmailInput).toHaveValue('');
    });
  });
});
