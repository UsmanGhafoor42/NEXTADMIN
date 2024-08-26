import Image from "next/image"
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css"

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
            <Image src="/noavatar.png" alt="avatar" fill  />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>

        <label htmlFor="">Title</label>
        <input type="text" placeholder="Title" name="title" />
        <label htmlFor="">Price</label>
        <input type="number" placeholder="$999" name="price" />
        <label htmlFor="">Stock</label>
        <input type="number" placeholder="23" name="stock" />
        <label htmlFor="">Color</label>
        <input type="text" placeholder="Blue" name="color" />
        <label htmlFor="">Size</label>
        <input type="text" placeholder="Size" name="size" />
        <label htmlFor="">Category</label>
        <select name="cat" id="cat">
                    <option value="general">Choose a category</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                    <option value="airbuds">Airbuds</option>
                    <option value="laptop">Laptop</option>
                    <option value="speaker">Speaker</option>
                </select>
                <label htmlFor="">Description</label>
        <textarea name="desc" id="desc" rows="16" placeholder="Description"></textarea>
        <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
