import charity1 from './pictures/charity.jpg';
import charity2 from './pictures/charity2.jpg';
import charity3 from './pictures/charity3.jpg';
import logo from './pictures/logo.png';

const Hero = () => {
  return (
    <div className="pt-12 bg-brand-beige h-full flex-grow border-t-2 border-t-brand-grayGreen text-center font-serif flex flex-col items-center justify-center">
  <div className="relative mt-0">
    <img
      src={logo}
      alt="Logo"
      className="absolute inset-y-[-2rem] inset-x-[-18rem] h-32 w-full object-contain z-0 -translate-x-1/5"
    />

    <h1 className="relative text-7xl font-bold text-center text-gray-700 z-10">
      Hands Together
    </h1>
  </div>

  <div className="mt-24 px-4 sm:px-8 flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 w-3/5 mb-8">
      <img
        src={charity1}
        alt="People helping with donations"
        className="rounded-l-lg shadow-lg object-cover w-full h-64 sm:h-48 md:h-64 lg:h-80"
      />
      <img
        src={charity2}
        alt="more donation help"
        className="shadow-lg object-cover w-full h-64 sm:h-48 md:h-64 lg:h-80"
      />
      <img
        src={charity3}
        alt="Donations box"
        className="rounded-r-lg shadow-lg object-cover w-full h-64 sm:h-48 md:h-64 lg:h-80"
      />
    </div>
  </div>

  <div className="w-2/3 text-center flex flex-col items-center justify-center pb-16">
    <p className="text-gray-700 text-lg leading-relaxed mb-6 px-4 sm:px-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam natoque
      aliquet aptent aliquam montes. Nulla posuere sem faucibus fusce tempus
      vel netus. Maecenas in in facilisi sit risus inceptos.
      Sem consectetur nec pellentesque placerat vulputate tincidunt facilisis
      eget. Gravida mauris amet cras, vehicula dui ridiculus. Magnis netus urna
      dictum, scelerisque nulla purus aliquam.
      Sem consectetur nec pellentesque placerat vulputate tincidunt facilisis
      eget. Gravida mauris amet cras, vehicula dui ridiculus. Magnis netus urna
      dictum, scelerisque nulla purus aliquam.
      Sem consectetur nec pellentesque placerat vulputate tincidunt facilisis
      eget. Gravida mauris amet cras, vehicula dui ridiculus. Magnis netus urna
      dictum, scelerisque nulla purus aliquam.
    </p>

    <p className="text-gray-700 text-lg leading-relaxed px-4 sm:px-8">
      Sem consectetur nec pellentesque placerat vulputate tincidunt facilisis
      eget. Gravida mauris amet cras, vehicula dui ridiculus. Magnis netus urna
      dictum, scelerisque nulla purus aliquam.
      Sem consectetur nec pellentesque placerat vulputate tincidunt facilisis
      eget. Gravida mauris amet cras, vehicula dui ridiculus. Magnis netus urna
      dictum, scelerisque nulla purus aliquam.
      Sem consectetur nec pellentesque placerat vulputate tincidunt facilisis
      eget. Gravida mauris amet cras, vehicula dui ridiculus. Magnis netus urna
      dictum, scelerisque nulla purus aliquam.
    </p>
  </div>
</div>

  );
};

export default Hero;





