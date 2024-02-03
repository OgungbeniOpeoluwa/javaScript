var numb = [2,1,3,2,3,4]
for(var count =0; count < numb.length;count++){
    if(duplicateNumber(count,numb[count]))continue;

    return console.log(numb[count]);
}
function duplicateNumber(indexs,value){
    for(var index = 0;  index < numb.length;index++){
        if(indexs == index)continue;
        if(numb[index]==value)return true;
    }
    return false;
}
