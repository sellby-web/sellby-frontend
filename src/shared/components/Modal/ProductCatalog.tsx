import React from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductCatalog.module.css";

type Product = {
  id: string;
  title: string;
  subject: string;
  price: number;
  time: string;
  imageUrl?: string;
};

type ProductCatalogProps = {
  products: [];
  onCardClick: (productId: string) => void;
  onMessageClick: (productId: string) => void;
};

function ProductCatalog({
  products,
  onCardClick,
  onMessageClick,
}: ProductCatalogProps) {
  return (
    <div className={styles.grid}>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          {...item}
          onButtonClick={() => {}}
          onCardClick={() => {}}
        />
      ))}
    </div>
  );
}

export default ProductCatalog;
