
const partyHeader = document.getElementById('party');
const newTag = document.getElementsByTagName('H1');

export const htmlGenerator = (string, htmlElement) => {
//    const pTag = document.createElement("htmlElement")
//     const text = document.createTextNode("string");
//     pTag.appendChild(text);
//     partyHeader.appendChild(pTag);  
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator('I <3 Vanilla DOM manipulation.', newTag);

    // const pTag = document.createElement("P")
    // const text = document.createTextNode("Party Time.");
    // pTag.appendChild(text);
    // document.getElementById("party").appendChild(pTag);     

    const pTag = document.createElement("P")
    const text = document.createTextNode("I <3 Vanilla DOM manipulation.");
    pTag.appendChild(text);
    newTag[0].appendChild(pTag);  