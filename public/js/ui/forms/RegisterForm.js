class RegisterForm extends AsyncForm {
  onSubmit(data) {
    User.register(data, (err, response) => {
      if (err) {
        console.log('Ошибка при регистрации', err);
      } else {
        console.log('Пользователь успешно зарегистрирован:', response);

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