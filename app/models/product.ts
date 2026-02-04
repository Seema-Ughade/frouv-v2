export class Variants {
  id!: number ;
  type!: string;
  sku!: string;
  stock!: number;
  price!: string;
  oldprice!: string;
  discount!: string;
  images!: string[];
  originalPrice!: number;
  image: any;
  net_product_price?: string
  sale_price: string | undefined;
}

export class Product {
  _id!: string;
  name!: string;
  slug!: string;
  sellerId!: string;
  seller!: string;
  shopName!: string;
  category!: string;
  categorySlug!: string;
  subCategory!: string;
  subCategorySlug!: string;
  brand!: string;
  description!: string;
  features!: string[];
  speciality!: string;
  pkginfo!: string;
  type!: string;
  countryorigin!: string;
  variants!: Variants[];
  exchange!: string;
  rating!: number;
  verification!: string;
  status!: string;
  createdAt!: string;
  documentId: any;
}

export interface FavProduct {
  documentId: string;
  _id: string
  product_ids:  {
    rating: number;
    slug: any;
    name: string;
   variants: Variants
}[],
variant: number
  userId: string
  createdAt: string
  updatedAt: string
  product: Product
}
export interface Productedite {
  id: number
  documentId: string
  name: string
  slug: string
  brand: string
  description: string
    publishedAt: string | null // This determines if product is published or draft

  main_category?: {
    id: number
    name: string
  }
  sub_category?: {
    id: number
    name: string
  }
  variants?: Array<{
    id: number
    type: string
    sku: string
    stock: string
    price: string
    oldprice: string
    discount: string
    images?: string[]
  }>
  verification?: string
  rating?: number
}



export interface Rating {
  id: number
  documentId: string
  rating: number
  rating_title: string
  rating_discription: string
  createdAt: string
  updatedAt: string
  customers: Array<{
    id: number
    documentId: string
    name: string
  }>
  products: Array<{
    id: number
    documentId: string
    name: string
  }>
}