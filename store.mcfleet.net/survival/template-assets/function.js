const handleLoginSubmit = (event) => {
    event.preventDefault();
    const usernameInput = document.querySelector("#minecraft-username-input");
    const isBedrock = document.querySelector(".btn-bedrock").classList.contains("active");
    const username = usernameInput.value.trim();

    console.log(`Username: ${username}, Is Bedrock: ${isBedrock}`);

    if (username.length < 3) {
        usernameInput.classList.add("login-error");
        return false;
    }

    const alphanumericRegex = /^[A-Za-z0-9_]+$/;
    if (!alphanumericRegex.test(username)) {
        usernameInput.classList.add("login-error");
        return false;
    }

    if (isBedrock && !username.startsWith(`.`)) {
        usernameInput.value = `.${username}`;
    }

    event.target.submit();
    return true;
};

document.querySelectorAll('.login-select-btn').forEach(button => {
    button.addEventListener('click', function() {

        document.querySelectorAll('.login-select-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        this.classList.add('active');
    });
});