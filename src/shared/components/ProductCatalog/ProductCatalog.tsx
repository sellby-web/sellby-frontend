import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductCatalog.module.scss";

type Product = {
  id: number;
  title: string;
  subject: string;
  price: number;
  time: string;
  imageUrl?: string;
};

type ProductCatalogProps = {
  products: Product[];
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
