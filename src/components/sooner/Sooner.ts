import { toast } from "sonner";

export function notify() {
  toast.success("Adicionado ao carrinho!", {
    duration: 2000,
    className:
      "w-[14rem] h-[1.8rem] pl-[0.5rem] py-1 flex justify-center items-center",
  });
}

export function decreaseNotify() {
    toast.info("Item removido!", {
      duration: 2000,
      className:
        "w-[14rem] h-[1.8rem] pl-[0.5rem] py-1 flex justify-center items-justify-center",
    });
  }
export function removeNotify() {
    toast.error("Item removido!", {
      duration: 2000,
      className:
        "w-[14rem] h-[1.8rem] pl-[0.5rem] py-1 flex justify-center items-center",
    });
  }