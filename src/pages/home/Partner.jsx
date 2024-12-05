import Marquee from "react-fast-marquee";

const Partner = () => {
  const sports_brands = [
    {
      name: "Nike",
      country: "USA",
    },
    {
      name: "Adidas",
      country: "Germany",
    },
    {
      name: "Puma",
      country: "Germany",
    },
    {
      name: "Under Armour",
      country: "USA",
    },
    {
      name: "Reebok",
      country: "USA",
    },
    {
      name: "New Balance",
      country: "USA",
    },
    {
      name: "ASICS",
      country: "Japan",
    },
    {
      name: "Saucony",
      country: "USA",
    },
    {
      name: "Wilson",
      country: "USA",
    },
    {
      name: "The North Face",
      country: "USA",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center flex-col my-8">
        <h2 className="text-4xl font-bold my-6">See Our Partners</h2>

        <Marquee>
          {sports_brands.map((item, i) => (
            <div key={i} className="p-12 bg-gray-300 text-center border">
              <h3 className="text-3xl font-bold">{item.name}</h3>
              <p>{item.country}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Partner;
