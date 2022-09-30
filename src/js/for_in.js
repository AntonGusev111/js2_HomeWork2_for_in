export default function orderByProps(obj, arr){
    let finalArray =[];
    const keys = Object.keys(obj).sort();
    const conArray = arr.concat(keys);
    for (let item in conArray){
        let apendArray =Object.create(null);
        apendArray['key'] = conArray[item];
        apendArray['value'] = obj[conArray[item]];
        finalArray.push(apendArray)
    }
    return finalArray


}


//const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
//const result = orderByProps(obj, ["name", "level"])
//for (let i in result){
  //  console.log(result[i])
//}