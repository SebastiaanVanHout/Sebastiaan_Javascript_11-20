function firstLast6(arr) {
    if(arr[0]==6 || arr[arr.length-1]==6 ){
        return true;
    }else{
        return false;
    }
}

function has23(arr){
    if(arr[0]==2 || arr[0]==3 || arr[1]==2 || arr[1]==3){
        return true;
    }else{
        return false;
    }
}
function fix23(arr){
    if((arr[0]==2 && arr[1]==3) || (arr[1]==2 && arr[2]==3)){
        if(arr[0]==2 && arr[1]==3){
            arr[1]=0;
            return arr;
        }
        if(arr[1]==2 && arr[2]==3){
            arr[2]=0;
            return arr;
        }
    }else{
        return arr;
    }
}
function countYZ(arr){
    sum = 0;
    for(var x = 0; x < arr.length-1; x++){
        if(arr[x] == ' '){
            if ((arr[x - 1] == 'y' || 'Y') ||  (arr[x - 1] == 'z' || 'Z')) {
                if(arr[x-1]== 'k'){
                    break;
                }else{
                    sum++;
                }
            }
        }
    }
    if(arr[arr.length-1] == 'y' || arr[arr.length-1] == 'z'){
        sum++;
    }
    return sum;
}
function endOther(wrd, str){
    var string = str.toLowerCase();
    var word = wrd.toLowerCase();
    if(string.endsWith(word)|| word.endsWith(string)){
        return true;
    }
    return false;
}
function starOut(word) {

    var sum = '';

    for(var x=0; x<word.length; x++){
        if(word[x]!='*'&& word[x+1]!='*'&& word[x-1]!='*'){
            sum += word[x];
        }
    }
    return sum;
}
function getSandwich(word){
    var x = word.indexOf('bread');
    var y = word.lastIndexOf('bread');
    var z = word.substring(x+5,y);
    if(x>=0){
        if(x != y){
            return z;
        }else{
            return "";
        }
    }else{
        return "";
    }
}
function canBalance(arr){
    var total = 0;
    var total1 = 0;
    for(var x=0; x<arr.length; x++){
        total = total + arr[x];
    }
    var total2 = total;
    for(var i=0; i<arr.length; i++) {
        total1 = total1 + arr[i];
        total2 = total2 - arr[i];
        if (total1 == total2) {
            break;

        }
    }
    if(total1==total2){
        return true;
    }else{
        return false;
    }
}
function countClumps(arr){
    var sum = 0;
    for(var x = 0; x<arr.length; x++){
        if(arr[x]==arr[x+1]){
            sum++;
            if(arr[x+2]==arr[x+1]){
                sum--;
            }
        }
    }
    return sum;
}
function evenlySpaced(a,b,c){
    if(a==b==c){
        return true;
    }
    if(a-b==b-c || a-c==c-b || b-c==c-a || b-a==a-c || c-b==b-a || c-a==a-b){
        return true;
    }else{
        return false;
    }
}

//write second method
function nextOne(param1, param2) {
    
}

function tester() {

    document.getElementById("output").innerHTML = firstLast6([1,2,6,7,6,5]);
    document.getElementById("output2").innerHTML = has23([4,3]);
    document.getElementById("output3").innerHTML = fix23([2,2,3]);
    document.getElementById("output3").innerHTML = countYZ("ajwdy safjaz ajhsfjay");
}
