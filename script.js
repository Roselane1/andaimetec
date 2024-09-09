function showForm(formId) {
    // Hide all forms
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => form.classList.add('hidden'));

    // Show the selected form
    const selectedForm = document.getElementById(formId);
    if (selectedForm) {
        selectedForm.classList.remove('hidden');
    }
}

function showMenu() {
    // Hide all forms
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => form.classList.add('hidden'));

    // Show the menu
    const menu = document.querySelector('.menu');
    menu.classList.remove('hidden');
}
