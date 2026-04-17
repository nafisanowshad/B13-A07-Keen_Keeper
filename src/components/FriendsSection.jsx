import React from "react";
import { useEffect, useState } from "react";

const FriendsSection = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("../../public/fakedata.json")
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  return (
    <div className="bg-base-200 pb-20">
      <div className="p-10 w-11/12 mx-auto">
        <hr className="border-gray-200 shadow-sm mb-10" />

        <div
          key={person.id}
          className="card bg-white shadow-xl p-6 flex flex-col items-center"
        >
          <div className="avatar mb-4">
            <div className="w-24 rounded-full">
              <img src={person.picture} alt={person.name} />
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-800">{person.name}</h2>
          <p className="text-gray-500 text-sm mb-2">
            {person.days_since_contact}d ago
          </p>

          <div className="flex gap-2 mb-4">
            {person.tags.map((tag, index) => (
              <span
                key={index}
                className="badge badge-md bg-green-100 text-green-700
                                font-bold border-none uppercase text-[12px]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            className={`badge badge-sm text-white border-none rounded-full px-4 py-4 font-semibold ${
              person.status === "Overdue"
                ? "bg-red-600"
                : person.status === "Almost Due"
                  ? "bg-yellow-500"
                  : "bg-green-950"
            }`}
          >
            {person.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsSection;
