year= 2005;
    System.out.println("teste");
    System.out.println(centuryFromYear(year));

function centuryFromYear(year) {
    if (year == 0) {
        century=0;
    } else {
        century = 1;
        for (i=1 ; i==year ;i++) {
            yearCentury= century*100;
            if (year==yearCentury){
                century=century+1;
            }        
        }
    }
    return century;
}