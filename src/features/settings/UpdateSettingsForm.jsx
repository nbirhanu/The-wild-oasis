import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSetting";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    error,
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      breakFastPrice,
      maxGuestperBooking,
    } = {},
  } = useSettings();
  const { updateSettings, isUpdating } = useUpdateSetting();
  const handleUpdateSettings = function (e, field) {
    const { value } = e.target;
    console.log(value);
    if (!value) return;
    updateSettings({ [field]: value });
  };
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdateSettings(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdateSettings(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdating}
          defaultValue={maxGuestperBooking}
          onBlur={(e) => handleUpdateSettings(e, "maxGuestperBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          defaultValue={breakFastPrice}
          onBlur={(e) => handleUpdateSettings(e, "breakFastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
