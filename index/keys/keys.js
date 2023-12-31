const SERVER_URL = "http://localhost:3000";

function loadSavedKeys() {
    const savedKeysContainer = $('#contentContainer');
    savedKeysContainer.innerHTML = '';

    const savedKeysContent = /*html*/ `
        <div class="savedKeysContainer">
            <table>
                <tr>
                    <th>E-Mail</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Platform</th>
                </tr>
                <tr>
                    <td>klaus@raus.com</td>
                    <td>Klaus239661</td>
                    <td>pi-uh45pfj/sdgl</td>
                    <td>Facebook</td>
                </tr>
            </table>
        </div>
    `;

    includeTemplate(savedKeysContainer, savedKeysContent);
}

function loadKeyGenerator() {
    const keyGeneratorContainer = $('#contentContainer');
    keyGeneratorContainer.innerHTML = '';

    const keyGeneratorContent = /*html*/ `
        <div class="flex-center">
            <div class="generator-text flex-center gap-20 column">
                <span class="txt-600">Enter you E-Mail</span>
                <span class="txt-600">Enter your Username</span>
                <span class="txt-600">Enter the platform name</span>
                <span class="txt-600">Generate your password</span>
            </div>

            <div class="generatorInputs flex-center gap-20 column">
                <input id="mail-input" type="text">
                <input id="username-input" type="text">
                <input id="platform-input" type="text">

                <div class="keyGenerator flex-center gap-20">
                    <input id="keyGenerator" type="text">
                    <button onclick="generateKey()" class="btn-dark">Generate</button>
                </div>
            </div>
        </div>
        
        <div class="saveButtonContainer">
            <button onclick="saveKey()" class="btn-dark">Save</button>
        </div>
    `;

    includeTemplate(keyGeneratorContainer, keyGeneratorContent);
}

function generateKey() {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstufwxyz0123456789=/?!%()-$';
    const maxLength = 25;
    const keyGenerator = $('#keyGenerator');
    keyGenerator.value = '';

    for (let i = 0; i < maxLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        keyGenerator.value += charset[randomIndex];
    }

    return
}

function getInputs() {
    return {
        mail: $('#mail-input').value,
        username: $('#username-input').value,
        platform: $('#platform-input').value,
        key: $('#keyGenerator').value
    };
}

async function saveKey() {
    const dataset = getInputs();
    const res = await UPLOAD_SERVER(dataset);
    const upload_Response = res.json();
    console.log(upload_Response);
}

async function GET_ALL_KEYS() {
    const allKeys = await GET_SERVERDATA();
    console.log(allKeys);
}

function UPLOAD_SERVER(dataset) {
    return fetch(SERVER_URL, {
        method: 'POST',
        body: JSON.stringify(dataset)
    });
} 

async function GET_SERVERDATA() {
    const res = await fetch(SERVER_URL);
    return res.json();
}