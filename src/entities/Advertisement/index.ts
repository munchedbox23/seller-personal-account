export { AdvertisementList } from "./ui/AdvertisementList/AdvertisementList";

export {
  selectAdvertisementsError,
  selectIsAdvertisementsLoading,
} from "./model/selectors/getAdvertisementsDetails";

export {
  useGetAdvertisementsQuery,
  advertisementsApi,
  useGetAdvertisementByIdQuery,
  useUpdateAdvertisementMutation,
  usePatchAdvertisementMutation,
  useDeleteAdvertisementMutation,
} from "./api/advertisementsApi";

export { AdevertisementItem } from "./ui/AdvertisementItem/AdevertisementItem";
