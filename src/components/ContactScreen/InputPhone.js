// import { useEffect, useState } from "react";
// import axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";

const InputPhone = ({ contactData, updateField }) => {
  const [localization, setLocalization] = useState(null);

  // const [countries, setCountries] = useState([]);

  // //COUNTRIES.DEV
  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     const response = await axios.get("https://countries.dev/countries");
  //     console.log(response);
  //     const filteredByRegion = response.data.filter((country) =>
  //       country.region.includes("Europe"),
  //     );
  //     setCountries(filteredByRegion);
  //   };

  //   fetchCountries();
  // }, []);

  // // console.log(countries);

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
  }, [updateField]);

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
              country={localization}
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
              value={contactData.from_phone}
              onChange={(e) => updateField("from_phone", e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InputPhone;
