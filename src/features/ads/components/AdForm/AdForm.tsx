import UploadImage from "../UploadImage/UploadImage";
import styles from "./AdForm.module.scss";
import { useState } from "react";
import CategoryChips from "../../../../shared/components/CategoryChips/CategoryChips";

function AdForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [descripton, setDescription] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const categories = ["Books", "Notes", "Calculator", "Lab Coat", "Other"];

  function toggleCategory(category: string) {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  }

  return (
    <div>
      <h2 className={styles.formTitle}>Advertise new Item</h2>
      <UploadImage />

      <div className={styles.fieldGroup}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>

      <div className={styles.fieldGroup}>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
      </div>

      <div className={styles.fieldGroup}>
        <input
          type="text"
          value={descripton}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      <CategoryChips
        categories={categories}
        selectedCategory={selectedCategories}
        onToggle={toggleCategory}
      />
    </div>
  );
}

export default AdForm;
