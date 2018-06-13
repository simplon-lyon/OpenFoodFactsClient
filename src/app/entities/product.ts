export class Product {
  id: number;
  name: string;
  imageUrl: string;
  nutriscore: string;

  constructor (params: any) {
    this.id = params.id;
    this.name = params.product_name_fr;
    this.imageUrl = params.image_front_url;
    this.nutriscore = params.nutrition_grades;
  }

  static list(list: any[]): Product[]{
    let products: Product[] = [];

    list.forEach(value => {
      products.push(new Product(value));
    })

    return products;
  }
}