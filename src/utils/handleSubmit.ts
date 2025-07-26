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