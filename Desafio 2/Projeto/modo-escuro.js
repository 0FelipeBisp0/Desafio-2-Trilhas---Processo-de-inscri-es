window.onload = function() {
    const button = document.createElement('button');
    button.innerHTML = '🌙';
    button.id = 'openModalBtn';
    document.body.appendChild(button);
  

    if (localStorage.getItem('darkMode') === 'ativado') {
        document.body.classList.add('dark-mode');
        button.innerHTML = '🌞';
    }

    button.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'ativado');
            button.innerHTML = '🌞';
        } else {
            localStorage.setItem('darkMode', 'desativado');
            button.innerHTML = '🌙';
        }
    });
};
