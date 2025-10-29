import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function Contact() {
  const form = useForm({
    mode: "onChange",
    delayError: 5000,
  });

  const onSubmit = (data) => {
    console.log("log", data);
  };

  // form.register
  // form.handleSubmit
  // form.formState.errors

  console.log("log", form.formState.errors);

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <Label
              htmlFor="email"
              className={`${
                form.formState.errors.email?.type === "required"
                  ? "text-red-500"
                  : ""
              }`}
            >
              Email *
            </Label>
            <Input
              type="email"
              placeholder="Enter your email"
              id="email"
              {...form.register("email", {
                required: "This field is required",
                minLength: 8,
              })}
              className={`${
                form.formState.errors.email?.type === "required"
                  ? "border border-red-500"
                  : ""
              }`}
            />
            {form.formState.errors.email?.type === "required" && (
              <span className="text-red-500 text-xs">
                {form.formState.errors.email.message}
              </span>
            )}
            {form.formState.errors.email?.type === "minLength" && (
              <span className="text-red-500 text-xs">
                This field should be more than 8 characters
              </span>
            )}
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              {...form.register("phone")}
            />
          </div>
          <div>
            <Textarea
              placeholder="Enter your message"
              {...form.register("message")}
            />
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
      <DevTool control={form.control} />
    </>
  );
}
