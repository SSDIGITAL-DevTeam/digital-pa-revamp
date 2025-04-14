"use client";

import { Form } from "@/components/ui/form";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import InputField from "@/components/partials/form/InputField";
import { failedToast, successToast } from "@/utils/toast";
import { axiosInstance } from "@/lib/axios";
import SwitchField from "@/components/partials/form/SwitchField";

const dataSchema = z.object({
  name: z.string().nonempty(),
  status: z.boolean(),
});

type DataSchema = z.infer<typeof dataSchema>;

type Props = {
  defaultValue?: any,
  setOpen?: Dispatch<SetStateAction<boolean>>,
  setRefetch?: Dispatch<SetStateAction<boolean>>
}


const FormComponents = ({ defaultValue, setOpen, setRefetch }: Props) => {
  const form = useForm<DataSchema>({
    resolver: zodResolver(dataSchema),
    defaultValues: {
      name: "",
      status: true,
    },
  });
  const { handleSubmit, control, reset } = form;

  useEffect(() => {
    if (defaultValue) {
      reset(defaultValue);
    }
  }, [defaultValue]);

  const handleInput = handleSubmit(async (value) => {
    try {
      const url = defaultValue ? `/blog-category/${defaultValue.id}` : `/blog-category`;
      const method = defaultValue ? axiosInstance.patch : axiosInstance.post;
      const response = await method(url, value);
      successToast(
        <p className="text-xl font-semibold text-green-900">Success</p>,
        <p className="text-xs text-green-400 mt-2">{
          response.data.message || "Process Successfully"
        }
        </p>
      );
      setRefetch && setRefetch(prev => !prev)
      setOpen && setOpen(false);
    } catch (error: any) {
      failedToast(
        <p className="text-xl font-semibold text-red-900">Failed</p>,
        <p className="text-xs text-red-300 mt-2">{
          error.response?.data?.error || error.response?.statusText || "Error processing data"
        }
        </p>
      );
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={handleInput}>
        <div className=" flex flex-col gap-4 w-full">
          <InputField control={control} label="Category Name" name="name" />
          {
            defaultValue &&
            <SwitchField control={control} name="status" label="Status" />
          }
        </div>
        <div className="w-full flex justify-end gap-2 features-center mt-8 sm:mt-12">
          <Button
            type="button"
            onClick={() => {
              setOpen && setOpen(false);
            }}
            variant={"back"}
            size={"sm"}
          >
            Cancel
          </Button>

          <div className="flex gap-4 justify-end features-center">
            <Button
              type="submit"
              variant={"addData"}
              size={"sm"}
              className={`${defaultValue && "bg-[#E7BB53] hover:bg-[#E7BB53]/90 text-black"}`}

            >
              {defaultValue ? "Save Changes" : "Add Category"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};



export default FormComponents;
