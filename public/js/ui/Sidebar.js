class Sidebar {
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  static initToggleButton() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');

    sidebarToggle.addEventListener('click', () => {
      const body = document.querySelector('body');

      if (body.classList.contains('sidebar-open')) {
        body.classList.remove('sidebar-open', 'sidebar-collapse');
      } else {
        body.classList.add('sidebar-open', 'sidebar-collapse');
      }
    })
  }

  static initAuthLinks() {
    const regiestrBtn = document.querySelector('.menu-item_register');
    const loginBtn = document.querySelector('.menu-item_login');
    const logoutBtn = document.querySelector('.menu-item_logout');

    regiestrBtn.addEventListener('click', () => {
      const modalElement = document.querySelector('#modal-register');
      const modalInstance = new Modal(modalElement);
      modalInstance.open();
    });

    loginBtn.addEventListener('click', () => {
      const modalElement = document.querySelector('#modal-login');
      const modalInstance = new Modal(modalElement);
      modalInstance.open();

    });

    logoutBtn.addEventListener('click', () => {
      User.logout((error, response) => {
      if (response.success === true) {
        App.setState('init');
      }
     });
    });
  }
}