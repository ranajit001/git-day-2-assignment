let arr =[45,19,37,68,45,99,33,74,76,71];

for(let i=0;i<arr.length;i++){
    let count=0;
    for(let j=1;j<=arr[i];j++){
        if(arr[i]%j==0){
            count++;
        }
    }
    if(count==2){
        console.log(arr[i]);
    }
}