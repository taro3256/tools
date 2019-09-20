var req = [8, 2, 2, 2, 0, 0, 0, 0, 0, 0, 3, 6, 38, 0, 8, 8];

function math() {
    var sum = 0;
    var err = "";
    var tmp;
    for (id = 0; id < 16; id++) {
        tmp = parseInt(document.getElementById("i" + (id + "")).value);
        sum += tmp;
        //console.log(tmp);
        if (isNaN(tmp)){
            err = "全ての欄に入力してください\n";
        }
    }
    tmp = parseInt(document.getElementById("i4").value) + parseInt(document.getElementById("i5").value) + parseInt(document.getElementById("i6").value);
    if (tmp < 12) {
        err += "「教養科目」の選択が" + (12 - tmp) + "単位足りません\n";
    }
    tmp = parseInt(document.getElementById("i7").value);
    if (tmp < 1) {
        err += "「保健体育」が1足りません\n";
    }
    tmp = parseInt(document.getElementById("i8").value);
    if (tmp < 4) {
        err += "「外国語」が" + (4 - tmp) + "単位足りません\n";
    }
    tmp = parseInt(document.getElementById("i11").value) - req[11] + parseInt(document.getElementById("i12").value) - req[12] + parseInt(document.getElementById("i13").value) - req[13] + parseInt(document.getElementById("i14").value) - req[14]
    if (tmp < 30) {
        err += "「キャリア学習科目」「専門共通科目」「展開科目」「関連科目」が" + (30 - tmp) + "単位足りません\n";
    }
    tmp = parseInt(document.getElementById("i15").value) - req[15];
    if (tmp < 8) {
        err += "「研究科目」が" + (8 - tmp) + "単位足りません\n";
    }
    if (sum < 132) {
        err += "合計単位が" + (132 - sum) + "単位足りません\n";
    }
    if (err == "") {
        err = "卒業できます";
    }
    alert(err);
}

function readFile() {
    var formObj = document.getElementById("file");
    var file = formObj.files[0];
    //console.log(formObj.value)
    const reader = new FileReader();

    reader.onload = function (e) {
        const file = document.getElementById("file");
        str = e.target.result;
        str = str.split("base64,77u/")[1];
        str = decodeURIComponent(escape(window.atob(str)));
        parser = new DOMParser();
        str = parser.parseFromString(str, "text/html");

        t1 = str.querySelector('#form1 > table > tbody > tr:nth-child(11) > td:nth-child(2) > table > tbody')
        t1 = t1.querySelector('tr:nth-child(7)')
        t1.removeChild(t1.children[0])

        t2 = str.querySelector('#form1 > table > tbody > tr:nth-child(13) > td:nth-child(2) > table > tbody')
        t2 = t2.querySelector('tr:nth-child(7)')
        t2.removeChild(t2.children[0])

        t3 = str.querySelector('#form1 > table > tbody > tr:nth-child(15) > td:nth-child(2) > table > tbody')
        t3 = t3.querySelector('tr:nth-child(7)')
        t3.removeChild(t3.children[0])

        var credit = []
        for(i of t1.children) credit.push(i.textContent);
        for(i of t2.children) credit.push(i.textContent);
        for(i of t3.children) if (i.textContent != "") credit.push(i.textContent);

        console.log(credit);

        //ここにコードを書く
        document.getElementById("i0").value = credit[2];
        document.getElementById("i1").value = credit[3];
        document.getElementById("i2").value = credit[4];
        document.getElementById("i3").value = credit[5];
        document.getElementById("i4").value = credit[7];
        document.getElementById("i5").value = credit[8];
        document.getElementById("i6").value = credit[9];
        document.getElementById("i7").value = credit[12];
        document.getElementById("i8").value = credit[14];
        document.getElementById("i9").value = credit[16];
        document.getElementById("i10").value = credit[18];
        document.getElementById("i11").value = credit[19];
        document.getElementById("i12").value = credit[20];
        document.getElementById("i13").value = credit[21];
        document.getElementById("i14").value = credit[22];
        document.getElementById("i15").value = credit[23];
    }
    reader.readAsDataURL(file);
}