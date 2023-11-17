function loadHeader() {
    const headerContainer = $('#headerContainer');

    const headerContent = /*html*/ `
        <header class="bg-white">
            <div class="logo-title gap-25">
                <img src="/assets/img/logo.png">
                <span class="txt-big txt-700">KeyManager</span>
            </div>
            <nav class="gap-35">
                <button class="">
                    <a href="#">HOME</a>
                </button>

                <button class="">
                    <a href="#">KEYS</a>
                </button>

                <button class="">
                    <a href="#">CONTACT</a>
                </button>

                <button class="">
                    <a href="#">ACCOUNT</a>
                </button>
            </nav>
        </header>
    `;

    includeTemplate(headerContainer, headerContent);
};