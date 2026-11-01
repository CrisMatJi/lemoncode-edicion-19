import { Metadata } from "next";
import { notFound } from "next/navigation";
import { api as houseListApi } from "@/pods/house-list";
import { House, api, mapHouseFromApiToVm } from "@/pods/house";

interface Props {
  params: Promise<{ id: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const houseList = await houseListApi.getHouseList();
  return houseList.map((house) => ({ id: house.id }));
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { id } = await props.params;
  const house = await api.getHouse(id);
  return {
    title: house ? `${house.name} - Casas Rurales` : "Casas Rurales",
  };
};

const HousePage = async (props: Props) => {
  const { id } = await props.params;
  const house = await api.getHouse(id);

  if (!house) {
    notFound();
  }

  return <House house={mapHouseFromApiToVm(house)} />;
};

export default HousePage;
