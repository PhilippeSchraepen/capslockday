(function upperCase(){
    function walkTheDOM(node, func) {
        func(node);
        node = node.firstChild;
        while (node) {
            walkTheDOM(node, func);
            node = node.nextSibling;
        }
    }

    walkTheDOM(document.body, function (node) {
        if (node.nodeType === 3) { // Is it a Text node?
            if (node.data.length > 1){
                node.data = node.data.toUpperCase();
            }
        }
    });
}());
