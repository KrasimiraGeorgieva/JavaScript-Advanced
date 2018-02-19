function createBook(selector, bookName, authorName, isbn) {
    let bookGenerator = (function () {
        let id = 1;
        return function (selector, bookName, authorName, isbn) {
            let container = $(selector);
            let bookContainer = $('<div>');
            bookContainer.attr('id', `book${id}`);
            bookContainer.css('border', 'none');
            $(`<p class="title">${bookName}</p>`).appendTo(bookContainer);
            $(`<p class="author">${authorName}</p>`).appendTo(bookContainer);
            $(`<p class="isbn">${isbn}</p>`).appendTo(bookContainer);
            let selectBtn = $('<button>Select</button>');
            let deselectBtn = $('<button>Deselect</button>');
            selectBtn.on('click', function () {
                bookContainer.css('border', '2px solid blue');
            });
            deselectBtn.on('click', function () {
                bookContainer.css('border', 'none');
            });
            selectBtn.appendTo(bookContainer);
            deselectBtn.appendTo(bookContainer);
            bookContainer.appendTo(container);
            id++;
        }
    }());

    bookGenerator(selector, bookName, authorName, isbn);
}
