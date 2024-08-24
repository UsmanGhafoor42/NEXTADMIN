import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="Title" name="title" required />
                <select name="cat" id="cat">
                    <option value="general">Choose a category</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                    <option value="airbuds">Airbuds</option>
                    <option value="laptop">Laptop</option>
                    <option value="speaker">Speaker</option>
                </select>
                <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    required
                />
                <input
                    type="number"
                    placeholder="Stock"
                    name="stock"
                    required
                />
                <input type="text" placeholder="Color" name="color" />
                <input type="text" placeholder="Size" name="size" />
                <textarea
                    name="desc"
                    id="desc"
                    rows="16"
                    placeholder="Description"
                ></textarea>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProductPage;
