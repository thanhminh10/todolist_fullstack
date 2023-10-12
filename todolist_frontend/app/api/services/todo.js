import axiosClient from "../client";

export function getProduct() {
  return axiosClient.get("/");
}
