class TransactionsPage {
  constructor( element ) {
    if (!element) {
      throw new Error('Пустой элемент');
    }

    this.element = element;
    this.registerEvents()
  }

  update() {
    this.render(this.lastOptions);
  }

  registerEvents() {
    this.element.addEventListener('click', event => {
      if (event.target.classList.contains('remove-account')) {
        this.removeAccount();
      } else if (event.target.classList.contains('transaction__remove')) {
        const transactionId = event.target.getAttribute('data-id');
        this.removeTransaction(transactionId);
      }
    })
  }

  removeAccount() {
    if (this.lastOptions) {
      const confiramation = window.confirm('Вы действительно хотите удалить счёт?');
      if (confiramation) {
        Account.remove(this.lastOptions.account_id, (error, response)=> {
          if (response.success) {
            App.updateWidgets();
            App.updateForms();
          } else {
            console.error('Ошибка при удалении счёта:', error);
          }
        });
      }
    }
  }

  removeTransaction( id ) {
    const confiramation = window.confirm('Вы действительно хотите удалить эту транзакцию?');
    if (confiramation) {
      Transaction.remove(id, (error, response) => {
        if (response.success) {
          App.update();
        } else {
          console.error('Ошибка при удалении транзакции:', error);
        }
      });
    }
  }

  render(options){
    if (options.account_id) {
      this.lastOptions = options;

      Account.get(options.account_id, (error, response) => {
        if (response.success) {
          this.renderTitle(response.data.name);
        } else {
          console.error('Ошибка при получении информации о счете:', error);
        }
      })
    }
  }

  /**
   * Очищает страницу. Вызывает
   * TransactionsPage.renderTransactions() с пустым массивом.
   * Устанавливает заголовок: «Название счёта»
   * */
  clear() {

  }

  /**
   * Устанавливает заголовок в элемент .content-title
   * */
  renderTitle(name){

  }

  /**
   * Форматирует дату в формате 2019-03-10 03:20:41 (строка)
   * в формат «10 марта 2019 г. в 03:20»
   * */
  formatDate(date){

  }

  /**
   * Формирует HTML-код транзакции (дохода или расхода).
   * item - объект с информацией о транзакции
   * */
  getTransactionHTML(item){

  }

  /**
   * Отрисовывает список транзакций на странице
   * используя getTransactionHTML
   * */
  renderTransactions(data){

  }
}