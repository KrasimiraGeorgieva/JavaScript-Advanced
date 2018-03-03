function highlight(selector) {
    let maxDepth = 0;
    let deepestNode;
    let allLeafElements = $(`${selector} *:not(:has(*))`);
    allLeafElements.each(function (index, element) {
        let currentMaxDepth = 0;
        let originalLeaf = element;
        while (element) {
            currentMaxDepth++;
            element = $(element).parent()[0];
        }
        if (currentMaxDepth > maxDepth) {
            maxDepth = currentMaxDepth;
            deepestNode = originalLeaf;
        }
    });

    let targetNode = $(selector)[0];
    while (deepestNode && deepestNode !== targetNode) {
        $(deepestNode).addClass('highlight');
        deepestNode = $(deepestNode).parent()[0];
    }

    $(selector).addClass('highlight');
}