class Modal {
  constructor(element){
    if (!element) {
      throw new Error('Пустой элемент')
    } 

    this.element = element;
    this.registerEvents();
  }

  registerEvents() {
    const dismissElements = this.element.querySelectorAll('[data-dismiss="modal"]');
    
    dismissElements.forEach(element => {
      element.addEventListener('click', () => {
        this.onClose();
      });
    });
  }

  onClose(e) {
    this.close();
  }

  open() {
    this.element.style.display = 'block';
  }

  close(){
    this.element.style.display = '';
    // modalInstance.close();
  }
}