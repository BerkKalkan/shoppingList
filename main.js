let shoppingList = [];

function listItem() {
    console.log("olusturulan liste: ")
    for (const fullList of shoppingList) {
        console.log(fullList);
    }
    let HLList = shoppingList.length;
    console.log("toplam urun sayisi: " + HLList)
};

function getInput() {
    let manyItem = Number(prompt("listeye kac urun ekleyeceksin"));
    for (let i = 0; i < manyItem; i++) {
        let newItem = Number(prompt(i + 1 + ". urunu gir"));
        shoppingList.push(newItem);
    };
    listItem();
};