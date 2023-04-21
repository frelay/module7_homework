// Задание 1
function getOwnKeys(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(key); 
        }   
    }
}
