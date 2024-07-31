export const validateForm = (rows , checkForm) => {
    let isFilled = true
    if(Array.isArray(rows)){
    rows.forEach(row => {
        if(!row.creditHours || !row.grade){
           isFilled = false;
        }
    })}

    if(Array.isArray(checkForm)){
    checkForm.forEach(row => {
        if(!row){
            isFilled = false;
        }
    })
}
    return isFilled;
  
} 