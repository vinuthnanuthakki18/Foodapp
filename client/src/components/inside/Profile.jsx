import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Head from "./Head";
import { BounceLoader } from "react-spinners";
import axios from "axios";
import { update } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

function Profile() {
  const userProfile = useSelector((state) => state.auth.user);
  const [member, setMemberSince] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [dateOfBirth, setDob] = useState("");
  const [gender, setGender] =useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hey vinnu", userProfile);
    if (userProfile) {
      setMemberSince(userProfile?.createdAt?.slice(0, 10) || "");
      setDob(userProfile?.dateOfBirth?.slice(0, 10) || "");
      setGender(userProfile?.gender);
      setIsLoading(false);
    }
  }, [userProfile]);

  const handleSave = async (e) => {
    if (e) e.preventDefault(); // Check if event exists before calling preventDefault()
  
    // Prevent submission if no changes are detected
    if ((!newPassword.trim() && dateOfBirth === userProfile?.dateOfBirth && gender === userProfile?.gender) || (!isEditing && !newPassword)) {
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
      const response = await axios.post("http://localhost:5000/api/update", updateData);
      dispatch(update(response.data.user));
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Update failed");
    }
  
    setIsEditing(false);
    setNewPassword(""); // Reset password input after save
  };
  
  

  return isLoading ? (
    <BounceLoader color="#36d7b7" />
  ) : (
    <div className="min-h-screen bg-slate-50 mt-24">
      <Head className="fixed"/>
      <div className="max-w-md mx-auto dataform flex flex-col justify-center rounded-lg shadow-lg bg-white mt-6 p-4">
        <div className="flex justify-between">
        <h1 className="font-bold text-gray-900 text-2xl">
          Hey there! <span className="text-orange-500">{userProfile?.name}</span>
        </h1>
        <button
  className={`p-2 w-[80px] rounded-md text-white ${isEditing ? "bg-green-500" : "bg-orange-500"}`}
  onClick={() => {
    if (isEditing) {
      handleSave(); // Call save function when in edit mode
    } else {
      setIsEditing(true); // Enable editing mode
    }
  }}
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
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Email Address:</label>
            <input
              type="text"
              value={userProfile?.email}
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Reset Password:</label>
            <input
              type="password"
              value={isEditing ? newPassword : ""}
              className={`w-full p-2 border rounded ${isEditing ? "bg-white" : "bg-gray-100"}`}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={!isEditing}
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Member Since:</label>
            <input
              type="text"
              value={member}
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Date of Birth:</label>
            <input
              type="date"
              value={dateOfBirth}
              className={`w-full p-2 border rounded ${isEditing ? "bg-white" : "bg-gray-100"}`}
              onChange={(e) => setDob(e.target.value)}
              disabled={!isEditing}
              min="1960-01-01"
              max="2016-12-31"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Gender : </label>
              <div className="flex gap-2">
                <label htmlFor="">
                  <input disabled={!isEditing} type="radio" name="gender" value="male" checked={gender === "male"} onChange={(e)=>setGender(e.target.value)}/>
                  Male</label>

                <label htmlFor="">
                  <input disabled={!isEditing} type="radio" name="gender" value="female" checked={gender === "female"} onChange={(e)=>setGender(e.target.value)}/>
                  Female</label>

                <label htmlFor="">
                  <input disabled={!isEditing} type="radio" name="gender" value="other" checked={gender === "other"} onChange={(e)=>setGender(e.target.value)}/>
                  Other</label>
              </div>
          </div>
          {message && <p className="text-sm text-red-500 mt-1">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Profile;
