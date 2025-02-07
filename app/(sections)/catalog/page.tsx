import GalleryCards from "@/features/cards/presentation/GalleryCards";
import Title from "@/shared/Typography/Title";
// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from "@tanstack/react-query";

export default async function CardCatalogPage() {
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["cards"],
  //   queryFn: () =>
  //     axiosInstance<CardDataSetResponse>("?num=30&offset=1").then(
  //       (res) => res.data.data
  //     ),
  // });

  return (
    <div className="flex flex-col gap-8">
      <Title level={2} className="text-3xl lg:text-5xl">
        Card Catalog
      </Title>

      {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
      <GalleryCards />
      {/* </HydrationBoundary> */}
    </div>
  );
}
