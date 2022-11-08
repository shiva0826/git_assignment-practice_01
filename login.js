//check prime
let num=23;
let factor=0;
for(i=0;i<=num;i++){
   if(num%i==0){
    factor++
   }
}if(factor==2){
    console.log("it's prime");
}else 
{
    console.log("it's not prime");
}

