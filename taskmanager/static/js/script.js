document.addEventListener('DOMContentLoaded', function () {
    //side nav initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
});

//date picker//

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
});

// select intialisation 

document.addEventListener('DOMContentLoaded', function () {
    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects, options);
});