function loadFooter() {
    const footerContainer = $('#footerContainer');

    const footerContent = /*html*/ `
        <footer class="bg-dark">

        </footer> 
    `;

    includeTemplate(footerContainer, footerContent);
}
