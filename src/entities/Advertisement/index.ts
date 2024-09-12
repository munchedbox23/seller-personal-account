export {
  selectAdvertisementById,
  selectAdvertisements,
} from "./model/selectors/getAdvertisements";
export {
  selectAdvertisementsError,
  selectIsAdvertisementsLoading,
} from "./model/selectors/getAdvertisementsDetails";

export type {
  TAdvertisement,
  TCreateAdvertisement,
  TUpdateAdvertisement,
} from "./model/types/avertisementTypes";

export {
  useGetAdvertisementsQuery,
  advertisementsApi,
  useCreateAdvertisementMutation,
  useGetAdvertisementByIdQuery,
  useUpdateAdvertisementMutation,
  usePatchAdvertisementMutation,
  useDeleteAdvertisementMutation,
} from "./api/advertisementsApi";
