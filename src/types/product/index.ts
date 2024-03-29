export type IProductFilterValue = string | string[] | number | boolean;

export type IProductFilters = {
  name: string;
  inStock: boolean;
  brands: string[];
  hasDiscount: boolean;
  categories: string[];
  minPrice: number;
  maxPrice: number;
};

export type IProductBrands = {
  key: string;
  value: string;
};

export type IProductCategory = {
  key: string;
  value: string;
};

export type IProductItem = {
  id: string;
  name: string;
  image: string;
  stock: number;
  price: number;
  discount: number;
  brandValue: string;
  categoryValue: string;
  brands: IProductBrands[];
  categories: IProductCategory[];
};
