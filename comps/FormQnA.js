import styles from '../styles/FormQnA.module.css';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const FormQnA = () => {
    const formik = useFormik (
        {
            initialValues: {
                full_name: "",
                email: "",
                your_website: "",
                message: ""

            },
            validationSchema: Yup.object({
                full_name: Yup.string()
                    .min(2, "Mininum 2 characters")
                    .max(15, "Maximum 15 characters")
                    .required("Required!"),
                email: Yup.string()
                    .email("Invalid email format")
                    .required("Required!"),
            }),

            onSubmit: values => { // baris kode ini di pake buat jajal doang karena ga pake api
                alert(JSON.stringify(values, null, 2));
              }
        }
    )
    return ( 
        <div>
            <form className={styles.contForm} onSubmit={formik.handleSubmit}>
                <div className={styles.divForm}>
                    <label className={styles.labelForm}>Your name</label>
                    <input 
                        type="text" 
                        name="full_name" 
                        value={formik.values.full_name}
                        onChange={formik.handleChange}
                        className={styles.inputField} />

                        {formik.errors.full_name && formik.touched.full_name && (
                            <p className={styles.errorMsg}>{formik.errors.full_name}</p>
                        )}
                </div>
                <div className={styles.divForm}>
                    <label className={styles.labelForm}>Email</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className={styles.inputField} />

                        {formik.errors.email && formik.touched.email && (
                            <p className={styles.errorMsg}>{formik.errors.email}</p>
                        )}
                </div>
                <div className={styles.divForm}>
                    <label className={styles.labelForm}>Your website (if exist)</label>
                    <input 
                        type="text" 
                        name="your_website"
                        value={formik.values.your_website}
                        onChange={formik.handleChange}
                        className={styles.inputField} />
                </div>
                <div className={styles.divForm}>
                    <label className={styles.labelForm}>Message</label>
                    <div>
                        <textarea 
                            name="message" 
                            rows="5" 
                            cols="50"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            className={styles.inputFieldTX}
                            style={{paddingLeft:10,paddingTop:10}}></textarea>
                    </div>
                    {/* <input type="text" name="message" className={styles.inputField}/> */}
                </div>
                <div className={styles.divForm}>
                    <button type="submit" className={styles.buttonForm}>Submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default FormQnA;