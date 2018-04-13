function global_funk(){
  return "global_funk()";
}

function daft_funk(){
  //return local_funk();
}

function main(){
  function local_funk(){
    return "local_funk()";
  }
  console.log("main says: "+ global_funk() + ", " + local_funk() + ", " + daft_funk());
}
main();
