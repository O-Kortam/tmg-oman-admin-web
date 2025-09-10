import { postCMS } from "@/lib/postCms";

export async function postContact(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
  country: string;
  reason: string;
  interested: string;
})  {
  const endpoint = "contacts";
  const data = await postCMS(endpoint, formData);
  return data;
}
