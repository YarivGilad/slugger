
export function slugger(...strings : string[]):string{
    return strings.join('-')
                  .trim()
                  .toLowerCase()
                  .replaceAll(' ','-');
}
