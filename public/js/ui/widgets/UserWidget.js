class UserWidget {
  constructor(element){
      if (!element) {
        throw new Error('Пустой элемент');
      } 
  
      this.element = element;
      this.update();
  }

  update(){
    const userNameElement = this.element.querySelector('.user-name');
    const currentUser = User.current();

    if (currentUser) {
      userNameElement.textContent = currentUser.name;
    }
  }
}
