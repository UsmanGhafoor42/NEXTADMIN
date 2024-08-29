import Image from "next/image"
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css"
import { singleProduct } from "../../../lib/data"
import { updateProduct } from "../../../lib/actions"

const SingleProductPage = async ({params}) => {
  const product = await singleProduct(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
            <Image src={product.img || "/noproduct.jpg"} alt="avatar" fill  />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
        <input type="hidden" name="id" value={product.id} />
        <label htmlFor="">Title</label>
        <input type="text" placeholder={product.title} name="title" />
        <label htmlFor="">Price</label>
        <input type="number" placeholder={product.price} name="price" />
        <label htmlFor="">Stock</label>
        <input type="number" placeholder={product.stock}  name="stock" />
        <label htmlFor="">Color</label>
        <input type="text" placeholder={product.color} name="color" />
        <label htmlFor="">Size</label>
        <input type="text" placeholder={product.size} name="size" />
        <label htmlFor="">Category</label>
        <select name="cat" id="cat" placeholder={product.cat} >
                    <option value="general">Choose a category</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                    <option value="airbuds">Airbuds</option>
                    <option value="laptop">Laptop</option>
                    <option value="speaker">Speaker</option>
                </select>
                <label htmlFor="">Description</label>
        <textarea name="desc" id="desc" rows="16" placeholder={product.desc}></textarea>
        <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
