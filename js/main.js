var input = document.getElementById("input");
        var output = document.getElementById("output");


        document.getElementById("encrypt").addEventListener("click", function (event) {
            console.log(input.value)
            if (input.value != "") {
                output.value = tewve.AESEncrypt(input.value);
                input.value = "";
            }
            else {
                alert("plz enter in plain text area first")
            }
        });


        document.getElementById("decrypt").addEventListener("click", function (event) {
            input.value = tewve.AESDecrypt(output.value);
            output.value = "";
        });
        document.getElementById("clear").addEventListener("click", function (event) {
            input.value = "";
            output.value = "";
        });

        // event to copy text from clipboard
        document.getElementById("copy").addEventListener("click", function (event) {
            var copyText = output;
            console.log(copyText.value)
            if (copyText.value == "") {
                alert("kindly generate password first !")
            }
            else {
                copyText.select();
                copyText.setSelectionRange(0, 99999)
                document.execCommand("copy");
                alert('password copied')
            }

        });

        (function () {
            window.tewve = window.tewve || {};
            var key = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
            var iv = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');

            tewve.AESEncrypt = function (message) {
                return CryptoJS.AES.encrypt(message, key, {
                    iv: iv
                });
            }
            tewve.AESDecrypt = function (encrypted) {
                var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
                    iv: iv
                });
                return CryptoJS.enc.Utf8.stringify(decrypted);
            }
            return tewve;
        }());


