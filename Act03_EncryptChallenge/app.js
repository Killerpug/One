
function Encrypt() {
    var startTime = performance.now()
    let inputText = document.getElementById('sourceText').value;

    const replacements = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    let encryptedText = inputText.replace(/[eioua]/g, function(match) {
        return replacements[match];
    });
    
    document.querySelector('#targetText').value = encryptedText;
    var endTime = performance.now()
    console.log(`Call to Encrypt took ${endTime - startTime} milliseconds`)
}

function Decrypt() {
    var startTime = performance.now()
    let inputText = document.getElementById('targetText').value;

    const reverseReplacements = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    let decryptedText = inputText.replace(/enter|imes|ai|ober|ufat/g, function(match) {
        return reverseReplacements[match];
    });
    
    document.querySelector('#sourceText').value = decryptedText;
    var endTime = performance.now()
    console.log(`Call to Decrypt took ${endTime - startTime} milliseconds`)
}

InitialConditions();


