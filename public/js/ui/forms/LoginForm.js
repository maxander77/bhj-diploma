class LoginForm extends AsyncForm {
  onSubmit(data) {
    User.login(data, (err, response) => {
      if (err) {
        console.log('Ошибка при входе', err);
      } else {
        console.log('Пользователь успешно вошел:', response);

        this.element.reset();

        App.setState('user-logged');

        const modal = this.element.closest('.modal');
        if (modal) {
          Modal.close(modal.getAttribute('id'));
        }
      }
    });
  }
}