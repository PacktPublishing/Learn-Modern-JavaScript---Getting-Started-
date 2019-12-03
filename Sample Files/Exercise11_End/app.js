var tableObj = {
    methodHead: "Method",
    descHead: "Description",
    methods: [
        "getElementById()",
        "getElementsByTagName()",
        "getElementsByClassName()",
        "querySelector()",
        "querySelectorAll()"
    ],
    descriptions: [
        "Selects the first element it encounters with the ID you enter. The ID is entered as a string. (e.g. document.getElementById('content');) This method will return a single node.",
        "Selects all the elements in the DOM for the tag you enter. The tag value is entered as a string. (e.g. document.getElementsByTagName('li');) This method returns an array of all the matching nodes.",
        "Selects all the elements in the DOM that is assigned the class that you enter. The class name should be expressed as a string. (e.g. document.getElementById('li');) This method returns an array of all the matching nodes.",
        "Selects the first element in the DOM that matches the criteria you enter. You can use any CSS selector as the criteria. This method is very powerful for those that know CSS selectors. The CSS selector is entered as a string. (e.g. document.querySelector('#content li');) This method returns the first element that matches the criteria.",
        "Selects all the elements in the DOM that match the criteria you enter. You can use any CSS selector as the criteria. This method is very powerful for those that know CSS selectors. The CSS selector is entered as a string. (e.g. document.querySelectorAll('#content li');) This method returns an array of all elements that match the criteria."
    ]
};

var fillTable = function(obj) {
    var tableHeadNodes = document.querySelectorAll("#table th"),
        tableNodes = document.querySelectorAll("#table td"),
        methods = obj.methods,
        descriptions = obj.descriptions,
        loc = 0;

    tableHeadNodes[0].innerHTML = obj.methodHead;
    tableHeadNodes[1].innerHTML = obj.descHead;

    for (let i = 0; i < tableNodes.length; i++) {
        tableNodes[i].innerHTML = methods[loc];
        tableNodes[++i].innerHTML = descriptions[loc];
        loc++;
    }
};

fillTable(tableObj);