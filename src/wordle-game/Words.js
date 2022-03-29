import data from "./samples.txt";

export const boardDefault = [
    ["", "","","","",""],
    ["", "","","","",""],
    ["", "","","","",""],
    ["", "","","","",""],
    ["", "","","","",""],
    ["", "","","","",""]
];

export const generateWords = async () =>{
    let wordSet;
    let todaysWord;
    await fetch(data).then((res) => res.text()).then((res) => {
        
    //    let ds =  res.replace("\r\n", "");
        const wordsAr = res.split(",");
        todaysWord = wordsAr[Math.floor(Math.random()*wordsAr.length)]
        wordSet = new Set(wordsAr)
    });

    return {wordSet, todaysWord};
}


/*
export const boardDefault = [
    ["", "","","","","", "", ""],
    ["", "","","","","", "", ""],
    ["", "","","","","", "", ""],
    ["", "","","","","", "", ""],
    ["", "","","","","", "", ""],
    ["", "","","","","", "", ""]
]
*/