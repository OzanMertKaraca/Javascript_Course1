function ekleGorev() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var taskText = taskInput.value;

    if (taskText.trim() === '') {
        alert('Lütfen bir görev girin.');
        return;
    }

    // Yeni görev öğesini oluşturun
    var yeniGorev = document.createElement('li');
    yeniGorev.textContent = taskText;

    // Görevi todo list'e ekleyin
    taskList.appendChild(yeniGorev);

    // Görevi ekledikten sonra input alanını temizleyin
    taskInput.value = '';

    // Görevi silmek için çift tıklama olayını ekleyin
    yeniGorev.addEventListener('dblclick', function () {
        taskList.removeChild(yeniGorev);
    });
}

var taskList = document.getElementById('taskList');

// Yeni görev eklemek için bir fonksiyon
function ekleGorev() {
    // ...
}

// Görevi güncellemek için bir fonksiyon
function goreviGuncelle(event) {
    var button = event.target;
    var li = button.parentElement;
    var taskText = li.firstChild.textContent;

    // Kullanıcıdan güncel metni al
    var yeniMetin = prompt('Yeni görev metnini girin:', taskText);

    if (yeniMetin !== null) {  // Kullanıcı iptal etmezse
        li.firstChild.textContent = yeniMetin;
    }
}

// Görevi silmek için bir fonksiyon
function goreviSil(event) {
    var button = event.target;
    var li = button.parentElement;
    taskList.removeChild(li);
}

// Görev güncelleme ve silme düğmelerine tıklama olaylarını ekle
taskList.addEventListener('click', function (event) {
    if (event.target.classList.contains('guncelle')) {
        goreviGuncelle(event);
    } else if (event.target.classList.contains('sil')) {
        goreviSil(event);
    }
});
