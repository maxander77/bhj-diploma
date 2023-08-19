class AccountsWidget {
  constructor( element ) {
    if (!element) {
      throw new Error('Пустой элемент');
    }

    this.element = element;
    this.registerEvents();
    this.update();
  }

  registerEvents() {
    const createAccountBtn = document.querySelector('.create-account');
    createAccountBtn.addEventListener('click', () => {
      const modal = App.getModal('new-account');
      const modalInstance = new Modal(modal);
      modalInstance.open();
    });
  }

  update() {
    const userCurrent = User.current();
    
    if (userCurrent) {
      Account.list({}, (error, response) => {
        if (response.success) {
          this.clear();
          response.data.forEach(account => {
            this.renderItem(account);
          });
        } else {
          console.error('Ошибка при получение счетов:', error);
        }
      });
    }
  }

  clear() {
    const accountElements = this.element.querySelectorAll('.account');
    accountElements.forEach(element => {
      element.remove();
    });
  }

  onSelectAccount( element ) {
    const activeAccount = this.element.querySelector('.account.active');
    if (activeAccount) {
      activeAccount.classList.remove('active');
    }

    element.classList.add('active');
    const accountID = element.getAttribute('data-id');
    App.showPage( 'transactions', { account_id: accountID });
  }

  getAccountHTML(item){
    return `
    <li class="account" data-id="${item.id}">
      <a href="#">
        <span>${item.name}</span> /
        <span>${item.sum} ₽</span>
      </a>
    </li>
  `;
  }

  renderItem(data){
    const accountHTML = this.getAccountHTML(data);
    this.element.insertAdjacentHTML('beforeend', accountHTML);
  }
}
