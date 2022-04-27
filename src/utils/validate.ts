export function validUsername (str: String):any {
    const valid_map = ['admin','editor']
    return valid_map.indexOf(str.trim())
}