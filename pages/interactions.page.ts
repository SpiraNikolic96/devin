import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class InteractionsPage extends BasePage {
  readonly pageHeading: Locator;

  // Drag and Drop
  readonly draggableItem: Locator;
  readonly dropZone: Locator;
  readonly dragDropOutput: Locator;

  // Multiple Draggable Items
  readonly draggableItem1: Locator;
  readonly draggableItem2: Locator;
  readonly draggableItem3: Locator;
  readonly multiDropZone: Locator;

  // Sortable List
  readonly sortableList: Locator;
  readonly sortableItems: Locator;

  // Resizable Element
  readonly resizableElement: Locator;

  // Click Events
  readonly singleClickButton: Locator;
  readonly singleClickOutput: Locator;
  readonly doubleClickArea: Locator;
  readonly doubleClickOutput: Locator;
  readonly rightClickArea: Locator;
  readonly rightClickOutput: Locator;

  // Hover Events
  readonly hoverArea: Locator;

  // Keyboard Events
  readonly keyboardInput: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByRole('heading', { name: 'Interactions Testing' });

    // Drag and Drop
    this.draggableItem = page.locator('#draggable');
    this.dropZone = page.locator('#droppable');
    this.dragDropOutput = page.locator('#drag-output');

    // Multiple Draggable Items
    this.draggableItem1 = page.locator('#drag-item-1');
    this.draggableItem2 = page.locator('#drag-item-2');
    this.draggableItem3 = page.locator('#drag-item-3');
    this.multiDropZone = page.locator('#multi-drop-zone');

    // Sortable List
    this.sortableList = page.locator('#sortable-list');
    this.sortableItems = page.locator('#sortable-list li');

    // Resizable Element
    this.resizableElement = page.locator('#resizable');

    // Click Events
    this.singleClickButton = page.locator('#click-button');
    this.singleClickOutput = page.locator('#click-output');
    this.doubleClickArea = page.locator('#double-click-area');
    this.doubleClickOutput = page.locator('#double-click-output');
    this.rightClickArea = page.locator('#right-click-area');
    this.rightClickOutput = page.locator('#right-click-output');

    // Hover Events
    this.hoverArea = page.locator('#hover-area');

    // Keyboard Events
    this.keyboardInput = page.locator('#key-input');
  }

  async goto(): Promise<void> {
    await this.page.goto('/pages/interactions.html');
  }

  async performSingleClick(): Promise<void> {
    await this.singleClickButton.click();
  }

  async performDoubleClick(): Promise<void> {
    await this.doubleClickArea.dblclick();
  }

  async performRightClick(): Promise<void> {
    await this.rightClickArea.click({ button: 'right' });
  }

  async pressKey(key: string): Promise<void> {
    await this.keyboardInput.focus();
    await this.page.keyboard.press(key);
  }

  async hoverOverArea(): Promise<void> {
    await this.hoverArea.hover();
  }

  async dragAndDrop(): Promise<void> {
    await this.draggableItem.dragTo(this.dropZone);
  }
}
