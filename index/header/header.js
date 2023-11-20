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
                    <a href="/index/home/home.html">HOME</a>
                </button>

                <button class="">
                    <a href="/index/keys/keys.html">KEYS</a>
                </button>

                <button class="">
                    <a href="/index/contact/contact.html">CONTACT</a>
                </button>

                <button class="">
                    <a href="/index/account/account.html">ACCOUNT</a>
                </button>
            </nav>
        </header>
    `;

    includeTemplate(headerContainer, headerContent);
};