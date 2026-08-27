import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import InputPhone from "./InputPhone";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

const ContactForm = () => {
  const inputRef = useRef(null);
  // const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    resetField,
  } = useForm({
    defaultValues: {
      from_full_name: "",
      from_email: "",
      from_callingCodes: null,
      from_phone: "",
      from_message: "",
      from_privacy: false,
    },
  });

  //   //phone number validation spaces, and dashes delete
  //   const rawPhoneNumber = contactData.from_phone.replace(/[\s-]/g, "");
  //   const phoneRegex = /^\d{9}$/;
  //   const phoneValidation = phoneRegex.test(rawPhoneNumber);

  const submitFunction = async (data) => {
    await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      data,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    );

    resetField("from_full_name");
    resetField("from_email");
    resetField("from_phone");
    resetField("from_message");
    resetField("from_privacy");

    toast.success("Dziękujemy. Wiadomość została wysłana!", {
      position: "top-center",
      className: "toast-success",
    });
  };

  const errorFunction = (errors) => {
    console.log(handleSubmit);
    console.log(errors);
    toast.error("Uzupełnij wymagane pola", {
      position: "top-center",
      className: "toast-error",
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.99 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="form-contact-us-main flex-col box-shadow"
      onSubmit={handleSubmit(submitFunction, errorFunction)}
      // onSubmit={handleSubmit(
      //   (data) => {
      //     console.log(data);
      //   },
      //   (errors) => {
      //     console.log(errors);
      //     toast.error("Uzupełnij wymagane pola", {
      //       position: "top-center",
      //       className: "toast-error",
      //     });
      //   },
      // )}
      noValidate
    >
      <div className="form-header flex-col">
        <ion-icon name="paper-plane-outline"></ion-icon>
        <p className="form-title">Napisz do nas</p>
        <p className="form-subtitle">Odpowiemy najszybciej jak to możliwe.</p>
      </div>
      <div className="flex-row form-ion-row">
        <ion-icon name="person-outline"></ion-icon>
        <div className="form-group">
          <label htmlFor="name">Imię i nazwisko</label>
          <input
            ref={inputRef}
            type="text"
            placeholder="Wpisz imię i nazwisko"
            id="name"
            name="from_full_name"
            autoComplete="name"
            // value={contactData.from_full_name}
            // onChange={(e) => updateField("from_full_name", e.target.value)}
            {...register("from_full_name", {
              required: "To pole jest wymagane",
              minLength: 1,
            })}
            className={errors.from_full_name?.message && "error-border"}
          />
          <p className="form-error-message">{errors.from_full_name?.message}</p>
        </div>
      </div>
      <div className="flex-row form-ion-row ">
        <ion-icon name="mail-outline"></ion-icon>
        <div className="form-group">
          <label htmlFor="email">Adres e-mail</label>
          <input
            type="email"
            placeholder="Wpisz adres e-mail"
            id="email"
            name="from_email"
            autoComplete="email"
            // value={contactData.from_email}
            // onChange={(e) => updateField("from_email", e.target.value)}
            {...register("from_email", {
              required: "To pole jest wymagane",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Nieprawidłowy adres e-mail",
              },
            })}
            className={errors.from_email?.message && "error-border"}
          />
          <p className="form-error-message">{errors.from_email?.message}</p>
        </div>
      </div>
      {/* ---------------------- InputPhone --------------------- */}
      <InputPhone
        register={register}
        errors={errors}
        setValue={setValue}
        data={data}
        control={control}
      />
      <div className="flex-row form-ion-row">
        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
        <div className="form-group">
          <label htmlFor="message">Wiadomość</label>
          <textarea
            id="message"
            placeholder="Napisz, w czym możemy Ci pomóc ..."
            name="from_message"
            // value={contactData.from_message}
            // onChange={(e) => updateField("from_message", e.target.value)}
            {...register("from_message", {
              required: "To pole jest wymagane",
            })}
          ></textarea>
          <p className="form-error-message">{errors.from_message?.message}</p>
        </div>
      </div>
      <div className="form-checkbox flex-row">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          // checked={isChecked}
          // onChange={(e) => setIsChecked(e.target.checked)}
          {...register("from_privacy", {
            required: "To pole jest wymagane",
          })}
        />

        <label htmlFor="privacy">
          Zapoznałem(-am) się z &nbsp;
          <a href="/polityka-prywatnosci">Polityką Prywatności</a>
          &nbsp; i wyrażam zgodę na przetwarzanie moich danych osobowych w celu
          udzielenia odpowiedzi na przesłane zapytanie.
        </label>
      </div>{" "}
      <p className="form-error-message">{errors.from_privacy?.message}</p>
      <button className="form-button" type="submit">
        <ion-icon name="paper-plane-outline"></ion-icon>
        Wyślij wiadomość
      </button>
    </motion.form>
  );
};

export default ContactForm;
