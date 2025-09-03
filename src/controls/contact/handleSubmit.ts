import { SetStateAction } from "react";
import toast from "react-hot-toast";

export const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>  {
  const form = e.currentTarget;

  const formData = new FormData(form);
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

return res
}

export const emailSubmitHandler = async (e: React.FormEvent<HTMLFormElement>, setLoading: React.Dispatch<SetStateAction<boolean>>) => {
  e.preventDefault()
  setLoading(true)
  try {
    const res = await handleSubmit(e)
    if(res && res.ok) {
      toast.success("Message sent successfully, I'll get back soon :)")
    }
  } catch (error) {
    toast.error("Failed to send message :(")
    console.error(error)
    e.currentTarget.reset()
  } finally {
    setLoading(false)
  }
}