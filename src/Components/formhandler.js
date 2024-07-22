export const validateForm = (rows) => {
    let isFilled = true
    rows.forEach(row => {
        if(!row.creditHours || !row.grade){
           isFilled = false;
        }
    })
    return isFilled;
} 