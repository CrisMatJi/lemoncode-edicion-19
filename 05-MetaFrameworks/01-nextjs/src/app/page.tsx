import { HouseList, api, mapHouseListFromApiToVm } from "@/pods/house-list";

const HouseListPage = async () => {
  const houseList = await api.getHouseList({ next: { revalidate: 60 } });

  return <HouseList houseList={mapHouseListFromApiToVm(houseList)} />;
};

export default HouseListPage;
