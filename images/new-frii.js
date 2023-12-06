const fLevel = document.getElementById('no').value;
        const btn = document.getElementById('fs');
        const output = document.getElementsByTagName('output');

        btn.onclick = function check() {
            if(fLevel !== 100) {
                output.innerHTML = 'Request denied.';
            }
            output.innerHTML = 'Request granted.'
        }