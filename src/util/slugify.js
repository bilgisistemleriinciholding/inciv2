export default function slugify(text, ampersand = 'and') {
  const a = 'ğàáäâèéëêıìíïîòóöôùúüûñçßÿỳýœæŕşśńṕẃǵǹḿǘẍźḧ'
  const b = 'gaaaaeeeeiiiiioooouuuuncsyyyoarssnpwgnmuxzh'
  const p = new RegExp(a.split('').join('|'), 'g')

  return text.toString().toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(p, c =>
      b.charAt(a.indexOf(c)))
    .replace(/&/g, `-${ampersand}-`)
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')
}   
