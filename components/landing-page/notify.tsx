import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const checkIsArray = (data: unknown) => {
  if (data instanceof Array) return true;
  else return false;
};

const successMsg = (data: string | { message: string }[]) => {
  if (checkIsArray(data)) {
    (data as { message: string }[]).map((m: { message: string }) => {
      toast.success(m.message);
    });
  } else {
    toast.success(data as string);
  }
};

const errorMsg = (data: string | { message: string }[]) => {
  if (checkIsArray(data) && data.length > 0) {
    (data as { message: string }[]).map((m: { message: string }) => {
      toast.error(m.message);
    });
  } else {
    toast.error(data as string);
  }
};

const defaultMsg = (data: string | { message: string }[]) => {
  if (checkIsArray(data)) {
    (data as { message: string }[]).map((m: { message: string }) => {
      toast(m.message);
    });
  } else {
    toast(data as string);
  }
};

export const showToast = (type = "default", message: string) => {
  switch (type) {
    case "success":
      successMsg(message);
      break;
    case "error":
      errorMsg(message);
      break;
    default:
      defaultMsg(message);
      break;
  }
};

export default function Notify() {
  return <ToastContainer autoClose={1000} />;
}
