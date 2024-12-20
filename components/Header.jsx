import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

const Header = () => {
  const [email, setEmail] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const res = await axios.post('/api/email', formData);
    if (res.data.success) {
      toast.success(res.data.message);
      setEmail("");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="py-5 px-5 md:px-12 lg-px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt=""
          className="w-[130px] sm:w-auto"
        />
        
        <Link href="/admin/addBlog"  className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Add post
          <Image src={assets.arrow} />
        </Link>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blog</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          inventore qui in nihil quo recusandae, sed perspiciatis accusantium
          exercitationem maiores quis non officia cum beatae ipsam ea doloribus
          mollitia voluptates!
        </p>
        <form
          onSubmit={handelSubmit}
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
