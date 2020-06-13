import React from "react";
import style from "./FormsControl.module.css";

// export const Textarea = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={style.formControl + " " + (hasError ? style.error : "")}>
//       <div>
//         <textarea {...input} {...props} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   );
// };

// export const Input = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={style.formControl + " " + (hasError ? style.error : "")}>
//       <div>
//         <input {...input} {...props} className={style.loginFields} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   );
// };

export const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={style.formControl + " " + (hasError ? style.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      {" "}
      <textarea {...input} {...restProps} />{" "}
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      {" "}
      <input {...input} {...restProps} className={style.loginFields} />{" "}
    </FormControl>
  );
};
