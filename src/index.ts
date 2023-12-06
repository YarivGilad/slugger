
/* export function slugger(...strings : string[]):string{
    return strings.join('-')
                  .trim()
                  .toLowerCase()
                  .replaceAll(' ','-');
} */


export function slugger(...strings : string[]):string{
    return strings.map(str => {
        return str.trim().toLowerCase().replace(/\s+/g, '-');
        // Removes multiple spaces with single dash
    }).join('-');
} 
