function Tugas17() {
    var loper = {
        low1: "Saya beLajar bahaSa peMrograman deNgan khUsuk.".toLowerCase(),
        up1: "Saya beLajar bahaSa peMrograman deNgan khUsuk.".toUpperCase(),
        low2: "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.".toLowerCase(),
        up2: "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.".toUpperCase()
    };
    for (var p in loper) {
        console.log(loper[p])
    };
    var a = "Lorem ";

    console.log("ASCII : ",a.charCodeAt(),'-',a.charCodeAt(1),'-',a.charCodeAt(2),'-',a.charCodeAt(3),'-',a.charCodeAt(4),'-',a.charCodeAt(5))  
}
Tugas17()