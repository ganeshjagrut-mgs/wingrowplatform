import React from "react";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import MzInput from "../../../common/MzForm/MzInput";
import MzTextarea from "../../../common/MzForm/MzTextArea";
import { useForm } from "react-hook-form";
import { FORM_FIELDS_NAME } from "./constant";
import { WINGROW_SLIDE_THREE } from "../../../assets/images";

export default function FeedbackComponent() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      [FORM_FIELDS_NAME.RATING.name]: 0, // Default rating value
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <span className="p-error">{errors[name].message}</span>
    );
  };

  const handleRatingChange = (event) => {
    console.log(event);
    setValue(FORM_FIELDS_NAME.RATING.name, event?.value);
  };

  return (
    <>
      <div className="md:p-4 px-2 mb-2">
        <div className="flex align-items-center">
          <h2 className="mr-2 text-xl md:text-3xl">Feedback</h2>
          <hr className="flex-1 p-2" />
        </div>
        <div className="md:flex gap-2 justify-content-between">
          <div className="w-full overflow-hidden hidden md:block">   <img
          src={WINGROW_SLIDE_THREE}
          alt="WINGROW_SLIDE_THREE"
          className="md:ml-auto block h-full w-full"
          style={{ clipPath: "polygon(0 0%, 100% 0%, 90% 100%, 0% 100%)" }}
        /></div>
          <div className="w-full p-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-2 md:mt-5 p-fluid w-full"
            >
              <div className="field">
                <MzInput
                  control={control}
                  label={FORM_FIELDS_NAME.CUSTOMER.label}
                  name={FORM_FIELDS_NAME.CUSTOMER.name}
                  placeholder={FORM_FIELDS_NAME.CUSTOMER.placeholder}
                  rules={FORM_FIELDS_NAME.CUSTOMER.rules}
                  isError={errors[FORM_FIELDS_NAME.CUSTOMER.name]}
                  errorMsg={getFormErrorMessage(FORM_FIELDS_NAME.CUSTOMER.name)}
                />
              </div>
              <div className="field">
                <MzTextarea
                  control={control}
                  label={FORM_FIELDS_NAME.MESSAGE.label}
                  name={FORM_FIELDS_NAME.MESSAGE.name}
                  placeholder={FORM_FIELDS_NAME.MESSAGE.placeholder}
                  rules={FORM_FIELDS_NAME.MESSAGE.rules}
                  isError={errors[FORM_FIELDS_NAME.MESSAGE.name]}
                  rows={3}
                  errorMsg={getFormErrorMessage(FORM_FIELDS_NAME.MESSAGE.name)}
                />
              </div>
              <div className="field text-left">
                <label htmlFor={FORM_FIELDS_NAME.RATING.name}>
                  {FORM_FIELDS_NAME.RATING.label}
                  {FORM_FIELDS_NAME.RATING.rules.isRequired && (
                    <span style={{ color: "red" }}> *</span>
                  )}
                </label>
                <Rating
                  name={FORM_FIELDS_NAME.RATING.name}
                  count={5}
                  value={watch(FORM_FIELDS_NAME.RATING.name)}
                  onChange={handleRatingChange}
                  size={24}
                  activeColor="3"
                />
                {getFormErrorMessage(FORM_FIELDS_NAME.RATING.name)}
              </div>
              <div className="flex justify-content-between gap-2 w-full">
                <div className="mb-3 w-full">
                  <Button
                    label="Submit"
                    type="submit"
                    className="mt-3 border-round-sm"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
