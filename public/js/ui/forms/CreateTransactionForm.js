class CreateTransactionForm extends AsyncForm {
  constructor(element) {
    super(element)
    this.renderAccountsList();
  }

  renderAccountsList() {
    Account.list({}, (error, response) => {
      if (response.success) {
        const accountSelect = this.element.querySelector('.accounts-select');
        accountSelect.innerHTML = '';

        response.data.forEach(account => {
          const option = document.createElement('option');
          option.value = account.id;
          option.textContent = account.name;
          accountSelect.appendChild(option);
        });
      } else {
        console.error('Ошибка при получении списка счетов:', error);
      }
    });
  }

  onSubmit(data) {
    Transaction.create(data, (error, response) => {
      if (response.success) {
        this.element.reset();
        const modalId = this.element.closest('.modal').getAttribute('id');
        const modal = App.getModal(modalId);
        modal.close();
        App.update();
      } else {
        console.error('Ошибка при создании транзакции:', error);
      }
    });
  }
}