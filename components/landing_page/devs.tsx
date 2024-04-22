import React from 'react'
import ArisPhoto from "@/public/Profile Picture Aris.jpg";
import MilaPhoto from "@/public/mila-photo-2-cropped.jpeg";
import MarvinPhoto from "@/public/marvin-photo.jpeg";
import Image from 'next/image';
import Link from 'next/link';


type Props = {}

const Devs = (props: Props) => {
    return (
        <div className="flex justify-center gap-10">
          <Link
            href="https://www.linkedin.com/in/marvin-saputra/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-lg bg-red-400 bg-opacity-20 backdrop-blur-md transform hover:scale-105 transition-transform"
          >
            <Image
              src={MarvinPhoto}
              alt="Developer 1"
              width={80}
              height={80}
              className="rounded-full mb-4"
            />

            <h3 className="text-white font-semibold">Marvin Saputra</h3>
            <p className="text-white">Cloud Engineer</p>
            <p className="text-white">PT. Boer Technology</p>
          </Link>
    
          <Link
            href="https://www.linkedin.com/in/leaderdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-lg bg-blue-400 bg-opacity-20 backdrop-blur-md relative transform hover:scale-105 transition-transform"
            style={{ marginTop: "-30px" }}
          >
            <Image
              src={ArisPhoto}
              alt="Leader Developer"
              width={80}
                height={80}
              className="rounded-full mb-4"
            />
            <h3 className="text-white font-semibold">Aris Septanugroho</h3>
            <p className="text-white">Machine Learning Engineer</p>
            <p className="text-white">Demandlane</p>
            <div className="absolute top-0 left-0 w-full h-full border-2 border-blue-400 rounded-lg opacity-20"></div>
          </Link>


          <Link
            href="https://www.linkedin.com/in/mila-nabila/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-lg bg-white bg-opacity-20 backdrop-blur-md relative transform hover:scale-105 transition-transform"
          >
            <Image
            src={MilaPhoto}
            alt="Developer 2"
            width={80}
            height={80}
            className="rounded-full mb-4"
            />
            <h3 className="text-white font-semibold">Mila Nabila</h3>
            <p className="text-white">Network Engineer</p>
            <p className="text-white">PT. CIGS Indonesia Digital</p>
          </Link>
            </div>
      );
}

export default Devs