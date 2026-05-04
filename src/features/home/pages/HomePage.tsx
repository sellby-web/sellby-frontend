import Header from "../../../app/layout/Header";
import ProductCatalog from "../../../shared/components/Button/ProductCatalog";

function HomePage() {
  const products = [
    {
      id: 1,
      title: "Introduction to The Theory Of Computation - Micheal Sipser.",
      subject: "MSc CS (Software engineering)",
      price: 5.5,
      time: "2 hours ago",
      imageUrl: "",
    },
    {
      id: 1,
      title: "Introduction to The Theory Of Computation - Micheal Sipser.",
      subject: "MSc CS (Software engineering)",
      price: 5.5,
      time: "2 hours ago",
      imageUrl: "",
    },
    {
      id: 1,
      title: "Introduction to The Theory Of Computation - Micheal Sipser.",
      subject: "MSc CS (Software engineering)",
      price: 5.5,
      time: "2 hours ago",
      imageUrl: "",
    },

  ];
  return (
    <div>
      <Header />
      <ProductCatalog
        products={products}
        onCardClick={() => console.log("Card clicked")}
        onMessageClick={() => console.log("Message button clicked")}
      />
    </div>
  );
}

export default HomePage;
