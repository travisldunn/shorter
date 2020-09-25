import { toast } from "react-toastify";

export default function (data, arr) {
  for (let obj of arr) {
    if (obj.url === data.longUrl) {
      toast("That url is already in your short list");
      return false;
    }
    if (obj.slug === data.slug) {
      toast("That nickname is already in your short list");
      return false;
    }
  }
  return true;
}
