import { getQueryData } from "@/lib/data";

const page = async (props) => {
  const { id } = await props.searchParams;

  const data = await getQueryData(id);

  return (
    <>
      {data && (
        <div className="ml-5">
          <h3 className="mt-5">Item : {data.header}</h3>

          <div>Description : {data.header2}</div>
          <br />
          <div>Category : {data.text1}</div>
          <div>Price : {data.text1}$</div>
          <div>Stock : {data.text1} items in stock</div>
        </div>
      )}
    </>
  );
};

export default page;
