import { FC } from 'react';
import { star } from '../assets/icons';

interface IPopularProductCard {
  imageURL: string;
  name: string;
  price: string;
}

const PopularProductCard: FC<IPopularProductCard> = ({
  imageURL,
  name,
  price,
}) => {
  return (
    <div className="group flex flex-1 flex-col w-full max-sm:w-full cursor-pointer">
      <img
        src={imageURL}
        alt={name}
        className="group-hover:outline group-hover:outline-2 group-hover:outline-coral-red rounded-3xl"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-lg leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
