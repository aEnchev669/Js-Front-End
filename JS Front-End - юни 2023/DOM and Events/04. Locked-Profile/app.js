function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const lockedRadioBtn = (Array.from(e.currentTarget.parentElement.querySelectorAll('input[type="radio"]')));
            const hiddenDiv = e.currentTarget.parentElement.querySelector('div');

            if (!(lockedRadioBtn[0].checked)) {

                if (button.textContent == 'Show more') {

                    hiddenDiv.style.display = 'block';
                    button.textContent = 'Hide it'
                }
                else if (button.textContent == 'Hide it') {
                    hiddenDiv.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });
    });


} 