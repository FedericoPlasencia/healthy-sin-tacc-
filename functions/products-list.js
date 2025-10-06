exports.handler = async () => {
  const products=[{id:1,name:'Ensalada de Quinoa',price:1200,shortDesc:'Quinoa, tomate, hojas',image:'/images/quinoa.jpg'}]
  return { statusCode:200, body: JSON.stringify(products) }
}
