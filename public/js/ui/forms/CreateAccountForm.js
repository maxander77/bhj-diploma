class CreateAccountForm extends AsyncForm {
  onSubmit(data) {
    Account.create(data, (error, response) => {
      if (response.success) {
        this.element.reset();
        App.update();
      } else {
        console.error('Ошибка при создании счета:', error);
      }
    });
  }
}
