import Image from "next/image"
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css"

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
            <Image src="/noavatar.png" alt="avatar" fill  />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>

        <label htmlFor="">Username</label>
        <input type="text" placeholder="John Doe" name="username" />
        <label htmlFor="">Email</label>
        <input type="email" placeholder="john@gmail.com" name="email" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="**********" name="password" />
        <label htmlFor="">Phone</label>
        <input type="phone" placeholder="+212343443" name="phone" />
        <label htmlFor="">Is Admin?</label>
        <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>
        <label htmlFor="">Is Active?</label>
        <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>
        <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage
