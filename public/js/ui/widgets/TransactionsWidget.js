class TransactionsWidget {
  constructor( element ) {
    if (!element) {
      throw new Error('Пустой элемент');
    }

    this.element = element;
    this.registerEvents();
  }

  registerEvents() {
    const createIncomeBtn = this.element.querySelector('.create-income-button');
    const createExpenseBtn = this.element.querySelector('.create-expense-button');

    createIncomeBtn.addEventListener('click', () => {
      const modal = App.getModal('#modal-new-income');
      const modalInstance = new Modal(modal);
      modalInstance.open();
    });

    createExpenseBtn.addEventListener('click', () => {
      const modal = App.getModal('#modal-new-expense');
      const modalInstance = new Modal(modal);
      modalInstance.open();
    });
  }
}
