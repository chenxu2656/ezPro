let serialToJson = (array)=>{
    let result = {}
    array.forEach(element => {
        result[element.name] = element.value    
    });
    return result
}