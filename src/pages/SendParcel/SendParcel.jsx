import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

// Explaination:
// This component allows users to input details about a parcel they want to send, including sender and receiver information.
// It uses react-hook-form for form handling and validation. Upon submission, it calculates the delivery cost based on the parcel type and weight, and shows a confirmation toast with the calculated cost.
// If the user confirms, it simulates saving the parcel data (currently just logs it to the console) and shows a success toast.

const SendParcel = () => {
  const [calculatedCost, setCalculatedCost] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const parcelType = watch("type");

  // DummyCostCalculation
  const calculateCost = (data) => {
    let base = data.type === "document" ? 10 : 20;
    let weightCost = data.weight ? data.weight * 5 : 0;
    let centerCost = 15; // example flat cost

    return base + weightCost + centerCost;
  };

  const onSubmit = (data) => {
    const cost = calculateCost(data);
    setCalculatedCost(cost);

    toast(
      (t) => (
        <div className="p-2">
          <p className="font-semibold">Delivery Cost: AED{cost}</p>
          <button
            className="btn btn-sm btn-success mt-2"
            onClick={() => {
              handleConfirm(data);
              toast.dismiss(t.id);
            }}
          >
            Confirm
          </button>
        </div>
      ),
      { duration: 6000 },
    );
  };

  const handleConfirm = (data) => {
    const payload = {
      ...data,
      creation_date: new Date().toISOString(),
    };

    console.log("Saved Parcel:", payload);
    toast.success("Parcel saved successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-2">Add Parcel</h1>
      <p className="text-center text-gray-500 mb-6">
        Door to Door delivery requires both pickup and delivery details
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* ParcelInfo */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Parcel Info</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Type */}
            <div>
              <label className="label">Type</label>
              <select
                className="select select-bordered w-full"
                {...register("type", { required: true })}
              >
                <option value="">Select Type</option>
                <option value="document">Document</option>
                <option value="non-document">Non-Document</option>
              </select>
              {errors.type && <p className="text-red-500 text-sm">Required</p>}
            </div>

            {/* Title */}
            <div>
              <label className="label">Title</label>
              <input
                className="input input-bordered w-full"
                {...register("title", { required: true })}
              />
              {errors.title && <p className="text-red-500 text-sm">Required</p>}
            </div>

            {/* Weight */}
            {parcelType === "non-document" && (
              <div>
                <label className="label">Weight (kg)</label>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  {...register("weight")}
                />
              </div>
            )}
          </div>
        </div>

        {/* SenderInfo */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Sender Info</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="Name"
              className="input input-bordered w-full"
              defaultValue="John Doe"
              {...register("sender_name", { required: true })}
            />

            <input
              placeholder="Contact"
              className="input input-bordered w-full"
              {...register("sender_contact", { required: true })}
            />

            <input
              placeholder="Region"
              className="input input-bordered w-full"
              {...register("sender_region", { required: true })}
            />

            <input
              placeholder="Service Center"
              className="input input-bordered w-full"
              {...register("sender_center", { required: true })}
            />

            <textarea
              placeholder="Address"
              className="textarea textarea-bordered w-full"
              {...register("sender_address", { required: true })}
            />

            <textarea
              placeholder="Pickup Instruction"
              className="textarea textarea-bordered w-full"
              {...register("pickup_instruction", { required: true })}
            />
          </div>
        </div>

        {/* ReceiverInfo */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Receiver Info</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="Name"
              className="input input-bordered w-full"
              {...register("receiver_name", { required: true })}
            />

            <input
              placeholder="Contact"
              className="input input-bordered w-full"
              {...register("receiver_contact", { required: true })}
            />

            <input
              placeholder="Region"
              className="input input-bordered w-full"
              {...register("receiver_region", { required: true })}
            />

            <input
              placeholder="Service Center"
              className="input input-bordered w-full"
              {...register("receiver_center", { required: true })}
            />

            <textarea
              placeholder="Address"
              className="textarea textarea-bordered w-full"
              {...register("receiver_address", { required: true })}
            />

            <textarea
              placeholder="Delivery Instruction"
              className="textarea textarea-bordered w-full"
              {...register("delivery_instruction", { required: true })}
            />
          </div>
        </div>

        {/* Submit */}
        <button className="btn btn-primary w-full">Submit Parcel</button>
      </form>
    </div>
  );
};

export default SendParcel;
