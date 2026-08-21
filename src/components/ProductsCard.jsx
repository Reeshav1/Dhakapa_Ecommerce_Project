

const ProductsCard = ({props}) => {
  return (
    <>
      <div className="group w-[300px] bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 mt-2">
        {/* Image */}
        <div className="relative bg-[#f3f4f6] p-3">
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-[200px] object-contain rounded-xl group-hover:scale-[1.02] transition duration-300"
          />
        </div>
    
        {/* Content */}
        <div className="p-4">
          <p className="text-gray-400 font-light text-sm">{props.category}</p>

          <h3 className="text-lg font-semibold text-gray-900">{props.name}</h3>

          <p className="text-lg font-bold text-[#263F79] mt-1">{props.price}</p>
          <div>
            {/* Button */}
            {/* <Button className='text-white'>
          <FaShoppingCart />
        </Button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
