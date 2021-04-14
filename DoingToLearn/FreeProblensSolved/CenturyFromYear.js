    year= 2005
    console.log("teste")
    console.log(centuryFromYear(year))

function centuryFromYear(year) {
    return Math.floor((year-1)/100) + 1;
}