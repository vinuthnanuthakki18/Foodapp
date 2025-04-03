import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "./Head";
import { BounceLoader } from "react-spinners";
import axios from "axios";
import { update } from "../../redux/authSlice";
import API_BASE_URL from "../../../config";

function Profile() {
  const userProfile = useSelector((state) => state.auth.user);
  const [member, setMemberSince] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [dateOfBirth, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [res, setRes] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userProfile) {
      setMemberSince(userProfile?.createdAt?.slice(0, 10) || "");
      setDob(userProfile?.dateOfBirth?.slice(0, 10) || "");
      setGender(userProfile?.gender);
      setIsLoading(false);
    }
  }, [userProfile]);

  const handleSave = async (e) => {
    if (e) e.preventDefault();

    if (
      (!newPassword.trim() &&
        dateOfBirth === userProfile?.dateOfBirth &&
        gender === userProfile?.gender) ||
      (!isEditing && !newPassword)
    ) {
      setMessage("No changes detected.");
      return;
    }

    const updateData = {
      _id: userProfile._id,
      dateOfBirth,
      gender,
    };

    if (newPassword.trim()) {
      updateData.password = newPassword;
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/update`,
        updateData
      );
      if (response.status === 200) setRes(true);
      dispatch(update(response.data.user));
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Update failed");
    }

    setIsEditing(false);
    setNewPassword("");
  };

  return isLoading ? (
    <div className="flex justify-center items-center min-h-screen">
      <BounceLoader color="#36d7b7" />
    </div>
  ) : (
    <div className="min-h-screen bg-slate-50 pt-16 px-4 sm:px-6">
      <Head className="fixed" isSearch={true} />

      <div className="max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto rounded-lg shadow-lg bg-white mt-6 p-6 sm:p-8">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-gray-900 text-lg sm:text-xl">
            Hey there,{" "}
            <span className="text-orange-500">{userProfile?.name}</span>!
          </h1>
          <button
            className={`p-2 text-sm rounded-md text-white transition ${
              isEditing
                ? "bg-green-500 hover:bg-green-600"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        <form className="space-y-4 mt-4" onSubmit={handleSave}>
          <div>
            <label className="block font-medium text-gray-700">Name:</label>
            <input
              type="text"
              value={userProfile?.name}
              className="w-full p-2 border rounded bg-gray-100 text-sm"
              disabled
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Email Address:
            </label>
            <input
              type="text"
              value={userProfile?.email}
              className="w-full p-2 border rounded bg-gray-100 text-sm"
              disabled
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Reset Password:
            </label>
            <input
              type="password"
              value={isEditing ? newPassword : ""}
              className={`w-full p-2 border rounded text-sm ${
                isEditing ? "bg-white" : "bg-gray-100"
              }`}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={!isEditing}
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Member Since:
            </label>
            <input
              type="text"
              value={member}
              className="w-full p-2 border rounded bg-gray-100 text-sm"
              disabled
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Date of Birth:
            </label>
            <input
              type="date"
              value={dateOfBirth}
              className={`w-full p-2 border rounded text-sm ${
                isEditing ? "bg-white" : "bg-gray-100"
              }`}
              onChange={(e) => setDob(e.target.value)}
              disabled={!isEditing}
              min="1960-01-01"
              max="2016-12-31"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Gender:</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  disabled={!isEditing}
                />
                Male
              </label>

              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  disabled={!isEditing}
                />
                Female
              </label>

              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === "other"}
                  onChange={(e) => setGender(e.target.value)}
                  disabled={!isEditing}
                />
                Other
              </label>
            </div>
          </div>

          {message && (
            <p
              className={`text-sm mt-1 ${
                res ? "text-green-600" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Profile;
