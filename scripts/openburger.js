function openBurger(_class, _hide = null, _hidetwo = null){
    document.querySelector(_class).classList.toggle('show');
    if(_hide != null)
        document.querySelector(_hide).classList.toggle('show');
    if(_hidetwo != null)
        document.querySelector(_hidetwo).classList.toggle('show');
}