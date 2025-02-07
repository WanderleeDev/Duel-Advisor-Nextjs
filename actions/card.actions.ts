"use server";

import { CardDataSetResponse } from "@/features/cards/data/models/CardApiResponse";
import { CardParamsDTO } from "@/features/cards/data/models/CardParams";
import { axiosInstance } from "@/lib/axiosInstance";
import { handleApiError } from "@/shared/utils/handleApiError";

export async function getCards(params: Partial<CardParamsDTO>) {
  try {
    const res = await axiosInstance.get<CardDataSetResponse>("", {
      params,
    });

    return res.data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function getCard(nameCard: string): Promise<CardDataSetResponse> {
  try {
    const res = await axiosInstance.get<CardDataSetResponse>("", {
      params: { fname: nameCard },
    });

    return res.data;
  } catch (error) {
    handleApiError(error);
  }
}
