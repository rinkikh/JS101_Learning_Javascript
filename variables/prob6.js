for (let i=5;i>=1;i--){
  let bag1="";
  let bag2="";
  for(let j=5;j>=i;j--){
    bag1=bag1+" "+ "*";
    bag2=bag2+" "+ j
  }
  console.log(bag1);
  console.log(bag2)
}