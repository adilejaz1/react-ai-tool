export function checkHeading(str){
return /^(\*)(\*)(.*)\*$/.test(str)
}
export function replaceHeadingstarics(str){
return str.replace(/^\*+|\*+$/g, '');
}
