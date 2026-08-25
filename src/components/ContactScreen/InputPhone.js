import axios from "axios";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";

const InputPhone = ({ contactData, updateField, register, errors, setValue }) => {
  const [localization, setLocalization] = useState(null);

  // user localization
  useEffect(() => {
    const fetchLocalization = async () => {
      const responseLocalization = await axios.get("https://ipapi.co/json/");

      const detectedCountry = responseLocalization.data.country.toLowerCase();
      const detectedCallingCode =
        responseLocalization.data.country_calling_code;
      setLocalization(detectedCountry);
      updateField("from_callingCodes", detectedCallingCode);
     
    };
    fetchLocalization();

    }, []);

  console.log(localization);

  return (
    <>
      <div className="flex-row form-ion-row ">
        <ion-icon name="call-outline"></ion-icon>
        <div className="form-group">
          <label htmlFor="phone">Numer telefonu</label>
          {/* React-Phone-Input-2 (biblioteka)*/}
          <div className="flex-row">
            <PhoneInput
              regions={"europe"} // regions={['north-america', 'carribean']}
              country={"localization"}
              enableSearch={true}
              name="from_callingCodes"
              value={contactData.from_callingCodes}
              onChange={(phone) => updateField("from_callingCodes", phone)}
              placeholder=""
            />
            <input
              type="tel"
              placeholder="Wpisz numer telefonu"
              id="phone"
              name="from_phone"
              autoComplete="tel"
              // value={contactData.from_phone}
              // onChange={(e) => updateField("from_phone", e.target.value)}
              {...register("from_phone", {
                required: "To pole jest wymagane",
                pattern: {
                  value: /^\d{9}$/,
                  message: "Numer telefonu powinien zawierać 9 cyfr",
                },
              })}
            />
          </div>
          <p className="form-error-message">{errors.from_phone?.message}</p>
        </div>
      </div>
    </>
  );
};

export default InputPhone;
