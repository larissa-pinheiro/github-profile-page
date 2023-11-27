import { useEffect, useState } from "react";

import userLocationIcon from "../assets/icons/person-pin.svg";

export default function Profile() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/larissa-pinheiro')
      .then(response => response.json())
      .then(data => setUserInfo(data))
  }, [userInfo])

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src={userInfo.avatar_url} alt="Avatar" className="rounded-full h-40 mb-4" />

      <div className="flex flex-col justify-center items-center w-[21rem] gap-1">
        <h2>{userInfo.name}</h2>
        <p className="flex gap-2">
          <img src={userLocationIcon} alt="Location Icon" />
          {userInfo.location}
        </p>
        <p>{userInfo.bio}</p>
        <a href={userInfo.html_url} className="p-3 border rounded-xl mt-2 hover:bg-gray-400 transition-all">Acessar Perfil</a>
      </div>

      {/* <Repositories /> */}
    </div>
  )
}
